"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Faq7() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container w-full max-w-lg">
        <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Pytania
          </h2>
          <p className="md:text-md">
            Odpowiedzi na najczęstsze wątpliwości dotyczące NIS2 i KSC.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:gap-y-12">
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Co zmienia KSC od lutego?
            </h2>
            <p>
              Krajowa Strategia Cyberbezpieczeństwa wchodzi w życie 19 lutego
              2026. Obowiązkowe audyty, polityki bezpieczeństwa, raportowanie
              incydentów w ciągu 24 godzin i odpowiedzialność osobista zarządu.
              Firmy powyżej 50 pracowników lub 10 mln EUR obrotu muszą się
              przygotować już teraz.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              ISO 27001 wystarczy do NIS2?
            </h2>
            <p>
              ISO 27001 to dobra podstawa, ale NIS2 wymaga więcej. Musisz dodać
              procedury raportowania incydentów, plan ciągłości biznesu,
              szkolenia zarządu i nadzór nad dostawcami IT. Certyfikacja sama
              nie wystarczy.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Próg 50 osób — etaty czy współpracownicy?
            </h2>
            <p>
              Liczą się pracownicy na umowę o pracę. Współpracownicy,
              kontrahenci i freelancerzy nie wchodzą w próg. Jeśli masz 50
              etatów, obowiązek dotyczy ciebie niezależnie od obrotu.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Czy zarząd odpowiada osobiście za kary?
            </h2>
            <p>
              Tak. Prezes i członkowie zarządu mogą być pociągnięci do
              odpowiedzialności osobistej za brak wdrożenia NIS2. Kary sięgają
              10 mln EUR lub 2% obrotu. To nie jest tylko problem IT.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Ile czasu zajmuje wdrożenie NIS2?
            </h2>
            <p>
              Audyt trwa 4–8 tygodni. Wdrożenie polityk i procedur to 2–3
              miesiące. Utwardzenie systemów i pentesty mogą trwać 6–18 miesięcy
              w zależności od skali. Usługa zarządzana skraca czas do 2–4
              tygodni.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Masz jeszcze pytania?
          </h4>
          <p className="md:text-md">
            Skontaktuj się z nami po ankiecie lub zadzwoń bezpośrednio.
          </p>
          <div className="mt-6 md:mt-8">
            <Button title="Kontakt" variant="secondary">
              Kontakt
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
