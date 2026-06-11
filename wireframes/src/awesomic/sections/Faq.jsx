"use client";

import React, { useRef, useState } from "react";
import { LuPlus } from "react-icons/lu";
import { gsap } from "../gsap";
import { SectionHead } from "../lib";

/* awesomic FAQ: each item is its own rounded light card. */

function FaqItem({ item, open, onToggle }) {
  const bodyRef = useRef(null);

  const toggle = () => {
    const el = bodyRef.current;
    if (!el) return onToggle();
    if (open) {
      gsap.to(el, { height: 0, autoAlpha: 0, duration: 0.28, ease: "power2.inOut", onComplete: onToggle });
    } else {
      onToggle();
      requestAnimationFrame(() => {
        gsap.fromTo(
          el,
          { height: 0, autoAlpha: 0 },
          { height: "auto", autoAlpha: 1, duration: 0.32, ease: "power2.out" },
        );
      });
    }
  };

  return (
    <div className="rounded-[20px] border border-awe-150 bg-awe-50">
      <button
        type="button"
        onClick={toggle}
        aria-expanded={open}
        className="flex w-full cursor-pointer items-center justify-between gap-4 p-6 text-left"
      >
        <span className="text-[16px] font-bold tracking-tight text-awe-950 md:text-[17px]">
          {item.q}
        </span>
        <span
          className={`flex size-8 flex-none items-center justify-center rounded-full bg-white transition-transform duration-200 ${
            open ? "rotate-45" : ""
          }`}
        >
          <LuPlus className="size-4 text-awe-950" />
        </span>
      </button>
      {open && (
        <div ref={bodyRef} className="overflow-hidden">
          <p className="px-6 pb-6 text-[15px] leading-relaxed text-awe-600">{item.a}</p>
        </div>
      )}
    </div>
  );
}

export function Faq({ faq }) {
  const [openSet, setOpenSet] = useState(() => new Set());

  const toggle = (i) =>
    setOpenSet((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });

  return (
    <section id="faq" className="px-5 py-16 md:py-24">
      <div className="mx-auto max-w-[840px]">
        <SectionHead data-reveal kicker={faq.kicker} h2={faq.h2} sub={faq.sub} className="mb-12 md:mb-14" />
        <div data-reveal-group className="flex flex-col gap-3">
          {faq.items.map((item, i) => (
            <FaqItem key={i} item={item} open={openSet.has(i)} onToggle={() => toggle(i)} />
          ))}
        </div>
      </div>
    </section>
  );
}
