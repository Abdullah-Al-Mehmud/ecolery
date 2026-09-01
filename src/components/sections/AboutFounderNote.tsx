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
    <section className="bg-moss relative overflow-hidden px-6 py-24 md:py-32">
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
                src="/team/nafesaFounder.jpg"
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
            <blockquote className="font-fraunces text-cream space-y-5 text-lg leading-[1.5] font-medium sm:text-xl">
              <p>
                I didn&apos;t start Ecolery because I wanted to run a company; I started it because
                I was tired of feeling helpless. For years, I watched the places we love - our
                neighborhood streets, our childhood playgrounds, and our rivers slowly drown under a
                wave of plastic waste. It is devastating to realize how seamlessly we have accepted
                a lifestyle where a single moment of convenience leaves behind a lifetime of
                pollution for our children to inherit.
              </p>
              <p>
                I knew I had to act, but I also realized that real environmental healing cannot
                happen in a vacuum. It has to start with people. That is why the soul of Ecolery is
                rooted in community. Instead of just fighting against pollution, we chose to fight
                for each other - by bringing stable, dignified livelihoods to underprivileged women
                in rural villages and sitting down with thousands of school children to spark a
                lifelong love for our planet. Every time I see the determination in a person&apos;s
                eyes, I am reminded that we are not just cleaning up the earth. We are rebuilding
                our connection to it, together.
              </p>
            </blockquote>
          </div>

          <div className="bg-primary-light/60 mt-10 h-0.5 w-16 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
