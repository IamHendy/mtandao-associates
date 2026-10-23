import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import Splash from "@/components/Splash";
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

// Runs before first paint: skip the logo intro if it already played in this browser session.
const splashScript = `try{if(sessionStorage.getItem("splash-seen")){document.documentElement.classList.add("splash-seen")}else{sessionStorage.setItem("splash-seen","1")}}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: splashScript }} />
      </head>
      <body className="bg-graphite text-ink font-body">
        <Splash />
        {children}
      </body>
    </html>
  );
}
