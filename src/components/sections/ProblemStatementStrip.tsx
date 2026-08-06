"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const wasteStats = [
  { value: "180 days", label: "To fully compost" },
  { value: "100%", label: "Edible materials" },
  { value: "0 waste", label: "Left behind" },
];

export function ProblemStatementStrip() {
  const sectionRef = useScrollAnimation<HTMLElement>();
  const numberRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const counter = { value: 0 };
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
      tl.to(counter, {
        value: 87000,
        duration: 2,
        ease: "power2.out",
        onUpdate: () => {
          if (numberRef.current) {
            numberRef.current.textContent = Math.round(counter.value).toLocaleString();
          }
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="bg-moss relative overflow-hidden px-6 py-20 md:py-28"
    >
      <div
        aria-hidden
        className="bg-primary/15 pointer-events-none absolute top-1/2 left-1/2 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[130px]"
      />

      <div className="relative mx-auto max-w-6xl text-center">
        <span className="font-body text-white/50 text-[13px] font-semibold tracking-[0.2em] uppercase">
          Plastic waste · every single year
        </span>

        <div className="mt-10">
          <div className="flex items-baseline justify-center gap-3">
            <span
              ref={numberRef}
              className="font-display text-primary text-[5rem] leading-none font-bold tracking-tight sm:text-[7rem] md:text-[9.5rem]"
            >
              0
            </span>
          </div>
          <p className="font-body mt-3 text-[14px] font-semibold tracking-[0.14em] text-white/60 uppercase">
            tonnes of plastic discarded
          </p>
        </div>

        <h2 className="font-display mt-12 text-3xl font-bold tracking-tight text-white md:text-4xl">
          That&apos;s the problem.
          <br />
          <span className="text-primary-light">We designed the fix.</span>
        </h2>

        <p className="font-body mx-auto mt-6 max-w-2xl text-[15px] leading-relaxed font-semibold text-white/70">
          Every year, billions of single-use cups and containers end up scorching the earth or
          drifting into our rivers — taking centuries to break down and leaving our soil and water
          choked with plastic. Ecolery turns this daily habit into something you can simply eat.
        </p>

        <div className="mx-auto mt-14 grid max-w-3xl grid-cols-3 gap-6 border-t border-white/10 pt-10">
          {wasteStats.map((s) => (
            <div key={s.label} className="flex flex-col items-center">
              <p className="font-display text-2xl font-bold text-white md:text-3xl">{s.value}</p>
              <p className="font-body mt-2 text-[11px] font-semibold tracking-wider text-white/60 uppercase">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}