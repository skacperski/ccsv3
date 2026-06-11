"use client";

import React from "react";
import { LuInfo } from "react-icons/lu";
import { SectionHead } from "../lib";

function TeamCostPopover({ teamTotal, teamBreakdown, footnote }) {
  return (
    <span className="group relative inline-flex">
      <button
        type="button"
        aria-label="Składowe kosztu własnego zespołu"
        className="text-awe-400 transition-colors hover:text-awe-950"
      >
        <LuInfo className="size-4" />
      </button>
      <span className="invisible absolute left-1/2 top-full z-30 mt-2 w-[min(19rem,calc(100vw-2rem))] -translate-x-1/2 rounded-[16px] border border-awe-150 bg-white p-4 text-left opacity-0 shadow-[0_16px_48px_rgba(9,9,11,0.12)] transition-all duration-150 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
        <span className="mb-2 block text-[13px] font-bold text-awe-950">{teamTotal}</span>
        {teamBreakdown?.map((row, i) => (
          <span key={i} className="flex items-baseline justify-between gap-3 py-0.5 text-[12px]">
            <span className="text-awe-600">{row.label}</span>
            <span className="whitespace-nowrap font-semibold text-awe-950">{row.amount}</span>
          </span>
        ))}
        {footnote && (
          <span className="mt-2 block border-t border-awe-150 pt-2 text-[11px] leading-snug text-awe-500">
            {footnote}
          </span>
        )}
      </span>
    </span>
  );
}

export function Compare({ compare }) {
  return (
    <section className="px-5 py-16 md:py-24">
      <div className="mx-auto max-w-[1240px]">
        <SectionHead
          data-reveal
          kicker={compare.kicker}
          h2={compare.h2}
          sub={compare.sub}
          className="mb-12 md:mb-16"
        />
        <div data-reveal className="mx-auto max-w-3xl rounded-[24px] border border-awe-150 bg-white">
          <div className="grid grid-cols-[1.4fr_1fr_1fr] border-b border-awe-150">
            <div className="px-5 py-5" />
            <div className="flex items-end justify-center gap-1.5 px-2 py-5 text-center">
              <h3 className="text-[15px] font-bold tracking-tight text-awe-950 md:text-[16px]">
                {compare.teamCol}
              </h3>
              <TeamCostPopover
                teamTotal={compare.teamTotal}
                teamBreakdown={compare.teamBreakdown}
                footnote={compare.footnote}
              />
            </div>
            <div className="flex items-end justify-center px-2 py-5 text-center">
              <h3 className="inline-flex items-center gap-2 text-[15px] font-bold tracking-tight text-awe-950 md:text-[16px]">
                <span className="size-1.5 rounded-full bg-awe-orange" aria-hidden />
                {compare.aasCol}
              </h3>
            </div>
          </div>
          {compare.rows.map((row, i) => (
            <div key={i} className="grid grid-cols-[1.4fr_1fr_1fr] border-b border-awe-150 last:border-b-0">
              <p className="flex items-center px-5 py-4 text-[14px] text-awe-800 md:text-[15px]">
                {row.label}
              </p>
              <p className="flex items-center justify-center px-2 py-4 text-center text-[14px] text-awe-500 md:text-[15px]">
                {row.team}
              </p>
              <p
                className={`flex items-center justify-center bg-awe-50 px-2 py-4 text-center text-[14px] font-bold text-awe-950 md:text-[15px] ${
                  i === compare.rows.length - 1 ? "rounded-b-[24px]" : ""
                }`}
              >
                {row.aas}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
