import React from "react";

export function Footer({ footer }) {
  return (
    <footer
      id="relume"
      className="border-t border-border-primary px-[5%] py-8"
    >
      <div className="container flex flex-col items-center justify-between gap-4 text-sm sm:flex-row">
        <p className="font-semibold">{footer.brand}</p>
        <div className="flex items-center gap-6">
          <a href="#" className="underline">
            {footer.privacy}
          </a>
          <p>{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
