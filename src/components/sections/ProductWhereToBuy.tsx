"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const stockists = [
  { name: "Dhaka Café", location: "Gulshan 2, Dhaka" },
  { name: "Brew & Bloom", location: "Banani, Dhaka" },
  { name: "Green Bean", location: "Dhanmondi, Dhaka" },
  { name: "The Daily Grind", location: "Uttara, Dhaka" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export function ProductWhereToBuy() {
  return (
    <section className="bg-cream-2 px-6 py-24 md:py-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-2 lg:gap-20"
      >
        <div>
          <motion.span
            variants={itemVariants}
            className="font-body text-primary text-[13px] font-semibold tracking-[0.2em] uppercase"
          >
            Stockists
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="font-fraunces text-ink mt-4 text-3xl leading-[1.1] font-semibold tracking-tight md:text-5xl"
          >
            Where to <span className="text-primary-dark">buy.</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="font-body text-ink/80 mt-6 max-w-md text-[15px] leading-relaxed font-semibold"
          >
            Pour your next coffee with us at these partner cafés across the city.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-10 grid gap-4 sm:grid-cols-2">
            {stockists.map((stockist) => (
              <div
                key={stockist.name}
                className="group bg-white rounded-2xl p-5 transition-colors duration-300"
              >
                <div className="flex items-center gap-4">
                  <span className="border-primary/20 bg-primary/5 text-primary flex h-11 w-11 shrink-0 items-center justify-center rounded-full border">
                    <MapPin className="h-4 w-4" strokeWidth={1.75} />
                  </span>
                  <div className="min-w-0">
                    <p className="font-fraunces text-ink text-[15px] font-semibold tracking-tight">
                      {stockist.name}
                    </p>
                    <p className="font-body text-ink/60 mt-0.5 text-[12px] font-semibold">
                      {stockist.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="relative lg:self-center"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] lg:aspect-square">
            <iframe
              title="Ecolery stockists across Dhaka"
              src="https://www.openstreetmap.org/export/embed.html?bbox=90.35,23.75,90.48,23.87&layer=mapnik&marker=23.8103,90.4125"
              className="h-full w-full border-0"
              loading="lazy"
            />
          </div>
          <div className="border-white/10 bg-moss/95 shadow-ink/15 absolute bottom-5 left-5 rounded-2xl px-5 py-3.5 shadow-lg backdrop-blur-sm">
            <p className="font-display text-cream text-sm font-bold">Serving Dhaka</p>
            <p className="font-body text-white/50 mt-0.5 text-[11px] font-semibold tracking-[0.14em] uppercase">
              Nationwide delivery
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
