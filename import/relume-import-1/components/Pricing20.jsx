"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { BiCheck } from "react-icons/bi";

export function Pricing20() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Cennik</p>
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Od czego zacząć
          </h1>
          <p className="md:text-md">
            Pierwszy krok to ankieta 2 min. Potem audyt, wdrożenie lub usługa.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="h-full border border-border-primary px-6 py-8 md:p-8">
            <h2 className="mb-1 text-md font-bold leading-[1.4] md:text-xl">
              Ocena gotowości
            </h2>
            <p>Analiza luk, raport dla zarządu, plan 90 dni</p>
            <div className="my-8 h-px w-full bg-border-primary" />
            <h3 className="my-2 text-6xl font-bold md:text-9xl lg:text-10xl">
              9 900 zł
            </h3>
            <p>jednorazowo</p>
            <div className="mt-6 md:mt-8">
              <Button title="Zacznij ankietę" className="w-full">
                Zacznij ankietę
              </Button>
            </div>
            <div className="my-8 h-px w-full bg-border-primary" />
            <div className="grid grid-cols-1 gap-y-4 py-2">
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <BiCheck className="size-6" />
                </div>
                <p>Analiza stanu obecnego</p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <BiCheck className="size-6" />
                </div>
                <p>Raport dla zarządu</p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <BiCheck className="size-6" />
                </div>
                <p>Plan działań</p>
              </div>
            </div>
          </div>
          <div className="h-full border border-border-primary px-6 py-8 md:p-8">
            <h2 className="mb-1 text-md font-bold leading-[1.4] md:text-xl">
              Wdrożenie NIS2
            </h2>
            <p>Polityki, procedury, szkolenia, środki techniczne</p>
            <div className="my-8 h-px w-full bg-border-primary" />
            <h3 className="my-2 text-6xl font-bold md:text-9xl lg:text-10xl">
              24 900 zł
            </h3>
            <p>projekt</p>
            <div className="mt-6 md:mt-8">
              <Button title="Zaplanuj wdrożenie" className="w-full">
                Zaplanuj wdrożenie
              </Button>
            </div>
            <div className="my-8 h-px w-full bg-border-primary" />
            <div className="grid grid-cols-1 gap-y-4 py-2">
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <BiCheck className="size-6" />
                </div>
                <p>Polityki i procedury</p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <BiCheck className="size-6" />
                </div>
                <p>Szkolenia zespołu</p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <BiCheck className="size-6" />
                </div>
                <p>Utwardzenie systemów</p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <BiCheck className="size-6" />
                </div>
                <p>Raport końcowy</p>
              </div>
            </div>
          </div>
          <div className="h-full border border-border-primary px-6 py-8 md:p-8">
            <h2 className="mb-1 text-md font-bold leading-[1.4] md:text-xl">
              NIS2 jako usługa
            </h2>
            <p>SOC 24/7, pentesty, utrzymanie zgodności, raportowanie</p>
            <div className="my-8 h-px w-full bg-border-primary" />
            <h3 className="my-2 text-6xl font-bold md:text-9xl lg:text-10xl">
              15 900 zł
            </h3>
            <p>miesięcznie</p>
            <div className="mt-6 md:mt-8">
              <Button title="Zacznij ankietę" className="w-full">
                Zacznij ankietę
              </Button>
            </div>
            <div className="my-8 h-px w-full bg-border-primary" />
            <div className="grid grid-cols-1 gap-y-4 py-2">
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <BiCheck className="size-6" />
                </div>
                <p>SOC 24/7</p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <BiCheck className="size-6" />
                </div>
                <p>Pentesty w cenie</p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <BiCheck className="size-6" />
                </div>
                <p>Raportowanie 24h/72h</p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <BiCheck className="size-6" />
                </div>
                <p>Przeglądy i aktualizacje</p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <BiCheck className="size-6" />
                </div>
                <p>Nadzór dostawców</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
