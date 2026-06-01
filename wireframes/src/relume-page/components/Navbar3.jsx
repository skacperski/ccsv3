"use client";

import React from "react";
import { SurveyCtaButton } from "./SurveyCtaButton";

export function Navbar3({ nav }) {
  // Krótszy wariant CTA do paska nawigacji na mobile (część przed przecinkiem),
  // żeby długi tekst nie nachodził na logo. Pełny tekst od md w górę.
  const shortCta = nav.cta.split(",")[0].trim();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border-primary bg-white/95 backdrop-blur-sm">
      <nav className="flex h-16 w-full items-center gap-3 md:h-18">
        <a
          href="#"
          className="shrink-0 pl-4 text-lg font-bold text-black md:pl-6 md:text-xl lg:pl-8"
        >
          {nav.brand}
        </a>
        <SurveyCtaButton
          title={nav.cta}
          location="nav"
          size="sm"
          className="ml-auto mr-4 min-w-0 max-w-[60vw] shrink truncate whitespace-nowrap px-3 py-1 text-sm md:mr-6 md:max-w-none md:shrink-0 md:px-6 md:py-2 md:text-base lg:mr-8"
        >
          <span className="md:hidden">{shortCta}</span>
          <span className="hidden md:inline">{nav.cta}</span>
        </SurveyCtaButton>
      </nav>
    </header>
  );
}
