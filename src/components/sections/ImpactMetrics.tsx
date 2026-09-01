"use client";

import { StaggerChildren, staggerItem } from "@/components/shared/StaggerChildren";
import { motion } from "framer-motion";

const impactStats = [
  { value: "160,000+", unit: "", label: "Plastic Cups Replaced" },
  { value: "962+", unit: "", label: "Orders Delivered" },
  { value: "1,500+", unit: "", label: "Educational Sustainability" },
];

export function ImpactMetrics() {
  return (
    <section
      id="impact"
      className="bg-moss relative scroll-mt-28 overflow-hidden px-6 py-24 md:py-32"
    >
      <div className="relative mx-auto max-w-5xl text-center">
        <h3 className="font-display text-3xl font-bold text-white md:text-4xl">
          The metrics that tell our circular journey
        </h3>

        <StaggerChildren
          className="mt-16 grid items-start gap-10 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-white/10"
          staggerDelay={0.15}
        >
          {impactStats.map((m) => (
            <motion.div
              key={m.label}
              variants={staggerItem}
              className="flex flex-col items-center px-6"
            >
              <p className="font-display text-5xl font-bold text-white md:text-6xl">{m.value}</p>
              <p className="font-body mt-3 text-[13px] font-semibold text-white/50">{m.label}</p>
            </motion.div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
