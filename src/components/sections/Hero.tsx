"use client";

import Image from "next/image";

export function Hero() {
  return (
    <section className="bg-cream relative flex min-h-screen flex-col overflow-hidden">
      <div
        aria-hidden
        className="bg-primary/20 pointer-events-none absolute top-[38%] left-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[110px]"
      />

      <div className="relative z-40 flex flex-col items-center px-6 pt-36 text-center">
        <h1 className="font-display text-[2.75rem] leading-[1.05] font-bold tracking-tight text-gray-900 sm:text-6xl md:text-7xl">
          Eat, Re-eat <span className="text-primary-dark">and Forget.</span>
        </h1>

        <p className="mt-6 max-w-[560px] text-[15px] leading-relaxed font-semibold text-gray-600 sm:text-base">
          Sustainability you can taste. Ecolery designs innovative edible and eco-friendly products
          that replace single-use plastics while creating lasting environmental and social impact.
        </p>
      </div>

      <div className="relative flex-1">
        {/* <span
          aria-hidden
          className="text-ink/[0.04] pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 text-[14rem] leading-none font-bold whitespace-nowrap normal-case select-none md:text-[20rem]"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
          }}
        >
          ecolery
        </span> */}
        <div className="absolute -bottom-36 left-1/2 -translate-x-1/2">
          <Image
            src="/cup2.png"
            alt="Ecolery cork-pressed compostable cup"
            width={900}
            height={1000}
            className="block h-auto w-[680px] max-w-none object-contain md:w-[850px]"
            priority
          />
        </div>
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[50%] bg-gradient-to-t from-white/25 via-white/10 to-transparent"
      />
    </section>
  );
}
