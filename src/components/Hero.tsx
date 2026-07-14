"use client";
import { useEffect, useState } from "react";

const LOG_LINES = [
  "$ initiating scan  10.0.4.0/24",
  "→ 214 hosts discovered",
  "→ checking firewall rules... NGFW active",
  "→ endpoint agents reporting: 214/214",
  "⚠ 3 vulnerabilities found, patch queued",
  "✓ status: secure",
];

function TerminalPanel() {
  const [visibleLines, setVisibleLines] = useState<string[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev.length >= LOG_LINES.length) {
          clearInterval(interval);
          return prev;
        }
        return [...prev, LOG_LINES[prev.length]];
      });
    }, 650);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="rounded-lg border border-white/10 bg-panel/80 backdrop-blur p-5 font-mono text-sm w-full max-w-md">
      <div className="flex gap-1.5 mb-3">
        <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
        <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
        <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
      </div>
      {visibleLines.map((line, idx) => (
        <p
          key={idx}
          className={
            line.startsWith("✓")
              ? "text-secure"
              : line.startsWith("⚠")
                ? "text-signal"
                : "text-muted"
          }
        >
          {line}
        </p>
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* faint node graph background */}
      <svg className="absolute inset-0 w-full h-full opacity-20" aria-hidden="true">
        <defs>
          <radialGradient id="dot" r="1">
            <stop offset="0%" stopColor="#F5F5F5" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
        {/* generate a handful of nodes + connecting lines; replace coords as desired */}
        <line x1="10%" y1="20%" x2="30%" y2="40%" stroke="#F5F5F5" strokeWidth="0.5" />
        <line x1="30%" y1="40%" x2="60%" y2="15%" stroke="#F5F5F5" strokeWidth="0.5" />
        <line x1="60%" y1="15%" x2="85%" y2="35%" stroke="#F5F5F5" strokeWidth="0.5" />
        <circle cx="10%" cy="20%" r="3" fill="url(#dot)" />
        <circle cx="30%" cy="40%" r="3" fill="url(#dot)" />
        <circle cx="60%" cy="15%" r="3" fill="url(#dot)" />
        <circle cx="85%" cy="35%" r="3" fill="url(#dot)" />
      </svg>

      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="font-mono text-secure text-sm tracking-wide mb-4">
            MTANDAO ASSOCIATES // SECURITY &amp; AUTOMATION
          </p>
          <h1 className="font-display text-4xl md:text-5xl leading-tight mb-6">
            We keep your network watched, patched, and ahead of the threat.
          </h1>
          <p className="text-muted mb-8 max-w-md">
            Firewall deployment, endpoint protection, AI-driven security automation,
            and compliance support — built for banks, SACCOs, and growing businesses.
          </p>
          <a
            href="#contact"
            className="inline-block bg-signal text-graphite font-medium px-6 py-3 rounded-md hover:brightness-110 transition"
          >
            Request a security review
          </a>
        </div>
        <TerminalPanel />
      </div>
    </section>
  );
}