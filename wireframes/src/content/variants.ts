import type {
  Content,
  VariantId,
  VariantMeta,
  Pillar,
  Step,
  FaqItem,
  CompareRow,
  PricingCard,
  CardId,
} from "./types";

/* ------------------------------------------------------------------ */
/* SHARED — constant across every variant                              */
/* ------------------------------------------------------------------ */

/** Secondary CTA next to primary (hero + final) on every variant */
const CTA_SECONDARY_CALENDAR = "Wolisz rozmowę? Pokaż kalendarz";

const PILLARS: Pillar[] = [
  {
    num: "01",
    label: "Regulacja",
    h2: "Regulacja i dokumentacja",
    body: "Audyt luk, polityki, procedury obsługi incydentów, plany ciągłości i szkolenia dla zarządu oraz zespołu.",
  },
  {
    num: "02",
    label: "Technologia",
    h2: "Technologia i testy",
    body: "Pentesty, skan podatności, utwardzenie środowiska i remediacja pod art. 21 KSC.",
  },
  {
    num: "03",
    label: "Ciągłość",
    h2: "Ciągłość i monitoring",
    body: "SOC całą dobę, zgłoszenia do organów w 24h i 72h, przeglądy zgodności oraz kontrola dostawców IT.",
  },
];

const STEPS: Step[] = [
  { title: "Krok 1. Ankieta", body: "Dwie minuty pytań. Dowiecie się, czy wchodzicie w NIS2 i gdzie są luki." },
  { title: "Krok 2. Audyt i plan", body: "Od 9 900 zł. Raport dla zarządu, plan na 90 dni, konkretne działania." },
  { title: "Krok 3. Wdrożenie lub usługa", body: "Wdrożenie od 24 900 zł albo usługa miesięczna od 15 900 zł/mc." },
];

const COMPARE_ROWS: CompareRow[] = [
  { label: "Koszt miesięczny", team: "ok. 38 644 zł", aas: "od 15 900 zł" },
  { label: "Gotowość zespołu", team: "rekrutacja ok. 9 mies.", aas: "od pierwszego miesiąca" },
  { label: "Pentesty i narzędzia", team: "osobno, z dopłatami", aas: "w cenie" },
  { label: "Rotacja i szkolenia", team: "po waszej stronie", aas: "po naszej stronie" },
  { label: "Zgłoszenia 24h/72h", team: "pilnujecie sami", aas: "pilnujemy my" },
];

const FAQ_ITEMS: FaqItem[] = [
  {
    q: "Co zmienia KSC od 19 lutego 2026?",
    a: "Nowelizacja Krajowego Systemu Cyberbezpieczeństwa wchodzi w życie 19 lutego 2026. Obowiązkowe audyty, polityki bezpieczeństwa, zgłaszanie incydentów w 24h i 72h oraz osobista odpowiedzialność zarządu. Firmy od 50 osób lub 10 mln EUR obrotu muszą przygotować się już teraz.",
  },
  {
    q: "ISO 27001 wystarczy do NIS2?",
    a: "ISO 27001 to dobra podstawa, ale NIS2 wymaga więcej. Dochodzą procedury zgłaszania incydentów, plany ciągłości, szkolenia zarządu i nadzór nad dostawcami IT. Sama certyfikacja nie wystarczy.",
  },
  {
    q: "Próg 50 osób liczy etaty czy współpracowników?",
    a: "Liczą się pracownicy na umowę o pracę. Współpracownicy, kontrahenci i freelancerzy nie wchodzą w próg. Jeśli macie 50 etatów, obowiązek dotyczy was niezależnie od obrotu.",
  },
  {
    q: "Czy zarząd odpowiada osobiście za kary?",
    a: "Tak. Prezes i członkowie zarządu mogą odpowiadać osobiście za brak wdrożenia NIS2. Kary sięgają 10 mln EUR lub 2% obrotu. To nie jest tylko problem działu IT.",
  },
  {
    q: "Ile trwa wdrożenie NIS2?",
    a: "Audyt trwa 4 do 8 tygodni. Wdrożenie polityk i procedur to 2 do 3 miesięcy. Utwardzenie środowiska i pentesty mogą zająć 6 do 18 miesięcy w zależności od skali. Usługa miesięczna skraca start do kilku tygodni.",
  },
  {
    q: "Lista 18 sektorów objętych NIS2",
    a: "Sektory kluczowe: energetyka, transport, bankowość, infrastruktura rynków finansowych, ochrona zdrowia, woda pitna, ścieki, infrastruktura cyfrowa, zarządzanie usługami ICT (B2B), administracja publiczna, przestrzeń kosmiczna. Sektory ważne: usługi pocztowe i kurierskie, gospodarka odpadami, produkcja (chemikalia, żywność i napoje, wyroby medyczne), dostawcy usług cyfrowych, organizacje badawcze.",
  },
  {
    q: "Co mówi art. 21 NIS2: 10 wymogów po polsku",
    a: "1. Polityki bezpieczeństwa i zarządzania ryzykiem. 2. Obsługa incydentów (wykrywanie, klasyfikacja, raportowanie 24h i 72h). 3. Ciągłość działania i zarządzanie kryzysowe (BCP/DRP). 4. Bezpieczeństwo łańcucha dostaw. 5. Bezpieczeństwo sieci i systemów. 6. Polityki oceny skuteczności środków. 7. Podstawowe praktyki cyberhigieny i szkolenia. 8. Kryptografia i szyfrowanie tam, gdzie uzasadnione. 9. Bezpieczeństwo zasobów ludzkich i kontrola dostępu. 10. Uwierzytelnianie wieloskładnikowe i szyfrowane kanały komunikacji.",
  },
];

