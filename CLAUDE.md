# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A **single-product wireframe lab** for the CyCommSec **NIS2 / KSC 2026 paid landing page** (Polish B2B cybersecurity compliance). No build system, no dependencies, no tests — every page is one self-contained HTML file with inline `<style>` and `<script>`, opened directly in a browser or shipped as static assets.

Each file in [wireframes/](wireframes/) is a complete, independent take on the same product, exploring a different design language:

| File | Style |
|------|-------|
| [nis2-landing-wireframe.html](wireframes/nis2-landing-wireframe.html) | B&W wireframe (canonical structure + JS reference) |
| [nis2-landing-designed.html](wireframes/nis2-landing-designed.html) | IBM Carbon → re-skinned to HashiCorp dark |
| [nis2-landing-cohere.html](wireframes/nis2-landing-cohere.html) | Cohere-style (Space Grotesk, soft-stone, coral, with a Razorpay-blue band) |
| [nis2-landing-sprint.html](wireframes/nis2-landing-sprint.html) | Razorpay Sprint'26 editorial (GSAP + ScrollTrigger) |
| [nis2-landing-awwwards.html](wireframes/nis2-landing-awwwards.html) | Brutalist editorial, custom cursor, horizontal sticky scroll |

`26.html` at the repo root is the Razorpay reference saved for design inspiration.

## Source of truth for copy

[wireframes/nis2-landing-copy.md](wireframes/nis2-landing-copy.md) is the **canonical content reference**. Update it first, then sync the `VARIANTS` object + static strings into the HTML wireframes — never the other way around.

It contains:
- 9 paid variants (Google Ads × 5, LinkedIn × 3, default fallback)
- All static section copy (scope, service, how, pricing, compare, FAQ, footer)
- Facts table (fines, dates, prices, thresholds) — **do not invent numbers**
- Open questions for client (NIP/KRS in footer, 61.4% TCO methodology, `.com` vs `.pl`, expert faces, etc.)

## The shared JS contract (all wireframes)

Every wireframe HTML implements the same simulator behavior. Future iterations must keep these intact:

**Globals:**
- `VARIANTS` — object keyed by variant id (`gads-kary`, `gads-podlegam`, `gads-audyt`, `gads-wdrozenie`, `gads-aas`, `li-ceo`, `li-ciso`, `li-coo`, `default`)
- `UTM_CAMPAIGN_MAP` — maps `utm_campaign` query value → variant id

**Functions:** `applyVariant(key)`, `renderStats`, `renderBullets`, `setFeaturedCard`, `updateCardCtas`, `applyScopeMode`, `resolveVariantFromUrl`, `buildPreviewUrl`

**Required DOM IDs** (JS reaches into these by `getElementById`):
`hero-h1, hero-sub, hero-stats, hero-cta-primary, hero-cta-secondary, hero-micro, hero-badge, hero-tag, scope-list, scope-compact, scope-h2, risk-h2, risk-lead, risk-bullets, service-h2, service-sub, proof-quote, pricing-lead, pricing-cta-hint, final-h2, final-sub, final-cta, sec-compare, sim-meta, toggle-dev-meta, copy-preview-link, card-audit, card-impl, card-aas`

**Required classes:** `.sim-btn[data-variant]`, `.wf-card`, `.wf-card--featured`, `.card-cta[data-card]`, `.is-collapsed`, `.is-hidden`, `.dev-meta-hidden`, `.wf-dev-only`

**URL params:** `?variant=<id>` (explicit override) and `?utm_campaign=<campaign>` (production path) both resolve via `resolveVariantFromUrl()`.

When a new wireframe diverges (e.g. awwwards uses split-text H1, sprint uses a different drawer), it's fine to add new mechanics — but the above contract must still work so the variant simulator stays functional across all skins.

## Workflow conventions

