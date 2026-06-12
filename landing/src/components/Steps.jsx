import React, { useRef } from "react";
import { gsap, useGSAP } from "../lib/gsap";
import { Kicker, SurveyCta, CalendarCta } from "./ui";
import { useReveal } from "../hooks/useReveal";

export function Steps({ how, ctaPrimary, ctaSecondary }) {
  const ref = useReveal();
  const gridRef = useRef(null);

  useGSAP(
    () => {
      const grid = gridRef.current;
      if (!grid) return;

      const lines = grid.querySelectorAll("[data-step-line]");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: grid,
          start: "top 86%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(grid.children, {
        x: -40,
        autoAlpha: 0,
        duration: 0.85,
        ease: "power3.out",
        stagger: { each: 0.14, from: "start" },
      }).from(
        lines,
        {
          scaleX: 0,
          transformOrigin: "left center",
          duration: 0.55,
          ease: "power2.out",
          stagger: { each: 0.14, from: "start" },
        },
        "-=0.45",
      );
    },
    { scope: ref },
  );

  return (
    <section ref={ref} className="bg-white px-5 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center" data-reveal>
          <Kicker className="justify-center">{how.kicker}</Kicker>
          <h2 className="tech-display text-4xl leading-[1.06] md:text-[48px]">{how.h2}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-gray">{how.sub}</p>
        </div>

        {/* One violet container; step 1 sits directly on it, steps 2-3 are white cards.
            Identical inner layout per column keeps the divider lines aligned. */}
        <div className="mt-14 rounded-ui bg-[#9a49fd] p-4 pl-8">
          <div ref={gridRef} className="grid gap-4 md:grid-cols-3">
            {how.steps.map((step, i) => {
              const onViolet = i === 0;
              const num = String(i + 1).padStart(2, "0");
              return (
                <div
                  key={step.title}
                  className={`flex flex-col ${
                    onViolet ? "pt-6 pb-4 text-white" : "rounded-ui bg-white p-6"
                  }`}
                >
                  <p
                    className={`text-2xl leading-none tracking-tight ${
                      onViolet ? "text-white" : "text-[#9a49fd]"
                    }`}
                  >
                    {num}
                  </p>
                  <h3 className="mt-6 text-xl font-medium tracking-tight md:text-2xl">
                    {step.title}
                  </h3>
                  {/* Card 1's white divider runs full-width, passing behind cards 2-3
                      and ending at card 3's right edge. White cards paint over it. */}
                  <div className={`mt-4 ${onViolet ? "" : "-mx-6 overflow-hidden"}`}>
                    <div
                      data-step-line
                      className={`h-px origin-left ${
                        onViolet
                          ? "w-[calc(300%+2rem)] bg-white"
                          : "w-full bg-trans-10"
                      }`}
                    />
                  </div>
                  <p className={`mt-4 text-[15px] leading-relaxed ${onViolet ? "" : "text-gray"}`}>
                    {step.body}
                  </p>
                  {onViolet && (
                    <div className="mt-auto flex flex-col items-start gap-3 pt-12">
                      <SurveyCta>{ctaPrimary}</SurveyCta>
                      <CalendarCta variant="ghost-light">{ctaSecondary}</CalendarCta>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
