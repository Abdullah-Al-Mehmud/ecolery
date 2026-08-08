"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export function AboutHero() {
  const [error, setError] = useState(false);

  return (
    <section className="bg-cream relative flex min-h-screen items-center overflow-hidden px-6 pt-32 pb-24 md:pt-40 md:pb-28">
      <div
        aria-hidden
        className="bg-primary/20 absolute top-[30%] left-[12%] h-[420px] w-[420px] rounded-full blur-[110px]"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-16 md:grid-cols-2">
        <motion.div initial="hidden" animate="visible" variants={containerVariants}>
          <motion.span
            variants={itemVariants}
            className="font-body text-primary text-[13px] font-semibold tracking-[0.2em] uppercase"
          >
            About Ecolery
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="font-fraunces text-ink mt-6 text-4xl leading-[1.05] font-semibold tracking-tight sm:text-5xl lg:text-6xl"
          >
            Shaping a{" "}
            <span className="bg-gradient-to-r from-primary-light to-primary-dark bg-clip-text text-transparent">
              Zero-Plastic
            </span>{" "}
            Tomorrow, Together
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="font-body text-ink/80 mt-8 max-w-lg text-[15px] leading-relaxed font-semibold"
          >
            From a Dhaka hackathon to a community-rooted movement, we are proving that everyday
            choices can restore the planet — one compostable cup at a time.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-10 flex flex-wrap items-center gap-6">
            <a
              href="#team"
              className="bg-ink text-cream hover:bg-moss rounded-full px-8 py-3.5 text-[14px] font-semibold transition-colors"
            >
              Meet the Team
            </a>
            <a
              href="#journey"
              className="group font-body text-primary inline-flex items-center gap-2 text-[14px] font-semibold underline-offset-4 hover:underline"
            >
              Our Journey
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={1.75}
              />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: EASE, delay: 0.3 }}
          className="relative mx-auto w-full max-w-sm md:max-w-md"
        >
          <div
            aria-hidden
            className="absolute inset-0 -z-10 m-auto aspect-square w-[115%] rounded-full border border-primary/20"
          />

          <div className="ring-primary ring-offset-cream relative aspect-square w-full overflow-hidden rounded-full ring-4 ring-offset-8">
            {error ? (
              <div className="bg-primary/10 flex h-full w-full items-center justify-center">
                <span className="font-display text-primary/60 text-2xl font-bold">ECO</span>
              </div>
            ) : (
              <Image
                src="https://picsum.photos/seed/ecolery-about-hero/800/800"
                alt="Ecolery community members working together"
                fill
                sizes="(min-width: 768px) 28rem, 24rem"
                className="object-cover"
                onError={() => setError(true)}
              />
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.6 }}
            className="border-white/10 bg-moss/95 shadow-ink/15 absolute -bottom-8 -left-2 rounded-2xl p-5 shadow-xl backdrop-blur-sm sm:-left-8"
          >
            <p className="font-display text-cream text-3xl font-bold">160,000+</p>
            <p className="font-body text-white/50 mt-1 text-[11px] font-semibold tracking-[0.14em] uppercase">
              plastic cups replaced
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
