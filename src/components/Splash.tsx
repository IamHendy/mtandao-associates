import { LogoMark } from "@/components/Logo";

// Logo intro shown while the site first loads. It is pure CSS (see .splash in globals.css),
// so it removes itself even if JavaScript fails, and it only plays once per browser session.
export default function Splash() {
  return (
    <div className="splash" aria-hidden="true">
      <div className="splash-inner">
        <LogoMark width={140} priority />
        <span className="splash-bar" />
      </div>
    </div>
  );
}
