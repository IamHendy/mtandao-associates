import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { news } from "@/data/news";

export function generateStaticParams() {
  return news.map((n) => ({ slug: n.slug }));
}

export default async function NewsPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = news.find((n) => n.slug === slug);

  if (!post) notFound();

  return (
    <main>
      <Header />
      <article className="max-w-3xl mx-auto px-6 pt-32 pb-24">
        <p className="font-mono text-xs text-signal mb-3">
          {post.category} · {new Date(post.date).toLocaleDateString("en-KE", { year: "numeric", month: "long", day: "numeric" })}
        </p>
        <h1 className="font-display text-3xl mb-10">{post.title}</h1>
        <div className="space-y-5">
          {post.body.map((p, i) => (
            <p key={i} className="text-muted leading-relaxed">{p}</p>
          ))}
        </div>
      </article>
      <Footer />
    </main>
  );
}