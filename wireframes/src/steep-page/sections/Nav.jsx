"use client";

import React from "react";
import { SurveyCta } from "../ui";

export function Nav({ nav }) {
  const shortCta = nav.cta.split(",")[0].trim();

  return (
    <header className="sticky top-0 z-50 border-b border-trans-10 bg-white/85 backdrop-blur-md">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-3 px-5 md:h-[4.5rem]">
        <a href="#" className="shrink-0 text-lg font-semibold tracking-tight text-steep-text">
          {nav.brand}
        </a>
        <SurveyCta location="nav" className="min-w-0 max-w-[62vw] truncate md:max-w-none">
          <span className="md:hidden">{shortCta}</span>
          <span className="hidden md:inline">{nav.cta}</span>
        </SurveyCta>
      </nav>
    </header>
  );
}
