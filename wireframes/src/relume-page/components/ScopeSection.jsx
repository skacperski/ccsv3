"use client";

import { BiCheck } from "react-icons/bi";
import React from "react";
import { SurveyCtaButton } from "./SurveyCtaButton";
import { FuseKicker } from "./FuseKicker";
import { ghostLightButtonClassName } from "../utils/fuse";

export function ScopeSection({ scope }) {
  return (
    <section className="bg-fuse-paper px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl">
          <FuseKicker num="02" className="mb-3 text-fuse-blue md:mb-4">
            {scope.kicker}
          </FuseKicker>
          <h2 className="mb-8 text-4xl font-medium md:text-5xl lg:text-6xl">
            {scope.h2}
          </h2>

          {scope.mode === "compact" ? (
            <p className="text-lg text-fuse-muted">{scope.compactText}</p>
          ) : (
            <ul className="flex flex-col gap-5">
              {scope.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="mt-0.5 flex size-6 flex-shrink-0 items-center justify-center bg-fuse-blue">
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
            <SurveyCtaButton
              variant="secondary"
              title={scope.cta}
              className={ghostLightButtonClassName}
            >
              {scope.cta}
            </SurveyCtaButton>
          </div>
        </div>
      </div>
    </section>
  );
}
