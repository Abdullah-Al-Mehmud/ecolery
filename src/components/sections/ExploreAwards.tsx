"use client";

import { motion } from "framer-motion";
import {
  CircleDollarSign,
  Code,
  Eye,
  Flag,
  Globe,
  GraduationCap,
  HeartHandshake,
  Leaf,
  Lightbulb,
  Medal,
  Rocket,
  Trophy,
  type LucideIcon,
} from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const awards: {
  year: string;
  title: string;
  icon: LucideIcon;
}[] = [
  { year: "2025", title: "Generation Hope Goals Champion", icon: Trophy },
  { year: "2025", title: "#Change100 Top Sustainability Startups", icon: Leaf },
  { year: "2025", title: "Green Woman Entrepreneur Award", icon: Medal },
  { year: "2023", title: "Orange Corners Bangladesh Hackathon Champion", icon: Code },
  { year: "2024", title: "Orange Corners Track-1 Funding", icon: CircleDollarSign },
  { year: "2023", title: "Start Koro Season 4 Winner", icon: Flag },
  { year: "2024", title: "Daily Star Climate Justice Idea Champion", icon: Lightbulb },
  { year: "2023", title: "Entrepreneurship World Cup Bangladesh Champion", icon: Globe },
  { year: "2025", title: "OmniStart 1.0 Champion", icon: Rocket },
  { year: "2025", title: "Green Entrepreneurship Bootcamp Winner", icon: GraduationCap },
  { year: "2025", title: "ActionAid Feminist Green Action Award", icon: HeartHandshake },
  { year: "2025", title: "CPD Week Green Showcasing Winner", icon: Eye },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export function ExploreAwards() {
  return (
    <section className="bg-cream px-6 py-24 md:py-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={containerVariants}
        className="mx-auto max-w-6xl"
      >
        <motion.div variants={itemVariants} className="grid gap-6 md:grid-cols-2 md:items-end">
          <div>
            <span className="font-body text-primary text-[13px] font-semibold tracking-[0.2em] uppercase">
              Awards &amp; recognition
            </span>
            <h1 className="font-fraunces text-ink mt-4 text-3xl leading-[1.1] font-semibold tracking-tight md:text-5xl">
              Recognition for the work behind <span className="text-primary-dark">the cup.</span>
            </h1>
          </div>
          <p className="font-body text-ink/80 text-[15px] leading-relaxed font-semibold md:mb-1 md:max-w-sm md:justify-self-end">
            From hackathon champions to national sustainability lists — a few of the milestones
            that keep the mission moving.
          </p>
        </motion.div>

        <div className="mt-10 flex items-center gap-3">
          <div className="bg-primary h-px w-8" />
          <p className="font-body text-primary text-[12px] font-semibold tracking-[0.14em] uppercase">
            {awards.length} awards · 2023 – 2025
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {awards.map((award) => {
            const { year, title, icon: Icon } = award;

            return (
              <motion.div
                key={title}
                variants={itemVariants}
                className="border-ink/15 bg-cream-2 hover:border-primary/30 group rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 md:p-7"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="border-primary/25 bg-white text-primary group-hover:bg-primary group-hover:text-cream flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border transition-colors duration-300">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <span className="font-display text-primary-dark text-lg font-bold tracking-tight">
                    {year}
                  </span>
                </div>

                <h3 className="font-fraunces text-ink mt-7 text-xl leading-snug font-semibold md:text-2xl">
                  {title}
                </h3>

                <div className="bg-primary/25 mt-6 h-px w-10 transition-all duration-300 group-hover:w-16" />
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
