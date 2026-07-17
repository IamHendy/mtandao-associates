import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { news } from "@/data/news";

export default function NewsPage() {
  return (
    <main>
      <Header />
      <section className="max-w-4xl mx-auto px-6 pt-32 pb-24">
        <p className="font-mono text-signal text-sm mb-3">NEWS &amp; UPDATES</p>
        <h1 className="font-display text-4xl mb-12">Cybersecurity news &amp; company updates</h1>

        <div className="space-y-8">
          {news.map((n) => (
            <div key={n.slug} className="border-b border-white/10 pb-8">
              <p className="font-mono text-xs text-muted mb-2">
                {n.category} · {new Date(n.date).toLocaleDateString("en-KE", { year: "numeric", month: "long", day: "numeric" })}
              </p>
              <h2 className="font-display text-xl mb-2">{n.title}</h2>
              <p className="text-muted text-sm mb-4">{n.excerpt}</p>
              <Link
                href={`/news/${n.slug}`}
                className="text-signal text-sm font-medium hover:underline"
              >
                Read more →
              </Link>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}