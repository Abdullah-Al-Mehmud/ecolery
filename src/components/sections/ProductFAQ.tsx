"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Plus } from "lucide-react";
import { useState } from "react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const faqs = [
  {
    question:
      "How does the carbon footprint of an edible cup compare to traditional PLA or compostable paper cups?",
    answer:
      'Traditional "compostable" paper cups often require industrial composting facilities with specific heat and moisture levels to degrade, and PLA plastics still persist for months in standard ecosystems. Our edible cup is entirely plant-based and requires zero waste management infrastructure. Because it breaks down naturally as organic food waste within days if uneaten, it eliminates the downstream carbon costs associated with sorting, hauling, and industrial processing.',
  },
  {
    question:
      "Can your production scale reliably to meet high-volume, recurring commercial contracts?",
    answer:
      "Yes. We have structured our manufacturing process to handle consistent commercial demand, allowing us to seamlessly scale with your business. For large-scale corporate partnerships, nationwide cafe chains, or major festivals, we establish rolling supply schedules with dedicated lead times to ensure your inventory is automatically replenished without friction.",
  },
  {
    question:
      "Does the cup comply with international food safety and manufacturing standards?",
    answer:
      "Absolutely. Since our product is classified as an edible food item rather than just packaging, we adhere to strict food manufacturing regulations and hygiene protocols. Every batch undergoes rigorous quality control to ensure it meets both food safety standards and mechanical structural integrity before leaving our facility.",
  },
  {
    question: "Does the cup get soggy or leak while I'm drinking?",
    answer:
      "Not at all. The cup is engineered to stay crispy and completely leak-proof for over 40 minutes with hot beverages like coffee or tea, and even longer with cold drinks. You'll easily finish your drink long before the cup loses its crunch.",
  },
  {
    question: "What happens if I don't want to eat the cup?",
    answer:
      "That is completely fine! While it's perfectly safe and delicious to eat, you don't have to. If you throw it away, it acts just like food waste. It will naturally biodegrade in a backyard compost or soil within a few days, leaving absolutely zero trace or microplastics behind.",
  },
  {
    question: "Is it safe for people with allergies?",
    answer:
      "Our standard cups are made from natural grains. We provide a full ingredient list on our customization guides. If you are hosting an event with specific dietary restrictions, please reach out via our quote form - we can discuss specific batch options to suit your needs.",
  },
  {
    question: "Can it handle ice cream, gelato, or desserts?",
    answer:
      "Yes, absolutely. It acts just like a premium, sturdy waffle bowl. Because cold treats don't put the same thermal stress on the cup as a boiling espresso, it will hold shape perfectly and stay crunchy until the very last bite.",
  },
  {
    question:
      "Does the cup alter the taste or smell of a high-quality coffee?",
    answer:
      "No. We know how much effort goes into brewing the perfect cup, so we designed our material to be completely neutral while holding liquid. It won't bleed any starchy taste or odor into your drink; you only taste the light, biscuit-like flavor when you actually bite into it.",
  },
  {
    question: "Are the ingredients 100% vegan and natural?",
    answer:
      "Yes. Our edible cups are entirely plant-based, made from sustainably sourced natural grains and plant fibers. We use absolutely no artificial preservatives, chemicals, or animal byproducts.",
  },
  {
    question: "What is the minimum order quantity (MOQ) for custom branding?",
    answer:
      "There is no minimum order quantity for our regular cups. You can order any amount directly through our Facebook page or WhatsApp. For customized cups, including logo embossing, size, or specific flavor adjustments, the minimum order quantity is 1,000 cups.",
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
