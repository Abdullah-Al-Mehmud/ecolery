"use client";

import { Check, X } from "lucide-react";
import Image from "next/image";

const plasticReasons = [
  "Takes 400+ years to decompose",
  "Leaches microplastics into food and drinks",
  "Ends up in landfills and oceans",
  "Made from non-renewable petroleum",
];

const ecoleryReasons = [
  "Fully compostable in 180 days",
  "100% edible, food-safe ingredients",
  "Zero waste left behind after use",
  "No petroleum, no plastic, ever",
];

export function ComparisonSection() {
  return (
    <section
      id="products"
      className="relative min-h-screen w-full scroll-mt-24 overflow-hidden"
    >
      {/* ---------- BACKGROUND SPLIT ---------- */}
      <div className="absolute inset-0 grid md:grid-cols-2">
        <div style={{ background: "linear-gradient(180deg, #EDF0F1 0%, #DADFE1 100%)" }} />
        <div className="bg-primary" />
      </div>

      {/* ---------- GHOST TEXT ---------- */}
      <span
        aria-hidden
        className="font-display pointer-events-none absolute top-10 left-6 text-[6rem] leading-none font-bold whitespace-nowrap text-black/[0.04] select-none md:text-[9rem]"
      >
        PLASTIC
      </span>
      <span
        aria-hidden
        className="font-display pointer-events-none absolute top-10 right-6 text-[6rem] leading-none font-bold whitespace-nowrap text-white/[0.06] select-none md:text-[9rem]"
      >
        ECOLERY
      </span>

      {/* ---------- CONTENT GRID ---------- */}
      <div className="relative z-10 grid min-h-screen md:grid-cols-2">
        {/* LEFT TEXT */}
        <div className="flex flex-col justify-center px-8 py-16 md:px-14">
          <span className="font-body text-[13px] font-semibold tracking-[0.2em] text-black/50 uppercase">
            The old way
          </span>
          <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-black/80 md:text-4xl">
            Why not plastic.
          </h2>
          <ul className="mt-8 space-y-4">
            {plasticReasons.map((reason) => (
              <li key={reason} className="flex items-start gap-3">
                <X className="mt-0.5 h-4 w-4 shrink-0 text-black/40" strokeWidth={2.5} />
                <span className="font-body text-[14px] font-semibold text-black/60">{reason}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT TEXT */}
        <div className="flex flex-col justify-center px-8 py-16 md:items-end md:px-14 md:text-right">
          <span className="font-body text-[13px] font-semibold tracking-[0.2em] text-white/60 uppercase">
            The Ecolery way
          </span>
          <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
            Why Ecolery.
          </h2>
          <ul className="mt-8 space-y-4">
            {ecoleryReasons.map((reason) => (
              <li key={reason} className="flex items-start gap-3 md:flex-row-reverse">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-white" strokeWidth={2.5} />
                <span className="font-body text-[14px] font-semibold text-white/85">{reason}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ---------- MERGED CUP IMAGE, SEAM LOCKED TO CENTER ---------- */}
      <div className="pointer-events-none absolute bottom-10 left-1/2 z-20 h-[60%] w-[95%] max-w-6xl -translate-x-1/2 md:bottom-16 md:h-[78%] md:w-[80%]">
        <Image
          src="/plastic-ecolery.png"
          alt="Plastic cup versus Ecolery edible cup"
          fill
          className="object-contain object-bottom"
        />
      </div>

      {/* ---------- CENTER SEAM LINE (optional, purely decorative) ---------- */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 bottom-0 left-1/2 z-10 hidden w-px -translate-x-1/2 bg-white/30 md:block"
      />
    </section>
  );
}
