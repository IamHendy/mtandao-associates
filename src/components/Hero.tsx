const clients = [
  {
    who: "SACCOs",
    what: "FOSA and BOSA systems, firewall setup, and data protection compliance audits.",
  },
  {
    who: "Banks and financial institutions",
    what: "AML and antifraud deployment, endpoint security, and vulnerability assessments.",
  },
  {
    who: "Businesses",
    what: "WatchGuard firewalls, endpoint protection, CRM work, and staff training.",
  },
];

export default function Hero() {
  return (
    <section className="border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 pt-36 pb-20 grid md:grid-cols-2 gap-14 items-start">
        <div>
          <h1 className="font-display text-4xl md:text-5xl leading-tight mb-6">
            Firewall, endpoint and compliance work for Kenyan SACCOs, banks and businesses.
          </h1>
          <p className="text-muted mb-8 max-w-md">
            We install and support WatchGuard firewalls, set up endpoint protection,
            run systems audits against the Data Protection Act, and train your ICT
            staff to manage it all after we leave.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-block bg-signal text-graphite font-medium px-6 py-3 rounded-sm hover:brightness-110 transition"
            >
              Request a security review
            </a>
            <a
              href="tel:+254727589335"
              className="inline-block border border-white/20 text-ink font-medium px-6 py-3 rounded-sm hover:border-white/40 transition"
            >
              Call 0727 589 335
            </a>
          </div>
        </div>

        <div className="border-l-2 border-signal pl-6">
          <p className="text-sm text-muted mb-5">Who we usually work with</p>
          <dl className="space-y-6">
            {clients.map((c) => (
              <div key={c.who}>
                <dt className="font-display text-lg mb-1">{c.who}</dt>
                <dd className="text-muted text-sm">{c.what}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
