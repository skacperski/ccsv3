# wireframes/

Bazowy szkielet strony NIS2 — **czarno-biały, bez stylowania**. Pokazuje strukturę, sekcje, kontrakt JS i działanie symulatora wariantów reklamowych.

## Pliki

- **[wireframe.html](wireframe.html)** — kanoniczny B&W szkielet. Wszystkie [designs/](../designs/) wywodzą się z niego.

## Po co osobny wireframe?

- **Testowanie kontraktu JS** bez wpływu stylów na czytelność (debugowanie applyVariant, scopeMode, hideCompare).
- **Walidacja struktury** — czy każda sekcja jest na miejscu, czy wszystkie 9 wariantów się przełącza.
- **Punkt odniesienia** dla nowych designs — re-skin musi działać tak samo jak wireframe.

## Jak otworzyć

```bash
open wireframes/wireframe.html
open "wireframes/wireframe.html?variant=gads-aas"
```
