"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Navbar3({ nav }) {
  return (
    <header className="sticky top-0 z-50 border-b border-border-primary bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-[5%] md:h-18">
        <a href="#" className="text-xl font-bold text-black">
          {nav.brand}
        </a>
        <Button
          title={nav.cta}
          size="sm"
          className="px-4 py-1 md:px-6 md:py-2"
          onClick={() => {
            document.getElementById("ankieta")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          {nav.cta}
        </Button>
      </div>
    </header>
  );
}
