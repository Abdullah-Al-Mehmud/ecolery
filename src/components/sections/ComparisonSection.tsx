"use client";
import { Check, X } from "lucide-react";
import Image from "next/image";

const plasticReasons = [
  "Takes 400+ years to decompose",
  "Leaches microplastics into food and drinks",
  "Ends up in landfills and oceans",
  "Made from non-renewable petroleum",
];
const ecoleryReasons = [
  "Fully compostable in 180 days",
  "100% edible, food-safe ingredients",
  "Zero waste left behind after use",
  "No petroleum, no plastic, ever",
];

export function ComparisonSection() {
  return (
    <section id="products" className="relative w-full scroll-mt-28 overflow-hidden">
      {/* ================= DESKTOP (md+) ================= */}
      <div className="hidden min-h-screen md:block">
        {/* ---- STANDARD: side-by-side, shown above 1129px ---- */}
        <div className="comparison-standard">
          <div className="absolute inset-0 grid md:grid-cols-2">
            <div style={{ background: "linear-gradient(180deg, #EDF0F1 0%, #DADFE1 100%)" }} />
            <div className="bg-moss" />
          </div>

          <span
            aria-hidden
            className="comparison-watermark font-display pointer-events-none absolute top-10 left-6 text-[6rem] leading-none font-bold whitespace-nowrap text-black/[0.04] select-none md:text-[9rem]"
          >
            PLASTIC
          </span>
          <span
            aria-hidden
            className="comparison-watermark font-display pointer-events-none absolute top-10 right-6 text-[6rem] leading-none font-bold whitespace-nowrap text-white/[0.06] select-none md:text-[9rem]"
          >
            ECOLERY
          </span>

          <div className="relative z-10 grid min-h-screen md:grid-cols-2">
            <div className="flex flex-col justify-center px-8 py-16 md:px-14">
              <span className="font-body text-[13px] font-semibold tracking-[0.2em] text-black/50 uppercase">
                The old way
              </span>
              <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-black/80 md:text-4xl">
                Why not plastic.
              </h2>
              <ul className="mt-8 space-y-4">
                {plasticReasons.map((reason) => (
                  <li key={reason} className="flex items-start gap-3">
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-black/40" strokeWidth={2.5} />
                    <span className="font-body text-[14px] font-semibold text-black/60">
                      {reason}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col justify-center px-8 py-16 md:items-end md:px-14 md:text-right">
              <span className="font-body text-[13px] font-semibold tracking-[0.2em] text-white/60 uppercase">
                The Ecolery way
              </span>
              <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
                Why Ecolery.
              </h2>
              <ul className="mt-8 space-y-4">
                {ecoleryReasons.map((reason) => (
                  <li key={reason} className="flex items-start gap-3 md:flex-row-reverse">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-white" strokeWidth={2.5} />
                    <span className="font-body text-[14px] font-semibold text-white/85">
                      {reason}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pointer-events-none absolute bottom-16 left-1/2 z-20 h-[78%] w-[80%] max-w-6xl -translate-x-1/2">
            <Image
              src="/plastic-ecolery.png"
              alt="Plastic cup versus Ecolery edible cup"
              fill
              className="object-contain object-bottom"
            />
          </div>

          <div
            aria-hidden
            className="pointer-events-none absolute top-0 bottom-0 left-1/2 z-10 w-px -translate-x-1/2 bg-white/30"
          />
        </div>

        {/* ---- COMPACT: stacked like mobile, shown only 768px–1129px ---- */}
        <div className="comparison-compact">
          <div className="relative overflow-x-hidden">
            <div
              className="relative px-10 pt-16 pb-32"
              style={{ background: "linear-gradient(180deg, #EDF0F1 0%, #DADFE1 100%)" }}
            >
              <span
                aria-hidden
                className="font-display pointer-events-none absolute -top-3 left-8 text-[5.5rem] leading-none font-bold whitespace-nowrap text-black/[0.05] select-none"
              >
                PLASTIC
              </span>
              <div className="relative z-10">
                <span className="font-body text-[13px] font-semibold tracking-[0.2em] text-black/50 uppercase">
                  The old way
                </span>
                <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-black/80">
                  Why not plastic.
                </h2>
                <ul className="mt-6 space-y-3.5">
                  {plasticReasons.map((reason) => (
                    <li key={reason} className="flex items-start gap-3">
                      <X className="mt-0.5 h-4 w-4 shrink-0 text-black/40" strokeWidth={2.5} />
                      <span className="font-body text-[14px] font-semibold text-black/60">
                        {reason}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-moss relative px-10 pt-2 pb-12">
              <div className="comparison-compact-image pointer-events-none absolute top-0 left-1/2 z-30 -translate-x-1/2 -translate-y-1/2">
                <Image
                  src="/plastic-ecolery.png"
                  alt="Plastic cup versus Ecolery edible cup"
                  fill
                  className="object-contain"
                />
              </div>

              <span
                aria-hidden
                className="font-display pointer-events-none absolute right-8 -bottom-5 text-[5.5rem] leading-none font-bold whitespace-nowrap text-white/[0.06] select-none"
              >
                ECOLERY
              </span>
              <div className="relative z-10 -mt-6">
                <span className="font-body text-[13px] font-semibold tracking-[0.2em] text-white/60 uppercase">
                  The Ecolery way
                </span>
                <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-white">
                  Why Ecolery.
                </h2>
                <ul className="mt-6 space-y-3.5">
                  {ecoleryReasons.map((reason) => (
                    <li key={reason} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-white" strokeWidth={2.5} />
                      <span className="font-body text-[14px] font-semibold text-white/85">
                        {reason}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          /* Compact block is hidden by default — only turned on ≤1129px */
          .comparison-compact {
            display: none;
          }
          .comparison-compact-image {
            position: relative;
            height: 52vw;
            max-height: 400px;
            min-height: 300px;
            width: 58%;
            max-width: 560px;
          }

          /* Tier 1: shrink the watermark text on the standard layout,
             active from 1129px up to 1406px (compact takes over below) */
          @media (max-width: 1406px) {
            .comparison-watermark {
              font-size: 7rem;
            }
          }

          /* Tier 2: 1129px and below — switch from side-by-side
             to the stacked mobile-style layout entirely */
          @media (max-width: 1129px) {
            .comparison-standard {
              display: none;
            }
            .comparison-compact {
              display: block;
            }
          }
        `}</style>
      </div>

      {/* ================= MOBILE (< md) — unchanged ================= */}
      <div className="md:hidden">
        <div className="relative overflow-x-hidden">
          <div
            className="relative px-6 pt-14 pb-28"
            style={{ background: "linear-gradient(180deg, #EDF0F1 0%, #DADFE1 100%)" }}
          >
            <span
              aria-hidden
              className="font-display pointer-events-none absolute -top-2 left-4 text-[4.5rem] leading-none font-bold whitespace-nowrap text-black/[0.05] select-none"
            >
              PLASTIC
            </span>
            <div className="relative z-10">
              <span className="font-body text-[12px] font-semibold tracking-[0.2em] text-black/50 uppercase">
                The old way
              </span>
              <h2 className="font-display mt-3 text-2xl font-bold tracking-tight text-black/80">
                Why not plastic.
              </h2>
              <ul className="mt-6 space-y-3.5">
                {plasticReasons.map((reason) => (
                  <li key={reason} className="flex items-start gap-3">
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-black/40" strokeWidth={2.5} />
                    <span className="font-body text-[14px] font-semibold text-black/60">
                      {reason}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-moss relative px-6 pt-20 pb-14">
            <div className="pointer-events-none absolute top-0 left-1/2 z-30 h-[46vw] max-h-[240px] min-h-[190px] w-[52%] max-w-[260px] -translate-x-1/2 -translate-y-1/2">
              <Image
                src="/plastic-ecolery.png"
                alt="Plastic cup versus Ecolery edible cup"
                fill
                className="object-contain"
              />
            </div>

            <span
              aria-hidden
              className="font-display pointer-events-none absolute right-4 -bottom-4 text-[4.5rem] leading-none font-bold whitespace-nowrap text-white/[0.06] select-none"
            >
              ECOLERY
            </span>
            <div className="relative z-10">
              <span className="font-body text-[12px] font-semibold tracking-[0.2em] text-white/60 uppercase">
                The Ecolery way
              </span>
              <h2 className="font-display mt-3 text-2xl font-bold tracking-tight text-white">
                Why Ecolery.
              </h2>
              <ul className="mt-6 space-y-3.5">
                {ecoleryReasons.map((reason) => (
                  <li key={reason} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-white" strokeWidth={2.5} />
                    <span className="font-body text-[14px] font-semibold text-white/85">
                      {reason}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
