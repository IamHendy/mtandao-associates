import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";

// The four headline services shown in this section. Everything else is listed under Solutions.
export const FEATURED_SLUGS = ["unified-communication", "penetration-testing", "managed-services"];

const featured = [
  {
    title: "Cyber Security Awareness Training",
    summary: "Short, engaging sessions that teach staff to spot and handle phishing, malware and ransomware.",
    image: "/services/training.jpg",
    href: "/training",
  },
  ...FEATURED_SLUGS.map((slug) => {
    const s = services.find((x) => x.slug === slug)!;
    return { title: s.title, summary: s.summary, image: s.image, href: `/services/${s.slug}` };
  }),
];

export default function Services() {
  return (
    <section id="services" className="bg-bar-deep py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading title="Our Services" light />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((s) => (
            <ServiceCard key={s.href} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
