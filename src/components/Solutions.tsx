import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import { FEATURED_SLUGS } from "@/components/Services";
import { services } from "@/data/services";

const solutions = services.filter((s) => !FEATURED_SLUGS.includes(s.slug));

export default function Solutions() {
  return (
    <section id="solutions" className="max-w-6xl mx-auto px-6 py-24">
      <SectionHeading title="Our Solutions" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {solutions.map((s, i) => (
          <ServiceCard
            key={s.slug}
            title={s.title}
            summary={s.summary}
            image={s.image}
            href={`/services/${s.slug}`}
            index={i}
          />
        ))}
      </div>
      <div className="mt-14 text-center">
        <Link
          href="/services"
          className="inline-block rounded-md border border-line/20 px-6 py-3 text-sm font-medium hover:border-signal hover:text-signal transition"
        >
          See all services in detail
        </Link>
      </div>
    </section>
  );
}
