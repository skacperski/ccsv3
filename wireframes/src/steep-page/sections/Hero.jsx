"use client";

import React from "react";
import { SerifHeading, SurveyCta, CalendarCta } from "../ui";

export function Hero({ hero }) {
  return (
    <section className="px-5 pb-16 pt-16 md:pb-20 md:pt-24">
      <div className="mx-auto max-w-3xl text-center">
        <SerifHeading
          as="h1"
          text={hero.h1}
          className="mb-6 text-5xl leading-[1.05] text-steep-text md:text-6xl lg:text-[64px] lg:leading-[1.0]"
        />
        <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-steep-gray md:text-xl">
          {hero.sub}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <SurveyCta location="hero">{hero.ctaPrimary}</SurveyCta>
          {hero.ctaSecondary && (
            <CalendarCta location="hero" variant="ghost">
              {hero.ctaSecondary}
            </CalendarCta>
          )}
        </div>
        {hero.micro && <p className="mt-5 text-sm text-steep-muted">{hero.micro}</p>}
        {hero.stats && hero.stats.length > 0 && (
          <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {hero.stats.map((stat, i) => (
              <li
                key={i}
                className="inline-flex items-center gap-2 text-sm font-medium text-steep-text"
              >
                <span className="size-1.5 rounded-full bg-steep-green" aria-hidden />
                {stat}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
