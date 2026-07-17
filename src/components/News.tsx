import Link from "next/link";
import { news } from "@/data/news";

export default function News() {
  const latest = news.slice(0, 3);

  return (
    <section className="max-w-6xl mx-auto px-6 py-24 border-t border-white/10" id="news">
      <p className="font-mono text-signal text-sm mb-3">04 — LATEST</p>
      <h2 className="font-display text-3xl mb-12 max-w-xl">
        Cybersecurity news &amp; company updates.
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {latest.map((n) => (
          <Link
            key={n.slug}
            href={`/news/${n.slug}`}
            className="block border border-white/10 rounded-lg p-6 bg-panel/50 hover:border-signal/40 transition"
          >
            <p className="font-mono text-xs text-muted mb-3">
              {n.category} · {new Date(n.date).toLocaleDateString("en-KE", { year: "numeric", month: "long", day: "numeric" })}
            </p>
            <h3 className="font-display text-lg mb-2">{n.title}</h3>
            <p className="text-muted text-sm">{n.excerpt}</p>
          </Link>
        ))}
      </div>

      <div className="mt-10">
        <Link
          href="/news"
          className="inline-block border border-signal text-signal font-medium px-6 py-3 rounded-md hover:bg-signal hover:text-graphite transition"
        >
          View all updates
        </Link>
      </div>
    </section>
  );
}