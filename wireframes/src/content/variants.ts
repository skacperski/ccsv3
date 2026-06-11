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
  SeoMeta,
} from "./types";

/* ------------------------------------------------------------------ */
/* SHARED — constant across every variant                              */
/* ------------------------------------------------------------------ */

const CTA_SECONDARY_CALENDAR = "Wolisz rozmowę? Pokaż kalendarz";

const PILLARS: Pillar[] = [
  {
    num: "01",
    label: "Dokumentacja",
    h2: "Odpowiednia dokumentacja",
    body:
      "Ocena dokumentacji zgodności, polityki i procedury bezpieczeństwa, plany ciągłości (BCP/DRP), szkolenie wprowadzające dla zarządu oraz coroczny przegląd i aktualizacja dokumentacji.",
  },
  {
    num: "02",
    label: "Testy IT",
    h2: "Testowanie i sprawdzanie architektury IT",
    body:
      "Pentesty aplikacji i infrastruktury, skanowanie podatności, utwardzenie środowiska, remediacja luk oraz weryfikacja konfiguracji wg benchmarków CIS i wymogów art. 21 NIS2.",
  },
  {
    num: "03",
    label: "Świadomość",
    h2: "Budowanie świadomości w Twojej firmie",
    body:
      "Kampanie cyberhigieny, szkolenia dla zarządu i pracowników, symulacje phishingowe oraz adaptacyjne ścieżki szkoleniowe wspierające kulturę bezpieczeństwa w organizacji.",
  },
  {
    num: "04",
    label: "Incydenty",
    h2: "Zarządzanie incydentami bezpieczeństwa",
    body:
      "SOC 24/7, detekcja i reakcja na incydenty, zgłoszenia do organów w terminach 24h i 72h, playbooki, ćwiczenia gotowości oraz analiza incydentów pod kątem ciągłości działania.",
  },
];

const TIMELINE = {
  kicker: "Zgodność regulacyjna",
  h2: "NIS2 — harmonogram",
  lead:
    "Nowelizacja ustawy o KSC wprowadza konkretne terminy. Regulator oczekuje ciągłego podejścia procesowego — nie jednorazowej checklisty.",
  milestones: [
    {
      date: "3 marca 2026",
      title: "Wejście w życie nowelizacji ustawy o KSC",
      body: "Wymagania wynikające z NIS2 obowiązują w polskim porządku prawnym. Kary mogą sięgać 10 mln EUR lub 2% obrotu (podmiot kluczowy) oraz 7 mln EUR lub 1,4% (podmiot ważny).",
    },
    {
      date: "3 października 2026",
      title: "Rejestracja w systemie S46 Cyber Hub",
      body: "Podmioty objęte obowiązkiem muszą zarejestrować się w krajowym systemie raportowania. Rejestracji dokonuje klient — nie jest częścią naszej usługi.",
      note: "Rejestracji S46 dokonujecie sami. Wspieramy przygotowanie organizacji pod wymogi NIS2.",
    },
    {
      date: "3 kwietnia 2027",
      title: "Wdrożenie wymaganych środków bezpieczeństwa",
      body: "Termin na wdrożenie środków organizacyjnych i technicznych. Brak cyklicznych działań po wdrożeniu może zostać uznany za niezgodność z NIS2/UKSC.",
    },
  ],
  footnote:
    "Rocznie: przegląd ryzyka ICT, aktualizacja dokumentacji, szkolenia zarządu, testy gotowości na incydent (BCP), ocena dostawców ICT oraz raporty poziomu ryzyka.",
};

const STEPS: Step[] = [
  {
    title: "Ankieta kwalifikacyjna",
    body: "2 minuty — sprawdzacie, czy NIS2 dotyczy waszej organizacji.",
  },
  {
    title: "Ocena i analiza",
    body: "Analiza luki i ocena dojrzałości — projekt od 29 000 zł (kalkulator Medium).",
  },
  {
    title: "Wdrożenie i utrzymanie",
    body: "Wdrożenie regulacji, potem abonament od 23 256 zł/mc (pakiet Basic).",
  },
];

// Źródło: CyCki_Benchmark_v6 — arkusze CISOaaS, SOC, VMaaS, Awareness (segment Medium)
const TEAM_COST_BREAKDOWN = [
  { label: "CISO Rozszerzony (3 MD/mc)", amount: "14 000 zł" },
  { label: "SOC GCaaS Basic (L0 + narzędzia SIEM)", amount: "10 000 zł" },
  { label: "VMaaS Basic (≤250 IP)", amount: "7 200 zł" },
  { label: "Awareness — pakiet podstawowy", amount: "4 000 zł" },
  { label: "Licencje SIEM, skanery, GRC (reszta TCO)", amount: "3 444 zł" },
];

