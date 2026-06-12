import React, { useRef, useState } from "react";
import { gsap } from "../lib/gsap";
import { Kicker } from "./ui";
import { useReveal } from "../hooks/useReveal";

function Item({ item, open, onToggle }) {
  const bodyRef = useRef(null);

  const toggle = () => {
    const el = bodyRef.current;
    if (open) {
      gsap.to(el, { height: 0, autoAlpha: 0, duration: 0.4, ease: "power2.inOut" });
    } else {
      gsap.set(el, { height: "auto", autoAlpha: 1 });
      gsap.from(el, { height: 0, autoAlpha: 0, duration: 0.45, ease: "power2.out" });
    }
    onToggle();
  };

  return (
    <div className="border-b border-light bg-white px-5 last:border-b-0">
      <button
        type="button"
        onClick={toggle}
        aria-expanded={open}
        className="flex w-full cursor-pointer items-center justify-between gap-6 py-5 text-left"
      >
        <span className="text-lg font-medium tracking-tight">{item.q}</span>
        <span
          className={`flex size-7 shrink-0 items-center justify-center text-gray transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
          aria-hidden
        >
          <svg viewBox="0 0 16 16" fill="none" className="size-3.5">
            <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <div ref={bodyRef} className="h-0 overflow-hidden opacity-0" style={{ visibility: "hidden" }}>
        <p className="pb-6 leading-relaxed text-gray">{item.a}</p>
      </div>
    </div>
  );
}

export function Faq({ faq }) {
  const ref = useReveal();
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" ref={ref} className="scroll-mt-20 bg-white px-5 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center" data-reveal>
          <Kicker className="justify-center">{faq.kicker}</Kicker>
          <h2 className="tech-display text-4xl leading-[1.06] md:text-[48px]">{faq.h2}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-gray">{faq.sub}</p>
        </div>
        <div className="mx-auto mt-12 max-w-2xl" data-reveal-group>
          {faq.items.map((item, i) => (
            <Item
              key={item.q}
              item={item}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
