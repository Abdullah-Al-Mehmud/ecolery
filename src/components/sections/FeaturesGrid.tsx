"use client";

import { motion } from "framer-motion";
import { Cookie, Droplets, Flame, Leaf, type LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  copy: string;
}

const features: Feature[] = [
  {
    icon: Droplets,
    title: "Leak-proof",
    copy: "Holds hot and cold without a drop escaping — sealed tight, sip after sip.",
  },
  {
    icon: Flame,
    title: "Heat resistant",
    copy: "Built to take the heat of your morning brew without warping or softening.",
  },
  {
    icon: Leaf,
    title: "Biodegradable",
    copy: "Fully compostable in 180 days — it returns to the earth, never the landfill.",
  },
  {
    icon: Cookie,
    title: "Tasty",
    copy: "Edible to the last bite — our cups are made to be enjoyed, then eaten.",
  },
];

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function FeaturesGrid() {
  return (
    <section className="bg-cream px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, copy }) => (
            <motion.div
              key={title}
              whileHover="hover"
              className="bg-cream-2 rounded-2xl p-8 transition-colors duration-300"
            >
              <motion.div
                variants={{ hover: { scale: 1.08 } }}
                transition={{ type: "tween", duration: 0.5, ease: EASE }}
                className="flex h-14 w-14 items-center justify-center"
              >
                <Icon className="text-primary h-8 w-8" strokeWidth={1.75} />
              </motion.div>

              <h3 className="font-fraunces text-ink mt-6 text-2xl font-semibold tracking-tight">
                {title}
              </h3>
              <p className="font-body text-ink/70 mt-3 text-[15px] leading-relaxed font-semibold">
                {copy}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
