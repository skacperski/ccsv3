"use client";

import React from "react";
import { SurveyCta, CalendarCta } from "../lib";

const LINKS = [
  { label: "Zakres", href: "#zakres" },
  { label: "Harmonogram", href: "#harmonogram" },
  { label: "Cennik", href: "#cennik" },
  { label: "FAQ", href: "#faq" },
];

export function Nav({ nav, ctaSecondary }) {
  return (
    <header className="sticky top-0 z-50 border-b border-awe-150 bg-white/85 backdrop-blur-md">
      <nav className="mx-auto flex h-[68px] w-full max-w-[1240px] items-center px-5">
        <a href="#" className="shrink-0 text-[20px] font-extrabold tracking-tight text-awe-950">
          {nav.brand}
        </a>
        <div className="mx-auto hidden items-center gap-7 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[15px] font-medium text-awe-600 transition-colors hover:text-awe-950"
            >
              {l.label}
            </a>
          ))}
        </div>
        <div className="ml-auto flex items-center gap-4 lg:ml-0">
          {ctaSecondary && (
            <CalendarCta variant="link" location="nav" className="hidden !text-[14px] md:inline-flex">
              {ctaSecondary}
            </CalendarCta>
          )}
          <SurveyCta location="nav" className="!h-10 !px-4 !text-[14px]">
            {nav.cta}
          </SurveyCta>
        </div>
      </nav>
    </header>
  );
}
