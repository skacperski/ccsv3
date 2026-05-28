Plan and build high-converting standalone landing pages. Use when creating landing pages, squeeze pages, lead capture, clickthrough pages, or campaign URLs. Covers message match, USP anatomy, section order, forms, proof placement, and mobile/speed QA.

Usage: `/landing-pages` — describe the campaign, traffic source, goal, and audience. The command walks through a structured planning workflow.

---

# Landing Pages

Build **standalone, campaign-specific pages** with **one primary CTA** and **no leaking navigation**. Synthesized from Unbounce (fundamentals, anatomy, 40 examples), Copyhackers, CXL, HubSpot, and conversion research.

## Quick start (agent workflow)

When the user asks to create a landing page:

1. **Brief** — campaign, traffic source, single goal, audience, offer (see §1 below)
2. **Pick type** — lead gen (form) vs clickthrough (button)
3. **Pick structure** — 5-element (default) or 7-block (long B2B/story) — details in Structures section
4. **Pick patterns** — 1 hero + 2–3 proof/layout patterns from swipe file — details in Patterns section
5. **Pick industry outline** — from Industry Templates section if vertical is known
6. **Draft copy** — use templates below; PAS if pain-aware traffic
7. **Humanize copy** — run all user-facing text through `/humanize`; remove AI patterns before implement
8. **Implement** — no nav; proof at friction; mobile CTA; 1–2s load target
9. **QA** — checklist in QA section below

Output: planning doc + section copy + implementation notes (or code per project).

**For CyCommSec NIS2 paid LP:** canonical copy lives in `copy/_shared.md` (static sections) and `copy/<variant>.md` (dynamic per campaign). Update those files before syncing to HTML — use `prompts/03-sync-copy-to-wireframes.md`.

## When to use a landing page (not a homepage)

| Use landing page | Use homepage / site |
|------------------|---------------------|
| Paid search, paid social, email CTA destination | Brand exploration, multiple products |
| Single offer, signup, or purchase | Jobs, press, terms, community |
| Message match from one ad or email | General "learn about us" |

**Rule:** Fewer links → higher conversion. Remove global nav, footer link farms, and secondary journeys.

## Page types

| Type | CTA | Best for |
|------|-----|----------|
| **Lead gen** | Short form | B2B, ebooks, webinars, events, quotes |
| **Clickthrough** | Button → checkout / app / next step | Ecommerce, SaaS trial start |

One primary goal per page.

## Core anatomy (Unbounce 5 elements)

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

## Copy rules

- Headline: useful, specific, message-matched (not vague cleverness)
- Subhead: who + what they get
- CTA: value + action ("Start my free trial", "Get the 2026 guide")
- Forms: minimum fields; labels above inputs; 3 fields common starting point for cold traffic
- FAQ: collapsible for pricing/objections (Netflix pattern)
- Video: only if it states pain → solution; don't hide CTA

**Copy frameworks:** Problem → Solution → Outcome (HubSpot); PAS for pain-aware ads (Copyhackers).

## UI / implementation

**Exclude:** Global nav, blog sidebars, competing primary CTAs, unrelated links

**Include:** One CTA color; contrast; semantic forms; analytics on conversion; lazy-load below fold

**Long pages:** Repeat CTA 2–3×; anchor/jump links optional; same destination OK with varied CTA labels (Branch pattern)

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

---

## Structures

Consolidated from Unbounce (anatomy, examples, fundamentals), Copyhackers, CXL, HubSpot, and conversion research. Use one primary structure per page; mix section types only when each block has one job.

### Framework A — Five elements (Unbounce anatomy)

| # | Element | Job | Placement |
|---|---------|-----|-----------|
| 1 | **USP** | What's special; why this offer | Main headline → supporting headline → reinforcing (mid) → closing (pre-final CTA) |
| 2 | **Hero shot** | Context of use; emotional tone | Above fold; real product/people over generic stock |
| 3 | **Benefits** | Outcome + proof of mechanism | Lead with benefit; pair with feature when needed |
| 4 | **Social proof** | Trust at hesitation points | Near form, pricing, bold claims — not only footer |
| 5 | **Single CTA** | One conversion goal | Button (clickthrough) or form (lead gen); repeat 2–3× on long pages |

