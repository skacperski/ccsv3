# NIS2 paid landing — copy reference (CyCommSec)

> **Source of truth for agents.** Use this file when building wireframes, Webflow pages, or final UI.  
> Do not invent prices, legal claims, or new variants without explicit approval.  
> Copy was humanized per `.cursor/skills/humanizer/SKILL.md`.  
> **Live preview:** `wireframes/nis2-landing-wireframe.html` · **Design preview:** `wireframes/nis2-landing-designed.html`

| Field | Value |
|-------|--------|
| Product | NIS2 / KSC compliance (Poland) |
| Brand | CyCommSec |
| Target URL (production) | `/nis2/start` |
| Reference URL (current site) | `https://cycommsec.com/nis2` |
| Primary conversion | Self-assessment survey NIS2 (~2 min) |
| Secondary CTA | Contact after survey (optional, some variants) |
| Language | Polish (PL) |
| Layout rule | Paid LP: **no global nav**, no service menu 01–12 |
| Default variant (no UTM) | `gads-kary` in wireframe; content fallback: `default` |

---

## How agents should use this file

1. **Static sections** — copy below is shared across variants unless a variant overrides a block.
2. **Dynamic sections** — pick variant by `utm_campaign` or `variant` query param (see mapping).
3. **Message match** — hero, risk, service (lead), proof quote, pricing lead, card CTAs, final CTA change per variant.
4. **Featured pricing card** — only one card shows primary CTA per variant (`featuredCard`).
5. **Scope** — `full` = bullet list; `compact` = single paragraph (variant `gads-podlegam`).
6. **Compare section** — hidden when `hideCompare: true` (top-funnel variants).
7. Before shipping new copy, run through **humanizer** skill.

---

## UTM → variant mapping

| `utm_campaign` | `variant` id |
|----------------|--------------|
| `nis2-kary` | `gads-kary` |
| `nis2-test` | `gads-podlegam` |
| `nis2-audyt` | `gads-audyt` |
| `nis2-wdrozenie` | `gads-wdrozenie` |
| `nis2-managed` | `gads-aas` |
| `nis2-li-ceo` | `li-ceo` |
| `nis2-li-ciso` | `li-ciso` |
| `nis2-li-ops` | `li-coo` |

Override for local preview: `?variant=<id>` (e.g. `?variant=gads-audyt`).

---

## Page structure (section order)

| # | Section id | Static / dynamic | Notes |
|---|------------|------------------|--------|
| 0 | header | Static | Logo + optional phone only |
| 1 | hero | **Dynamic** | H1, sub, stats, primary CTA, micro, optional secondary CTA |
| 2 | scope | Static + **compact mode** | Qualification bullets or one paragraph |
| 3 | risk | **Dynamic** | PAS: H2, lead, bullets |
| 4 | service | **Dynamic** (H2 + sub) + static pillars | Three cards: Regulacja / Technologia / Ciągłość |
| 5 | how | Static | 3 steps |
| 6 | proof | **Dynamic** (quote) + static H2 | Logo row = placeholders in wireframe |
| 7 | pricing | **Dynamic** (lead, card CTAs, featured card) + static package copy | |
| 8 | compare | Static | Hidden for some variants |
| 9 | faq | Static | Accordion titles only (body TBD in prod) |
| 10 | final | **Dynamic** | H2, sub, CTA |
| — | footer | Static | Legal links only, no sitemap |

---

## Shared copy (static)

### Header

- **Logo:** CyCommSec
- **Phone (wireframe placeholder):** `[ tel. opcjonalnie ]`
- **Phone (design preview example):** `+48 123 456 789`

### Hero — secondary CTA (when shown)

- **Default / some variants:** `Wolisz rozmowę? Kontakt po ankiecie →`

### Scope (full mode)

- **H2:** Czy NIS2 was dotyczy?
- **Bullets:**
  - Jesteście w jednym z **18 sektorów** z listy NIS2 / KSC.
  - Macie **50+ pracowników** albo obrót **powyżej 10 mln EUR** rocznie (albo jesteście podmiotem specjalnym, np. DNS).
  - Po **nowelizacji KSC (luty 2026)** nadal nie wiecie, co musicie zrobić i w jakim terminie.

### Scope (compact mode) — variant `gads-podlegam` only

Jesteś w jednym z 18 sektorów i spełniasz próg 50+ osób albo 10 mln EUR obrotu? Po KSC 2026 najpewniej wchodzisz w NIS2. Resztę doprecyzuje ankieta.

### Service — default pillars (cards; body static)

