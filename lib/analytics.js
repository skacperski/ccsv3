/**
 * CyCommSec — attribution & event layer
 * Niezależny od GA4/GTM. Pushuje do window.dataLayer (GTM odbierze po dodaniu kontenera).
 *
 * Użycie:
 *   CCS.pushEvent('survey_start', { cta_location: 'hero' });
 *   CCS.getAttribution();       // { gclid, utm_*, variant, ... }
 *   CCS.grantConsent();         // wywołaj po akceptacji CMP (jeśli requireConsent: true)
 *
 * Konfiguracja (przed załadowaniem skryptu):
 *   window.CCS_ANALYTICS_CONFIG = { requireConsent: true };
 */
(function () {
  'use strict';

  /* ================================================================
     Config
  ================================================================ */
  var cfg = Object.assign({
    cookieName:     'ccs_attr',
    cookieDays:     90,
    requireConsent: false   // true = wstrzymaj zapis cookie do CCS.grantConsent()
  }, window.CCS_ANALYTICS_CONFIG || {});

  /* ================================================================
     Helpers
  ================================================================ */
  function getParam(name) {
    return new URLSearchParams(window.location.search).get(name) || '';
  }

  function parseCookie(name) {
    var re = new RegExp('(?:^|; )' + name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '=([^;]*)');
    var m = document.cookie.match(re);
    try { return m ? JSON.parse(decodeURIComponent(m[1])) : null; } catch (e) { return null; }
  }

  function writeCookie(name, value, days) {
    var exp = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = name + '=' + encodeURIComponent(JSON.stringify(value))
      + '; expires=' + exp + '; path=/; SameSite=Lax';
  }

  function persist(data) {
    if (cfg.requireConsent && !window.CCS_CONSENT_GRANTED) return;
    writeCookie(cfg.cookieName, data, cfg.cookieDays);
    try { localStorage.setItem(cfg.cookieName, JSON.stringify(data)); } catch (e) {}
  }

  function readStored() {
    var fromCookie = parseCookie(cfg.cookieName);
    if (fromCookie) return fromCookie;
    try { return JSON.parse(localStorage.getItem(cfg.cookieName) || 'null'); } catch (e) { return null; }
  }

  /* ================================================================
     Variant resolution — mirrors resolveVariantFromUrl() z HTML
  ================================================================ */
  function resolveVariant() {
    var v = getParam('variant');
    if (v) return v;
    var utmC = getParam('utm_campaign');
    if (utmC && window.UTM_CAMPAIGN_MAP) return window.UTM_CAMPAIGN_MAP[utmC] || 'default';
    return 'default';
  }

  /* ================================================================
     initAttribution
     Semantyka last-click: nowy gclid/gbraid/wbraid nadpisuje.
     UTMs nadpisują gdy są w URL. Puste wartości nie nadpisują istniejących.
     variant — zawsze z bieżącego URL.
  ================================================================ */
  function initAttribution() {
    var existing = readStored() || {};

    var fromUrl = {
      gclid:        getParam('gclid'),
      gbraid:       getParam('gbraid'),
      wbraid:       getParam('wbraid'),
      utm_source:   getParam('utm_source'),
      utm_medium:   getParam('utm_medium'),
      utm_campaign: getParam('utm_campaign'),
      utm_term:     getParam('utm_term'),
      utm_content:  getParam('utm_content'),
    };

    var updated = Object.assign({}, existing);

    // Click IDs i UTMs: nadpisuj jeśli nowa wartość jest niepusta
    Object.keys(fromUrl).forEach(function (k) {
      if (fromUrl[k]) updated[k] = fromUrl[k];
    });

    // variant: zawsze aktualizuj z URL
    updated.variant = resolveVariant();

    // Metadane sesji
    updated.landing_page = updated.landing_page || window.location.pathname;
    updated.ts_first     = updated.ts_first || Date.now();
    updated.ts_last      = Date.now();

    persist(updated);
    window._ccsAttr = updated;
    return updated;
  }

  /* ================================================================
     getAttribution
  ================================================================ */
  function getAttribution() {
    return window._ccsAttr || readStored() || {};
  }

  /* ================================================================
     pushEvent
     Każdy event dostaje variant + podstawowe UTMs z atrybucji.
  ================================================================ */
  function pushEvent(name, params) {
    window.dataLayer = window.dataLayer || [];
    var attr = getAttribution();
    var payload = Object.assign({
      event:        name,
      variant:      attr.variant      || 'default',
      utm_source:   attr.utm_source   || '',
      utm_medium:   attr.utm_medium   || '',
      utm_campaign: attr.utm_campaign || '',
      gclid:        attr.gclid        || '',
    }, params || {});
    window.dataLayer.push(payload);
  }

  /* ================================================================
     gclid injection do zewnętrznych linków (survey, calendar)
     Pomija linki wewnętrzne (#anchor) i placeholder href="#"
  ================================================================ */
  function injectGclid(el) {
    var attr = getAttribution();
    if (!attr.gclid) return;
    var href = el.getAttribute('href') || '';
    if (!href || href === '#' || /^#/.test(href)) return;
    try {
      var url = new URL(href, window.location.href);
      if (!url.searchParams.get('gclid')) {
        url.searchParams.set('gclid', attr.gclid);
        el.setAttribute('href', url.toString());
      }
    } catch (e) {}
  }

  /* ================================================================
     Event wiring — odpala po DOMContentLoaded lub od razu gdy DOM gotowy
  ================================================================ */
  function wireEvents() {

    /* --- survey_start: pierwsze kliknięcie w CTA prowadzący do ankiety --- */
    var surveyStarted = false;

    function onSurveyCtaClick(e) {
      var el = e.currentTarget;
      injectGclid(el);
      if (!surveyStarted) {
        surveyStarted = true;
        pushEvent('survey_start', {
          cta_id:       el.id || '',
          cta_location: (el.closest('section') || {}).id || '',
          cta_text:     el.textContent.trim().slice(0, 80),
          card:         el.dataset.card || '',
        });
      }
    }

    // Główne przyciski CTA (hero, final, sticky, nav, karty)
    var surveyCtas = [
      document.getElementById('hero-cta-primary'),
      document.getElementById('final-cta'),
      document.getElementById('sticky-cta-mobile'),
    ];
    document.querySelectorAll('.nav-cta, .card-cta[data-card], .monument-cta').forEach(function (el) {
      surveyCtas.push(el);
    });
    surveyCtas.forEach(function (el) {
      if (el) el.addEventListener('click', onSurveyCtaClick);
    });

    /* --- calendar_click: secondary CTAs "Wolisz rozmowę?" / linki kalendarza --- */
    function onCalendarClick(e) {
      var el = e.currentTarget;
      injectGclid(el);
      pushEvent('calendar_click', {
        location: (el.closest('section') || {}).id || el.id || '',
        href:     el.getAttribute('href') || '',
      });
    }

    var heroSec = document.getElementById('hero-cta-secondary');
    if (heroSec) heroSec.addEventListener('click', onCalendarClick);

    document.querySelectorAll('.final-secondary').forEach(function (el) {
      el.addEventListener('click', onCalendarClick);
    });

    // Wyraźne linki do kalendarza (Calendly / Cal.com / data-calendar)
    document.querySelectorAll(
      'a[href*="calendly.com"], a[href*="cal.com"], a[data-calendar]'
    ).forEach(function (el) {
      el.addEventListener('click', onCalendarClick);
    });

    /* --- phone_click --- */
    document.querySelectorAll('a[href^="tel:"]').forEach(function (el) {
      el.addEventListener('click', function () {
        pushEvent('phone_click', {
          phone:    el.getAttribute('href').replace('tel:', ''),
          location: (el.closest('section') || {}).id || '',
        });
      });
    });

    /* --- email_click --- */
    document.querySelectorAll('a[href^="mailto:"]').forEach(function (el) {
      el.addEventListener('click', function () {
        pushEvent('email_click', {
          email:    el.getAttribute('href').replace('mailto:', ''),
          location: (el.closest('section') || {}).id || '',
        });
      });
    });

    /* --- lead_submit: formularze z numerem telefonu (Enhanced Conversions)
          Nie hashujemy — GTM/Google taguje po stronie klienta.
          Formularz musi mieć input[type="tel"] lub input[name="phone"].       --- */
    document.querySelectorAll('form').forEach(function (form) {
      form.addEventListener('submit', function () {
        var phoneInput = form.querySelector(
          'input[type="tel"], input[name="phone"], input[name="tel"]'
        );
        var emailInput = form.querySelector('input[type="email"], input[name="email"]');

        if (phoneInput && phoneInput.value) {
          pushEvent('lead_submit', {
            form_id: form.id || form.dataset.formId || 'unknown',
            user_data: { phone_number: phoneInput.value },
          });
        } else if (emailInput && emailInput.value) {
          // Newsletter / email-only form — osobny event (nie lead_submit)
          pushEvent('newsletter_subscribe', {
            form_id:      form.id || 'newsletter',
            email_domain: emailInput.value.split('@')[1] || '',
          });
        }
      });
    });

    /* --- gclid w payload formularzy (ukryte pole) ---
          Dodajemy hidden input do każdego formularza przy submicie.          --- */
    document.querySelectorAll('form').forEach(function (form) {
      form.addEventListener('submit', function () {
        var attr = getAttribution();
        if (!attr.gclid) return;
        if (form.querySelector('input[name="gclid"]')) return; // już jest
        var hidden = document.createElement('input');
        hidden.type  = 'hidden';
        hidden.name  = 'gclid';
        hidden.value = attr.gclid;
        form.appendChild(hidden);
      }, true); // capture — przed innymi listenerami
    });

    /* --- survey_step: wywoływany ręcznie przez kod ankiety ---
          CCS.pushEvent('survey_step', { step: 2 });                          --- */
  }

  /* ================================================================
     Public API
  ================================================================ */
  window.CCS = {
    initAttribution: initAttribution,
    getAttribution:  getAttribution,
    pushEvent:       pushEvent,

    /** Wywołaj po akceptacji zgody (gdy requireConsent: true) */
    grantConsent: function () {
      window.CCS_CONSENT_GRANTED = true;
      persist(getAttribution());
    },
  };

  /* ================================================================
     Auto-init
     Skrypt ładowany synchronicznie po inline script — DOM już gotowy,
     VARIANTS i UTM_CAMPAIGN_MAP już zdefiniowane.
  ================================================================ */
  initAttribution();

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', wireEvents);
  } else {
    wireEvents();
  }

})();
