---
type: shared
language: pl
product: NIS2 / KSC compliance (Poland)
brand: CyCommSec
target_url_production: /nis2/start
primary_conversion: Self-assessment survey NIS2 (~2 min)
layout_rule: "Paid LP: no global nav, no service menu 01–12"
---

# Shared copy (static across all variants)

Treść, która jest taka sama dla każdego wariantu reklamy. Wariantowe (dynamiczne) fragmenty: hero, risk, service H2+sub, proof, pricing lead, card CTAs, final — w plikach [copy/<variant>.md](.).

Mapowanie wariantów: [personas/](../personas/) (jeden plik na kampanię).

---

## Header

- **Logo:** CyCommSec
- **Phone (wireframe placeholder):** `[ tel. opcjonalnie ]`
- **Phone (design preview example):** `+48 123 456 789`

## Hero — secondary CTA (when shown)

- **Default / niektóre warianty:** `Wolisz rozmowę? Kontakt po ankiecie →`

## Scope — full mode

- **H2:** Czy NIS2 dotyczy waszej firmy?
- **Bullets:**
  - Działacie w jednym z **18 sektorów** objętych NIS2 i KSC.
  - Macie **50 osób** albo **10 mln EUR obrotu** rocznie (albo jesteście podmiotem specjalnym, np. DNS, rejestr domen).
  - Po nowelizacji KSC z lutego 2026 nikt wam jeszcze nie powiedział wprost, co i do kiedy.

## Scope — compact mode (tylko `gads-podlegam`)

Sektor z listy NIS2, 50 osób albo 10 mln EUR obrotu? Po lutowej nowelizacji KSC najprawdopodobniej jesteście w środku. Ankieta domknie pytanie w 2 minuty.

## Service — default pillars

- **Default H2:** Audyt, polityki, pentesty i SOC. U jednego dostawcy.
- **Default sub:** Jedna umowa zamiast czterech. Zgodność, która działa w firmie, nie tylko leży w PDF.

| Pillar | Title | Body |
|--------|-------|------|
| 01 | Regulacja | Audyt luk, polityki, procedury incydentów, plany ciągłości, szkolenia dla zarządu i zespołu. |
| 02 | Technologia | Pentesty, skan podatności, utwardzenie środowiska, remediacja pod art. 21 NIS2. |
| 03 | Ciągłość | SOC 24/7, zgłoszenia do organów w 24h/72h, przeglądy zgodności, kontrola dostawców IT. |

## How it works

- **H2:** Jak to wygląda krok po kroku
- **Step 1:** Ankieta w 2 minuty — Wiecie, czy wchodzicie w NIS2 i gdzie macie największe luki.
- **Step 2:** Audyt i plan dla zarządu — Od 9 900 zł, raport po polsku.
- **Step 3:** Wdrożenie albo NIS2 jako usługa — Projekt na raz albo stała opłata od 15 900 zł/mc.

## Proof — static shell

- **H2:** Zaufali nam
- **Logos:** `[LOGO]` ×4 placeholdery w wireframe (produkcja: realne logo klientów, najlepiej z tagiem sektorowym)
- **Quote:** per variant — patrz plik wariantowy.

## Pricing — packages (static)

- **Section H2:** Od czego zacząć
- **Default pricing lead:** Zaczynamy od ankiety. Pokaże, czy starcza audyt, czy potrzebujecie wdrożenia albo usługi miesięcznej.
- **Footer micro:** Pierwszy krok to **ankieta (2 minuty)**. Karty obok pokazują, co przyjdzie po niej.

| Package id | Name | Price | Bullets | Default card CTA label |
|------------|------|-------|---------|-------------------------|
| `card-audit` | Ocena gotowości NIS2 | od 9 900 zł | Analiza luk; Raport dla zarządu; Plan działań na 90 dni | Sprawdź w 2 minuty |
| `card-impl` | Wdrożenie NIS2 | od 24 900 zł | Polityki i procedury; Środki techniczne; Szkolenia zarządu | Sprawdź w 2 minuty |
| `card-aas` | NIS2 jako usługa ★ | od 15 900 zł / mc | SOC 24/7, incydenty; Pentesty w cenie; Utrzymanie zgodności | Sprawdź, czy aaS pasuje |

## Compare — in-house vs aaS

- **H2:** Własny zespół vs NIS2 jako usługa
- **In-house:** ok. 38 644 zł/mc — 2–3 etaty, rekrutacja po 6 miesięcy, rotacja, licencje i narzędzia osobno
- **aaS:** od 15 900 zł/mc — Zgodność, pentesty i SOC w jednej fakturze
- **Footnote:** Wg materiałów CyCommSec: ok. **61,4%** taniej niż typowy model własny. Metodologia (założenia TCO) dostępna na życzenie.

## FAQ (titles only — body expand in CMS)

1. Co dokładnie zmienia KSC od lutego 2026?
2. Mamy już ISO 27001 / SZBI — co z tego nam zostaje pod NIS2?
3. Czy 50 osób to ma być etat, czy razem ze współpracownikami?
4. Jakie kary realnie grożą zarządowi, nie tylko firmie?
5. Ile naprawdę trwa wdrożenie (i kiedy 6 miesięcy starczy)?
6. ▸ Lista 18 sektorów objętych NIS2
7. ▸ Co mówi art. 21 NIS2: 10 wymogów po polsku