- **Default H2:** NIS2: prawo i IT w jednej umowie
- **Default sub:** Audyt, polityki, pentesty i SOC u jednego dostawcy. Bez folderu zgodności, którego nikt nie wdraża.

| Pillar | Title | Body |
|--------|-------|------|
| 01 | Regulacja | Audyt luk, polityki, procedury incydentów, BCP/DRP, szkolenia dla zarządu i zespołu. |
| 02 | Technologia | Pentesty, skan podatności, utwardzenie środowiska, remediacja (art. 21 NIS2). |
| 03 | Ciągłość | SOC 24/7, zgłoszenia do organów, przeglądy zgodności, dostawcy ICT. |

### How it works

- **H2:** Jak to wygląda krok po kroku
- **Step 1:** Ankieta (2 min) — Sprawdzacie, czy wchodzicie w NIS2 i gdzie są największe luki.
- **Step 2:** Audyt i plan — Raport dla zarządu i plan działań (od 9 900 zł).
- **Step 3:** Wdrożenie lub aaS — Projekt na raz albo stała opłata od 15 900 zł/mc.

### Proof (static shell)

- **H2:** Zaufali nam
- **Logos:** `[LOGO]` placeholders ×4 in wireframe
- **Quote:** per variant (see below)

### Pricing — packages (static)

- **Section H2:** Od czego zacząć
- **Default pricing lead:** Najpierw ankieta. Na jej podstawie wskażemy audyt, wdrożenie albo NIS2 as a Service.
- **Footer micro:** Główny krok: **ankieta 2 min**. Pozostałe karty to porównanie pakietów.

| Package id | Name | Price | Bullets | Default card CTA label |
|------------|------|-------|---------|-------------------------|
| `card-audit` | Ocena gotowości NIS2 | od 9 900 zł | Analiza luk; Raport dla zarządu; Wytyczne działań | Ankieta (2 min) |
| `card-impl` | Implementacja NIS2 | od 24 900 zł | Polityki i procedury; Wdrożenie środków; Szkolenia | Ankieta (2 min) |
| `card-aas` | NIS2 as a Service ★ | od 15 900 zł / mc | SOC i incydenty 24/7; Pentesty w cenie; Utrzymanie zgodności | Ankieta: czy aaS ma sens |

### Compare (in-house vs aaS)

- **H2:** Zespół w firmie vs NIS2 as a Service
- **In-house:** ~38 644 zł/mc — 2–3 etaty, rekrutacja, rotacja, licencje i narzędzia osobno
- **aaS:** od 15 900 zł/mc — Zgodność, pentesty i SOC w jednej opłacie miesięcznej
- **Footnote:** W materiałach CyCommSec: ok. **61,4%** niższy koszt niż typowy model in-house.

### FAQ (titles only — expand in CMS)

1. Co to jest NIS2 i co zmienia KSC od 2026?
2. Czy moja firma wchodzi w NIS2 (50 osób, 10 mln EUR)?
3. Jakie kary są dla podmiotu kluczowego i ważnego?
4. Ile trwa wdrożenie (zwykle 6–18 mies., fast track ok. 6 mies.)?
5. ▸ Lista 18 sektorów
6. ▸ 10 wymogów z art. 21 NIS2 (szczegóły)

### Footer

Polityka prywatności · RODO · © CyCommSec

---

## Variants (dynamic copy)

### `gads-kary` — Google Ads: kary / KSC 2026

| Field | Value |
|-------|--------|
| Channel | Google Ads |
| Campaign | `nis2-kary` |
| UTM | `?utm_source=google&utm_medium=cpc&utm_campaign=nis2-kary&utm_content=kary-ksc` |
| scopeMode | full |
| hideCompare | yes |
| featuredCard | `card-audit` |
| ctaUnified | Ankieta NIS2 (2 min) |
| secondaryCta | — |

**Hero**

- **H1:** KSC 2026: sprawdź ryzyko kar NIS2, zanim przyjdzie kontrola
- **Sub:** Nowelizacja KSC została podpisana 19 lutego 2026. Firmy w zakresie NIS2 muszą mieć cyberbezpieczeństwo i raportowanie incydentów. Za zaniedbania: do 10 mln EUR albo 2% obrotu, plus odpowiedzialność członków zarządu.
- **Stats:** do 10 mln EUR (kara, podmiot kluczowy) · 24h / 72h (zgłoszenie incydentu) · KSC 02/2026 (obowiązek w Polsce)
- **CTA primary:** Ankieta: ryzyko kar (2 min)
- **Micro:** Bez zobowiązań · wynik dla zarządu · RODO

