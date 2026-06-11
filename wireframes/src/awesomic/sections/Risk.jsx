"use client";

import React from "react";
import { LuBuilding2, LuClock, LuScale, LuClipboardList } from "react-icons/lu";

/* awesomic "Why teams choose Awesomic" dark band: huge rounded-[36px]
   near-black surface with rounded stat tiles inside. */

const ICONS = [LuBuilding2, LuClock, LuScale, LuClipboardList];

export function Risk({ risk }) {
  return (
    <section className="px-3 py-8 md:px-5">
      <div className="mx-auto max-w-[1400px] rounded-[36px] bg-awe-950 px-6 py-14 md:px-14 md:py-20">
        <div data-reveal className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 px-3.5 py-1.5 text-[13px] font-semibold text-white/60">
            <span className="size-1.5 rounded-full bg-awe-orange" aria-hidden />
            {risk.kicker}
          </p>
          <h2 className="text-[32px] font-extrabold leading-[1.15] tracking-[-0.02em] text-white md:text-[48px]">
            {risk.h2}
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-white/60 md:text-lg">{risk.lead}</p>
        </div>

        <div data-reveal-group className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {risk.cards.map((card, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <div key={i} className="flex flex-col gap-5 rounded-[20px] bg-awe-900 p-6">
                <span className="flex size-11 items-center justify-center rounded-[14px] bg-awe-800">
                  <Icon className="size-5 text-awe-orange" strokeWidth={1.75} />
                </span>
                <p className="text-[14px] leading-relaxed text-white/80">{card}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
