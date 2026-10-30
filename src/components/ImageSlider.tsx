"use client";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { slides } from "@/data/slides";

const IMAGE_DURATION = 5000;
const VIDEO_DURATION = 10000;

export default function ImageSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const videoRefs = useRef<Record<number, HTMLVideoElement | null>>({});

  const next = useCallback(() => setIndex((i) => (i + 1) % slides.length), []);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const duration = slides[index].type === "video" ? VIDEO_DURATION : IMAGE_DURATION;
    const timer = setTimeout(next, duration);
    return () => clearTimeout(timer);
  }, [paused, next, index]);

  // Only the video on the visible slide plays.
  useEffect(() => {
    for (const [i, video] of Object.entries(videoRefs.current)) {
      if (!video) continue;
      if (Number(i) === index) {
        video.currentTime = 0;
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    }
  }, [index]);

  return (
    <section
      className="relative"
      aria-roledescription="carousel"
      aria-label="Photos from our work"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="relative h-[60vh] min-h-96 max-h-[640px] overflow-clip bg-bar">
        <div
          className="flex h-full transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((s, i) => (
            <div
              key={s.src}
              className="relative h-full w-full shrink-0"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${slides.length}`}
              aria-hidden={i !== index}
            >
              {s.type === "video" ? (
                <video
                  ref={(el) => {
                    videoRefs.current[i] = el;
                  }}
                  src={s.src}
                  poster={s.poster}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label={s.caption}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              ) : (
                <Image
                  src={s.src}
                  alt={s.caption}
                  fill
                  sizes="100vw"
                  className="object-cover"
                  priority={i === 0}
                  loading={i === 0 ? undefined : "eager"}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-r from-bar/90 via-bar/50 to-transparent" />
              <div className="absolute inset-y-0 left-0 right-0 mx-auto max-w-6xl px-6 flex flex-col justify-center">
                <p className="font-display font-bold text-3xl md:text-5xl text-white max-w-xl">{s.title}</p>
                <p className="text-white/85 text-lg mt-4 max-w-md">{s.caption}</p>
                <a href="#contact" tabIndex={i === index ? 0 : -1} className="mt-8 w-fit rounded-md bg-signal px-6 py-3 text-sm font-medium text-white hover:brightness-110 transition">Request For a Quote</a>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={prev}
          aria-label="Previous slide"
          className="hidden md:block absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-sm text-white hover:bg-black/70 transition"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={next}
          aria-label="Next slide"
          className="hidden md:block absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-sm text-white hover:bg-black/70 transition"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="absolute bottom-5 inset-x-0 flex justify-center gap-2">
        {slides.map((s, i) => (
          <button
            key={s.src}
            onClick={() => setIndex(i)}
            aria-label={`Show slide ${i + 1}: ${s.title}`}
            aria-current={i === index}
            className={`h-1 w-8 transition ${i === index ? "bg-signal" : "bg-white/40 hover:bg-white/70"}`}
          />
        ))}
      </div>
    </section>
  );
}
