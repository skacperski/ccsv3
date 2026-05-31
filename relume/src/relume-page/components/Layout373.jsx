"use client";

import React from "react";
import { SurveyCtaButton } from "./SurveyCtaButton";

export function Layout373({ how, surveyCta }) {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">{how.kicker}</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              {how.h2}
            </h2>
            <p className="md:text-md">{how.sub}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:gap-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
            <div className="grid grid-cols-1 border-2 border-black bg-black sm:col-span-2 sm:row-span-1">
              <div className="flex flex-1 flex-col justify-center p-6 md:p-8 lg:p-12">
                <div>
                  <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-white/50">
                    Zacznij tutaj
                  </p>
                  <h3 className="mb-5 text-4xl font-bold leading-[1.2] text-white md:mb-6 md:text-5xl lg:text-6xl">
                    {how.steps[0].title}
                  </h3>
                  <p className="text-white/80">{how.steps[0].body}</p>
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <SurveyCtaButton title={surveyCta} variant="secondary-alt">
                    {surveyCta}
                  </SurveyCtaButton>
                </div>
              </div>
            </div>
            {how.steps.slice(1).map((item, i) => (
              <div
                key={i}
                className="flex h-full flex-col border border-border-primary"
              >
                <div className="flex flex-1 flex-col p-6 md:p-8 lg:p-6">
                  <div>
                    <div className="mb-3 md:mb-4">
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                        alt={`Relume logo ${i + 1}`}
                        className="size-12"
                      />
                    </div>
                    <h3 className="mb-2 text-xl font-bold md:text-2xl">
                      {item.title}
                    </h3>
                    <p>{item.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
