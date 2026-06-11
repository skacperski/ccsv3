"use client";

import React, { useState } from "react";
import { RxChevronDown } from "react-icons/rx";
import { Eyebrow, SerifHeading } from "../ui";

function FaqItem({ item, open, onToggle }) {
  return (
    <div className="border-b border-trans-10 last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full cursor-pointer items-center justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-medium text-steep-text md:text-lg">{item.q}</span>
        <RxChevronDown
          className={`size-5 flex-none text-steep-gray transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && <p className="pb-6 leading-relaxed text-steep-gray">{item.a}</p>}
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
    <section className="px-5 py-16 md:py-24">
      <div className="mx-auto max-w-2xl">
        <div className="mb-10 text-center md:mb-14">
          <Eyebrow className="mb-3">{faq.kicker}</Eyebrow>
          <SerifHeading
            text={faq.h2}
            className="mb-4 text-4xl leading-[1.08] text-steep-text md:text-5xl"
          />
          <p className="text-steep-gray md:text-lg">{faq.sub}</p>
        </div>
        <div>
          {faq.items.map((item, i) => (
            <FaqItem key={i} item={item} open={openSet.has(i)} onToggle={() => toggle(i)} />
          ))}
        </div>
      </div>
    </section>
  );
}
