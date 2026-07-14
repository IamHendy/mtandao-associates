"use client";
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
    <section id="contact" className="max-w-6xl mx-auto px-6 py-24 border-t border-white/10">
      <p className="font-mono text-secure text-sm mb-3">03 — GET IN TOUCH</p>
      <h2 className="font-display text-3xl mb-10 max-w-xl">
        Tell us what you're securing.
      </h2>

      <div className="grid md:grid-cols-2 gap-12">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name" required placeholder="Full name"
            className="w-full bg-panel border border-white/10 rounded-md px-4 py-3 text-ink placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secure"
          />
          <input
            name="email" type="email" required placeholder="Email"
            className="w-full bg-panel border border-white/10 rounded-md px-4 py-3 text-ink placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secure"
          />
          <input
            name="phone" placeholder="Phone (optional)"
            className="w-full bg-panel border border-white/10 rounded-md px-4 py-3 text-ink placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secure"
          />
          <textarea
            name="message" required rows={4} placeholder="What do you need help with?"
            className="w-full bg-panel border border-white/10 rounded-md px-4 py-3 text-ink placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secure"
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className="bg-signal text-graphite font-medium px-6 py-3 rounded-md hover:brightness-110 transition disabled:opacity-50"
          >
            {status === "sending" ? "Sending..." : "Send message"}
          </button>
          {status === "sent" && <p className="text-secure text-sm">Message sent — we'll get back to you shortly.</p>}
          {status === "error" && <p className="text-signal text-sm">Something went wrong. Try again or email us directly.</p>}
        </form>

        <div className="font-mono text-sm space-y-2 text-muted">
          <p className="text-ink">Mtandao Associates</p>
          <p>info@mtandaoassociates.com</p>
          <p>Tel: 0727-589335 · Cell: 0742-885437</p>
        </div>
      </div>
    </section>
  );
}