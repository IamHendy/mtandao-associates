"use client";
import { useEffect, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { highlights } from "@/data/highlights";

const SLIDE_DURATION = 5000;

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % highlights.length);
  }, []);
  const prev = () => setIndex((i) => (i - 1 + highlights.length) % highlights.length);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(next, SLIDE_DURATION);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, next, index]); // index included so timer resets after manual nav

  const Active = highlights[index];
  const Icon = Active.icon;

  return (
    <section
      className="max-w-4xl mx-auto px-6 py-20"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
    >
      <div className="relative bg-panel/60 border border-white/10 rounded-xl px-8 py-14 flex flex-col items-center text-center min-h-[260px] justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.35 }}
            className="flex flex-col items-center max-w-md"
            aria-live="polite"
          >
            <Icon className="w-10 h-10 text-signal mb-5" strokeWidth={1.5} />
            <h3 className="font-display text-xl mb-3">{Active.title}</h3>
            <p className="text-muted text-sm">{Active.desc}</p>
          </motion.div>
        </AnimatePresence>

        <button onClick={prev} aria-label="Previous highlight" className="absolute left-3 top-1/2 -translate-y-1/2 text-muted hover:text-ink transition p-2">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button onClick={next} aria-label="Next highlight" className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-ink transition p-2">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="flex justify-center gap-2 mt-5">
        {highlights.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="relative w-8 h-1.5 rounded-full bg-white/15 overflow-hidden"
          >
            {i === index && !paused && (
              <motion.div
                key={index}
                className="absolute inset-0 bg-signal"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
              />
            )}
            {i === index && paused && <div className="absolute inset-0 bg-signal" />}
          </button>
        ))}
      </div>
    </section>
  );
}