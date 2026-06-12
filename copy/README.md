# copy/

Treść strony landing page NIS2/KSC — **jeden plik na wariant kampanii reklamowej** + plik `_shared.md` ze statycznymi sekcjami.

## Struktura

- **[_shared.md](_shared.md)** — statyczne sekcje (header, scope, service pillars, how, pricing packages, compare, FAQ, footer) + facts table + page structure + UTM mapping. **Wspólne dla wszystkich wariantów.**
- **9 plików per-persona** — dynamiczne sekcje (hero, risk, service H2+sub, proof, pricing lead, card CTAs, final) per kampania:
  - [gads-kary.md](gads-kary.md) — Google Ads · kary KSC
  - [gads-podlegam.md](gads-podlegam.md) — Google Ads · czy podlegam pod NIS2
  - [gads-audyt.md](gads-audyt.md) — Google Ads · analiza luki od 29 000 zł
  - [gads-wdrozenie.md](gads-wdrozenie.md) — Google Ads · wdrożenie od 74 000 zł
  - [gads-aas.md](gads-aas.md) — Google Ads · NIS2 jako usługa
  - [li-ceo.md](li-ceo.md) — LinkedIn · zarząd
  - [li-ciso.md](li-ciso.md) — LinkedIn · CISO / IT
  - [li-coo.md](li-coo.md) — LinkedIn · COO / operacje
  - [default.md](default.md) — organic / direct / fallback

## Workflow

1. **Generowanie:** [prompts/01-generate-copy-from-persona.md](../prompts/01-generate-copy-from-persona.md)
2. **Humanizacja:** [prompts/02-humanize-copy.md](../prompts/02-humanize-copy.md)
3. **Sync do aplikacji:** [prompts/03-sync-copy-to-wireframes.md](../prompts/03-sync-copy-to-wireframes.md)

## Mapowanie

Każdy plik copy ma odpowiadającą personę w [personas/](../personas/) i jest wczytywany jako wariant w `landing/src/content/variants.ts` (rozwiązanie przez `?variant=<id>` / `?utm_campaign=<campaign>`).
