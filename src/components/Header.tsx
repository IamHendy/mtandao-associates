"use client";

import Image from "next/image";
import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import { useState } from "react";

const links = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Solutions", href: "/#solutions" },
  { label: "Training", href: "/training" },
  { label: "Contact", href: "/#contact" },
];

// Three rows, like the blueprint: bar contact bar, white band with logo and quick facts,
// then a bar menu bar that sticks to the top while scrolling.
export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Contact bar */}
      <div className="bg-bar text-white text-sm border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-11 flex items-center justify-between gap-4">
          <div className="flex items-center gap-6 min-w-0">
            <a href="mailto:info@mtandaoassociates.com" className="flex items-center gap-2 hover:text-signal transition truncate">
              <Mail className="w-4 h-4 text-signal shrink-0" aria-hidden="true" />
              <span className="truncate">info@mtandaoassociates.com</span>
            </a>
            <span className="hidden sm:block h-5 w-px bg-white/25" aria-hidden="true" />
            <a href="tel:+254727589335" className="hidden sm:flex items-center gap-2 hover:text-signal transition">
              <Phone className="w-4 h-4 text-signal" aria-hidden="true" />
              0727-589335 / 0742-885437
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://x.com/Akiliyamtandao"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Mtandao Associates on X (Twitter)"
              className="hover:text-signal transition"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                <path d="M18.9 2H22l-6.8 7.8L23 22h-6.2l-4.8-6.3L6.4 22H3.3l7.3-8.3L1 2h6.3l4.4 5.8L18.9 2Zm-1.1 18h1.7L6.3 3.9H4.5L17.8 20Z" />
              </svg>
            </a>
            <ThemeToggle className="h-7 w-7 border-white/25 text-white/80 hover:text-white hover:border-white/60" />
          </div>
        </div>
      </div>

      {/* Logo band */}
      <div className="bg-panel border-b border-line/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="" width={70} height={56} priority className="rounded-sm" />
            <span className="font-display font-bold text-sm leading-tight tracking-wide">
              MTANDAO
              <br />
              ASSOCIATES
              <br />
              LIMITED
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-10">
            <div className="flex items-center gap-3">
              <MapPin className="w-8 h-8 text-signal" aria-hidden="true" />
              <div>
                <p className="font-display font-bold text-sm uppercase">Location</p>
                <p className="text-muted text-sm">Morrison House, 4th Floor</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-8 h-8 text-signal" aria-hidden="true" />
              <div>
                <p className="font-display font-bold text-sm uppercase">Opening Hours</p>
                <p className="text-muted text-sm">8.00 am to 4.00 pm</p>
              </div>
            </div>
          </div>

          <Link
            href="/#contact"
            className="hidden md:inline-block rounded-md bg-signal px-5 py-3 text-sm font-medium text-white transition hover:brightness-110"
          >
            Request For a Quote
          </Link>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="md:hidden"
          >
            <div className="mb-1.5 h-0.5 w-6 bg-ink" />
            <div className="mb-1.5 h-0.5 w-6 bg-ink" />
            <div className="h-0.5 w-6 bg-ink" />
          </button>
        </div>
      </div>

      {/* Menu bar */}
      <nav className="sticky top-0 z-50 bg-bar text-white shadow-md border-y border-white/10">
        <div className="max-w-6xl mx-auto px-6 hidden md:flex h-14 items-center">
          {links.map((link, i) => (
            <span key={link.href} className="flex items-center">
              {i > 0 && <span className="h-3.5 w-px bg-white/30 mx-5" aria-hidden="true" />}
              <a href={link.href} className="text-sm font-medium uppercase tracking-wide hover:text-signal transition">
                {link.label}
              </a>
            </span>
          ))}
        </div>

        {open && (
          <div className="md:hidden px-6 pb-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block border-b border-white/10 py-3 uppercase text-sm tracking-wide hover:text-signal transition"
              >
                {link.label}
              </a>
            ))}
            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className="mt-4 block rounded-md bg-signal px-4 py-3 text-center text-sm font-medium text-white transition hover:brightness-110"
            >
              Request For a Quote
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}
