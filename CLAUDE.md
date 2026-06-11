# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A **content + build lab** for the CyCommSec **NIS2 / KSC 2026 paid landing page** (Polish B2B cybersecurity compliance). [copy/](copy/) and [personas/](personas/) are the source of truth for all copy. The production page is built as a **React app in [wireframes/](wireframes/)** (Vite + React 18 + TypeScript + Tailwind v3 + Relume components) and deployed **directly to Vercel. No Webflow.**

The repo is split by **artifact type**, not by feature:

```
copy/        — markdown content, one file per ad campaign variant + _shared.md
personas/    — decision-maker profiles, one per campaign (input for content writer)
prompts/     — workflow prompts the team gives the agent
wireframes/  — production React app (Vite + TypeScript + Tailwind v3 + Relume)
docs/        — relume.md (stack notes) and other internal docs
assets/      — shared static assets
.cursor/     — rules + skills (humanizer is mandatory for user-facing text)
vercel.json  — Vercel config (cleanUrls, wireframes/ as root)
```

## Team workflow

Two people work on this repo:

- **Julia (content writer, GitHub: xxtszzxx)** — owns [personas/](personas/) and [copy/](copy/). Uses [prompts/01-generate-copy-from-persona.md](prompts/01-generate-copy-from-persona.md) and [prompts/02-humanize-copy.md](prompts/02-humanize-copy.md).
- **Sebastian (dev)** — owns [wireframes/](wireframes/). Uses [prompts/03-sync-copy-to-wireframes.md](prompts/03-sync-copy-to-wireframes.md).

Flow:

```
personas/<id>.md  →  prompts/01  →  copy/<id>.md  →  prompts/02 (humanize)
                                         │
                                         ↓
                                    prompts/03 (sync)
                                         │
                                         ↓
                            wireframes/src/content/variants.ts
```

## The 9 ad variants

The product runs **9 paid landing variants** (Google Ads × 5, LinkedIn × 3, default fallback). Each variant has matched files across folders:

| Variant id | Persona | Copy | Campaign |
|------------|---------|------|----------|
| `gads-kary` | [personas/gads-kary.md](personas/gads-kary.md) | [copy/gads-kary.md](copy/gads-kary.md) | nis2-kary |
| `gads-podlegam` | [personas/gads-podlegam.md](personas/gads-podlegam.md) | [copy/gads-podlegam.md](copy/gads-podlegam.md) | nis2-test |
| `gads-audyt` | [personas/gads-audyt.md](personas/gads-audyt.md) | [copy/gads-audyt.md](copy/gads-audyt.md) | nis2-audyt |
| `gads-wdrozenie` | [personas/gads-wdrozenie.md](personas/gads-wdrozenie.md) | [copy/gads-wdrozenie.md](copy/gads-wdrozenie.md) | nis2-wdrozenie |
| `gads-aas` | [personas/gads-aas.md](personas/gads-aas.md) | [copy/gads-aas.md](copy/gads-aas.md) | nis2-managed |
| `li-ceo` | [personas/li-ceo.md](personas/li-ceo.md) | [copy/li-ceo.md](copy/li-ceo.md) | nis2-li-ceo |
| `li-ciso` | [personas/li-ciso.md](personas/li-ciso.md) | [copy/li-ciso.md](copy/li-ciso.md) | nis2-li-ciso |
| `li-coo` | [personas/li-coo.md](personas/li-coo.md) | [copy/li-coo.md](copy/li-coo.md) | nis2-li-ops |
| `default` | [personas/default.md](personas/default.md) | [copy/default.md](copy/default.md) | (no UTM) |

Static sections shared across all variants: [copy/_shared.md](copy/_shared.md).

## Content contract (TypeScript)

The React app in [wireframes/](wireframes/) uses a typed content contract:

- **Source of truth:** `copy/<variant>.md` + `copy/_shared.md`
- **Target:** `wireframes/src/content/variants.ts` (the `SPECS` array, one entry per variant)
- **Types:** `wireframes/src/content/types.ts`

Per-variant dynamic fields in `VariantSpec`:

```ts
{
  id, label, channel, campaign,
  scopeMode: "full" | "compact",
  hideCompare: boolean,
  featuredCard: "card-audit" | "card-impl" | "card-aas",
  ctaUnified: string,        // hero CTA, nav CTA, final CTA
  hero: { h1, sub, stats: [string,string,string], micro },
  risk: { h2, lead, cards: string[] },
  service: { h2, sub },
  proof: { quote, attribution },
  pricing: { lead, ctas: { audit, impl, aas } },
  final: { h2, sub }
}
```

Shared (constant across variants): pillars, steps, timeline milestones, compare rows, FAQ items, footer.

`SurveySection` receives `surveyCtaLabel={content.hero.ctaPrimary}` — the survey section header is dynamic and white, matching the hero CTA of each variant.

## Copy sync process

When Julia updates `copy/`, sync to the wireframe (`prompts/03-sync-copy-to-wireframes.md`):

1. Read all 9 `copy/<variant>.md` files + `copy/_shared.md`
2. Map each field **verbatim** to the matching field in the `SPECS` array in `wireframes/src/content/variants.ts`:

