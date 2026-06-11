"use client";

import React from "react";
import { TeamCostInfoTooltip } from "./TeamCostInfoTooltip";
import { FuseKicker } from "./FuseKicker";

export function Comparison5({ compare }) {
  return (
    <section id="relume" className="bg-fuse-paper px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <FuseKicker num="09" className="mb-3 text-fuse-blue md:mb-4">
            {compare.kicker}
          </FuseKicker>
          <h2 className="mb-5 text-5xl font-medium md:mb-6 md:text-7xl lg:text-8xl">
            {compare.h2}
          </h2>
          <p className="md:text-md">{compare.sub}</p>
        </div>

        <div className="mx-auto max-w-3xl border border-fuse-line bg-white">
          <div className="grid grid-cols-[1.4fr_1fr_1fr] border-b border-fuse-line">
            <div className="py-4 pl-4 pr-4 md:py-6" />
            <div className="flex items-end justify-center gap-1.5 px-2 py-4 text-center md:px-6 md:py-6">
              <h3 className="text-md font-bold leading-[1.4] md:text-xl">{compare.teamCol}</h3>
              <TeamCostInfoTooltip
                teamTotal={compare.teamTotal}
                teamBreakdown={compare.teamBreakdown}
                footnote={compare.footnote}
              />
            </div>
            <div className="flex items-end justify-center bg-fuse-blue px-2 py-4 text-center text-white md:px-6 md:py-6">
              <h3 className="text-md font-bold leading-[1.4] md:text-xl">{compare.aasCol}</h3>
            </div>
          </div>
          {compare.rows.map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-[1.4fr_1fr_1fr] border-b border-fuse-line last:border-b-0"
            >
              <p className="flex items-center py-4 pl-4 pr-4 text-sm md:text-base">{row.label}</p>
              <p className="flex items-center justify-center px-2 py-4 text-center text-sm text-fuse-muted md:px-6 md:text-base">
                {row.team}
              </p>
              <p className="flex items-center justify-center bg-fuse-blue/5 px-2 py-4 text-center text-sm font-semibold md:px-6 md:text-base">
                {row.aas}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
