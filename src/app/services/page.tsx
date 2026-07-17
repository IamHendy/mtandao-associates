import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { services } from "@/data/services";

export default function ServicesPage() {
  return (
    <main>
      <Header />

      <section className="max-w-4xl mx-auto px-6 pt-32 pb-24">
        <p className="font-mono text-signal text-sm mb-3">OUR SERVICES</p>

        <h1 className="font-display text-4xl mb-6">What we do, in detail</h1>

        <p className="text-muted mb-16 max-w-xl">
          Every engagement starts with understanding your environment —
          here&apos;s exactly what each service covers.
        </p>

        <div className="space-y-14">
          {services.map((s) => (
            <div
              key={s.slug}
              id={s.slug}
              className="border-t border-white/10 pt-8"
            >
              <h2 className="font-display text-2xl mb-4">{s.title}</h2>

              <ul className="space-y-2">
                {s.details.map((d, i) => (
                  <li key={i} className="text-muted text-sm flex gap-3">
                    <span className="text-signal">—</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <Link
            href="/#contact"
            className="inline-block bg-signal text-graphite font-medium px-6 py-3 rounded-md hover:brightness-110 transition"
          >
            Request a review
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
