import Link from "next/link";
import { site } from "@/content/site";

type BrandLogoProps = {
  light?: boolean;
  showWordmark?: boolean;
  className?: string;
};

export function BrandLogo({
  light = false,
  showWordmark = true,
  className = "",
}: BrandLogoProps) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 ${className}`}
      aria-label={`${site.name} home`}
    >
      <img
        src="/brand/logo-mark.svg"
        alt=""
        width={36}
        height={36}
        className={`h-8 w-8 shrink-0 rounded-sm md:h-9 md:w-9 ${
          light ? "ring-1 ring-white/25" : ""
        }`}
      />
      {showWordmark ? (
        <span
          className={`font-display text-xl tracking-[0.18em] uppercase md:text-2xl ${
            light ? "text-white" : "text-ink"
          }`}
        >
          {site.name}
        </span>
      ) : null}
    </Link>
  );
}
