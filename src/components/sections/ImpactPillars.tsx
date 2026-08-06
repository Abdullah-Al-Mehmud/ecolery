"use client";

import { motion } from "framer-motion";
import { HeartHandshake, Leaf, TrendingUp, type LucideIcon } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const pillars: {
  icon: LucideIcon;
  title: string;
  stat: string;
  statLabel: string;
  story: string;
}[] = [
  {
    icon: Leaf,
    title: "Environmental Impact",
    stat: "180 days",
    statLabel: "to fully decompose — no trace left behind",
    story:
      "Every cup replaces a single-use plastic that would outlive all of us. Ours returns to soil in 180 days — measured, certified and gone without a trace.",
  },
  {
    icon: HeartHandshake,
    title: "Social Impact",
    stat: "1,500+",
    statLabel: "children educated through school visits",
    story:
      "Impact that compounds through people: green jobs for rural women across our supply chain, and sustainability education that turns students into climate champions.",
  },
  {
    icon: TrendingUp,
    title: "Economic Impact",
    stat: "4",
    statLabel: "rural villages building green livelihoods",
    story:
      "Waste turned into value. An award-winning model that keeps products affordable, pays fair wages, and proves sustainability can be good business.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export function ImpactPillars() {
  return (
    <section className="bg-cream px-6 py-24 md:py-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="mx-auto max-w-6xl"
      >
        <motion.div variants={itemVariants} className="max-w-2xl">
          <span className="font-body text-primary text-[13px] font-semibold tracking-[0.2em] uppercase">
            How impact works
          </span>
          <h2 className="font-fraunces text-ink mt-4 text-3xl leading-[1.1] font-semibold tracking-tight md:text-5xl">
            Three pillars, one <span className="text-primary-dark">promise.</span>
          </h2>
          <p className="font-body text-ink/80 mt-6 max-w-lg text-[15px] leading-relaxed font-semibold">
            Environment, people and economy — no single win matters unless all three move
            together.
          </p>
        </motion.div>

        <div className="mt-16">
          {pillars.map((pillar, index) => {
            const alternate = index % 2 === 1;
            const { icon: Icon, title, stat, statLabel, story } = pillar;

            return (
              <motion.div
                key={title}
                variants={itemVariants}
                className={`relative overflow-hidden border-t border-black/5 py-16 first:border-t-0 md:py-24 ${alternate ? "bg-cream-2" : "bg-cream"}`}
              >
                <span
                  aria-hidden
                  className="font-fraunces text-transparent absolute -top-6 left-2 text-[10rem] leading-none font-semibold select-none opacity-[0.06] [-webkit-text-stroke:1px_var(--color-ink)] md:text-[15rem]"
                >
                  0{index + 1}
                </span>

                <div className="relative mx-auto grid max-w-6xl gap-10 md:grid-cols-12 md:gap-12">
                  <div className="flex items-start gap-5 md:col-span-5">
                    <span className="border-primary/20 bg-primary/5 text-primary flex h-12 w-12 shrink-0 items-center justify-center rounded-full border">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <div>
                      <p className="font-body text-primary text-[12px] font-semibold tracking-[0.2em] uppercase">
                        Pillar {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="font-fraunces text-ink mt-2 text-3xl leading-[1.1] font-semibold tracking-tight md:text-4xl">
                        {title}
                      </h3>
                    </div>
                  </div>

                  <div className="md:col-span-7">
                    <p className="font-fraunces text-primary-dark text-6xl leading-[1.05] font-semibold tracking-tight md:text-7xl">
                      {stat}
                    </p>
                    <p className="font-body text-ink/60 mt-3 text-[12px] font-semibold tracking-[0.14em] uppercase">
                      {statLabel}
                    </p>

                    <div className="bg-primary/25 mt-8 h-px w-full max-w-xs" />

                    <p className="font-body text-ink/80 mt-6 max-w-2xl text-[15px] leading-relaxed font-semibold">
                      {story}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
