# Prompt 04 — zbuduj nowy design (re-skin)

**Dla:** Sebastian (deweloper / agent budujący)
**Output:** nowy plik `designs/design-<name>.html` z innym językiem wizualnym, ale tą samą treścią i kontraktem JS.

---

## Jak użyć

> Użyj `prompts/04-build-new-design.md`, żeby zbudować `designs/design-<name>.html` w stylu <X>.

Przykład: „w stylu Linear" / „w stylu Stripe" / „kinetic editorial z dużą serif" / „brutalist z acid green".

Opcjonalnie wskaż referencję: „użyj getdesign.md/stripe jako bazę" → agent pobiera tokens i adaptuje.

---

## Instrukcja dla agenta

Tworzysz **nowy skin** istniejącej strony NIS2 / KSC 2026 dla CyCommSec. Treść (copy) i JS są niezmienne — tylko warstwa wizualna się różni.

### Wejście

1. **Brief stylu** od użytkownika (system designu, paleta, typografia, mood).
2. **Treść:** [copy/_shared.md](../copy/_shared.md) (statyczne) + 9 plików `copy/<variant>.md` (dynamiczne warianty).
3. **Personas:** [personas/](../personas/) — żeby zrozumieć kogo strona ma trafić.
4. **Istniejące designs jako referencja struktury:**
   - [designs/design-cohere.html](../designs/design-cohere.html) — Cohere style
   - [designs/design-awwwards.html](../designs/design-awwwards.html) — brutalist editorial
   - [designs/design-hashicorp.html](../designs/design-hashicorp.html) — dark enterprise tech
   - [designs/design-sprint.html](../designs/design-sprint.html) — Razorpay Sprint editorial z GSAP
5. **References:** [references/](../references/) — getdesign.md design tokens dla istniejących systemów. Jeśli brief wskazuje znany system, pobierz preview z `https://getdesign.md/<system>/preview.html`.

### Zachowuj (hard rules)

1. **Wszystkie ID DOM** wymagane przez JS (lista w [prompts/03-sync-copy-to-wireframes.md](03-sync-copy-to-wireframes.md) → DOM contract). Tracąc choć jedno, symulator wariantów się rozjedzie.
2. **Wszystkie 9 wariantów** w obiekcie `VARIANTS` (`gads-kary`, `gads-podlegam`, `gads-audyt`, `gads-wdrozenie`, `gads-aas`, `li-ceo`, `li-ciso`, `li-coo`, `default`).
3. **Mapowanie UTM** w `UTM_CAMPAIGN_MAP`.
4. **Funkcje:** `applyVariant`, `setFeaturedCard`, `updateCardCtas`, `applyScopeMode`, `resolveVariantFromUrl`, `buildPreviewUrl`.
5. **Klasy:** `.sim-btn[data-variant]`, `.wf-card`, `.wf-card--featured`, `.card-cta[data-card]`, `.is-collapsed`, `.is-hidden`, `.dev-meta-hidden`, `.wf-dev-only`.
6. **Symulator panel** — w jakiejkolwiek formie (sidebar, drawer, modal), z 9 przyciskami i opcjami toggle metadata + copy link.
7. **Fakty** — kwoty, daty, progi nietykalne (lista w `_shared.md` → Facts & constraints).
8. **Pole jak `dev-meta-hidden` na body** — kontroluje widoczność `.wf-dev-only`.

### Zmieniasz (twoja kreacja)

- **Layout** sekcji — kolejność może być inna, byle wszystkie 10 było obecne (header, hero, scope, risk, service, how, proof, pricing, compare, faq, final, footer).
- **Typografia** — Google Fonts dowolne.
- **Paleta** — własne tokeny CSS.
- **Animacje, interakcje** — GSAP, CSS animations, IntersectionObserver, custom cursor, parallax, magnetic buttons. Co tylko pasuje do stylu.
- **Komponenty wizualne** — karty mogą być dowolnego kształtu, byle z wymaganymi ID/klasami.
- **Responsywność** — własne breakpointy.

### Struktura sekcji (kanoniczna, ~10 sekcji)

| # | id | rola | uwaga JS |
|---|---|---|---|
| 0 | (header) | sticky brand + telefon | brak global nav |
| 1 | `sec-hero` | H1 + CTA + stats | wszystkie ID hero-* |
| 2 | `sec-scope` | kwalifikacja | scopeMode full/compact |
| 3 | `sec-risk` | PAS | risk-h2/lead/bullets |
| 4 | `sec-service` | 3 pillary | service-h2/sub |
| 5 | `sec-how` | 3 kroki | static |
| 6 | `sec-proof` | trust + cytat | proof-quote |
| 7 | `sec-pricing` | 3 pakiety | featured card, card CTAs |
| 8 | `sec-compare` | in-house vs aaS | hideCompare toggle |
| 9 | `sec-faq` | accordion 7 pytań | HTML5 `<details>` |
| 10 | `sec-final` | końcowy CTA | final-h2/sub/cta |
| — | (footer) | linki prawne | brak sitemap |

### Walidacja po build

```bash
FILE=designs/design-<name>.html
wc -l "$FILE"
# JS check
python3 -c "import re; print(re.search(r'<script>(.*?)</script>', open('$FILE').read(), re.DOTALL).group(1))" > /tmp/x.js
node --check /tmp/x.js

# DOM contract
for id in hero-h1 hero-sub hero-stats risk-h2 risk-bullets service-h2 proof-quote pricing-lead final-h2 final-cta sim-meta card-audit card-impl card-aas; do
  echo -n "$id: "; grep -c "id=\"$id\"" "$FILE"
done

# 9 variants
grep -cE '"(gads-|li-|default)' "$FILE"
```

### Po build

Otwórz w przeglądarce, kliknij wszystkie 9 wariantów w sim panel. Sprawdź `?utm_campaign=nis2-managed`. Powiedz Sebastianowi: "design gotowy, JS OK, kontrakt zachowany, 9 wariantów działa".
