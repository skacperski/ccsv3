"use client";

import React, { Fragment } from "react";

const PANEL_CLASSES = [
  "relative border-t border-border-primary bg-neutral-white pb-8 md:pb-14 lg:sticky lg:pb-0 top-0 lg:mb-32",
  "relative border-t border-border-primary bg-neutral-white pb-8 md:pb-14 lg:sticky lg:pb-0 lg:top-16 lg:-mt-16 lg:mb-16",
  "relative border-t border-border-primary bg-neutral-white pb-8 md:pb-14 lg:sticky lg:pb-0 lg:top-32 lg:mb-16",
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
                  <a href="#" className="flex h-16 w-full items-center">
                    <span className="mr-5 font-semibold md:mr-6 md:text-md">
                      {pillar.num}
                    </span>
                    <h3 className="font-semibold md:text-md">{pillar.label}</h3>
                  </a>
                  <div className="py-8 md:py-10 lg:py-12">
                    <div className="grid grid-cols-1 gap-y-12 md:items-center md:gap-x-12 lg:grid-cols-2 lg:gap-x-20">
                      <div>
                        <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                          {pillar.h2}
                        </h2>
                        <p className="md:text-md">{pillar.body}</p>
                      </div>
                      <div className="relative">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-1.svg"
                          className="h-[25rem] w-full object-cover sm:h-[30rem] lg:h-[60vh]"
                          alt={`Ilustracja: ${pillar.label}`}
                        />
                      </div>
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
