import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { services } from "@/data/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} | Mtandao Associates`,
    description: service.summary,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) notFound();

  const others = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <main>
      <Header />

      <article className="max-w-3xl mx-auto px-6 pt-16 pb-20">
        <Link href="/#services" className="text-sm text-muted hover:text-ink transition">
          Back to What We Do
        </Link>

        <h1 className="font-display text-4xl mt-6 mb-8">{service.title}</h1>

        <div className="relative aspect-[16/9] mb-10 overflow-hidden rounded-sm border border-line/10">
          <Image
            src={service.image}
            alt=""
            fill
            priority
            sizes="(max-width: 816px) 100vw, 720px"
            className="object-cover"
          />
        </div>

        <div className="space-y-5 mb-12">
          {service.description.map((p, i) => (
            <p key={i} className="text-muted leading-relaxed">{p}</p>
          ))}
        </div>

        <h2 className="font-display text-2xl mb-4">What this covers</h2>
        <ul className="space-y-2 list-disc pl-5 marker:text-signal mb-14">
          {service.details.map((d, i) => (
            <li key={i} className="text-muted">{d}</li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/#contact"
            className="inline-block bg-signal text-graphite font-medium px-6 py-3 rounded-sm hover:brightness-110 transition"
          >
            Ask us about this service
          </Link>
        </div>
      </article>

      <section className="max-w-6xl mx-auto px-6 pb-24 border-t border-line/10 pt-16">
        <h2 className="font-display text-2xl mb-8">Other services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {others.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group block border border-line/10 rounded-sm p-6 bg-panel/50 transition duration-300 ease-out hover:-translate-y-1 hover:border-signal/60 hover:shadow-[0_18px_40px_-18px_rgba(227,30,36,0.45)]"
            >
              <h3 className="font-display text-lg mb-2 transition-colors duration-300 group-hover:text-signal">{s.title}</h3>
              <p className="text-muted text-sm">{s.summary}</p>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
