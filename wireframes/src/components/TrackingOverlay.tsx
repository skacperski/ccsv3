import { useEffect, useState } from "react";
import {
  TRACKED_EVENTS,
  TRACKED_BY_ID,
  setTrackingDebug,
  type Conversion,
} from "../tracking/tracking";

interface Marker {
  id: string;
  location: string | null;
  rect: DOMRect;
}

const COLOR: Record<Conversion | "none", string> = {
  primary: "#e11d48", // czerwony — konwersja główna
  secondary: "#d97706", // bursztynowy — konwersja wtórna
  micro: "#2563eb", // niebieski — mikrokonwersja
  none: "#525252", // szary — zdarzenie pomocnicze
};

function colorFor(conv?: Conversion): string {
  return conv ? COLOR[conv] : COLOR.none;
}

const CONV_LABEL: Record<Conversion, string> = {
  primary: "Konwersja główna",
  secondary: "Konwersja wtórna",
  micro: "Mikrokonwersja",
};

export function TrackingOverlay({ enabled }: { enabled: boolean }) {
  const [markers, setMarkers] = useState<Marker[]>([]);

  useEffect(() => {
    setTrackingDebug(enabled);
    if (!enabled) {
      setMarkers([]);
      return;
    }
    let raf = 0;
    const scan = () => {
      // Gdy otwarty jest modal (Radix Dialog), pokazuj chipy tylko dla elementów
      // wewnątrz niego — inaczej znaczniki spod modala przebijają się nad nim.
      const dialog = document.querySelector<HTMLElement>('[role="dialog"]');
      const root = dialog ?? document;
      const els = Array.from(root.querySelectorAll<HTMLElement>("[data-track]"));
      const next = els
        .map((el) => ({
          id: el.getAttribute("data-track") ?? "",
          location: el.getAttribute("data-track-location"),
          rect: el.getBoundingClientRect(),
        }))
        .filter((m) => m.rect.width > 0 && m.rect.height > 0 && m.rect.bottom > 0);
      setMarkers(next);
      raf = requestAnimationFrame(scan);
    };
    raf = requestAnimationFrame(scan);
    return () => cancelAnimationFrame(raf);
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div className="pointer-events-none fixed inset-0 z-[55]">
        {markers.map((m, i) => {
          const ev = TRACKED_BY_ID[m.id];
          const color = colorFor(ev?.conversion);
          const loc = m.location && m.location !== "nieznane" ? ` · ${m.location}` : "";
          return (
            <div key={`${m.id}-${i}`}>
              <div
                style={{
                  position: "fixed",
                  left: m.rect.left,
                  top: m.rect.top,
                  width: m.rect.width,
                  height: m.rect.height,
                  border: `2px solid ${color}`,
                  boxShadow: "0 0 0 1px rgba(255,255,255,0.5)",
                }}
              />
              <span
                style={{
                  position: "fixed",
                  left: m.rect.left,
                  top: Math.max(2, m.rect.top - 17),
                  background: color,
                  maxWidth: "90vw",
                }}
                className="truncate px-1.5 py-0.5 font-mono text-[10px] font-bold leading-none text-white"
              >
                {m.id}
                {loc}
              </span>
            </div>
          );
        })}
      </div>

      <TrackingLegend visibleCount={markers.length} />
    </>
  );
}

function TrackingLegend({ visibleCount }: { visibleCount: number }) {
  return (
    <aside className="fixed bottom-12 right-3 z-[56] w-[22rem] max-w-[calc(100vw-1.5rem)] overflow-hidden border border-neutral-700 bg-neutral-900 font-sans text-white shadow-2xl">
      <div className="flex items-center justify-between border-b border-neutral-700 px-3 py-2">
        <span className="text-xs font-bold uppercase tracking-widest">Tracking · GTM</span>
        <span className="font-mono text-[10px] text-neutral-400">
          {visibleCount} elem. na ekranie
        </span>
      </div>
      <div className="max-h-[50vh] overflow-y-auto px-3 py-2">
        <ul className="flex flex-col divide-y divide-neutral-800">
          {TRACKED_EVENTS.map((ev) => (
            <li key={ev.id} className="flex items-start gap-2 py-2">
              <span
                className="mt-1 size-2.5 shrink-0"
                style={{ background: colorFor(ev.conversion) }}
                aria-hidden
              />
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-x-2">
                  <code className="font-mono text-[11px] font-bold text-white">{ev.id}</code>
                  <span className="text-[10px] text-neutral-400">{ev.label}</span>
                  {!ev.dom && (
                    <span className="bg-neutral-700 px-1 text-[9px] uppercase text-neutral-300">
                      behawioralne
                    </span>
                  )}
                </div>
                <p className="mt-0.5 text-[10px] leading-snug text-neutral-400">
                  GA4: <code className="text-neutral-300">{ev.ga4}</code>
                  {ev.conversion && ` · ${CONV_LABEL[ev.conversion]}`}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="border-t border-neutral-700 px-3 py-2 text-[10px] leading-snug text-neutral-400">
        Zdarzenia trafiają do <code className="text-neutral-200">window.dataLayer</code> i są
        logowane w konsoli. Pełny plan kontenera: <code className="text-neutral-200">docs/tracking.md</code>.
      </div>
    </aside>
  );
}
