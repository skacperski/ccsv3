"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

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
        <Button
          title={nav.cta}
          size="sm"
          className="ml-auto shrink-0 px-4 py-1 md:px-6 md:py-2 mr-4 md:mr-6 lg:mr-8"
          onClick={() => {
            document.getElementById("ankieta")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          {nav.cta}
        </Button>
      </nav>
    </header>
  );
}
