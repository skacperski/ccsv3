"use client";

import React from "react";
import { LuCheck } from "react-icons/lu";
import { SectionHead, SurveyCta } from "../lib";

/* awesomic "We solve the bottlenecks that kill your speed" layout:
   heading on the left, stacked rounded checklist cards on the right. */

export function Scope({ scope }) {
  return (
    <section id="zakres" className="px-5 py-16 md:py-24">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div data-reveal className="lg:sticky lg:top-28">
          <SectionHead align="left" kicker={scope.kicker} h2={scope.h2} />
          <div className="mt-8">
            <SurveyCta location="zakres">{scope.cta}</SurveyCta>
          </div>
        </div>

        {scope.mode === "compact" ? (
          <p data-reveal className="text-lg leading-relaxed text-awe-600">
            {scope.compactText}
          </p>
        ) : (
          <div data-reveal-group className="flex flex-col gap-4">
            {scope.bullets.map((b, i) => (
              <div
                key={i}
                className="flex items-start gap-4 rounded-[20px] border border-awe-150 bg-awe-50 p-6"
              >
                <span className="mt-0.5 flex size-7 flex-none items-center justify-center rounded-full bg-awe-orange">
                  <LuCheck className="size-4 text-white" strokeWidth={3} />
                </span>
                <p
                  className="text-[16px] leading-relaxed text-awe-800 md:text-[17px]"
                  dangerouslySetInnerHTML={{
                    __html: b.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>"),
                  }}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
