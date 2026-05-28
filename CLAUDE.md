# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A **single-product wireframe lab** for the CyCommSec **NIS2 / KSC 2026 paid landing page** (Polish B2B cybersecurity compliance). No build system, no dependencies, no tests — every page is one self-contained HTML file with inline `<style>` and `<script>`, opened directly in a browser.

The repo is split by **artifact type**, not by feature:

```
copy/        — markdown content, one file per ad campaign variant + _shared.md
personas/    — decision-maker profiles, one per campaign (input for content writer)
prompts/     — workflow prompts the team gives the agent
wireframes/  — B&W canonical skeleton
designs/     — full visual re-skins, all sharing the same JS contract
references/  — getdesign.md design system specs imported as bases for designs/
.cursor/     — rules + skills (humanizer is mandatory for user-facing text)
index.html   — Vercel hub page linking to wireframe + each design (deploy preview)
vercel.json  — minimal Vercel config (cleanUrls, no trailing slash)
```

When adding a new design under [designs/](designs/), also add a link to it in [index.html](index.html) so it shows up in the deployed preview hub.

## Team workflow

Two people work on this repo:

- **Julia (content writer, GitHub: xxtszzxx)** — owns [personas/](personas/) and [copy/](copy/). Uses [prompts/01-generate-copy-from-persona.md](prompts/01-generate-copy-from-persona.md) and [prompts/02-humanize-copy.md](prompts/02-humanize-copy.md).
- **Sebastian (dev)** — owns [wireframes/](wireframes/) and [designs/](designs/). Uses [prompts/03-sync-copy-to-wireframes.md](prompts/03-sync-copy-to-wireframes.md) and [prompts/04-build-new-design.md](prompts/04-build-new-design.md).

Flow:

```
personas/<id>.md  →  prompts/01  →  copy/<id>.md  →  prompts/02 (humanize)
                                         │
                                         ↓
                                    prompts/03 (sync)
                                         │
                                         ↓
                            wireframes/wireframe.html + designs/*.html
```

When Julia says "use `prompts/01-generate-copy-from-persona.md` to generate copy for `personas/li-ciso.md`, save to `copy/li-ciso.md`" — read the prompt template, follow it.

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

## The shared JS contract

Every HTML in [wireframes/](wireframes/) and [designs/](designs/) implements the same simulator behavior:

**Globals:** `VARIANTS` (object, 9 keys), `UTM_CAMPAIGN_MAP`
**Functions:** `applyVariant(key)`, `renderStats`, `renderBullets`, `setFeaturedCard`, `updateCardCtas`, `applyScopeMode`, `resolveVariantFromUrl`, `buildPreviewUrl`

**Required DOM IDs:**
`hero-h1, hero-sub, hero-stats, hero-cta-primary, hero-cta-secondary, hero-micro, hero-badge, hero-tag, scope-list, scope-compact, scope-h2, risk-h2, risk-lead, risk-bullets, service-h2, service-sub, proof-quote, pricing-lead, pricing-cta-hint, final-h2, final-sub, final-cta, sec-compare, sim-meta, toggle-dev-meta, copy-preview-link, card-audit, card-impl, card-aas`

**Required classes:** `.sim-btn[data-variant]`, `.wf-card`, `.wf-card--featured`, `.card-cta[data-card]`, `.is-collapsed`, `.is-hidden`, `.dev-meta-hidden`, `.wf-dev-only`

**URL params:** `?variant=<id>` (explicit) and `?utm_campaign=<campaign>` (production) both resolve via `resolveVariantFromUrl()`.

Each design can add new mechanics on top (split-text H1, custom cursor, GSAP scroll, horizontal sticky scroll) — but the above contract must keep the variant simulator working across every skin.

Full sync spec: [prompts/03-sync-copy-to-wireframes.md](prompts/03-sync-copy-to-wireframes.md).

## Facts that cannot change without legal review

KSC signature 19 February 2026 · fines up to 10 mln EUR / 2% turnover (essential) and 7 mln EUR / 1.4% (important) · thresholds 50+ FTE or 10 mln EUR turnover · 24h/72h incident reporting · 18 sectors · audit from 9 900 zł · implementation from 24 900 zł · aaS from 15 900 zł/mc · in-house benchmark ~38 644 zł/mc · 61.4% reduction claim.

Full list: [copy/_shared.md](copy/_shared.md) → Facts & constraints.

## Skills + rules

- **`/humanize`** ([.claude/commands/humanize.md](.claude/commands/humanize.md)) — mandatory pass on every user-facing string (HTML, copy). Strip em dashes, AI vocabulary ("kompleksowy", "kluczowy", "umożliwia"), forced rule-of-three, anglicisms ("OneStopShop", "as a Service", "fast track", "board", "security lead"). Also available for Cursor: [.cursor/skills/humanizer/SKILL.md](.cursor/skills/humanizer/SKILL.md).
- **`/landing-pages`** ([.claude/commands/landing-pages.md](.claude/commands/landing-pages.md)) — Unbounce/Copyhackers/CXL playbook for new LP planning. Also available for Cursor: [.cursor/skills/landing-pages/SKILL.md](.cursor/skills/landing-pages/SKILL.md).

## How to "run" / validate

No dev server, no `npm install`. Validation is manual:

```bash
# Open in browser
open wireframes/wireframe.html
open designs/design-cohere.html

# Force a variant via URL
open "designs/design-cohere.html?variant=li-ceo"
open "designs/design-cohere.html?utm_campaign=nis2-managed"

# Syntax-check the inline JS
python3 -c "import re; print(re.search(r'<script>(.*?)</script>', open('designs/design-cohere.html').read(), re.DOTALL).group(1))" > /tmp/x.js
node --check /tmp/x.js

# DOM contract spot-check
grep -oE 'id="(hero-h1|risk-bullets|card-aas|sim-meta)"' designs/design-cohere.html
```

Walk all 9 variants in the sim panel + toggle "Pokaż metadane" + test `?utm_campaign=` resolve. Dynamic sections (hero, risk, service, proof, pricing lead, card CTAs, final) must update; static sections (how, faq, footer) must not.

## Production placeholders (hard-block before deploy)

`[stanowisko]`, `[firma]`, `[sektor]`, `[LOGO]`, `[ Cytat klienta — do uzupełnienia ]`, `[ tel. opcjonalnie ]` — must not ship. Listed in [copy/_shared.md](copy/_shared.md) → Production placeholders.

## Adding artifacts

- **New variant** — requires `UTM_CAMPAIGN_MAP` update + `VARIANTS` object update in every HTML + sim-panel button + new `personas/<id>.md` + new `copy/<id>.md`. Get explicit approval (variants tied to live ad campaigns).
- **New design (re-skin)** — [prompts/04-build-new-design.md](prompts/04-build-new-design.md). Self-contained HTML, keep the JS contract.
- **New reference** — drop into [references/](references/) (see its README for the getdesign.md import flow).
