import React, { useState } from "react";
import { openCalendly } from "../lib/calendly";

export function LogoImg({ src, alt, className = "", loading = "lazy" }) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={loading}
      decoding="async"
      onError={() => setVisible(false)}
    />
  );
}

/** variant: red (primary) | dark | ghost | ghost-light | light */
export function Btn({ variant = "red", className = "", children, ...props }) {
  const styles = {
    red: "bg-red text-white hover:bg-red-deep",
    dark: "bg-night text-white hover:bg-black",
    ghost: "bg-light text-ink hover:bg-trans-10",
    "ghost-light": "bg-white/15 text-white hover:bg-white/25",
    light: "bg-white text-ink hover:bg-light",
  };
  return (
    <button
      type="button"
      className={`inline-flex cursor-pointer items-center justify-center rounded-[2px] px-5 py-2.5 text-[15px] font-medium tracking-tight transition-colors duration-150 ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export function SurveyCta({ variant = "red", className = "", children }) {
  return (
    <Btn
      variant={variant}
      className={className}
      onClick={() => document.getElementById("ankieta")?.scrollIntoView({ behavior: "smooth" })}
    >
      {children}
    </Btn>
  );
}

export function CalendarCta({ variant = "ghost", className = "", children }) {
  if (variant === "link") {
    return (
      <button
        type="button"
        onClick={() => openCalendly()}
        className={`cursor-pointer text-gray underline decoration-trans-20 underline-offset-4 transition-colors hover:text-ink ${className}`}
      >
        {children}
      </button>
    );
  }
  return (
    <Btn variant={variant} className={className} onClick={() => openCalendly()}>
      {children}
    </Btn>
  );
}

export function Kicker({ children, className = "" }) {
  return (
    <p className={`mb-4 flex items-center gap-2 font-mono text-[13px] font-medium uppercase tracking-widest text-gray ${className}`}>
      <span className="size-1.5 shrink-0 rounded-[2px] bg-red" aria-hidden />
      {children}
    </p>
  );
}

export function Bold({ text }) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-semibold text-ink">
        {part}
      </strong>
    ) : (
      <React.Fragment key={i}>{part}</React.Fragment>
    ),
  );
}

export function Check({ className = "text-ink" }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className={`mt-1 size-4 shrink-0 ${className}`}
      aria-hidden
    >
      <path
        d="M4 10.5l4 4 8-9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  );
}
