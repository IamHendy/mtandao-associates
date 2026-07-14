import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        graphite: "#0B0F14",
        panel: "#131A21",
        ink: "#E6EAEE",
        muted: "#8B98A5",
        signal: "#F5A623",
        secure: "#2DD4BF",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  plugins: [],
} satisfies Config;