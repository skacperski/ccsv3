// Calendly popup — zastępuje nasz własny modal kalendarza.
// Skrypt + CSS ładowane w index.html (assets.calendly.com).

export const CALENDLY_URL =
  "https://calendly.com/cycommsec/30min?hide_gdpr_banner=1";

/**
 * Otwiera popup Calendly. Jeśli widget jeszcze się nie załadował, otwiera
 * rezerwację w nowej karcie (fallback). Zwraca false, by można było użyć
 * w onClick linku bez nawigacji.
 */
export function openCalendly(url = CALENDLY_URL) {
  const w = /** @type {any} */ (window);
  if (w.Calendly && typeof w.Calendly.initPopupWidget === "function") {
    w.Calendly.initPopupWidget({ url });
    return false;
  }
  window.open(url, "_blank", "noopener,noreferrer");
  return false;
}
