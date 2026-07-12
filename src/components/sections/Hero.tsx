"use client";

import { Navbar } from "@/components/shared/Navbar";
import { useGSAP } from "@gsap/react";
import { motion, type Variants } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const textVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.15 * i, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cupRef = useRef<HTMLDivElement>(null);
  const hillLeftRef = useRef<HTMLDivElement>(null);
  const hillRightRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      // always start from the "landed" state so content is never invisible without JS
      gsap.set([hillLeftRef.current, hillRightRef.current, cupRef.current], {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
      });

      if (reduceMotion) return;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        hillLeftRef.current,
        { x: -90, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.1 },
        0.1,
      )
        .fromTo(
          hillRightRef.current,
          { x: 90, opacity: 0 },
          { x: 0, opacity: 1, duration: 1.1 },
          0.1,
        )
        .fromTo(
          cupRef.current,
          { y: 140, opacity: 0, scale: 0.9 },
          { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: "power4.out" },
          0.25,
        )
        .add(() => {
          // gentle idle "breathing" loop once the cup has landed
          gsap.to(cupRef.current, {
            y: -12,
            duration: 2.8,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
          });
        });

      // subtle scroll parallax: hills drift apart, cup rises slightly slower
      gsap.to(hillLeftRef.current, {
        x: -40,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(hillRightRef.current, {
        x: 40,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(cupRef.current, {
        y: -30,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="bg-cream relative flex min-h-screen flex-col overflow-hidden"
    >
      {/* soft ambient glow behind the cup */}
      <div
        aria-hidden
        className="bg-cork/25 pointer-events-none absolute top-[38%] left-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[110px]"
      />

      <Navbar />

      <div className="relative z-40 mt-2 flex flex-col items-center px-6 text-center md:mt-4">
        <motion.span
          custom={0}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="font-body text-moss text-[13px] tracking-[0.14em] uppercase"
        >
          Compostable dining, reimagined
        </motion.span>

        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="font-display text-ink mt-4 text-4xl leading-[1.08] tracking-tight sm:text-5xl md:text-6xl"
        >
          Cork-pressed.
          <br />
          <span className="text-cork-dark italic">Compost-bound.</span>
        </motion.h1>

        {/* <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="text-ink/65 mt-5 max-w-md text-[15px] leading-relaxed text-balance md:text-base"
        >
          Ecolery replaces single-use plastics with cups pressed from reclaimed cork and plant fibre
          — built to hold your coffee, then quietly return to the ground.
        </motion.p> */}

        {/* <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="mt-8 flex items-center gap-4"
        >
          <a
            href="#shop"
            className="bg-rust text-cream hover:shadow-rust/20 rounded-full px-6 py-3 text-[14px] font-medium transition-transform hover:-translate-y-0.5 hover:shadow-lg"
          >
            Shop the collection
          </a>
          <a
            href="#process"
            className="text-ink/70 decoration-ink/30 hover:text-ink text-[14px] font-medium underline underline-offset-4 transition-colors"
          >
            How it&rsquo;s made
          </a>
        </motion.div> */}
      </div>

      {/* visual stage — hills flank a large centred cup, all bottom-aligned to the hero edge */}
      <div className="relative mt-10 flex-1 md:mt-6">
        {/* left hill — sits behind the cup */}
        <div ref={hillLeftRef} className="absolute -bottom-60 -left-[300px] z-10 max-w-[2800px]">
          <Image
            src="/left.png"
            alt=""
            width={900}
            height={700}
            className="h-auto w-[1500px] object-contain object-bottom"
            priority
          />
        </div>

        {/* the cup — center of attention, largest element on the stage */}
        <div
          ref={cupRef}
          className="absolute bottom-0 left-1/2 z-20 max-w-[900px] -translate-x-1/2"
        >
          <Image
            src="/cup.png"
            alt="Ecolery cork-pressed compostable cup"
            width={800}
            height={900}
            className="h-auto w-[550px] object-contain object-bottom"
            priority
          />
        </div>

        {/* right hill — sits in front of the cup */}
        <div ref={hillRightRef} className="absolute -right-[380px] -bottom-44 z-30 max-w-[2800px]">
          <Image
            src="/right.png"
            alt=""
            width={900}
            height={700}
            className="h-auto w-[1500px] object-contain object-bottom"
            priority
          />
        </div>
      </div>
    </section>
  );
}
