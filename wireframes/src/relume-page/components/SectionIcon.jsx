"use client";

import clsx from "clsx";

/**
 * @param {{ icon: import("react-icons").IconType; inverted?: boolean; size?: "sm" | "lg" }} props
 */
export function SectionIcon({ icon: Icon, inverted = false, size = "sm" }) {
  if (size === "lg") {
    return (
      <div
        className={clsx(
          "flex h-[25rem] w-full items-center justify-center border sm:h-[30rem] lg:h-[60vh]",
          inverted
            ? "border-white/20 bg-white/5"
            : "border-border-primary bg-neutral-50",
        )}
        aria-hidden
      >
        <Icon
          className={clsx(
            "size-20 md:size-28",
            inverted ? "text-white" : "text-black",
          )}
          strokeWidth={1.25}
        />
      </div>
    );
  }

  return (
    <div
      className={clsx(
        "mb-3 flex size-12 items-center justify-center border md:mb-4",
        inverted ? "border-white/30" : "border-border-primary",
      )}
      aria-hidden
    >
      <Icon
        className={clsx("size-6", inverted ? "text-white" : "text-black")}
        strokeWidth={1.75}
      />
    </div>
  );
}
