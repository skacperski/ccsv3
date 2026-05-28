---
version: alpha
name: Razorpay-Sprint-26
source: 26.html (https://razorpay.com/sprint/26)
description: "An editorial-tech canvas inspired by Razorpay /Sprint'26. Brutalist monospace navigation, oversized display type set in TASA Orbiter, body text in Inter Tight, metadata/UI in Geist Mono. The page reads like a sprint changelog — chapters numbered 01/–06/, sub-sections lettered A/B/C/D — with each section establishing its own background mood (white, black, electric blue) so the scroll behaves like turning chapters in a book. Cards are flat, sharp-cornered tiles with monochrome blueprint-style product imagery. The single confident accent is Razorpay Blue #0039FF, used as section ground or pill CTAs, never as filigree."
---

## 1. Colors

### Brand
```
--rzp-blue          #0039FF   /* primary blue, hero accent, CTA pills, "Agentic Platform" ground */
--rzp-blue-2        #305EFF   /* secondary blue (hover/active section), softer brand */
--rzp-blue-deep     #1146FF   /* footer gradient start */
--rzp-blue-text     #6688FF   /* body text on blue ground (#68f) */
--rzp-blue-meta     #809CFF   /* sub-numbers on blue ground */
--rzp-blue-body     #99B0FF   /* light card body on blue */
--rzp-blue-headline #E5EBFF   /* card headlines on blue */
```

### Surfaces (each chapter changes the ground)
```
--surface-black     #151515   /* "agentic" chapters, payment gateway hero */
--surface-black-2   #1A1A1A   /* body default */
--surface-charcoal  #2C2C2C   /* style-guide "grey" token */
--surface-white     #FFFFFF   /* international payments */
--surface-light-1   #F0F0F0   /* "builders" tiles (n8n / Replit row) */
--surface-light-2   #EDEDED   /* D2C ground */
--surface-light-3   #E9E9E9   /* alt soft band */
--surface-tile      #FAFAFA   /* nested card surfaces */
```

### Ink (text)
```
--ink-on-dark       #FFFFFF   /* primary on black */
--ink-on-dark-2     #D0D0D0   /* secondary headline on black */
--ink-on-dark-3     #B8CBD1   /* "sky" — body text on black */
--ink-meta-dark     #8A8A8A   /* chapter numbers "01/A" on black */
--ink-muted-dark    #787878   /* card body on black */
--ink-on-light      #000000   /* primary on white */
--ink-muted-light   #5B5B5B   /* heading on light */
--ink-meta-light    #777777   /* body on light tiles */
--ink-hairline      #BBBBBB   /* table dividers on light */
--ink-hairline-dk   #363636   /* table dividers on black */
```

### Semantic
Blue is the only chromatic accent. Yellow `#E3F51A` exists as a token (`--yellow`) but is **not** used on the live page — keep in palette for special callouts only.

---

## 2. Typography

### Font stack
```css
@font-face { font-family: 'Tasa';         src: url('TASAOrbiterDisplay-Medium.otf'); }      /* 500 */
@font-face { font-family: 'Tasa_Regular'; src: url('TASAOrbiterDisplay-Regular.otf'); }     /* 400 */
@font-face { font-family: 'Tasa_Bold';    src: url('TASAOrbiterDisplay-Bold.otf'); }        /* 700 */
@font-face { font-family: 'Inter_tight';  src: url('InterTight-VariableFont_wght.ttf'); }   /* 100–900 */
@font-face { font-family: 'Geist_mono';   src: url('GeistMono-VariableFont_wght.ttf'); }    /* 100–900 */
```

### Roles
| Role | Family | Where |
|---|---|---|
| **Display / Hero** | TASA Orbiter Regular | "SPRINT 2026", chapter titles, big section headlines |
| **Sub-body editorial** | TASA Orbiter Regular | Chapter leads ("Your business has a new co-founder…") |
| **UI / Body** | Inter Tight | Body paragraphs, card headers, CTAs |
| **Meta / Nav / Code** | Geist Mono | Top nav (`01.AGENTIC STACK`), sub-numbers (`01/A`), category labels, badges, founder designation tracking |

### Scale (mobile-first base = 16px; rem-derived)
```
hero-display       144px (9rem)     Tasa_Regular  / letter-spacing -6px  / line-height 100%
chapter-headline    48px (3rem)     Tasa Medium   / letter-spacing -0.9px / line-height 90%
sub-headline        32px (2rem)     Tasa_Regular  / letter-spacing -1.3px / line-height 100%
section-lead        24px (1.5rem)   Tasa_Regular  / letter-spacing -1px   / line-height 90–100%
quote-pull          20px (1.25rem)  Tasa_Regular  / weight 200 / line-height 120%
body-lead           18px (1.125rem) Inter Tight   / weight 200 / line-height 1.25rem
body                16px (1rem)     Inter Tight   / weight 400 / line-height 1.1rem
card-header         16px (1rem)     Inter Tight   / weight 500 / line-height 140%
card-body           16px (1rem)     Inter Tight   / weight 400 / line-height 120%
nav-link            16px (1rem)     Geist Mono    / line-height 1rem
meta-number         16px (1rem)     Geist Mono    / line-height 140%   (e.g. "01/A")
caption             14px (0.875rem) Inter Tight   / weight 300 / line-height 0.75rem
cta-pill            12px (0.75rem)  Inter Tight   / weight 400 / line-height 102%
designation         12px (0.7rem)   Inter Tight   / weight 300 / letter-spacing 2px
```

### Type idioms (signatures)
- **Bold-thin contrast:** Display TASA at weight 400–500 against ultra-thin (weight 200) body Inter Tight.
- **Tight tracking on display:** `letter-spacing: -6px` on the hero "SPRINT 2026" word.
- **Wide tracking on meta:** founder designation `letter-spacing: 2px–4px` for that "broadcast lower-third" feel.
- **Mono for navigation only** — never use Geist Mono for prose; it's the system's "interface voice."

---

## 3. Spacing & Grid

### Page gutter
- Desktop: horizontal padding `66px` on most content blocks (`.leadvid-container { margin: 0 66px }`, `.marketplace-product-container { margin: 0 66px }`).
- The 66px gutter is **non-negotiable** — it's the layout's signature. Match it everywhere.

### Section vertical rhythm
| Token | Value | Used for |
|---|---|---|
| section-xl | `160px 0` | "agentic" hero chapters |
| section-lg | `90px 0` / `80px 0` | standard chapter padding |
| stack-overlap | `100px` | sections pull up 100px to create the stacked-card scroll effect |
| card-row-gap | `80px` (vertical between rows) | card-grid breathing room |
| inline-gap-card | `12px` | grid-gap on `.agentic-card-wrapper` |
| inline-gap-marketplace | `36px` | grid-gap on `.marketplace-product-container` |

### Stack/scroll trick
```css
:root { --stack-overlap: 100px; }
.stack-section {
  position: relative;
  margin-top: calc(-1 * var(--stack-overlap));
  overflow: hidden;
  will-change: transform;
}
```
Each chapter has its own `z-index` (2, 3, 4, 5, …) so chapters slide over the previous one like overlapping cards.

### Grid templates
- **Top nav:** `grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr` — seven equal columns (logo + 6 chapters).
- **Hero split:** `grid-template-columns: 0.5fr 1.25fr` — narrow text column, wide video on right (`.herointeraction-container`).
- **3-card product row:** `grid-template-columns: 1fr 1fr 1fr` with `grid-gap: 12px`.
- **Featured product row:** `grid-template-columns: 0.5fr 1fr` (text left, hero render right).
- **Feature table:** two-column grid, rows separated by `0.5px solid #BBB` (light) or `#363636` (dark), padding `32px 16px 32px 32px`.

### Breakpoints
```
≥1920px   ultrawide   (.heading1 scales up)
≤991px    tablet      (nav collapses, hero scales down)
≤767px    mobile      (single column, burger menu shown)
≤479px    small mobile
```

---

## 4. Components

### 4.1 Top navigation (sticky)
- **Full-width black bar** `background: #151515`, fixed top.
- **7 equal cells** divided by hairline borders: `border-width: 0.5px 0.25px` per cell. Outer cells get `borderl` / `borderr` modifiers that shift the outer edge to 0.5px and inner to 0.25px — this prevents double-thickness at joins.
- Logo cell on left + 6 chapter cells.
- Text: Geist Mono `1rem`, white, centered, padding `0 15px`.
- **Active state:** when scrolled into a section, that cell flips to `background-color: #305EFF` via `[data-section].is-active`.

### 4.2 Hero (first viewport)
- Height `100vh`, padding-top `100px` to clear the nav.
- Massive type: word "SPRINT" + word "2026" stacked, each `9rem` TASA Regular, `letter-spacing: -6px`.
- Body lead (right of words): Inter Tight 200, `1.125rem`, max-width 450px, padded `padding-right: 66px`.
- "Hero flip" element below: a 200px-tall horizontal stripe with `border-top` and `border-bottom` (`1px solid #B2B2B2`), animated 3D flip between front/back panels showing ticker text.
- Right side: video thumbnail with founder name + designation in Inter Tight (tracked 2–4px).

### 4.3 Chapter intro block
```
01/
Agentic Stack
Your business has a new
co-founder, and it's AI-native.
                              [video thumbnail with talking-head]
                              "Quote attributed to executive."
                              — NAME / TITLE
```
- Numbered prefix `01/` in TASA Regular, gray (`#8A8A8A` on dark, `#5B5B5B` on light).
- Chapter title: TASA Medium `3rem`, tight tracking.
- Editorial lead: TASA Regular `1.5rem`, very tight tracking, max ~350px wide.
- Two-column layout: text 5/12, video 7/12.
- Pull quote under video: TASA Regular `1.25rem` weight 200, gray `#787878`, italic-feel via thinness.

### 4.4 Sub-chapter header
```
01/A
Agentic Payments
AI-led shopping that lets customers
browse, decide, and pay…
EXPLORE >
```
- Meta number `01/A` — Geist Mono `1rem`, light-gray (`#8A8A8A` dark / `#809CFF` on blue).
- Header: TASA Regular `1.5rem`.
- Lead: Inter Tight or TASA Regular `1rem`/`1.5rem`, max ~320–420px.
- CTA inline: lowercase `EXPLORE >` or a blue pill (see 4.6).

### 4.5 Product card (3-up grid)
Used in 3-column rows like "Payments on LLMs / Razorpay for ChatGPT / Voice Payments".
```
[ wide image — usually 4:3 or square, blueprint-blue render ]
Card Header                       ← Inter Tight 500, 1rem, ink-on-(ground)
Card body text up to ~320–400px   ← Inter Tight 400, 1rem, muted gray
[READ MORE >]                     ← pill (see 4.6)
```
- Card vertical gap (image → header → body → CTA): `12px`.
- No card chrome — flat, no border, no shadow, no radius.
- Image is the visual; text below is metadata.

### 4.6 CTA pill
```css
.productcard-cta--light {
  background: #0039FF;
  color: #D0D0D0;
  width: 72px;
  height: 20px;
  font: 400 0.75rem/102% 'Inter Tight';
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  border-radius: 0;        /* sharp square pills, NOT rounded */
}
```
- Always reads `READ MORE >` (or `EXPLORE >` for chapter intros, `GET ACCESS` for the master CTA).
- On dark backgrounds: blue pill + light text.
- On blue grounds: black pill + white text.
- On white grounds: blue pill + white text.

### 4.7 Feature table (2-column, text-only)
Used for the dense feature lists ("Smart AML Risk Screening | Built-in intelligence…").
```
[ Feature name        |  Feature description                                ]
  Inter Tight 500          Inter Tight 400, #777
  ~120–200px wide          ~400px wide
  [READ MORE >]
```
- Each row: `border-bottom: 0.5px solid #BBB` (light ground) or `#363636` (dark).
- Padding per cell: `32px 16px 32px 32px` (asymmetric — more on left of feature name, more on right of description).
- Two rows × two columns at desktop; collapses to 1 column on mobile.

### 4.8 Featured product (full-bleed showcase)
Big format like "Agentic Onboarding" or "Self-Healing POS":
- Wide colored band (blue or black) spanning full viewport.
- Centered hero render (UI screenshot, device shot, or wireframe).
- Text on left: `01/B`, headline, body, CTA pill.
- Uses background images (e.g., `BG Blue.webp`, `Black BG1.webp`) with `background-position: 50%`, `background-repeat: repeat`.

### 4.9 Talking-head video thumbnail
- Aspect 16:9, dark blue ambient lighting (signature look).
- Bottom-left overlay: small play button (50px), positioned `inset: 5% auto auto 5%`.
- Bottom-right overlay: name + designation, Inter Tight, `letter-spacing: 4px` (name) and `2px` (title), padding `0 40px 10px`.

### 4.10 Footer
```css
.footer {
  background-image: linear-gradient(#1146FF, #000 100%);
  width: 100%;
}
```
- Heavy blue → black gradient.
- Two-line CTA: "AI-native fintech. / Built from India. For the world." + `GET ACCESS >` aligned right.
- Mega wordmark: `/SPRINT'26` rendered at viewport-full size, set in blue, bottom of page as a stamp/signature.

---

## 5. Imagery rules

- **All product renders are monochromatic in Razorpay Blue** (`#0039FF`-tone duotone or wireframe).
- Real objects (chairs, lamps, bags, shopping items, faces) get **CAD-blueprint treatment**: blue wireframe outlines on dark, or blue-tinted illustrations on light.
- UI screenshots are real, but framed in device chrome (phone bezel, laptop frame).
- Executive video thumbnails always use **blue rim lighting** against dark navy background — non-negotiable for brand consistency.
- No stock photography. No human avatars except executives in video frames.

---

## 6. Motion principles (signatures)

- **Hero flip:** the 200px-tall stripe with the rotating ticker is a CSS 3D flip (front and back faces, `backface-visibility: hidden`).
- **Stacked-card scroll:** sections overlap by 100px and slide up via GSAP ScrollTrigger.
- **Section color flash:** `[data-section].is-active { background-color: #305EFF !important; }` toggles the active nav cell to blue with a `transition: background-color 0.3s ease`.
- **Three.js loader:** an intro scene plays in a fixed 500vh container before the page becomes visible (`body { visibility: hidden }` until loader resolves).
- **Rive animations:** lazy-loaded via `data-lazy-rive-url` to defer until in-viewport.

---

## 7. Tone / voice of the page

- **All-caps Geist Mono for navigation/meta**, sentence case TASA for editorial.
- Section titles are **declarations**, not questions ("Agentic Stack." "International Payments.").
- Body copy is **short and assertive** — 1–2 sentences max per card, never paragraphs.
- Quotes from executives are pulled out as oversized italic-feeling thin type. They state philosophy ("We don't wait for the market to move. We build for where it's going.") — never benefits.

---

## 8. Reproduction checklist (when building a 1:1 clone)

- [ ] Fixed black top bar with 7 equal cells, hairline borders 0.25/0.5px, Geist Mono labels.
- [ ] 66px horizontal page gutter — match exactly.
- [ ] Chapters numbered `01/`–`06/`, sub-sections `A`/`B`/`C`/`D`.
- [ ] Each chapter changes ground color (black → blue → light → white → black → light).
- [ ] Hero "SPRINT 2026" at 9rem TASA with `-6px` letter-spacing.
- [ ] Stacked-card scroll: `margin-top: -100px` on subsequent sections.
- [ ] Sharp-cornered (radius 0) blue CTA pills `72×20px`, label "READ MORE >".
- [ ] Product imagery rendered in blue duotone / blueprint style.
- [ ] Talking-head videos with blue rim lighting + tracked name/title overlay.
- [ ] Footer: blue-to-black gradient + `/SPRINT'26` mega wordmark stamp.
- [ ] No rounded corners anywhere. No drop shadows. No gradients except the footer.
- [ ] No emojis, no decorative icons except the X logo mark.

---

## 9. Quick CSS variables block (drop-in starter)

```css
:root {
  /* brand */
  --rzp-blue:        #0039FF;
  --rzp-blue-2:      #305EFF;
  --rzp-blue-deep:   #1146FF;

  /* surfaces */
  --surface-black:   #151515;
  --surface-charcoal:#2C2C2C;
  --surface-white:   #FFFFFF;
  --surface-light-1: #F0F0F0;
  --surface-light-2: #EDEDED;

  /* ink */
  --ink-light:       #FFFFFF;
  --ink-light-2:     #D0D0D0;
  --ink-sky:         #B8CBD1;
  --ink-meta:        #8A8A8A;
  --ink-muted-dk:    #787878;
  --ink-dark:        #000000;
  --ink-muted-lt:    #5B5B5B;
  --ink-hairline:    #BBBBBB;
  --ink-hairline-dk: #363636;

  /* type */
  --font-display:    'Tasa', 'Tasa_Regular', Arial, sans-serif;
  --font-body:       'Inter_tight', system-ui, sans-serif;
  --font-mono:       'Geist_mono', ui-monospace, monospace;

  /* layout */
  --gutter:          66px;
  --stack-overlap:   100px;
  --section-pad:     80px 0;
  --section-pad-xl:  160px 0;

  /* card */
  --card-gap-3up:    12px;
  --card-gap-2up:    36px;

  /* radius — NONE */
  --radius:          0;
}

html, body {
  background: var(--surface-black-2, #1A1A1A);
  color: var(--ink-light);
  font-family: var(--font-body);
  font-size: 16px;
  line-height: 1.35;
}
```
