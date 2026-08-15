"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, CupSoda, Flame, Sparkles, Wheat, type LucideIcon } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const specs: { icon: LucideIcon; label: string; value: string }[] = [
  { icon: CupSoda, label: "Capacity", value: "90ml / 110ml" },
  { icon: Wheat, label: "Material", value: "100% Natural Grains & Plant Fibers" },
  { icon: Sparkles, label: "Flavour", value: "Basic, Chocolate, Vanilla" },
  { icon: Clock, label: "Shelf Life", value: "6 Months, 100% Biodegradable" },
  { icon: Flame, label: "Heat Resistance", value: "Up to 85°C, stays crunchy 45+ mins" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export function ProductSpecs() {
  return (
    <section className="relative overflow-hidden bg-moss px-6 py-24 md:py-32">
      <div
        aria-hidden
        className="bg-[radial-gradient(60%_100%_at_50%_0%,rgba(140,199,140,0.07),transparent)] absolute inset-x-0 top-0 h-full"
      />
      <div className="relative mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="lg:sticky lg:top-32 lg:self-start"
        >
          <motion.span
            variants={itemVariants}
            className="font-body text-primary-light text-[13px] font-semibold tracking-[0.2em] uppercase"
          >
            Product details
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="font-fraunces text-cream mt-4 text-3xl leading-[1.1] font-semibold tracking-tight md:text-5xl"
          >
            Designed to <span className="text-primary-light">disappear.</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="font-body text-white/70 mt-6 max-w-sm text-[15px] leading-relaxed font-semibold"
          >
            A spec sheet with a conscience. Every figure measured so the product can vanish without
            a trace.
          </motion.p>

          <motion.a
            variants={itemVariants}
            href="#"
            className="group font-body text-primary-light mt-8 inline-flex items-center gap-2 text-[14px] font-semibold underline-offset-4 hover:underline"
          >
            Download spec sheet
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              strokeWidth={1.75}
            />
          </motion.a>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="rounded-2xl border-white/10 bg-white/[0.06] p-8 backdrop-blur-sm md:p-10"
        >
          {specs.map(({ icon: Icon, label, value }) => (
            <motion.div
              key={label}
              variants={itemVariants}
              className="border-white/10 border-b py-6 first:pt-0 last:border-b-0 last:pb-0"
            >
              <div className="flex items-center gap-5">
                <span className="border-primary/20 bg-primary/10 text-primary-light flex h-11 w-11 shrink-0 items-center justify-center rounded-full border">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <div className="min-w-0">
                  <p className="font-body text-white/50 text-[11px] font-semibold tracking-[0.16em] uppercase">
                    {label}
                  </p>
                  <p className="font-fraunces text-cream mt-0.5 text-lg font-semibold tracking-tight md:text-xl">
                    {value}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
