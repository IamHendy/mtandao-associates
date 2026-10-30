import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Training | Mtandao Associates",
  description:
    "Cybersecurity, GRC, data protection and AI automation training for staff and students, delivered through Mtandao Institute.",
};

const INSTITUTE_URL = "https://mtandaoinstitute.co.ke";

const courses = [
  {
    title: "Cyber Security Awareness",
    desc: "For all staff: common threats like malware, spear phishing and ransomware, and how to recognise and handle them.",
  },
  {
    title: "Cybersecurity",
    desc: "Practical security skills: firewalls, endpoint protection, threat detection and incident response.",
  },
  {
    title: "Governance, Risk & Compliance",
    desc: "How to write ICT policies, assess risk and prepare for audits in regulated organisations.",
  },
  {
    title: "Data Protection",
    desc: "What the Data Protection Act, 2019 requires of your organisation and how to put it into practice.",
  },
  {
    title: "AI Automation",
    desc: "Using AI-based tools to automate monitoring and routine security work, with hands-on labs.",
  },
  {
    title: "ICT Admin Handover",
    desc: "Training for your systems admins on any technology or service we deploy for you.",
  },
];

export default function TrainingPage() {
  return (
    <main>
      <Header />

      <section className="max-w-4xl mx-auto px-6 pt-16 pb-24">
        <h1 className="font-display text-4xl mb-6">We offer training</h1>
        <p className="text-muted mb-4 max-w-2xl">
          We train company staff, ICT teams and students in cybersecurity, GRC, data
          protection and AI automation. Courses are run through Mtandao Institute, our
          training arm, with both in-person sessions and e-campus learning.
        </p>
        <p className="text-muted mb-10 max-w-2xl">
          Course dates, fees and enrolment are on the Mtandao Institute website.
        </p>

        <a
          href={INSTITUTE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-signal text-graphite font-medium px-6 py-3 rounded-sm hover:brightness-110 transition"
        >
          Learn more at Mtandao Institute
        </a>

        <h2 className="font-display text-2xl mt-20 mb-4">Cyber Security Awareness Training</h2>
        <p className="text-muted mb-8 max-w-2xl">
          Most breaches start with a human error, often a single email. This course shows
          staff the threats they will meet, why email matters so much, and the skills to
          recognise and handle an attack before it reaches the business.
        </p>
        <figure className="rounded-sm border border-line/10 bg-white p-4 sm:p-6">
          <Image
            src="/training/awareness-training.png"
            alt="Cyber Security Awareness Training covers common cyber threats (malware, spear phishing, ransomware), why it matters (human errors, protecting the business), the role of emails (information sharing, client communication) and employee skills (recognising and handling threats)."
            width={1610}
            height={674}
            sizes="(max-width: 896px) 100vw, 848px"
            className="w-full h-auto"
          />
        </figure>

        <h2 className="font-display text-2xl mt-20 mb-8">What we teach</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {courses.map((c) => (
            <div key={c.title} className="group border border-line/10 rounded-sm p-6 bg-panel/50 transition duration-300 ease-out hover:-translate-y-1 hover:border-signal/60 hover:shadow-[0_18px_40px_-18px_rgba(227,30,36,0.45)]">
              <h3 className="font-display text-lg mb-2 transition-colors duration-300 group-hover:text-signal">{c.title}</h3>
              <p className="text-muted text-sm">{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-line/10 pt-8">
          <p className="text-muted mb-4">
            Want training arranged for your own team? Tell us how many people and which topics.
          </p>
          <Link href="/#contact" className="text-signal font-medium hover:underline">
            Contact us about group training
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
