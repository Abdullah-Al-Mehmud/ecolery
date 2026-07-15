"use client";

import { Ban, Leaf, Recycle, ShieldCheck, Sprout } from "lucide-react";
import Image from "next/image";

const certifications = [
  { icon: Leaf, label: "100% Edible" },
  { icon: Recycle, label: "Recyclable Packaging" },
  { icon: Ban, label: "No Petroleum" },
  { icon: Recycle, label: "Recyclable" },
  { icon: Sprout, label: "Biodegradable" },
  { icon: ShieldCheck, label: "Food-Safe" },
];

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
    image: "/feature-hotbrew.jpg",
    title: "Built-in spout",
    subtitle: "Hot brews",
    span: "md:col-span-2",
  },
  {
    image: "/feature-coldrink.jpg",
    title: "Fits any straw",
    subtitle: "Cold drinks",
    span: "md:col-span-1",
  },
  {
    image: "/feature-foodtogo.jpg",
    title: "Perfect for food to go",
    subtitle: "On-the-move meals",
    span: "md:col-span-1",
  },
];

export function ImpactSection() {
  return (
    <>
      {/* ---------- ABOUT / MISSION ---------- */}
      <section className="bg-cream relative overflow-hidden px-6 py-24 md:py-32">
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
              pollution and inspire a zero-waste future — designed for everyday dining, built to
              disappear responsibly.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6 border-t border-black/5 pt-8 sm:max-w-sm">
              <div>
                <p className="font-display text-ink text-3xl font-bold">2019</p>
                <p className="font-body mt-1 text-[13px] font-semibold text-gray-600">
                  Patent filed
                </p>
              </div>
              <div>
                <p className="font-display text-ink text-3xl font-bold">100%</p>
                <p className="font-body mt-1 text-[13px] font-semibold text-gray-600">
                  Compostable design
                </p>
              </div>
            </div>
          </div>

          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem]">
            <Image
              src="/mission-cup.jpg"
              alt="Ecolery edible cup in use"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ---------- CERTIFICATION STRIP ---------- */}
      <section className="bg-cream border-y border-black/5 px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-y-8">
          {certifications.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex min-w-[140px] flex-1 flex-col items-center gap-2 text-center"
            >
              <Icon className="text-primary h-6 w-6" strokeWidth={1.75} />
              <span className="font-body text-ink text-[13px] font-bold">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- IMPACT METRICS BAND ---------- */}
      <section className="bg-moss relative overflow-hidden px-6 py-20">
        <span
          aria-hidden
          className="font-display pointer-events-none absolute -right-10 -bottom-10 text-[9rem] leading-none font-bold whitespace-nowrap text-white/[0.04] select-none"
        >
          circular
        </span>

        <div className="relative mx-auto max-w-6xl">
          <h3 className="font-display text-center text-2xl font-bold text-white md:text-3xl">
            The metrics that tell our circular journey
          </h3>

          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-2xl border border-white/10 bg-white/[0.06] px-8 py-10 text-center backdrop-blur-sm"
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
                <p className="font-body text-ink mt-2 text-[14px] font-semibold text-gray-600">
                  {s.label}
                </p>
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

          <div className="grid gap-5 md:grid-cols-3">
            {featureCards.map((card) => (
              <div
                key={card.title}
                className={`group relative aspect-[4/3] overflow-hidden rounded-3xl ${card.span}`}
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="from-ink/80 absolute inset-0 bg-gradient-to-t via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <p className="font-body text-[12px] font-semibold tracking-[0.14em] text-white/70 uppercase">
                    {card.subtitle}
                  </p>
                  <p className="font-display mt-1 text-xl font-bold text-white md:text-2xl">
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
