import React from "react";
import { SurveyCta } from "./ui";
import { useReveal } from "../hooks/useReveal";

function Card({ num, title, body }) {
  // Variant copy may be body-only (no card title) — keep the layout stable
  // by letting the body take the title slot's emphasis in that case.
  return (
    <div className="flex flex-col justify-end rounded-ui bg-light p-6 transition-colors duration-200 hover:bg-light-hover md:p-8">
      <p className="mb-auto pb-12 font-mono text-[11px] font-medium text-soft">{num}</p>
      {title ? (
        <>
          <h3 className="text-[22px] font-medium leading-snug tracking-tight text-ink md:text-[24px]">
            {title}
          </h3>
          <div className="my-4 h-px bg-ink/10" />
          <p className="line-clamp-3 min-h-[4.875em] text-[14px] leading-relaxed text-gray">
            {body}
          </p>
        </>
      ) : (
        <p className="min-h-[4.875em] text-[16px] font-medium leading-relaxed text-ink">
          {body}
        </p>
      )}
    </div>
  );
}

function CtaCard({ cta }) {
  return (
    <div className="group flex cursor-pointer flex-col justify-end rounded-ui bg-[#9a49fd] p-6 transition-colors duration-200 hover:bg-red md:p-8">
      <p className="mb-auto pb-12 font-mono text-[11px] font-medium text-white/60">04</p>
      <h3 className="text-[22px] font-medium leading-snug tracking-tight text-white md:text-[24px]">
        {cta.title}
      </h3>
      <div className="mt-4">
        <div className="flex h-8 items-end overflow-hidden">
          <SurveyCta
            variant="light"
            className="translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0 !rounded-[2px] !px-3 !py-1.5 !text-[13px] !font-medium pointer-events-none group-hover:pointer-events-auto"
          >
            {cta.label}
          </SurveyCta>
        </div>
        <div className="h-px w-full bg-white/30 transition-colors duration-200 group-hover:bg-white" />
      </div>
      <p className="mt-4 line-clamp-3 min-h-[4.875em] text-[14px] leading-relaxed text-white/90">{cta.body}</p>
    </div>
  );
}

export function Risk({ risk }) {
  const ref = useReveal();
  return (
    <section ref={ref} className="bg-white px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Header row: kicker left, heading+lead right */}
        <div className="grid items-start gap-8 md:grid-cols-[200px_1fr]" data-reveal>
          <p className="pt-1 text-[14px] font-medium text-gray">{risk.kicker}</p>
          <div>
            <h2 className="tech-display text-[28px] leading-[1.1] md:text-[36px]">{risk.h2}</h2>
            <p className="mt-3 max-w-xl text-[14px] leading-relaxed text-gray">{risk.lead}</p>
          </div>
        </div>

        {/* Cards grid: offset to align with the heading column */}
        <div
          className="mt-12 grid gap-4 md:grid-cols-[200px_1fr]"
          data-reveal-group
        >
          <div className="hidden md:block" />
          <div className="grid gap-4 sm:grid-cols-2">
            {risk.cards.map((card, i) => (
              <Card
                key={i}
                num={String(i + 1).padStart(2, "0")}
                title={card.title}
                body={card.body}
              />
            ))}
            <CtaCard cta={risk.cta} />
          </div>
        </div>
      </div>
    </section>
  );
}
