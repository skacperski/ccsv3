import { VARIANT_LIST } from "../content/variants";
import type { VariantId } from "../content/types";

interface Props {
  current: VariantId;
  onChange: (id: VariantId) => void;
}

export function VariantSwitcher({ current, onChange }: Props) {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[60] w-full border-t border-[#c4c7c5] bg-[#dee1e6] font-[system-ui,-apple-system,BlinkMacSystemFont,'Segoe_UI',Roboto,sans-serif] text-[12px] leading-none text-[#3c4043] antialiased"
      role="toolbar"
      aria-label="Podgląd wariantów treści"
    >
      <div className="flex h-9 w-full min-w-0 items-stretch">
        <div
          className="flex shrink-0 items-center gap-2 border-r border-[#c4c7c5] bg-[#cfd3d7] px-3"
          aria-hidden
        >
          <span className="flex gap-[3px]" title="Podgląd deweloperski">
            <span className="size-[9px] rounded-full bg-[#ff5f57]" />
            <span className="size-[9px] rounded-full bg-[#febc2e]" />
            <span className="size-[9px] rounded-full bg-[#28c840]" />
          </span>
          <span className="hidden whitespace-nowrap font-medium text-[#5f6368] sm:inline">
            Podgląd wariantu
          </span>
          <span className="whitespace-nowrap font-medium text-[#5f6368] sm:hidden">
            Wariant
          </span>
        </div>

        <div className="flex min-w-0 flex-1 overflow-x-auto overscroll-x-contain">
          <div className="flex min-w-max items-end gap-px px-1 pb-0">
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
                    "group relative flex max-w-[14rem] shrink-0 flex-col items-start rounded-b-md border px-3 py-1.5 text-left transition-colors",
                    active
                      ? "z-10 -mt-px border-[#c4c7c5] border-b-0 bg-white text-[#202124] shadow-[0_1px_0_#fff]"
                      : "border-transparent bg-transparent text-[#5f6368] hover:bg-[#e8eaed]",
                  ].join(" ")}
                >
                  <span
                    className={`truncate font-medium ${active ? "text-[#202124]" : "text-[#3c4043]"}`}
                  >
                    {v.label}
                  </span>
                  <span
                    className={`mt-0.5 hidden truncate text-[10px] lg:block ${
                      active ? "text-[#80868b]" : "text-[#80868b]/90"
                    }`}
                  >
                    {v.channel}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
