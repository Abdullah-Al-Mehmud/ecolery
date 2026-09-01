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

// The stacked (compact + mobile) image is a single cup, split
// horizontally: clear plastic on top, cork/ecolery below. Measured
// directly from the asset (960x1092px canvas): the color transition
// sits at y≈530px, i.e. 48.6% down from the top — NOT dead center.
// We lock the wrapper's aspect-ratio to the image's real ratio so
// object-contain never letterboxes it (which would throw the
// percentage-based offset off), then shift it up by exactly that
// 48.6% so the transition line lands on the section boundary.
const SPLIT_IMAGE_ASPECT = "960/1092";
const SPLIT_OFFSET = "48.6%";

export function ComparisonSection() {
  return (
    <section id="products" className="relative w-full scroll-mt-28 overflow-hidden">
      {/* ================= DESKTOP (md+) ================= */}
      <div className="hidden min-h-screen md:block">
        {/* ---- STANDARD: side-by-side, shown above 1026px ---- */}
        <div className="comparison-standard">
          <div className="absolute inset-0 grid md:grid-cols-2">
            <div style={{ background: "linear-gradient(180deg, #EDF0F1 0%, #DADFE1 100%)" }} />
            <div className="bg-moss" />
          </div>

          <span
            aria-hidden
            className="comparison-watermark font-display pointer-events-none absolute top-10 left-6 text-[6rem] leading-none font-bold whitespace-nowrap text-black/4 select-none md:text-[9rem]"
          >
            PLASTIC
          </span>
          <span
            aria-hidden
            className="comparison-watermark font-display pointer-events-none absolute top-10 right-6 text-[6rem] leading-none font-bold whitespace-nowrap text-white/6 select-none md:text-[9rem]"
          >
            ECOLERY
          </span>

          <div className="relative z-10 grid min-h-screen md:grid-cols-2">
            <div className="flex flex-col justify-center px-8 py-16 md:px-14">
              <span className="comparison-copy-label font-body text-[14px] font-semibold tracking-[0.22em] text-black/50 uppercase md:text-[15px]">
                The old way
              </span>
              <h2 className="comparison-copy-heading font-display mt-4 text-[2.15rem] font-bold tracking-tight text-black/80 md:text-5xl lg:text-[3.5rem]">
                Why not plastic.
              </h2>
              <ul className="comparison-copy-list mt-8 space-y-5 md:space-y-6">
                {plasticReasons.map((reason) => (
                  <li key={reason} className="flex items-start gap-3">
                    <X
                      className="comparison-copy-icon mt-1 h-5 w-5 shrink-0 text-black/40 md:h-6 md:w-6"
                      strokeWidth={2.5}
                    />
                    <span className="comparison-copy-item font-body text-[15px] leading-relaxed font-semibold text-black/60 md:text-[18px]">
                      {reason}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col justify-center px-8 py-16 md:items-end md:px-14 md:text-right">
              <span className="comparison-copy-label font-body text-[14px] font-semibold tracking-[0.22em] text-white/60 uppercase md:text-[15px]">
                The Ecolery way
              </span>
              <h2 className="comparison-copy-heading font-display mt-4 text-[2.15rem] font-bold tracking-tight text-white md:text-5xl lg:text-[3.5rem]">
                Why Ecolery.
              </h2>
              <ul className="comparison-copy-list mt-8 space-y-5 md:space-y-6">
                {ecoleryReasons.map((reason) => (
                  <li key={reason} className="flex items-start gap-3 md:flex-row-reverse">
                    <Check
                      className="comparison-copy-icon mt-1 h-5 w-5 shrink-0 text-white md:h-6 md:w-6"
                      strokeWidth={2.5}
                    />
                    <span className="comparison-copy-item font-body text-[15px] leading-relaxed font-semibold text-white/85 md:text-[18px]">
                      {reason}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Unchanged: this is the wide, two-cups-side-by-side image,
              centered on the vertical divider. Only the stacked
              layouts below switch to the new split-cup asset. */}
          <div className="comparison-hero-wrapper pointer-events-none absolute bottom-16 z-20 h-[78%] w-[80%] max-w-6xl">
            <Image
              src="/plastic-ecolery.png"
              alt="Plastic cup versus Ecolery edible cup"
              fill
              priority
              sizes="(min-width: 1027px) 80vw, 0px"
              className="object-contain object-bottom"
            />
          </div>

          <div
            aria-hidden
            className="pointer-events-none absolute top-0 bottom-0 left-1/2 z-10 w-px -translate-x-1/2 bg-white/30"
          />
        </div>

        {/* ---- COMPACT: stacked like mobile, shown only 768px–1026px ---- */}
        <div className="comparison-compact">
          <div className="relative overflow-x-hidden">
            <div
              className="relative px-10 pt-16 pb-32"
              style={{ background: "linear-gradient(180deg, #EDF0F1 0%, #DADFE1 100%)" }}
            >
              <span
                aria-hidden
                className="font-display pointer-events-none absolute -top-3 left-8 text-[5.5rem] leading-none font-bold whitespace-nowrap text-black/5 select-none"
              >
                PLASTIC
              </span>
              <div className="relative z-10">
                <span className="font-body text-[13px] font-semibold tracking-[0.22em] text-black/50 uppercase sm:text-[14px]">
                  The old way
                </span>
                <h2 className="font-display mt-3 text-[2rem] font-bold tracking-tight text-black/80 sm:text-[2.25rem]">
                  Why not plastic.
                </h2>
                <ul className="mt-6 max-w-xl space-y-4 sm:space-y-4.5">
                  {plasticReasons.map((reason) => (
                    <li key={reason} className="flex items-start gap-3">
                      <X className="mt-1 h-5 w-5 shrink-0 text-black/40" strokeWidth={2.5} />
                      <span className="font-body text-[15px] leading-relaxed font-semibold text-black/60 sm:text-[16px]">
                        {reason}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="comparison-compact-moss bg-moss relative px-10 pt-2 pb-12">
              <div className="comparison-compact-image-2 pointer-events-none absolute top-0 z-30">
                <Image
                  src="/plastic-ecolery2.png"
                  alt="Plastic cup versus Ecolery edible cup"
                  fill
                  priority
                  sizes="(min-width: 768px) and (max-width: 1026px) 400px, 0px"
                  className="object-contain"
                />
              </div>

              <span
                aria-hidden
                className="font-display pointer-events-none absolute right-8 -bottom-5 text-[5.5rem] leading-none font-bold whitespace-nowrap text-white/6 select-none"
              >
                ECOLERY
              </span>
              <div className="comparison-compact-content relative z-10 -mt-6">
                <span className="font-body text-[13px] font-semibold tracking-[0.22em] text-white/60 uppercase sm:text-[14px]">
                  The Ecolery way
                </span>
                <h2 className="font-display mt-3 text-[2rem] font-bold tracking-tight text-white sm:text-[2.25rem]">
                  Why Ecolery.
                </h2>
                <ul className="mt-6 max-w-xl space-y-4 sm:space-y-4.5">
                  {ecoleryReasons.map((reason) => (
                    <li key={reason} className="flex items-start gap-3">
                      <Check className="mt-1 h-5 w-5 shrink-0 text-white" strokeWidth={2.5} />
                      <span className="font-body text-[15px] leading-relaxed font-semibold text-white/85 sm:text-[16px]">
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
          /* Compact block is hidden by default — only turned on ≤1026px */
          .comparison-compact {
            display: none;
          }

          /* Locked to the image's real aspect ratio (960:1092) */
          .comparison-compact-image-2 {
            position: relative;
            height: 52vw;
            max-height: 400px;
            min-height: 280px;
            max-width: 100%;
            aspect-ratio: ${SPLIT_IMAGE_ASPECT};
            left: 78%;
            transform: translate(-78%, -${SPLIT_OFFSET});
          }

          /* ===== DESKTOP SIDE-BY-SIDE (1027px and above) ===== */

          .comparison-standard .comparison-hero-wrapper {
            left: 50%;
            transform: translateX(-50%);
          }

          .comparison-standard .comparison-copy-list {
            max-width: 32rem;
          }

          /* Fluid desktop scaling from 1443px down to 1027px */
          @media (max-width: 1443px) and (min-width: 1027px) {
            .comparison-standard .comparison-copy-label {
              font-size: clamp(0.75rem, 0.45vw + 0.5rem, 0.9rem);
            }

            .comparison-standard .comparison-copy-heading {
              font-size: clamp(1.75rem, 1.8vw + 0.6rem, 3.1rem);
            }

            .comparison-standard .comparison-copy-item {
              font-size: clamp(0.825rem, 0.38vw + 0.6rem, 1.04rem);
            }

            .comparison-standard .comparison-copy-icon {
              width: clamp(0.95rem, 0.4vw + 0.6rem, 1.35rem);
              height: clamp(0.95rem, 0.4vw + 0.6rem, 1.35rem);
            }

            .comparison-watermark {
              font-size: clamp(4rem, 4.5vw, 6.8rem);
            }
          }

          /* 1250px down to 1128px: smooth transition for side-by-side standard */
          @media (max-width: 1250px) and (min-width: 1128px) {
            .comparison-standard .comparison-copy-list {
              max-width: 340px !important;
            }

            .comparison-standard .comparison-hero-wrapper {
              width: clamp(380px, 40vw, 500px);
              height: clamp(420px, 48vw, 560px);
              bottom: clamp(4.5rem, 5.5vw, 7rem);
              left: 50%;
              transform: translateX(-50%);
            }

            .comparison-standard .comparison-copy-heading {
              font-size: clamp(1.9rem, 2vw + 0.5rem, 2.75rem);
            }

            .comparison-standard .comparison-copy-item {
              font-size: clamp(0.85rem, 0.35vw + 0.6rem, 1rem);
            }
          }

          /* 1127px down to 1027px: side-by-side layout with centered split line & compact text */
          @media (max-width: 1127px) and (min-width: 1027px) {
            .comparison-standard .relative.z-10 > div:first-child {
              padding-left: 2rem !important;
              padding-right: 0.5rem !important;
            }

            .comparison-standard .relative.z-10 > div:last-child {
              padding-right: 2rem !important;
              padding-left: 0.5rem !important;
            }

            .comparison-standard .comparison-copy-label {
              font-size: 0.75rem;
              letter-spacing: 0.2em;
            }

            .comparison-standard .comparison-copy-heading {
              font-size: clamp(1.5rem, 1.6vw + 0.5rem, 2.1rem);
            }

            .comparison-standard .comparison-copy-item {
              font-size: 0.8rem;
              line-height: 1.35;
            }

            .comparison-standard .comparison-copy-icon {
              width: 0.95rem;
              height: 0.95rem;
              margin-top: 0.15rem;
            }

            .comparison-standard .comparison-copy-list {
              max-width: 235px !important;
              margin-top: 1rem;
            }

            .comparison-standard .comparison-copy-list > :not([hidden]) ~ :not([hidden]) {
              margin-top: 0.65rem;
            }

            .comparison-standard .comparison-hero-wrapper {
              width: clamp(310px, 32vw, 370px);
              height: clamp(340px, 40vw, 420px);
              bottom: clamp(6.5rem, 8vw, 9.5rem);
              left: 50%;
              transform: translateX(-50%);
            }

            .comparison-watermark {
              font-size: 4rem;
            }
          }

          /* ===== STACKED COMPACT VIEW (1026px down to 768px) ===== */
          @media (max-width: 1026px) {
            .comparison-standard {
              display: none;
            }
            .comparison-compact {
              display: block;
              overflow-x: hidden;
            }

            .comparison-compact .max-w-xl {
              max-width: clamp(300px, 38vw, 400px) !important;
            }

            .comparison-compact-moss {
              padding-bottom: 2.5rem;
            }

            /* Image: starts BIG (~420px at 1026px) and scales down
               fluidly to ~280px at 768px. The 54vw base grows/shrinks
               with the viewport for a smooth transition. */
            .comparison-compact-image-2 {
              left: 68%;
              width: clamp(280px, 54vw, 420px);
              height: auto;
              transform: translate(-68%, -${SPLIT_OFFSET}) !important;
            }

            .comparison-compact-content {
              margin-top: -2.5rem;
            }
          }
        `}</style>
      </div>

      {/* ================= MOBILE (< md) ================= */}
      <div className="md:hidden">
        <div className="relative overflow-x-hidden">
          <div
            className="relative px-6 pt-14 pb-28"
            style={{ background: "linear-gradient(180deg, #EDF0F1 0%, #DADFE1 100%)" }}
          >
            <span
              aria-hidden
              className="font-display pointer-events-none absolute -top-2 left-4 text-[4.5rem] leading-none font-bold whitespace-nowrap text-black/5 select-none"
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
            {/* Split-cup image. Anchored at left:64% by default; the
                media queries below in <style jsx> push it further
                right as the viewport narrows (≤550px), since a
                single fixed anchor can't stay correct across the
                whole 320px–767px range once the image starts eating
                into the text column. */}
            <div
              className="mobile-split-image pointer-events-none absolute top-0 left-[64%] z-30 aspect-960/1092 h-[46vw] max-h-60 min-h-47.5 -translate-x-1/2"
              style={{ transform: `translate(-50%, -${SPLIT_OFFSET})` }}
            >
              <Image
                src="/plastic-ecolery2.png"
                alt="Plastic cup versus Ecolery edible cup"
                fill
                priority
                sizes="(max-width: 767px) 240px, 0px"
                className="object-contain"
              />
            </div>

            <span
              aria-hidden
              className="font-display pointer-events-none absolute right-4 -bottom-4 text-[4.5rem] leading-none font-bold whitespace-nowrap text-white/6 select-none"
            >
              ECOLERY
            </span>
            <div className="mobile-ecolery-content relative z-10">
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

        <style jsx>{`
          /* ≤550px: shift the split-cup image further right so it
             clears the "Why Ecolery" heading/list at narrower widths */
          @media (max-width: 550px) {
            .mobile-split-image {
              left: 74%;
            }
          }

          /* ≤464px: push the text block down a bit so it doesn't
             collide with the image above it on the smallest phones */
          @media (max-width: 464px) {
            .mobile-ecolery-content {
              margin-top: 1.5rem;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
