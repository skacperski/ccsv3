"use client";

import React from "react";
import { SurveyCtaButton } from "./SurveyCtaButton";

export function Navbar3({ nav }) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border-primary bg-white/95 backdrop-blur-sm">
      <nav className="flex h-16 w-full items-center md:h-18">
        <a
          href="#"
          className="shrink-0 pl-4 text-xl font-bold text-black md:pl-6 lg:pl-8"
        >
          {nav.brand}
        </a>
        <SurveyCtaButton
          title={nav.cta}
          location="nav"
          size="sm"
          className="ml-auto mr-4 shrink-0 px-4 py-1 md:mr-6 md:px-6 md:py-2 lg:mr-8"
        >
          {nav.cta}
        </SurveyCtaButton>
      </nav>
    </header>
  );
}
