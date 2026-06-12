import React, { useRef } from "react";
import { gsap, useGSAP } from "../lib/gsap";
import { SurveyCta, CalendarCta } from "./ui";

export function Hero({ hero, nav }) {
  const ref = useRef(null);

  useGSAP(
    () => {
      const root = ref.current;
      gsap.set(root.querySelector("[data-hero-content]"), { autoAlpha: 1 });
      gsap.fromTo(
        root.querySelectorAll("[data-hero-fade]"),
        { y: 24, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.9, stagger: 0.1, ease: "power3.out" },
      );
    },
    { scope: ref },
  );

  return (
    <section
      ref={ref}
      className="relative flex h-[100svh] flex-col overflow-hidden bg-[#8d41eb] bg-cover bg-right bg-no-repeat"
      style={{ backgroundImage: "url(/bg/main-bg.png)" }}
    >
      {/* Logo */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-8">
        <a href="#" aria-label={nav.brand}>
          <img src="/ccs-logo-white.svg" alt={nav.brand} className="h-4 w-auto" />
        </a>
      </div>

      {/* Content — vertically centered in remaining space */}
      <div className="relative z-10 mx-auto flex flex-1 w-full max-w-6xl items-center px-6 py-12">
        <div data-hero-content className="invisible w-full max-w-[594px]">
          <h1
            data-hero-fade
            className="tech-display text-[35px] leading-[1.08] text-white md:text-[48px] md:leading-[1.06]"
          >
            {hero.h1}
          </h1>
          <p data-hero-fade className="mt-5 text-[16px] leading-relaxed text-white/80 md:text-lg">
            {hero.sub}
          </p>
          <ul data-hero-fade className="mt-8 flex flex-nowrap items-center gap-x-6 md:gap-x-8">
            {hero.stats.map((stat) => (
              <li
                key={stat}
                className="flex shrink-0 items-center gap-2 whitespace-nowrap font-mono text-[11px] font-medium uppercase tracking-wide text-white/85 md:text-[12px]"
              >
                <span className="size-1.5 rounded-[2px] bg-red" aria-hidden />
                {stat}
              </li>
            ))}
          </ul>
          <div data-hero-fade className="mt-8 flex flex-wrap items-center gap-3">
            <SurveyCta>{hero.ctaPrimary}</SurveyCta>
            <CalendarCta variant="ghost-light">{hero.ctaSecondary}</CalendarCta>
          </div>
          <p data-hero-fade className="mt-4 max-w-md text-sm text-white/60">
            {hero.micro}
          </p>
        </div>
      </div>
    </section>
  );
}
