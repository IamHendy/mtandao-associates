"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Bug, FolderCheck, Network, Users } from "lucide-react";

// Figures copied from the blueprint site. Replace them with Mtandao's own numbers before going live.
const stats = [
  { icon: Users, value: 1000, label: "Users Protected" },
  { icon: Bug, value: 10000, label: "Threats Neutralised" },
  { icon: FolderCheck, value: 100, label: "Projects Handled" },
  { icon: Network, value: 1000, label: "Networks Secured" },
];

const DURATION = 1800;

export default function Stats() {
  const ref = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  // Count up from zero the first time the section scrolls into view.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let frame = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setProgress(1);
        return;
      }
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - start) / DURATION, 1);
        setProgress(1 - Math.pow(1 - t, 3));
        if (t < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section ref={ref} className="relative py-24 text-white">
      <Image src="/slides/engineer-servers.jpg" alt="" fill sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-bar/85" />
      <div className="relative max-w-6xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map(({ icon: Icon, value, label }) => (
          <div key={label} className="rounded-md border border-white/15 bg-white/5 px-4 py-8 text-center backdrop-blur-sm">
            <Icon className="mx-auto mb-4 w-9 h-9 text-signal" aria-hidden="true" />
            <p className="font-display text-3xl md:text-4xl font-bold tabular-nums">
              {Math.round(value * progress).toLocaleString()}+
            </p>
            <p className="mt-2 text-sm uppercase tracking-wide text-white/75">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
