"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export function AboutFounderNote() {
  const [error, setError] = useState(false);

  return (
    <section className="bg-moss relative mb-20 overflow-hidden px-6 py-24 md:py-32">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-full bg-[radial-gradient(60%_100%_at_50%_0%,rgba(140,199,140,0.06),transparent)]"
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={containerVariants}
        className="relative mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-[auto_1fr] md:gap-16 lg:gap-24"
      >
        <motion.div variants={itemVariants} className="flex flex-col items-center">
          <div className="ring-primary ring-offset-moss relative h-44 w-44 overflow-hidden rounded-full ring-4 ring-offset-8 sm:h-52 sm:w-52">
            {error ? (
              <div className="bg-primary/10 flex h-full w-full items-center justify-center">
                <span className="font-display text-primary-light text-2xl font-bold">NH</span>
              </div>
            ) : (
              <Image
                src="https://picsum.photos/seed/ecolery-founder/400/400"
                alt="Portrait of Nafesa Anzum Helaly, Co-founder of Ecolery"
                fill
                sizes="(min-width: 640px) 13rem, 11rem"
                className="object-cover"
                onError={() => setError(true)}
              />
            )}
          </div>

          <div className="mt-8 text-center">
            <p className="font-display text-cream text-lg font-bold">Nafesa Anzum Helaly</p>
            <p className="font-body mt-1.5 text-[12px] font-semibold tracking-[0.18em] text-white/50 uppercase">
              Co-founder
            </p>
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <span className="font-body text-[13px] font-semibold tracking-[0.2em] text-white/50 uppercase">
            From our founder
          </span>

          <div className="mt-8 flex items-start gap-5">
            <span
              aria-hidden
              className="font-fraunces text-primary-light -mt-2 text-7xl leading-none select-none"
            >
              &ldquo;
            </span>
            <blockquote className="font-fraunces text-cream text-2xl leading-[1.35] font-medium sm:text-3xl">
              I started Ecolery out of frustration — watching plastic choke our rivers and streets
              while no one offered a real alternative. That refusal has grown into a
              community-rooted movement: women finding dignified work, children learning to protect
              the planet, and proof that the future we want is ours to build.
            </blockquote>
          </div>

          <div className="bg-primary-light/60 mt-10 h-0.5 w-16 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
