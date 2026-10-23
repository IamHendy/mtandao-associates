import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-line/10 bg-panel/50">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/logo.png"
              alt="Mtandao Associates"
              width={32}
              height={32}
              className="rounded"
            />
            <span className="font-display text-sm">
              MTANDAO ASSOCIATES
            </span>
          </div>

          <p className="text-muted text-sm max-w-xs">
            Firewall deployment, endpoint protection, AI-driven security
            automation, and compliance support for businesses and financial
            institutions.
          </p>
        </div>

        <div>
          <p className="font-mono text-xs text-muted mb-3 tracking-wide">
            QUICK LINKS
          </p>

          <div className="flex flex-col gap-2 text-sm">
            <Link
              href="/#services"
              className="text-muted hover:text-ink transition"
            >
              What We Do
            </Link>

            <Link
              href="/#solutions"
              className="text-muted hover:text-ink transition"
            >
              How We Work
            </Link>

            <Link
              href="/services"
              className="text-muted hover:text-ink transition"
            >
              Full Service Details
            </Link>

            <Link
              href="/training"
              className="text-muted hover:text-ink transition"
            >
              Training
            </Link>

            <Link
              href="/#contact"
              className="text-muted hover:text-ink transition"
            >
              Get In Touch
            </Link>

            <Link
              href="/terms"
              className="text-muted hover:text-ink transition"
            >
              Terms and Conditions
            </Link>
          </div>
        </div>

        <div>
          <p className="font-mono text-xs text-muted mb-3 tracking-wide">
            CONTACT
          </p>

          <div className="flex flex-col gap-2 text-sm text-muted">
            <a
              href="mailto:info@mtandaoassociates.com"
              className="hover:text-ink transition"
            >
              info@mtandaoassociates.com
            </a>

            <p>Tel: 0727-589335 · Cell: 0742-885437</p>
          </div>
        </div>
      </div>

      <div className="border-t border-line/10">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row gap-3 justify-between text-xs text-muted">
          <p>© {new Date().getFullYear()} Mtandao Associates. All rights reserved.</p>
          <Link href="/terms" className="hover:text-ink transition">
            Terms and Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}