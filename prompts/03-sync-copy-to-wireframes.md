# Prompt 03 — sync copy do wireframe i designs

**Dla:** Sebastian (deweloper / agent budujący)
**Output:** zaktualizowane pliki `wireframes/wireframe.html` i wszystkie `designs/design-*.html`.

---

## Jak użyć

> Użyj `prompts/03-sync-copy-to-wireframes.md`, żeby zsynchronizować `copy/<variant>.md` do wszystkich wireframes i designs.

Albo dla pełnego sync:

> Użyj `prompts/03-sync-copy-to-wireframes.md`, żeby zsynchronizować wszystkie pliki z `copy/` do `wireframes/` i `designs/`.

---

## Instrukcja dla agenta

Synchronizujesz copy z markdown plików per-persona do obiektu `VARIANTS` w każdym pliku HTML.

### Architektura

- **Źródło prawdy:** `copy/<variant>.md` + `copy/_shared.md`.
- **Target plików:**
  - `wireframes/wireframe.html` (B&W bazowy szkielet)
  - `designs/design-hashicorp.html`
  - `designs/design-cohere.html`
  - `designs/design-awwwards.html`
  - `designs/design-sprint.html`
- **Wszystkie pliki HTML** dzielą ten sam **kontrakt JS**:
  - Obiekt `VARIANTS` keyed by variant id (9 kluczy).
  - Funkcja `applyVariant(key)` aktualizuje DOM przez `getElementById`.
  - Wymagane ID DOM: `hero-h1`, `hero-sub`, `hero-stats`, `hero-cta-primary`, `hero-cta-secondary`, `hero-micro`, `risk-h2`, `risk-lead`, `risk-bullets`, `service-h2`, `service-sub`, `proof-quote`, `pricing-lead`, `pricing-cta-hint`, `final-h2`, `final-sub`, `final-cta`, oraz featured card IDs (`card-audit`, `card-impl`, `card-aas`).
  - Mapowanie UTM: obiekt `UTM_CAMPAIGN_MAP`.

### Co aktualizujesz w pliku HTML

Per wariant (9 razy) w obiekcie `VARIANTS`:

```js
"variant-id": {
  channel: "...",
  campaign: "...",
  utm: "?utm_source=...",
  simTitle: "...",       // metadata dla simulator panel
  simDesc: "...",
  ctaUnified: "...",
  secondaryCta: "..." | null,
  scopeMode: "full" | "compact",
  hideCompare: true | false,
  service: { h2: "...", sub: "..." },
  proofQuote: "...",
  pricingLead: "...",
  cardCtas: { audit: "...", impl: "...", aas: "..." },
  hero: {
    h1: "...",
    sub: "...",
    stats: [
      { v: "...", l: "..." },
      { v: "...", l: "..." },
      { v: "...", l: "..." }
    ],
    ctaPrimary: "...",
    micro: "..."
  },
  risk: {
    h2: "...",
    lead: "...",
    bullets: ["...", "...", "..."],
    cta: "..."
  },
  final: {
    h2: "...",
    sub: "...",
    cta: "..."
  },
  featuredCard: "card-audit" | "card-impl" | "card-aas"
}
```

### Statyczne sekcje

Też wymagają sync, jeśli zmieniły się w `_shared.md`:

- **Scope** (full bullets w `<ul id="scope-list">` + compact paragraph w `#scope-compact`)
- **Service pillars** (3 karty `.wf-card` w sec-service)
- **How steps** (3 kroki w sec-how)
- **Pricing packages** (3 karty `#card-audit`, `#card-impl`, `#card-aas` z bullets + price)
- **Compare** rows (2 wiersze in-house vs aaS)
- **FAQ** titles (7 pytań)
- **Footer** legal links

Mapuj 1:1 z `copy/_shared.md`.

### Mapowanie copy.md → VARIANTS field

| copy.md sekcja | VARIANTS field |
|---|---|
| frontmatter `channel` | `channel` |
| frontmatter `campaign` | `campaign` |
| frontmatter `utm` | `utm` |
| frontmatter `ctaUnified` | `ctaUnified` |
| frontmatter `secondaryCta` | `secondaryCta` |
| frontmatter `scopeMode` | `scopeMode` |
| frontmatter `hideCompare` | `hideCompare` |
| frontmatter `featuredCard` | `featuredCard` |
| `## Hero` → H1 | `hero.h1` |
| `## Hero` → Sub | `hero.sub` |
| `## Hero` → Stats | `hero.stats` (parse: „X · Y · Z" → array of `{v, l}`) |
| `## Hero` → CTA primary | `hero.ctaPrimary` |
| `## Hero` → Micro | `hero.micro` |
| `## Risk` → H2 | `risk.h2` |
| `## Risk` → Lead | `risk.lead` |
| `## Risk` → Bullets | `risk.bullets` (array of strings) |
| `## Service override` → H2 | `service.h2` |
| `## Service override` → Sub | `service.sub` |
| `## Proof` (cytat) | `proofQuote` (zachowaj `„..."` cudzysłowy) |
| `## Pricing` → Lead | `pricingLead` |
| `## Pricing` → Card CTAs | `cardCtas.{audit,impl,aas}` |
| `## Final` → H2 | `final.h2` |
| `## Final` → Sub | `final.sub` |
| `## Final` → CTA | `final.cta` |

### simTitle / simDesc

Generuj z persony i kampanii:
- `simTitle`: „<Channel> — <krótki opis intencji>" (np. „Google Ads — Kary / KSC 2026")
- `simDesc`: 1 zdanie opisujące co robi ten wariant w simulator panelu (np. „Regulacja, ustawa, kary. Hero pod kontrolę i terminy KSC.")

### Walidacja po sync

1. **JS syntax:** wyciągnij `<script>...</script>`, uruchom `node --check`. Powinno przejść bez błędów.
2. **Tag balance:** `<style>`, `<script>`, `<section>`, `<details>`, `<summary>`, `<article>`, `<aside>` — open count = close count.
3. **DOM contract:** każde wymagane ID (`hero-h1`, `risk-bullets`, `card-audit/impl/aas`, etc.) ma dokładnie 1 wystąpienie.
4. **Wszystkie 9 wariantów obecne:** `grep -c '"(gads-|li-|default)' VARIANTS`.
5. **Manual:** otwórz w przeglądarce, kliknij każdy wariant w sim panel, sprawdź czy hero/risk/proof/pricing/final się aktualizują, scope compact/full działa, compare ukrywa się dla `hideCompare`.
6. **UTM resolve:** `?utm_campaign=nis2-managed` → wariant `gads-aas` ładuje się automatycznie.

### Wzorzec implementacji

Patrz aktualne pliki: [wireframes/wireframe.html](../wireframes/wireframe.html), [designs/design-cohere.html](../designs/design-cohere.html). Obiekt `VARIANTS` zaczyna się ok. linii 668 w wireframe i ma identyczną strukturę we wszystkich designs.

### Po sync

Powiedz: „sync gotowy dla X plików. JS OK, DOM contract OK, 9 wariantów obecnych. Możesz otworzyć w przeglądarce i przetestować."
