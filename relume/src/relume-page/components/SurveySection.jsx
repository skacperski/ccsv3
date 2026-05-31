"use client";

import { Button, Input } from "@relume_io/relume-ui";
import React, { useState } from "react";
import { CalendarModal } from "./CalendarModal";

const SECTORS = [
  "Energetyka",
  "Transport",
  "Bankowość i finanse",
  "Infrastruktura rynków finansowych",
  "Ochrona zdrowia",
  "Woda pitna",
  "Ścieki",
  "Infrastruktura cyfrowa",
  "Zarządzanie usługami ICT",
  "Administracja publiczna",
  "Przestrzeń kosmiczna",
  "Usługi pocztowe i kurierskie",
  "Gospodarka odpadami",
  "Produkcja (chemikalia, żywność, wyroby medyczne)",
  "Dostawcy cyfrowi",
  "Badania naukowe",
  "Inny z listy 18 sektorów",
  "Nie jestem pewien/pewna",
];

const SIZES = [
  { label: "Poniżej 50 pracowników i poniżej 10 mln EUR obrotu", value: "micro" },
  { label: "50–249 pracowników lub 10–50 mln EUR obrotu", value: "medium" },
  { label: "250+ pracowników lub powyżej 50 mln EUR obrotu", value: "large" },
  { label: "Nie wiem dokładnie", value: "unknown" },
];

const STATUSES = [
  { label: "Nie zaczęliśmy jeszcze nic", value: "not-started" },
  { label: "Rozmawiamy wewnętrznie, ale bez konkretnych kroków", value: "discussing" },
  { label: "Mamy ISO 27001 lub podobny standard", value: "has-iso" },
  { label: "Przeprowadziliśmy wstępny audyt luk", value: "gap-done" },
  { label: "Jesteśmy w trakcie wdrożenia", value: "in-progress" },
];

const STEP_COUNT = 4;

