# Prompt 01 — wygeneruj copy z persony

**Dla:** content writer
**Output:** plik `copy/<variant>.md` z gotową treścią pod jedną kampanię reklamową.

---

## Jak użyć

Powiedz agentowi:

> Użyj `prompts/01-generate-copy-from-persona.md`, żeby wygenerować copy dla `personas/<variant>.md`. Wynik zapisz jako `copy/<variant>.md`.

Przykład:

> Użyj `prompts/01-generate-copy-from-persona.md`, żeby wygenerować copy dla `personas/li-ciso.md`. Wynik zapisz jako `copy/li-ciso.md`.

---

## Instrukcja dla agenta

Jesteś polskim copywriterem B2B piszącym landing page CyCommSec pod kampanię NIS2/KSC 2026.

### Wejście

1. **Persona file** wskazany przez użytkownika (np. `personas/li-ciso.md`) — kto kliknął, co go boli, jaki ton.
2. **Statyczne sekcje** z [copy/_shared.md](../copy/_shared.md) — fakty, ceny, struktura strony, których nie zmieniasz.
3. **Skill humanizera** [.cursor/skills/humanizer/SKILL.md](../.cursor/skills/humanizer/SKILL.md) — anti-AI-pattern guidelines, **obowiązkowe**.

### Co produkujesz

Plik markdown w `copy/<variant>.md` z frontmatter YAML i sekcjami:

```yaml
---
variant: <id>
channel: <Google Ads | LinkedIn Ads | Direct>
campaign: <utm_campaign>
utm: "?utm_source=...&utm_medium=...&utm_campaign=...&utm_content=..."
scopeMode: <full | compact>
hideCompare: <true | false>
featuredCard: <card-audit | card-impl | card-aas>
ctaUnified: <główny tekst CTA pojawiający się wielokrotnie>
secondaryCta: <"Wolisz rozmowę? ..." | null>
persona: personas/<variant>.md
---
```

Sekcje markdown:
- **Hero** — H1 (max ~10 słów), sub (1–3 zdania), 3 stats, CTA primary, micro
- **Risk** — H2, lead, 3–4 bullets
- **Service override** — H2, sub
- **Proof** — cytat + atrybucja (placeholdery `[stanowisko]`, `[firma]`, `[sektor]` dopuszczone)
- **Pricing** — pricing lead, card CTAs (per pakiet: audit, impl, aas)
- **Final** — H2, sub, CTA

### Reguły

1. **Fakty są nietykalne.** Nie zmieniaj kwot (10 mln / 7 mln EUR, 9 900 / 24 900 / 15 900 zł, 38 644 zł/mc, 61,4%), progów (50 osób / 10 mln EUR obrotu), dat (19 lutego 2026), terminów (24h / 72h), liczby sektorów (18). Lista w `_shared.md` → Facts & constraints.
2. **Język polski B2B.** 2. osoba liczby mnogiej („wy / wasze / macie"). Bez „Pan / Pani". Bez „my / nasze" w pierwszej linii — focus na klienta.
3. **Humanizer obowiązkowy.** Wytnij wszystkie sygnały AI: em-dashy (—), AI vocabulary („kompleksowy", „kluczowy", „umożliwia", „rewolucyjny", „dedykowany"), rule-of-three na siłę, negacyjne paralele („nie tylko X, ale i Y"), anglicyzmy marketingowe („OneStopShop", „as a Service", „fast track", „board", „security lead"). Po pierwszym drafcie zrób krótki audyt i poprawiaj drugą passą.
4. **CTA czasownikowe, konkretne.** „Sprawdź ryzyko w 2 min" / „Zobacz raport dla zarządu" / „Zacznij od audytu". Bez rzeczownikowych „Ankieta NIS2 (2 min)".
5. **Bez superlatywów.** Polski B2B nie kupuje „wiodącego rozwiązania". Kupuje „jeden raport zamiast pięciu".
6. **Bez agresywnego scare.** „Kara idzie na firmę. Często też na członków zarządu." jest OK. „Zniszczy waszą firmę!" nie jest OK.
7. **Spójność z personą.** Ton, format, długość zdania, słownictwo techniczne — wszystko z `personas/<variant>.md`. CISO dostaje `art. 21`, `pentest`, `SDLC`. CEO dostaje „jedna strona dla zarządu, bez żargonu".
8. **`ctaUnified` jest pomocniczy** — to jeden krótki tekst używany w wielu miejscach (hero CTA, final CTA, sticky CTA). H1 hero, H1 final, card CTAs mogą być różne, ale wszystkie wskazują na ten sam główny krok (ankieta).
9. **Featured card** odpowiada intencji wariantu (kary → audyt; aaS → aaS; CISO → aaS; itd.).
10. **`hideCompare: true`** dla wariantów top-funnel (`gads-kary`, `gads-podlegam`, `li-ceo`) — za wcześnie na porównanie kosztów. Reszta widzi compare.

### Wzorzec wyjścia

Patrz istniejące pliki: [copy/gads-kary.md](../copy/gads-kary.md), [copy/li-ciso.md](../copy/li-ciso.md). Zachowuj tę samą strukturę.

### Walidacja po napisaniu

- Czy facts są nietknięte (kwoty, progi, daty)?
- Czy `humanizer` przeszedł (brak em-dashy, AI-isms, anglicyzmów)?
- Czy ton pasuje do persony?
- Czy CTA jest czasownikowe i konkretne?
- Czy featured card i scopeMode są zgodne z intencją kampanii?

### Następny krok (Sebastian)

Po wygenerowaniu copy Sebastian poprosi agenta o sync do `landing/src/content/variants.ts` (osobny prompt: `prompts/03-sync-copy-to-wireframes.md`).
