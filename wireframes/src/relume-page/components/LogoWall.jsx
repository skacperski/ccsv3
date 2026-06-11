"use client";

import React from "react";
import { FuseKicker } from "./FuseKicker";

/**
 * Sector-grouped client logo wall ("Zaufali nam" board from Figma).
 * Assets exported from Figma to /public/logos/. Tiles mirror the board:
 * light tiles on ink, mono uppercase sector headers.
 */
const SECTORS = [
  {
    title: "Finanse i bankowość",
    logos: [
      { src: "/logos/ing.png", alt: "ING" },
      { src: "/logos/gpw.png", alt: "GPW" },
      { src: "/logos/paypo.png", alt: "PayPo" },
      { src: "/logos/velo-bank.png", alt: "VeloBank" },
      { src: "/logos/hesabe.png", alt: "Hesabe" },
      { src: "/logos/bank-millennium.png", alt: "Bank Millennium" },
      { src: "/logos/bs-leczna.png", alt: "Bank Spółdzielczy w Łęcznej" },
    ],
  },
  {
    title: "IT i technologia",
    logos: [
      { src: "/logos/hrk.png", alt: "HRK" },
      { src: "/logos/goelett.png", alt: "Goelett" },
      { src: "/logos/atman.png", alt: "Atman" },
      { src: "/logos/symfonia.png", alt: "Symfonia" },
      { src: "/logos/idosell.png", alt: "IdoSell" },
    ],
  },
  {
    title: "Handel i konsumpcja",
    logos: [
      { src: "/logos/selgros.png", alt: "Selgros" },
      { src: "/logos/zabka.svg", alt: "Żabka" },
      { src: "/logos/cedrob.png", alt: "Cedrob" },
      { src: "/logos/kuchnia-vikinga.png", alt: "Kuchnia Vikinga" },
    ],
  },
  {
    title: "Przemysł, produkcja i logistyka",
    logos: [
      { src: "/logos/gatx.png", alt: "GATX" },
      { src: "/logos/lg.svg", alt: "LG" },
      { src: "/logos/werner-kenkel.png", alt: "Werner Kenkel" },
      { src: "/logos/seka.png", alt: "SEKA" },
      { src: "/logos/ventor.png", alt: "Ventor" },
      { src: "/logos/rpower.png", alt: "R.Power" },
      { src: "/logos/quanta.png", alt: "Quanta" },
      { src: "/logos/nomad-electric.png", alt: "Nomad Electric" },
    ],
  },
  {
    title: "Instytucje publiczne i edukacyjne",
    logos: [
      { src: "/logos/cke.png", alt: "Centralna Komisja Egzaminacyjna" },
      { src: "/logos/uniwersytet-swps.png", alt: "Uniwersytet SWPS" },
      { src: "/logos/mpgk-wolin.png", alt: "MPGK Wolin" },
      { src: "/logos/ministerstwo-rozwoju.svg", alt: "Ministerstwo Rozwoju i Technologii" },
      { src: "/logos/up-lublin.png", alt: "Uniwersytet Przyrodniczy w Lublinie" },
    ],
  },
  {
    title: "Automotive",
    logos: [
      { src: "/logos/mhc-mobility.png", alt: "MHC Mobility" },
      { src: "/logos/duda-cars.png", alt: "Duda-Cars" },
    ],
  },
];

function LogoTile({ src, alt }) {
  return (
    <div className="flex h-20 items-center justify-center rounded-lg bg-vent-paper px-6">
      <img
        src={src}
        alt={alt}
        className="max-h-12 w-auto max-w-[78%] object-contain opacity-75 grayscale"
        loading="lazy"
      />
    </div>
  );
}

export function LogoWall({ h2 }) {
  return (
    <section id="zaufali" className="bg-vent-mist px-[5%] py-16 md:py-24">
      <div className="container">
        <div className="mb-10 md:mb-14">
          <FuseKicker className="mb-3">Klienci</FuseKicker>
          <h2 className="text-4xl text-vent-carbon md:text-6xl">{h2}</h2>
        </div>
        <div className="grid grid-cols-1 items-start gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 xl:gap-4">
          {SECTORS.map((sector) => (
            <div key={sector.title} className="flex flex-col gap-1.5">
              <div className="mb-1 flex min-h-[3.25rem] items-center justify-center rounded-[20px] border border-vent-slate/40 px-3 py-2">
                <p className="text-center text-xs font-medium uppercase tracking-wide text-vent-graphite">
                  {sector.title}
                </p>
              </div>
              {sector.logos.map((logo) => (
                <LogoTile key={logo.src} {...logo} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