const COMPARE_ROWS: CompareRow[] = [
  { label: "Koszt miesięczny", team: "ok. 38 644 zł", aas: "od 23 256 zł" },
  { label: "Gotowość zespołu", team: "rekrutacja ok. 9 mies.", aas: "od pierwszego miesiąca" },
  { label: "Pentesty i narzędzia", team: "osobno, z dopłatami", aas: "w cenie abonamentu" },
  { label: "Rotacja i szkolenia", team: "po waszej stronie", aas: "po naszej stronie" },
  { label: "Zgłoszenia 24h/72h", team: "pilnujecie sami", aas: "pilnujemy my" },
];

const FAQ_ITEMS: FaqItem[] = [
  {
    q: "Co dokładnie zmienia KSC od lutego 2026?",
    a: "Nowelizacja Krajowego Systemu Cyberbezpieczeństwa wchodzi w życie 19 lutego 2026. Obowiązkowe audyty, polityki bezpieczeństwa, zgłaszanie incydentów w 24h i 72h oraz osobista odpowiedzialność zarządu. Firmy od 50 osób lub 10 mln EUR obrotu muszą przygotować się już teraz.",
  },
  {
    q: "Mamy już ISO 27001 / SZBI — co z tego nam zostaje pod NIS2?",
    a: "ISO 27001 to dobra podstawa, ale NIS2 wymaga więcej. Dochodzą procedury zgłaszania incydentów, plany ciągłości, szkolenia zarządu i nadzór nad dostawcami IT. Sama certyfikacja nie wystarczy.",
  },
  {
    q: "Czy 50 osób to ma być etat, czy razem ze współpracownikami?",
    a: "Liczą się pracownicy na umowę o pracę. Współpracownicy, kontrahenci i freelancerzy nie wchodzą w próg. Jeśli macie 50 etatów, obowiązek dotyczy was niezależnie od obrotu.",
  },
  {
    q: "Jakie kary realnie grożą zarządowi, nie tylko firmie?",
    a: "Tak. Prezes i członkowie zarządu mogą odpowiadać osobiście za brak wdrożenia NIS2. Kary sięgają 10 mln EUR lub 2% obrotu. To nie jest tylko problem działu IT.",
  },
  {
    q: "Ile naprawdę trwa wdrożenie (i kiedy 6 miesięcy starczy)?",
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

const FOOTER = {
  brand: "CyCommSec",
  privacy: "Polityka prywatności",
  copyright: "© 2026 CyCommSec",
};

function pricingCards(ctas: { audit: string; impl: string; aas: string }): PricingCard[] {
  return [
    {
      id: "card-audit",
      step: "01",
      name: "Ocena i analiza",
      desc: "Analiza luki + ocena dojrzałości (arkusz Analiza Luki, 9 MD)",
      price: "29 000 zł",
      period: "projekt jednorazowy",
      cta: ctas.audit,
      features: [
        "Analiza dokumentacji i warsztaty NIS2/KSC",
        "Raport z luk, ocena dojrzałości, priorytety",
        "Omówienie wyników z zarządem i plan kolejnych kroków",
      ],
    },
    {
      id: "card-impl",
      step: "02",
      name: "Wdrożenie polityk i procedur",
      desc: "Wdrożenie regulacji NIS2/DORA/ISO (arkusz Wdrożenie Regulacji, 24 MD)",
      price: "74 000 zł",
      period: "projekt wdrożeniowy",
      cta: ctas.impl,
      features: [
        "BCP, zarządzanie ryzykiem ICT, incydenty, TPRM",
        "Podatności, zabezpieczenia org. i techniczne",
        "Szkolenie wdrożeniowe i audyt przedcertyfikacyjny",
      ],
    },
    {
      id: "card-aas",
      step: "03",
      name: "Utrzymanie zgodności NIS2",
      desc: "Abonament — Pakiety_Medium (50–500 pracowników)",
      price: "23 256 zł",
      period: "od / mc · pakiet Basic",
      cta: ctas.aas,
      features: [
        "SOC Basic, VMaaS Basic, awareness podstawowy",
        "CISO 1 h/mc, asysta przy kontroli",
        "Rekomendowany 26 900 zł/mc · Pełny 33 264 zł/mc",
      ],
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
    micro: string;
  };
  risk: { h2: string; lead: string; cards: string[] };
  service: { h2: string; sub: string };
  proof: { quote: string; attribution: string };
  pricing: { lead: string; ctas: { audit: string; impl: string; aas: string } };
  final: { h2: string; sub: string };
  seo: SeoMeta;
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
    seo: spec.seo,
    nav: { brand: "CyCommSec", cta: spec.ctaUnified },
    hero: {
      h1: spec.hero.h1,
      sub: spec.hero.sub,
      stats: spec.hero.stats,
      ctaPrimary: spec.ctaUnified,
      ctaSecondary: CTA_SECONDARY_CALENDAR,
      micro: spec.hero.micro,
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
    timeline: TIMELINE,
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
      kicker: "Ścieżka współpracy",
      h2: "Od oceny do utrzymania zgodności",
      lead:
        "To nie są trzy opcjonalne pakiety do wyboru — to kolejne etapy współpracy. Zaczynacie od oceny, przechodzicie przez wdrożenie, a potem utrzymujecie zgodność w modelu miesięcznym.",
      processNote: spec.pricing.lead,
      featuredBadge: "Prosty pierwszy krok",
      featuredCard: "card-audit",
      cards: pricingCards(spec.pricing.ctas),
    },
    compare: {
      kicker: "Porównanie",
      h2: "Własny zespół vs NIS2 jako usługa",
      sub: "Koszt własnego zespołu to nie jedna liczba — to etaty, narzędzia i czas rekrutacji. Poniżej składowe typowego modelu in-house.",
      teamCol: "Własny zespół",
      aasCol: "NIS2 jako usługa",
      teamTotal: "ok. 38 644 zł / mc",
      teamBreakdown: TEAM_COST_BREAKDOWN,
      rows: COMPARE_ROWS,
      footnote:
        "Kalkulacja TCO własnego zespołu wg arkuszy CISOaaS, SOC, VMaaS i Awareness (Benchmark v6, segment Medium). Pakiet Basic od 23 256 zł/mc. Metodologia na życzenie.",
    },
    faq: {
      kicker: "FAQ",
      h2: "Pytania",
      sub: "Odpowiedzi na najczęstsze wątpliwości wokół NIS2 i KSC.",
      items: FAQ_ITEMS,
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
/* The 9 variants — synced from copy/<variant>.md (June 2026)         */
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
    ctaUnified: "Sprawdź w 2 minuty",
    hero: {
      h1: "NIS2 i KSC 2026. Sprawdź, jakie obowiązki dotyczą Twojej firmy",
      sub: "Audyt, wdrożenie i utrzymanie zgodności w jednym miejscu. Zacznij od krótkiej ankiety, aby sprawdzić, czy Twoja organizacja podlega pod NIS2 i jakie działania warto zaplanować w pierwszej kolejności.",
      stats: ["KSC od 19 lutego 2026", "18 sektorów objętych", "kary do 10 mln EUR"],
      micro: "Pierwszy krok jest bezpłatny i nie zobowiązuje do dalszej współpracy. Wynik otrzymasz e-mailem.",
    },
    risk: {
      h2: "Co zmienia nowelizacja KSC?",
      lead: "Od 19 lutego 2026 roku wymagania wynikające z NIS2 obowiązują również w polskim porządku prawnym. Wiele firm nadal nie ma pewności, czy nowe przepisy ich dotyczą i jakie działania należy podjąć, aby spełnić wymagania.",
      cards: [
        "Obowiązki obejmują 18 sektorów oraz organizacje zatrudniające co najmniej 50 osób lub osiągające 10 mln EUR obrotu rocznie.",
        "Incydenty należy zgłaszać w terminach 24h i 72h, dlatego odpowiednie procedury powinny być przygotowane wcześniej.",
        "Kary mogą sięgać 10 mln EUR lub 2% obrotu dla podmiotów kluczowych oraz 7 mln EUR lub 1,4% obrotu dla podmiotów ważnych.",
        "Krótka ankieta pozwoli sprawdzić, czy NIS2 dotyczy Twojej firmy i które obszary wymagają uwagi w pierwszej kolejności.",
      ],
    },
    service: {
      h2: "Audyt, polityki, pentesty i SOC w jednym miejscu",
      sub: "Jeden partner odpowiedzialny za zgodność, bezpieczeństwo i utrzymanie. Rozwiązania, które działają w organizacji, a nie tylko w dokumentacji.",
    },
    proof: {
      quote: "[ Cytat klienta — do uzupełnienia w produkcji ]",
      attribution: "[stanowisko], [firma] ([sektor])",
    },
    pricing: {
      lead: "Zacznij od krótkiej ankiety. Na jej podstawie sprawdzisz, czy potrzebujesz audytu, wdrożenia czy modelu usługi miesięcznej.",
      ctas: { audit: "Zacznij od audytu", impl: "Zobacz zakres wdrożenia", aas: "Sprawdź, czy aaS pasuje" },
    },
    final: {
      h2: "Sprawdź, jak NIS2 wpływa na Twoją firmę",
      sub: "Wypełnienie ankiety zajmuje około 2 minut. Otrzymasz informację, czy nowe obowiązki dotyczą Twojej organizacji i od czego warto zacząć przygotowania.",
    },
    seo: {
      title: "CyCommSec | NIS2 i KSC 2026 — obowiązki Twojej firmy",
      description:
        "Audyt, wdrożenie i utrzymanie zgodności z NIS2 w jednym miejscu. Krótka ankieta pokaże, czy KSC dotyczy Twojej organizacji i od czego zacząć.",
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
    ctaUnified: "Sprawdź ryzyko w 2 minuty",
    hero: {
      h1: "Kary za NIS2 mogą sięgnąć 10 mln EUR. Czy Twoja firma podlega pod nowe przepisy?",
      sub: "Nowelizacja KSC obowiązuje od 19 lutego 2026 roku. Jeśli Twoja firma podlega pod NIS2, musi wdrożyć odpowiednie zabezpieczenia i zgłaszać incydenty w terminie 24h lub 72h. Za brak zgodności grozi kara do 10 mln EUR albo 2% rocznego obrotu. Odpowiedzialność może dotyczyć również członków zarządu.",
      stats: ["do 10 mln EUR (kara)", "24h/72h (na zgłoszenie incydentu)", "obowiązek od 19.02.2026"],
      micro: "Bez zobowiązań, otrzymasz raport dla zarządu napisany prostym językiem, bez technicznego żargonu.",
    },
    risk: {
      h2: "Konsekwencje mogą dotyczyć nie tylko firmy",
      lead: "NIS2 i nowelizacja KSC wprowadzają jedne z najwyższych kar regulacyjnych związanych z cyberbezpieczeństwem. Odkładanie tematu na później może okazać się kosztowne podczas kontroli lub po wystąpieniu incydentu.",
      cards: [
        "Do 10 mln EUR albo 2% obrotu dla podmiotu kluczowego.",
        "Do 7 mln EUR albo 1,4% obrotu dla podmiotu ważnego.",
        "Odpowiedzialność może objąć prezesa, CTO oraz CISO.",
        "Kontrole organów nadzorczych już się rozpoczynają.",
      ],
    },
    service: {
      h2: "Audyt, który pokazuje fakty, a nie przypuszczenia",
      sub: "Sprawdzamy luki, procedury obsługi incydentów oraz zabezpieczenia IT. Każdy element dokumentujemy zgodnie z wymaganiami KSC, dzięki czemu podczas kontroli możesz przedstawić konkretne raporty, logi i dowody działań.",
    },
    proof: {
      quote: "Po wypełnieniu ankiety wiedzieliśmy, jakie obowiązki wynikają z KSC i od czego zacząć. Zarząd dostał jasne podsumowanie, które nie wymagało tłumaczenia z języka IT.",
      attribution: "[stanowisko], [firma], [sektor]",
    },
    pricing: {
      lead: "Zacznij od krótkiej ankiety. Sprawdzisz, czy Twoja firma podlega pod NIS2 i jakie działania warto podjąć w pierwszej kolejności. Na tej podstawie określimy, czy wystarczy audyt, czy potrzebne będzie pełne wdrożenie.",
      ctas: { audit: "Zacznij od audytu", impl: "Sprawdź w 2 min", aas: "Sprawdź w 2 min" },
    },
    final: {
      h2: "Sprawdź ryzyko, zanim pojawi się kontrola",
      sub: "W ciągu 2 minut dowiesz się, czy Twoja firma podlega pod NIS2 oraz jakie obowiązki wymagają uwagi w pierwszej kolejności. Lepiej mieć plan działania przed kontrolą niż szukać go pod presją czasu.",
    },
    seo: {
      title: "CyCommSec | Kary NIS2 do 10 mln EUR — sprawdź ryzyko",
      description:
        "KSC obowiązuje od 19 lutego 2026. Sprawdź w 2 minuty, czy Twoja firma podlega pod NIS2 i jakie kary grożą za brak zgodności.",
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
    ctaUnified: "Sprawdź w 2 minuty",
    hero: {
      h1: "Czy Twoja firma podlega pod NIS2? Sprawdź w 2 minuty",
      sub: "Odpowiedz na kilka pytań dotyczących branży, wielkości firmy i obecnych zabezpieczeń. Wynik otrzymasz od razu, bez zobowiązań i bez rozmowy sprzedażowej.",
      stats: ["2 min", "18 sektorów", "50 osób / 10 mln EUR"],
      micro: "Wynik otrzymasz od razu w formie, którą możesz pokazać zarządowi lub działowi IT.",
    },
    risk: {
      h2: "Najwięcej kosztuje błędne założenie, że NIS2 Cię nie dotyczy",
      lead: "Wiele firm z 18 sektorów objętych NIS2 nie zdaje sobie sprawy, że nowe obowiązki dotyczą również ich. Różnica między podmiotem kluczowym a ważnym to nawet 3 mln EUR potencjalnej kary.",
      cards: [
        "Działasz w jednym z sektorów objętych NIS2.",
        "Zatrudniasz co najmniej 50 osób lub osiągasz 10 mln EUR obrotu.",
        "Brak procedur zgłaszania incydentów w terminach 24h i 72h może oznaczać naruszenie obowiązków.",
        "KSC obowiązuje od 19 lutego 2026 roku.",
      ],
    },
    service: {
      h2: "Jeśli podlegasz pod NIS2, pokażemy Ci kolejne kroki",
      sub: "Po wypełnieniu ankiety dowiesz się, czy warto zacząć od audytu, przejść do wdrożenia czy rozważyć model usługi miesięcznej.",
    },
    proof: {
      quote: "W ciągu dwóch minut otrzymaliśmy jasną odpowiedź, czy NIS2 dotyczy naszej organizacji. Bez długich konsultacji i analiz na starcie.",
      attribution: "[stanowisko], [firma] ([sektor])",
    },
    pricing: {
      lead: "Zacznij od krótkiej ankiety. Na podstawie odpowiedzi podpowiemy, czy wystarczy audyt, czy potrzebne będzie wdrożenie lub usługa miesięczna.",
      ctas: { audit: "Sprawdźcie w 2 minuty", impl: "Sprawdźcie w 2 minuty", aas: "Sprawdźcie, czy pasuje" },
    },
    final: {
      h2: "Najpierw sprawdź, czy NIS2 dotyczy Twojej firmy",
      sub: "Otrzymasz jasną odpowiedź. Jeśli Twoja firma podlega pod nowe przepisy, pokażemy Ci, od czego zacząć i jakie działania warto zaplanować w pierwszej kolejności.",
    },
    seo: {
      title: "CyCommSec | Czy NIS2 dotyczy Twojej firmy? Test 2 min",
      description:
        "Odpowiedz na kilka pytań o branżę i wielkość firmy. Wynik od razu — bez rozmowy sprzedażowej. 18 sektorów, próg 50 osób lub 10 mln EUR.",
    },
  },
  {
    id: "gads-audyt",
    label: "Analiza luki",
    channel: "Google Ads · nis2-audyt",
    campaign: "nis2-audyt",
    scopeMode: "full",
    hideCompare: false,
    featuredCard: "card-audit",
    ctaUnified: "Sprawdź gotowość w 2 minuty",
    hero: {
      h1: "Sprawdź gotowość firmy do NIS2. Analiza luki od 29 000 zł.",
      sub: "Analizujemy wymagania prawne i techniczne związane z KSC. Otrzymujesz raport z luk, ocenę dojrzałości i plan działań: polityki, pentesty, zabezpieczenia środowiska i kolejne kroki.",
      stats: ["od 29 000 zł (analiza luki)", "od 74 000 zł (wdrożenie)", "od 23 256 zł/mc (abonament)"],
      micro: "Po ankiecie możesz od razu zobaczyć wynik online lub umówić rozmowę w ciągu 48h.",
    },
    risk: {
      h2: "Bez audytu łatwo wydać budżet na niewłaściwe działania",
      lead: "Kontrola nie pyta o liczbę wdrożonych narzędzi. Pyta o konkretne ryzyka, procedury i dowody. Audyt pokazuje, które obszary wymagają uwagi w pierwszej kolejności.",
      cards: [
        "Identyfikacja luk względem art. 21 KSC, zarówno prawnych, jak i technicznych.",
        "Raport przygotowany w sposób zrozumiały dla zarządu.",
        "Plan działań obejmujący polityki, BCP/DRP, pentesty, szkolenia i SOC.",
      ],
    },
    service: {
      h2: "Audyt, który kończy się planem działania",
      sub: "Otrzymujesz raport dla zarządu, wyniki testów oraz konkretną listę działań do wykonania w ciągu najbliższych 90 dni.",
    },
    proof: {
      quote: "Jeden raport trafił do zarządu i rady nadzorczej. Wcześniej mieliśmy kilka dokumentów od różnych dostawców i trudno było ocenić, które informacje są aktualne.",
      attribution: "[stanowisko], [firma] ([sektor])",
    },
    pricing: {
      lead: "Analiza luki i ocena dojrzałości to projekt od 29 000 zł (kalkulator Benchmark v6). Ankieta pomoże określić, czy zaczynacie od tego etapu.",
      ctas: { audit: "Sprawdź gotowość w 2 min", impl: "Sprawdź zakres w 2 min", aas: "Sprawdź, czy aaS pasuje" },
    },
    final: {
      h2: "Zobacz, od czego naprawdę zacząć",
      sub: "Otrzymujesz ocenę gotowości, listę najważniejszych luk i plan działań, który możesz przedstawić zarządowi lub wykorzystać podczas kontroli. Po ankiecie wybierasz wynik online albo rozmowę w ciągu 48h.",
    },
    seo: {
      title: "CyCommSec | Analiza luki NIS2 od 29 000 zł",
      description:
        "Analiza luk względem KSC, raport dla zarządu i plan na 90 dni. Pentesty, polityki i zabezpieczenia — bez ogólnych checklist.",
    },
  },
  {
    id: "gads-wdrozenie",
    label: "Wdrożenie regulacji",
    channel: "Google Ads · nis2-wdrozenie",
    campaign: "nis2-wdrozenie",
    scopeMode: "full",
    hideCompare: false,
    featuredCard: "card-impl",
    ctaUnified: "Sprawdź, czy wdrożenie pasuje",
    hero: {
      h1: "Wdrożenie NIS2 w firmie od 74 000 zł",
      sub: "Przygotowujemy polityki, procedury, zabezpieczenia techniczne, szkolenia dla zarządu oraz dokumentację wymaganą przez KSC. Projekt wg kalkulatora Wdrożenie Regulacji (24 MD).",
      stats: ["od 74 000 zł (projekt)", "BCP + ryzyko ICT + incydenty", "potem abonament od 23 256 zł/mc"],
      micro: "Wypełnij krótką ankietę, a pomożemy określić zakres wdrożenia. Wycena powstaje na podstawie wyników audytu, a nie gotowego cennika.",
    },
    risk: {
      h2: "Wdrożenie bez audytu często oznacza niepotrzebne wydatki",
      lead: "Bez wcześniejszej analizy trudno określić, które obszary wymagają największej uwagi. W efekcie firmy inwestują czas i budżet w działania, które nie rozwiązują najważniejszych problemów z punktu widzenia kontroli.",
      cards: [
        "Polityki, BCP/DRP i procedury obsługi incydentów.",
        "Zabezpieczenia techniczne oraz testy zgodne z art. 21 KSC.",
        "Szkolenia dla zarządu i komplet materiałów potrzebnych podczas kontroli.",
      ],
    },
    service: {
      h2: "Wdrożenie, które działa także po zakończeniu projektu",
      sub: "Tworzymy rozwiązania, które stają się częścią codziennego funkcjonowania firmy. Procedury, zabezpieczenia i obowiązki nie trafiają do folderu na dysku, ale działają w praktyce i mogą zostać zweryfikowane podczas kontroli.",
    },
    proof: {
      quote: "Realizowaliśmy kolejne działania zgodnie z planem z audytu, bez zatrzymywania bieżącej pracy firmy. Zarząd miał pełną kontrolę nad postępem i wiedział, jakie ryzyka zostały już zamknięte.",
      attribution: "[stanowisko], [firma], [sektor]",
    },
    pricing: {
      lead: "Wdrożenie regulacji to projekt od 74 000 zł (Benchmark v6). Zakres dopasowujemy do wyników analizy luki.",
      ctas: { audit: "Nie macie audytu? Zacznij tu", impl: "Sprawdź zakres wdrożenia", aas: "Porównaj z usługą miesięczną" },
    },
    final: {
      h2: "Wiesz, co trzeba zrobić i masz plan działania",
      sub: "Wdrożenie kończy się działającymi procedurami, dokumentacją oraz materiałami przygotowanymi na potrzeby kontroli. Harmonogram obejmuje od 6 do 18 miesięcy, a w wybranych przypadkach możliwa jest realizacja przyspieszona w około 6 miesięcy.",
    },
    seo: {
      title: "CyCommSec | Wdrożenie NIS2 od 74 000 zł",
      description:
        "Polityki, procedury, zabezpieczenia techniczne i szkolenia zarządu zgodnie z KSC. Plan oparty o audyt, nie gotowy cennik.",
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
      h1: "NIS2 w abonamencie od 23 256 zł miesięcznie",
      sub: "Zamiast budować własny zespół cyberbezpieczeństwa, korzystacie z gotowej usługi. Pakiet Basic (segment Medium): SOC, VM, awareness, CISO 1 h/mc. Rekomendowany od 26 900 zł/mc.",
      stats: ["od 23 256 zł/mc", "pakiet Basic", "SOC + VM + awareness"],
      micro: "Pentesty w cenie. *Metodologia TCO na życzenie.",
    },
    risk: {
      h2: "Własny zespół cyber buduje się miesiącami, a nowelizacja KSC obowiązuje już dziś.",
      lead: "Znalezienie i zatrudnienie specjalistów ds. cyberbezpieczeństwa zajmuje dziś wiele miesięcy. Koszt własnego zespołu to około 38 644 zł/mc po stronie pracodawcy. Do tego dochodzą narzędzia, szkolenia i ryzyko rotacji pracowników.",
      cards: [
        "Jedna umowa zamiast osobnych projektów na audyt, wdrożenie i utrzymanie.",
        "Pentesty oraz skany podatności są wliczone w miesięczną opłatę.",
        "Terminy zgłoszeń incydentów 24h i 72h pozostają pod kontrolą naszego zespołu.",
      ],
    },
    service: {
      h2: "My odpowiadamy za NIS2, a wasz dział IT robi swoje",
      sub: "Twój zespół nadal zarządza systemami i infrastrukturą. My zajmujemy się wymaganiami regulacyjnymi, monitoringiem oraz obsługą incydentów. Masz jeden punkt kontaktu i jedną miesięczną fakturę.",
    },
    proof: {
      quote: "Policzyłem koszt stworzenia własnego zespołu cyberbezpieczeństwa i szybko okazało się, że to nie ma uzasadnienia biznesowego. Dziś płacimy stałą miesięczną kwotę, SOC działa 24/7, a my nie zajmujemy się rekrutacją ani utrzymaniem specjalistów.",
      attribution: "[stanowisko], [firma] ([sektor])",
    },
    pricing: {
      lead: "Abonament NIS2 zaczyna się od 23 256 zł/mc (pakiet Basic, Benchmark v6). Poniżej porównanie z kosztem własnego zespołu (~38 644 zł/mc).",
      ctas: { audit: "Porównaj w ankiecie", impl: "Porównaj w ankiecie", aas: "Sprawdź usługę miesięczną" },
    },
    final: {
      h2: "Stały miesięczny koszt zamiast rekrutacji specjalistów",
      sub: "Nie musisz budować własnego zespołu cyberbezpieczeństwa. My przejmujemy wymagania regulacyjne, monitoring i obsługę incydentów w ramach jednej usługi. Wypełnij krótką ankietę i sprawdź, czy ten model będzie opłacalny dla Twojej firmy.",
    },
    seo: {
      title: "CyCommSec | NIS2 w abonamencie od 23 256 zł/mc",
      description:
        "Wdrożenie NIS2, monitoring 24/7, pentesty i dokumentacja w jednej miesięcznej opłacie. Bez rekrutacji własnego zespołu cyber.",
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
    ctaUnified: "Pobierz raport dla zarządu",
    hero: {
      h1: "Za zgodność z KSC odpowiada zarząd, nie tylko dział IT.",
      sub: "Od 19 lutego 2026 roku obowiązki wynikające z KSC dotyczą całej organizacji, ale odpowiedzialność za ich realizację spoczywa również na zarządzie. Sprawdź, jak wygląda sytuacja w Twojej firmie, zanim zweryfikuje ją kontrola lub incydent bezpieczeństwa.",
      stats: ["osobista odpowiedzialność zarządu", "obowiązuje od 19 lutego 2026", "wynik na 1 stronie"],
      micro: "Wynik na jednej stronie, przygotowany z myślą o zarządzie.",
    },
    risk: {
      h2: "Odpowiedzialności nie można delegować",
      lead: "KSC nakłada konkretne obowiązki związane z cyberbezpieczeństwem. Brak odpowiednich zabezpieczeń, procedur i nadzoru może oznaczać konsekwencje nie tylko dla firmy, ale również dla osób odpowiedzialnych za jej zarządzanie.",
      cards: [
        "Szkolenia z cyberbezpieczeństwa obejmują również członków zarządu.",
        "Odpowiedzialność może dotyczyć osób nadzorujących obszar bezpieczeństwa.",
        "W przypadku podmiotów kluczowych możliwe są dodatkowe środki nadzorcze, w tym ograniczenia dotyczące certyfikatów.",
      ],
    },
    service: {
      h2: "Raport, który pomaga podjąć decyzję",
      sub: "Otrzymujesz podsumowanie ryzyk, rekomendacje działań oraz orientacyjny budżet potrzebny do osiągnięcia zgodności z wymaganiami KSC. Wszystko w formie przygotowanej dla zarządu, a nie dla działu IT.",
    },
    proof: {
      quote: "Zamiast kilkudziesięciu stron technicznej dokumentacji otrzymaliśmy krótkie podsumowanie najważniejszych ryzyk, kosztów i decyzji do podjęcia. Zarząd wiedział, od czego zacząć.",
      attribution: "[stanowisko], [firma] ([sektor])",
    },
    pricing: {
      lead: "Pierwszym krokiem jest kwalifikacja i analiza luki (projekt od 29 000 zł). Raport dla zarządu to efekt etapu 01 ścieżki współpracy.",
      ctas: { audit: "Pobierz raport dla zarządu", impl: "Sprawdź zakres", aas: "Sprawdź zakres" },
    },
    final: {
      h2: "Zacznij od oceny ryzyka i poznaj możliwe scenariusze",
      sub: "W kilka minut sprawdzisz, jak wymagania KSC wpływają na Twoją organizację. Na tej podstawie łatwiej podjąć decyzję o kolejnych działaniach i budżecie.",
    },
    seo: {
      title: "CyCommSec | KSC 2026 — odpowiedzialność zarządu",
      description:
        "Od 19 lutego 2026 obowiązki KSC dotyczą całej organizacji, a odpowiedzialność spoczywa też na zarządzie. Raport na jednej stronie.",
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
      h1: "NIS2 bez zbędnej dokumentacji. Audyt, pentesty i SOC w jednym miejscu",
      sub: "Audyt luk, pentesty, monitoring 24/7 oraz wsparcie w raportowaniu incydentów w terminach 24h i 72h. Zamiast koordynować kilku dostawców, współpracujesz z jednym zespołem. Jeśli Twoja organizacja korzysta już z ISO 27001, uwzględniamy istniejące procesy i zabezpieczenia.",
      stats: ["pentesty w cenie", "art. 21 KSC", "jeden dostawca, jedno SLA"],
      micro: "Dla CISO, dyrektora IT i osób odpowiedzialnych za bezpieczeństwo.",
    },
    risk: {
      h2: "Podczas kontroli liczą się dowody, nie deklaracje",
      lead: "Sam zestaw polityk i procedur nie wystarczy. Kontrola może wymagać raportów z testów, logów, dokumentacji incydentów oraz potwierdzenia, że przyjęte procedury działają w praktyce.",
      cards: [
        "Analiza luk w środowiskach IT i OT pod kątem art. 21 KSC, a w sektorze produkcyjnym również IEC 62443.",
        "Raportowanie incydentów jako uporządkowany proces wspierający terminy 24h i 72h.",
        "Regularne pentesty i zarządzanie podatnościami zamiast jednorazowych działań przed audytem.",
        "Ocena dostawców ICT w ramach analizy ryzyka łańcucha dostaw.",
      ],
    },
    service: {
      h2: "Zgodność, pentesty i SOC w ramach jednej współpracy",
      sub: "Jeden zespół odpowiada za audyt, monitoring i wsparcie w obszarze zgodności. Wykorzystujemy istniejące procesy, procedury i certyfikacje, zamiast budować wszystko od początku.",
    },
    proof: {
      quote: "Zamiast koordynować kilka firm i kilka zakresów odpowiedzialności, mieliśmy jeden punkt kontaktu. Znacznie łatwiej było zarządzać zarówno zgodnością, jak i bieżącymi działaniami bezpieczeństwa.",
      attribution: "CISO, [sektor]",
    },
    pricing: {
      lead: "Krótka ankieta pomoże określić poziom gotowości organizacji i wskazać, czy wystarczy audyt techniczny, czy potrzebne będzie wdrożenie lub model z monitoringiem SOC.",
      ctas: { audit: "Audyt techniczny", impl: "Wdrożenie", aas: "Sprawdź NIS2 jako usługę" },
    },
    final: {
      h2: "Jeden partner do zgodności i cyberbezpieczeństwa",
      sub: "Audyt, pentesty i monitoring 24/7 realizowane w ramach jednej współpracy. Jeden punkt kontaktu, jeden SLA i pełniejszy obraz bezpieczeństwa organizacji.",
    },
    seo: {
      title: "CyCommSec | NIS2 — audyt, pentesty i SOC",
      description:
        "Audyt luk, pentesty, monitoring 24/7 i raportowanie incydentów 24h/72h. Jeden dostawca zamiast koordynacji kilku firm.",
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
      h1: "Czy Twoja firma jest gotowa na incydent, który zatrzyma operacje?",
      sub: "NIS2 to nie tylko kwestia cyberbezpieczeństwa. To również ciągłość działania, współpraca z dostawcami IT i zdolność do zgłoszenia incydentu w wymaganym terminie. Sprawdź, jak przygotowana jest Twoja organizacja.",
      stats: ["24h/72h na zgłoszenie incydentu", "SOC całą dobę", "audyt dostawców IT"],
      micro: "Otrzymasz raport przygotowany z myślą o zarządzie i osobach odpowiedzialnych za operacje.",
    },
    risk: {
      h2: "Incydent to problem. Brak przygotowania zwykle tworzy kolejne.",
      lead: "Sama awaria lub atak to dopiero początek. Jeśli organizacja nie ma gotowych procedur, planów ciągłości działania i procesu raportowania, szybko pojawiają się dodatkowe konsekwencje operacyjne oraz regulacyjne.",
      cards: [
        "Plany ciągłości działania oraz testy scenariuszy awaryjnych bez angażowania całej organizacji.",
        "Audyt dostawców IT zgodny z wymaganiami art. 21 i art. 8 KSC.",
        "Gotowe procedury zgłaszania incydentów w terminach 24h i 72h.",
        "Monitoring i wsparcie operacyjne dostępne przez całą dobę.",
      ],
    },
    service: {
      h2: "Ciągłość działania, dostawcy i monitoring w jednym planie",
      sub: "Pomagamy przygotować i przetestować plany BCP/DRP, ocenić ryzyko związane z dostawcami IT oraz zbudować procesy, które działają również poza standardowymi godzinami pracy.",
    },
    proof: {
      quote: "Przećwiczenie scenariusza incydentu pozwoliło nam uporządkować role, procedury i sposób raportowania. Kiedy pojawiła się realna sytuacja, wiedzieliśmy dokładnie, co robić.",
      attribution: "[stanowisko], [firma] ([sektor])",
    },
    pricing: {
      lead: "Krótka ankieta pomoże określić, czy warto zacząć od audytu ciągłości działania i dostawców, czy od modelu usługi miesięcznej z monitoringiem SOC.",
      ctas: { audit: "Sprawdź gotowość w 2 min", impl: "Wdróż procedury", aas: "Sprawdź, czy aaS pasuje" },
    },
    final: {
      h2: "Sprawdź, gdzie operacje są najbardziej narażone",
      sub: "W kilka minut ocenisz gotowość organizacji do spełnienia wymagań NIS2 i zobaczysz, które obszary wymagają uwagi w pierwszej kolejności.",
    },
    seo: {
      title: "CyCommSec | Gotowość operacyjna na incydent NIS2",
      description:
        "Ciągłość działania, dostawcy IT i zgłoszenia 24h/72h. Sprawdź w 2 minuty, jak przygotowana jest Twoja organizacja na incydent.",
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
