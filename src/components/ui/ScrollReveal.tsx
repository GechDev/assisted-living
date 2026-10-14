"use client";

import { useEffect, useRef, ReactNode } from "react";

type RevealDirection = "up" | "left" | "right" | "scale";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  direction?: RevealDirection;
  /** Root margin offset — negative pulls trigger point up into the viewport */
  rootMargin?: string;
}

const DIRECTION_CLASS: Record<RevealDirection, string> = {
  up:    "reveal",
  left:  "reveal-left",
  right: "reveal-right",
  scale: "reveal-scale",
};

/**
 * ScrollReveal — wraps children in a div that animates into view when it
 * enters the viewport.  Supports up (default), left, right, and scale
 * entrance directions.  Falls back gracefully when JS is unavailable.
 * Respects prefers-reduced-motion (the CSS handles that).
 */
export function ScrollReveal({
  children,
  className = "",
  threshold = 0.1,
  direction = "up",
  rootMargin = "0px 0px -40px 0px",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const baseClass = DIRECTION_CLASS[direction];

  return (
    <div ref={ref} className={`${baseClass} ${className}`}>
      {children}
    </div>
  );
}
