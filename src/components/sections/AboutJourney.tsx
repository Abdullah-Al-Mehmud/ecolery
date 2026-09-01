"use client";

import { motion } from "framer-motion";
import { Sprout, TrendingUp, Trophy, Zap, type LucideIcon } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const milestones: {
  year: string;
  step: string;
  icon: LucideIcon;
  title: string;
  detail: string;
}[] = [
  {
    year: "2023",
    step: "01",
    icon: Sprout,
    title: "Ideation and prototype",
    detail:
      "Ecolery began in the ideation and prototype stage, transforming an early concept for edible alternatives into a validated vision for a zero-waste future.",
  },
  {
    year: "2024",
    step: "02",
    icon: TrendingUp,
    title: "First steps as a business",
    detail:
      "Ecolery took its first steps as a business, establishing operations and moving into in-house production to turn its sustainable goals into reality.",
  },
  {
    year: "2025",
    step: "03",
    icon: Trophy,
    title: "Expanded impact",
    detail:
      "Ecolery expanded its impact beyond products, creating opportunities for women artisans and strengthening its role within Bangladesh’s growing sustainability ecosystem.",
  },
  {
    year: "2026",
    step: "04",
    icon: Zap,
    title: "New phase of growth",
    detail:
      "Ecolery entered a new phase of growth, expanding its international exposure, strengthening its operations, and bringing sustainability into new communities.",
  },
];

const leftVariants = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EASE } },
};

const rightVariants = {
  hidden: { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EASE } },
};

const headerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export function AboutJourney() {
  return (
    <section id="journey" className="bg-cream scroll-mt-24 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
          className="grid gap-8 md:grid-cols-2 md:items-end"
        >
          <div>
            <span className="font-body text-primary text-[13px] font-semibold tracking-[0.2em] uppercase">
              Our story
            </span>
            <h2 className="font-fraunces text-ink mt-4 text-3xl leading-[1.1] font-semibold tracking-tight md:text-5xl">
              Our <span className="text-primary-dark">Journey</span>
            </h2>
          </div>

          <p className="font-body text-ink/80 text-[15px] leading-relaxed font-semibold md:max-w-md md:justify-self-end">
            From a hackathon pitch to an award-winning movement. Three years, one clear direction.
          </p>
        </motion.div>

        <div className="relative mt-16 space-y-12 md:mt-20 md:space-y-20">
          <motion.div
            aria-hidden
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.4, ease: EASE }}
            className="bg-ink/15 absolute top-0 bottom-0 left-5 w-px origin-top md:left-1/2 md:-ml-px"
          />

          {milestones.map((milestone, i) => {
            const isLeft = i % 2 === 0;
            const { icon: Icon, year, step, title, detail } = milestone;

            return (
              <div
                key={year}
                className={`relative md:flex md:items-start ${isLeft ? "" : "md:justify-end"}`}
              >
                <span
                  aria-hidden
                  className="ring-primary/20 bg-primary absolute top-7 left-5 z-10 block h-3.5 w-3.5 -translate-x-1/2 rounded-full ring-4 md:left-1/2"
                />

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.4 }}
                  variants={isLeft ? leftVariants : rightVariants}
                  className="pl-12 md:w-[calc(50%-4rem)] md:pl-0"
                >
                  <div className="relative overflow-hidden rounded-2xl bg-white p-6 md:p-8">
                    <span
                      aria-hidden
                      className="font-fraunces text-primary/[0.07] absolute right-4 text-7xl font-bold select-none"
                    >
                      {step}
                    </span>

                    <Icon className="text-primary h-6 w-6" strokeWidth={1.75} />
                    <p className="font-display text-primary mt-5 text-[12px] font-semibold tracking-[0.2em] uppercase">
                      {year}
                    </p>
                    <h3 className="font-fraunces text-ink mt-1 text-xl font-semibold tracking-tight md:text-2xl">
                      {title}
                    </h3>
                    <p className="font-body text-ink/70 mt-2 text-[15px] leading-relaxed font-semibold">
                      {detail}
                    </p>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
