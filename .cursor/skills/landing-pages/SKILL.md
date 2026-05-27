---
name: landing-pages
description: >-
  Plans and builds high-converting standalone landing pages using proven structures,
  swipe-file patterns from 40+ real examples, and industry templates. Use when creating
  landing pages, squeeze pages, lead capture, clickthrough pages, campaign URLs, or
  when the user wants Netflix/SEMrush-style conversion-focused layouts. Covers message
  match, USP anatomy, section order, forms, proof placement, and mobile/speed QA. For
  post-launch optimization see page-cro; for ads see ad-creative; for copy polish see
  copywriting.
---

# Landing Pages

Build **standalone, campaign-specific pages** with **one primary CTA** and **no leaking navigation**. Synthesized from Unbounce (fundamentals, anatomy, [40 examples](https://unbounce.com/landing-page-examples/best-landing-page-examples/)), Copyhackers, CXL, HubSpot, and conversion research.

## Quick start (agent workflow)

When the user asks to create a landing page:

1. **Brief** — campaign, traffic source, single goal, audience, offer (see §1 below)
2. **Pick type** — lead gen (form) vs clickthrough (button)
3. **Pick structure** — [structures.md](structures.md): 5-element (default) or 7-block (long B2B/story)
4. **Pick patterns** — [patterns.md](patterns.md): 1 hero + 2–3 proof/layout patterns from swipe file
5. **Pick industry outline** — [industry-templates.md](industry-templates.md) if vertical is known
6. **Draft copy** — use templates below; PAS if pain-aware traffic
7. **Humanize copy** — run all user-facing text through [.cursor/skills/humanizer/SKILL.md](../humanizer/SKILL.md) ([blader/humanizer](https://github.com/blader/humanizer)); remove AI patterns before implement
8. **Implement** — no nav; proof at friction; mobile CTA; 1–2s load target
9. **QA** — [checklist.md](checklist.md)

Output: planning doc + section copy + implementation notes (or code/Webflow components per project).

For **CyCommSec NIS2 paid LP**, canonical copy lives in [`wireframes/nis2-landing-copy.md`](../../wireframes/nis2-landing-copy.md) — update that file before HTML/Webflow.

## When to use a landing page (not a homepage)

| Use landing page | Use homepage / site |
|------------------|---------------------|
| Paid search, paid social, email CTA destination | Brand exploration, multiple products |
| Single offer, signup, or purchase | Jobs, press, terms, community |
| Message match from one ad or email | General “learn about us” |

**Rule:** Fewer links → higher conversion. Remove global nav, footer link farms, and secondary journeys.

## Page types

| Type | CTA | Best for |
|------|-----|----------|
| **Lead gen** | Short form | B2B, ebooks, webinars, events, quotes |
| **Clickthrough** | Button → checkout / app / next step | Ecommerce, SaaS trial start |

One primary goal per page.

## Core anatomy (Unbounce 5 elements)

Map every section to one element — details in [structures.md](structures.md):

1. **USP** — Headline + subhead (+ reinforcing mid-page + closing before final CTA on long pages)
2. **Hero shot** — Product in context; real people; avoid fake stock
3. **Benefits** — Outcome-first; features support mechanism
4. **Social proof** — At form, price, and bold claims
5. **Single CTA** — Conversational button copy; minimal form

**3-second test:** What is this? Who is it for? What do I do next?

## Message match (non-negotiable)

Traffic promise = headline + above-fold offer. Echo ad keyword, discount, or audience (e.g. job seekers only). No bait-and-switch.

## Default section order

**Short (Netflix / Calm):** Hero (headline + subhead + CTA/form) → 3 benefits → optional collapsible FAQ → final CTA

**Standard:** Hero → problem (2–3 bullets) → solution/benefits → how it works (3 steps) → proof → offer/FAQ → final CTA

**Long (LinkedIn / B2B):** Hero + jump links → segments of benefits → proof blocks → FAQ → repeated CTAs

**Story (Grass Roots):** Hero video → narrative problem → why us → proof → offer CTA

Choose length by commitment level — see length table in [structures.md](structures.md).

## Pattern library (40 examples)

Do not use every pattern on one page. Select from [patterns.md](patterns.md):

| Need | Pattern |
|------|---------|
| Minimal signup | One-field form, &lt;350 words, FAQ collapsed |
| SaaS trial | People + product hero; stat near CTA; jump links |
| Ecommerce sale | Sale headline; grid; strikethrough prices |
| DTC product | Annotated product; vs alternatives; specs |
| Pain-aware | Problem headline + solution subhead above fold |
| B2B wholesale | Short page; process diagram; light form |
| Local booking | Literal offer; 3-step how-it-works; testimonials |

Full index: goal → examples (Netflix, SEMrush, Coco Village, etc.) in [patterns.md](patterns.md).

## Build workflow checklist

```
- [ ] 1. Brief
- [ ] 2. Type & goal
- [ ] 3. Structure (5-element vs 7-block)
- [ ] 4. Patterns (hero + proof)
- [ ] 5. Industry template (if applicable)
- [ ] 6. Copy + wireframe order
- [ ] 7. UI / implementation
- [ ] 8. Pre-launch QA
```

### 1. Brief

- Campaign + traffic source (PPC keyword, email subject, social creative)
- Single conversion goal + metric
- Audience segment + awareness
- Offer + urgency (only if true)

Read `.agents/product-marketing-context.md` when present.

### 2–5. Structure & patterns

Document choices in planning output:

```markdown
## Structure: 5-element | 7-block
## Patterns: [hero pattern], [proof pattern], …
## Industry: SaaS trial | Ecommerce DTC | …
```

### 6. Copy rules

- Headline: useful, specific, message-matched (not vague cleverness)
- Subhead: who + what they get
- CTA: value + action (“Start my free trial”, “Get the 2026 guide”)
- Forms: minimum fields; labels above inputs; 3 fields common starting point for cold traffic
- FAQ: collapsible for pricing/objections (Netflix pattern)
- Video: only if it states pain → solution; don’t hide CTA

**Copy frameworks:** Problem → Solution → Outcome (HubSpot); PAS for pain-aware ads (Copyhackers).

### 7. UI / implementation

**Exclude:** Global nav, blog sidebars, competing primary CTAs, unrelated links

**Include:** One CTA color; contrast; semantic forms; analytics on conversion; lazy-load below fold

**Long pages:** Repeat CTA 2–3×; anchor/jump links optional; same destination OK with varied CTA labels (Branch pattern)

Match project stack (Webflow, Next.js, etc.).

### 8. Pre-launch QA

Full list: [checklist.md](checklist.md)

## A/B testing order

1. Headline / USP → 2. Value prop → 3. CTA copy & placement → 4. Proof type & placement → 5. Form length → 6. Hero media → 7. Section order

One structural change per test.

## Traffic sources

| Source | LP focus |
|--------|----------|
| Paid search | Keyword + ad = headline; one offer per ad group |
| Paid social | Visual match; cold = shorter form |
| Email | Subject line = hero promise |
| Organic | Balance SEO + single CTA if one URL serves both |

## Output templates

### Planning doc

```markdown
# Landing page: [Campaign]

## Goal & metric
## Traffic & message match
- Ad/email: "..."
- Headline: "..."

## Type: Lead gen | Clickthrough
## Structure: 5-element | 7-block
## Patterns: ...
## Sections (ordered)
1. ...
## Form fields
## Proof assets needed
```

### Section copy stub

```markdown
## Hero
**Headline:**
**Subhead:**
**CTA:**

## Benefits (outcome-led)
- 

## Proof (place near form)
**Quote / logos / stat:**

## FAQ (collapsible items)
- 

## Final CTA
**Headline:**
**Button:**
```

## Reference files

| File | Use |
|------|-----|
| [structures.md](structures.md) | Frameworks, length, CTA/form, test order |
| [patterns.md](patterns.md) | Swipe-file from 40 Unbounce examples |
| [industry-templates.md](industry-templates.md) | Section outlines by vertical |
| [checklist.md](checklist.md) | Pre-launch & FAQ |
| [sources.md](sources.md) | Full article bibliography |

## Related skills

- **page-cro** — Optimize existing pages
- **copywriting** / **copy-editing** — Headlines and body
- **ad-creative** / **paid-ads** — Campaigns feeding the LP
- **form-cro** — Complex forms
- **signup-flow-cro** — Post-click flows
- **analytics-tracking** — Events and attribution
