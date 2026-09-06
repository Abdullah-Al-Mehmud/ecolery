"use client";

import { ImageWithFallback } from "@/components/shared/ImageWithFallback";
import { StaggerChildren, staggerItem } from "@/components/shared/StaggerChildren";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const featureCards = [
  {
    image: "/gallery/Recognition%20for%20Work/With%20Dr%20Yunus.jpg",
    title: "With Dr. Yunus",
    subtitle: "Recognition",
    area: "a",
    fallback: "Recognition — With Dr. Yunus",
  },
  {
    image: "/bentoGrid/bento1.jpg",
    title: "Training women in Mymensingh",
    subtitle: "Project ASHAA",
    area: "b",
    fallback: "Project ASHAA training",
  },
  {
    image: "/bentoGrid/p6.jpg",
    title: "Relationships across borders",
    subtitle: "International",
    area: "c",
    fallback: "International relationships",
  },
  {
    image: "/bentoGrid/long1.jpg",
    title: "Campaigns that move crowds",
    subtitle: "UNESCO Green Generation",
    area: "d",
    fallback: "UNESCO campaign",
  },
  {
    image: "/bentoGrid/p7.jpg",
    title: "Grown together",
    subtitle: "Partnerships",
    area: "e",
    fallback: "Partnership moment",
  },
  {
    image: "/bentoGrid/long2.jpg",
    title: "On the ground",
    subtitle: "Field moments",
    area: "f",
    fallback: "Field moment",
  },
];

const areaClasses: Record<string, string> = {
  a: "md:[grid-area:a]",
  b: "md:[grid-area:b]",
  c: "md:[grid-area:c]",
  d: "md:[grid-area:d]",
  e: "md:[grid-area:e]",
  f: "md:[grid-area:f]",
};

export function FeatureGallery() {
  return (
    <section className="bg-cream px-6 py-16 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
          <h3 className="font-display text-ink text-3xl font-bold tracking-tight md:text-4xl">
            Moments that move
            <br />
            <span className="text-primary-dark">the mission forward.</span>
          </h3>
          <Link
            href="/gallery"
            className="group text-ink hover:border-primary hover:bg-primary hover:text-cream flex w-fit shrink-0 items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-2.5 text-[13px] font-semibold transition-colors duration-300"
          >
            View gallery
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
          </Link>
        </div>

        <StaggerChildren
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 md:grid-cols-3 md:auto-rows-55 md:[grid-template-areas:'a_b_c'_'a_d_d'_'e_f_f']"
          staggerDelay={0.1}
        >
          {featureCards.map((card) => (
            <motion.div
              key={card.title}
              variants={staggerItem}
              className={`group relative h-[220px] overflow-hidden rounded-3xl sm:h-[260px] md:h-auto ${
                areaClasses[card.area] || ""
              }`}
            >
              <ImageWithFallback
                src={card.image}
                alt={card.title}
                fill
                sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                fallbackLabel={card.fallback}
              />
              <div className="from-ink/90 via-ink/20 absolute inset-0 bg-linear-to-t to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <span className="font-body text-[11px] font-semibold tracking-wider text-white/80 uppercase">
                  {card.subtitle}
                </span>
                <h4 className="font-display mt-0.5 text-base font-bold leading-snug sm:text-lg">
                  {card.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}