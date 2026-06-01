"use client";

import clsx from "clsx";

/**
 * @param {{ icon: import("react-icons").IconType; size?: "sm" | "lg"; className?: string }} props
 */
export function SectionIcon({ icon: Icon, size = "sm", className }) {
  if (size === "lg") {
    return (
      <div
        className={clsx(
          "flex h-[25rem] w-full items-center justify-center bg-black sm:h-[30rem] lg:h-[60vh]",
          className,
        )}
        aria-hidden
      >
        <Icon className="size-20 text-white md:size-28" strokeWidth={1.25} />
      </div>
    );
  }

  return (
    <div
      className={clsx(
        "mb-3 flex size-12 items-center justify-center bg-black md:mb-4",
        className,
      )}
      aria-hidden
    >
      <Icon className="size-6 text-white" strokeWidth={1.75} />
    </div>
  );
}
