// Content contract for the variant-driven NIS2 landing page.
// SHARED parts (scope, service pillars, how-steps, pricing cards, compare, faq,
// footer) are constant across variants; the rest is swapped per ad variant.

export type VariantId =
  | "default"
  | "gads-kary"
  | "gads-podlegam"
  | "gads-audyt"
  | "gads-wdrozenie"
  | "gads-aas"
  | "li-ceo"
  | "li-ciso"
  | "li-coo";

export type CardId = "card-audit" | "card-impl" | "card-aas";

export interface Pillar {
  num: string;
  label: string;
  h2: string;
  body: string;
}

export interface Step {
  title: string;
  body: string;
}

export interface PricingCard {
  id: CardId;
  name: string;
  desc: string;
  price: string;
  period: string;
  cta: string;
  features: string[];
}

export interface CompareRow {
  label: string;
  team: string;
  aas: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface Content {
  id: VariantId;
  label: string;
  channel: string;
  campaign: string | null;
  scopeMode: "full" | "compact";
  hideCompare: boolean;
  featuredCard: CardId;

  nav: { brand: string; cta: string };
  hero: {
    h1: string;
    sub: string;
    stats: string[]; // 3 — wyświetlane jako chipy w Header76
    ctaPrimary: string;
    ctaSecondary: string | null;
    micro?: string;
  };
  scope: {
    kicker: string;
    h2: string;
    mode: "full" | "compact";
    bullets: string[];      // full mode: 3 bullety z _shared.md
    compactText: string;    // compact mode: gads-podlegam
    cta: string;
  };
  risk: { kicker: string; h2: string; lead: string; cards: string[] };
  service: { kicker: string; h2: string; sub: string; pillars: Pillar[] };
  how: { kicker: string; h2: string; sub: string; steps: Step[] };
  proof: { h2: string; sub: string; quote: string; attribution: string };
  pricing: {
    kicker: string;
    h2: string;
    lead: string;
    featuredCard: CardId;
    cards: PricingCard[];
  };
  compare: {
    kicker: string;
    h2: string;
    sub: string;
    teamCol: string;
    aasCol: string;
    rows: CompareRow[];
    footnote: string;
  };
  faq: {
    kicker: string;
    h2: string;
    sub: string;
    items: FaqItem[];
  };
  final: {
    h2: string;
    sub: string;
    ctaPrimary: string;
    ctaSecondary: string | null;
  };
  footer: { brand: string; privacy: string; copyright: string };
}

export interface VariantMeta {
  id: VariantId;
  label: string;
  channel: string;
}
