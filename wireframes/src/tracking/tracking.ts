// Centralna warstwa pomiaru (Google Tag Manager / GA4 / Google Ads).
//
// Każde zdarzenie jest wypychane do `window.dataLayer`. W GTM tworzysz wyzwalacz
// typu "Custom Event" dopasowany do pola `event`. Elementy z atrybutem
// `data-track="<id>"` są dodatkowo podświetlane przez TrackingOverlay (toggle w
// pasku na dole), żeby zespół widział, co dokładnie jest mierzone.
//
// Pełny plan kontenera GTM: docs/tracking.md

export type Conversion = "primary" | "secondary" | "micro";

export interface TrackedEvent {
  /** dataLayer `event` + wartość atrybutu data-track (jeśli element istnieje w DOM) */
  id: string;
  /** Czytelna nazwa dla zespołu */
  label: string;
  category: "CTA" | "Ankieta" | "Kalendarz" | "Wynik" | "Kontakt";
  /** Czy element jest fizycznie w DOM (badge w overlayu) czy tylko behawioralny */
  dom: boolean;
  /** Czy liczy się jako konwersja w GA4 / Google Ads */
  conversion?: Conversion;
  /** Mapowanie na zdarzenie GA4 / cel reklamowy */
  ga4?: string;
  note: string;
}

export const TRACKED_EVENTS: TrackedEvent[] = [
  // --- CTA prowadzące do ankiety -------------------------------------------
  {
    id: "cta_survey",
    label: "CTA → ankieta",
    category: "CTA",
    dom: true,
    conversion: "micro",
    ga4: "cta_click",
    note: "Każdy przycisk kierujący do ankiety (nav, hero, sekcja „Jak to wygląda”, karty cennika). Parametr `location` rozróżnia źródło.",
  },
  // --- Cykl życia ankiety ---------------------------------------------------
  {
    id: "survey_start",
    label: "Start ankiety",
    category: "Ankieta",
    dom: false,
    ga4: "survey_start",
    note: "Pierwsza udzielona odpowiedź. Mierzy realne rozpoczęcie, nie samo wyświetlenie.",
  },
  {
    id: "survey_answer",
    label: "Odpowiedź w ankiecie",
    category: "Ankieta",
    dom: false,
    ga4: "survey_answer",
    note: "Każda odpowiedź. Parametry: `step` (id pytania), `value`. Pozwala zbudować lejek krok-po-kroku.",
  },
  {
    id: "survey_contact_view",
    label: "Formularz kontaktowy",
    category: "Ankieta",
    dom: false,
    conversion: "micro",
    ga4: "form_view",
    note: "Użytkownik dotarł do ekranu z danymi kontaktowymi (tuż przed wynikiem).",
  },
  {
    id: "survey_submit",
    label: "Wysłanie ankiety",
    category: "Ankieta",
    dom: false,
    conversion: "primary",
    ga4: "generate_lead",
    note: "GŁÓWNA KONWERSJA. Lead z kompletem danych. Parametr `result` = klasyfikacja.",
  },
  {
    id: "survey_result",
    label: "Wyświetlenie wyniku",
    category: "Wynik",
    dom: false,
    ga4: "survey_result",
    note: "Pokazanie ekranu wyniku. Parametr `result`: essential / important / in-scope-domain / out-of-scope.",
  },
  {
    id: "survey_restart",
    label: "Ponowne wypełnienie",
    category: "Ankieta",
    dom: false,
    ga4: "survey_restart",
    note: "Klik „Wypełnij ponownie” na ekranie wyniku.",
  },
  // --- Wynik: dalsze akcje --------------------------------------------------
  {
    id: "result_pdf",
    label: "Pobierz raport PDF",
    category: "Wynik",
    dom: true,
    conversion: "secondary",
    ga4: "file_download",
    note: "Pobranie raportu z ekranu wyniku.",
  },
  // --- Kalendarz / rozmowa --------------------------------------------------
  {
    id: "calendar_open",
    label: "Otwarcie kalendarza",
    category: "Kalendarz",
    dom: true,
    conversion: "micro",
    ga4: "calendar_open",
    note: "Otwarcie popupu Calendly. Parametr `location`: hero / wynik / stopka / ankieta.",
  },
  {
    id: "calendar_request",
    label: "Rezerwacja w Calendly",
    category: "Kalendarz",
    dom: false,
    conversion: "secondary",
    ga4: "schedule",
    note: "Umówienie terminu w popupie Calendly (postMessage `calendly.event_scheduled`). Konwersja wtórna (Schedule).",
  },
  {
    id: "talk_link",
    label: "„Wolisz porozmawiać?”",
    category: "Kalendarz",
    dom: true,
    conversion: "micro",
    ga4: "talk_intent",
    note: "Stały link pod ankietą — intencja rozmowy zamiast ankiety.",
  },
  // --- Kontakt bezpośredni --------------------------------------------------
  {
    id: "contact_phone",
    label: "Klik w telefon",
    category: "Kontakt",
    dom: true,
    conversion: "secondary",
    ga4: "contact_phone",
    note: "Klik w numer telefonu w stopce (tel:).",
  },
  {
    id: "contact_email",
    label: "Klik w e-mail",
    category: "Kontakt",
    dom: true,
    conversion: "micro",
    ga4: "contact_email",
    note: "Klik w adres e-mail w stopce (mailto:).",
  },
];

export const TRACKED_BY_ID: Record<string, TrackedEvent> = TRACKED_EVENTS.reduce(
  (acc, e) => {
    acc[e.id] = e;
    return acc;
  },
  {} as Record<string, TrackedEvent>,
);

let currentVariant = "default";
export function setTrackingVariant(v: string): void {
  currentVariant = v;
}

let debug = false;
export function setTrackingDebug(on: boolean): void {
  debug = on;
  (window as unknown as { __ccTrackingDebug?: boolean }).__ccTrackingDebug = on;
}

interface DataLayerWindow extends Window {
  dataLayer?: Record<string, unknown>[];
}

export function initDataLayer(): void {
  const w = window as DataLayerWindow;
  w.dataLayer = w.dataLayer || [];
}

/** Wypycha zdarzenie do dataLayer (GTM). */
export function track(id: string, params: Record<string, unknown> = {}): void {
  const w = window as DataLayerWindow;
  w.dataLayer = w.dataLayer || [];
  const payload = { event: id, variant: currentVariant, ...params };
  w.dataLayer.push(payload);
  if (debug) {
    // Widoczne w konsoli, gdy włączony toggle trackingu.
    // eslint-disable-next-line no-console
    console.log("%c[track]", "color:#e11d48;font-weight:bold", payload);
  }
}
