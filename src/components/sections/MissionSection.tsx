"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Leaf } from "lucide-react";
import { useEffect, useRef } from "react";

export function MissionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const videoY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["4%", "-4%"]);

  useEffect(() => {
    const el = sectionRef.current;
    const video = videoRef.current;
    if (!el || !video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause();
          video.currentTime = 0;
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="bg-cream relative scroll-mt-28 overflow-hidden px-6 py-24 md:py-32"
    >
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2">
        <motion.div style={{ y: textY }}>
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-full">
              <Leaf className="text-primary h-5 w-5" strokeWidth={1.75} />
            </div>
            <span className="font-body text-primary text-[13px] font-semibold tracking-[0.2em] uppercase">
              Our mission
            </span>
          </div>
          <h2 className="font-display text-ink mt-5 text-4xl leading-[1.1] font-bold tracking-tight md:text-5xl">
            Eat the cup.
            <br />
            <span className="text-primary-dark">Eliminate the waste.</span>
          </h2>
          <p className="font-body mt-6 max-w-md text-[15px] leading-relaxed font-semibold text-gray-600">
            Ecolery is redefining sustainability with edible products that help reduce plastic
            pollution and inspire a zero-waste future, designed for everyday dining, built to
            disappear responsibly.
          </p>
        </motion.div>

        <motion.div style={{ y: videoY }} className="relative">
          <div className="shadow-ink/15 relative aspect-video -rotate-1 overflow-hidden rounded-[2rem] shadow-2xl transition-transform duration-500 hover:scale-[1.02] hover:rotate-0">
            <video
              ref={videoRef}
              src="/Product feature.mp4"
              loop
              muted
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="bg-primary/5 absolute -inset-4 -z-10 rounded-[2.5rem] blur-xl" />
        </motion.div>
      </div>
    </section>
  );
}