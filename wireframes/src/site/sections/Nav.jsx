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
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 w-full max-w-[1200px] items-center px-5 md:h-[68px]">
        <a href="#" className="shrink-0 text-[19px] font-semibold tracking-tight text-steep-text">
          {nav.brand}
        </a>
        <div className="mx-auto hidden items-center gap-8 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[15px] text-steep-text/80 transition-colors hover:text-steep-text"
            >
              {l.label}
            </a>
          ))}
        </div>
        <div className="ml-auto flex items-center gap-5 lg:ml-0">
          {ctaSecondary && (
            <CalendarCta variant="link" location="nav" className="hidden !text-[15px] font-normal no-underline hover:underline md:inline-flex">
              {ctaSecondary}
            </CalendarCta>
          )}
          <SurveyCta location="nav" className="!h-9 !px-4 !text-[15px]">
            {nav.cta}
          </SurveyCta>
        </div>
      </nav>
    </header>
  );
}
