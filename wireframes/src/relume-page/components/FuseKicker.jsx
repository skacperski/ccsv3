"use client";

import clsx from "clsx";
import React from "react";

/**
 * Fuse-style section label: `// 03 — PROCES`. The kicker text comes from
 * content; `num` is the fixed section index on the page.
 */
export function FuseKicker({ num, children, className }) {
  return (
    <p
      className={clsx(
        "font-mono text-xs font-medium uppercase tracking-[0.08em]",
        className,
      )}
    >
      {"//"} {num ? `${num} — ` : ""}
      {children}
    </p>
  );
}
