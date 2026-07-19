"use client";

import { type ReactNode, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import dynamic from "next/dynamic";

gsap.registerPlugin(ScrollTrigger);

const CustomCursor = dynamic(
  () => import("./CustomCursor").then((mod) => mod.CustomCursor),
  { ssr: false }
);

export function Providers({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1,
    });

    lenisRef.current = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    const gsapTick = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.lagSmoothing(0);
    gsap.ticker.add(gsapTick);

    return () => {
      gsap.ticker.remove(gsapTick);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return (
    <>
      <CustomCursor />
      {children}
    </>
  );
}

