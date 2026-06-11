"use client";

import React, { useRef, useState } from "react";
import { LuPlus } from "react-icons/lu";
import { gsap } from "../gsap";
import { Serif, Kicker } from "../lib";

function FaqItem({ item, open, onToggle }) {
  const bodyRef = useRef(null);

  const toggle = () => {
    const el = bodyRef.current;
    if (!el) return onToggle();
    if (open) {
      gsap.to(el, { height: 0, autoAlpha: 0, duration: 0.3, ease: "power2.inOut", onComplete: onToggle });
    } else {
      onToggle();
      requestAnimationFrame(() => {
        gsap.fromTo(
          el,
          { height: 0, autoAlpha: 0 },
          { height: "auto", autoAlpha: 1, duration: 0.35, ease: "power2.out" },
        );
      });
    }
  };

  return (
    <div className="border-b border-trans-10">
      <button
        type="button"
        onClick={toggle}
        aria-expanded={open}
        className="flex w-full cursor-pointer items-center justify-between gap-4 py-5 text-left"
      >
        <span className="text-[16px] font-medium text-steep-text md:text-[17px]">{item.q}</span>
        <LuPlus
          className={`size-5 flex-none text-steep-gray transition-transform duration-200 ${open ? "rotate-45" : ""}`}
        />
      </button>
      {open && (
        <div ref={bodyRef} className="overflow-hidden">
          <p className="pb-6 text-[15px] leading-relaxed text-steep-gray">{item.a}</p>
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
    <section id="faq" className="px-5 py-20 md:py-28">
      <div className="mx-auto max-w-[720px]">
        <div data-reveal className="mb-12 text-center md:mb-16">
          <Kicker className="mb-4">{faq.kicker}</Kicker>
          <Serif
            text={faq.h2}
            italicWords={1}
            className="mb-4 text-[36px] leading-[1.05] text-steep-text md:text-[48px]"
          />
          <p className="text-[17px] text-steep-gray">{faq.sub}</p>
        </div>
        <div data-reveal>
          {faq.items.map((item, i) => (
            <FaqItem key={i} item={item} open={openSet.has(i)} onToggle={() => toggle(i)} />
          ))}
        </div>
      </div>
    </section>
  );
}
