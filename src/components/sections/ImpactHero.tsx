"use client";

import { animate, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const stats = [
  { value: 160000, suffix: "+", label: "Plastic cups replaced" },
  { value: 962, suffix: "+", label: "Kg of plastic avoided" },
  { value: 1500, suffix: "+", label: "Children educated" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

const rowVariants = {
  hidden: { opacity: 0, x: 16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: EASE } },
};

function CountUp({ value, suffix }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;

    const controls = animate(0, value, {
      duration: 2,
      ease: EASE,
      onUpdate: (latest) => setDisplay(Math.round(latest).toLocaleString("en-US")),
    });

    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export function ImpactHero() {
  return (
    <section className="bg-moss relative flex min-h-screen items-center overflow-hidden px-6 pt-32 pb-24 md:pt-40 md:pb-32">
      <div
        aria-hidden
        className="bg-[radial-gradient(60%_100%_at_50%_0%,rgba(140,199,140,0.07),transparent)] absolute inset-x-0 top-0 h-full"
      />

      <span
        aria-hidden
        className="font-fraunces text-cream/5 pointer-events-none absolute -right-6 -bottom-16 hidden text-[16rem] leading-none font-semibold tracking-tight select-none lg:block"
      >
        160k
      </span>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative mx-auto grid w-full max-w-6xl items-center gap-16 lg:grid-cols-12 lg:gap-20"
      >
        <motion.div variants={itemVariants} className="max-w-2xl lg:col-span-7">
          <span className="font-body text-white/50 text-[13px] font-semibold tracking-[0.2em] uppercase">
            Impact in numbers
          </span>

          <h1 className="font-fraunces text-cream mt-6 text-4xl leading-[1.05] font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Change you can <span className="text-primary-light">count.</span>
          </h1>

          <p className="font-body text-white/70 mt-8 max-w-xl text-[15px] leading-relaxed font-semibold">
            Behind every figure is a real swap, a real lesson, a real livelihood — and the numbers
            keep climbing every single week.
          </p>

          <div className="mt-10 flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="bg-primary-light absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
              <span className="bg-primary-light relative inline-flex h-2.5 w-2.5 rounded-full" />
            </span>
            <p className="font-body text-white/50 text-[12px] font-semibold tracking-[0.14em] uppercase">
              Live figures · updated weekly
            </p>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="lg:col-span-5">
          <div className="border-white/10 bg-white/[0.06] rounded-2xl border p-7 backdrop-blur-sm md:p-8">
            <div className="flex items-center justify-between">
              <p className="font-body text-white/50 text-[12px] font-semibold tracking-[0.2em] uppercase">
                2025 Scorecard
              </p>
              <span className="border-primary/30 text-primary-light font-display flex h-8 items-center rounded-full border px-3 text-[10px] font-bold tracking-[0.14em] uppercase">
                Verified
              </span>
            </div>

            <div className="mt-4">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={rowVariants}
                  className="flex items-baseline justify-between gap-6 border-t border-white/10 py-6"
                >
                  <p className="font-body text-white/70 max-w-[11rem] text-[14px] leading-snug font-semibold">
                    {stat.label}
                  </p>
                  <p className="font-fraunces text-primary-light whitespace-nowrap text-4xl font-semibold tracking-tight md:text-5xl">
                    <CountUp value={stat.value} suffix={stat.suffix} />
                  </p>
                </motion.div>
              ))}
            </div>

            <p className="font-body mt-2 text-[11px] font-semibold text-white/40">
              Verified against partner records · Jan – Dec 2025
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
