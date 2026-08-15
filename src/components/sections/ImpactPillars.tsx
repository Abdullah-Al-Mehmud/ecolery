"use client";

import { motion } from "framer-motion";
import { HeartHandshake, Leaf, TrendingUp, type LucideIcon } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const pillars: {
  icon: LucideIcon;
  title: string;
  statValue?: string;
  statLabel?: string;
  copy: string;
}[] = [
  {
    icon: Leaf,
    title: "Environmental Impact",
    statValue: "180 days",
    statLabel: "to fully decompose — no trace left behind",
    copy: "Every cup replaces a single-use plastic that would outlive us. Ours returns to soil in 180 days — measured, certified, and gone without a trace.",
  },
  {
    icon: HeartHandshake,
    title: "Social Impact",
    statValue: "1,500+",
    statLabel: "children educated through school visits",
    copy: "Impact that compounds through people: green jobs for rural women across our supply chain, and sustainability education that turns students into climate champions.",
  },
  {
    icon: TrendingUp,
    title: "Economic Impact",
    statValue: "4",
    statLabel: "rural villages building green livelihoods",
    copy: "Waste turned into value. An award-winning model that keeps products affordable, pays fair wages, and proves sustainability can be good business.",
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

export function ImpactPillars() {
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
            Every product carries the weight of its footprint, and we make sure ours is measured in
            people and planet, not just profit.
          </motion.p>
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-0">
          {pillars.map(({ icon: Icon, title, statValue, statLabel, copy }) => (
            <motion.div
              key={title}
              variants={itemVariants}
              className="border-ink/15 border-t pt-10 first:border-t-0 first:pt-0 md:border-t-0 md:border-l md:pt-0 md:pl-8 md:first:border-l-0 md:first:pl-0"
            >
              <div className="border-primary/20 bg-primary/5 flex h-16 w-16 items-center justify-center rounded-2xl border">
                <Icon className="text-primary h-7 w-7" strokeWidth={1.75} />
              </div>

              {statValue && (
                <div className="mt-6">
                  <div className="font-fraunces text-ink text-3xl leading-none font-semibold">
                    {statValue}
                  </div>
                  {statLabel && (
                    <div className="font-body text-ink/70 mt-1 text-[13px] font-semibold">
                      {statLabel}
                    </div>
                  )}
                </div>
              )}

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
