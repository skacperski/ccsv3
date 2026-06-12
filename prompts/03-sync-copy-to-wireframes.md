# Prompt 03 — sync copy do aplikacji landing

**Dla:** Sebastian (deweloper / agent budujący)
**Output:** zaktualizowany `landing/src/content/variants.ts` (tablica `SPECS`).

---

## Jak użyć

> Użyj `prompts/03-sync-copy-to-wireframes.md`, żeby zsynchronizować `copy/<variant>.md` do `landing/src/content/variants.ts`.

Albo dla pełnego sync:

> Użyj `prompts/03-sync-copy-to-wireframes.md`, żeby zsynchronizować wszystkie pliki z `copy/` do aplikacji.

---

## Instrukcja dla agenta

Synchronizujesz copy z markdown plików per-persona do tablicy `SPECS` w `landing/src/content/variants.ts`. Treść per wariant jest budowana funkcją `build()` — edytujesz tylko pola w `SPECS` i stałe SHARED.

### Architektura

- **Źródło prawdy:** `copy/<variant>.md` + `copy/_shared.md`.
- **Target:** `landing/src/content/variants.ts` (9 wpisów w `SPECS` + stałe SHARED).
- **Typy:** `landing/src/content/types.ts`.
- Warianty rozwiązuje URL: `?variant=<id>` albo `?utm_campaign=<campaign>` (mapa w `SPECS[].campaign`).

### Mapowanie pól (per wariant)

| copy.md | SPECS |
|---|---|
| `## Hero → H1` | `hero.h1` |
| `## Hero → Sub` | `hero.sub` |
| `## Hero → Stats` (parse `X · Y · Z`) | `hero.stats` (3 elementy) |
| `## Hero → CTA primary` | `ctaUnified` (hero + nav + karta CTA w risk + final) |
| `## Hero → Micro` | `hero.micro` |
| `## Risk → H2 / Lead / Bullets` | `risk.h2 / risk.lead / risk.cards` (string = kafel bez tytułu; `{title, body}` = kafel z tytułem) |
| `## Service override → H2 / Sub` | `service.h2 / service.sub` |
| `## Pricing → Lead` | `pricing.lead` (renderowane jako `processNote`) |
| `## Pricing → Card CTAs` | `pricing.ctas.{audit, impl, aas}` — **renderowane na kartach** |
| `## Final → H2 / Sub` | `final.h2 / final.sub` |
| frontmatter `hideCompare` | `hideCompare` |
| frontmatter `featuredCard` | `featuredCard` |

Sekcji **scope** już nie ma w designie — pomiń ją przy sync.

### SHARED (z `_shared.md`, edytuj stałe w `variants.ts`)

Nav links, ściana logo, harmonogram (TIMELINE), filary (PILLARS), kroki (STEPS), proof stats + testimoniale, struktura kart cennika (nazwy/ceny/features; akcje stałe: `card-audit` → ankieta, pozostałe → Calendly), tabela porównania + TCO breakdown, FAQ, eksperci, noty prawne, footer.

### Zasady

1. **Verbatim** — nie skracaj, nie parafrazuj copy Julii.
2. **Fakty nietykalne** — kwoty, daty, progi (lista w `copy/_shared.md` → Facts & constraints).
3. Jeśli pole nie ma komponentu — dodaj do `types.ts` i odpowiedniego komponentu w `landing/src/components/`, nie wycinaj treści.

### Walidacja po sync

```bash
cd landing
npm run build
npm run dev   # http://localhost:5173
```

Przejdź wszystkie 9 wariantów (pasek na dole strony albo `?variant=<id>`). Dynamiczne sekcje (hero, risk, service header, pricing processNote + CTA kart, final, tytuł SEO) muszą się zmieniać; statyczne (logos, harmonogram, proces, opinie, FAQ, stopka) — nie. Warianty z `hideCompare: true` (gads-kary, gads-podlegam, li-ceo) nie renderują tabeli porównania.
