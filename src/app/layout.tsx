import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import Splash from "@/components/Splash";
import RevealOnScroll from "@/components/RevealOnScroll";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });
const body = Inter({ subsets: ["latin"], variable: "--font-body" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Mtandao Associates | Firewall, Endpoint Security and Compliance in Kenya",
  description:
    "Mtandao Associates installs and supports WatchGuard firewalls, endpoint protection, systems audits and AML tooling for SACCOs, banks and businesses in Kenya.",
};

// Runs before first paint:
// 1. Apply the saved theme, or the dark (black) theme until the visitor picks one.
// 2. Mark that JavaScript runs (enables scroll-reveal animations).
// 3. Skip the logo intro if it already played in this browser session.
const startupScript = `(function(){var d=document.documentElement;d.classList.add("js");d.dataset.theme="dark";try{d.dataset.theme=localStorage.getItem("theme")||"dark"}catch(e){}try{if(sessionStorage.getItem("splash-seen")){d.classList.add("splash-seen")}else{sessionStorage.setItem("splash-seen","1")}}catch(e){}})()`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: startupScript }} />
      </head>
      <body className="bg-graphite text-ink font-body">
        <Splash />
        <RevealOnScroll />
        {children}
      </body>
    </html>
  );
}
