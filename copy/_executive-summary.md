---
type: brief
language: pl
purpose: Brief pod wireframe w relume.io (≤4800 znaków)
source: personas/ + copy/ + copy/_shared.md
---

# Executive Summary — landing page NIS2 / KSC 2026 (CyCommSec)

## Cel
Jedna płatna strona, która kwalifikuje firmę pod NIS2/KSC i prowadzi do jednej konwersji: ankieta samooceny (2 min, bez zobowiązań). Strona obsługuje 9 wariantów reklamowych podmienianych po `utm_campaign` (Google Ads x5, LinkedIn x3, fallback default). Sekcje statyczne są wspólne. Dynamiczne (hero, risk, service H2+sub, proof, pricing lead, CTA kart, final) zmieniają się per wariant.

## Odbiorca
Decydenci B2B w 18 sektorach NIS2: zarząd/CEO (ryzyko osobiste), CISO/IT (dowody techniczne, jedno SLA, IT i OT), COO (ciągłość, dostawcy), CFO (koszt vs zespół własny). Język: 2. os. l.mn. Bez żargonu w wariantach zarządczych, terminologia techniczna w wariancie CISO.

## Struktura sekcji (kolejność)
0. Header. Logo CyCommSec, telefon opcjonalny. Bez globalnej nawigacji (reguła paid LP).
1. Hero (dynamiczny). H1 z konkretem wariantu, sub 1-3 zdania, 3 staty, CTA główne, micro, czasem CTA wtórne. Przykłady H1: kary „Kara za NIS2 sięga 10 mln EUR. Podlegacie?"; usługa „NIS2 jako usługa od 15 900 zł/mc"; zarząd „Pod KSC odpowiada zarząd. Także wy osobiście."
2. Scope (kwalifikacja). Tryb full: 3 bullety (sektor z listy / 50 osób albo 10 mln EUR obrotu / nowelizacja KSC z lutego 2026). Tryb compact: jeden akapit (tylko wariant gads-podlegam).
3. Risk (dynamiczny, model problem-agitacja). H2 + lead + 3-4 bullety bólu wariantu: kary i odpowiedzialność zarządu, koszt budowy zespołu, brak dowodów wdrożenia, ciągłość i dostawcy.
4. Service (H2+sub dynamiczne, filary statyczne). 3 filary: Regulacja (audyt luk, polityki, procedury incydentów, szkolenia zarządu), Technologia (pentesty, podatności, utwardzenie, art. 21), Ciągłość (SOC 24/7, zgłoszenia 24h/72h, kontrola dostawców IT).
5. How it works (statyczny). 3 kroki: ankieta 2 min, audyt i plan dla zarządu od 9 900 zł, wdrożenie albo usługa miesięczna od 15 900 zł/mc.
6. Proof (cytat dynamiczny, reszta statyczna). Logo klientów (placeholder), cytat per wariant z atrybucją [stanowisko]/[firma]/[sektor].
7. Pricing (lead i CTA kart dynamiczne, ceny statyczne). 3 pakiety: Ocena gotowości od 9 900 zł, Wdrożenie od 24 900 zł, NIS2 jako usługa od 15 900 zł/mc. Karta wyróżniona zależna od wariantu.
8. Compare (statyczny, ukrywany). Zespół własny ok. 38 644 zł/mc kontra usługa od 15 900 zł/mc, oszczędność 61,4% z notką o metodologii TCO. Ukryty dla top-funnel (kary, podlegam, ceo).
9. FAQ (statyczny). 7 pozycji: zmiany KSC od lutego 2026, ISO 27001 a NIS2, próg 50 osób, kary dla zarządu, czas wdrożenia, lista 18 sektorów, art. 21.
10. Final (dynamiczny). H2, sub, CTA spójne z hero.
- Footer. Polityka prywatności, RODO. W produkcji KRS/NIP/adres siedziby.

## Strategia CTA
Jedna główna konwersja na całej stronie: ankieta 2 min. CTA czasownikowe, hero spójne z final. Warianty zarządcze: „Zobacz raport dla zarządu" plus opcjonalne „Umów 20 min rozmowy". Warianty zakupowe i operacyjne: CTA wtórne „Wolisz rozmowę? Kontakt po ankiecie".

## Mapowanie wariantów (utm_campaign → wariant)
nis2-kary, nis2-test, nis2-audyt, nis2-wdrozenie, nis2-managed, nis2-li-ceo, nis2-li-ciso, nis2-li-ops, brak UTM = default. Podgląd lokalny: `?variant=<id>`.

## Fakty zablokowane (bez legal review nie zmieniać)
Podpis KSC 19 lutego 2026. Kary: do 10 mln EUR albo 2% obrotu (podmiot kluczowy), do 7 mln EUR albo 1,4% (podmiot ważny). Progi: 50 osób albo 10 mln EUR obrotu. Zgłoszenia 24h/72h. 18 sektorów. Ceny: audyt od 9 900 zł, wdrożenie od 24 900 zł, usługa od 15 900 zł/mc. Benchmark własny ok. 38 644 zł/mc. Oszczędność 61,4%. Wdrożenie 6-18 mies., wersja przyspieszona ~6 mies.

## Placeholdery do uzupełnienia przed deploy
Logo klientów, atrybucja cytatów, treści FAQ, URL ankiety (href CTA), URL polityki i RODO, telefon w headerze, KRS/NIP/adres w stopce.

## Następny krok
Z tego briefu budujemy wireframe w relume.io: sekcje 0-10 jako bloki, a hero, risk, service, proof, pricing i final jako pola dynamiczne pod 9 wariantów.
