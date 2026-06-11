"use client";

import React, { Fragment } from "react";
import { scrollToSurvey } from "../utils/cta";
import { SectionIcon } from "./SectionIcon";
import { PILLAR_ICONS } from "../icons/sectionIcons";

/** h-16 tab row = 4rem — sticky stack offsets must use the same step (top-16, top-32, …). */
const HEADER_STEP = 16;

const STICKY_TOP = {
  0: "top-0",
  1: "lg:top-16",
  2: "lg:top-32",
  3: "lg:top-48",
  4: "lg:top-64",
};

const NEG_MARGIN = {
  1: "lg:-mt-16",
  2: "lg:-mt-32",
  3: "lg:-mt-48",
  4: "lg:-mt-64",
};

const SCROLL_MARGIN = {
  16: "lg:mb-16",
  32: "lg:mb-32",
  48: "lg:mb-48",
  64: "lg:mb-64",
};

/** Enough scroll runway per panel on desktop (viewport minus stacked tab headers). */
const CONTENT_MIN_H = {
  2: "lg:min-h-[calc(100vh-8rem)]",
  3: "lg:min-h-[calc(100vh-12rem)]",
  4: "lg:min-h-[calc(100vh-16rem)]",
  5: "lg:min-h-[calc(100vh-20rem)]",
};

function getPanelClasses(index, total) {
  const base =
    "relative border-t border-vent-chalk bg-vent-paper pb-8 md:pb-14 lg:sticky lg:pb-0";
  const top = STICKY_TOP[index] ?? STICKY_TOP[Math.min(index, 4)];
  // Relume pattern: negative margin on middle panels only (not first, not last).
  const overlap =
    index > 0 && index < total - 1 ? NEG_MARGIN[index] ?? "" : "";
  const panelsBelow = total - index - 1;
  const marginBottom =
    panelsBelow > 0
      ? SCROLL_MARGIN[panelsBelow * HEADER_STEP] ?? "lg:mb-16"
      : "lg:mb-16";

  return [base, top, overlap, marginBottom].filter(Boolean).join(" ");
}

export function Layout356({ service }) {
  const pillars = service.pillars ?? [];

  return (
    <section id="relume">
      <div className="px-[5%] pt-16 pb-16 md:pt-24 md:pb-24 lg:pt-28 lg:pb-28">
        <div className="container">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 inline-flex items-center gap-2 text-[13px] font-medium uppercase tracking-wide text-vent-graphite md:mb-4">
              <span className="size-1.5 rounded-full bg-vent-orange" aria-hidden />
              {service.kicker}
            </p>
            <h2 className="mb-5 text-5xl text-vent-carbon md:mb-6 md:text-7xl lg:text-8xl">
              {service.h2}
            </h2>
            <p className="text-vent-graphite md:text-md">{service.sub}</p>
          </div>
        </div>
      </div>
      <div>
        {pillars.map((pillar, i) => (
          <Fragment key={pillar.num ?? i}>
            <div className="relative -top-32 hidden h-0 lg:block" aria-hidden />
            <div className={getPanelClasses(i, pillars.length)}>
              <div className="px-[5%]">
                <div className="container">
                  <button
                    type="button"
                    onClick={scrollToSurvey}
                    className="flex h-16 w-full shrink-0 cursor-pointer items-center text-left"
                  >
                    <span className="mr-5 font-display text-sm text-vent-orange md:mr-6">
                      {pillar.num}
                    </span>
                    <h3 className="font-medium md:text-md">{pillar.label}</h3>
                  </button>
                  <div
                    className={[
                      "py-8 md:py-10 lg:py-12",
                      CONTENT_MIN_H[pillars.length] ?? "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    <div className="grid grid-cols-1 gap-y-12 md:items-center md:gap-x-12 lg:grid-cols-2 lg:gap-x-20">
                      <div>
                        <h2 className="mb-5 text-5xl text-vent-carbon md:mb-6 md:text-7xl lg:text-8xl">
                          {pillar.h2}
                        </h2>
                        <p className="md:text-md">{pillar.body}</p>
                      </div>
                      <SectionIcon
                        icon={PILLAR_ICONS[i] ?? PILLAR_ICONS[0]}
                        size="lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </section>
  );
}
