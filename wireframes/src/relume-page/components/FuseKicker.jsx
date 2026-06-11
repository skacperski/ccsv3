"use client";

import clsx from "clsx";
import React from "react";

/**
 * Ventriloc section label: small Signal Orange dot + Inter caption in
 * Graphite. The kicker text comes from content. `num` is accepted for
 * call-site compatibility but not rendered — Ventriloc doesn't number
 * sections.
 */
export function FuseKicker({ num: _num, children, className }) {
  return (
    <p
      className={clsx(
        "inline-flex items-center gap-2 text-[13px] font-medium uppercase tracking-wide text-vent-graphite",
        className,
      )}
    >
      <span className="size-1.5 rounded-full bg-vent-orange" aria-hidden />
      {children}
    </p>
  );
}
