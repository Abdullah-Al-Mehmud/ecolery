"use client";

import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function ProblemStatementStrip() {
  return (
    <section className="bg-moss relative overflow-hidden px-6 py-24 md:py-32">
      <div
        aria-hidden
        className="bg-primary/15 pointer-events-none absolute top-1/2 left-1/2 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[130px]"
      />

      <motion.h2
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: EASE }}
        className="font-fraunces text-cream relative mx-auto max-w-5xl text-center text-3xl leading-[1.1] font-semibold tracking-tight md:text-5xl lg:text-6xl"
      >
        Bangladesh generates <span className="text-primary-light">87,000 tonnes</span> of single-use
        plastic waste every year <span className="text-primary-light">less than 1%</span> is ever
        recycled.
      </motion.h2>
    </section>
  );
}
