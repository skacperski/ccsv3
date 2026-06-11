"use client";

import React from "react";
import { LuBuilding2, LuClock, LuScale, LuClipboardList } from "react-icons/lu";
import { Serif, Kicker } from "../lib";

/* steep.app "Ship metrics, not dashboards" dark band: near-black surface
   with a soft purple glow, serif white heading on the left, and a 4-column
   icon feature row divided by hairlines. */

const CARD_ICONS = [LuBuilding2, LuClock, LuScale, LuClipboardList];

export function Risk({ risk }) {
  return (
    <section className="px-0 py-10 md:px-5">
      <div
        className="relative mx-auto max-w-[1400px] overflow-hidden bg-[#121217] px-6 py-16 md:rounded-[28px] md:px-12 md:py-20"
        style={{
          backgroundImage:
            "radial-gradient(60rem 36rem at 70% 115%, rgba(122,43,236,0.35), transparent 60%), radial-gradient(40rem 24rem at 20% 120%, rgba(229,59,121,0.18), transparent 60%)",
        }}
      >
        <div data-reveal className="max-w-xl">
          <Kicker className="mb-4 !text-white/50">{risk.kicker}</Kicker>
          <Serif
            text={risk.h2}
            italicWords={2}
            className="mb-5 text-[36px] leading-[1.05] text-white md:text-[48px]"
          />
          <p className="text-[17px] leading-relaxed text-white/60">{risk.lead}</p>
        </div>

        <div data-reveal-group className="mt-14 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {risk.cards.map((card, i) => {
            const Icon = CARD_ICONS[i % CARD_ICONS.length];
            return (
              <div key={i} className="border-white/10 pr-8 sm:border-l sm:pl-6 sm:first:border-l-0 sm:first:pl-0 lg:[&:nth-child(1)]:border-l-0">
                <Icon className="mb-4 size-6 text-white/80" strokeWidth={1.5} />
                <p className="text-[14px] leading-relaxed text-white/75">{card}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
