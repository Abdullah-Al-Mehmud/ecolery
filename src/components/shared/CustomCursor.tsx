"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === "undefined") return false;
    return !window.matchMedia("(pointer: coarse)").matches;
  });

  // Position coordinates
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Spring animation values for organic trailing effect
  const springConfig = { damping: 40, stiffness: 400, mass: 0.4 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    if (!isVisible) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Expand cursor on interactive nodes
      const isInteractive = 
        target.tagName === "A" || 
        target.tagName === "BUTTON" || 
        target.closest("a") || 
        target.closest("button") ||
        target.closest("[role='button']") ||
        target.classList.contains("cursor-pointer") ||
        target.getAttribute("data-hover") === "true";
      
      setIsHovered(!!isInteractive);
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Spring Follower Ring */}
      <motion.div
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isClicked ? 0.8 : isHovered ? 1.6 : 1,
          borderColor: isHovered ? "var(--color-rust)" : "var(--color-moss)",
          backgroundColor: isHovered ? "rgba(184, 82, 35, 0.05)" : "rgba(0, 0, 0, 0)",
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.2 }}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-moss pointer-events-none z-9999 hidden md:block"
      />

      {/* Inner Spring Dot */}
      <motion.div
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isClicked ? 1.5 : isHovered ? 0.3 : 1,
          backgroundColor: isHovered ? "var(--color-rust)" : "var(--color-rust)",
        }}
        transition={{ type: "tween", duration: 0.1 }}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-rust pointer-events-none z-9999 hidden md:block"
      />
    </>
  );
}
