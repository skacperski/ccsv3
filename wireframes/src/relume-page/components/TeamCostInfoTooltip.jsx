"use client";

import React, { useId, useState } from "react";
import { RxInfoCircled } from "react-icons/rx";

export function TeamCostInfoTooltip({ teamTotal, teamBreakdown, footnote }) {
  const [open, setOpen] = useState(false);
  const tooltipId = useId();

  return (
    <span className="relative inline-flex align-middle">
      <button
        type="button"
        aria-label="Pokaż składowe kosztu własnego zespołu"
        aria-expanded={open}
        aria-describedby={open ? tooltipId : undefined}
        className="inline-flex size-5 items-center justify-center rounded-full text-neutral-400 transition-colors hover:text-neutral-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-400"
        onClick={() => setOpen((v) => !v)}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onBlur={(e) => {
          if (!e.currentTarget.parentElement?.contains(e.relatedTarget)) setOpen(false);
        }}
      >
        <RxInfoCircled className="size-4" aria-hidden />
      </button>

      {(open) && (
        <div
          id={tooltipId}
          role="tooltip"
          className="absolute left-1/2 top-full z-30 mt-2 w-[min(18rem,calc(100vw-2rem))] -translate-x-1/2 rounded-sm border border-border-primary bg-white p-3 text-left shadow-md"
        >
          <p className="mb-2 text-[0.65rem] font-semibold uppercase tracking-wide text-neutral-400">
            Składowe kosztu ({teamTotal})
          </p>
          <ul className="mb-2 flex flex-col gap-1">
            {teamBreakdown.map((line, i) => (
              <li
                key={i}
                className="flex items-baseline justify-between gap-2 text-[0.7rem] leading-snug text-neutral-600"
              >
                <span>{line.label}</span>
                <span className="shrink-0 tabular-nums font-medium text-neutral-800">
                  {line.amount}
                </span>
              </li>
            ))}
          </ul>
          {footnote && (
            <p className="border-t border-border-primary/50 pt-2 text-[0.65rem] leading-snug text-neutral-400">
              {footnote}
            </p>
          )}
        </div>
      )}
    </span>
  );
}
