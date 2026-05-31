"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout312() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Zagrożenie</p>
            <h2 className="text-5xl font-bold md:text-7xl lg:text-8xl">
              Brak NIS2 to ryzyko prawne i operacyjne naraz
            </h2>
          </div>
          <div>
            <p className="md:text-md">
              Kontrola może być droga. Przygotowanie jeszcze bardziej.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-4">
          <div>
            <div className="mb-5 flex justify-center md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image 1"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              Do 10 mln EUR lub 2% obrotu za brak zgodności. Dla zarządu
              osobista odpowiedzialność.
            </h3>
            <p>Dowiedz się</p>
          </div>
          <div>
            <div className="mb-5 flex justify-center md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image 1"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              24 godziny na zgłoszenie, 72 na szczegółowy raport.
            </h3>
            <p>→</p>
          </div>
          <div>
            <div className="mb-5 flex justify-center md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image 1"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              Odpowiadasz za bezpieczeństwo swoich dostawców IT.
            </h3>
            <p>→</p>
          </div>
          <div>
            <div className="mb-5 flex justify-center md:mb-6">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image 1"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              Prezes i członkowie zarządu odpowiadają osobiście za wdrożenie.
            </h3>
            <p>Sprawdź</p>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap items-center gap-4 md:mt-18 lg:mt-20">
          <Button title="→" variant="secondary">
            →
          </Button>
          <Button
            title="Raportowanie incydentów"
            variant="link"
            size="link"
            iconRight={<RxChevronRight />}
          >
            Raportowanie incydentów
          </Button>
        </div>
      </div>
    </section>
  );
}
