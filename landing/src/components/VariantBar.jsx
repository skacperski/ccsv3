import React from "react";
import { VARIANT_LIST } from "../content/variants";

/**
 * Bottom bar for walking the 9 ad variants (QA for copy sync).
 * Switching updates `?variant=` in the URL so links stay shareable.
 */
export function VariantBar({ current, onChange }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex justify-center px-3 pb-3">
      <div className="flex max-w-full items-center gap-1 overflow-x-auto rounded-[8px] bg-ink/95 p-1.5 shadow-lg backdrop-blur">
        {VARIANT_LIST.map((v) => (
          <button
            key={v.id}
            type="button"
            title={v.channel}
            onClick={() => onChange(v.id)}
            className={`shrink-0 cursor-pointer whitespace-nowrap rounded-[5px] px-2.5 py-1.5 font-mono text-[11px] font-medium transition-colors duration-150 ${
              v.id === current
                ? "bg-red text-white"
                : "text-white/60 hover:bg-white/10 hover:text-white"
            }`}
          >
            {v.id}
          </button>
        ))}
      </div>
    </div>
  );
}
