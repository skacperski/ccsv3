/** Content contract for the landing components (src/components/). */

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

export interface SeoMeta {
  title: string;
  description: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface LogoItem {
  src: string;
  alt: string;
}

/** Risk tile; `title` is optional — variant copy may be body-only. */
export interface RiskCard {
  title?: string;
  body: string;
}

export interface RiskCta {
  title: string;
  body: string;
  label: string;
}

export interface TimelineMilestone {
  date: string;
  title: string;
  body: string;
  note?: string;
}

export interface Pillar {
  num: string;
  icon: string;
  label: string;
  h2: string;
  body: string;
}

export interface Step {
  title: string;
  body: string;
}

export interface ProofStat {
  value: string;
  label: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  logo?: string;
}

export type PricingAction = "survey" | "calendly";

export interface PricingCard {
  id: CardId;
  step: string;
  name: string;
  desc: string;
  price: string;
  period: string;
  action: PricingAction;
  cta: string;
  features: string[];
}

export interface CompareRow {
  label: string;
  team: string;
  aas: string;
}

export interface CostBreakdownRow {
  label: string;
  amount: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface Expert {
  name: string;
  role: string;
  phone: string;
  email: string;
  photo: string;
}

export interface Content {
  id: VariantId;
  label: string;
  channel: string;
  campaign: string | null;
  hideCompare: boolean;
  seo: SeoMeta;
  nav: { brand: string; links: NavLink[]; cta: string };
  hero: {
    h1: string;
    sub: string;
    stats: [string, string, string];
    ctaPrimary: string;
    ctaSecondary: string;
    micro: string;
  };
  logos: { caption: string; items: LogoItem[] };
  risk: { kicker: string; h2: string; lead: string; cards: RiskCard[]; cta: RiskCta };
  timeline: {
    kicker: string;
    h2: string;
    lead: string;
    milestones: TimelineMilestone[];
  };
  service: { kicker: string; h2: string; sub: string; pillars: Pillar[] };
  how: { kicker: string; h2: string; sub: string; steps: Step[] };
  proof: {
    h2: string;
    sub: string;
    stats: ProofStat[];
    moreNote: string;
    items: Testimonial[];
  };
  pricing: {
    kicker: string;
    h2: string;
    lead: string;
    processNote: string;
    featuredBadge: string;
    featuredCard: CardId;
    cards: PricingCard[];
  };
  compare: {
    kicker: string;
    h2: string;
    sub: string;
    teamCol: string;
    aasCol: string;
    teamTotal: string;
    teamBreakdown: CostBreakdownRow[];
    rows: CompareRow[];
    footnote: string;
  };
  faq: { kicker: string; h2: string; sub: string; items: FaqItem[] };
  final: {
    h2: string;
    sub: string;
    ctaPrimary: string;
    ctaSecondary: string;
    contactCta: string;
    experts: Expert[];
    notes: string[];
  };
  footer: { brand: string; privacy: string; copyright: string };
}

export interface VariantMeta {
  id: VariantId;
  label: string;
  channel: string;
}
