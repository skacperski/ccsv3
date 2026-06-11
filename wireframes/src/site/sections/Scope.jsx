"use client";

import React from "react";
import { LuBuilding2, LuUsers, LuFileSearch } from "react-icons/lu";
import { Serif, Kicker, SurveyCta } from "../lib";

/* steep.app "A new kind of analytics platform" layout: serif heading,
   three rounded cards — first one peach-tinted and raised, rest gray —
   with a large line illustration in the middle and copy at the bottom. */

const CARD_ICONS = [LuBuilding2, LuUsers, LuFileSearch];

function ScopeCard({ icon: Icon, html, featured }) {
  return (
    <div
      data-reveal
      className={`flex min-h-[380px] flex-col justify-between rounded-[20px] p-7 md:min-h-[420px] ${
        featured ? "bg-[#F8E0CB] lg:-translate-y-8" : "bg-steep-light-gray lg:translate-y-2"
      }`}
    >
      <div className="flex flex-1 items-center justify-center py-8">
        <Icon
          className={`size-28 ${featured ? "text-steep-text/70" : "text-steep-text/50"}`}
          strokeWidth={0.8}
        />
      </div>
      <p
        className="text-[15px] leading-snug text-steep-text/85"
        dangerouslySetInnerHTML={{ __html: html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>") }}
      />
    </div>
  );
}

export function Scope({ scope }) {
  return (
    <section id="zakres" className="px-5 py-20 md:py-28">
      <div className="mx-auto max-w-[1200px]">
        <div data-reveal className="mx-auto mb-14 max-w-xl text-center md:mb-20">
          <Kicker className="mb-4">{scope.kicker}</Kicker>
          <Serif
            text={scope.h2}
            italicWords={2}
            className="text-[36px] leading-[1.05] text-steep-text md:text-[48px]"
          />
        </div>

        {scope.mode === "compact" ? (
          <p data-reveal className="mx-auto max-w-2xl text-center text-lg text-steep-gray">
            {scope.compactText}
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:px-8">
            {scope.bullets.map((b, i) => (
              <ScopeCard key={i} icon={CARD_ICONS[i % CARD_ICONS.length]} html={b} featured={i === 0} />
            ))}
          </div>
        )}

        <div data-reveal className="mt-14 text-center lg:mt-10">
          <SurveyCta location="zakres">{scope.cta}</SurveyCta>
        </div>
      </div>
    </section>
  );
}
