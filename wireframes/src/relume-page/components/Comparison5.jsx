"use client";

import React from "react";

export function Comparison5({ compare }) {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">{compare.kicker}</p>
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            {compare.h2}
          </h2>
          <p className="md:text-md">{compare.sub}</p>
        </div>

        <div className="mx-auto mb-12 max-w-3xl border border-border-primary bg-background-secondary p-6 md:p-8">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4 border-b border-border-primary pb-4">
            <h3 className="text-lg font-bold md:text-xl">Składowe kosztu własnego zespołu</h3>
            <p className="text-2xl font-bold md:text-3xl">{compare.teamTotal}</p>
          </div>
          <ul className="flex flex-col gap-3">
            {compare.teamBreakdown.map((line, i) => (
              <li
                key={i}
                className="flex items-start justify-between gap-4 border-b border-border-primary/60 pb-3 text-sm last:border-0 last:pb-0 md:text-base"
              >
                <span>{line.label}</span>
                <span className="shrink-0 font-semibold">{line.amount}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="grid grid-cols-[1.4fr_1fr_1fr] border-b border-border-primary">
            <div className="py-4 pr-4 md:py-6" />
            <div className="flex items-end justify-center px-2 py-4 text-center md:px-6 md:py-6">
              <h3 className="text-md font-bold leading-[1.4] md:text-xl">{compare.teamCol}</h3>
            </div>
            <div className="flex items-end justify-center bg-background-secondary px-2 py-4 text-center md:px-6 md:py-6">
              <h3 className="text-md font-bold leading-[1.4] md:text-xl">{compare.aasCol}</h3>
            </div>
          </div>
          {compare.rows.map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-[1.4fr_1fr_1fr] border-b border-border-primary"
            >
              <p className="flex items-center py-4 pr-4 text-sm md:text-base">{row.label}</p>
              <p className="flex items-center justify-center px-2 py-4 text-center text-sm md:px-6 md:text-base">
                {row.team}
              </p>
              <p className="flex items-center justify-center bg-background-secondary px-2 py-4 text-center text-sm font-semibold md:px-6 md:text-base">
                {row.aas}
              </p>
            </div>
          ))}
          <p className="mt-6 text-sm">{compare.footnote}</p>
        </div>
      </div>
    </section>
  );
}
