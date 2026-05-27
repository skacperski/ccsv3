---
name: landing-pages
description: >-
  Builds high-converting standalone marketing landing pages with a single CTA,
  message match, and campaign focus. Use when creating or planning landing pages,
  squeeze pages, lead capture pages, clickthrough pages, campaign destination URLs,
  PPC/social/email landing destinations, or when the user asks how to structure a
  landing page, what to include, or homepage vs landing page differences. For
  optimizing existing pages, see page-cro. For ad copy, see ad-creative. For
  marketing copy polish, see copywriting.
---

# Landing Pages

Build **standalone, campaign-specific pages** with **one primary call to action** and **no site navigation** that leaks visitors away from conversion. Source principles: [Unbounce — What is a landing page?](https://unbounce.com/landing-page-articles/what-is-a-landing-page/).

## When to use a landing page (not a homepage)

| Use landing page | Use homepage / site |
|------------------|---------------------|
| Paid search, paid social, email CTA destination | Brand exploration, multiple products |
| Single offer, signup, or purchase | Jobs, press, terms, community |
| Message match from one ad or email | General “learn about us” |

**Rule:** Fewer links → higher conversion. Remove global nav, footer link farms, and secondary journeys unless they support the one goal.

## Page types — pick one first

| Type | CTA | Best for |
|------|-----|----------|
| **Lead gen** (squeeze / lead capture) | Short form (name, email, …) | B2B, high-ticket, list-building; ebook, webinar, event registration |
| **Clickthrough** | Button → checkout, app store, or next step | Ecommerce product focus, SaaS free trial signup, direct sale |

Do not mix multiple primary goals on one page.

## Required anatomy (every section earns its place)

1. **Headline** — Matches ad/email intent; states core value in one line; above the fold.
2. **Supporting copy** — Bullets or short paragraphs; benefits over features; no history-of-company filler.
3. **Primary CTA** — Action language (“Get started”, “Download now”); visible without scroll; repeat after key proof blocks.
4. **Form** (lead gen only) — Minimum fields; clear labels; one column on mobile.
5. **Visuals** — Product screenshots, hero image, or short video that reinforces the offer; no decorative clutter.
6. **Social proof** — Testimonials, logos, ratings, trust badges near hesitation points.
7. **Mobile** — Responsive layout; tap-friendly buttons and inputs; test thumb reach for CTA.

Optional: secondary CTA only if it does not compete (e.g. “Watch demo” vs “Start trial” — pick one primary).

## Message match (non-negotiable)

Traffic source promise = landing page promise.

- Headline echoes the ad/email keyword and offer.
- Visual style and tone align with the campaign.
- No bait-and-switch (different product, price, or audience).

Ask: *“If someone only read the ad and the headline, would they know they’re in the right place?”*

## Build workflow

Copy this checklist and track progress:

```
Landing page build:
- [ ] 1. Brief
- [ ] 2. Type & goal
- [ ] 3. Outline
- [ ] 4. Copy
- [ ] 5. UI / implementation
- [ ] 6. Pre-launch QA
```

### 1. Brief (ask or infer)

- **Campaign:** What ad, email, or channel sends traffic?
- **Single conversion goal:** Lead, trial signup, purchase, registration, download?
- **Audience segment:** Role, pain, awareness level?
- **Offer:** What do they get and why now?
- **Success metric:** Conversion rate, CPA, leads per week?

Read `.agents/product-marketing-context.md` if present before asking redundant questions.

### 2. Type & goal

Choose lead gen **or** clickthrough. Write one sentence: “When the visitor lands, they will ___.”

### 3. Outline (section order)

Default long-form flow:

1. Hero: headline + subhead + primary CTA (+ form or button)
2. Problem / agitation (optional, 2–3 bullets)
3. Solution / benefits (3–5 bullets)
4. How it works (3 steps max) or product visual
5. Social proof
6. Offer recap + FAQ (only objections that block conversion)
7. Final CTA block

**Length:** Include only content needed for the desired action. Short pages for simple offers; longer when the product needs explanation (still no off-topic “about us”).

### 4. Copy rules

- Headline: outcome or specific value, not clever vagueness.
- Subhead: who it’s for + what they get.
- CTA button: value + action (“Start my free trial”, not “Submit”).
- Forms: ask only what sales/nurture truly needs; every extra field costs conversions.
- Urgency/scarcity: only if true.

### 5. UI / implementation

**Must not include on campaign landing pages:**

- Global header nav with 5+ links
- Blog sidebar, unrelated promos, “latest news”
- Multiple competing primary buttons

**Must include:**

- One primary CTA color; sufficient contrast
- Fast load: target **1–2s**; every extra second can materially hurt conversions
- Semantic HTML + accessible labels on forms
- `noindex` only when intentional (tests, time-boxed campaigns); otherwise allow index if SEO is a channel

Match project stack (Webflow, Next.js, etc.) and existing design tokens when building in code.

### 6. Pre-launch QA

Run before shipping:

- [ ] Message match: ad/email ↔ headline ↔ offer
- [ ] Single primary CTA; no navigation leaks
- [ ] Mobile: CTA and form usable one-handed
- [ ] Form submits; thank-you or next step works
- [ ] Analytics/events on conversion action
- [ ] Page speed acceptable on 4G (Lighthouse or WebPageTest)
- [ ] Legal: privacy link if collecting PII; cookie consent if required

## Traffic source notes

| Source | Landing page implication |
|--------|---------------------------|
| **Paid search** | Keyword + ad copy match; one offer per ad group |
| **Paid social** | Visual-first; audience-specific pain; cold vs warm creative |
| **Email** | Continue thread from subject line; one CTA per email |
| **Organic** | Useful content + clear CTA; SEO is investment, not “free” day one |

Prefer **one dedicated landing page per campaign** (and per major audience segment or product when offers differ).

## A/B testing priorities

Test in this order when optimizing:

1. Headline / value proposition
2. Primary CTA copy and placement
3. Form length (lead gen)
4. Hero visual or video vs static
5. Social proof placement and type

After launch, hand off deep CRO audits to **page-cro**.

## Output templates

### Planning doc (markdown)

```markdown
# Landing page: [Campaign name]

## Goal
- Conversion: [e.g. demo request]
- Traffic: [e.g. LinkedIn ads — IT managers]

## Message match
- Ad promise: "..."
- Headline: "..."

## Type
Lead gen | Clickthrough

## Sections
1. Hero — ...
2. ...

## Form fields (if any)
- ...

## Metrics
- Primary: ...
```

### Section copy stub (for implementation)

```markdown
## Hero
**Headline:**
**Subhead:**
**CTA:**

## Benefits
- 
- 
- 

## Social proof
**Quote / logos:**

## Final CTA
**Headline:**
**Button:**
```

## Related skills

- **page-cro** — Improve conversion on an existing page
- **copywriting** / **copy-editing** — Headlines and body copy
- **ad-creative** / **paid-ads** — Ads that feed the page
- **form-cro** — Non-signup forms
- **signup-flow-cro** — Post-click registration flows
- **analytics-tracking** — Events and attribution

## Reference

Detailed checklist and FAQ patterns: [checklist.md](checklist.md)
