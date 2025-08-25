"use client";

import { useEffect, useRef, useState, PropsWithChildren } from "react";

type RevealProps = PropsWithChildren<{
  className?: string;
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
  animationClassName?: string;
}>;

export default function Reveal({
  children,
  className,
  threshold = 0.15,
  rootMargin = "0px 0px -10% 0px",
  once = true,
  animationClassName = "reveal-in",
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return (
    <div ref={ref} className={`${className ?? ""} ${isVisible ? animationClassName : "reveal-start"}`.trim()}>
      {children}
    </div>
  );
} 