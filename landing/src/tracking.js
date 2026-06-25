// Centralna warstwa pomiaru (GTM / GA4 / Google Ads).
// Każde zdarzenie ląduje w window.dataLayer; w GTM trigger = Custom Event po polu `event`.
let currentVariant = "default";
export function setTrackingVariant(v) { currentVariant = v || "default"; }
export function initDataLayer() { window.dataLayer = window.dataLayer || []; }
/** Wypycha zdarzenie do dataLayer (GTM). */
export function track(id, params = {}) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: id, variant: currentVariant, ...params });
}