## Footer

Polityka prywatności · RODO · © CyCommSec

---

## Page structure (section order, all variants)

| # | Section id | Static / dynamic | Notes |
|---|------------|------------------|--------|
| 0 | header | Static | Logo + optional phone only |
| 1 | hero | **Dynamic** | H1, sub, stats, primary CTA, micro, optional secondary CTA |
| 2 | scope | Static + **compact mode** | Bullety albo jeden paragraf |
| 3 | risk | **Dynamic** | PAS: H2, lead, bullets |
| 4 | service | **Dynamic** (H2 + sub) + static pillars | Regulacja / Technologia / Ciągłość |
| 5 | how | Static | 3 kroki |
| 6 | proof | **Dynamic** (quote) + static H2 | Logo row = placeholders |
| 7 | pricing | **Dynamic** (lead, card CTAs, featured) + static package copy | |
| 8 | compare | Static | Ukrywane dla niektórych wariantów |
| 9 | faq | Static | Tytuły, body w CMS |
| 10 | final | **Dynamic** | H2, sub, CTA |
| — | footer | Static | Linki prawne |

## UTM → variant mapping

| `utm_campaign` | `variant` id | Copy file |
|----------------|--------------|-----------|
| `nis2-kary` | `gads-kary` | [copy/gads-kary.md](gads-kary.md) |
| `nis2-test` | `gads-podlegam` | [copy/gads-podlegam.md](gads-podlegam.md) |
| `nis2-audyt` | `gads-audyt` | [copy/gads-audyt.md](gads-audyt.md) |
| `nis2-wdrozenie` | `gads-wdrozenie` | [copy/gads-wdrozenie.md](gads-wdrozenie.md) |
| `nis2-managed` | `gads-aas` | [copy/gads-aas.md](gads-aas.md) |
| `nis2-li-ceo` | `li-ceo` | [copy/li-ceo.md](li-ceo.md) |
| `nis2-li-ciso` | `li-ciso` | [copy/li-ciso.md](li-ciso.md) |
| `nis2-li-ops` | `li-coo` | [copy/li-coo.md](li-coo.md) |
| (brak / inne) | `default` | [copy/default.md](default.md) |

Override do podglądu lokalnego: `?variant=<id>` (np. `?variant=gads-audyt`).

---

## Facts & constraints (nie zmieniać bez legal review)

| Fact | Value |
|------|--------|
| KSC signature date | 19 February 2026 |
| Max fine (essential entity) | up to 10 mln EUR or 2% turnover |
| Max fine (important entity) | up to 7 mln EUR or 1.4% turnover |
| Incident reporting | 24h / 72h |
| Size thresholds | 50+ employees or 10 mln EUR turnover |
| Sectors | 18 (lista w FAQ) |
| Audit from | 9 900 zł |
| Implementation from | 24 900 zł |
| NIS2 aaS from | 15 900 zł / month |
| In-house benchmark | ~38 644 zł / month |
| Cost reduction claim | 61,4% vs in-house (materiały CyCommSec) |
| Typical implementation | 6–18 months; wersja przyspieszona ~6 months |

## Production placeholders (hard-block przed deploy)

- Client logos (proof row)
- Client quote attribution: `[stanowisko]`, `[firma]`, `[sektor]`
- Hero image: bez stockowego „hakera"; opcjonalne realne foto/ilustracja
- FAQ accordion bodies (nie ma w wireframe)
- Privacy policy / RODO URLs
- Survey URL (primary CTA href)
- Phone number w headerze

## Open questions (decyzje biznesowe)

Wymagają decyzji klienta, nie ruszane automatycznie. Najważniejsze otwarte:

- **Stopka:** brak KRS/NIP/adresu = sygnał „spółka krzak" w PL B2B.
- **Domena `.com` vs `.pl`:** klient pod KSC oczekuje `.pl`.
- **Telefon w headerze:** placeholder „opcjonalnie" odpycha.
- **Twarze ekspertów:** żaden wariant nie pokazuje konkretnej osoby (krytyczne dla `li-ciso`, `li-ceo`).
- **Claim 61,4%:** potrzebna metodologia TCO albo przedział „40–60%".
- **„NIS2 jako usługa"** — uwaga prawna: dodać do FAQ klauzulę „odpowiedzialność za zgodność pozostaje po stronie podmiotu".

## File sync (workflow)

Gdy treść się zmienia:

1. Update **odpowiedni plik wariantowy** w [copy/](.) albo `_shared.md` jeśli to sekcja statyczna.
2. Sync `VARIANTS` + statyczne stringi w [wireframes/wireframe.html](../wireframes/wireframe.html) i wszystkich [designs/](../designs/).
3. Run [.cursor/skills/humanizer/SKILL.md](../.cursor/skills/humanizer/SKILL.md) na zmienionych stringach (bez em dashy, bez AI-izmów, varied rhythm).
4. Re-check production placeholders block przed deploy.

*Last synced: humanization pass — May 2026 (Content Creator + Cultural Intelligence review).*
