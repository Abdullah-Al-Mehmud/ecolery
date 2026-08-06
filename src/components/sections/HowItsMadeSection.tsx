"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Sprout, Stamp, Wheat, type LucideIcon } from "lucide-react";

interface Step {
  step: string;
  icon: LucideIcon;
  title: string;
  copy: string;
}

const steps: Step[] = [
  {
    step: "01",
    icon: Wheat,
    title: "Grain",
    copy: "Plant-derived and fully edible, our story starts with renewable grain — farm-friendly and kind to the soil from the very first seed.",
  },
  {
    step: "02",
    icon: Stamp,
    title: "Mold",
    copy: "Heat and pressure press the grain into cups and cutlery — no petroleum, no plastic, just formed with precision.",
  },
  {
    step: "03",
    icon: Sprout,
    title: "Biodegradable",
    copy: "Sip, bite, or sink it into soil. Fully compostable in 180 days, it returns to nature and leaves zero waste behind.",
  },
];

export function HowItsMadeSection() {
  const sectionRef = useScrollAnimation<HTMLElement>();

  return (
    <section
      id="process"
      ref={sectionRef}
      className="bg-cream scroll-mt-24 overflow-hidden px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <span className="font-body text-primary text-[13px] font-semibold tracking-[0.2em] uppercase">
            Our process
          </span>
          <h2 className="font-display text-ink mt-4 text-3xl font-bold tracking-tight md:text-5xl">
            From humble grain to a cup that{" "}
            <span className="text-primary-dark">disappears.</span>
          </h2>
          <p className="font-body mt-6 text-[15px] leading-relaxed font-semibold text-gray-600">
            Every Ecolery product follows the same three-step journey — grown from the earth,
            shaped without plastic, and built to return to it.
          </p>
        </div>

        <div className="relative mt-14">
          <div
            aria-hidden
            className="border-black/10 absolute inset-x-0 top-6 hidden border-t border-dashed md:block"
          />
          <div className="relative grid gap-12 md:grid-cols-3 md:gap-8">
            {steps.map(({ step, icon: Icon, title, copy }) => (
              <div key={step} className="relative max-w-xs">
                <div className="bg-primary/5 border-primary/20 flex h-12 w-12 items-center justify-center rounded-full border">
                  <Icon className="text-primary h-5 w-5" strokeWidth={1.75} />
                </div>
                <p className="font-display text-primary-dark mt-6 text-sm font-bold tracking-[0.2em] uppercase">
                  Step {step}
                </p>
                <h3 className="font-display text-ink mt-2 text-2xl font-bold">{title}</h3>
                <p className="font-body mt-3 text-[15px] leading-relaxed font-semibold text-gray-600">
                  {copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}