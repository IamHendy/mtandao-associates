import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms and Conditions | Mtandao Associates",
  description: "The terms that apply when you use the Mtandao Associates website or contact us.",
};

const sections = [
  {
    title: "1. Who we are",
    body: [
      "This website is run by Mtandao Associates (\"we\", \"us\", \"our\"), an ICT security and systems consultancy based in Kenya. You can reach us at info@mtandaoassociates.com, on 0727 589 335, or on 0742 885 437.",
      "By using this website you agree to these terms. If you do not agree, please do not use the site.",
    ],
  },
  {
    title: "2. Information on this website",
    body: [
      "The content on this site, including service descriptions and training information, is general information. It is not a security assessment of your systems and is not legal or regulatory advice.",
      "We try to keep the site accurate and up to date, but we do not guarantee that every detail is complete or current.",
    ],
  },
  {
    title: "3. Our services",
    body: [
      "Nothing on this website is an offer to provide services on fixed terms. Any work we do for you, such as firewall deployment, endpoint security, audits, system development or training, is covered by a separate written quotation or agreement.",
      "If that agreement conflicts with these terms, the agreement takes priority.",
    ],
  },
  {
    title: "4. Contact form and your personal data",
    body: [
      "When you use the contact form we collect your name, email address, phone number (if you give it) and your message. We use this only to reply to your enquiry and to follow up on any work you ask about.",
      "We handle personal data in line with the Data Protection Act, 2019 of Kenya. We do not sell your details or share them with third parties for marketing. Our email provider processes form submissions on our behalf so that they reach our inbox.",
      "You can ask us to see, correct or delete the information we hold about you by emailing info@mtandaoassociates.com.",
    ],
  },
  {
    title: "5. Acceptable use",
    body: [
      "You must not use this website to send spam, upload malicious code, attempt to gain unauthorised access to our systems, or interfere with the site working normally.",
      "If you believe you have found a security issue on this website, please tell us at info@mtandaoassociates.com rather than testing it further.",
    ],
  },
  {
    title: "6. Intellectual property",
    body: [
      "The text, logo and design of this website belong to Mtandao Associates unless stated otherwise. You may share links to our pages, but you may not copy or republish our content as your own without written permission.",
      "Product names such as WatchGuard belong to their respective owners and are used only to describe the products we work with.",
    ],
  },
  {
    title: "7. Links to other websites",
    body: [
      "We may link to outside sites, such as Mtandao Institute or vendor websites. We are not responsible for their content or how they handle your data.",
    ],
  },
  {
    title: "8. Limitation of liability",
    body: [
      "To the extent the law allows, we are not liable for any loss or damage that results from relying on the general information on this website. This does not limit any liability that cannot be excluded under Kenyan law.",
    ],
  },
  {
    title: "9. Changes to these terms",
    body: [
      "We may update these terms from time to time. The date at the top of this page shows when they were last changed. Continuing to use the site after a change means you accept the updated terms.",
    ],
  },
  {
    title: "10. Governing law",
    body: [
      "These terms are governed by the laws of Kenya, and any dispute will be handled by the courts of Kenya.",
    ],
  },
];

export default function TermsPage() {
  return (
    <main>
      <Header />

      <article className="max-w-3xl mx-auto px-6 pt-16 pb-24">
        <h1 className="font-display text-4xl mb-3">Terms and Conditions</h1>
        <p className="text-muted text-sm mb-12">Last updated: 23 October 2026</p>

        <div className="space-y-10">
          {sections.map((s) => (
            <section key={s.title}>
              <h2 className="font-display text-xl mb-3">{s.title}</h2>
              <div className="space-y-3">
                {s.body.map((p, i) => (
                  <p key={i} className="text-muted leading-relaxed">{p}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </article>

      <Footer />
    </main>
  );
}
