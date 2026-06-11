"use client";

import React from "react";
import { SectionHead } from "../lib";

/* awesomic testimonial cards: white rounded cards, quote, then a footer
   row with a dark logo chip + name/role. */

export function Quotes({ proof }) {
  const items = proof.items ?? [];
  const picked = [items[0], items[3] ?? items[2]].filter(Boolean);

  return (
    <section className="px-5 py-16 md:py-24">
      <div className="mx-auto max-w-[1240px]">
        <SectionHead data-reveal h2={proof.h2} sub={proof.sub} className="mb-12 md:mb-16" />
        <div data-reveal-group className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {picked.map((item, i) => (
            <figure
              key={i}
              className="flex flex-col justify-between rounded-[24px] border border-awe-150 bg-awe-50 p-8 md:p-10"
            >
              <blockquote className="mb-8 text-[18px] font-medium leading-relaxed tracking-tight text-awe-900 md:text-[20px]">
                “{item.quote}”
              </blockquote>
              <figcaption className="flex items-center gap-4">
                <span className="flex h-12 w-20 flex-none items-center justify-center rounded-[12px] bg-awe-950 px-3">
                  <img
                    src={item.logoSrc}
                    alt={item.logoAlt ?? item.company}
                    className="max-h-6 w-auto max-w-full object-contain"
                    loading="lazy"
                  />
                </span>
                <span>
                  <span className="block text-[15px] font-bold text-awe-950">{item.name}</span>
                  <span className="block text-[13px] text-awe-500">
                    {item.role}, {item.company}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
