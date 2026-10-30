"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Adds .is-visible to every [data-reveal] element the first time it scrolls into view,
// so it can fade and slide up (see "Scroll reveal" in globals.css). Content stays
// visible without JavaScript because the hidden state only applies under html.js.
export default function RevealOnScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -10% 0px" }
    );
    document.querySelectorAll("[data-reveal]:not(.is-visible)").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
