"use client";

import React from "react";
import { LuInfo } from "react-icons/lu";
import { Serif, Kicker } from "../lib";

function TeamCostPopover({ teamTotal, teamBreakdown, footnote }) {
  return (
    <span className="group relative inline-flex">
      <button
        type="button"
        aria-label="Składowe kosztu własnego zespołu"
        className="text-steep-muted transition-colors hover:text-steep-text"
      >
        <LuInfo className="size-4" />
      </button>
      <span className="invisible absolute left-1/2 top-full z-30 mt-2 w-[min(19rem,calc(100vw-2rem))] -translate-x-1/2 rounded-xl border border-trans-10 bg-white p-4 text-left opacity-0 shadow-[0_12px_40px_rgba(14,23,43,0.12)] transition-all duration-150 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
        <span className="mb-2 block text-[13px] font-semibold text-steep-text">{teamTotal}</span>
        {teamBreakdown?.map((row, i) => (
          <span key={i} className="flex items-baseline justify-between gap-3 py-0.5 text-[12px]">
            <span className="text-steep-gray">{row.label}</span>
            <span className="whitespace-nowrap font-medium text-steep-text">{row.amount}</span>
          </span>
        ))}
        {footnote && (
          <span className="mt-2 block border-t border-trans-10 pt-2 text-[11px] leading-snug text-steep-muted">
            {footnote}
          </span>
        )}
      </span>
    </span>
  );
}

export function Compare({ compare }) {
  return (
    <section className="px-5 py-20 md:py-28">
      <div className="mx-auto max-w-[1200px]">
        <div data-reveal className="mx-auto mb-14 max-w-2xl text-center md:mb-20">
          <Kicker className="mb-4">{compare.kicker}</Kicker>
          <Serif
            text={compare.h2}
            italicWords={3}
            className="mb-5 text-[36px] leading-[1.05] text-steep-text md:text-[48px]"
          />
          <p className="text-[17px] leading-relaxed text-steep-gray">{compare.sub}</p>
        </div>

        <div data-reveal className="mx-auto max-w-3xl overflow-visible rounded-[20px] border border-trans-10 bg-white">
          <div className="grid grid-cols-[1.4fr_1fr_1fr] border-b border-trans-10">
            <div className="px-5 py-5" />
            <div className="flex items-end justify-center gap-1.5 px-2 py-5 text-center">
              <h3 className="text-[15px] font-semibold tracking-tight text-steep-text md:text-[17px]">
                {compare.teamCol}
              </h3>
              <TeamCostPopover
                teamTotal={compare.teamTotal}
                teamBreakdown={compare.teamBreakdown}
                footnote={compare.footnote}
              />
            </div>
            <div className="flex items-end justify-center rounded-tr-[20px] bg-steep-light-green px-2 py-5 text-center">
              <h3 className="text-[15px] font-semibold tracking-tight text-steep-green-deep md:text-[17px]">
                {compare.aasCol}
              </h3>
            </div>
          </div>
          {compare.rows.map((row, i) => (
            <div key={i} className="grid grid-cols-[1.4fr_1fr_1fr] border-b border-trans-10 last:border-b-0">
              <p className="flex items-center px-5 py-4 text-[14px] text-steep-text md:text-[15px]">
                {row.label}
              </p>
              <p className="flex items-center justify-center px-2 py-4 text-center text-[14px] text-steep-gray md:text-[15px]">
                {row.team}
              </p>
              <p
                className={`flex items-center justify-center bg-steep-light-green/60 px-2 py-4 text-center text-[14px] font-semibold text-steep-text md:text-[15px] ${
                  i === compare.rows.length - 1 ? "rounded-br-[20px]" : ""
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