| copy.md section | SPECS field |
|---|---|
| `## Hero → H1` | `hero.h1` |
| `## Hero → Sub` | `hero.sub` |
| `## Hero → Stats` (parse `X · Y · Z`) | `hero.stats` (3-element array) |
| `## Hero → CTA primary` | `ctaUnified` (also nav + final) |
| `## Hero → Micro` | `hero.micro` |
| `## Risk → H2 / Lead / Bullets` | `risk.h2 / risk.lead / risk.cards` |
| `## Service override → H2 / Sub` | `service.h2 / service.sub` |
| `## Proof` (quote) | `proof.quote` |
| `## Proof` (attribution line) | `proof.attribution` |
| `## Pricing → Lead` | `pricing.lead` |
| `## Pricing → Card CTAs` | `pricing.ctas.{ audit, impl, aas }` — **vestigial, not rendered** (see below) |
| `## Final → H2 / Sub` | `final.h2 / final.sub` |
| frontmatter `scopeMode` | `scopeMode` |
| frontmatter `hideCompare` | `hideCompare` |
| frontmatter `featuredCard` | `featuredCard` |

3. **Do not shorten or edit Julia's copy.** If a field has no matching component, add it to `types.ts` and the relevant JSX component.

> **Pricing card CTAs are hardcoded** in `Pricing20.jsx` — the featured card always shows "Oceń swoją gotowość" (→ survey scroll) and the other two show "Umów rozmowę" (→ Calendly popup). The `ctas` fields in `VariantSpec`/copy files are no longer rendered; keep them for copy-file completeness but don't wire them to UI.
4. Update shared data from `_shared.md` if changed: pillar bodies, step titles/bodies, FAQ question titles (keep existing answers), pricing card names/features.
5. Run `cd wireframes && npm run dev` and walk all 9 variants via `?variant=<id>` to verify.

## Facts that cannot change without legal review

KSC signature 19 February 2026 · fines up to 10 mln EUR / 2% turnover (essential) and 7 mln EUR / 1.4% (important) · thresholds 50+ FTE or 10 mln EUR turnover · 24h/72h incident reporting · 18 sectors · audit from 9 900 zł · implementation from 24 900 zł · aaS from 15 900 zł/mc · in-house benchmark ~38 644 zł/mc · 61.4% reduction claim.

Full list: [copy/_shared.md](copy/_shared.md) → Facts & constraints.

## Skills + rules

- **`/humanize`** ([.claude/commands/humanize.md](.claude/commands/humanize.md)) — mandatory pass on every user-facing string. Strip em dashes, AI vocabulary ("kompleksowy", "kluczowy", "umożliwia"), forced rule-of-three, anglicisms. Also available for Cursor: [.cursor/skills/humanizer/SKILL.md](.cursor/skills/humanizer/SKILL.md).
- **`/landing-pages`** ([.claude/commands/landing-pages.md](.claude/commands/landing-pages.md)) — Unbounce/Copyhackers/CXL playbook for new LP planning.

## Vercel deployment

- **Production URL:** https://ccsv3.vercel.app
- **Stack:** [wireframes/](wireframes/) → Vite build → `dist/` → Vercel
- **Config:** `vercel.json` — `installCommand: npm ci --prefix wireframes`, `buildCommand: npm run build --prefix wireframes`, `outputDirectory: wireframes/dist`

## Wireframes stack

[wireframes/](wireframes/) is a **Vite + React 18 + TypeScript + Tailwind v3** app. Section components (Hero, Pricing, FAQ…) are copy-pasted from relume.io into `wireframes/src/relume-page/components/` — the npm package (`@relume_io/relume-ui`) ships only primitives, not full sections. Deploy goes directly to Vercel.

## How to run / validate

```bash
cd wireframes
npm install       # first time only
npm run dev       # http://localhost:5173

# Force a variant via URL
open "http://localhost:5173?variant=li-ceo"
open "http://localhost:5173?utm_campaign=nis2-managed"

# Type-check + build
npm run build
```

Walk all 9 variants via the VariantSwitcher panel. Dynamic sections (hero, risk, service, proof, pricing lead, card CTAs, final) must update; static sections (how, faq, footer) must not.

## Production placeholders (hard-block before deploy)

`[stanowisko]`, `[firma]`, `[sektor]`, `[LOGO]`, `[ Cytat klienta — do uzupełnienia ]` — must not ship. Listed in [copy/_shared.md](copy/_shared.md) → Production placeholders.

## Adding artifacts

- **New variant** — new `personas/<id>.md` + `copy/<id>.md` + entry in `SPECS` in `wireframes/src/content/variants.ts` + new `VariantId` in `types.ts`. Requires approval (tied to live ad campaigns).
- **New section / field** — add to `types.ts`, update `build()` in `variants.ts`, add component in `wireframes/src/relume-page/components/`, wire into `wireframes/src/relume-page/index.jsx`.

## Key component notes

- **`Layout518`** (risk section) — desktop: sticky 240vh scroll-pin with framer-motion cards sliding in from right; mobile: static. Last card settles at ~0.95 scroll progress so section releases immediately after.
- **`Pricing20`** — featured card CTA hardcoded to `"Oceń swoją gotowość"` (survey); others to `"Umów rozmowę"` (Calendly popup via `CalendarCtaButton`). CTAs from content are ignored.
- **`SurveySection`** — kicker text sourced from `hero.ctaPrimary` (dynamic, white). Survey engine in `wireframes/src/relume-page/survey/nis2Survey.js`; Calendly util in `wireframes/src/relume-page/utils/calendly.js`.
- **`TimelineSection`** — sits between risk and service sections; shared across all variants (data in `TIMELINE` constant in `variants.ts`).
