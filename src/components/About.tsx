"use client";
import { useState } from "react";
import { BadgeCheck, LifeBuoy, Rocket } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const tabs = [
  {
    label: "About Us",
    text: "Mtandao Associates (MA) is a leader in network security and data protection consulting: firewall implementation, systems audit and penetration testing, SD-WAN connectivity, multi-factor authentication, email security, and cloud and data backup with disaster recovery.",
  },
  {
    label: "Our Mission",
    text: "To implement enterprise-grade security solutions that protect the critical network assets of companies and businesses of all types and sizes, through simplicity.",
  },
  {
    label: "Our Vision",
    text: "To be a recognized regional name in the fight against cyber-crime.",
  },
];

const reasons = [
  { icon: BadgeCheck, title: "Customer focused", text: "We build around how your business works." },
  { icon: LifeBuoy, title: "Business continuity", text: "We guarantee your business keeps running." },
  { icon: Rocket, title: "Young, tech-savvy leaders", text: "Our leadership lives and breathes technology." },
];

export default function About() {
  const [active, setActive] = useState(0);

  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-24">
      <SectionHeading title="About Mtandao Associates" />

      <div className="grid lg:grid-cols-4 gap-10">
        <div className="lg:col-span-3">
          <div role="tablist" aria-label="About Mtandao Associates" className="flex flex-wrap border-b border-line/10">
            {tabs.map((t, i) => (
              <button
                key={t.label}
                role="tab"
                id={`about-tab-${i}`}
                aria-selected={i === active}
                aria-controls="about-panel"
                onClick={() => setActive(i)}
                className={`-mb-px px-6 py-3 text-sm font-medium uppercase tracking-wide border-b-2 transition ${
                  i === active ? "border-signal text-ink" : "border-transparent text-muted hover:text-ink"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
          <p
            id="about-panel"
            role="tabpanel"
            aria-labelledby={`about-tab-${active}`}
            className="pt-8 text-lg leading-relaxed text-muted"
          >
            {tabs[active].text}
          </p>
        </div>

        <div className="space-y-4">
          <p className="font-display font-bold uppercase text-sm tracking-wide">Why partner with us</p>
          {reasons.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex gap-4 rounded-md bg-bar p-4 text-white">
              <Icon className="w-7 h-7 shrink-0 text-signal" aria-hidden="true" />
              <div>
                <p className="font-display font-bold text-sm">{title}</p>
                <p className="text-white/70 text-sm">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
