import React from "react";

export function Footer({ footer }) {
  return (
    <footer className="border-t border-white/20 py-8">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
        <img src="/ccs-logo-white.svg" alt={footer.brand} className="h-4 w-auto" />
        <div className="flex items-center gap-6 text-sm">
          <a href="#" className="text-white/70 transition-colors hover:text-white">
            {footer.privacy}
          </a>
          <span className="text-white/50">{footer.copyright}</span>
        </div>
      </div>
    </footer>
  );
}