**Risk**

- **H2:** Kary idą na firmę. Często też na zarząd
- **Lead:** NIS2 wprowadza w UE wspólne, wysokie grzywny. „Zrobimy to później” już nie przechodzi przy kontroli.
- **Bullets:** Do 10 mln EUR albo 2% obrotu (kluczowy) · Do 7 mln EUR albo 1,4% (ważny) · Odpowiedzialność prezesa/CTO/CISO · S46 i kontrole organów

**Service override**

- **H2:** KSC: od audytu do dowodów, które przejdzie kontrola
- **Sub:** Luki, procedury incydentów i utwardzenie IT po nowelizacji. Bez polityk, które leżą w szufladzie.

**Proof:** „Po ankiecie wiadomo było, gdzie jesteśmy wobec KSC. Zarząd dostał raport po polsku, bez skrótów od IT.” — [stanowisko], [branża]

**Pricing lead:** Ankieta pokaże, czy wystarczy audyt, czy potrzebne jest pełne wdrożenie.

**Card CTAs:** audit: Ankieta: ryzyko kar · impl/aas: Porównaj pakiety w ankiecie

**Final:** H2: Lepiej wiedzieć przed kontrolą · Sub: 2 minuty ankiety: czy wchodzicie w NIS2 i które luki są na teraz. · CTA: Bezpłatna ankieta NIS2

---

### `gads-podlegam` — Google Ads: czy podlegam?

| Field | Value |
|-------|--------|
| Campaign | `nis2-test` |
| UTM content | `czy-podlegam` |
| scopeMode | **compact** |
| hideCompare | yes |
| featuredCard | `card-audit` |

**Hero**

- **H1:** Czy wasza firma podlega pod NIS2? Sprawdźcie w 2 minuty
- **Sub:** Kilka pytań o sektor, wielkość i to, co już macie w cyberbezpieczeństwie. Dostaniecie wstępną odpowiedź. Bez umowy na usługę.
- **Stats:** 2 min · 18 sektorów · 50+ / 10M EUR
- **CTA:** Ankieta samooceny NIS2
- **Micro:** Wynik od razu · dla zarządu i IT

**Risk:** H2: Najczęstszy błąd: „chyba nas to nie dotyczy” · Lead: kluczowy vs ważny · Bullets: sektor, progi, brak procedur 24h/72h

**Service:** H2: Jeśli wchodzicie w NIS2: co robimy dalej · Sub: Po ankiecie dobierzemy audyt, wdrożenie albo aaS.

**Proof:** „Po dwóch minutach wiedzieliśmy, czy w ogóle wchodzimy w NIS2. Bez tygodnia rozmów z kancelarią.” — [stanowisko], [firma]

**Pricing lead:** Ankieta powie, czy zacząć od audytu, wdrożenia czy aaS.

**Card CTAs:** audit: Ankieta: czy podlegamy · impl/aas: Porównaj w ankiecie

**Final:** H2: Najpierw odpowiedź: tak albo nie · Sub: Potem audyt, wdrożenie albo aaS. · CTA: Sprawdź zakres NIS2

---

### `gads-audyt` — Google Ads: audyt od 9 900 zł

| Field | Value |
|-------|--------|
| Campaign | `nis2-audyt` |
| featuredCard | `card-audit` |
| secondaryCta | Wolisz rozmowę? Kontakt po ankiecie → |
| hideCompare | no |

**Hero**

- **H1:** Audyt gotowości NIS2 — raport dla zarządu od 9 900 zł
- **Sub:** Sprawdzamy luki prawne i techniczne po KSC. Plan: polityki, pentesty, utwardzenie. Bez checklisty, którą nikt nie wdroży.
- **Stats:** od 9 900 zł · od 24 900 zł · 6–18 mies.
- **CTA:** Ankieta: kwalifikacja do audytu (2 min)
- **Micro:** Po ankiecie: zakres audytu · rozmowa możliwa w 48h

**Risk:** H2: Bez audytu wdrożenie to strzelanie · Lead: kontrola chce dowodów

**Service:** H2: Audyt NIS2 z testami, nie tylko z checklistą · Sub: Raport + pentesty pod KSC i art. 21

**Proof:** „Jeden raport poszedł na board. Wcześniej mieliśmy pięć plików od pięciu firm.” — CISO, [sektor]

**Pricing lead:** Start: ocena gotowości od 9 900 zł. Ankieta dopasuje zakres.

**Card CTAs:** audit: Ankieta pod audyt · impl: Wdrożenie: przez ankietę · aas: aaS: przez ankietę

