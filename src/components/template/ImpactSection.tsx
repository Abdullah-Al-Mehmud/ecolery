"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { ImageWithFallback } from "@/components/shared/ImageWithFallback";
import { ArrowUpRight, Leaf } from "lucide-react";
import Link from "next/link";

const metrics = [
  { value: "180", unit: "days", label: "Decomposition cycle in soil" },
  { value: "100%", unit: "", label: "Compostable materials used" },
  { value: "5.5", unit: "kgs", label: "CFP reduced per kg of Ecovia bags" },
];

const impactStats = [
  { value: "160,000+", unit: "", label: "Plastic Cups Replaced" },
  { value: "962+", unit: "", label: "Orders Delivered" },
  { value: "1,500+", unit: "", label: "Educational Sustainability" },
];

const featureCards = [
  {
    image: "/gallery/Recognition%20for%20Work/With%20Dr%20Yunus.jpg",
    title: "With Dr. Yunus",
    subtitle: "Recognition",
    area: "a",
    fallback: "Recognition — With Dr. Yunus",
  },
  {
    image: "/gallery/Project%20ASHAA/Training%20women%20Mymensingh.jpg",
    title: "Training women in Mymensingh",
    subtitle: "Project ASHAA",
    area: "b",
    fallback: "Project ASHAA training",
  },
  {
    image: "/gallery/InternationalRelationships/IMG-20260511-WA0004.jpg",
    title: "Relationships across borders",
    subtitle: "International",
    area: "c",
    fallback: "International relationships",
  },
  {
    image: "/gallery/UNESCO%20Green%20Generation%20Campaign%20/IMG_0225.jpg",
    title: "Campaigns that move crowds",
    subtitle: "UNESCO Green Generation",
    area: "d",
    fallback: "UNESCO campaign",
  },
  {
    image: "/gallery/Some%20Partnerships/NL1A5447-1.JPG",
    title: "Grown together",
    subtitle: "Partnerships",
    area: "e",
    fallback: "Partnership moment",
  },
  {
    image: "/gallery/UNESCO%20Green%20Generation%20Campaign%20/IMG20260115154539.jpg",
    title: "On the ground",
    subtitle: "Field moments",
    area: "f",
    fallback: "Field moment",
  },
];

function MissionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const videoY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["4%", "-4%"]);

  useEffect(() => {
    const el = sectionRef.current;
    const video = videoRef.current;
    if (!el || !video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause();
          video.currentTime = 0;
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="bg-cream relative scroll-mt-28 overflow-hidden px-6 py-24 md:py-32"
    >
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2">
        <motion.div style={{ y: textY }}>
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-full">
              <Leaf className="text-primary h-5 w-5" strokeWidth={1.75} />
            </div>
            <span className="font-body text-primary text-[13px] font-semibold tracking-[0.2em] uppercase">
              Our mission
            </span>
          </div>
          <h2 className="font-display text-ink mt-5 text-4xl leading-[1.1] font-bold tracking-tight md:text-5xl">
            Eat the cup.
            <br />
            <span className="text-primary-dark">Eliminate the waste.</span>
          </h2>
          <p className="font-body mt-6 max-w-md text-[15px] leading-relaxed font-semibold text-gray-600">
            Ecolery is redefining sustainability with edible products that help reduce plastic
            pollution and inspire a zero-waste future, designed for everyday dining, built to
            disappear responsibly.
          </p>
        </motion.div>

        <motion.div
          style={{ y: videoY }}
          className="relative"
        >
          <div className="relative aspect-video overflow-hidden rounded-[2rem] shadow-2xl shadow-ink/15 -rotate-1 transition-transform duration-500 hover:rotate-0 hover:scale-[1.02]">
            <video
              ref={videoRef}
              src="/Product feature.mp4"
              loop
              muted
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-primary/5 blur-xl" />
        </motion.div>
      </div>
    </section>
  );
}

export function ImpactSection() {
  return (
    <>
      <MissionSection />

      {/* ---------- CERTIFICATION STRIP ---------- */}
      <section className="bg-cream border-y border-black/5 px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-end justify-center gap-14 gap-y-8 px-3 md:px-6">
          <div className="flex flex-col items-center justify-end gap-0 text-center">
            <Image
              src="/icons/edible.png"
              alt="100% Edible"
              width={256}
              height={256}
              className="h-28 w-28 object-contain md:h-[140px] md:w-[140px]"
            />
          </div>
          <div className="flex flex-col items-center justify-end gap-0 text-center">
            <Image
              src="/icons/recycleablePackaging.png"
              alt="Recyclable Packaging"
              width={256}
              height={256}
              className="ml-5 h-28 w-28 object-contain md:h-[140px] md:w-[140px]"
            />
          </div>
          <div className="flex flex-col items-center justify-end gap-0 text-center">
            <Image
              src="/icons/petroleum.png"
              alt="No Petroleum"
              width={256}
              height={256}
              className="ml-5 h-28 w-28 object-contain md:h-[140px] md:w-[140px]"
            />
          </div>
          <div className="flex flex-col items-center justify-end gap-0 text-center">
            <Image
              src="/icons/recycle.png"
              alt="Recyclable"
              width={256}
              height={256}
              className="h-28 w-28 object-contain md:h-[144px] md:w-[156px]"
            />
          </div>
          <div className="flex flex-col items-center justify-end gap-0 text-center">
            <Image
              src="/icons/biodegradable.png"
              alt="Biodegradable"
              width={256}
              height={256}
              className="h-28 w-28 object-cover md:h-[144px] md:w-[125px]"
            />
          </div>
          <div className="flex flex-col items-center justify-end gap-0 text-center">
            <Image
              src="/icons/foodSafe.png"
              alt="Food-Safe"
              width={256}
              height={256}
              className="h-28 w-28 object-cover md:h-[144px] md:w-[126px]"
            />
          </div>
        </div>
      </section>

      {/* ---------- IMPACT METRICS BAND ---------- */}
      <section id="impact" className="bg-moss relative scroll-mt-28 overflow-hidden px-6 py-24 md:py-32">
        <div className="relative mx-auto max-w-5xl text-center">
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-white/20" />
            <span className="font-body text-primary-light text-[12px] font-semibold tracking-[0.25em] uppercase">
              Our impact
            </span>
            <div className="h-px w-12 bg-white/20" />
          </div>

          <h3 className="font-display text-3xl font-bold text-white md:text-4xl">
            The metrics that tell our circular journey
          </h3>

          <div className="mt-16 grid items-start gap-10 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-white/10">
            {impactStats.map((m) => (
              <div key={m.label} className="flex flex-col items-center px-6">
                <p className="font-display text-5xl font-bold text-white md:text-6xl">
                  {m.value}
                </p>
                <p className="font-body mt-3 text-[13px] font-semibold text-white/50">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- FEATURE BENTO GALLERY ---------- */}
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
              className="group border-black/10 bg-white text-ink hover:border-primary hover:bg-primary hover:text-cream flex shrink-0 items-center gap-2 rounded-full border px-5 py-2.5 text-[13px] font-semibold transition-colors duration-300"
            >
              View gallery
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
            </Link>
          </div>

          <div
            className="grid auto-rows-45 grid-cols-3 gap-5 md:auto-rows-55"
            style={{ gridTemplateAreas: `"a b c" "a d d" "e f f"` }}
          >
            {featureCards.map((card) => (
              <div
                key={card.title}
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
                <div className="absolute bottom-0 left-0 p-5 md:p-6">
                  <p className="font-body text-[11px] font-semibold tracking-[0.14em] text-white/70 uppercase">
                    {card.subtitle}
                  </p>
                  <p className="font-display mt-1 text-base font-bold text-white md:text-xl">
                    {card.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
