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

export function FeatureGallery() {
  return (
    <section className="bg-cream px-6 pt-24 pb-24 md:pt-32 md:pb-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex items-end justify-between gap-6">
          <h3 className="font-display text-ink text-3xl font-bold tracking-tight md:text-4xl">
            Moments that move
            <br />
            <span className="text-primary-dark">the mission forward.</span>
          </h3>
          <Link
            href="/gallery"
            className="group text-ink hover:border-primary hover:bg-primary hover:text-cream flex shrink-0 items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-2.5 text-[13px] font-semibold transition-colors duration-300"
          >
            View gallery
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
          </Link>
        </div>

        <StaggerChildren
          className="grid auto-rows-45 grid-cols-3 gap-5 md:auto-rows-55"
          style={{ gridTemplateAreas: `"a b c" "a d d" "e f f"` }}
          staggerDelay={0.1}
        >
          {featureCards.map((card) => (
            <motion.div
              key={card.title}
              variants={staggerItem}
              className="group relative overflow-hidden rounded-3xl"
              style={{ gridArea: card.area }}
            >
              <ImageWithFallback
                src={card.image}
                alt={card.title}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                fallbackLabel={card.fallback}
              />
              <div className="from-ink/85 absolute inset-0 bg-linear-to-t via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />
            </motion.div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}