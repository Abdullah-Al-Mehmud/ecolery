"use client";

import Image from "next/image";

export function Hero() {
  return (
    <section className="hero-section bg-cream relative overflow-hidden">
      <div
        aria-hidden
        className="hero-glow bg-primary/20 pointer-events-none absolute left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px]"
      />

      <div className="hero-text relative z-40 flex flex-col items-center px-6 text-center">
        <h1 className="hero-heading font-display font-bold tracking-tight text-gray-900">
          Eat, Re-eat <span className="text-primary-dark">and Forget.</span>
        </h1>

        <p className="hero-paragraph mt-5 font-semibold text-gray-600">
          Sustainability you can taste. Ecolery designs innovative edible and eco-friendly products
          that replace single-use plastics while creating lasting environmental and social impact.
        </p>
      </div>

      <div className="hero-cup absolute left-1/2 -translate-x-1/2">
        <Image
          src="/cup2.png"
          alt="Ecolery cork-pressed compostable cup"
          width={900}
          height={1000}
          className="h-auto w-full object-contain"
          priority
        />
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-[35%] bg-gradient-to-t from-white/25 via-white/10 to-transparent md:h-[50%]"
      />

      <style jsx>{`
        .hero-section {
          min-height: clamp(560px, 62vw, 980px);
        }
        .hero-glow {
          top: 34%;
          width: clamp(240px, 22vw, 420px);
          height: clamp(240px, 22vw, 420px);
        }
        .hero-text {
          padding-top: clamp(56px, 8vw, 130px);
        }
        .hero-heading {
          font-size: clamp(1.9rem, 4.2vw, 4.5rem);
          line-height: 1.08;
        }
        .hero-paragraph {
          max-width: clamp(280px, 42vw, 560px);
          font-size: clamp(0.85rem, 1vw, 1rem);
          line-height: 1.6;
        }
        .hero-cup {
          bottom: clamp(-150px, -9vw, -36px);
          width: clamp(260px, 46vw, 780px);
        }

        /* Mid-device band: 641px–1024px.
     Push text down progressively as we head toward mobile,
     cup stays stuck to bottom with a proportionate negative offset. */
        @media (max-width: 1024px) {
          .hero-section {
            min-height: 680px;
          }
          .hero-text {
            padding-top: 96px;
          }
          .hero-cup {
            width: 52vw;
            bottom: -60px;
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            min-height: 640px;
          }
          .hero-text {
            padding-top: 110px;
          }
          .hero-cup {
            width: 60vw;
            bottom: -45px;
          }
        }

        /* Mobile override band: 0–640px. Text sits even lower,
     cup pinned near the bottom edge, slightly hanging under it. */
        @media (max-width: 640px) {
          .hero-section {
            min-height: 620px;
          }
          .hero-text {
            padding-top: 130px;
          }
          .hero-cup {
            width: 340px;
            bottom: -55px;
          }
        }

        @media (max-width: 400px) {
          .hero-text {
            padding-top: 120px;
          }
          .hero-cup {
            width: 300px;
            bottom: -45px;
          }
        }
      `}</style>
    </section>
  );
}
