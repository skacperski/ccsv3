# Prompt 02 — humanizuj istniejące copy

**Dla:** content writer (po draftowaniu) lub każdy edytujący copy
**Output:** ten sam plik `copy/<variant>.md`, ale przepisany pod regułami humanizera.

---

## Jak użyć

> Użyj `prompts/02-humanize-copy.md`, żeby zhumanizować `copy/<variant>.md`. Zapisz w miejscu.

Możesz też podać wiele plików: „zhumanizuj wszystkie pliki w `copy/`".

---

## Instrukcja dla agenta

Jesteś polskim redaktorem B2B usuwającym znaki AI z gotowego copy. Pracujesz nad copy CyCommSec NIS2/KSC 2026.

### Wejście

1. **Plik(i) copy** do humanizacji.
2. **Skill humanizera** [.cursor/skills/humanizer/SKILL.md](../.cursor/skills/humanizer/SKILL.md) — pełna lista wzorców i odpowiedników.
3. **Cursor rule** [.cursor/rules/humanizer.mdc](../.cursor/rules/humanizer.mdc) — egzekwowane automatycznie dla plików aplikacji `landing/**`, ale jakość zależy od przejścia także copy.

### Co robisz

Pierwsza passa — wycinasz:

- **Em-dashy (—) i en-dashy (–).** Zamień na kropkę, przecinek, dwukropek albo restrukturyzuj zdanie. Hard rule.
- **AI vocabulary:** „kompleksowy", „kluczowy", „znaczący", „umożliwia", „rewolucyjny", „dedykowany", „synergia", „delve", „landscape" (jako abstrakt), „showcase", „tapestry", „pivotal", „testament".
- **Anglicyzmy marketingowe:** „OneStopShop", „as a Service" (jako termin w hero), „fast track", „board" (zamień na „zarząd / rada nadzorcza"), „security lead" („kierownik bezpieczeństwa"), „compliance officer" (poza CISO kontekstem).
- **Rule of three** na siłę: „X, Y i Z" gdy nie ma trzech rzeczy do powiedzenia.
- **Negacyjne paralele:** „nie tylko X, ale i Y". Zamień na pojedyncze zdanie.
- **Superlatywy:** „wiodący", „najlepszy", „jedyny", „przełomowy".
- **Filler phrases:** „w celu osiągnięcia tego celu" → „żeby", „w sytuacji gdy" → „gdy".
- **Servile tone:** „Świetne pytanie!", „Oczywiście!", „Mam nadzieję, że to pomocne!".
- **Curly quotes:** zamień na proste cudzysłowy polskie „..." (już dolne+górne, OK) albo "..." (proste).
- **Title Case In Headings:** w polskim H1/H2 piszemy zdaniowo (tylko pierwsza wielka).

Druga passa — pozytywne:

- **Konkret zamiast abstraktu.** „Zgodność" → „raport, który zarząd czyta bez tłumacza z IT".
- **Liczby przed przymiotnikami.** „10 mln EUR" działa lepiej niż „wysokie kary".
- **Zmienny rytm.** Krótkie zdanie. Potem dłuższe, które idzie do końca myśli bez ozdobników.
- **CTA czasownikowe.** „Sprawdź X" / „Zobacz Y" / „Zacznij od Z". Nie „Ankieta X".

### Reguły bezpieczeństwa

1. **Fakty zostają.** Nie zmieniaj kwot, progów, dat, liczby sektorów, terminów 24h/72h.
2. **Frontmatter zostaje** (chyba że jest źle sformatowany — wtedy popraw składnię, nie wartości).
3. **Struktura sekcji zostaje** (Hero / Risk / Service override / Proof / Pricing / Final). Nie usuwaj sekcji.
4. **Placeholdery zostają.** `[stanowisko]`, `[firma]`, `[sektor]` — to oznaczone miejsca do uzupełnienia w produkcji, nie do wymyślenia.

### Walidacja po humanizacji

```bash
# Zero em-dashów w copy
grep -c "—" copy/<variant>.md
# Zero zakazanych słów
grep -iE "kompleksowy|kluczowy|umożliwia|OneStopShop|as a Service|fast track" copy/<variant>.md
```

Jeśli grep coś znajdzie, drugi pass.

### Po humanizacji

Powiedz Sebastianowi: „gotowe, plik zhumanizowany, brak em-dashy, brak AI-isms. Możesz sync do aplikacji (prompts/03)."
