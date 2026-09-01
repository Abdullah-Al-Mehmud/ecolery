"use client";

import { motion } from "framer-motion";
import { Leaf, Truck } from "lucide-react";
import Image from "next/image";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

const quickSpecs = ["100% Compostable", "180-Day Breakdown", "Up to 85°C"];

export function ProductHero() {
  return (
    <section className="bg-cream relative flex min-h-screen items-center overflow-hidden px-6 pt-32 pb-24 md:pt-40 md:pb-28">
      <div
        aria-hidden
        className="bg-primary/10 absolute top-[30%] left-[10%] h-[420px] w-[420px] rounded-full blur-[110px]"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-16 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: EASE, delay: 0.2 }}
          className="relative"
        >
          <div
            aria-hidden
            className="border-primary/20 absolute inset-0 m-auto aspect-square w-[105%] rounded-full border"
          />

          <div className="bg-cream-2 relative aspect-square w-full overflow-hidden rounded-[2rem]">
            <Image
              src="/cup2.png"
              alt="Ecolery edible cup"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-contain p-10 md:p-14"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.7 }}
            className="bg-primary text-cream shadow-primary/30 absolute -top-4 right-6 flex h-16 w-16 items-center justify-center rounded-full shadow-lg md:-top-6 md:right-10"
          >
            <Leaf className="h-7 w-7" strokeWidth={1.75} />
          </motion.div>
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={containerVariants}>
          <motion.span
            variants={itemVariants}
            className="font-body text-primary text-[13px] font-semibold tracking-[0.2em] uppercase"
          >
            Our flagship product
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="font-fraunces text-ink mt-6 text-4xl leading-[1.05] font-semibold tracking-tight sm:text-5xl lg:text-6xl"
          >
            Edible Cup
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="font-body text-ink/80 mt-6 max-w-md text-[15px] leading-relaxed font-semibold"
          >
            A sturdy, compostable cup you can actually eat. Cork-pressed for insulation, edible for
            delight, and gone from the planet in 180 days.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-8 flex flex-wrap items-baseline gap-4">
            <p className="font-display text-primary-dark text-3xl font-bold md:text-4xl">
              From $0.06
            </p>
            <p className="font-body text-ink/60 text-[13px] font-semibold">per cup · bulk pricing</p>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-6 flex items-center gap-2">
            <Truck className="text-primary h-4 w-4" strokeWidth={1.75} />
            <p className="font-body text-ink/60 text-[13px] font-semibold">
              Delivered in 3–5 business days, nationwide
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-10 flex flex-wrap items-center gap-6">
            <a
              href="#quote"
              className="bg-primary text-cream hover:bg-primary-dark rounded-full px-8 py-3.5 text-[14px] font-semibold transition-colors"
            >
              Get a Quote
            </a>

            <div className="flex flex-wrap gap-2">
              {quickSpecs.map((spec) => (
                <span
                  key={spec}
                  className="border-black/10 bg-white rounded-full px-4 py-2 text-[12px] font-semibold text-ink/70"
                >
                  {spec}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