**ctaUnified:** Ankieta: kwalifikacja do audytu (2 min)

**Final:** H2: Jeden raport zamiast pięciu arkuszy · CTA: Ankieta: kwalifikacja do audytu (2 min)

---

### `gads-wdrozenie` — Google Ads: implementacja od 24 900 zł

| Field | Value |
|-------|--------|
| Campaign | `nis2-wdrozenie` |
| featuredCard | `card-impl` |
| secondaryCta | Wolisz rozmowę? Kontakt po ankiecie → |

**Hero**

- **H1:** Wdrożenie NIS2 w firmie — od 24 900 zł
- **Sub:** Polityki, procedury, utwardzenie IT, szkolenia i raport na koniec. Pod KSC, z dowodami na kontrolę.
- **Stats:** od 24 900 zł · 6–18 mies. · Fast track ok. 6 mies.
- **CTA:** Ankieta: czy wdrożenie pasuje (2 min)

**Risk:** H2: Wdrożenie bez mapy luk to przepalanie budżetu

**Service:** H2: Wdrożenie NIS2: dokumenty, IT, szkolenia · Sub: Działa w firmie, nie tylko w PDF.

**Proof:** „Luki z audytu zamknęliśmy po kolei. Operacje ruszały dalej bez przestoju.” — COO, [sektor]

**Pricing lead:** Po ankiecie: pakiet implementacji od 24 900 zł.

**Card CTAs:** audit: Najpierw audyt: ankieta · impl: Ankieta pod wdrożenie · aas: aaS: ankieta

**Final:** H2: Z planu do działających procedur · CTA: Ankieta NIS2 (2 min)

---

### `gads-aas` — Google Ads: NIS2 as a Service

| Field | Value |
|-------|--------|
| Campaign | `nis2-managed` |
| featuredCard | `card-aas` |
| secondaryCta | Wolisz rozmowę? Kontakt po ankiecie → |

**Hero**

- **H1:** NIS2 as a Service: zgodność, pentesty i SOC od 15 900 zł/mc
- **Sub:** Zamiast zespołu in-house: wdrożenie, monitoring 24/7, incydenty, pentesty, polityki. Prawo i IT w jednej umowie.
- **Stats:** od 15 900 zł/mc · 24/7 · 61,4% niżej vs in-house*
- **CTA:** Ankieta: czy aaS pasuje (2 min)
- **Micro:** Pentesty w cenie · porównanie z in-house na stronie · RODO

**Risk:** H2: Zespół in-house buduje się miesiącami. KSC już jest

**Service:** H2: NIS2 as a Service zamiast budowy zespołu od zera · Sub: Jedna faktura miesięcznie.

**Proof:** „Zrezygnowaliśmy z planu trzech etatów. Płacimy co miesiąc, SOC działa całą dobę.” — Dyrektor IT, [sektor]

**Pricing lead:** Model aaS od 15 900 zł/mc. Porównanie z in-house niżej.

**Card CTAs:** audit/impl: Porównaj w ankiecie · aas: Ankieta: NIS2 aaS

**Final:** H2: Zgodność na zewnątrz, bez rezygnacji z IT · CTA: Ankieta: NIS2 as a Service

---

### `li-ceo` — LinkedIn: zarząd

| Field | Value |
|-------|--------|
| Campaign | `nis2-li-ceo` |
| hideCompare | yes |
| featuredCard | `card-audit` |

**Hero**

- **H1:** NIS2: zarząd odpowiada osobiście. Czy firma jest gotowa?
- **Sub:** NIS2 i KSC (luty 2026) nakładają obowiązki na zarząd, nie tylko IT. W 2 minuty: zakres i luki przed incydentem lub kontrolą.
- **Stats:** Odpowiedzialność osobista · Szkolenia · 10 mln EUR max.
- **CTA:** Ankieta dla zarządu
- **Micro:** Wynik dla boardu · bez żargonu IT

**Risk:** H2: „To sprawa IT” nie zdejmuje odpowiedzialności

**Service:** H2: Dla zarządu: bez przerzucania wszystkiego na IT

**Proof:** „Prezes dostał jedną stronę ryzyk. Bez skrótów. Budżet poszedł szybciej.” — CISO, [sektor]

**Card CTAs:** audit: Ankieta dla zarządu · impl/aas: Porównaj w ankiecie

**Final:** H2: Najpierw kwalifikacja, potem plan · CTA: Ankieta NIS2 (2 min)

---

### `li-ciso` — LinkedIn: CISO / IT

| Field | Value |
|-------|--------|
| Campaign | `nis2-li-ciso` |
| featuredCard | `card-aas` |