const FAQ_TAIL = {
  h: "Macie więcej pytań?",
  sub: "Skontaktujcie się po ankiecie albo zadzwońcie do nas.",
  cta: "Kontakt",
};

const FOOTER = {
  brand: "CyCommSec",
  privacy: "Polityka prywatności",
  copyright: "© 2026 CyCommSec",
};

// Pricing card base data (price/features SHARED; the CTA label is per-variant).
function pricingCards(ctas: { audit: string; impl: string; aas: string }): PricingCard[] {
  return [
    {
      id: "card-audit",
      name: "Ocena gotowości",
      desc: "Analiza luk, raport dla zarządu, plan na 90 dni",
      price: "9 900 zł",
      period: "jednorazowo",
      cta: ctas.audit,
      features: ["Analiza stanu obecnego", "Raport dla zarządu", "Plan działań na 90 dni"],
    },
    {
      id: "card-impl",
      name: "Wdrożenie NIS2",
      desc: "Polityki, procedury, szkolenia, środki techniczne",
      price: "24 900 zł",
      period: "projekt",
      cta: ctas.impl,
      features: ["Polityki i procedury", "Szkolenia zespołu", "Utwardzenie systemów", "Raport końcowy"],
    },
    {
      id: "card-aas",
      name: "NIS2 jako usługa",
      desc: "SOC 24/7, pentesty, utrzymanie zgodności, raportowanie",
      price: "15 900 zł",
      period: "miesięcznie",
      cta: ctas.aas,
      features: ["SOC 24/7", "Pentesty w cenie", "Raportowanie 24h/72h", "Przeglądy i aktualizacje", "Nadzór dostawców"],
    },
  ];
}

/* ------------------------------------------------------------------ */
/* Per-variant specification (only the dynamic fields)                 */
/* ------------------------------------------------------------------ */

interface VariantSpec {
  id: VariantId;
  label: string;
  channel: string;
  campaign: string | null;
  scopeMode: "full" | "compact";
  hideCompare: boolean;
  featuredCard: CardId;
  ctaUnified: string;
  hero: {
    h1: string;
    sub: string;
    stats: [string, string, string];
    // micro usunięty
  };
  risk: { h2: string; lead: string; cards: string[] };
  service: { h2: string; sub: string };
  proof: { quote: string; attribution: string };
  pricing: { lead: string; ctas: { audit: string; impl: string; aas: string } };
  final: { h2: string; sub: string };
}

