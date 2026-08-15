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
        {/* ---- STANDARD: side-by-side, shown above 1129px ---- */}
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
              <ul className="comparison-copy-list mt-8 max-w-xl space-y-5 md:space-y-6">
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
              <ul className="comparison-copy-list mt-8 max-w-xl space-y-5 md:space-y-6">
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
          <div className="comparison-hero-wrapper pointer-events-none absolute bottom-16 left-1/2 z-20 h-[78%] w-[80%] max-w-6xl -translate-x-1/2">
            <Image
              src="/plastic-ecolery.png"
              alt="Plastic cup versus Ecolery edible cup"
              fill
              priority
              sizes="(min-width: 1130px) 80vw, 0px"
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
              {/* Split-cup image: internal plastic/ecolery transition
                  line is aligned to sit exactly on this section
                  boundary (top:0 of the moss block), via a translateY
                  of the measured split offset instead of a generic
                  -50%. FIX: this was pointing at the non-existent file
                  "/plastic-ecolery-2.png" (extra hyphen) — now uses
                  the same real asset as the mobile layout below. */}
              <div
                className="comparison-compact-image-2 pointer-events-none absolute top-0 left-1/2 z-30 -translate-x-1/2"
                style={{ transform: `translate(-50%, -${SPLIT_OFFSET})` }}
              >
                <Image
                  src="/plastic-ecolery2.png"
                  alt="Plastic cup versus Ecolery edible cup"
                  fill
                  priority
                  sizes="(min-width: 768px) and (max-width: 1129px) 400px, 0px"
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
          /* Compact block is hidden by default — only turned on ≤1129px */
          .comparison-compact {
            display: none;
          }

          /* Locked to the image's real aspect ratio (960:1092) so
             object-contain never letterboxes it — if it did, the
             translateY split-offset above would be measured against
             empty padding instead of the actual artwork. */
          .comparison-compact-image-2 {
            position: relative;
            height: 52vw;
            max-height: 400px;
            min-height: 300px;
            max-width: 100%;
            aspect-ratio: ${SPLIT_IMAGE_ASPECT};
          }

          @media (max-width: 1129px) {
            .comparison-compact {
              overflow-x: hidden;
            }

            .comparison-compact-moss {
              padding-bottom: 2.5rem;
            }

            .comparison-compact-image-2 {
              left: 58%;
              width: min(92vw, 370px);
              height: clamp(240px, 35vw, 310px);
              transform: translate(-58%, -${SPLIT_OFFSET}) !important;
            }

            .comparison-compact-content {
              margin-top: -3.25rem;
            }
          }

          /* Sub-tier within compact (1023px–1126px): at this width the
             52vw height rule makes the image wider than the padded
             container can hold, which was pushing the page into
             horizontal scroll. Cap it explicitly, shift it right, and
             pull the text block up to close the resulting gap. */
          @media (max-width: 1126px) and (min-width: 1023px) {
            .comparison-compact-image-2 {
              height: 36vw;
              max-height: 300px;
              min-height: 250px;
              left: 59%;
            }
            .comparison-compact-content {
              margin-top: -3rem;
            }
          }

          /* From 1105px down, push the compact split-cup further right
             and make it larger. The height still scales down smoothly as
             the viewport shrinks, while the content is pulled up to remove
             the empty green gap below the image. */
          @media (max-width: 1105px) and (min-width: 1023px) {
            .comparison-compact-image-2 {
              left: 66%;
              width: clamp(350px, 39vw, 455px);
              height: auto;
            }

            .comparison-compact-content {
              margin-top: -5rem;
            }

            .comparison-compact-moss {
              padding-top: 0;
              padding-bottom: 2rem;
            }
          }

          /* Fluid desktop scaling from 1443px down to 1128px. This keeps
             the comparison copy and image shrinking gradually instead of
             jumping at a single breakpoint, and starts the reduction
             earlier so the plastic-side list doesn't run under the image. */
          @media (max-width: 1443px) and (min-width: 1129px) {
            .comparison-standard .comparison-copy-label {
              font-size: clamp(0.8rem, 0.45vw + 0.56rem, 0.9rem);
            }

            .comparison-standard .comparison-copy-heading {
              font-size: clamp(1.9rem, 2vw + 0.7rem, 3.1rem);
            }

            .comparison-standard .comparison-copy-item {
              font-size: clamp(0.9rem, 0.42vw + 0.7rem, 1.04rem);
            }

            .comparison-standard .comparison-copy-icon {
              width: clamp(1rem, 0.45vw + 0.68rem, 1.35rem);
              height: clamp(1rem, 0.45vw + 0.68rem, 1.35rem);
            }

            .comparison-standard .comparison-hero-wrapper {
              width: clamp(64%, 60vw, 76%);
              height: clamp(58%, 62vw, 72%);
            }

            .comparison-watermark {
              font-size: clamp(4.8rem, 4.6vw, 6.8rem);
            }
          }

          /* From 1221px down to 1128px, keep the text as-is but let the
             hero image ease a little smaller so it stays clear of the copy. */
          @media (max-width: 1221px) and (min-width: 1129px) {
            /* Keep the hero centered but reduce its size so it doesn't
               overlap the left column text. */
            .comparison-standard .comparison-hero-wrapper {
              width: clamp(58%, 54vw, 68%);
              height: clamp(52%, 56vw, 64%);
            }

            .comparison-standard .comparison-copy-list {
              /* reduce the max width of the text column slightly */
              max-width: 44ch;
            }
          }

          /* Extra safety at around the 1147px area (narrow desktops) */
          @media (max-width: 1147px) and (min-width: 1129px) {
            .comparison-standard .comparison-hero-wrapper {
              width: 56%;
              height: 50%;
            }
            .comparison-standard .comparison-copy-list {
              max-width: 42ch;
            }
          }

          /* Specific vertical nudges requested by design: at 1215px
             and at 1146px make the image sit slightly higher while
             remaining horizontally centered. Only bottom is adjusted. */
          @media (max-width: 1215px) and (min-width: 1129px) {
            .comparison-standard .comparison-hero-wrapper {
              bottom: clamp(5.5rem, 6vw, 7.5rem);
            }
          }

          @media (max-width: 1146px) and (min-width: 1129px) {
            .comparison-standard .comparison-hero-wrapper {
              bottom: clamp(9rem, 10vw, 12rem);
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
