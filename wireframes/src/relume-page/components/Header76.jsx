"use client";

import React from "react";
import { CalendarCtaButton } from "./CalendarCtaButton";
import { SurveyCtaButton } from "./SurveyCtaButton";
import { limeButtonClassName, ghostDarkButtonClassName } from "../utils/fuse";
import { HERO_DECOR_ICONS, pickIcon } from "../icons/sectionIcons";

function HeroDecorTile({ index }) {
  const Icon = pickIcon(HERO_DECOR_ICONS, index);
  return (
    <div className="relative w-full pt-[120%]">
      <div className="absolute inset-0 flex items-center justify-center border border-white/15 bg-white/5">
        <Icon className="size-10 text-white md:size-12" strokeWidth={1.25} />
      </div>
    </div>
  );
}

export function Header76({ hero }) {
  return (
    <section
      id="relume"
      className="relative grid grid-cols-1 gap-y-16 overflow-hidden bg-fuse-blue pt-16 text-white md:grid-flow-row md:pt-24 lg:grid-flow-col lg:grid-cols-2 lg:items-center lg:pt-0"
    >
      {/* Fuse hero glow: radial white highlight in the top-right corner */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(700px 420px at 90% 10%, rgba(255,255,255,.12), transparent 60%)",
        }}
        aria-hidden
      />
      <div className="relative z-10 mx-[5%] max-w-[40rem] justify-self-start lg:ml-[5vw] lg:mr-20 lg:justify-self-end">
        <h1
          className="mb-5 bg-clip-text text-6xl font-medium text-transparent md:mb-6 md:text-9xl lg:text-10xl"
          style={{ backgroundImage: "linear-gradient(90deg, #fff 32%, #00D4FF)" }}
        >
          {hero.h1}
        </h1>
        <p className="text-white/85 md:text-md">{hero.sub}</p>
        {hero.stats && hero.stats.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2 md:mt-6">
            {hero.stats.map((stat, i) => (
              <span
                key={i}
                className="border border-white/25 px-3 py-1 font-mono text-xs font-medium uppercase tracking-[0.04em] text-white"
              >
                {stat}
              </span>
            ))}
          </div>
        )}
        <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
          <SurveyCtaButton
            title={hero.ctaPrimary}
            location="hero"
            className={limeButtonClassName}
          >
            {hero.ctaPrimary}
          </SurveyCtaButton>
          {hero.ctaSecondary && (
            <CalendarCtaButton
              variant="secondary"
              title={hero.ctaSecondary}
              location="hero"
              className={ghostDarkButtonClassName}
            >
              {hero.ctaSecondary}
            </CalendarCtaButton>
          )}
        </div>
        {hero.micro && <p className="mt-4 text-sm text-white/65">{hero.micro}</p>}
      </div>
      <div className="relative z-10 h-[30rem] overflow-hidden pl-[5vw] pr-[5vw] md:h-[40rem] lg:h-screen lg:pl-0">
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
