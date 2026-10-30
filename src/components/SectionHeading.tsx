// Centered uppercase title with a short underline, used for each homepage section.
export default function SectionHeading({ title, light = false }: { title: string; light?: boolean }) {
  return (
    <div className="text-center mb-14" data-reveal>
      <h2 className={`font-display text-2xl md:text-3xl font-bold uppercase tracking-wide ${light ? "text-white" : ""}`}>
        {title}
      </h2>
      <span className="section-rule mt-4 inline-flex items-center gap-1.5" aria-hidden="true">
        <span className="h-0.5 w-10 bg-signal" />
        <span className="h-1.5 w-1.5 rounded-full bg-signal" />
        <span className="h-0.5 w-10 bg-signal" />
      </span>
    </div>
  );
}
