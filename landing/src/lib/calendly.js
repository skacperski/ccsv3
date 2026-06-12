// Calendly popup. Script + CSS loaded in index.html (assets.calendly.com).

export const CALENDLY_URL = "https://calendly.com/cycommsec/30min?hide_gdpr_banner=1";

/**
 * Opens the Calendly popup. Falls back to a new tab when the widget
 * script hasn't loaded yet. Returns false so it can be used in onClick.
 */
export function openCalendly(url = CALENDLY_URL) {
  if (window.Calendly && typeof window.Calendly.initPopupWidget === "function") {
    window.Calendly.initPopupWidget({ url });
    return false;
  }
  window.open(url, "_blank", "noopener,noreferrer");
  return false;
}