function StepIndicator({ current }) {
  return (
    <div className="mb-8 flex items-center gap-0">
      {Array.from({ length: STEP_COUNT }).map((_, i) => {
        const done = i < current;
        const active = i === current;
        return (
          <React.Fragment key={i}>
            <div
              className={`flex size-8 items-center justify-center rounded-full border-2 text-sm font-bold transition-colors duration-200 ${
                done || active
                  ? "border-white bg-white text-black"
                  : "border-white/30 bg-transparent text-white/40"
              }`}
            >
              {done ? (
                <svg className="size-4" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8l3.5 3.5L13 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                i + 1
              )}
            </div>
            {i < STEP_COUNT - 1 && (
              <div
                className={`h-0.5 flex-1 transition-colors duration-300 ${
                  i < current ? "bg-white" : "bg-white/20"
                }`}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

function RadioOption({ label, value, selected, onChange }) {
  return (
    <label
      className={`flex cursor-pointer items-center gap-3 rounded-lg border p-4 transition-colors duration-150 ${
        selected
          ? "border-white bg-white text-black"
          : "border-white/25 bg-transparent text-white hover:border-white/50"
      }`}
    >
      <input
        type="radio"
        value={value}
        checked={selected}
        onChange={() => onChange(value)}
        className="sr-only"
      />
      <span className="text-sm font-medium">{label}</span>
    </label>
  );
}

export function SurveySection({ final }) {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    name: "",
    email: "",
    sector: "",
    size: "",
    status: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const set = (field) => (val) => setForm((f) => ({ ...f, [field]: val }));

  const canNext = [
    form.name.trim().length > 1 && form.email.includes("@"),
    form.sector !== "",
    form.size !== "",
    form.status !== "",
  ][step];

  const handleSubmit = () => {
    console.log("Survey submit:", form);
    setSubmitted(true);
  };

  return (
    <section
      id="ankieta"
      className="scroll-mt-20 bg-black px-[5%] py-16 text-white md:py-24 lg:py-28"
    >
      <div className="container">
        <div className="mx-auto max-w-2xl">
          {submitted ? (
            <div className="py-16 text-center">
              <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full bg-white">
                <svg className="size-8 text-black" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12l4.5 4.5L19 7"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h2 className="mb-4 text-4xl font-bold">Dziękujemy!</h2>
              <p className="text-white/70">
                Wynik ankiety wyślemy na <strong className="text-white">{form.email}</strong>.
                Zazwyczaj zajmuje to kilka minut.
              </p>
            </div>
          ) : (
            <>
              <StepIndicator current={step} />

              {step === 0 && (
                <div>
                  <p className="mb-2 font-semibold text-white/50">
                    Krok 1 z {STEP_COUNT}
                  </p>
                  <h2 className="mb-2 text-4xl font-bold leading-tight md:text-5xl">
                    {final.h2}
                  </h2>
                  <p className="mb-8 text-white/70">{final.sub}</p>
                  <div className="flex flex-col gap-4">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-white">
                        Imię i nazwisko
                      </label>
                      <Input
                        className="border-white/30 bg-white text-black"
                        placeholder="Jan Kowalski"
                        value={form.name}
                        onChange={(e) => set("name")(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-white">
                        Adres email
                      </label>
                      <Input
                        className="border-white/30 bg-white text-black"
                        type="email"
                        placeholder="nazwa@firma.pl"
                        value={form.email}
                        onChange={(e) => set("email")(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              )}

              {step === 1 && (
                <div>
                  <p className="mb-2 font-semibold text-white/50">
                    Krok 2 z {STEP_COUNT}
                  </p>
                  <h2 className="mb-2 text-4xl font-bold leading-tight md:text-5xl">
                    Która branża was dotyczy?
                  </h2>
                  <p className="mb-8 text-white/70">
                    Wybierz sektor, w którym działa wasza firma.
                  </p>
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {SECTORS.map((s) => (
                      <RadioOption
                        key={s}
                        label={s}
                        value={s}
                        selected={form.sector === s}
                        onChange={set("sector")}
                      />
                    ))}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div>
                  <p className="mb-2 font-semibold text-white/50">
                    Krok 3 z {STEP_COUNT}
                  </p>
                  <h2 className="mb-2 text-4xl font-bold leading-tight md:text-5xl">
                    Jak duża jest wasza firma?
                  </h2>
                  <p className="mb-8 text-white/70">
                    Chodzi o liczbę pracowników lub roczny obrót, w zależności co
                    przekraczacie pierwsze.
                  </p>
                  <div className="flex flex-col gap-2">
                    {SIZES.map((s) => (
                      <RadioOption
                        key={s.value}
                        label={s.label}
                        value={s.value}
                        selected={form.size === s.value}
                        onChange={set("size")}
                      />
                    ))}
                  </div>
                </div>
              )}

              {step === 3 && (
                <div>
                  <p className="mb-2 font-semibold text-white/50">
                    Krok 4 z {STEP_COUNT}
                  </p>
                  <h2 className="mb-2 text-4xl font-bold leading-tight md:text-5xl">
                    Gdzie jesteście w procesie?
                  </h2>
                  <p className="mb-8 text-white/70">
                    Powiedzcie, co już zrobiliście w kierunku NIS2/KSC.
                  </p>
                  <div className="flex flex-col gap-2">
                    {STATUSES.map((s) => (
                      <RadioOption
                        key={s.value}
                        label={s.label}
                        value={s.value}
                        selected={form.status === s.value}
                        onChange={set("status")}
                      />
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-10 flex flex-wrap items-center gap-3">
                {step > 0 && (
                  <Button variant="secondary-alt" onClick={() => setStep((s) => s - 1)}>
                    Wstecz
                  </Button>
                )}
                {step < STEP_COUNT - 1 ? (
                  <Button
                    variant="secondary-alt"
                    disabled={!canNext}
                    onClick={() => setStep((s) => s + 1)}
                  >
                    Dalej
                  </Button>
                ) : (
                  <Button variant="secondary-alt" disabled={!canNext} onClick={handleSubmit}>
                    {final.ctaPrimary}
                  </Button>
                )}
                {step === 0 && final.ctaSecondary && (
                  <CalendarModal>
                    <Button variant="secondary" type="button" title={final.ctaSecondary}>
                      {final.ctaSecondary}
                    </Button>
                  </CalendarModal>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
