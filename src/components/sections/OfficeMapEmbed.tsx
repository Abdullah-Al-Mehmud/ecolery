"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const ADDRESS = "12, Hasina Badar Villa, Sheikh Shaheb Bazar, Dhaka-1211";

const MAP_EMBED_SRC =
  "https://www.google.com/maps?q=12%20Hasina%20Badar%20Villa%2C%20Sheikh%20Shaheb%20Bazar%2C%20Dhaka-1211&output=embed";

const DIRECTIONS_HREF =
  "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(ADDRESS);

export function OfficeMapEmbed() {
  return (
    <section className="bg-cream-2 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="max-w-2xl"
        >
          <span className="font-body text-primary text-[13px] font-semibold tracking-[0.2em] uppercase">
            Visit us
          </span>
          <h2 className="font-display text-ink mt-4 text-4xl leading-[1.1] font-bold tracking-tight md:text-5xl">
            Postcard from <span className="text-primary-dark">Dhaka.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="bg-white mt-12 overflow-hidden rounded-3xl shadow-sm"
        >
          <div className="relative">
            <iframe
              title="Ecolery office on Google Maps"
              src={MAP_EMBED_SRC}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="h-[380px] w-full border-0 md:h-[440px]"
            />
          </div>

          <div className="flex flex-col gap-4 border-t border-black/5 p-5 sm:flex-row sm:items-center sm:justify-between md:p-6">
            <div className="flex items-start gap-3">
              <span className="border-primary/20 bg-primary/5 text-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-full border">
                <MapPin className="h-4 w-4" strokeWidth={1.75} />
              </span>
              <div>
                <p className="font-display text-ink text-[14px] font-bold">Our office</p>
                <p className="font-body text-ink/60 mt-0.5 text-[13px] leading-relaxed font-semibold">
                  {ADDRESS}
                </p>
              </div>
            </div>

            <a
              href={DIRECTIONS_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="border-ink/15 bg-cream-2 hover:border-primary hover:bg-primary hover:text-cream group inline-flex shrink-0 items-center gap-2 rounded-full border px-5 py-2.5 text-[13px] font-semibold text-ink transition-colors duration-300"
            >
              Get directions
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={1.75}
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