**Headline test:** Useful? Urgent (if true)? Unique? Or pass the **3-second test**: What is this? Who is it for? What do I do next?

### Framework B — Seven-block decision sequence

For longer B2B, ecommerce storytelling, or high-consideration offers.

1. **First screen** — Fit, value, next step (message match + CTA)
2. **Problem context** — Pain in visitor's words (PAS: Problem)
3. **Mechanism** — How the outcome happens (PAS: Solution / product)
4. **Proof** — Testimonials, logos, stats, awards, press
5. **Offer & policy** — Price, guarantee, shipping, FAQ (collapsible if wordy)
6. **Action module** — Form or button; microcopy for hesitation
7. **Reinforcement** — Final objection handling + repeat CTA

**PAS variant (Copyhackers):** Problem → Agitate → Solution. Strong for pain-aware traffic; homepage often leads with solution — LP can lead with problem when ad promises relief.

### Framework C — Copyhackers discipline

Non-negotiables before layout:

1. No global nav / menu links
2. One primary CTA (secondary only for decided buyers, e.g. "Order now" in header)
3. Captivating headline = clear value prop, not clever for its own sake
4. Benefits in plain language
5. Social proof supports the click

**Messaging hierarchy:** Start from conversion goal → work backward → only include copy that moves toward that action. Wireframe copy in blocks before visual design.

### Framework D — HubSpot / problem-solution-outcome

Short-form narrative inside sections:

1. **Problem** — Frustration they feel
2. **Solution** — Your offer as the fix
3. **Outcome** — Life after converting

Default **above-fold stack:** Headline (value) → image/video → 1–2 lines or 3 bullets → CTA or form.

### Page length rules

| Offer complexity | Length | Examples pattern |
|------------------|--------|------------------|
| Low commitment (email, free trial no CC) | Short (1–2 screens, <350 words media/entertainment) | Netflix, Calm |
| Mid (SaaS trial, ebook) | Medium + proof | SEMrush, Campaign Monitor |
| High (B2B, finance, education) | Long + jump links + FAQ | LinkedIn Premium, Athabasca |
| Ecommerce single SKU | Medium + specs + visuals | Western Rise, Goby |
| Ecommerce sale / collection | Product grid, one sale CTA | Coco Village |

**Rule:** Only content required for the desired action. Deprioritize pricing/objections in collapsible FAQ (Netflix pattern).

### CTA copy patterns

| Weak | Strong |
|------|--------|
| Submit, Click here, Learn more | Start my free trial, Get 50% off, Download the guide |
| Sign up | Get insights (domain-specific, SEMrush) |
| Same text everywhere | Stage-specific: "Design my office" vs "See desks" (Branch) |

### Form patterns

| Traffic | Fields | Notes |
|---------|--------|-------|
| Cold / paid social | Email only or email + first name | Netflix one-field |
| Warm / retargeting | + company, role if B2B | |
| B2B wholesale | Short + optional notes | |
| SMS lead gen | Phone for PDF/resource | test channel fit |

Labels above fields beat placeholder-only. Single column on mobile.

### A/B test order

1. Headline / USP
2. Value proposition clarity
3. CTA copy + placement (above fold vs repeated)
4. Social proof type + placement (below headline vs at CTA)
5. Form length / fields
6. Hero: image vs video vs product UI
7. Page length / section order

Change one major structural variable per test.

### Technical experience

- Load target: **1–2.5s** to meaningful paint; ~12% conversion loss per extra second
- Mobile: thumb-zone CTA, 44px+ tap targets, 16px+ body text
- Video: +conversions when it addresses pain; don't block CTA; sound off by default
- Collapsible FAQ for secondary info (Netflix, Bariatric)

---

## Patterns (swipe file from 40 Unbounce examples)

Pick 1 hero pattern + 2–3 supporting patterns; don't stack every trick on one page.

### Pattern index by goal

