import { useState } from "react";
import { VARIANT_LIST } from "../content/variants";
import type { VariantId } from "../content/types";

interface Props {
  current: VariantId;
  onChange: (id: VariantId) => void;
}

export function VariantSwitcher({ current, onChange }: Props) {
  const [open, setOpen] = useState(true);

  return (
    <div className="fixed right-4 top-24 z-[100] text-sm">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 rounded-full bg-black px-4 py-2 font-semibold text-white shadow-lg"
      >
        Warianty
        <span className="text-white/70">{open ? "✕" : "▾"}</span>
      </button>

      {open && (
        <div className="mt-2 w-72 rounded-xl border border-black/10 bg-white p-2 shadow-2xl">
          <p className="px-2 pb-1 pt-2 text-xs uppercase tracking-wide text-neutral-400">
            Podgląd treści wariantu
          </p>
          <ul className="max-h-[75vh] overflow-auto">
            {VARIANT_LIST.map((v) => {
              const active = v.id === current;
              return (
                <li key={v.id}>
                  <button
                    type="button"
                    onClick={() => onChange(v.id)}
                    className={`flex w-full flex-col items-start rounded-lg px-3 py-2 text-left transition-colors ${
                      active ? "bg-black text-white" : "hover:bg-neutral-100"
                    }`}
                  >
                    <span className="font-semibold">{v.label}</span>
                    <span
                      className={`text-xs ${active ? "text-white/70" : "text-neutral-500"}`}
                    >
                      {v.channel}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
