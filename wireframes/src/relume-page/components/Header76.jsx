"use client";

import { Badge } from "@relume_io/relume-ui";
import React from "react";
import { CalendarCtaButton } from "./CalendarCtaButton";
import { SurveyCtaButton } from "./SurveyCtaButton";
import { HERO_DECOR_ICONS, pickIcon } from "../icons/sectionIcons";

function HeroDecorTile({ index }) {
  const Icon = pickIcon(HERO_DECOR_ICONS, index);
  return (
    <div className="relative w-full pt-[120%]">
      <div className="absolute inset-0 flex items-center justify-center bg-black">
        <Icon className="size-10 text-white md:size-12" strokeWidth={1.25} />
      </div>
    </div>
  );
}

export function Header76({ hero }) {
  return (
    <section
      id="relume"
      className="grid grid-cols-1 gap-y-16 pt-16 md:grid-flow-row md:pt-24 lg:grid-flow-col lg:grid-cols-2 lg:items-center lg:pt-0"
    >
      <div className="mx-[5%] max-w-[40rem] justify-self-start lg:ml-[5vw] lg:mr-20 lg:justify-self-end">
        <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
          {hero.h1}
        </h1>
        <p className="md:text-md">{hero.sub}</p>
        {hero.stats && hero.stats.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2 md:mt-6">
            {hero.stats.map((stat, i) => (
              <Badge
                key={i}
                variant="secondary"
                className="px-3 py-1 text-sm font-semibold"
              >
                {stat}
              </Badge>
            ))}
          </div>
        )}
        <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
          <SurveyCtaButton title={hero.ctaPrimary}>{hero.ctaPrimary}</SurveyCtaButton>
          {hero.ctaSecondary && (
            <CalendarCtaButton variant="secondary" title={hero.ctaSecondary}>
              {hero.ctaSecondary}
            </CalendarCtaButton>
          )}
        </div>
        {hero.micro && (
          <p className="mt-4 text-sm text-neutral-500">{hero.micro}</p>
        )}
      </div>
      <div className="h-[30rem] overflow-hidden pl-[5vw] pr-[5vw] md:h-[40rem] lg:h-screen lg:pl-0">
        <div className="grid w-full grid-cols-2 gap-x-4">
          <div className="-mt-[120%] grid size-full animate-loop-vertically columns-2 grid-cols-1 gap-4 self-center">
            {[0, 1, 2, 3, 4, 5].map((n) => (
              <div key={n} className="grid size-full grid-cols-1 gap-4">
                <HeroDecorTile index={n} />
              </div>
            ))}
          </div>
          <div className="grid size-full animate-loop-vertically grid-cols-1 gap-4">
            {[6, 7, 8, 9, 10, 11].map((n) => (
              <div key={n} className="grid size-full grid-cols-1 gap-4">
                <HeroDecorTile index={n} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
