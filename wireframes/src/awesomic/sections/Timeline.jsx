"use client";

import React from "react";
import { SectionHead } from "../lib";

/* Dated milestones as awesomic-style rounded cards with orange date chips
   and a numbered progression. */

export function Timeline({ timeline }) {
  const items = timeline.milestones ?? [];
  return (
    <section id="harmonogram" className="px-5 py-16 md:py-24">
      <div className="mx-auto max-w-[1240px]">
        <SectionHead
          data-reveal
          kicker={timeline.kicker}
          h2={timeline.h2}
          sub={timeline.lead}
          className="mb-12 md:mb-16"
        />
        <div data-reveal-group className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {items.map((m, i) => (
            <div key={i} className="relative rounded-[20px] border border-awe-150 bg-white p-7">
              <p className="absolute right-6 top-6 text-[40px] font-extrabold leading-none text-awe-100">
                {String(i + 1).padStart(2, "0")}
              </p>
              <span className="mb-5 inline-flex items-center rounded-full bg-awe-orange/10 px-3.5 py-1.5 text-[13px] font-bold text-awe-orange">
                {m.date}
              </span>
              <h3 className="mb-2 pr-10 text-[17px] font-bold leading-snug tracking-tight text-awe-950">
                {m.title}
              </h3>
              <p className="text-[14px] leading-relaxed text-awe-600">
                {[m.body, m.note].filter(Boolean).join(" ")}
              </p>
            </div>
          ))}
        </div>
        {timeline.footnote && (
          <p data-reveal className="mt-8 text-center text-[13px] text-awe-500">
            {timeline.footnote}
          </p>
        )}
      </div>
    </section>
  );
}
