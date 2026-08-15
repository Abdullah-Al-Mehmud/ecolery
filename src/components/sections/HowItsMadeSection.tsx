"use client";

import { motion } from "framer-motion";
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
    title: "Grain Sourcing",
    copy: "Every cup starts with renewable, plant-derived grain, farm-friendly and kind to the soil from the very first seed.",
  },
  {
    step: "02",
    icon: Stamp,
    title: "Molding",
    copy: "Heat and pressure shape the grain into cups and cutlery. no plastic, just precision.",
  },
  {
    step: "03",
    icon: Sprout,
    title: "Biodegradable Finish",
    copy: "A fully compostable finish returns it to the earth in just 180 days, leaving zero waste behind.",
  },
];

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

const containerVariants = {
  visible: { transition: { staggerChildren: 0.15 } },
};

const stepVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE_OUT_EXPO } },
};

export function HowItsMadeSection() {
  return (
    <section id="process" className="bg-cream-2 scroll-mt-24 overflow-hidden px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <span className="font-body text-primary text-[13px] font-semibold tracking-[0.2em] uppercase">
            Our process
          </span>
          <h2 className="font-display text-ink mt-4 text-3xl font-bold tracking-tight md:text-5xl">
            How It&apos;s Made
          </h2>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="mt-14 grid gap-12 md:grid-cols-3 md:gap-0"
        >
          {steps.map(({ step, icon: Icon, title, copy }) => (
            <motion.div
              key={step}
              variants={stepVariants}
              className="md:border-ink/15 relative md:border-l md:pl-8 md:first:border-l-0 md:first:pl-0"
            >
              <span
                aria-hidden
                className="font-fraunces block text-6xl leading-[0.9] tracking-tight text-transparent [-webkit-text-stroke:1.5px_var(--color-primary)] md:text-7xl"
              >
                {step}
              </span>

              <div className="mt-5 flex items-center gap-3">
                <div className="bg-primary/5 border-primary/20 flex h-12 w-12 items-center justify-center rounded-full border">
                  <Icon className="text-primary h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="font-display text-ink text-2xl font-bold tracking-tight">{title}</h3>
              </div>

              <p className="font-body text-ink mt-4 max-w-xs text-[15px] leading-relaxed font-semibold">
                {copy}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
