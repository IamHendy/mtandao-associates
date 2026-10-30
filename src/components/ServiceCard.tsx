import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Photo on top, then title, then summary and a Read More link. Used by Our Services and Our Solutions.
export default function ServiceCard({
  title,
  summary,
  image,
  href,
  index = 0,
}: {
  title: string;
  summary: string;
  image: string;
  href: string;
  index?: number; // position in the grid, used to stagger the reveal
}) {
  return (
    <div data-reveal className="flex" style={{ "--d": `${(index % 4) * 90}ms` } as React.CSSProperties}>
      <Link
        href={href}
        className="group flex w-full flex-col overflow-hidden rounded-md border border-line/10 bg-panel transition duration-300 hover:-translate-y-1.5 hover:border-signal/60 hover:shadow-[0_18px_40px_-18px_rgba(227,30,36,0.45)]"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={image}
            alt=""
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 270px"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
          <span className="absolute inset-x-0 bottom-0 h-0.5 bg-signal origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" aria-hidden="true" />
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-display font-bold mb-3 group-hover:text-signal transition-colors">{title}</h3>
          <p className="text-muted text-sm mb-6 flex-1">{summary}</p>
          <span className="inline-flex items-center gap-2 text-sm font-medium text-signal">
            Read More
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" aria-hidden="true" />
          </span>
        </div>
      </Link>
    </div>
  );
}
