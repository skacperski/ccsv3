import React from "react";
import { Kicker } from "./ui";
import { useReveal } from "../hooks/useReveal";

function InfoTooltip({ total, breakdown }) {
  return (
    <span className="group relative inline-flex">
      <button
        type="button"
        aria-label="Składowe kosztu własnego zespołu"
        className="flex size-5 cursor-help items-center justify-center rounded-[2px] bg-trans-10 font-mono text-[11px] font-semibold text-gray"
      >
        i
      </button>
      <span className="invisible absolute bottom-full left-1/2 z-20 mb-3 w-72 -translate-x-1/2 rounded-[2px] bg-night p-5 text-left opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <span className="mb-3 block font-mono text-[12px] font-medium uppercase tracking-wide text-white/60">
          Składowe TCO ({total})
        </span>
        {breakdown.map((row) => (
          <span
            key={row.label}
            className="flex items-baseline justify-between gap-3 py-1 text-[13px]"
          >
            <span className="text-white/80">{row.label}</span>
            <span className="shrink-0 font-medium text-white">{row.amount}</span>
          </span>
        ))}
      </span>
    </span>
  );
}

export function Compare({ compare }) {
  const ref = useReveal();
  const rowCount = compare.rows.length;
  return (
    <section ref={ref} className="bg-white px-5 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center" data-reveal>
          <Kicker className="justify-center">{compare.kicker}</Kicker>
          <h2 className="tech-display text-4xl leading-[1.06] md:text-[48px]">{compare.h2}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-gray">{compare.sub}</p>
        </div>

        <div data-reveal className="mx-auto mt-14 max-w-3xl">
          <div className="grid grid-cols-[1.1fr_1fr_1fr] text-[13px] md:text-[15px]">
            {/* header */}
            <div className="border-b border-trans-10 p-4 md:p-5" />
            <div className="flex items-center gap-2 border-b border-trans-10 p-4 font-medium text-red md:p-5">
              {compare.teamCol}
              <InfoTooltip total={compare.teamTotal} breakdown={compare.teamBreakdown} />
            </div>
            <div className="border-b border-trans-10 p-4 font-medium text-green md:p-5">
              {compare.aasCol}
            </div>
            {/* rows */}
            {compare.rows.map((row, i) => {
              const last = i === rowCount - 1;
              const line = last ? "" : "border-b border-trans-10";
              return (
                <React.Fragment key={row.label}>
                  <div className={`${line} p-4 font-medium md:p-5`}>{row.label}</div>
                  <div className={`${line} p-4 font-medium text-red md:p-5`}>{row.team}</div>
                  <div className={`${line} p-4 font-medium text-green md:p-5`}>{row.aas}</div>
                </React.Fragment>
              );
            })}
          </div>
          <p className="mt-6 text-center text-sm text-soft">{compare.footnote}</p>
        </div>
      </div>
    </section>
  );
}
