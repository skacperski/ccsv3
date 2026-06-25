# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A **content + build lab** for the CyCommSec **NIS2 / KSC 2026 paid landing page** (Polish B2B cybersecurity compliance). [copy/](copy/) and [personas/](personas/) are the source of truth for all copy. The production page is built as a **React app in [landing/](landing/)** (Vite 8 + React 19 + Tailwind CSS v4 + GSAP) and deployed **directly to Vercel. No Webflow.**

The design + components were integrated from the handoff repo `heyfeelings-official/CCS-Claude-code-test` (commit `1c48bf6`); copy is wired to this repo's variant system.

The repo is split by **artifact type**, not by feature:

```
copy/        — markdown content, one file per ad campaign variant + _shared.md
personas/    — decision-maker profiles, one per campaign (input for content writer)
prompts/     — workflow prompts the team gives the agent (01 copy, 02 humanize, 03 sync)
landing/     — production React app (Vite 8 + React 19 + Tailwind v4 + GSAP)
.cursor/     — rules + skills (humanizer is mandatory for user-facing text)
vercel.json  — Vercel config (cleanUrls, landing/ as root)
```

## Team workflow

Two people work on this repo:

- **Julia (content writer, GitHub: xxtszzxx)** — owns [personas/](personas/) and [copy/](copy/). Uses [prompts/01-generate-copy-from-persona.md](prompts/01-generate-copy-from-persona.md) and [prompts/02-humanize-copy.md](prompts/02-humanize-copy.md).
- **Sebastian (dev)** — owns [landing/](landing/). Uses [prompts/03-sync-copy-to-wireframes.md](prompts/03-sync-copy-to-wireframes.md).

Flow:

```
personas/<id>.md  →  prompts/01  →  copy/<id>.md  →  prompts/02 (humanize)
                                         │
                                         ↓
                                    prompts/03 (sync)
                                         │
                                         ↓
                            landing/src/content/variants.ts
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

The React app in [landing/](landing/) uses a typed content contract:

- **Source of truth:** `copy/<variant>.md` + `copy/_shared.md`
- **Target:** `landing/src/content/variants.ts` (the `SPECS` array, one entry per variant)
- **Types:** `landing/src/content/types.ts`

Per-variant dynamic fields in `VariantSpec`:

```ts
{
  id, label, channel, campaign,
  hideCompare: boolean,
  featuredCard: "card-audit" | "card-impl" | "card-aas",
  ctaUnified: string,        // hero CTA, nav CTA, risk CTA tile, final CTA
  hero: { h1, sub, stats: [string,string,string], micro },
  // risk cards: plain strings (body-only tiles) or { title, body };
  // optional cta overrides the shared "Ankieta" tile body
  risk: { h2, lead, cards: (string | { title, body })[], cta?: { title, body } },
  service: { h2, sub },
  pricing: { lead, ctas: { audit, impl, aas } },  // per-card CTA labels — rendered
  final: { h2, sub },
  seo: { title, description }
}
```

Shared (constant across variants, edited in `variants.ts`): nav links, logo wall, timeline milestones, pillars, steps, proof stats + testimonials, pricing card structure (names/prices/features + per-card `action`: `card-audit` → survey, `card-impl`/`card-aas` → Calendly), compare table + TCO breakdown, FAQ items, experts, legal notes, footer.

`Survey` receives `surveyCtaLabel={content.hero.ctaPrimary}` — the survey section kicker matches the hero CTA of each variant. The `scope` section from the old design no longer exists.

## Copy sync process

When Julia updates `copy/`, sync to the app (`prompts/03-sync-copy-to-wireframes.md`):

1. Read all 9 `copy/<variant>.md` files + `copy/_shared.md`
2. Map each field **verbatim** to the matching field in the `SPECS` array in `landing/src/content/variants.ts`:

| copy.md section | SPECS field |
|---|---|
| `## Hero → H1` | `hero.h1` |
| `## Hero → Sub` | `hero.sub` |
| `## Hero → Stats` (parse `X · Y · Z`) | `hero.stats` (3-element array) |
| `## Hero → CTA primary` | `ctaUnified` (also nav + risk CTA tile + final) |
| `## Hero → Micro` | `hero.micro` |
| `## Risk → H2 / Lead / Bullets` | `risk.h2 / risk.lead / risk.cards` |
| `## Service override → H2 / Sub` | `service.h2 / service.sub` |
| `## Pricing → Lead` | `pricing.lead` (rendered as `processNote`) |
| `## Pricing → Card CTAs` | `pricing.ctas.{ audit, impl, aas }` — **rendered on cards** |
| `## Final → H2 / Sub` | `final.h2 / final.sub` |
| frontmatter `hideCompare` | `hideCompare` |
| frontmatter `featuredCard` | `featuredCard` |

3. **Do not shorten or edit Julia's copy.** If a field has no matching component, add it to `types.ts` and the relevant JSX component.
4. Update shared data from `_shared.md` if changed: pillar bodies, step titles/bodies, FAQ question titles (keep existing answers), pricing card names/prices/features.
5. Run `cd landing && npm run dev` and walk all 9 variants via `?variant=<id>` to verify.

## Facts that cannot change without legal review

