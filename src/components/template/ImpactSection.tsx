"use client";

import Image from "next/image";
import { useState, type ComponentProps } from "react";

function ImageWithFallback(props: ComponentProps<typeof Image> & { fallbackLabel?: string }) {
  const { fallbackLabel, className, alt, ...rest } = props;
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className={`bg-moss/10 flex items-center justify-center ${className ?? ""}`}>
        {fallbackLabel && (
          <span className="font-body text-moss/40 text-xs font-semibold tracking-wider uppercase">
            {fallbackLabel}
          </span>
        )}
      </div>
    );
  }

  return <Image {...rest} alt={alt ?? ""} className={className} onError={() => setError(true)} />;
}

const metrics = [
  { value: "180", unit: "days", label: "Decomposition cycle in soil" },
  { value: "100%", unit: "", label: "Compostable materials used" },
  { value: "5.5", unit: "kgs", label: "CFP reduced per kg of Ecovia bags" },
];

const impactStats = [
  { value: "160,000+", label: "Plastic Cups Replaced" },
  { value: "962+", label: "Orders Delivered" },
  { value: "1,500+", label: "Children Educated on Sustainability" },
];

const featureCards = [
  {
    image: "https://picsum.photos/seed/ecolery-hotbrew/1000/1000",
    title: "Built-in spout",
    subtitle: "Hot brews",
    area: "a",
    fallback: "Hot brew cup",
  },
  {
    image: "https://picsum.photos/seed/ecolery-coldrink/600/600",
    title: "Fits any straw",
    subtitle: "Cold drinks",
    area: "b",
    fallback: "Cold drink cup",
  },
  {
    image: "https://picsum.photos/seed/ecolery-foodtogo/600/600",
    title: "Perfect for food to go",
    subtitle: "On-the-move meals",
    area: "c",
    fallback: "Food to-go container",
  },
  {
    image: "https://picsum.photos/seed/ecolery-edible/1200/600",
    title: "100% edible finish",
    subtitle: "Zero waste after use",
    area: "d",
    fallback: "Edible cup finish",
  },
  {
    image: "https://picsum.photos/seed/ecolery-compost/600/600",
    title: "Compostable in 180 days",
    subtitle: "Soil-safe design",
    area: "e",
    fallback: "Compostable cup",
  },
  {
    image: "https://picsum.photos/seed/ecolery-events/1200/600",
    title: "Loved at events",
    subtitle: "Cafés, parties & more",
    area: "f",
    fallback: "Cup at events",
  },
];

export function ImpactSection() {
  return (
    <>
      {/* ---------- ABOUT / MISSION ---------- */}
      <section
        id="about"
        className="bg-cream relative scroll-mt-28 overflow-hidden px-6 py-24 md:py-32"
      >
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2">
          <div>
            <span className="font-body text-primary text-[13px] font-semibold tracking-[0.2em] uppercase">
              Our mission
            </span>
            <h2 className="font-display text-ink mt-4 text-4xl leading-[1.1] font-bold tracking-tight md:text-5xl">
              Eat the cup.
              <br />
              <span className="text-primary-dark">Eliminate the waste.</span>
            </h2>
            <p className="font-body mt-6 max-w-md text-[15px] leading-relaxed font-semibold text-gray-600">
              Ecolery is redefining sustainability with edible products that help reduce plastic
              pollution and inspire a zero-waste future, designed for everyday dining, built to
              disappear responsibly.
            </p>
          </div>

          <div className="relative aspect-4/5 w-full overflow-hidden rounded-4xl">
            <ImageWithFallback
              src="/cup.png"
              alt="Ecolery edible cup in use"
              fill
              className="object-cover"
              fallbackLabel="Ecolery Cup"
            />
          </div>
        </div>
      </section>

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
      <section id="impact" className="bg-moss relative scroll-mt-28 overflow-hidden px-6 py-20">
        <div className="relative mx-auto max-w-6xl">
          <h3 className="font-display text-center text-2xl font-bold text-white md:text-3xl">
            The metrics that tell our circular journey
          </h3>

          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-2xl bg-white/6 px-8 py-10 text-center backdrop-blur-sm"
              >
                <p className="font-display text-4xl font-bold text-white md:text-5xl">
                  {m.value}
                  {m.unit && (
                    <span className="ml-1 text-xl font-semibold text-white/70">{m.unit}</span>
                  )}
                </p>
                <p className="font-body mt-3 text-[13px] font-semibold text-white/70">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- STATS / PLASTIC-FREE FUTURE ---------- */}
      <section className="bg-cream px-6 py-24">
        <div className="mx-auto max-w-6xl text-center">
          <h3 className="font-display text-ink text-3xl font-bold tracking-tight md:text-4xl">
            Building a <span className="text-primary-dark">plastic-free future</span>, one cup at a
            time
          </h3>

          <div className="mt-14 grid gap-10 sm:grid-cols-3">
            {impactStats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-primary-dark text-4xl font-bold md:text-5xl">
                  {s.value}
                </p>
                <p className="font-body mt-2 text-[14px] font-semibold text-gray-600">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- FEATURE BENTO GALLERY ---------- */}
      <section className="bg-cream px-6 pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex items-end justify-between">
            <h3 className="font-display text-ink text-3xl font-bold tracking-tight md:text-4xl">
              Made for every sip
              <br />
              <span className="text-primary-dark">and every bite.</span>
            </h3>
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
