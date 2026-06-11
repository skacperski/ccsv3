"use client";

import React, { Fragment } from "react";
import { scrollToSurvey } from "../utils/cta";
import { SectionIcon } from "./SectionIcon";
import { PILLAR_ICONS } from "../icons/sectionIcons";

const PANEL_CLASSES = [
  "relative border-t border-border-primary bg-neutral-white pb-8 md:pb-14 lg:sticky lg:pb-0 top-0 lg:mb-40",
  "relative border-t border-border-primary bg-neutral-white pb-8 md:pb-14 lg:sticky lg:pb-0 lg:top-12 lg:-mt-12 lg:mb-28",
  "relative border-t border-border-primary bg-neutral-white pb-8 md:pb-14 lg:sticky lg:pb-0 lg:top-24 lg:-mt-24 lg:mb-16",
  "relative border-t border-border-primary bg-neutral-white pb-8 md:pb-14 lg:sticky lg:pb-0 lg:top-36 lg:mb-0",
];

export function Layout356({ service }) {
  return (
    <section id="relume">
      <div className="px-[5%] pt-16 pb-16 md:pt-24 md:pb-24 lg:pt-28 lg:pb-28">
        <div className="container">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">{service.kicker}</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              {service.h2}
            </h2>
            <p className="md:text-md">{service.sub}</p>
          </div>
        </div>
      </div>
      <div className="sticky top-0">
        {service.pillars.map((pillar, i) => (
          <Fragment key={i}>
            <div className="relative -top-32 h-0" />
            <div className={PANEL_CLASSES[i] ?? PANEL_CLASSES[2]}>
              <div className="px-[5%]">
                <div className="container">
                  <button
                    type="button"
                    onClick={scrollToSurvey}
                    className="flex h-16 w-full cursor-pointer items-center text-left"
                  >
                    <span className="mr-5 font-semibold md:mr-6 md:text-md">
                      {pillar.num}
                    </span>
                    <h3 className="font-semibold md:text-md">{pillar.label}</h3>
                  </button>
                  <div className="py-8 md:py-10 lg:py-12">
                    <div className="grid grid-cols-1 gap-y-12 md:items-center md:gap-x-12 lg:grid-cols-2 lg:gap-x-20">
                      <div>
                        <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
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
