import React, { useRef } from "react";
import { gsap, useGSAP } from "../lib/gsap";
import { LogoImg } from "./ui";

function Track({ items, ariaHidden = false }) {
  return (
    <div className="track flex w-max shrink-0 items-center gap-12 pr-12" aria-hidden={ariaHidden}>
      {items.map((logo) => (
        <LogoImg
          key={logo.src}
          src={logo.src}
          alt={ariaHidden ? "" : logo.alt}
          className="h-8 w-auto max-w-[7.5rem] object-contain opacity-80"
          loading="eager"
        />
      ))}
    </div>
  );
}

export function LogoMarquee({ logos }) {
  const ref = useRef(null);

  useGSAP(
    () => {
      gsap.to(ref.current.querySelectorAll(".track"), {
        xPercent: -100,
        ease: "none",
        duration: 90,
        repeat: -1,
      });
    },
    { scope: ref },
  );

  return (
    <section className="bg-white py-12">
      <p className="mb-9 text-center font-mono text-[13px] font-medium uppercase tracking-widest text-gray">
        {logos.caption}
      </p>
      <div ref={ref} className="flex overflow-hidden">
        <Track items={logos.items} />
        <Track items={logos.items} ariaHidden />
      </div>
    </section>
  );
}
