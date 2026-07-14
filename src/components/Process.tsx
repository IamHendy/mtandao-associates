const steps = [
  { n: "01", title: "Assess", desc: "Systems audit, vulnerability scan, and compliance check against local data protection requirements." },
  { n: "02", title: "Deploy", desc: "Firewall, endpoint protection, and any custom systems (FOSA/BOSA, CRM, AML tooling) configured for your environment." },
  { n: "03", title: "Train", desc: "Your team trained on the tools and automation you're now running — not left to figure it out alone." },
  { n: "04", title: "Monitor", desc: "Ongoing AI-driven threat detection and support as your systems and risks evolve." },
];

export default function Process() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24 border-t border-white/10" id="solutions">
      <p className="font-mono text-secure text-sm mb-3">02 — HOW WE WORK</p>
      <h2 className="font-display text-3xl mb-12 max-w-xl">
        From audit to ongoing monitoring.
      </h2>
      <div className="grid md:grid-cols-4 gap-8">
        {steps.map((s) => (
          <div key={s.n}>
            <p className="font-mono text-muted text-sm mb-2">{s.n}</p>
            <h3 className="font-display text-lg mb-2">{s.title}</h3>
            <p className="text-muted text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}