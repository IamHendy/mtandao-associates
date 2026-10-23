import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24" id="services">
      <h2 className="font-display text-3xl mb-3">What we do</h2>
      <p className="text-muted mb-12 max-w-xl">
        Most of these we deliver together for the same client.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div
            key={s.slug}
            className="group flex flex-col border border-white/10 rounded-sm bg-panel/50 overflow-hidden transition duration-300 ease-out hover:-translate-y-1.5 hover:border-signal/60 hover:shadow-[0_18px_40px_-18px_rgba(227,30,36,0.45)] focus-within:border-signal/60"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={s.image}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 360px"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-signal origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100" aria-hidden="true" />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-display text-lg mb-2 transition-colors duration-300 group-hover:text-signal">{s.title}</h3>
              <p className="text-muted text-sm mb-6 flex-1">{s.summary}</p>
              <Link
                href={`/services/${s.slug}`}
                className="inline-flex items-center gap-2 w-fit border border-signal text-signal text-sm font-medium px-4 py-2 rounded-sm transition group-hover:bg-signal group-hover:text-graphite"
                aria-label={`Read more about ${s.title}`}
              >
                Read more
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
