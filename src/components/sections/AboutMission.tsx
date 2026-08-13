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
            Every single year, Bangladesh alone suffocates under a staggering 87,000 tonnes of
            single-use plastic waste, with billions of disposable cups dumped into our lands, our
            fragile waterways, and the irreplaceable ecosystems of the Sundarbans. Shockingly,
            less than 1% of these items are ever recycled, leaving a trail of environmental
            destruction in their wake.
          </p>
          <p className="font-body text-ink/80 mt-6 text-[15px] leading-relaxed font-semibold">
            Ecolery was born to disrupt this devastating cycle. We are an award-winning social
            enterprise on an uncompromising mission to build a completely zero-plastic community.
            Our impact is real, measurable, and growing every single day: we have already
            intercepted and replaced over 160,000 plastic cups, directly educated more than 1,500
            children to fight for their future, and fostered true economic justice by training and
            employing underprivileged women across 4 rural villages.
          </p>
          <p className="font-body text-ink/80 mt-6 text-[15px] leading-relaxed font-semibold">
            We are not just waiting for a cleaner tomorrow; we are actively engineering a
            zero-waste world where the planet and its people thrive hand in hand.
          </p>

          <div className="border-primary/25 mt-10 border-l-2 pl-6">
            <p className="font-fraunces text-primary-dark text-xl leading-[1.3] font-semibold md:text-2xl">
              A zero-waste world isn&apos;t an idealistic dream - it&apos;s a future we are
              actively building together.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
