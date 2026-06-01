"use client";

import React from "react";
import { CalendarCtaButton } from "./CalendarCtaButton";
import { SurveyCtaButton } from "./SurveyCtaButton";

export function Layout122({ scope }) {
  const calendarLabel = scope.ctaSecondary ?? "Wolisz rozmowę? Pokaż kalendarz";

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:gap-16">
          <div>
            <p className="mb-3 font-semibold md:mb-4">{scope.kicker}</p>
            <h3 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
              {scope.col1.h3}
            </h3>
            <p className="mt-5 md:mt-6">{scope.col1.body}</p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <SurveyCtaButton variant="secondary" title={scope.col1.cta}>
                {scope.col1.cta}
              </SurveyCtaButton>
              <CalendarCtaButton variant="link" size="link" title={calendarLabel}>
                {calendarLabel}
              </CalendarCtaButton>
            </div>
          </div>
          <div>
            <p className="mb-3 font-semibold md:mb-4">{scope.kicker}</p>
            <h3 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
              {scope.col2.h3}
            </h3>
            <p className="mt-5 md:mt-6">{scope.col2.body}</p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <SurveyCtaButton variant="secondary" title={scope.col2.cta}>
                {scope.col2.cta}
              </SurveyCtaButton>
              <CalendarCtaButton variant="link" size="link" title={calendarLabel}>
                {calendarLabel}
              </CalendarCtaButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
