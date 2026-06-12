Sync Julia's copy files to the landing app's content layer. Use this skill whenever asked to sync copy, apply copy changes to the app, update variants.ts, or after Julia edits a copy/<variant>.md file.

Usage: `/sync-copy` — then specify a variant name like `li-ciso`, a list, or `all` for all 9.

---

# Sync Copy

Synchronize per-variant copy from `copy/<variant>.md` files into `landing/src/content/variants.ts` (the `SPECS` array).

## Architecture

- **Source of truth:** `copy/<variant>.md` + `copy/_shared.md`
- **Target:** `landing/src/content/variants.ts` (9 entries in `SPECS[]` + shared constants)
- **Types:** `landing/src/content/types.ts`
- URL resolution: `?variant=<id>` or `?utm_campaign=<campaign>` (mapped via `SPECS[].campaign`)

## Step 1 — Read

Read the specified copy files. For a full sync, read all 9 `copy/<variant>.md` files and `copy/_shared.md`.

## Step 2 — Map fields (per-variant edits in SPECS)

| copy.md section | SPECS field |
|---|---|
| `## Hero → H1` | `hero.h1` |
| `## Hero → Sub` | `hero.sub` |
| `## Hero → Stats` (parse `X · Y · Z`) | `hero.stats` (3-element array) |
| `## Hero → CTA primary` | `ctaUnified` — also wired to `nav.cta`, `hero.ctaPrimary`, `risk.cta.label`, `final.ctaPrimary` by `build()` |
| `## Hero → Micro` | `hero.micro` |
| `## Risk → H2` | `risk.h2` |
| `## Risk → Lead` | `risk.lead` |
| `## Risk → Bullets` | `risk.cards` — plain string → `{body}` (no title); `{title, body}` if the bullet has a bold lead |
| `## Service override → H2` | `service.h2` |
| `## Service override → Sub` | `service.sub` |
| `## Proof → quote` | `proof.quote` |
| `## Proof → attribution` | `proof.attribution` |
| `## Pricing → Lead` | `pricing.lead` |
| `## Pricing → Card CTAs` | `pricing.ctas.{audit, impl, aas}` — keep in file for completeness, not rendered |
| `## Final → H2` | `final.h2` |
| `## Final → Sub` | `final.sub` |
| frontmatter `hideCompare` | `hideCompare` |
| frontmatter `featuredCard` | `featuredCard` |

`scopeMode` is no longer used — skip it.

## Step 3 — Shared constants (only if `_shared.md` changed)

Shared data lives in the constants at the top of `variants.ts`: `NAV_LINKS`, `LOGOS`, `TIMELINE`, `PILLARS`, `STEPS`, `PROOF_STATS`, `TESTIMONIALS`, `PRICING_CARDS`, `COMPARE_ROWS`, `TCO_BREAKDOWN`, `FAQ_ITEMS`, `EXPERTS`, `FOOTER`. Update only fields that changed in `_shared.md`.

## Rules

1. **Verbatim.** Copy Julia's text exactly — no shortening, no paraphrasing.
2. **Facts untouchable.** Never change amounts (10 mln / 7 mln EUR, 9 900 / 24 900 / 15 900 zł, 38 644 zł/mc, 61.4%), dates (19 February 2026), thresholds (50 FTE / 10 mln EUR), reporting windows (24h / 72h), sector count (18). Full list in `copy/_shared.md` → Facts & constraints.
3. **Missing component = add it.** If a copy field has no matching component, add to `types.ts` and the component JSX — do not drop copy.

## Step 4 — Validate

```bash
cd landing
npm run build
```

If build passes, optionally start dev and walk variants:

```bash
npm run dev   # http://localhost:5173
```

Walk all 9 variants via the bar at the bottom or `?variant=<id>`. Check:
- Dynamic sections update per variant: hero, risk, service header, pricing processNote, final, SEO title
- Static sections stay constant: logo wall, timeline, pillars, steps, testimonials, FAQ, footer
- Variants with `hideCompare: true` (gads-kary, gads-podlegam, li-ceo) show no Compare section
