"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

interface UseLenisOptions {
  autoRaf?: boolean;
  duration?: number;
  easing?: (t: number) => number;
  orientation?: "vertical" | "horizontal";
  gestureOrientation?: "vertical" | "horizontal" | "both";
  smoothWheel?: boolean;
  wheelMultiplier?: number;
  touchMultiplier?: number;
}

export function useLenis(options: UseLenisOptions = {}) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: options.duration ?? 1.2,
      easing: options.easing ?? ((t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))),
      orientation: options.orientation ?? "vertical",
      gestureOrientation: options.gestureOrientation ?? "vertical",
      smoothWheel: options.smoothWheel ?? true,
      wheelMultiplier: options.wheelMultiplier ?? 1,
      touchMultiplier: options.touchMultiplier ?? 1,
      autoRaf: options.autoRaf ?? true,
    });

    lenisRef.current = lenis;

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return lenisRef;
}
