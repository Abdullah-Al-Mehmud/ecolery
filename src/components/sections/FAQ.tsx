"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Do the edible coffee cups have a taste? Will they affect my coffee?",
    answer: "No, we offer a Neutral flavor profile crafted specifically to ensure it does not release flavor notes into your drink. We also offer a Toasted Oats and Sweet Cacao flavor option designed to be eaten as a pleasant snack after your drink is finished.",
  },
  {
    question: "How long can the cup hold a hot beverage before leaking?",
    answer: "Our edible coffee cups remain 100% leak-proof and structurally sound for over 45 minutes with beverages up to 90°C (194°F). This is far longer than the average time it takes to drink an espresso or cappuccino.",
  },
  {
    question: "Are Ecolery products vegan, gluten-free, and organic?",
    answer: "Our standard cups and spoons are 100% vegan, baked from wheat straw and organic oats. They do contain gluten as a structural binder. However, we are currently launching a gluten-free edible line made of brown seaweed, potato starch, and plant cellulose.",
  },
  {
    question: "What happens if I don't want to eat the cup and throw it away?",
    answer: "You can place it in backyard compost, standard organic waste, or throw it on soil. Unlike bioplastics (PLA) which require industrial composting facilities, Ecolery products biodegrade naturally anywhere in 30 days, leaving zero residue.",
  },
  {
    question: "Can we print our café's logo or custom branding on the cups?",
    answer: "Yes! We support natural laser etching and organic soy-ink embossing for wholesale clients. This allows you to display custom branding, QR codes, or logos directly on the tableware without introducing synthetic chemicals.",
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-24 md:py-32 bg-cream-2/40 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Block */}
        <div className="mb-16 text-center">
          <span className="font-body text-moss text-xs md:text-sm tracking-[0.2em] uppercase bg-moss/5 px-4 py-1.5 rounded-full inline-block mb-4">
            frequently asked
          </span>
          <h2 className="font-display text-4xl sm:text-5xl text-ink leading-tight font-medium">
            Common inquiries about <br />
            <span className="text-moss italic font-normal">organic packaging.</span>
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="bg-cream border border-stone-300/35 rounded-3xl overflow-hidden shadow-sm transition-all duration-300"
              >
                
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex justify-between items-center px-6 py-6 md:px-8 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-moss/45"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-bold text-ink text-sm md:text-base leading-snug">
                    {item.question}
                  </span>
                  <div className="ml-4 w-7 h-7 rounded-full bg-cream-2 flex items-center justify-center text-moss shrink-0 transition-transform duration-300">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {/* Animated Body content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 pb-6 md:px-8 md:pb-8 text-ink/75 text-xs md:text-sm leading-relaxed border-t border-stone-200/50 pt-4">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
