"use client";
import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { highlights } from "@/data/highlights";

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setIndex((i) => (i + 1) % highlights.length), []);
  const prev = () => setIndex((i) => (i - 1 + highlights.length) % highlights.length);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [paused, next]);

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

        <button
          onClick={prev}
          aria-label="Previous highlight"
          className="absolute left-3 top-1/2 -translate-y-1/2 text-muted hover:text-ink transition p-2"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={next}
          aria-label="Next highlight"
          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-ink transition p-2"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="flex justify-center gap-2 mt-5">
        {highlights.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-2 h-2 rounded-full transition ${
              i === index ? "bg-signal" : "bg-white/20"
            }`}
          />
        ))}
      </div>
    </section>
  );
}