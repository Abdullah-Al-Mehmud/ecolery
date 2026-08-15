"use client";

import { motion } from "framer-motion";
import { CupSoda, GraduationCap, Home, Leaf, type LucideIcon } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const stats: { icon: LucideIcon; value: string; label: string }[] = [
  { icon: CupSoda, value: "160,000+", label: "Plastic cups replaced" },
  { icon: Leaf, value: "962+", label: "Kg of plastic avoided" },
  { icon: GraduationCap, value: "1,500+", label: "Children educated" },
  { icon: Home, value: "4", label: "Rural villages supported" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export function AboutStats() {
  return (
    <section className="bg-moss relative overflow-hidden px-6 py-24 md:py-32">
      <div
        aria-hidden
        className="bg-[radial-gradient(60%_100%_at_50%_0%,rgba(140,199,140,0.06),transparent)] absolute inset-x-0 top-0 h-full"
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={containerVariants}
        className="relative mx-auto max-w-6xl"
      >
        <div className="grid gap-8 md:grid-cols-2 md:items-end">
          <motion.div variants={itemVariants}>
            <span className="font-body text-white/50 text-[13px] font-semibold tracking-[0.2em] uppercase">
              Impact in numbers
            </span>
            <h2 className="font-fraunces text-cream mt-4 text-3xl leading-[1.1] font-semibold tracking-tight md:text-5xl">
              Measured in <span className="text-primary-light">people &amp; planet.</span>
            </h2>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="font-body text-white/70 text-[15px] leading-relaxed font-semibold md:max-w-md md:justify-self-end"
          >
            These aren&apos;t vanity metrics. Every number tracks a real swap, a real lesson, a
            real livelihood. And they grow every single week.
          </motion.p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {stats.map(({ icon: Icon, value, label }) => (
            <motion.div
              key={label}
              variants={itemVariants}
              className="border-white/10 bg-white/[0.06] rounded-2xl p-6 backdrop-blur-sm md:p-8"
            >
              <Icon className="text-primary-light h-6 w-6" strokeWidth={1.75} />
              <p className="font-display text-cream mt-6 text-3xl font-bold md:text-4xl">{value}</p>
              <p className="font-body text-white/50 mt-2 text-[12px] font-semibold tracking-[0.14em] uppercase">
                {label}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
