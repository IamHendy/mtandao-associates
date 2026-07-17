"use client";

import Image from "next/image";
import { useState } from "react";

const links = [
  { label: "What We Do", href: "/#services" },
  { label: "How We Work", href: "/#solutions" },
  { label: "News", href: "/#news" },
  { label: "Get In Touch", href: "/#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-graphite/80 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto flex h-16 items-center justify-between px-6">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Mtandao Associates"
            width={36}
            height={36}
            className="rounded"
          />
          <span className="hidden font-display text-sm tracking-wide sm:block">
            MTANDAO ASSOCIATES
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition hover:text-ink"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            className="rounded-md bg-signal px-4 py-2 text-sm font-medium text-graphite transition hover:brightness-110"
          >
            Request a Review
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <div className="mb-1.5 h-0.5 w-6 bg-ink" />
          <div className="mb-1.5 h-0.5 w-6 bg-ink" />
          <div className="h-0.5 w-6 bg-ink" />
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <nav className="border-t border-white/10 px-6 pb-4 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block border-b border-white/5 py-3 text-muted transition hover:text-ink"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 block rounded-md bg-signal px-4 py-3 text-center text-sm font-medium text-graphite transition hover:brightness-110"
          >
            Request a Review
          </a>
        </nav>
      )}
    </header>
  );
}