function build(spec: VariantSpec): Content {
  return {
    id: spec.id,
    label: spec.label,
    channel: spec.channel,
    campaign: spec.campaign,
    scopeMode: spec.scopeMode,
    hideCompare: spec.hideCompare,
    featuredCard: spec.featuredCard,
    nav: { brand: "CyCommSec", cta: spec.ctaUnified },
    hero: {
      h1: spec.hero.h1,
      sub: spec.hero.sub,
      stats: spec.hero.stats,
      ctaPrimary: spec.ctaUnified,
      ctaSecondary: CTA_SECONDARY_CALENDAR,
    },
    scope: {
      kicker: "Zakres",
      h2: "Czy NIS2 dotyczy waszej firmy?",
      mode: spec.scopeMode,
      bullets: [
        "Działacie w jednym z **18 sektorów** objętych NIS2 i KSC.",
        "Macie **50 osób** albo **10 mln EUR obrotu** rocznie (albo jesteście podmiotem specjalnym, np. DNS, rejestr domen).",
        "Po nowelizacji KSC z lutego 2026 nikt wam jeszcze nie powiedział wprost, co i do kiedy.",
      ],
      compactText: "Sektor z listy NIS2, 50 osób albo 10 mln EUR obrotu? Po lutowej nowelizacji KSC najprawdopodobniej jesteście w środku. Ankieta domknie pytanie w 2 minuty.",
      cta: spec.ctaUnified,
    },
    risk: { kicker: "Zagrożenie", h2: spec.risk.h2, lead: spec.risk.lead, cards: spec.risk.cards },
    service: { kicker: "Rozwiązanie", h2: spec.service.h2, sub: spec.service.sub, pillars: PILLARS },
    how: {
      kicker: "Proces",
      h2: "Jak to wygląda krok po kroku",
      sub: "Zacznijcie od ankiety, przejdźcie do audytu, wybierzcie wdrożenie albo usługę.",
      steps: STEPS,
    },
    proof: {
      h2: "Zaufali nam",
      sub: "Firmy z różnych sektorów już wdrażają NIS2.",
      quote: spec.proof.quote,
      attribution: spec.proof.attribution,
    },
    pricing: {
      kicker: "Cennik",
      h2: "Od czego zacząć",
      lead: spec.pricing.lead,
      featuredCard: spec.featuredCard,
      cards: pricingCards(spec.pricing.ctas),
    },
    compare: {
      kicker: "Porównanie",
      h2: "Własny zespół vs NIS2 jako usługa",
      sub: "Własny zespół kosztuje więcej i dłużej się buduje. Usługa daje gotowy zespół od pierwszego miesiąca.",
      teamCol: "Własny zespół",
      aasCol: "NIS2 jako usługa",
      rows: COMPARE_ROWS,
      footnote: "Wg materiałów CyCommSec około 61,4% taniej niż typowy model własny. Metodologia TCO na życzenie.",
    },
    faq: {
      kicker: "FAQ",
      h2: "Pytania",
      sub: "Odpowiedzi na najczęstsze wątpliwości wokół NIS2 i KSC.",
      items: FAQ_ITEMS,
      tail: FAQ_TAIL,
    },
    final: {
      h2: spec.final.h2,
      sub: spec.final.sub,
      ctaPrimary: spec.ctaUnified,
      ctaSecondary: CTA_SECONDARY_CALENDAR,
    },
    footer: FOOTER,
  };
}

/* ------------------------------------------------------------------ */
/* The 9 variants                                                      */
/* ------------------------------------------------------------------ */

