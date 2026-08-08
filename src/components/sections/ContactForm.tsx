"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const inputClasses =
  "w-full rounded-xl border border-ink/15 bg-cream-2 px-4 py-3 font-body text-[14px] font-semibold text-ink outline-none transition-colors duration-300 placeholder:text-ink/40 focus:border-primary focus:ring-2 focus:ring-primary/40";

const labelClasses =
  "mb-2 block font-body text-[12px] font-semibold uppercase tracking-[0.14em] text-ink/60";

export function ContactForm() {
  return (
    <section className="bg-cream relative overflow-hidden px-6 py-24 md:py-32">
      <div
        aria-hidden
        className="bg-[radial-gradient(50%_80%_at_85%_10%,rgba(30,158,90,0.05),transparent)] absolute inset-0"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-12 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="lg:col-span-5"
        >
          <span className="font-body text-primary text-[13px] font-semibold tracking-[0.2em] uppercase">
            Contact us
          </span>
          <h1 className="font-fraunces text-ink mt-4 text-4xl leading-[1.05] font-semibold tracking-tight md:text-6xl">
            Write us a <span className="text-primary-dark">letter.</span>
          </h1>
          <p className="font-body text-ink/80 mt-6 max-w-md text-[15px] leading-relaxed font-semibold">
            Partnership, bulk orders, press or a school visit — put it on paper and we&apos;ll
            write back within one business day.
          </p>

          <div className="border-primary/20 bg-primary/5 mt-10 flex items-center gap-3 rounded-full border py-2.5 pr-5 pl-2.5">
            <span className="bg-primary flex h-8 w-8 items-center justify-center rounded-full">
              <Send className="h-3.5 w-3.5 text-cream" strokeWidth={1.75} />
            </span>
            <p className="font-body text-ink/70 text-[13px] font-semibold">
              Every letter gets a human reply.
            </p>
          </div>

          <p className="font-fraunces text-ink/60 mt-12 text-xl leading-snug font-semibold">
            P.S. We love talking shop — especially about
            <br />
            <span className="text-primary-dark">plastic-free everything.</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
          className="lg:col-span-7"
        >
          <div className="bg-white relative overflow-hidden rounded-[2rem] p-8 shadow-sm md:p-12">
            <span
              aria-hidden
              className="font-fraunces text-ink/[0.04] pointer-events-none absolute -top-10 -right-4 text-[14rem] leading-none font-semibold tracking-tight select-none"
            >
              E
            </span>

            <div
              aria-hidden
              className="absolute top-7 right-7 flex h-16 w-16 rotate-12 items-center justify-center rounded-full bg-primary shadow-lg md:top-9 md:right-9"
            >
              <div className="border-primary-light/50 absolute inset-2 rounded-full border-2" />
              <span className="font-fraunces text-cream text-2xl font-semibold">E</span>
            </div>

            <p className="font-fraunces text-ink text-2xl font-semibold tracking-tight md:text-3xl">
              Dear Ecolery,
            </p>
            <p className="font-body text-ink/60 mt-3 max-w-md text-[14px] leading-relaxed font-semibold">
              Tell us what&apos;s on your mind — the more specific, the better.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="name" className={labelClasses}>
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  className={inputClasses}
                />
              </div>

              <div>
                <label htmlFor="email" className={labelClasses}>
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className={inputClasses}
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="subject" className={labelClasses}>
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="What is this about?"
                  className={inputClasses}
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="message" className={labelClasses}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Dear Ecolery…"
                  className={`${inputClasses} resize-none`}
                />
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-fraunces text-ink text-2xl font-semibold tracking-tight">
                  Yours,
                </p>
                <p className="font-body text-ink/50 mt-1 text-[13px] font-semibold">
                  The Ecolery team
                </p>
              </div>

              <button
                type="submit"
                className="bg-primary text-cream hover:bg-primary-dark group inline-flex items-center gap-2.5 rounded-full px-8 py-3.5 text-[14px] font-semibold transition-colors"
              >
                Send your letter
                <Send
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={1.75}
                />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
