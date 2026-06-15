/**
 * Kanoniczne definicje wariantów LP CyCommSec NIS2/KSC 2026.
 *
 * To jest JEDYNE źródło prawdy dla:
 *   - listy 9 dopuszczalnych variant id (VARIANT_IDS)
 *   - mapy utm_campaign → variant id (UTM_CAMPAIGN_MAP)
 *   - domyślnego wariantu gdy brak ?variant= i ?utm_campaign= (DEFAULT_VARIANT)
 *
 * Jeśli dodajesz nowy wariant:
 *   1. Dodaj id do VARIANT_IDS.
 *   2. Dodaj wpis do UTM_CAMPAIGN_MAP jeśli ma kampanię.
 *   3. Zaktualizuj VARIANTS object we wszystkich designs/*.html i wireframes/wireframe.html.
 *   4. Zaktualizuj UTM_CAMPAIGN_MAP w tych samych plikach.
 *   5. Zaktualizuj VARIANT_IDS i UTM_CAMPAIGN_MAP w lib/analytics.js
 *      (komentarz „keep in sync z SPECS" wskazuje sekcję do zmiany).
 *
 * Uwaga: repo jest statycznym HTML bez bundlera — variants.ts nie jest importowany
 * przez HTML. Dane muszą być skopiowane ręcznie do analytics.js i HTML.
 */

/** 9 dopuszczalnych identyfikatorów wariantów — dokładnie te same co klucze VARIANTS w HTML. */
export const VARIANT_IDS = [
  'gads-kary',
  'gads-podlegam',
  'gads-audyt',
  'gads-wdrozenie',
  'gads-aas',
  'li-ceo',
  'li-ciso',
  'li-coo',
  'default',
] as const;

export type VariantId = typeof VARIANT_IDS[number];

/**
 * Mapa utm_campaign → variant id.
 * Brak wpisu dla 'default' — wariant bez UTM rozpoznawany po braku dopasowania.
 */
export const UTM_CAMPAIGN_MAP: Record<string, VariantId> = {
  'nis2-kary':      'gads-kary',
  'nis2-test':      'gads-podlegam',
  'nis2-audyt':     'gads-audyt',
  'nis2-wdrozenie': 'gads-wdrozenie',
  'nis2-managed':   'gads-aas',
  'nis2-li-ceo':    'li-ceo',
  'nis2-li-ciso':   'li-ciso',
  'nis2-li-ops':    'li-coo',
};

/**
 * Wariant używany gdy brak ?variant= i brak pasującego ?utm_campaign=.
 * Musi być zgodny z fallbackiem w resolveVariantFromUrl() we wszystkich HTML.
 * Obecnie: 'gads-kary' (ruch organiczny bez UTM trafia w wariant regulacyjny).
 */
export const DEFAULT_VARIANT: VariantId = 'gads-kary';

/** Helper — ta sama logika co resolveVariantFromUrl() w HTML. */
export function resolveVariant(searchParams: URLSearchParams): VariantId {
  const explicit = searchParams.get('variant') as VariantId | null;
  if (explicit && (VARIANT_IDS as readonly string[]).includes(explicit)) return explicit;
  const campaign = searchParams.get('utm_campaign') ?? '';
  if (campaign && UTM_CAMPAIGN_MAP[campaign]) return UTM_CAMPAIGN_MAP[campaign];
  return DEFAULT_VARIANT;
}
