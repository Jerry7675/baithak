import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="rule-stack bg-cream opacity-100" />
      <div className="site-container grid gap-10 py-14 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <BrandLogo light className="[&_span]:text-2xl md:[&_span]:text-3xl" />
          <p className="mt-3 max-w-sm text-cream/70">{site.tagline}</p>
          <p className="mt-6 text-sm text-cream/60">
            {site.location.hotel}
            <br />
            {site.location.addressLine1}
            <br />
            {site.location.addressLine2}
          </p>
        </div>
        <div>
          <p className="eyebrow text-cream/50">Visit</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/our-place" className="hover:underline">
                Our Place
              </Link>
            </li>
            <li>
              <Link href="/menus" className="hover:underline">
                Menus
              </Link>
            </li>
            <li>
              <Link href="/reservations" className="hover:underline">
                Reservations
              </Link>
            </li>
            <li>
              <Link href="/gifts" className="hover:underline">
                Gifts & sundries
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="eyebrow text-cream/50">More</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/stories" className="hover:underline">
                Stories
              </Link>
            </li>
            <li>
              <Link href="/careers" className="hover:underline">
                Careers
              </Link>
            </li>
            <li>
              <Link href="/accessibility" className="hover:underline">
                Accessibility
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:underline">
                Privacy
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="site-container flex flex-col gap-2 py-6 text-xs text-cream/45 sm:flex-row sm:justify-between">
          <p>© 2026 Baithak Lakeside, Pokhara</p>
          <p>An imaginary hotel dining room — for demonstration</p>
        </div>
      </div>
    </footer>
  );
}
