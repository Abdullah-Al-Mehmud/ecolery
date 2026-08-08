"use client";

import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";
import Image from "next/image";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export function ImpactReport() {
  return (
    <section className="bg-cream relative mb-20 overflow-hidden px-6 py-24 md:py-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={containerVariants}
        className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2 lg:gap-20"
      >
        <motion.div variants={itemVariants}>
          <span className="border-primary/20 bg-primary/5 text-primary flex h-14 w-14 items-center justify-center rounded-2xl border">
            <FileText className="h-6 w-6" strokeWidth={1.75} />
          </span>

          <span className="font-body text-primary mt-8 block text-[13px] font-semibold tracking-[0.2em] uppercase">
            Impact report
          </span>

          <h2 className="font-fraunces text-ink mt-4 text-3xl leading-[1.1] font-semibold tracking-tight md:text-5xl">
            Download our 2025 <span className="text-primary-dark">Impact Report.</span>
          </h2>

          <p className="font-body text-ink/80 mt-6 max-w-md text-[15px] leading-relaxed font-semibold">
            Every cup, every lesson, every livelihood — documented, measured and verified. A full
            look at what we built in 2025 and where we&apos;re headed next.
          </p>

          <a
            href="#"
            className="bg-primary text-cream hover:bg-primary-dark mt-10 inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-[14px] font-semibold transition-colors"
          >
            <Download className="h-4 w-4" strokeWidth={1.75} />
            Download the Report
          </a>
        </motion.div>

        <motion.div variants={itemVariants} className="relative mx-auto w-full max-w-sm">
          <div
            aria-hidden
            className="border-primary/15 absolute -inset-6 -z-10 rounded-[2rem] border"
          />

          <div className="bg-white rounded-2xl border-black/5 p-8 shadow-xl md:p-10">
            <div className="flex items-center justify-between">
              <Image
                src="/logo.png"
                alt="Ecolery logo"
                width={92}
                height={92}
                className="h-10 w-10 object-contain"
              />
              <span className="font-body text-ink/50 text-[11px] font-semibold tracking-[0.14em] uppercase">
                PDF · 4.2 MB
              </span>
            </div>

            <p className="font-fraunces text-ink mt-8 text-3xl leading-[1.05] font-semibold tracking-tight md:text-4xl">
              2025
              <br />
              Impact Report
            </p>

            <div className="bg-primary mt-8 h-1.5 w-16 rounded-full" />

            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-black/5 pt-6">
              <div>
                <p className="font-display text-primary-dark text-lg font-bold">160k</p>
                <p className="font-body text-ink/50 mt-0.5 text-[10px] font-semibold tracking-[0.14em] uppercase">
                  cups
                </p>
              </div>
              <div>
                <p className="font-display text-primary-dark text-lg font-bold">962</p>
                <p className="font-body text-ink/50 mt-0.5 text-[10px] font-semibold tracking-[0.14em] uppercase">
                  kg plastic
                </p>
              </div>
              <div>
                <p className="font-display text-primary-dark text-lg font-bold">1.5k</p>
                <p className="font-body text-ink/50 mt-0.5 text-[10px] font-semibold tracking-[0.14em] uppercase">
                  children
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
