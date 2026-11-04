"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MenuSearch } from "@/components/MenuSearch";
import { site } from "@/content/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const light = isHome && !scrolled && !open && !searchOpen;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          light
            ? "bg-transparent text-white"
            : "border-b border-[var(--line)] bg-[color-mix(in_oklab,var(--paper)_92%,transparent)] text-ink backdrop-blur-md"
        }`}
      >
        <div className="site-container-wide flex h-16 items-center justify-between md:h-[4.5rem]">
          <div className="flex items-center gap-4">
            <button
              type="button"
              aria-label={open ? "Close menu" : "Toggle menu"}
              aria-expanded={open}
              onClick={() => {
                setSearchOpen(false);
                setOpen((v) => !v);
              }}
              className={`relative z-[60] flex h-11 w-11 shrink-0 items-center justify-center overflow-visible rounded-full transition ${
                light ? "hover:bg-white/10" : "hover:bg-ink/5"
              }`}
            >
              <MenuToggleIcon open={open} />
            </button>
            <Link
              href="/"
              className="font-display text-xl tracking-[0.18em] uppercase md:text-2xl"
            >
              {site.name}
            </Link>
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <button
              type="button"
              aria-label="Search menus"
              className="flex h-10 w-10 items-center justify-center opacity-80 transition hover:opacity-100"
              onClick={() => {
                setOpen(false);
                setSearchOpen(true);
              }}
            >
              <SearchIcon />
            </button>
            <Link
              href="/reservations"
              className={`eyebrow rounded-full border px-4 py-2 transition hover:bg-white/10 ${
                light ? "border-white/70" : "border-ink/40 hover:bg-ink/5"
              }`}
            >
              Book a table
            </Link>
          </div>
        </div>
      </header>

      <div
        className={`nav-drawer fixed inset-0 z-40 bg-ink text-cream ${
          open
            ? "translate-x-0"
            : "pointer-events-none invisible -translate-x-full"
        }`}
        aria-hidden={!open}
      >
        <div className="site-container flex h-full flex-col pt-24 pb-10">
          <nav className="flex flex-1 flex-col gap-1">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-display border-b border-white/10 py-4 text-3xl tracking-wide transition hover:text-white md:text-5xl"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-8 space-y-2 text-sm text-cream/70">
            <p>{site.location.addressLine1}</p>
            <p>{site.location.addressLine2}</p>
            <p>{site.location.hours}</p>
            <a href={`tel:${site.location.phone}`} className="block pt-2 text-cream">
              {site.location.phone}
            </a>
          </div>
        </div>
      </div>

      <MenuSearch open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}

function MenuToggleIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className="block overflow-visible"
      style={{ overflow: "visible" }}
    >
      {open ? (
        <>
          <line
            x1="7"
            y1="7"
            x2="17"
            y2="17"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
          <line
            x1="17"
            y1="7"
            x2="7"
            y2="17"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
        </>
      ) : (
        <>
          <line
            x1="4"
            y1="7"
            x2="20"
            y2="7"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
          <line
            x1="4"
            y1="12"
            x2="20"
            y2="12"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
          <line
            x1="4"
            y1="17"
            x2="20"
            y2="17"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
        </>
      )}
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M16 16l4.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
