"use client";

import React, { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "../gsap";
import { SectionHead, SurveyCta, CalendarCta } from "../lib";

/* awesomic "How it works": numbered tab list on the left, big rounded
   panel on the right showing the active step. */

export function Steps({ how, ctaPrimary, ctaSecondary }) {
  const [active, setActive] = useState(0);
  const panelRef = useRef(null);
  const steps = how.steps ?? [];
  const step = steps[active] ?? steps[0];

  useLayoutEffect(() => {
    if (!panelRef.current) return;
    const tween = gsap.fromTo(
      panelRef.current,
      { autoAlpha: 0, y: 12 },
      { autoAlpha: 1, y: 0, duration: 0.4, ease: "power2.out" },
    );
    return () => tween.kill();
  }, [active]);

  return (
    <section className="px-5 py-16 md:py-24">
      <div className="mx-auto max-w-[1240px]">
        <SectionHead
          data-reveal
          kicker={how.kicker}
          h2={how.h2}
          sub={how.sub}
          className="mb-12 md:mb-16"
        />

        <div data-reveal className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,380px)_1fr] lg:gap-10">
          <div className="flex flex-col gap-2">
            {steps.map((s, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={i === active}
                className={`flex items-center gap-4 rounded-[18px] p-5 text-left transition-colors ${
                  i === active ? "bg-awe-100" : "hover:bg-awe-50"
                }`}
              >
                <span
                  className={`flex size-9 flex-none items-center justify-center rounded-full text-[14px] font-bold ${
                    i === active ? "bg-awe-orange text-white" : "bg-awe-100 text-awe-500"
                  }`}
                >
                  {i + 1}
                </span>
                <span
                  className={`text-[16px] font-bold tracking-tight ${
                    i === active ? "text-awe-950" : "text-awe-500"
                  }`}
                >
                  {s.title}
                </span>
              </button>
            ))}
            <div className="mt-6 flex flex-wrap gap-3 px-2">
              <SurveyCta location="proces">{ctaPrimary}</SurveyCta>
              {ctaSecondary && (
                <CalendarCta variant="link" location="proces">
                  {ctaSecondary}
                </CalendarCta>
              )}
            </div>
          </div>

          <div className="flex min-h-[300px] items-center rounded-[24px] bg-awe-100 p-8 md:p-14 lg:min-h-[380px]">
            <div ref={panelRef} key={active}>
              <p className="mb-3 text-[64px] font-extrabold leading-none text-awe-200 md:text-[88px]">
                {String(active + 1).padStart(2, "0")}
              </p>
              <h3 className="mb-3 text-[24px] font-bold tracking-tight text-awe-950 md:text-[30px]">
                {step.title}
              </h3>
              <p className="max-w-md text-[16px] leading-relaxed text-awe-600">{step.body}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
