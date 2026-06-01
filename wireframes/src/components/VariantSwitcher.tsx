import { VARIANT_LIST } from "../content/variants";
import type { VariantId } from "../content/types";

interface Props {
  current: VariantId;
  onChange: (id: VariantId) => void;
}

export function VariantSwitcher({ current, onChange }: Props) {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[60] w-full border-t border-neutral-300 bg-neutral-200 font-sans text-[12px] leading-none text-neutral-700 antialiased"
      role="toolbar"
      aria-label="Podgląd wariantów treści"
    >
      <div className="flex h-10 w-full min-w-0 overflow-x-auto overscroll-x-contain">
        <div className="flex min-w-max items-end gap-px px-2">
          {VARIANT_LIST.map((v) => {
            const active = v.id === current;
            return (
              <button
                key={v.id}
                type="button"
                onClick={() => onChange(v.id)}
                title={`${v.label} — ${v.channel}`}
                aria-pressed={active}
                className={[
                  "relative flex max-w-[14rem] shrink-0 flex-col items-start rounded-t-md border px-3 py-2 text-left transition-colors",
                  active
                    ? "z-10 -mb-px border-neutral-300 border-b-0 bg-white text-neutral-900"
                    : "border-transparent bg-transparent text-neutral-600 hover:bg-neutral-100",
                ].join(" ")}
              >
                <span className="truncate font-medium">{v.label}</span>
                <span className="mt-0.5 hidden truncate text-[10px] text-neutral-500 lg:block">
                  {v.channel}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
