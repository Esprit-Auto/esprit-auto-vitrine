"use client";

import { useEffect, useRef, useCallback } from "react";

interface CarouselProps {
  speed: number;
  gap: number;
  children: React.ReactNode;
  cardSelector: string;
}

export default function Carousel({
  speed,
  gap,
  children,
  cardSelector,
}: CarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const pausedRef = useRef(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const animIdRef = useRef<number>(0);

  const getHalfWidth = useCallback(() => {
    const track = trackRef.current;
    if (!track) return 0;
    return track.scrollWidth / 2;
  }, []);

  const applyTranslate = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const half = getHalfWidth();
    if (half === 0) return;
    if (offsetRef.current >= half) offsetRef.current -= half;
    if (offsetRef.current < 0) offsetRef.current += half;
    track.style.transform = `translateX(-${offsetRef.current}px)`;
  }, [getHalfWidth]);

  useEffect(() => {
    const tick = () => {
      if (!pausedRef.current) {
        offsetRef.current += speed;
        applyTranslate();
      }
      animIdRef.current = requestAnimationFrame(tick);
    };

    // Small delay to ensure DOM is laid out and scrollWidth is correct
    const startTimer = setTimeout(() => {
      animIdRef.current = requestAnimationFrame(tick);
    }, 100);

    return () => {
      clearTimeout(startTimer);
      cancelAnimationFrame(animIdRef.current);
    };
  }, [speed, applyTranslate]);

  const handleNav = (dir: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector(cardSelector) as HTMLElement | null;
    const step = card ? card.offsetWidth + gap : 340;
    offsetRef.current += dir * step;
    applyTranslate();
    pausedRef.current = true;
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      pausedRef.current = false;
    }, 2000);
  };

  return (
    <div className="relative w-full">
      <button
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-11 md:h-11 rounded-full bg-bg3/80 border border-bd flex items-center justify-center text-muted hover:text-text hover:border-or transition-colors"
        onClick={() => handleNav(-1)}
        aria-label="Précédent"
      >
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2}>
          <polyline points="15,18 9,12 15,6" />
        </svg>
      </button>
      <button
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-11 md:h-11 rounded-full bg-bg3/80 border border-bd flex items-center justify-center text-muted hover:text-text hover:border-or transition-colors"
        onClick={() => handleNav(1)}
        aria-label="Suivant"
      >
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2}>
          <polyline points="9,18 15,12 9,6" />
        </svg>
      </button>
      <div
        className="overflow-hidden"
        onMouseEnter={() => (pausedRef.current = true)}
        onMouseLeave={() => (pausedRef.current = false)}
      >
        <div
          ref={trackRef}
          className="flex will-change-transform"
          style={{ gap: `${gap}px` }}
        >
          {children}
          {children}
        </div>
      </div>
    </div>
  );
}
