"use client";

import React from "react";
import { Eyebrow, SerifHeading } from "../ui";
import { TeamCostInfoTooltip } from "../../relume-page/components/TeamCostInfoTooltip";

export function Compare({ compare }) {
  return (
    <section className="px-5 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <Eyebrow className="mb-3">{compare.kicker}</Eyebrow>
          <SerifHeading
            text={compare.h2}
            className="mb-5 text-4xl leading-[1.08] text-steep-text md:text-5xl lg:text-[44px]"
          />
          <p className="text-steep-gray md:text-lg">{compare.sub}</p>
        </div>

        <div className="mx-auto max-w-3xl overflow-hidden rounded-3xl border border-trans-10 bg-white">
          <div className="grid grid-cols-[1.4fr_1fr_1fr] border-b border-trans-10">
            <div className="px-5 py-5" />
            <div className="flex items-end justify-center gap-1.5 px-2 py-5 text-center">
              <h3 className="font-semibold tracking-tight text-steep-text md:text-lg">
                {compare.teamCol}
              </h3>
              <TeamCostInfoTooltip
                teamTotal={compare.teamTotal}
                teamBreakdown={compare.teamBreakdown}
                footnote={compare.footnote}
              />
            </div>
            <div className="flex items-end justify-center bg-steep-light-green px-2 py-5 text-center">
              <h3 className="font-semibold tracking-tight text-steep-green-deep md:text-lg">
                {compare.aasCol}
              </h3>
            </div>
          </div>
          {compare.rows.map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-[1.4fr_1fr_1fr] border-b border-trans-10 last:border-b-0"
            >
              <p className="flex items-center px-5 py-4 text-sm text-steep-text md:text-base">
                {row.label}
              </p>
              <p className="flex items-center justify-center px-2 py-4 text-center text-sm text-steep-gray md:text-base">
                {row.team}
              </p>
              <p className="flex items-center justify-center bg-steep-light-green/50 px-2 py-4 text-center text-sm font-semibold text-steep-text md:text-base">
                {row.aas}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
