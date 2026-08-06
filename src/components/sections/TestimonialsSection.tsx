"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

interface Review {
  name: string;
  role: string;
  text: string;
}

const reviews: Review[] = [
  {
    name: "Faiza Rahman",
    role: "Marketing Executive",
    text: "The cup held my tea for 30 to 40 minutes without going soggy. That alone sold me.",
  },
  {
    name: "Zubair Hossain",
    role: "Event Manager",
    text: "Used for a corporate CSR event — it became the talking point of the entire evening.",
  },
  {
    name: "Reza Abdullah",
    role: "Startup Founder",
    text: "Held cold lacchi with zero leakage. This cup is built for Bangladesh summers.",
  },
  {
    name: "Ruma Akter",
    role: "Homemaker",
    text: "Used Ecolery at a birthday party instead of plastic cups. Guests were genuinely curious.",
  },
  {
    name: "Arif Arnob",
    role: "Café Owner",
    text: "Customer feedback is overwhelmingly positive. It sets our café apart from everywhere else.",
  },
];

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function TestimonialsSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateArrows = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateArrows();
    el.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, [updateArrows]);

  const scrollByCard = (direction: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = (card ? card.offsetWidth + 24 : el.clientWidth * 0.9) * direction;
    el.scrollBy({ left: step, behavior: "smooth" });
  };

  return (
    <section className="bg-cream-2 overflow-hidden px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="max-w-2xl"
          >
            <span className="font-body text-primary text-[13px] font-semibold tracking-[0.2em] uppercase">
              What people say
            </span>
            <h2 className="font-display text-ink mt-4 text-3xl font-bold tracking-tight md:text-5xl">
              Real voices, <span className="text-primary-dark">real impact.</span>
            </h2>
          </motion.div>

          <div className="hidden shrink-0 gap-3 md:flex">
            <button
              type="button"
              aria-label="Previous reviews"
              onClick={() => scrollByCard(-1)}
              disabled={!canPrev}
              className="text-ink hover:border-primary hover:text-primary border-ink/15 bg-white/60 disabled:text-ink/30 disabled:hover:border-ink/15 flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-300 disabled:hover:text-ink/30"
            >
              <ChevronLeft className="h-5 w-5" strokeWidth={1.75} />
            </button>
            <button
              type="button"
              aria-label="Next reviews"
              onClick={() => scrollByCard(1)}
              disabled={!canNext}
              className="text-ink hover:border-primary hover:text-primary border-ink/15 bg-white/60 disabled:text-ink/30 disabled:hover:border-ink/15 flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-300 disabled:hover:text-ink/30"
            >
              <ChevronRight className="h-5 w-5" strokeWidth={1.75} />
            </button>
          </div>
        </div>

        <motion.div
          ref={trackRef}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2"
        >
          {reviews.map(({ name, role, text }) => (
            <article
              key={name}
              data-card
              className="w-[85%] shrink-0 snap-start sm:w-[46%] lg:w-[calc(33.333%-1rem)]"
            >
              <div className="bg-cream hover:border-primary flex h-full flex-col rounded-3xl border border-ink/15 p-8 transition-colors duration-300">
                <div className="flex gap-1" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="text-primary h-4 w-4"
                      strokeWidth={1.75}
                      fill="currentColor"
                    />
                  ))}
                </div>

                <p className="font-body text-ink/85 mt-6 text-[15px] leading-relaxed font-semibold">
                  &ldquo;{text}&rdquo;
                </p>

                <div className="mt-8 border-t border-ink/10 pt-6">
                  <p className="font-body text-ink text-sm font-bold">{name}</p>
                  <p className="font-body text-ink/70 mt-0.5 text-[12px] font-semibold tracking-wider uppercase">
                    {role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
