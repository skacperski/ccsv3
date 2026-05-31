"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout373() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Proces</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Jak to wygląda krok po kroku
            </h2>
            <p className="md:text-md">
              Zacznij od ankiety, przejdź do audytu, wybierz wdrożenie.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:gap-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
            <div className="grid grid-cols-1 border border-border-primary sm:col-span-2 sm:row-span-1">
              <div className="flex flex-1 flex-col justify-center p-6 md:p-8 lg:p-12">
                <div>
                  <div className="mb-5 md:mb-6">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                      className="size-12"
                      alt="Relume logo 3"
                    />
                  </div>
                  <h3 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                    Krok 1. Ankieta
                  </h3>
                  <p>
                    Dwie minuty pytań. Dowiesz się, czy wchodzisz w NIS2 i gdzie
                    luki.
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button title="Zacznij" variant="secondary">
                    Zacznij
                  </Button>
                  <Button
                    title="→"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    →
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col border border-border-primary">
              <div className="flex h-full flex-col justify-between p-6 md:p-8 lg:p-6">
                <div>
                  <div className="mb-3 md:mb-4">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                      alt="Relume logo 1"
                      className="size-12"
                    />
                  </div>
                  <h3 className="mb-2 text-xl font-bold md:text-2xl">
                    Krok 2. Audyt i plan
                  </h3>
                  <p>
                    Od 9 900 zł. Raport dla zarządu, plan 90 dni, konkretne
                    działania.
                  </p>
                </div>
                <div className="mt-5 flex items-center gap-4 md:mt-6">
                  <Button
                    title="→"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    →
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col border border-border-primary">
              <div className="flex h-full flex-col justify-between p-6 md:p-8 lg:p-6">
                <div>
                  <div className="mb-3 md:mb-4">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                      alt="Relume logo 2"
                      className="size-12"
                    />
                  </div>
                  <h3 className="mb-2 text-xl font-bold md:text-2xl">
                    Krok 2. Audyt i plan
                  </h3>
                  <p>
                    Od 9 900 zł. Raport dla zarządu, plan 90 dni, konkretne
                    działania.
                  </p>
                </div>
                <div className="mt-5 flex items-center gap-4 md:mt-6">
                  <Button
                    title="→"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    →
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
