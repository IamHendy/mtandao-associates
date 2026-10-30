import Logo from "@/components/Logo";
import Link from "next/link";

const links = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Solutions", href: "/#solutions" },
  { label: "How We Work", href: "/#how-we-work" },
  { label: "Training", href: "/training" },
  { label: "Contact", href: "/#contact" },
  { label: "Terms and Conditions", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className="bg-bar text-white border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
        <div>
          <div className="mb-5">
            <Logo width={72} onDark />
          </div>
          <p className="text-white/70 text-sm leading-relaxed">
            <strong className="text-white/90">Mtandao Associates Ltd</strong> is a leader in network
            security and data protection consulting: firewall implementation, SD-WAN connectivity,
            multi-factor authentication, email security, and cloud and data backup.
          </p>
          <p className="text-signal text-sm mt-6">© {new Date().getFullYear()} All Rights Reserved</p>
        </div>

        <div>
          <p className="font-display text-lg uppercase tracking-widest mb-6">Contact</p>
          <div className="space-y-3 text-sm">
            <p>
              Utawala,
              <br />
              Nairobi, Kenya.
            </p>
            <p>
              Tel: <a href="tel:+254727589335" className="hover:text-signal">0727-589335</a>
              <br />
              Cell: <a href="tel:+254742885437" className="hover:text-signal">0742-885437</a>
            </p>
            <p>
              Email:{" "}
              <a href="mailto:info@mtandaoassociates.com" className="hover:text-signal">
                info@mtandaoassociates.com
              </a>
            </p>
          </div>
        </div>

        <div>
          <p className="font-display text-lg uppercase tracking-widest mb-6">Our Links</p>
          <ul className="space-y-3 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="inline-block transition hover:translate-x-1 hover:text-signal">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
