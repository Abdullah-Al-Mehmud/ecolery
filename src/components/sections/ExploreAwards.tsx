"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

type Award = {
  year: string;
  title: string;
  image: string;
  /** Awarding body — optional short line under the title. */
  organization?: string;
};

// NOTE: images live in /public/awards/ — filenames match the award names.
// The FIRST item in this array is treated as the spotlight (full-width banner).
const awards: Award[] = [
  {
    year: "2026",
    title: "Rural Development Innovation Challenge Winner",
    image:
      "/awards/Winner, CIRDAP - Reeds International Rural Development Innovation Challenge 2026.png",
    organization: "CIRDAP - Reeds International",
  },
  {
    year: "2026",
    title: "National Cleantech Award",
    image: "/awards/recipientNationalCleantech.jpeg",
    organization: "UNIDO",
  },
  {
    year: "2025",
    title: "Generation Hope Goals Champion",
    image: "/awards/generationHopeGoals.jpeg",
    organization: "Generation Hope",
  },
  {
    year: "2025",
    title: "#Change100 Top Sustainability Startups",
    image: "/awards/change100.jpeg",
    organization: "#Change100",
  },
  {
    year: "2025",
    title: "Green Woman Entrepreneur Award",
    image: "/awards/Green_Woman_Entrepreneur_Award_2025.jpg",
  },
  {
    year: "2025",
    title: "Ideathon 3.0 Champion",
    image: "/awards/Champion, Ideathon 3.0, University of Asia Pacific (2025).png",
    organization: "University of Asia Pacific",
  },
  {
    year: "2023",
    title: "Orange Corners Bangladesh Hackathon Champion",
    image: "/awards/championOrangeCornersHackathon.jpg",
    organization: "Orange Corners Bangladesh",
  },
  {
    year: "2024",
    title: "Orange Corners Track-1 Funding",
    image: "/awards/Orange Corners Bangladesh Track-1 Funding (2024).png",
    organization: "Orange Corners Bangladesh",
  },
  {
    year: "2023",
    title: "Start Koro Season 4 Winner",
    image: "/awards/Start_Koro_Season_4_2023.jpg",
  },
  {
    year: "2024",
    title: "Daily Star Climate Justice Idea Champion",
    image: "/awards/Champion, Daily Star Climate Justice Idea Competition 2024.png",
    organization: "Daily Star",
  },
  {
    year: "2025",
    title: "OmniStart 1.0 Champion",
    image: "/awards/omnistartNationalStartup.jpg",
  },
  {
    year: "2025",
    title: "Green Entrepreneurship Bootcamp Winner",
    image: "/awards/greenEntrepreneurshipBootcamp.jpg",
  },
  {
    year: "2025",
    title: "ActionAid Feminist Green Action Award",
    image: "/awards/receipeintActionaidFeministGreen.jpg",
    organization: "ActionAid",
  },
  {
    year: "2025",
    title: "Showcasing Green Projects Runner-Up",
    image: "/awards/Runner-Up, Showcasing Green Projects, CPD Climate Week 2025.png",
    organization: "CPD Climate Week",
  },
  {
    year: "2024",
    title: "Top 3 Finalist, Global Student Entrepreneur Awards",
    image:
      "/awards/Top 3 Finalist, Global Student Entrepreneur Awards (GSEA) - Bangladesh 2024.png",
    organization: "GSEA Bangladesh",
  },
  {
    year: "2022",
    title: "BASIS National ICT Award",
    image: "/awards/Recipient, BASIS National ICT Award 2022.png",
    organization: "BASIS",
  },
];

const [spotlightAward, ...restAwards] = awards;

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

const spotlightVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

