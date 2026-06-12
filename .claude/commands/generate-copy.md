Generate a `copy/<variant>.md` file for a CyCommSec NIS2 landing variant from its persona. Use this skill whenever asked to write copy, create a new variant, generate content for a persona, or produce a copy file.

Usage: `/generate-copy personas/<variant>.md` — or just describe which variant to write.

---

# Generate Copy

You are a Polish B2B copywriter writing a landing page for CyCommSec NIS2/KSC 2026.

## Input you need

1. **Persona file** — `personas/<variant>.md` (who clicked, what hurts, what tone).
2. **Shared facts** — `copy/_shared.md` (prices, dates, facts — do not alter these).
3. **Existing examples** — `copy/gads-kary.md` and `copy/li-ciso.md` (use as structural reference).

## Output format

Write `copy/<variant>.md` with YAML frontmatter + markdown sections. Match this structure exactly:

```yaml
---
variant: <id>
channel: <Google Ads | LinkedIn Ads | Direct>
campaign: <utm_campaign value>
utm: "?utm_source=...&utm_medium=...&utm_campaign=...&utm_content=..."
scopeMode: <full | compact>
hideCompare: <true | false>
featuredCard: <card-audit | card-impl | card-aas>
ctaUnified: <single short CTA text used in hero, nav, risk card, and final>
secondaryCta: <"Wolisz rozmowę? ..." | null>
persona: personas/<variant>.md
---
```

Sections (in this order):
- `## Hero` — H1 (max ~10 words), Sub (1–3 sentences), 3 stats separated by ` · `, CTA primary, Micro
- `## Risk` — H2, Lead, 3–4 bullets
- `## Service override` — H2, Sub
- `## Proof` — quote + attribution line (placeholders `[stanowisko]`, `[firma]`, `[sektor]` allowed)
- `## Pricing` — Lead, then one CTA line per card (audit / impl / aas)
- `## Final` — H2, Sub

## Rules

**Facts are untouchable.** Never change: 10 mln / 7 mln EUR fines, 9 900 / 24 900 / 15 900 zł prices, 38 644 zł/mc in-house benchmark, 61.4% reduction, 50 FTE / 10 mln EUR thresholds, 19 February 2026 KSC signature, 24h / 72h incident reporting, 18 sectors.

**Polish B2B, 2nd person plural.** "wy / wasze / macie" — not "Pan/Pani", not "my/nasze" in the opening line.

**Humanizer pass is mandatory.** After writing, scan and remove:
- Em-dashes (—) — replace with period, comma, or colon
- AI vocabulary: kompleksowy, kluczowy, umożliwia, innowacyjny, holistyczny, synergiczny, nowoczesne podejście
- Anglicisms: OneStopShop, as a Service (in hero), fast track, board (→ zarząd), security lead (→ kierownik bezpieczeństwa)
- Forced rule of three
- Negative parallels: "nie tylko X, ale i Y" → single direct sentence
- Superlatives: wiodący, najlepszy, jedyny, przełomowy

**CTA must be a verb.** "Sprawdź ryzyko w 2 min" / "Zacznij od audytu" — not noun phrases like "Ankieta NIS2".

**No aggressive fear.** "Kara idzie na firmę, często też na członków zarządu." is fine. Apocalyptic language is not.

**Persona alignment.** Match tone, sentence length, and technical depth to the persona:
- CISO: art. 21, pentest, SDLC, compliance depth, shorter sentences
- CEO: "jedna strona dla zarządu, bez żargonu"
- COO: process, operations, team cost framing

**Featured card and hideCompare** follow intent:
- `gads-kary`, `gads-podlegam`, `li-ceo` → `hideCompare: true` (too early in funnel)
- kary / podlegam → `featuredCard: card-audit`
- aaS / CISO → `featuredCard: card-aas`
- wdrozenie → `featuredCard: card-impl`

## Validation before saving

- All facts intact (amounts, thresholds, dates)?
- Humanizer pass done (zero em-dashes, zero AI-isms)?
- Tone matches persona?
- CTA is verb-first and concrete?
- Featured card and scopeMode match campaign intent?

## Next step

Tell Sebastian: "copy gotowe — możesz sync do aplikacji (`/sync-copy`)."
