import { services } from "@/data/services";

export default function Services() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24" id="services">
      <p className="font-mono text-secure text-sm mb-3">01 — WHAT WE DO</p>
      <h2 className="font-display text-3xl mb-12 max-w-xl">
        Practical security work, not just a slide deck.
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div key={s.title} className="border border-white/10 rounded-lg p-6 bg-panel/50 hover:border-secure/40 transition">
            <h3 className="font-display text-lg mb-2">{s.title}</h3>
            <p className="text-muted text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}