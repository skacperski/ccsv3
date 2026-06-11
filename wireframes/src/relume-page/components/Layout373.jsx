"use client";

import React from "react";
import { SurveyCtaButton } from "./SurveyCtaButton";
import { FuseKicker } from "./FuseKicker";
import { pillPaperButtonClassName } from "../utils/vent";

export function Layout373({ how, surveyCta }) {
  return (
    <section id="relume" className="bg-vent-mist px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <FuseKicker className="mb-3 justify-center md:mb-4">{how.kicker}</FuseKicker>
            <h2 className="mb-5 text-5xl text-vent-carbon md:mb-6 md:text-7xl lg:text-8xl">
              {how.h2}
            </h2>
            <p className="text-vent-graphite md:text-md">{how.sub}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:gap-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
            <div className="grid grid-cols-1 rounded-lg bg-vent-carbon sm:col-span-2 sm:row-span-1">
              <div className="flex flex-1 flex-col justify-center p-6 md:p-8 lg:p-12">
                <div>
                  <p className="mb-2 font-display text-2xl text-vent-orange">01</p>
                  <p className="mb-4 text-[13px] font-medium uppercase tracking-wide text-white/60">
                    Zacznij tutaj
                  </p>
                  <h3 className="mb-5 text-4xl leading-[1.1] text-white md:mb-6 md:text-5xl lg:text-6xl">
                    {how.steps[0].title}
                  </h3>
                  <p className="text-white/80">{how.steps[0].body}</p>
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <SurveyCtaButton
                    title={surveyCta}
                    variant="secondary-alt"
                    location="proces"
                    className={pillPaperButtonClassName}
                  >
                    {surveyCta}
                  </SurveyCtaButton>
                </div>
              </div>
            </div>
            {how.steps.slice(1).map((item, i) => (
              <div key={i} className="flex h-full flex-col rounded-lg bg-vent-paper">
                <div className="flex flex-1 flex-col p-6 md:p-8 lg:p-6">
                  <p className="mb-3 font-display text-2xl text-vent-orange">
                    {String(i + 2).padStart(2, "0")}
                  </p>
                  <h3 className="mb-2 text-xl font-medium text-vent-carbon md:text-2xl">
                    {item.title}
                  </h3>
                  <p className="text-vent-graphite">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
