"use client";
import { Moon, Sun } from "lucide-react";

// The current theme lives on <html data-theme>, set before paint by the script in layout.tsx,
// so this button needs no React state: CSS shows the right icon for each theme.
export default function ThemeToggle({ className = "" }: { className?: string }) {
  function toggle() {
    const root = document.documentElement;
    const next = root.dataset.theme === "light" ? "dark" : "light";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Switch between light and dark mode"
      title="Switch between light and dark mode"
      className={`flex h-9 w-9 items-center justify-center border border-line/15 rounded-sm text-muted transition hover:text-ink hover:border-line/40 ${className}`}
    >
      <Sun className="w-4 h-4 light:hidden" />
      <Moon className="w-4 h-4 hidden light:block" />
    </button>
  );
}
