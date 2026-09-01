"use client";

import { motion } from "framer-motion";
import { ArrowRight, CupSoda, Package, Recycle, Utensils, type LucideIcon } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const products: { icon: LucideIcon; title: string; copy: string }[] = [
  {
    icon: CupSoda,
    title: "Edible Straws",
    copy: "Compostable sips for every drink, crunchy, flavour-tagged, plastic-free.",
  },
  {
    icon: Utensils,
    title: "Edible Cutlery",
    copy: "Spoons and forks you can finish with the meal. No bin required.",
  },
  {
    icon: Package,
    title: "Takeaway Containers",
    copy: "Meal boxes that disappear after dinner, not in a landfill for 400 years.",
  },
  {
    icon: Recycle,
    title: "Eco Packaging",
    copy: "Plastic-free wrapping for brands ready to go fully green.",
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

export function ProductComingSoon() {
  return (
    <section className="relative overflow-hidden bg-moss px-6 py-24 md:py-32">
      <div
        aria-hidden
        className="bg-[radial-gradient(60%_100%_at_50%_0%,rgba(140,199,140,0.07),transparent)] absolute inset-x-0 top-0 h-full"
      />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="relative mx-auto max-w-6xl"
      >
        <motion.div variants={itemVariants} className="mx-auto max-w-2xl text-center">
          <span className="font-body text-primary-light text-[13px] font-semibold tracking-[0.2em] uppercase">
            What&apos;s next
          </span>
          <h2 className="font-fraunces text-cream mt-4 text-3xl leading-[1.1] font-semibold tracking-tight md:text-5xl">
            More to <span className="text-primary-light">come.</span>
          </h2>
          <p className="font-body text-white/70 mt-6 text-[15px] leading-relaxed font-semibold">
            The Edible Cup is only the beginning. New ways to eat, sip and ship without plastic
            are already in the works.
          </p>
        </motion.div>

        <div className="mt-16 grid auto-rows-fr items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map(({ icon: Icon, title, copy }) => (
            <motion.div
              key={title}
              variants={itemVariants}
              className="group border-white/10 bg-white/[0.06] relative flex flex-col overflow-hidden rounded-3xl p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1"
            >
              <div
                aria-hidden
                className="bg-primary/10 absolute -top-12 -right-12 h-40 w-40 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
              />

              <span className="border-white/15 bg-white/[0.04] text-white w-fit rounded-full border px-3 py-1 text-[11px] font-semibold tracking-[0.14em] uppercase">
                Coming Soon
              </span>

              <span className="border-primary/20 bg-primary/10 text-primary-light mt-8 flex h-14 w-14 items-center justify-center rounded-2xl border">
                <Icon className="h-6 w-6" strokeWidth={1.75} />
              </span>

              <h3 className="font-fraunces text-cream mt-5 text-2xl font-semibold tracking-tight">
                {title}
              </h3>
              <p className="font-body text-white/70 mt-2 text-[14px] leading-relaxed font-semibold">
                {copy}
              </p>

              <div className="mt-auto pt-8">
                <a
                  href="#quote"
                  className="border-white/15 bg-white/[0.04] text-cream inline-flex w-fit items-center gap-2 rounded-full border px-5 py-2.5 text-[13px] font-semibold transition-colors duration-300 hover:bg-white/[0.08]"
                >
                  Notify me
                  <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.75} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