KSC signature 3 April 2026 · fines up to 10 mln EUR / 2% turnover (essential) and 7 mln EUR / 1.4% (important) · thresholds 50+ FTE or 10 mln EUR turnover · 24h/72h incident reporting · 18 sectors · gap analysis from 29 000 zł · implementation from 74 000 zł · compliance subscription from 23 256 zł/mc (Basic; Rekomendowany 26 900, Pełny 33 264) · in-house benchmark ~38 644 zł/mc.

Full list: [copy/_shared.md](copy/_shared.md) → Facts & constraints.

## Skills + rules

- **`/humanize`** ([.claude/commands/humanize.md](.claude/commands/humanize.md)) — mandatory pass on every user-facing string. Strip em dashes, AI vocabulary ("kompleksowy", "kluczowy", "umożliwia"), forced rule-of-three, anglicisms. Also available for Cursor: [.cursor/skills/humanizer/SKILL.md](.cursor/skills/humanizer/SKILL.md).
- **`/generate-copy`** ([.claude/commands/generate-copy.md](.claude/commands/generate-copy.md)) — write `copy/<variant>.md` from a persona file (Julia's workflow).
- **`/sync-copy`** ([.claude/commands/sync-copy.md](.claude/commands/sync-copy.md)) — sync copy files to `landing/src/content/variants.ts` (Sebastian's workflow).
- **`/add-tracking`** ([.claude/commands/add-tracking.md](.claude/commands/add-tracking.md)) — add GTM + dataLayer events to the landing app.

## Vercel deployment

- **Production URL:** https://ccsv3.vercel.app
- **Stack:** [landing/](landing/) → Vite build → `dist/` → Vercel
- **Config:** `vercel.json` — `installCommand: npm ci --prefix landing`, `buildCommand: npm run build --prefix landing`, `outputDirectory: landing/dist`

## Landing stack

[landing/](landing/) is a **Vite 8 + React 19 + Tailwind CSS v4 + GSAP** app (no Relume, no tailwind.config — Tailwind v4 theme lives in `src/index.css` under `@theme`). Animations: `@gsap/react` + ScrollTrigger via `src/hooks/useReveal.js` (`[data-reveal]` / `[data-reveal-group]` attributes) and `src/lib/gsap.js`. Calendly popup util in `src/lib/calendly.js` (widget script loaded in `index.html`). Survey decision-tree engine in `src/survey.js`. Fonts: IBM Plex Sans + IBM Plex Mono (Google Fonts).

## How to run / validate

```bash
cd landing
npm install       # first time only
npm run dev       # http://localhost:5173

# Force a variant via URL
open "http://localhost:5173?variant=li-ceo"
open "http://localhost:5173?utm_campaign=nis2-managed"

npm run build     # production build (no type-check step)
```

Walk all 9 variants via the **VariantBar** (fixed bar at the bottom of the page, `src/components/VariantBar.jsx`) or `?variant=<id>` URLs. Dynamic sections (hero, risk, service header, pricing processNote + card CTAs, final, SEO title) must update; static sections (logos, timeline, how, quotes, faq, footer) must not. `hideCompare: true` variants (gads-kary, gads-podlegam, li-ceo) must not render the compare table.

## Production placeholders (hard-block before deploy)

`[stanowisko]`, `[firma]`, `[sektor]`, `[LOGO]`, `[ Cytat klienta — do uzupełnienia ]` — must not ship. Listed in [copy/_shared.md](copy/_shared.md) → Production placeholders.

## Adding artifacts

- **New variant** — new `personas/<id>.md` + `copy/<id>.md` + entry in `SPECS` in `landing/src/content/variants.ts` + new `VariantId` in `types.ts`. Requires approval (tied to live ad campaigns).
- **New section / field** — add to `types.ts`, update `build()` in `variants.ts`, add component in `landing/src/components/`, wire into `landing/src/App.jsx`.

## Key component notes

- **`Hero`** — full-viewport, background image `/bg/main-bg.png`, GSAP fade-in; renders nav brand logo (`/ccs-logo-white.svg`).
- **`Risk`** — kicker-left/heading-right grid; cards accept optional `title` (variant copy may be body-only); last tile is the purple CTA card (`risk.cta`, label = `ctaUnified`).
- **`Pricing`** — per-card CTA labels from content; `card.action` decides behavior: `"survey"` scrolls to `#ankieta`, `"calendly"` opens the popup. Featured card (`pricing.featuredCard` per variant) gets the badge + purple highlight.
- **`Survey`** — kicker from `hero.ctaPrimary`; engine in `src/survey.js` (`QUESTIONS`, `RESULTS`, `computeFinalResult`); renders experts (`final.experts`, photos in `public/experts/`), legal notes and the `Footer`.
- **`Quotes`** — 3 testimonial cards + stats tile (`proof.stats`); 4th testimonial currently unused by layout.

## Known gaps (after the design integration)

- **No GTM/dataLayer tracking** — the old wireframes app emitted `cta_survey`, `calendar_open`, `survey_*` events; the integrated components don't. Port `tracking` if campaigns need it (old spec in git history: `docs/tracking.md`).
- **`copy/_shared.md` still lists the old prices** (9 900 / 24 900 / 15 900 zł) while the app ships the approved new ones (29 000 / 74 000 / 23 256 zł) — copy files need Julia's re-sync before being treated as source of truth for pricing.
