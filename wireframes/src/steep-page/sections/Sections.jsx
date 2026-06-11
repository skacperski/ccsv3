"use client";

import React from "react";
import { BiCheck } from "react-icons/bi";
import { Eyebrow, SerifHeading, SurveyCta, CalendarCta } from "../ui";
import { PILLAR_ICONS } from "../../relume-page/icons/sectionIcons";

/* ------------------------------------------------------------------ */
/* Risk — tinted USP cards (steep's light-blue/red/green/purple)       */
/* ------------------------------------------------------------------ */

const TINTS = [
  { bg: "bg-steep-light-blue", num: "text-steep-blue" },
  { bg: "bg-steep-light-red", num: "text-steep-red" },
  { bg: "bg-steep-light-green", num: "text-steep-green-deep" },
  { bg: "bg-steep-light-purple", num: "text-steep-purple" },
];

export function Risk({ risk }) {
  const cards = risk.cards ?? [];
  return (
    <section id="risk" className="px-5 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <Eyebrow className="mb-3">{risk.kicker}</Eyebrow>
          <SerifHeading
            text={risk.h2}
            className="mb-5 text-4xl leading-[1.08] text-steep-text md:text-5xl lg:text-[44px]"
          />
          <p className="text-steep-gray md:text-lg">{risk.lead}</p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, i) => {
            const tint = TINTS[i % TINTS.length];
            return (
              <div key={i} className={`flex flex-col gap-4 rounded-2xl p-6 ${tint.bg}`}>
                <span className={`font-serif text-2xl italic ${tint.num}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-[15px] font-medium leading-snug text-steep-text md:text-base">
                  {card}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Scope — light-gray rounded panel with green checklist               */
/* ------------------------------------------------------------------ */

export function Scope({ scope }) {
  return (
    <section className="px-5 py-8 md:py-12">
      <div className="mx-auto max-w-4xl rounded-3xl bg-steep-light-gray p-8 md:p-12">
        <Eyebrow className="mb-3">{scope.kicker}</Eyebrow>
        <SerifHeading
          text={scope.h2}
          className="mb-8 text-3xl leading-[1.1] text-steep-text md:text-4xl"
        />
        {scope.mode === "compact" ? (
          <p className="text-lg leading-relaxed text-steep-gray">{scope.compactText}</p>
        ) : (
          <ul className="flex flex-col gap-4">
            {scope.bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-0.5 flex size-6 flex-shrink-0 items-center justify-center rounded-full bg-steep-green">
                  <BiCheck className="size-4 text-white" />
                </span>
                <p
                  className="text-base leading-relaxed text-steep-text md:text-lg"
                  dangerouslySetInnerHTML={{
                    __html: b.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>"),
                  }}
                />
              </li>
            ))}
          </ul>
        )}
        <div className="mt-8">
          <SurveyCta location="zakres">{scope.cta}</SurveyCta>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Timeline — minimal horizontal milestones with green nodes           */
/* ------------------------------------------------------------------ */

export function Timeline({ timeline }) {
  const items = timeline.milestones ?? [];
  return (
    <section id="harmonogram" className="px-5 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <Eyebrow className="mb-3">{timeline.kicker}</Eyebrow>
          <SerifHeading
            text={timeline.h2}
            className="mb-5 text-4xl leading-[1.08] text-steep-text md:text-5xl lg:text-[44px]"
          />
          <p className="text-steep-gray md:text-lg">{timeline.lead}</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {items.map((m, i) => (
            <div key={i} className="relative">
              <div className="mb-4 flex items-center gap-3">
                <span className="size-3 flex-none rounded-full bg-steep-green" aria-hidden />
                <div className="h-px w-full bg-trans-10" aria-hidden />
              </div>
              <p className="mb-1 font-serif text-xl italic text-steep-text">{m.date}</p>
              {m.title && <p className="mb-1 text-sm font-semibold text-steep-text">{m.title}</p>}
              <p className="text-sm leading-relaxed text-steep-gray">
                {[m.body, m.note].filter(Boolean).join(" ")}
              </p>
            </div>
          ))}
        </div>
        {timeline.footnote && (
          <p className="mt-10 text-center text-xs text-steep-muted">{timeline.footnote}</p>
        )}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Pillars — 2x2 light-gray feature cards with icons                   */
/* ------------------------------------------------------------------ */

export function Pillars({ service }) {
  const pillars = service.pillars ?? [];
  return (
    <section className="px-5 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <Eyebrow className="mb-3">{service.kicker}</Eyebrow>
          <SerifHeading
            text={service.h2}
            className="mb-5 text-4xl leading-[1.08] text-steep-text md:text-5xl lg:text-[44px]"
          />
          <p className="text-steep-gray md:text-lg">{service.sub}</p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {pillars.map((pillar, i) => {
            const Icon = PILLAR_ICONS[i] ?? PILLAR_ICONS[0];
            return (
              <div key={i} className="rounded-2xl bg-steep-light-gray p-7 md:p-9">
                <div className="mb-5 flex items-center justify-between">
                  <span className="flex size-11 items-center justify-center rounded-full bg-white">
                    <Icon className="size-5 text-steep-text" strokeWidth={1.75} />
                  </span>
                  <span className="text-sm font-medium text-steep-muted">{pillar.num}</span>
                </div>
                <h3 className="mb-2 text-xl font-semibold tracking-tight text-steep-text md:text-2xl">
                  {pillar.h2}
                </h3>
                <p className="leading-relaxed text-steep-gray">{pillar.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Steps — 3 numbered columns + CTA pair                               */
/* ------------------------------------------------------------------ */

export function Steps({ how, ctaPrimary, ctaSecondary }) {
  const steps = how.steps ?? [];
  return (
    <section className="px-5 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <Eyebrow className="mb-3">{how.kicker}</Eyebrow>
          <SerifHeading
            text={how.h2}
            className="mb-5 text-4xl leading-[1.08] text-steep-text md:text-5xl lg:text-[44px]"
          />
          <p className="text-steep-gray md:text-lg">{how.sub}</p>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {steps.map((step, i) => (
            <div key={i} className="text-center md:text-left">
              <p className="mb-3 font-serif text-4xl italic text-steep-green">{i + 1}</p>
              <h3 className="mb-2 text-lg font-semibold tracking-tight text-steep-text md:text-xl">
                {step.title}
              </h3>
              <p className="leading-relaxed text-steep-gray">{step.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          <SurveyCta location="proces">{ctaPrimary}</SurveyCta>
          {ctaSecondary && (
            <CalendarCta location="proces" variant="ghost">
              {ctaSecondary}
            </CalendarCta>
          )}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Quotes — serif testimonials on tinted cards                         */
/* ------------------------------------------------------------------ */

export function Quotes({ proof }) {
  const items = proof.items ?? [];
  const picked = [items[0], items[3] ?? items[2]].filter(Boolean);
  return (
    <section id="opinie" className="px-5 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <SerifHeading
            text={proof.h2}
            className="mb-4 text-4xl leading-[1.08] text-steep-text md:text-5xl lg:text-[44px]"
          />
          <p className="text-steep-gray md:text-lg">{proof.sub}</p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {picked.map((item, i) => (
            <figure
              key={i}
              className={`flex flex-col justify-between rounded-3xl p-8 md:p-10 ${
                i === 0 ? "bg-steep-light-green" : "bg-steep-light-gray"
              }`}
            >
              <blockquote className="mb-8 font-serif text-xl italic leading-snug text-steep-text md:text-2xl">
                “{item.quote}”
              </blockquote>
              <figcaption className="text-sm">
                <span className="font-semibold text-steep-text">{item.name}</span>
                <span className="text-steep-gray">
                  {" "}
                  — {item.role}, {item.company}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
