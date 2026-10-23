import Image from "next/image";

// Logo intro shown while the site first loads. It is pure CSS (see .splash in globals.css),
// so it removes itself even if JavaScript fails, and it only plays once per browser session.
export default function Splash() {
  return (
    <div className="splash" aria-hidden="true">
      <div className="splash-inner">
        <Image src="/logo.png" alt="" width={140} height={112} priority className="splash-logo" />
        <span className="splash-bar" />
      </div>
    </div>
  );
}