export function ExploreAwards() {
  const [selected, setSelected] = useState<Award | null>(null);

  const closeLightbox = useCallback(() => setSelected(null), []);

  useEffect(() => {
    if (selected === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selected, closeLightbox]);

  return (
    <section className="bg-cream px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Header — unchanged */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="grid gap-6 md:grid-cols-2 md:items-end">
            <div>
              <span className="font-body text-primary text-[13px] font-semibold tracking-[0.2em] uppercase">
                Awards &amp; recognition
              </span>
              <h1 className="font-fraunces text-ink mt-4 text-3xl leading-[1.1] font-semibold tracking-tight md:text-5xl">
                Recognition for the work behind <span className="text-primary-dark">the cup.</span>
              </h1>
            </div>
            <p className="font-body text-ink/80 text-[15px] leading-relaxed font-semibold md:mb-1 md:max-w-sm md:justify-self-end">
              From hackathon champions to national sustainability lists, a few of the milestones
              that keep the mission moving.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-10 flex items-center gap-3">
            <div className="bg-primary h-px w-8" />
            <p className="font-body text-primary text-[12px] font-semibold tracking-[0.14em] uppercase">
              {awards.length} awards · 2022 – 2026
            </p>
          </motion.div>
        </motion.div>

        {/* Spotlight — most recent/significant win, full-width photo banner */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={spotlightVariants}
          onClick={() => setSelected(spotlightAward)}
          className="group relative mt-14 aspect-[16/9] cursor-pointer overflow-hidden rounded-2xl sm:aspect-[21/9]"
        >
          <Image
            src={spotlightAward.image}
            alt={`${spotlightAward.title} award photo`}
            fill
            sizes="100vw"
            priority
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="from-ink/85 via-ink/15 absolute inset-0 bg-gradient-to-t to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-7 md:p-10">
            <span className="font-display text-cream text-xl font-bold tracking-tight">
              {spotlightAward.year}
            </span>
            <h3 className="font-fraunces text-cream mt-2 max-w-xl text-2xl leading-snug font-semibold md:text-4xl">
              {spotlightAward.title}
            </h3>
            {spotlightAward.organization && (
              <p className="font-body text-cream/75 mt-3 text-[14px] font-medium">
                {spotlightAward.organization}
              </p>
            )}
          </div>
        </motion.div>

        {/* Remaining awards — uniform photo grid, image top / details below */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {restAwards.map((award) => {
            const { year, title, image, organization } = award;

            return (
              <motion.div
                key={title}
                variants={itemVariants}
                onClick={() => setSelected(award)}
                className="bg-cream-2 group cursor-pointer overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={image}
                    alt={`${title} award photo`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <span className="font-display text-primary-dark text-[15px] font-bold tracking-tight">
                    {year}
                  </span>
                  <h3 className="font-fraunces text-ink mt-2 text-lg leading-snug font-semibold">
                    {title}
                  </h3>
                  {organization && (
                    <p className="font-body text-ink/60 mt-1 text-[13px] font-medium">
                      {organization}
                    </p>
                  )}
                  <div className="bg-primary/25 mt-5 h-px w-10 transition-all duration-300 group-hover:w-16" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <AnimatePresence>
        {selected !== null && (
          <>
            <motion.button
              key="awards-lightbox-backdrop"
              type="button"
              aria-label="Close preview"
              onClick={closeLightbox}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="bg-ink/80 fixed inset-0 z-[80]"
            />
            <motion.div
              key="awards-lightbox-content"
              role="dialog"
              aria-label="Award image preview"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: EASE }}
              onClick={(e) => {
                if (e.target === e.currentTarget) closeLightbox();
              }}
              className="fixed inset-0 z-[90] flex items-center justify-center p-4 md:p-8"
            >
              <button
                type="button"
                aria-label="Close preview"
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-[100] rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/20 md:top-6 md:right-6"
              >
                <X className="h-6 w-6" strokeWidth={1.75} />
              </button>

              <div className="relative h-full max-h-[80vh] w-full max-w-5xl">
                <Image
                  src={selected.image}
                  alt={`${selected.title} award photo`}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
                <p className="font-body text-[12px] font-semibold tracking-[0.14em] text-white uppercase">
                  {selected.title}
                  <span className="ml-3 text-white/50">{selected.year}</span>
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
