import Image from "next/image";
import Link from "next/link";

// The MA mark without its old black box. public/logo-mark.png has a white A for dark
// backgrounds, logo-mark-light.png a dark A for the light theme. Animations live in
// globals.css under "Logo": pop-in, a twinkling sparkle, and a shine that sweeps across.
const RATIO = 181 / 217;

export function LogoMark({
  width,
  onDark = false,
  priority = false,
  className = "",
}: {
  width: number;
  onDark?: boolean; // always on a black surface (footer), so skip the light-theme version
  priority?: boolean;
  className?: string;
}) {
  const height = Math.round(width * RATIO);
  return (
    <span className={`logo-mark relative inline-block shrink-0 ${className}`} style={{ width, height }}>
      <Image
        src="/logo-mark.png"
        alt=""
        width={width}
        height={height}
        priority={priority}
        className={onDark ? "" : "light:hidden"}
      />
      {!onDark && (
        <Image
          src="/logo-mark-light.png"
          alt=""
          width={width}
          height={height}
          priority={priority}
          className="hidden light:block"
        />
      )}
      <span className="logo-shine" aria-hidden="true" />
      <span className="logo-sparkle" aria-hidden="true" />
    </span>
  );
}

export default function Logo({
  width = 64,
  showName = false,
  onDark = false,
  priority = false,
}: {
  width?: number;
  showName?: boolean;
  onDark?: boolean;
  priority?: boolean;
}) {
  return (
    <Link href="/" className="logo group inline-flex items-center gap-3" aria-label="Mtandao Associates Limited, home">
      <LogoMark width={width} onDark={onDark} priority={priority} />
      {showName && (
        <span className="logo-name font-display font-bold text-sm leading-tight tracking-wide" aria-hidden="true">
          {["MTANDAO", "ASSOCIATES", "LIMITED"].map((word, i) => (
            <span key={word} className="block" style={{ "--i": i } as React.CSSProperties}>
              {word}
            </span>
          ))}
        </span>
      )}
    </Link>
  );
}
