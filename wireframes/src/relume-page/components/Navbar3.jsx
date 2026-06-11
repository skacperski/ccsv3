"use client";

import React from "react";
import { SurveyCtaButton } from "./SurveyCtaButton";
import { pillPrimaryButtonClassName } from "../utils/vent";

export function Navbar3({ nav }) {
  // Krótszy wariant CTA do paska nawigacji na mobile (część przed przecinkiem),
  // żeby długi tekst nie nachodził na logo. Pełny tekst od md w górę.
  const shortCta = nav.cta.split(",")[0].trim();

  return (
    <header className="w-full bg-vent-mist px-4 pt-4 md:pt-5">
      {/* Floating nav capsule — Ventriloc signature: single pill, unsticky */}
      <nav className="mx-auto flex w-full max-w-[1200px] items-center gap-3 rounded-[200px] border border-vent-slate/40 bg-vent-paper py-2 pl-5 pr-2 md:py-2.5 md:pl-6">
        <a href="#" className="shrink-0 font-display text-lg text-vent-carbon md:text-xl">
          {nav.brand}
        </a>
        <SurveyCtaButton
          title={nav.cta}
          location="nav"
          size="sm"
          className={`${pillPrimaryButtonClassName} ml-auto min-w-0 max-w-[60vw] shrink truncate whitespace-nowrap px-4 py-1.5 !text-sm md:max-w-none md:shrink-0 md:px-5 md:py-2`}
        >
          <span className="md:hidden">{shortCta}</span>
          <span className="hidden md:inline">{nav.cta}</span>
        </SurveyCtaButton>
      </nav>
    </header>
  );
}