### Editing copy
1. Edit [wireframes/nis2-landing-copy.md](wireframes/nis2-landing-copy.md) first.
2. Sync changes into every `VARIANTS` object + static HTML strings in the wireframes.
3. Run the [humanizer skill](.cursor/skills/humanizer/SKILL.md) on every user-facing string. **Mandatory** — enforced by [.cursor/rules/humanizer.mdc](.cursor/rules/humanizer.mdc). Strip em dashes, AI vocabulary ("kompleksowy", "kluczowy", "umożliwia"), forced rule-of-three, anglicisms ("OneStopShop", "as a Service", "fast track", "board"). Polish B2B register — no fluff, no fear-only framing.

### Facts that cannot change without legal review
KSC signature 19 February 2026 · fines up to 10 mln EUR / 2% turnover (essential) and 7 mln EUR / 1.4% (important) · thresholds 50+ FTE or 10 mln EUR turnover · 24h/72h incident reporting · 18 sectors · audit from 9 900 zł · implementation from 24 900 zł · aaS from 15 900 zł/mc · in-house benchmark ~38 644 zł/mc · 61.4% reduction claim.

### Adding a new variant
Adding requires updating: `UTM_CAMPAIGN_MAP`, `VARIANTS`, the sim-panel buttons in HTML, and [copy.md](wireframes/nis2-landing-copy.md). Get explicit approval before adding — variants are tied to live ad campaigns.

### Production placeholders (must not ship)
`[stanowisko]`, `[firma]`, `[sektor]`, `[LOGO]`, `[ Cytat klienta — do uzupełnienia ]`, `[ tel. opcjonalnie ]` — hard-block before deploy.

## How to "run" / validate

There is no dev server, no `npm install`, no test runner. Validation is manual:

```bash
# Open in browser for visual QA
open wireframes/nis2-landing-<variant>.html

# Force a variant via URL
open "wireframes/nis2-landing-cohere.html?variant=li-ceo"
open "wireframes/nis2-landing-sprint.html?utm_campaign=nis2-managed"

# Syntax-check the inline JS by extracting it
python3 -c "import re; print(re.search(r'<script>(.*?)</script>', open('wireframes/nis2-landing-cohere.html').read(), re.DOTALL).group(1))" > /tmp/x.js
node --check /tmp/x.js

# Tag balance + DOM contract spot-check
grep -c '<section\b' wireframes/nis2-landing-cohere.html
grep -c '</section>' wireframes/nis2-landing-cohere.html
grep -oE 'id="(hero-h1|risk-bullets|card-aas|sim-meta)"' wireframes/nis2-landing-cohere.html
```

Walk all 9 variants in the sim panel + toggle "Pokaż metadane" + test `?utm_campaign=` resolve. Dynamic sections (hero, risk, service, proof, pricing lead, card CTAs, final) must update; static sections (how, faq, footer) must not.

## Design references

- [DESIGN.md](DESIGN.md) — IBM Carbon spec (Plex Sans 300, single-blue, square corners). Reference for `nis2-landing-designed.html`.
- [DESIGN_SPRINT.md](DESIGN_SPRINT.md) — Razorpay Sprint'26 spec (TASA Orbiter + Inter Tight + Geist Mono, chapter `01/A`, blue `#0039FF` ground). Reference for `nis2-landing-sprint.html`.

For new design directions, the established workflow is: fetch a `getdesign.md/<system>` reference, extract its preview tokens, build a new self-contained HTML, keep the JS contract.

## Skills available in this repo

- [.cursor/skills/humanizer/SKILL.md](.cursor/skills/humanizer/SKILL.md) — anti-AI-writing patterns. Mandatory pass on every user-facing string.
- [.cursor/skills/landing-pages/SKILL.md](.cursor/skills/landing-pages/SKILL.md) — Unbounce/Copyhackers/CXL playbook (structures, patterns, industry templates, QA checklist). Use for new LP planning.

## Page structure (canonical, ~10 sections)

Documented in [copy.md → Page structure](wireframes/nis2-landing-copy.md). Order: header → hero (D) → scope (compact/full) → risk (D) → service (partial D) → how → proof (D quote) → pricing (D featured) → compare (hidden on top-funnel) → faq → final (D) → footer. `(D)` = variant-driven copy.

Paid LP rule: **no global nav** linking out to the main site (no service menu, no cross-sell). The page has one primary CTA — the 2-minute assessment survey at `/nis2/start`.