| Goal | Go-to patterns | Reference examples |
|------|----------------|-------------------|
| Email / lead signup | One-field form, short copy, collapsible FAQ | Netflix, Amazon |
| Free trial (SaaS) | Product + people hero, stat in hero, jump links | LinkedIn, SEMrush |
| Product sale (ecommerce) | Bold sale headline, strikethrough price, product grid | Coco Village |
| Single product DTC | Hero product shot, benefit vs alternatives, tech specs | Western Rise, Goby |
| High-ticket B2B | Expert copy, process diagram, low-intensity form | Blue Forest Farms |
| Local / service booking | Crystal-clear offer line, 3-step how-it-works, testimonials | blow LTD., Rover |
| Driver / gig signup | You-focused headline, earnings visual, qualifiers | DoorDash, Lyft |
| Education enrollment | You-oriented copy, testimonials, Z-pattern | Athabasca |
| Story / lifestyle brand | Founder video, narrative scroll, reviews count | Grass Roots |
| Pain-first service | Problem headline + solution subhead above fold | Border Buddy |

### Hero patterns

**1. Short & serene (SaaS wellness)** — Minimal copy; emotional headline ("Meet [Product]"); soft palette; single clear outcome line. Use when: brand = calm, simple signup. Ref: Calm.

**2. Free-first (price-sensitive)** — Lead with "Free" or strongest price hook; professional photography showing end result. Ref: Zola.

**3. You-focused outcome (gig / side income)** — Headline = freedom, money, or identity transformation; supporting graphic with concrete numbers. Ref: DoorDash.

**4. Ultra-specific offer (local service)** — No clever wordplay: "[Service] at home"; promo code for message match from ad. Ref: blow LTD.

**5. Problem → solution above fold** — Headline = pain; subhead = "we handle it." Ref: Border Buddy.

**6. Single-offer focus (SaaS feature)** — One use case, not full platform; CTA asks for one input then "Get insights." Ref: SEMrush.

**7. People + product mix** — Photography of users + product UI / 3D features. Ref: LinkedIn Premium.

### Proof patterns

| Pattern | Implementation | Ref |
|---------|----------------|-----|
| Logo bar | Recognizable customers | SEMrush, Snackpass |
| Stat callout | "2.6× more effective…" near hero or CTA | LinkedIn |
| Review count | "500+ 5-star, 7,000 customers" | Grass Roots |
| Founder / expert video | 60–90s pain → solution | Grass Roots, CD Baby |
| Instagram UGC carousel | Handles visible | Goby |
| Press logos | Forbes, TechCrunch row | Snackpass |
| Testimonials with role | Job seekers, not generic praise | Athabasca, blow LTD. |
| Awards row | Industry badges | SEMrush |

**Placement rule:** Put proof adjacent to form, price, or strongest claim — not only page bottom.

### Offer & urgency patterns

- **Strikethrough + % off** repeated on every product CTA (Coco Village)
- **Promo code** in hero for ad tracking (blow LTD.)
- **Bundle discount** for related product (Zola save-the-dates)
- **Money-back guarantee** near hero (Goby)
- **Qualifying requirements** upfront to filter unqualified leads (DoorDash)

### Anti-patterns

| Pattern | Risk | When exception works |
|---------|------|----------------------|
| Many nav links | Leaks conversions | Amazon-level offer strength |
| Busy visual design | Cognitive overload | Brand already has demand |
| Multiple offers | Split attention | Test; default to one |
| Clever headline | Fails 3-second test | Strong brand already known |
| Long form cold traffic | Abandonment | High-intent B2B only |

---

## Industry templates

Section outlines for common verticals. Remove sections that don't serve the single conversion goal.

### SaaS (trial / demo)

**Goal:** Start trial or book demo | **Length:** Medium–long for B2B

| Section | Content |
|---------|---------|
| Hero | Outcome headline; subhead for role; CTA "Start free trial" / "Book demo"; product screenshot or people+UI |
| Social proof strip | Logos or single stat |
| Problem | 2–3 bullets on workflow pain |
| Solution | How product delivers outcome (3 steps) |
| Features → benefits | 3–4 cards; lead with benefit |
| Proof | Testimonial + case study snippet |
| FAQ | Collapsible; security, pricing, cancel |
| Final CTA | Repeat hero offer |

