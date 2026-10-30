"use client";
import Image from "next/image";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setStatus("sent");
      form.reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="grid lg:grid-cols-2">
      <div className="relative min-h-80 flex items-center">
        <Image src="/slides/network-cables.jpg" alt="" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
        <div className="absolute inset-0 bg-bar/85" />
        <div className="relative px-6 py-16 sm:px-12 lg:px-16 max-w-xl ml-auto text-white" data-reveal>
          <h2 className="font-display text-3xl font-bold mb-5">
            Get the Best Network Solutions to Secure Your Network
          </h2>
          <p className="text-white/75 mb-8">
            We offer security solutions that deliver the technologies required to stop
            advanced cyber-attacks on your network and endpoints.
          </p>
          <div className="text-sm space-y-2 text-white/80">
            <p>
              <a href="mailto:info@mtandaoassociates.com" className="hover:text-signal">info@mtandaoassociates.com</a>
            </p>
            <p>
              Tel: <a href="tel:+254727589335" className="hover:text-signal">0727 589 335</a>
              {" · "}
              Cell: <a href="tel:+254742885437" className="hover:text-signal">0742 885 437</a>
            </p>
          </div>
        </div>
      </div>

      <div className="bg-panel px-6 py-16 sm:px-12 lg:px-16">
        <h3 className="font-display text-2xl font-bold uppercase tracking-wide mb-2">Request a free consultation</h3>
        <p className="text-muted mb-8 text-sm">
          Tell us a bit about your network and what you need. We reply by email or phone,
          usually within one working day.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4 max-w-xl" data-reveal style={{ "--d": "150ms" } as React.CSSProperties}>
          <input
            name="name" required placeholder="Full name"
            className="w-full bg-graphite border border-line/15 rounded-md px-4 py-3 text-ink placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secure"
          />
          <input
            name="email" type="email" required placeholder="Email"
            className="w-full bg-graphite border border-line/15 rounded-md px-4 py-3 text-ink placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secure"
          />
          <input
            name="phone" placeholder="Phone (optional)"
            className="w-full bg-graphite border border-line/15 rounded-md px-4 py-3 text-ink placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secure"
          />
          <textarea
            name="message" required rows={4} placeholder="What do you need help with?"
            className="w-full bg-graphite border border-line/15 rounded-md px-4 py-3 text-ink placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secure"
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className="btn-shine bg-signal text-white font-medium px-6 py-3 rounded-md hover:brightness-110 disabled:opacity-50"
          >
            {status === "sending" ? "Sending..." : "Send message"}
          </button>
          {status === "sent" && <p className="text-secure text-sm">Message sent. We&apos;ll get back to you shortly.</p>}
          {status === "error" && <p className="text-signal text-sm">Something went wrong. Try again or email us directly.</p>}
          <p className="text-muted text-xs">
            By sending this form you agree to our{" "}
            <a href="/terms" className="underline hover:text-ink">terms and conditions</a>.
          </p>
        </form>
      </div>
    </section>
  );
}