const SPECS: VariantSpec[] = [
  {
    id: "default",
    label: "Domyślny",
    channel: "Direct / organic",
    campaign: null,
    scopeMode: "full",
    hideCompare: false,
    featuredCard: "card-audit",
    ctaUnified: "Sprawdź w 2 minuty, czy NIS2 was dotyczy",
    hero: {
      h1: "NIS2 i KSC 2026: sprawdźcie, co dotyczy waszej firmy",
      sub: "Audyt, wdrożenie i utrzymanie zgodności u jednego dostawcy. Zaczynacie od krótkiej ankiety, a wynik mówi, czy w ogóle wchodzicie w NIS2 i od czego macie zacząć.",
      stats: ["KSC od 19 lutego 2026", "18 sektorów objętych", "kary do 10 mln EUR"],
    },
    risk: {
      h2: "Co się zmienia po nowelizacji KSC",
      lead: "Od 19 lutego 2026 obowiązki z NIS2 wchodzą do polskiego prawa. Część firm dowie się o tym dopiero przy pierwszej kontroli albo pierwszym incydencie.",
      cards: [
        "Obowiązki obejmują 18 sektorów oraz firmy od 50 osób albo 10 mln EUR obrotu rocznie.",
        "Incydenty trzeba zgłaszać organom w 24h i 72h, więc procedura musi być gotowa wcześniej.",
        "Kary sięgają 10 mln EUR lub 2% obrotu (podmiot kluczowy) i 7 mln EUR lub 1,4% (podmiot ważny).",
        "Pierwszy krok to ankieta. W 2 minuty wiecie, czy temat was dotyczy i gdzie macie luki.",
      ],
    },
    service: {
      h2: "Audyt, polityki, pentesty i SOC u jednego dostawcy",
      sub: "Jedna umowa zamiast czterech. Zgodność, która działa w firmie, a nie tylko leży w PDF.",
    },
    proof: {
      quote: "[ Cytat klienta — do uzupełnienia w produkcji ]",
      attribution: "[stanowisko], [firma] ([sektor])",
    },
    pricing: {
      lead: "Zaczynamy od ankiety. Pokaże, czy starczy audyt, czy potrzebujecie wdrożenia albo usługi miesięcznej.",
      ctas: { audit: "Zacznij od audytu", impl: "Zobacz zakres wdrożenia", aas: "Sprawdź usługę miesięczną" },
    },
    final: {
      h2: "Sprawdźcie, gdzie jesteście wobec NIS2",
      sub: "2 minuty ankiety wystarczą, żeby wiedzieć, czy obowiązki was dotyczą i od czego zacząć. Bez zobowiązań.",
    },
  },
  {
    id: "gads-kary",
    label: "Kary KSC",
    channel: "Google Ads · nis2-kary",
    campaign: "nis2-kary",
    scopeMode: "full",
    hideCompare: true,
    featuredCard: "card-audit",
    ctaUnified: "Sprawdź ryzyko w 2 min",
    hero: {
      h1: "Kara za NIS2 sięga 10 mln EUR. Podlegacie?",
      sub: "Nowelizacja KSC obowiązuje od 19 lutego 2026. Firmy objęte NIS2 muszą mieć zabezpieczenia i zgłaszać incydenty w 24h/72h. Za brak grozi do 10 mln EUR albo 2% obrotu, a kara może objąć też zarząd.",
      stats: ["do 10 mln EUR kary", "24h/72h na zgłoszenie", "obowiązek od 19.02.2026"],
    },
    risk: {
      h2: "Kara idzie na firmę. Często też na członków zarządu.",
      lead: "NIS2 wprowadza w UE naprawdę dotkliwe kary. Tłumaczenie „zajmiemy się tym później” przy kontroli już nie zadziała.",
      cards: [
        "Do 10 mln EUR albo 2% obrotu (podmiot kluczowy).",
        "Do 7 mln EUR albo 1,4% obrotu (podmiot ważny).",
        "Osobista odpowiedzialność prezesa, CTO i CISO.",
        "Kontrole organów już ruszają.",
      ],
    },
    service: {
      h2: "Audyt, który da wam dowody na kontrolę",
      sub: "Sprawdzamy luki, procedury incydentów i zabezpieczenia IT. Każdy krok dokumentujemy pod KSC, więc na kontroli pokażecie logi i raporty, nie same polityki.",
    },
    proof: {
      quote: "Po ankiecie wiedzieliśmy, gdzie stoimy wobec KSC. Zarząd dostał jedną stronę po polsku, bez tłumaczenia z języka IT.",
      attribution: "[stanowisko], [firma], [sektor]",
    },
    pricing: {
      lead: "Zaczynamy od ankiety. Pokaże, czy w ogóle podlegacie pod NIS2 i czy starczy audyt, czy potrzeba pełnego wdrożenia.",
      ctas: { audit: "Zacznij od audytu", impl: "Sprawdź w 2 min", aas: "Sprawdź w 2 min" },
    },
    final: {
      h2: "Lepiej wiedzieć przed kontrolą niż po niej",
      sub: "W 2 minuty dowiecie się, czy wchodzicie w NIS2 i co załatwić w pierwszej kolejności, zanim przyjdzie organ.",
    },
  },
  {
    id: "gads-podlegam",
    label: "Czy podlegam?",
    channel: "Google Ads · nis2-test",
    campaign: "nis2-test",
    scopeMode: "compact",
    hideCompare: true,
    featuredCard: "card-audit",
    ctaUnified: "Sprawdźcie w 2 minuty",
    hero: {
      h1: "Czy wasza firma podlega pod NIS2? Sprawdźcie w 2 minuty",
      sub: "Kilka pytań o sektor, wielkość zespołu i to, co już macie. Odpowiedź dostajecie od razu, bez wciskania usługi.",
      stats: ["2 minuty", "18 sektorów", "50 osób / 10 mln EUR"],
    },
    risk: {
      h2: "Najgroźniejsze założenie: „nas to chyba nie dotyczy”",
      lead: "Większość firm w 18 sektorach mieści się w progach NIS2 i nie wie tego. Między podmiotem kluczowym a ważnym jest 3 mln EUR różnicy w karze.",
      cards: [
        "Sektor z listy NIS2.",
        "50 osób albo 10 mln EUR obrotu.",
        "Brak procedur 24h/72h to już naruszenie.",
        "KSC obowiązuje od 19 lutego 2026.",
      ],
    },
    service: {
      h2: "Wchodzicie w NIS2? Pokażemy, co dalej.",
      sub: "Po ankiecie podpowiemy, czy starczy audyt, czy potrzebujecie wdrożenia albo wariantu z usługą miesięczną.",
    },
    proof: {
      quote: "W dwie minuty wiedzieliśmy, czy w ogóle nas to dotyczy. Bez tygodnia rozmów z kancelarią.",
      attribution: "[stanowisko], [firma] ([sektor])",
    },
    pricing: {
      lead: "Zaczynacie od ankiety. Pokaże, czy wystarczy audyt, czy w grę wchodzi wdrożenie albo usługa miesięczna.",
      ctas: { audit: "Sprawdźcie w 2 minuty", impl: "Sprawdźcie w 2 minuty", aas: "Sprawdźcie, czy pasuje" },
    },
    final: {
      h2: "Najpierw odpowiedź. Potem decyzja.",
      sub: "Tak albo nie. A jeśli tak, podpowiemy, od czego zacząć.",
    },
  },
  {
    id: "gads-audyt",
    label: "Audyt 9 900 zł",
    channel: "Google Ads · nis2-audyt",
    campaign: "nis2-audyt",
    scopeMode: "full",
    hideCompare: false,
    featuredCard: "card-audit",
    ctaUnified: "Sprawdź gotowość w 2 min",
    hero: {
      h1: "Ocena gotowości NIS2 z raportem dla zarządu. Od 9 900 zł.",
      sub: "Sprawdzamy luki prawne i techniczne pod KSC. Wychodzicie z planem na 90 dni: polityki, pentesty, utwardzenie środowiska. Dostajecie raport po polsku, gotowy dla zarządu.",
      stats: ["od 9 900 zł ocena", "od 24 900 zł wdrożenie", "6–18 mies. realizacja"],
    },
    risk: {
      h2: "Wdrożenie bez audytu to wydawanie po omacku",
      lead: "Kontrola pyta o dowody na konkretne luki. Bez mapy wdrożenie zamyka nie te ryzyka.",
      cards: [
        "Luki wobec art. 21 KSC, prawne i techniczne.",
        "Raport, który zarząd czyta bez tłumacza z IT.",
        "Plan: polityki, BCP/DRP, pentesty, szkolenia, SOC.",
      ],
    },
    service: {
      h2: "Audyt z testami, nie tylko ze skoroszytem",
      sub: "Raport po polsku dla zarządu, pentesty pod art. 21 KSC, plan działań na 90 dni.",
    },
    proof: {
      quote: "Jeden raport trafił do zarządu i rady nadzorczej. Wcześniej mieliśmy pięć plików od pięciu firm i nikt nie wiedział, który jest aktualny.",
      attribution: "[stanowisko], [firma] ([sektor])",
    },
    pricing: {
      lead: "Start od oceny gotowości (9 900 zł). Ankieta dopasuje zakres do wielkości firmy i sektora, potem widzicie wycenę.",
      ctas: { audit: "Sprawdź gotowość w 2 min", impl: "Sprawdź zakres w 2 min", aas: "Sprawdź usługę miesięczną" },
    },
    final: {
      h2: "Jeden raport zamiast pięciu arkuszy",
      sub: "Ocena gotowości z dowodami, gotowa do pokazania zarządowi i kontroli. Po ankiecie wybieracie: wynik online albo rozmowa w 48h.",
    },
  },
  {
    id: "gads-wdrozenie",
    label: "Wdrożenie 24 900 zł",
    channel: "Google Ads · nis2-wdrozenie",
    campaign: "nis2-wdrozenie",
    scopeMode: "full",
    hideCompare: false,
    featuredCard: "card-impl",
    ctaUnified: "Sprawdź, czy wdrożenie pasuje",
    hero: {
      h1: "Wdrożenie NIS2 w firmie, od 24 900 zł",
      sub: "Polityki, procedury, środki techniczne, szkolenia zarządu i raport końcowy. Pod KSC, z dowodami, które wytrzymają kontrolę.",
      stats: ["od 24 900 zł", "6–18 miesięcy", "przyspieszona w ok. 6 mies."],
    },
    risk: {
      h2: "Wdrożenie bez mapy luk przepala budżet",
      lead: "Wdrożenie pod regulację bez wcześniejszego audytu często zamyka nie te ryzyka, które kontrola sprawdza pierwsze.",
      cards: [
        "Polityki, BCP/DRP, procedury incydentów.",
        "Utwardzenie środowiska i testy pod art. 21 KSC.",
        "Szkolenia zarządu i materiały na kontrolę.",
      ],
    },
    service: {
      h2: "Wdrożenie, które działa w firmie",
      sub: "Polityki, środowisko IT i szkolenia wchodzą w systemy i w pracę zespołu. Zostaje to, co kontrola może sprawdzić, nie plik na dysku.",
    },
    proof: {
      quote: "Luki z audytu zamykaliśmy po kolei, a operacje szły dalej. Bez przestojów, bez paniki w zarządzie.",
      attribution: "[stanowisko], [firma], [sektor]",
    },
    pricing: {
      lead: "Po ankiecie dostajecie pakiet wdrożenia od 24 900 zł, z zakresem skrojonym pod wasz audyt i harmonogram na 6 do 18 miesięcy.",
      ctas: { audit: "Nie macie audytu? Zacznij tu", impl: "Sprawdź zakres wdrożenia", aas: "Porównaj z usługą miesięczną" },
    },
    final: {
      h2: "Dowody zebrane, zarząd wie, co podpisuje",
      sub: "Wdrożenie kończy się działającymi procedurami i dokumentacją na kontrolę. Harmonogram na 6 do 18 miesięcy, wersja przyspieszona w ok. 6 mies.",
    },
  },
  {
    id: "gads-aas",
    label: "NIS2 jako usługa",
    channel: "Google Ads · nis2-managed",
    campaign: "nis2-managed",
    scopeMode: "full",
    hideCompare: false,
    featuredCard: "card-aas",
    ctaUnified: "Sprawdź usługę miesięczną",
    hero: {
      h1: "NIS2 jako usługa od 15 900 zł/mc. Stała cena, wszystko w środku.",
      sub: "Płacicie jedną stawkę co miesiąc. W cenie wdrożenie, monitoring całą dobę, obsługa incydentów, pentesty i polityki. Bez rekrutacji, bez budowy zespołu od zera.",
      stats: ["od 15 900 zł/mc", "61,4%* taniej", "SOC 24/7"],
    },
    risk: {
      h2: "Własny zespół buduje się 9 miesięcy. KSC obowiązuje teraz.",
      lead: "Rekrutacja specjalistów cyber w Polsce to dziś miesiące szukania i około 38 644 zł/mc po stronie pracodawcy. Do tego dochodzą narzędzia i rotacja, bo dobry analityk po roku dostaje lepszą ofertę.",
      cards: [
        "Jedna umowa zamiast czterech: audyt, wdrożenie, utrzymanie, raporty.",
        "Pentesty i skany podatności w abonamencie, bez dopłat.",
        "Zgłoszenia incydentów w terminach 24h i 72h, my pilnujemy zegara.",
      ],
    },
    service: {
      h2: "Zgodność bierzemy my, IT zostaje wasze",
      sub: "Wasz dział IT dalej zna swoje systemy i nimi zarządza. My odpowiadamy za regulację, monitoring i incydenty. Jedna faktura, jeden numer po godzinach.",
    },
    proof: {
      quote: "Policzyłem trzy etaty w cyber i odpuściłem. Płacimy stałą stawkę co miesiąc, SOC działa całą dobę, a ja nie układam grafiku urlopów dla analityków.",
      attribution: "[stanowisko], [firma] ([sektor])",
    },
    pricing: {
      lead: "NIS2 jako usługa kosztuje od 15 900 zł/mc, stała stawka. Niżej porównujemy to z kosztem własnego zespołu. Ankieta podpowie, czy ten model pasuje do waszej skali.",
      ctas: { audit: "Porównaj w ankiecie", impl: "Porównaj w ankiecie", aas: "Sprawdź usługę miesięczną" },
    },
    final: {
      h2: "Stała stawka miesięczna, zero rekrutacji",
      sub: "Wy robicie swoje IT. My bierzemy regulację, monitoring i incydenty, za jedną opłatę. Ankieta w 2 minuty pokaże, czy usługa miesięczna wam się liczy.",
    },
  },
  {
    id: "li-ceo",
    label: "Zarząd / CEO",
    channel: "LinkedIn · nis2-li-ceo",
    campaign: "nis2-li-ceo",
    scopeMode: "full",
    hideCompare: true,
    featuredCard: "card-audit",
    ctaUnified: "Zobacz raport dla zarządu",
    hero: {
      h1: "Pod KSC odpowiada zarząd. Także wy osobiście.",
      sub: "Od 19 lutego 2026 obowiązki spadają na zarząd, nie na IT. Zobaczcie, gdzie firma stoi wobec KSC, zanim zrobi to organ albo incydent.",
      stats: ["osobista odpowiedzialność zarządu", "obowiązuje od 19 lutego 2026", "wynik na 1 stronie"],
    },
    risk: {
      h2: "Zarząd podpisuje odpowiedzialność, której nie zna",
      lead: "KSC z lutego 2026 nie zostawia wyjścia: jeśli firma nie ma zabezpieczeń, odpowiedzialność spada wprost na prezesa i osobę odpowiedzialną za cyber. To nie sprawa IT.",
      cards: [
        "Szkolenia cyber wymagane dla zarządu, nie tylko dla IT.",
        "Osobista odpowiedzialność, gdy brakuje środków bezpieczeństwa.",
        "U podmiotów kluczowych możliwe zawieszenie certyfikatów.",
      ],
    },
    service: {
      h2: "Materiał dla zarządu, nie raport dla działu IT",
      sub: "Audyt, ryzyka i propozycja budżetu w formie gotowej pod uchwałę zarządu.",
    },
    proof: {
      quote: "Prezes dostał jedną stronę z ryzykami i kwotą do decyzji. Bez technicznych skrótów, do przeczytania w pięć minut.",
      attribution: "[stanowisko], [firma] ([sektor])",
    },
    pricing: {
      lead: "Zaczynacie od kwalifikacji, potem audyt z raportem dla zarządu od 9 900 zł.",
      ctas: { audit: "Zobacz raport dla zarządu", impl: "Sprawdź zakres", aas: "Sprawdź zakres" },
    },
    final: {
      h2: "Najpierw kwalifikacja ryzyka, potem plan dla zarządu",
      sub: "Kilka minut wystarczy, żeby wiedzieć, gdzie stoicie wobec KSC i co trafia na zarząd.",
    },
  },
  {
    id: "li-ciso",
    label: "CISO / IT",
    channel: "LinkedIn · nis2-li-ciso",
    campaign: "nis2-li-ciso",
    scopeMode: "full",
    hideCompare: false,
    featuredCard: "card-aas",
    ctaUnified: "Sprawdź luki techniczne i prawne",
    hero: {
      h1: "NIS2 bez polityk do szuflady: audyt, pentesty, SOC",
      sub: "KSC, art. 21, pentesty, monitoring 24/7 u jednego dostawcy. Jedna umowa zamiast czterech faktur od kancelarii, konsultingu, agencji testowej i SOC.",
      stats: ["pentesty w cenie", "art. 21 KSC", "jeden dostawca, jedno SLA"],
    },
    risk: {
      h2: "Regulator chce dowodów. Sam folder polityk to za mało.",
      lead: "Kontrola pyta o logi, raporty z pentestów i czas reakcji na incydent. Polityki bez dowodów wdrożenia liczą się jak ich brak.",
      cards: [
        "Analiza luk w środowiskach IT i OT pod art. 21 KSC.",
        "Raportowanie incydentów jako zautomatyzowany proces, nie walka z zegarem.",
        "Pentesty i naprawa podatności w cyklu.",
        "Dostawcy ICT w audycie ryzyka łańcucha dostaw.",
      ],
    },
    service: {
      h2: "Dla CISO: zgodność, pentesty i SOC w jednym SLA",
      sub: "Bez żonglowania pięcioma dostawcami i pięcioma kontraktami.",
    },
    proof: {
      quote: "Jeden SLA na zgodność i testy. Skończyło się poleganie na pięciu firmach, kiedy coś się dzieje.",
      attribution: "CISO, [sektor]",
    },
    pricing: {
      lead: "Ankieta wskaże, czy potrzebujecie audytu, wdrożenia, czy usługi z SOC.",
      ctas: { audit: "Audyt techniczny", impl: "Wdrożenie", aas: "Sprawdź NIS2 jako usługę" },
    },
    final: {
      h2: "Jeden dostawca zamiast pięciu",
      sub: "Zgodność, pentesty, monitoring w jednym kontrakcie. Jeden numer do dzwonienia, jedna faktura.",
    },
  },
  {
    id: "li-coo",
    label: "COO / operacje",
    channel: "LinkedIn · nis2-li-ops",
    campaign: "nis2-li-ops",
    scopeMode: "full",
    hideCompare: false,
    featuredCard: "card-aas",
    ctaUnified: "Sprawdź gotowość operacyjną",
    hero: {
      h1: "Incydent zatrzyma produkcję na 24h. Macie kogo wezwać?",
      sub: "Plany ciągłości, audyt dostawców IT i zgłoszenie do organów na czas. Ankieta pokaże, gdzie operacje pękną najszybciej.",
      stats: ["24h/72h na zgłoszenie", "SOC całą dobę", "audyt dostawców IT"],
    },
    risk: {
      h2: "Awaria bez zgłoszenia to dwa problemy naraz",
      lead: "Pierwszy: incydent, którego nikt nie obsłużył. Drugi: minął termin 24h, więc dochodzi sprawa regulacyjna. Ten drugi zwykle kosztuje więcej.",
      cards: [
        "Plany ciągłości działania i testy scenariuszy, bez angażowania całego IT.",
        "Audyt dostawców IT jako wymóg regulacyjny. Art. 21 i art. 8 KSC nie dają wyboru.",
        "Zgłoszenie incydentu w 24h, kiedy nie macie gotowego wzoru raportu.",
        "SOC i reakcja przez całą dobę, także o 3 w nocy.",
      ],
    },
    service: {
      h2: "Ciągłość, dostawcy i SOC w jednym miejscu",
      sub: "Plany BCP/DRP, które przećwiczyliście, audyt dostawców IT i monitoring całą dobę. Procedury działające o 3 w nocy, nie tylko w prezentacji.",
    },
    proof: {
      quote: "Przećwiczyliśmy incydent i wysłaliśmy raport w 24h, z jednej platformy. Zarząd wiedział, co się dzieje, zanim zdążył zapytać.",
      attribution: "[stanowisko], [firma] ([sektor])",
    },
    pricing: {
      lead: "Ankieta wskaże, czy zaczynacie od audytu ciągłości i dostawców, czy od usługi miesięcznej z SOC.",
      ctas: { audit: "Sprawdź gotowość w 2 min", impl: "Wdróż procedury", aas: "Sprawdź usługę miesięczną" },
    },
    final: {
      h2: "Najpierw diagnoza, potem procedury",
      sub: "2 minuty ankiety i wiecie, gdzie operacje pękają wobec NIS2 oraz od czego zacząć.",
    },
  },
];

/* ------------------------------------------------------------------ */
/* Public API                                                          */
/* ------------------------------------------------------------------ */

export const VARIANTS: Record<VariantId, Content> = SPECS.reduce(
  (acc, spec) => {
    acc[spec.id] = build(spec);
    return acc;
  },
  {} as Record<VariantId, Content>,
);

export const VARIANT_LIST: VariantMeta[] = SPECS.map((s) => ({
  id: s.id,
  label: s.label,
  channel: s.channel,
}));

const CAMPAIGN_TO_ID: Record<string, VariantId> = SPECS.reduce(
  (acc, s) => {
    if (s.campaign) acc[s.campaign] = s.id;
    return acc;
  },
  {} as Record<string, VariantId>,
);

export function resolveVariantId(search: string): VariantId {
  const params = new URLSearchParams(search);
  const explicit = params.get("variant");
  if (explicit && explicit in VARIANTS) return explicit as VariantId;
  const utm = params.get("utm_campaign");
  if (utm && utm in CAMPAIGN_TO_ID) return CAMPAIGN_TO_ID[utm];
  return "default";
}
