# Tracking / Google Tag Manager — plan pomiaru

Pomiar konwersji i interakcji na landing page NIS2. Źródło prawdy dla zdarzeń:
[`wireframes/src/tracking/tracking.ts`](../wireframes/src/tracking/tracking.ts) (tablica `TRACKED_EVENTS`).

## Jak to działa

1. Każda mierzona akcja wywołuje `track(id, params)`, które wypycha obiekt do
   `window.dataLayer`: `{ event: id, variant, ...params }`.
2. W GTM tworzysz **wyzwalacz „Custom Event"** dopasowany do pola `event` (np. `survey_submit`).
3. Element interaktywny ma atrybut `data-track="<id>"` (+ `data-track-location`),
   więc widać go w **overlayu** — toggle **„GTM / Tracking"** w pasku wariantów na dole.
4. Po włączeniu toggle każde zdarzenie jest też logowane w konsoli (`[track] {...}`).

## Instalacja kontenera (do zrobienia przy wdrożeniu)

W `wireframes/index.html` w `<head>` wstaw snippet GTM, a tuż po `<body>` snippet
`<noscript>`. ID kontenera: `GTM-XXXXXXX` (do uzupełnienia). `window.dataLayer` jest
inicjalizowany w aplikacji (`initDataLayer()` w `App.tsx`), więc pushe sprzed
załadowania GTM nie przepadają.

## Katalog zdarzeń

Kolory w overlayu: 🔴 konwersja główna · 🟠 konwersja wtórna · 🔵 mikrokonwersja · ⚪ pomocnicze.

| `event` (dataLayer) | Element / wyzwalacz | Parametry | GA4 | Konwersja |
|---|---|---|---|---|
| `cta_survey` | Każdy przycisk → ankieta (nav, hero, proces, karty cennika) | `location` | `cta_click` | 🔵 mikro |
| `survey_start` | Pierwsza odpowiedź w ankiecie | — | `survey_start` | — |
| `survey_answer` | Każda odpowiedź | `step`, `value` | `survey_answer` | — |
| `survey_contact_view` | Ekran danych kontaktowych | `result` | `form_view` | 🔵 mikro |
| `survey_submit` | Wysłanie ankiety (lead) | `result` | `generate_lead` | 🔴 **główna** |
| `survey_result` | Wyświetlenie wyniku | `result` | `survey_result` | — |
| `survey_restart` | „Wypełnij ponownie" | — | `survey_restart` | — |
| `result_pdf` | „Pobierz raport PDF" | `result` | `file_download` | 🟠 wtórna |
| `calendar_open` | Otwarcie popupu Calendly | `location` | `calendar_open` | 🔵 mikro |
| `calendar_request` | Rezerwacja w Calendly (`calendly.event_scheduled`) | `source` | `schedule` | 🟠 wtórna |
| `talk_link` | „Wolisz porozmawiać?" | `location` | `talk_intent` | 🔵 mikro |
| `contact_phone` | Klik w telefon (stopka) | `person` | `contact_phone` | 🟠 wtórna |
| `contact_email` | Klik w e-mail (stopka) | `person` | `contact_email` | 🔵 mikro |

Każde zdarzenie niesie też `variant` (id aktywnego wariantu reklamowego), więc
konwersje da się ciąć po kampanii bezpośrednio w GA4 / Looker.

## Wartości `location` (parametr źródła)

`nav`, `hero`, `proces`, `cennik_card-audit`, `cennik_card-impl`, `cennik_card-aas`,
`wynik`, `ankieta`, `stopka`.

## Konfiguracja GTM (kroki)

1. **Zmienne dataLayer:** `variant`, `location`, `result`, `step`, `value`.
2. **Wyzwalacze Custom Event** dla każdego `event` z tabeli.
3. **Tagi GA4 Event** — nazwa = kolumna „GA4", parametry mapowane ze zmiennych dataLayer.
4. **Konwersje GA4:** oznacz `generate_lead` (główna) i `schedule` (wtórna) jako kluczowe zdarzenia.
5. **Google Ads:** importuj `generate_lead` i `schedule` jako akcje konwersji; podSpinaj
   pod kampanie. Dla LinkedIn — odpowiednik przez LinkedIn Insight Tag na `survey_submit`.
6. **Consent Mode v2:** zdarzenia powinny respektować zgodę marketingową (baner CMP).
   Lead (`survey_submit`) to dane własne — działa też przy braku zgody marketingowej,
   ale Ads/remarketing wymaga `ad_storage=granted`.

## Calendly

Rozmowy idą przez popup Calendly (nie własny modal):
- Skrypt + CSS: `wireframes/index.html` (`assets.calendly.com/.../widget.js` + `widget.css`).
- Otwarcie: `openCalendly()` w `wireframes/src/relume-page/utils/calendly.js` → `Calendly.initPopupWidget({ url })`. URL: `CALENDLY_URL` (`https://calendly.com/cycommsec/30min?hide_gdpr_banner=1`). Fallback: nowa karta.
- Każdy `CalendarCtaButton` wywołuje `track("calendar_open" | "talk_link", { location })` i otwiera popup.
- Rezerwacja: `App.tsx` nasłuchuje `window` `message` i na `calendly.event_scheduled` wypycha `calendar_request` (Schedule). To jedyny wiarygodny sygnał ukończenia rezerwacji (formularz jest w iframe Calendly).

## Konwersja główna

Cała strona prowadzi do jednej konwersji: **wysłanie ankiety** (`survey_submit` →
`generate_lead`). Lejek: `cta_survey` → `survey_start` → `survey_answer` (×N) →
`survey_contact_view` → `survey_submit` → `survey_result`. Reszta to ścieżki
alternatywne (rozmowa: `calendar_*`, `talk_link`; kontakt bezpośredni: `contact_*`).
