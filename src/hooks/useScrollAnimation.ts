"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollAnimationOptions {
  trigger?: gsap.DOMTarget;
  start?: string;
  end?: string;
  toggleActions?: string;
  y?: number;
  x?: number;
  opacity?: number;
  scale?: number;
  duration?: number;
  ease?: string;
  scrub?: boolean | number;
  markers?: boolean;
}

export function useScrollAnimation<T extends HTMLElement>(
  options: ScrollAnimationOptions = {},
) {
  const ref = useRef<T>(null!);

  const {
    trigger,
    start = "top 85%",
    end = "bottom 20%",
    toggleActions = "play none none reverse",
    y = 30,
    opacity = 0,
    duration = 0.8,
    ease = "power2.out",
    scrub,
  } = options;

  useGSAP(() => {
    const el = ref.current;
    if (!el) return;

    const animConfig: gsap.TweenVars = {
      y,
      opacity,
      ease,
    };

    if (scrub !== undefined) {
      animConfig.scrub = scrub;
    } else {
      animConfig.duration = duration;
    }

    gsap.fromTo(
      el,
      { y, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: scrub ? undefined : duration,
        ease,
        scrollTrigger: {
          trigger: trigger || el,
          start,
          end,
          toggleActions,
          scrub,
        },
      },
    );
  }, [trigger, start, end, toggleActions, y, opacity, duration, ease, scrub]);

  return ref;
}
