"use client";

import { motion } from "framer-motion";
import { HeartHandshake, Leaf, TrendingUp, type LucideIcon } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const pillars: { icon: LucideIcon; title: string; copy: string }[] = [
  {
    icon: Leaf,
    title: "Environmental Impact",
    copy: "Every cup replaces a single-use plastic that would linger for centuries — fully compostable in 180 days, leaving soil healthier than it found it.",
  },
  {
    icon: HeartHandshake,
    title: "Social Impact",
    copy: "Green jobs for rural women and sustainability education for the next generation — impact that grows through communities.",
  },
  {
    icon: TrendingUp,
    title: "Economic Impact",
    copy: "An award-winning model that turns waste into value, building affordable products and dignified livelihoods across Bangladesh.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export function AboutPillars() {
  return (
    <section className="bg-cream-2 px-6 py-24 md:py-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="mx-auto max-w-6xl"
      >
        <div className="grid gap-8 md:grid-cols-2 md:items-end">
          <motion.div variants={itemVariants}>
            <span className="font-body text-primary text-[13px] font-semibold tracking-[0.2em] uppercase">
              What we stand for
            </span>
            <h2 className="font-fraunces text-ink mt-4 text-3xl leading-[1.1] font-semibold tracking-tight md:text-5xl">
              Three pillars of <span className="text-primary-dark">impact.</span>
            </h2>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="font-body text-ink/80 text-[15px] leading-relaxed font-semibold md:max-w-md md:justify-self-end"
          >
            Every product carries the weight of its footprint — we make sure ours is measured in
            people and planet, not just profit.
          </motion.p>
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-0">
          {pillars.map(({ icon: Icon, title, copy }) => (
            <motion.div
              key={title}
              variants={itemVariants}
              className="border-t border-ink/15 pt-10 first:border-t-0 first:pt-0 md:border-t-0 md:pt-0 md:border-l md:pl-8 md:first:border-l-0 md:first:pl-0"
            >
              <div className="border-primary/20 bg-primary/5 flex h-16 w-16 items-center justify-center rounded-2xl border">
                <Icon className="text-primary h-7 w-7" strokeWidth={1.75} />
              </div>
              <h3 className="font-fraunces text-ink mt-6 text-2xl font-semibold tracking-tight">
                {title}
              </h3>
              <p className="font-body text-ink/80 mt-3 max-w-xs text-[15px] leading-relaxed font-semibold">
                {copy}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
