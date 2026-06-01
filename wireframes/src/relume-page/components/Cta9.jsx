"use client";

import React from "react";
import { LuShield } from "react-icons/lu";
import { CalendarCtaButton } from "./CalendarCtaButton";
import { SurveyCtaButton } from "./SurveyCtaButton";

export function Cta9({ final }) {
  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container relative z-10">
        <div className="grid w-full grid-cols-1 items-start justify-between gap-6 md:grid-cols-[1fr_max-content] md:gap-x-12 md:gap-y-8 lg:gap-x-20">
          <div className="md:mr-12 lg:mr-0">
            <div className="w-full max-w-lg">
              <h2 className="mb-3 text-4xl font-bold leading-[1.2] text-text-alternative md:mb-4 md:text-5xl lg:text-6xl">
                {final.h2}
              </h2>
              <p className="text-text-alternative md:text-md">
                {final.sub}
              </p>
            </div>
          </div>
          <div className="flex items-start justify-start gap-4">
            <SurveyCtaButton title={final.ctaPrimary}>{final.ctaPrimary}</SurveyCtaButton>
            {final.ctaSecondary && (
              <CalendarCtaButton title={final.ctaSecondary} variant="secondary-alt">
                {final.ctaSecondary}
              </CalendarCtaButton>
            )}
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0 bg-neutral-900" aria-hidden>
        <div className="flex size-full items-center justify-center opacity-20">
          <LuShield className="size-[min(40vw,20rem)] text-white" strokeWidth={0.75} />
        </div>
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
}
