"use client";

import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const goals: {
  number: string;
  name: string;
  line: string;
  text: string;
  bar: string;
}[] = [
  {
    number: "5",
    name: "Gender Equality",
    line: "Women lead our supply chain and hold the majority of green jobs we create.",
    text: "text-rust",
    bar: "bg-rust",
  },
  {
    number: "8",
    name: "Decent Work & Growth",
    line: "Fair wages and dignified work in villages that needed income the most.",
    text: "text-primary",
    bar: "bg-primary",
  },
  {
    number: "12",
    name: "Responsible Consumption",
    line: "One cup at a time, we are retraining how a city consumes.",
    text: "text-cork",
    bar: "bg-cork",
  },
  {
    number: "13",
    name: "Climate Action",
    line: "Less virgin plastic means fewer emissions, every single order.",
    text: "text-moss",
    bar: "bg-moss",
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

export function ImpactSDGs() {
  return (
    <section className="bg-cream px-6 py-24 md:py-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="mx-auto max-w-6xl"
      >
        <motion.div variants={itemVariants} className="grid gap-6 md:grid-cols-2 md:items-end">
          <div>
            <span className="font-body text-primary text-[13px] font-semibold tracking-[0.2em] uppercase">
              United Nations Goals
            </span>
            <h2 className="font-fraunces text-ink mt-4 text-3xl leading-[1.1] font-semibold tracking-tight md:text-5xl">
              Aligned with the <span className="text-primary-dark">SDGs.</span>
            </h2>
          </div>
          <p className="font-body text-ink/80 text-[15px] leading-relaxed font-semibold md:mb-1 md:max-w-sm md:justify-self-end">
            Our work maps directly to four Sustainable Development Goals — measured, reported and
            audited every year.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {goals.map((goal) => (
            <motion.div
              key={goal.number}
              variants={itemVariants}
              className="bg-white overflow-hidden rounded-2xl transition-colors duration-300"
            >
              <div className={`h-1.5 w-full ${goal.bar}`} />
              <div className="p-6">
                <p className={`font-fraunces text-5xl font-semibold tracking-tight ${goal.text}`}>
                  {goal.number}
                </p>
                <p className="font-display text-ink mt-3 text-[15px] font-bold leading-snug">
                  {goal.name}
                </p>
                <p className="font-body text-ink/60 mt-2 text-[13px] leading-relaxed font-semibold">
                  {goal.line}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
