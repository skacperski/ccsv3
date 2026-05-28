# references/

Design systemy zewnętrzne wykorzystane jako baza dla [designs/](../designs/). Pochodzą z [getdesign.md](https://getdesign.md/) — katalog ekstraktowanych specyfikacji znanych systemów (kolory, typografia, komponenty).

## Pliki

| Plik | System | Użyty w |
|------|--------|---------|
| [getdesign-ibm-carbon.md](getdesign-ibm-carbon.md) | IBM Carbon Design System | bazą dla [designs/design-hashicorp.html](../designs/design-hashicorp.html) (Carbon → re-skin do HashiCorp) |
| [getdesign-razorpay-sprint.md](getdesign-razorpay-sprint.md) | Razorpay Sprint'26 | bazą dla [designs/design-sprint.html](../designs/design-sprint.html) |

## Jak dodać nową referencję

Pobierz spec z getdesign.md:

```bash
# np. Stripe
curl -sL "https://getdesign.md/design-md/stripe/preview.html" -o references/getdesign-stripe.html
# albo bezpośrednio raw markdown jeśli dostępny
```

Albo poproś agenta:

> Pobierz spec Stripe z getdesign.md i zapisz jako `references/getdesign-stripe.md`. Wyciągnij tokens, typografię i komponenty.

Następnie użyj [prompts/04-build-new-design.md](../prompts/04-build-new-design.md), żeby zbudować nowy design na tej bazie.

## Format

Każda referencja zawiera:
- **Tokens kolorów** (hex)
- **Typografię** (font family, weight, size, line-height, letter-spacing per skala)
- **Komponenty** (button styles, card styles, hero patterns)
- **Layout rules** (max-width, padding, breakpointy)
- **Sygnatury wizualne** charakterystyczne dla brandu
