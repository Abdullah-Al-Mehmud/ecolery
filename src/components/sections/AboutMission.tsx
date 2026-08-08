"use client";

import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export function AboutMission() {
  return (
    <section className="bg-cream px-6 py-24 md:py-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={containerVariants}
        className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:gap-20"
      >
        <motion.div variants={itemVariants}>
          <span className="font-body text-primary text-[13px] font-semibold tracking-[0.2em] uppercase">
            Our mission
          </span>
          <h2 className="font-fraunces text-ink mt-4 text-3xl leading-[1.1] font-semibold tracking-tight md:text-5xl">
            Will We Let <span className="text-primary-dark">Plastic</span> Dictate Our Future?
          </h2>
          <div className="bg-primary mt-8 h-1 w-12 rounded-full" />
        </motion.div>

        <motion.div variants={itemVariants} className="md:pt-10">
          <p className="font-body text-ink/80 text-[15px] leading-relaxed font-semibold">
            Bangladesh generates 87,000 tonnes of single-use plastic waste every year, yet less
            than 1% of it is ever recycled. We refuse to accept that future as inevitable.
          </p>
          <p className="font-body text-ink/80 mt-6 text-[15px] leading-relaxed font-semibold">
            Ecolery exists to prove that a thriving business can be gentle on the planet —
            replacing single-use plastics with products that disappear back into the earth, and
            building the green workforce to match.
          </p>

          <div className="border-primary/25 mt-10 border-l-2 pl-6">
            <p className="font-fraunces text-primary-dark text-xl leading-[1.3] font-semibold md:text-2xl">
              A zero-waste world isn&apos;t an idealistic dream — it&apos;s a future we are
              actively building together.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
