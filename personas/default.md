---
id: default
channel: Direct / organic / inny
campaign: null
intent: szeroka / nieznana
copy_file: copy/default.md
---

# Persona — `default`

## Kto trafił

Fallback dla osób, które trafiły **bez UTM** — najczęściej:

- Wyszukanie organiczne („CyCommSec NIS2", „audyt NIS2 Polska") — różne intencje.
- Bezpośrednie wpisanie URL z wizytówki, billboardu, podcastu.
- Cross-link z innej podstrony serwisu (jeśli istnieje).
- Konsument cudzego linka (Slack, email, share).

Mieszanka decydentów — nie da się dobrać jednego konkretnego bólu.

## Co go boli (przekrój)

- Niepewność co do zakresu NIS2.
- Niepewność co do dostawcy (kto wiarygodny, kto krzak).
- Niepewność co do następnego kroku (audyt? wdrożenie? aaS?).

## Czego potrzebuje, żeby skonwertować

- **Pełny obraz oferty:** wszystkie trzy pakiety widoczne (audyt 9 900 / wdrożenie 24 900 / aaS 15 900).
- **Niski próg pierwszego kroku:** ankieta 2 min.
- **Bez wciskania:** sygnał, że pierwszy krok jest darmowy i niezobowiązujący.
- **Sekcja porównania widoczna** — pozwala self-qualify.

## Obiekcje, które muszą się rozejść

- „Nie wiem, czy to dla mnie." → page pokazuje pełny obraz, niech użytkownik wybierze.
- „Może to zagraniczny vendor?" → produkcja: pokazać KRS/NIP w stopce, polską domenę `.pl`.

## Ton i format

- **Ton:** neutralny, profesjonalny. Bez agresywnego targetowania pod konkretną personę.
- **Format:** wszystkie sekcje widoczne (compare nie ukryty). Featured card to `card-audit` (najniższy próg wejścia).
- **Proof:** placeholder `[ Cytat klienta — do uzupełnienia w produkcji ]` — wymaga produkcyjnego zastąpienia.

## Trust signals krytyczne

- W produkcji KONIECZNE: KRS, NIP, adres siedziby, polska domena.
- Najszerszy compare table — fallback dla każdej obawy o cenę.
- Brak konkretu — kompensowane szerokim FAQ.

## Mapowanie do copy

→ [copy/default.md](../copy/default.md)
