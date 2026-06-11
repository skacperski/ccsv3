"use client";

import React from "react";
import { LuFileText, LuNetwork, LuUsers, LuShieldAlert, LuArrowUpRight } from "react-icons/lu";
import { SectionHead, scrollToSurvey } from "../lib";
import { track } from "../../tracking/tracking";

/* awesomic services grid: rounded gray cards with icon chip, bold title,
   body, and a quiet arrow affordance. */

const ICONS = [LuFileText, LuNetwork, LuUsers, LuShieldAlert];

export function Pillars({ service }) {
  const pillars = service.pillars ?? [];
  return (
    <section className="px-5 py-16 md:py-24">
      <div className="mx-auto max-w-[1240px]">
        <SectionHead
          kicker={service.kicker}
          h2={service.h2}
          sub={service.sub}
          className="mb-12 md:mb-16"
        />
        <div data-reveal-group className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {pillars.map((pillar, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <button
                key={i}
                type="button"
                onClick={() => {
                  track("cta_survey", { location: "rozwiazanie" });
                  scrollToSurvey();
                }}
                className="group relative rounded-[24px] bg-awe-100 p-8 text-left transition-colors hover:bg-awe-150 md:p-10"
              >
                <LuArrowUpRight className="absolute right-7 top-7 size-5 text-awe-400 transition-all group-hover:translate-x-0.5 group-hover:text-awe-950" />
                <span className="mb-6 flex size-12 items-center justify-center rounded-[14px] bg-white">
                  <Icon className="size-5 text-awe-950" strokeWidth={1.75} />
                </span>
                <p className="mb-1 text-[13px] font-semibold text-awe-400">{pillar.num}</p>
                <h3 className="mb-3 text-[22px] font-bold tracking-tight text-awe-950 md:text-[24px]">
                  {pillar.h2}
                </h3>
                <p className="text-[15px] leading-relaxed text-awe-600">{pillar.body}</p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
