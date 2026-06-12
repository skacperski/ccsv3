import React from "react";
import { useReveal } from "../hooks/useReveal";
import { LogoImg } from "./ui";

function QuoteMark({ className = "" }) {
  return (
    <svg viewBox="0 0 28 20" className={className} fill="currentColor" aria-hidden>
      <path d="M0 20v-8.2C0 5.2 3.6 1.2 10 0l1 2.8C7 4 4.8 6.2 4.6 9.4H11V20H0Zm17 0v-8.2C17 5.2 20.6 1.2 27 0l1 2.8C24 4 21.8 6.2 21.6 9.4H28V20H17Z" />
    </svg>
  );
}

function QuoteCard({ item, className = "" }) {
  return (
    <div className={`flex flex-col rounded-ui bg-light p-6 text-left ${className}`}>
      <QuoteMark className="h-5 w-auto self-start text-ink" />
      <p className="mt-4 text-[15px] leading-relaxed text-ink">{item.quote}</p>

      <div className="mt-auto pt-8">
        {item.logo && (
          <div className="mb-4 inline-flex w-fit items-center justify-center rounded-[5px] bg-white px-3 py-2">
            <LogoImg
              src={item.logo}
              alt={item.company}
              className="h-8 w-auto object-contain"
            />
          </div>
        )}
        <p className="text-sm font-medium text-ink">{item.name}</p>
        <p className="mt-0.5 text-[13px] text-gray opacity-70">
          {item.role} · {item.company}
        </p>
      </div>
    </div>
  );
}

export function Quotes({ proof }) {
  const ref = useReveal();
  const [tall, second, third] = proof.items;
  const stats = proof.stats ?? [];

  return (
    <section ref={ref} className="bg-white px-5 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center" data-reveal>
          <p className="font-mono text-[13px] font-medium uppercase tracking-widest text-gray">
            {proof.h2}
          </p>
          <p className="mt-2 text-[15px] text-soft">{proof.sub}</p>
        </div>

        <div
          className="mt-14 grid gap-4 md:grid-cols-3 md:grid-rows-[auto_auto]"
          data-reveal-group
        >
          <QuoteCard item={tall} className="md:col-start-1 md:row-span-2" />
          <QuoteCard item={second} className="md:col-start-2 md:row-start-1" />
          <QuoteCard item={third} className="md:col-start-3 md:row-start-1" />

          {stats.length > 0 && (
            <div className="flex flex-col justify-center rounded-ui bg-light p-6 md:col-span-2 md:col-start-2 md:row-start-2">
              <div className="grid grid-cols-3 gap-6">
                {stats.map((s, i) => (
                  <p key={i} className="tech-display text-3xl text-ink md:text-4xl">
                    {s.value}
                  </p>
                ))}
              </div>
              <div className="my-4 h-px bg-trans-10" />
              <div className="grid grid-cols-3 gap-6">
                {stats.map((s, i) => (
                  <p key={i} className="text-[13px] leading-snug text-gray opacity-70">
                    {s.label}
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>

        {proof.moreNote && (
          <p className="mt-8 text-center text-[13px] text-gray opacity-70" data-reveal>
            {proof.moreNote}
          </p>
        )}
      </div>
    </section>
  );
}
