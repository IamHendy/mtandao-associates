import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { services } from "@/data/services";

export default function ServicesPage() {
  return (
    <main>
      <Header />

      <section className="max-w-4xl mx-auto px-6 pt-32 pb-24">
        <h1 className="font-display text-4xl mb-6">Our services in detail</h1>

        <p className="text-muted mb-16 max-w-xl">
          Every engagement starts with understanding your environment. Below is
          what each service covers.
        </p>

        <div className="space-y-14">
          {services.map((s) => (
            <div
              key={s.slug}
              id={s.slug}
              className="border-t border-line/10 pt-8"
            >
              <h2 className="font-display text-2xl mb-4">
                <Link href={`/services/${s.slug}`} className="hover:text-signal transition">
                  {s.title}
                </Link>
              </h2>

              <ul className="space-y-2 list-disc pl-5 marker:text-signal">
                {s.details.map((d, i) => (
                  <li key={i} className="text-muted text-sm">
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <Link
            href="/#contact"
            className="inline-block bg-signal text-graphite font-medium px-6 py-3 rounded-sm hover:brightness-110 transition"
          >
            Request a review
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
