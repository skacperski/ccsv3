"use client";

import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "../gsap";
import { SurveyCta, CalendarCta } from "../lib";

/* awesomic.com hero: centered, very bold tracking-tight headline with an
   orange-accented phrase, sub, dark + ghost buttons, and a small trust
   row underneath (their YC badge / rating slot → our hero stats). */

function splitHeadline(h1) {
  // Color the tail after the first sentence break, or the last two words.
  const idx = h1.indexOf(". ");
  if (idx > 0 && idx < h1.length - 2) {
    return [h1.slice(0, idx + 1), h1.slice(idx + 2)];
  }
  const words = h1.trim().split(" ");
  return [words.slice(0, -2).join(" "), words.slice(-2).join(" ")];
}

export function Hero({ hero }) {
  const root = useRef(null);
  const [head, accent] = splitHeadline(hero.h1);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .from("[data-hero] > *", { y: 26, autoAlpha: 0, duration: 0.8, stagger: 0.1 });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="px-5 pb-16 pt-16 md:pb-24 md:pt-24">
      <div data-hero className="mx-auto max-w-[900px] text-center">
        <h1 className="mb-6 text-[40px] font-extrabold leading-[1.08] tracking-[-0.025em] text-awe-950 md:text-[64px] md:leading-[1.1]">
          {head}{" "}
          <span className="relative inline text-awe-orange">{accent}</span>
        </h1>
        <p className="mx-auto mb-9 max-w-[640px] text-[17px] leading-relaxed text-awe-600 md:text-[19px]">
          {hero.sub}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <SurveyCta location="hero">{hero.ctaPrimary}</SurveyCta>
          {hero.ctaSecondary && (
            <CalendarCta variant="ghost" location="hero">
              {hero.ctaSecondary}
            </CalendarCta>
          )}
        </div>
        {hero.micro && <p className="mt-5 text-sm text-awe-500">{hero.micro}</p>}

        {hero.stats && hero.stats.length > 0 && (
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-3 gap-y-3">
            {hero.stats.map((stat, i) => (
              <React.Fragment key={i}>
                {i > 0 && <span className="hidden h-5 w-px bg-awe-200 sm:block" aria-hidden />}
                <span className="inline-flex items-center gap-2 px-2 text-[14px] font-semibold text-awe-700">
                  <svg viewBox="0 0 12 12" className="size-3 fill-awe-orange" aria-hidden>
                    <path d="M6 0l1.4 4.6L12 6 7.4 7.4 6 12 4.6 7.4 0 6l4.6-1.4z" />
                  </svg>
                  {stat}
                </span>
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
