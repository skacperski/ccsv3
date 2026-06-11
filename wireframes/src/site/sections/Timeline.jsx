"use client";

import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "../gsap";
import { Serif, Kicker } from "../lib";

export function Timeline({ timeline }) {
  const root = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-line]", {
        scaleX: 0,
        transformOrigin: "left center",
        ease: "none",
        scrollTrigger: {
          trigger: "[data-line-wrap]",
          start: "top 80%",
          end: "top 40%",
          scrub: true,
        },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  const items = timeline.milestones ?? [];

  return (
    <section id="harmonogram" ref={root} className="px-5 py-20 md:py-28">
      <div className="mx-auto max-w-[1200px]">
        <div data-reveal className="mx-auto mb-14 max-w-xl text-center md:mb-20">
          <Kicker className="mb-4">{timeline.kicker}</Kicker>
          <Serif
            text={timeline.h2}
            italicWords={1}
            className="mb-5 text-[36px] leading-[1.05] text-steep-text md:text-[48px]"
          />
          <p className="text-[17px] leading-relaxed text-steep-gray">{timeline.lead}</p>
        </div>

        <div data-line-wrap className="relative">
          <div className="absolute left-0 right-0 top-[5px] hidden h-px bg-trans-15 md:block" aria-hidden>
            <div data-line className="h-full w-full bg-steep-green" />
          </div>
          <div data-reveal-group className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
            {items.map((m, i) => (
              <div key={i} className="relative md:pt-8">
                <span className="absolute left-0 top-0 hidden size-[11px] rounded-full bg-steep-green md:block" aria-hidden />
                <p className="mb-2 font-serif text-[22px] italic leading-none text-steep-text">
                  {m.date}
                </p>
                <p className="mb-2 text-[15px] font-semibold text-steep-text">{m.title}</p>
                <p className="text-[14px] leading-relaxed text-steep-gray">
                  {[m.body, m.note].filter(Boolean).join(" ")}
                </p>
              </div>
            ))}
          </div>
        </div>

        {timeline.footnote && (
          <p data-reveal className="mt-12 text-center text-[13px] text-steep-muted">
            {timeline.footnote}
          </p>
        )}
      </div>
    </section>
  );
}