### Ecommerce — single product (DTC)

**Goal:** Add to cart / buy | **Length:** Medium

| Section | Content |
|---------|---------|
| Hero | Product shot; benefit headline; price/offer; CTA |
| Pain vs alternatives | Why jeans/chinos fail (Western Rise) |
| Annotated features | Visual callouts on product |
| Tech specs | Materials, sizing, care |
| Social proof | Reviews, UGC, Instagram |
| Guarantee / shipping | Reduce risk |
| Final CTA | |

### Lead magnet (ebook, PDF, webinar)

**Goal:** Email or SMS capture | **Length:** Short

| Section | Content |
|---------|---------|
| Hero | What they get + who it's for; form or 1-field |
| 3 bullets | Takeaways from resource |
| Proof | Download count, expert photo |
| FAQ | Optional collapsible |
| CTA | "Send me the guide" |

### B2B / high-ticket services

**Goal:** Contact / request quote | **Length:** Short page → human follow-up

| Section | Content |
|---------|---------|
| Hero | Expert headline; credibility line |
| Process | How you deliver (refinement steps) |
| Proof | Logos, certifications |
| Form | Short; optional notes field |
| CTA | "Request sample" / "Talk to sales" |

### Local services (booking)

**Goal:** Book appointment | **Length:** Short–medium

| Section | Content |
|---------|---------|
| Hero | Literal offer line + promo if from ad |
| Social proof | Trust for personal service |
| How it works | 3 steps |
| CTA | Book now; gentle app mention below fold |
| FAQ | Collapsible |

### Finance / insurance (lead gen)

**Goal:** Quote or callback | **Length:** Medium; compliance-aware

| Section | Content |
|---------|---------|
| Hero | Savings or protection outcome; trust badges |
| How it works | Simple steps |
| Proof | Ratings, regulated entity badges |
| Form | Minimal PII; progressive disclosure if needed |
| Legal | Disclaimers, privacy |

---

## QA checklist

### Strategy & message

- [ ] Single conversion goal defined
- [ ] Message match: ad/email ↔ headline ↔ offer above fold
- [ ] Audience segment clear (not generic "everyone")
- [ ] One primary CTA (secondary only for already-decided visitors)
- [ ] No global nav / minimal footer links

### USP & copy

- [ ] Main headline passes 3-second test
- [ ] Benefits lead outcomes; features support mechanism
- [ ] Copy length matches commitment (short for email signup; long for B2B OK)
- [ ] No company history / mission filler unrelated to CTA

### Hero & visuals

- [ ] Hero shows product in context or credible people
- [ ] Above fold: value + CTA or form visible on desktop and mobile
- [ ] Video (if used) addresses pain; doesn't delay primary action
- [ ] Images optimized (format, size, dimensions)

### Social proof

- [ ] Proof exists (testimonial, logos, stats, reviews, press)
- [ ] Proof adjacent to form, pricing, or strongest claims
- [ ] Specific attributions (name, role, company) where possible

### CTA & forms

- [ ] Button copy is value-led, not "Submit" / "Click here"
- [ ] CTA repeated on long pages (top, mid after proof, bottom)
- [ ] Form fields minimized for traffic temperature
- [ ] Labels visible (not placeholder-only)
- [ ] Privacy reassurance near form if PII collected
- [ ] Thank-you / next step works

### Mobile & performance

- [ ] CTA thumb-reachable; buttons ≥44px tap target
- [ ] Body text ≥16px on mobile
- [ ] Single-column form on mobile
- [ ] Load ~1–2.5s to meaningful content

### Technical & compliance

- [ ] Analytics/event on conversion
- [ ] UTM / attribution preserved
- [ ] GDPR/privacy link if EU PII

### Anti-patterns (fail if present)

- [ ] Multiple competing offers ("Buy" + "Demo" + "Newsletter")
- [ ] Homepage nav pasted onto campaign LP
- [ ] Long cold-traffic form
- [ ] Clever headline that hides the offer
- [ ] All proof buried in footer only
- [ ] Broken message match (ad discount ≠ page price)
