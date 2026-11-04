"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { searchMenuItems, type MenuSearchHit } from "@/content/menus";

type MenuSearchProps = {
  open: boolean;
  onClose: () => void;
  light?: boolean;
};

export function MenuSearch({ open, onClose }: MenuSearchProps) {
  const inputId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [hits, setHits] = useState<MenuSearchHit[]>([]);

  useEffect(() => {
    if (!open) return;
    setQuery("");
    setHits([]);
    const t = window.setTimeout(() => inputRef.current?.focus(), 50);
    return () => window.clearTimeout(t);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  function onChange(value: string) {
    setQuery(value);
    setHits(searchMenuItems(value));
  }

  return (
    <div className="fixed inset-0 z-[60]" role="dialog" aria-modal="true" aria-label="Search menus">
      <button
        type="button"
        className="absolute inset-0 bg-ink/55 backdrop-blur-sm"
        aria-label="Close search"
        onClick={onClose}
      />
      <div className="relative mx-auto mt-20 w-[min(640px,calc(100%-1.5rem))] border border-[var(--line)] bg-paper shadow-2xl">
        <div className="flex items-center gap-3 border-b border-[var(--line)] px-4 py-3">
          <SearchGlyph />
          <label htmlFor={inputId} className="sr-only">
            Search the menu
          </label>
          <input
            ref={inputRef}
            id={inputId}
            type="search"
            value={query}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Search dishes, sections, tags…"
            className="w-full bg-transparent py-2 text-base text-ink outline-none placeholder:text-ink/35"
            autoComplete="off"
          />
          <button
            type="button"
            onClick={onClose}
            className="eyebrow shrink-0 text-ink/50 transition hover:text-ink"
          >
            Esc
          </button>
        </div>

        <div className="max-h-[min(60vh,420px)] overflow-y-auto">
          {!query.trim() ? (
            <p className="px-5 py-8 text-sm text-ink-soft">
              Search breakfast, all-day, dinner and drinks menus only.
            </p>
          ) : hits.length === 0 ? (
            <p className="px-5 py-8 text-sm text-ink-soft">
              No dishes match “{query.trim()}”.
            </p>
          ) : (
            <ul>
              {hits.map((hit) => (
                <li key={`${hit.menuSlug}-${hit.name}`}>
                  <Link
                    href={`/menus/${hit.menuSlug}`}
                    onClick={onClose}
                    className="grid grid-cols-[64px_1fr] gap-4 border-b border-[var(--line)] px-5 py-4 transition hover:bg-cream"
                  >
                    <div className="aspect-square overflow-hidden bg-cream">
                      <img
                        src={hit.image}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="flex items-baseline justify-between gap-4">
                        <p className="font-display text-xl text-ink">{hit.name}</p>
                        <p className="shrink-0 font-display text-lake">
                          NPR {hit.price}
                        </p>
                      </div>
                      <p className="mt-1 line-clamp-2 text-sm text-ink-soft">
                        {hit.description}
                      </p>
                      <p className="eyebrow mt-2 text-ink/40">
                        {hit.menuTitle} · {hit.sectionTitle}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

function SearchGlyph() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden className="shrink-0 text-ink/50">
      <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M16 16l4.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