**Hero**

- **H1:** NIS2 bez zgodności „na papierze”: audyt, pentesty, SOC
- **Sub:** KSC, pentesty, podatności, monitoring 24/7 u jednego dostawcy. Jedna umowa zamiast konsultingu i agencji obok siebie.
- **Stats:** Pentesty · art. 21 · OneStopShop
- **CTA:** Ankieta: luki techniczne i prawne
- **Micro:** Dla CISO, dyrektora IT, security lead

**Risk:** H2: Regulator chce dowodów. Sam folder polityk to za mało

**Service:** H2: Dla CISO: regulacja, pentesty i SOC w jednym SLA

**Proof:** „Jeden SLA na compliance i testy. Koniec z pięcioma dostawcami.” — CISO, [sektor]

**Final:** H2: Jeden dostawca zamiast pięciu · CTA: Ankieta dla IT/CISO

---

### `li-coo` — LinkedIn: COO / operacje

| Field | Value |
|-------|--------|
| Campaign | `nis2-li-ops` |
| featuredCard | `card-aas` |

**Hero**

- **H1:** NIS2: BCP, dostawcy ICT, SOC. Macie 24h/72h ogarnięte?
- **Sub:** Plany ciągłości, dostawcy, szybkie zgłoszenia incydentów. Ankieta pokaże lukę operacyjną.
- **Stats:** 24h/72h · BCP/DRP · Dostawcy ICT
- **CTA:** Ankieta: gotowość operacyjna

**Risk:** H2: Awaria bez raportu to dwa problemy naraz

**Service:** H2: Dla operacji: ciągłość i dostawcy

**Proof:** „Ćwiczenie incydentu i raport w 24h z jednego programu u dostawcy.” — COO, [sektor]

**Final:** H2: Najpierw diagnoza operacyjna · CTA: Ankieta samooceny

---

### `default` — organic / direct / no UTM

| Field | Value |
|-------|--------|
| featuredCard | `card-audit` |
| secondaryCta | Wolisz rozmowę? Kontakt po ankiecie → |

**Hero**

- **H1:** NIS2 w Polsce: audyt, wdrożenie i bezpieczeństwo techniczne
- **Sub:** Po KSC (luty 2026) wiele firm musi domknąć cyber i raportowanie incydentów. CyCommSec: audyt, pentesty, SOC, aaS pod jednym dachem.
- **Stats:** OneStopShop · Ankieta 2 min · KSC 2026
- **CTA:** Bezpłatna ankieta NIS2

**Risk:** H2: Brak NIS2 to ryzyko prawne i operacyjne

**Service:** H2: NIS2: prawo i IT w jednej umowie · Sub: Audyt, pentesty, SOC, aaS u jednego dostawcy.

**Proof:** `[ Cytat klienta — do uzupełnienia w produkcji ]`

**Pricing lead:** Zaczynamy od ankiety. Potem audyt, wdrożenie albo aaS.

**Final:** H2: Zacznijcie od ankiety · CTA: Ankieta NIS2 (2 min)

---

## Facts & constraints (do not change without legal review)

| Fact | Value |
|------|--------|
| KSC signature date (copy) | 19 February 2026 |
| Max fine (essential entity) | up to 10 mln EUR or 2% turnover |
| Max fine (important entity) | up to 7 mln EUR or 1.4% turnover |
| Incident reporting | 24h / 72h |
| Size thresholds | 50+ employees or 10 mln EUR turnover |
| Sectors | 18 (list in FAQ) |
| Audit from | 9 900 zł |
| Implementation from | 24 900 zł |
| NIS2 aaS from | 15 900 zł / month |
| In-house benchmark | ~38 644 zł / month |
| Cost reduction claim | 61,4% vs in-house (CyCommSec marketing materials) |
| Typical implementation | 6–18 months; fast track ~6 months |

---

## Production placeholders

- Client logos (proof row)
- Client quote attribution: `[stanowisko]`, `[firma]`, `[sektor]`
- Hero image: no stock „hacker”; optional real photo/illustration
- FAQ accordion bodies (not in wireframe)
- Privacy policy / RODO URLs
- Survey URL (primary CTA href)
- Phone number in header

---

## File sync

When copy changes:

1. Update **this file** first.
2. Sync `VARIANTS` + static strings in `nis2-landing-wireframe.html`.
3. Re-sync `nis2-landing-designed.html` (or regenerate from wireframe).
4. Run **humanizer** on changed strings.

*Last synced with wireframe commit: humanized copy, May 2026.*
