"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Plus } from "lucide-react";
import { useState } from "react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const faqs = [
  {
    question: "What is the minimum order for bulk pricing?",
    answer:
      "Bulk orders start at 1,000 cups, with tiered pricing that drops as volume grows. Share your quantity in the quote form and we\u2019ll send custom pricing within one business day.",
  },
  {
    question: "How should the cups be stored?",
    answer:
      "Keep cups in a cool, dry place away from direct sunlight and moisture. Properly stored, they stay fresh and crunchy for up to 6 months.",
  },
  {
    question: "How do they taste with hot vs cold drinks?",
    answer:
      "The cups hold up beautifully either way — staying crunchy for 45+ minutes in hot drinks up to 85°C and keeping their shape in cold ones. The flavour comes through gently, whichever you pour.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Orders are delivered within 3–5 business days nationwide, with tracking confirmed before dispatch.",
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

export function ProductFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-cream-2 px-6 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="lg:sticky lg:top-32 lg:self-start"
        >
          <motion.span
            variants={itemVariants}
            className="font-body text-primary text-[13px] font-semibold tracking-[0.2em] uppercase"
          >
            Good to know
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="font-fraunces text-ink mt-4 text-3xl leading-[1.1] font-semibold tracking-tight md:text-5xl"
          >
            Questions, <span className="text-primary-dark">answered.</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="font-body text-ink/80 mt-6 max-w-sm text-[15px] leading-relaxed font-semibold"
          >
            Everything businesses ask before switching to Ecolery.
          </motion.p>

          <motion.a
            variants={itemVariants}
            href="#quote"
            className="group font-body text-primary mt-8 inline-flex items-center gap-2 text-[14px] font-semibold underline-offset-4 hover:underline"
          >
            Still curious? Talk to our team
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              strokeWidth={1.75}
            />
          </motion.a>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="space-y-4"
        >
          {faqs.map((faq, index) => {
            const open = openIndex === index;

            return (
              <motion.div
                key={faq.question}
                variants={itemVariants}
                className={`overflow-hidden rounded-2xl bg-white transition-colors duration-300`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : index)}
                  aria-expanded={open}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                >
                  <span className="font-fraunces text-ink text-lg font-semibold tracking-tight md:text-xl">
                    {faq.question}
                  </span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
                      open
                        ? "border-primary bg-primary text-cream"
                        : "border-primary/20 bg-primary/5 text-primary"
                    }`}
                  >
                    <Plus
                      className={`h-4 w-4 transition-transform duration-300 ${open ? "rotate-45" : ""}`}
                      strokeWidth={1.75}
                    />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <p className="font-body text-ink/80 max-w-2xl px-6 pb-6 text-[15px] leading-relaxed font-semibold">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
