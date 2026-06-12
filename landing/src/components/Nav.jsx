import React from "react";

export function Nav({ nav }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-5 pt-6">
      <div className="mx-auto max-w-6xl">
        <a href="#" aria-label={nav.brand} className="inline-flex">
          <img src="/ccs-logo-white.svg" alt={nav.brand} className="h-4 w-auto" />
        </a>
      </div>
    </header>
  );
}
