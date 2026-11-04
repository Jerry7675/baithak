"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { site } from "@/content/site";

export function HomeHero() {
  const [hasVideo, setHasVideo] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch("/media/hero-video.mp4", { method: "HEAD" })
      .then((res) => {
        if (!cancelled && res.ok) setHasVideo(true);
      })
      .catch(() => {
        /* image fallback */
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="relative h-[100svh] min-h-[640px] overflow-hidden bg-ink text-white">
      {hasVideo ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/media/hero-lake.jpg"
        >
          <source src="/media/hero-video.mp4" type="video/mp4" />
        </video>
      ) : (
        <img
          src="/media/hero-lake.jpg"
          alt="Phewa Lake at dusk"
          className="ken-burns absolute inset-0 h-full w-full object-cover"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/65" />

      <div className="relative z-10 flex h-full flex-col">
        <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="eyebrow drop-shadow-md"
          >
            {site.eyebrow}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.28 }}
            className="font-display mt-5 max-w-4xl text-4xl leading-[1.1] tracking-tight text-shadow-hero sm:text-6xl md:text-7xl"
          >
            “{site.tagline}”
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="mt-6 max-w-md text-sm text-white/85 drop-shadow sm:text-base"
          >
            Nepali comfort food on Phewa Lakeside — breakfast, lunch, dinner and
            evening tipples.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="pb-10"
        >
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-center">
            <Link
              href="/menus"
              className="eyebrow tracking-[0.18em] hover:opacity-80"
            >
              View menus
            </Link>
            <span className="opacity-40" aria-hidden>
              |
            </span>
            <Link
              href="/reservations"
              className="eyebrow tracking-[0.18em] hover:opacity-80"
            >
              Book a table
            </Link>
          </div>
        </motion.div>
      </div>
      <div className="absolute inset-x-0 bottom-0 rule-stack bg-cream" />
    </section>
  );
}
