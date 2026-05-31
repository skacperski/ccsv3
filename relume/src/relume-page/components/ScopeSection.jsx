"use client";

import { BiCheck } from "react-icons/bi";
import React from "react";
import { SurveyCtaButton } from "./SurveyCtaButton";

export function ScopeSection({ scope }) {
  return (
    <section className="bg-neutral-50 px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl">
          <p className="mb-3 font-semibold md:mb-4">{scope.kicker}</p>
          <h2 className="mb-8 text-4xl font-bold md:text-5xl lg:text-6xl">
            {scope.h2}
          </h2>

          {scope.mode === "compact" ? (
            <p className="text-lg text-neutral-600">{scope.compactText}</p>
          ) : (
            <ul className="flex flex-col gap-5">
              {scope.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="mt-0.5 flex size-6 flex-shrink-0 items-center justify-center rounded-full bg-black">
                    <BiCheck className="size-4 text-white" />
                  </span>
                  <p
                    className="text-lg"
                    dangerouslySetInnerHTML={{
                      __html: b.replace(
                        /\*\*(.+?)\*\*/g,
                        "<strong>$1</strong>",
                      ),
                    }}
                  />
                </li>
              ))}
            </ul>
          )}

          <div className="mt-8">
            <SurveyCtaButton variant="secondary" title={scope.cta}>
              {scope.cta}
            </SurveyCtaButton>
          </div>
        </div>
      </div>
    </section>
  );
}
