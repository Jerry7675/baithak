import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Our Place",
  description:
    "Baithak Lakeside — Nepali restaurant & hotel dining on Phewa Lake, Pokhara.",
};

export default function OurPlacePage() {
  const { location } = site;

  return (
    <>
      <PageHero
        eyebrow="Our place"
        title="Baithak cafés of the lake — one room, many stories"
        subtitle="Every Baithak begins with a founding myth rooted in Pokhara’s lake life and hill kitchens."
        image="/media/story-lake.jpg"
      />

      <section className="bg-paper py-16 md:py-24">
        <div className="site-container grid gap-12 md:grid-cols-2 md:items-start">
          <Reveal>
            <p className="eyebrow text-lake">Founding story</p>
            <h2 className="font-display mt-3 text-4xl md:text-5xl">
              Baithak Lakeside
            </h2>
            <div className="prose-baithak mt-6">
              <p>
                On Phewa’s western shore, where boardwalk chatter meets mountain
                silence, Baithak found a home inside a small hotel that still
                keeps ceiling fans slow and brass thals polished. The dining
                room looks straight at the water — and beyond it, on clear
                mornings, the Annapurna range.
              </p>
              <p>
                Open all day, every day, serving Nepali comfort food for
                breakfast, lunch, dinner and evening tipples. Hotel guests and
                walk-ins alike. All are welcome.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="border border-[var(--line)] bg-cream p-8 md:p-10">
              <p className="eyebrow text-ink/45">Visit</p>
              <h3 className="font-display mt-3 text-3xl">{location.name}</h3>
              <p className="mt-2 text-ink-soft">{location.hotel}</p>
              <address className="mt-6 not-italic leading-relaxed text-ink-soft">
                {location.addressLine1}
                <br />
                {location.addressLine2}
              </address>
              <dl className="mt-8 space-y-4 text-sm">
                <div>
                  <dt className="eyebrow text-ink/40">Hours</dt>
                  <dd className="mt-1">{location.hours}</dd>
                </div>
                <div>
                  <dt className="eyebrow text-ink/40">Telephone</dt>
                  <dd className="mt-1">
                    <a
                      href={`tel:${location.phone}`}
                      className="hover:underline"
                    >
                      {location.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow text-ink/40">Email</dt>
                  <dd className="mt-1">
                    <a
                      href={`mailto:${location.email}`}
                      className="hover:underline"
                    >
                      {location.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow text-ink/40">Nearby</dt>
                  <dd className="mt-1">{location.nearest}</dd>
                </div>
              </dl>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/reservations"
                  className="eyebrow bg-ink px-5 py-3 text-cream transition hover:bg-lake"
                >
                  Book a table
                </Link>
                <Link
                  href="/menus"
                  className="eyebrow border border-ink/25 px-5 py-3 transition hover:bg-ink hover:text-cream"
                >
                  View menus
                </Link>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="site-container mt-16 grid gap-4 md:grid-cols-3">
          {[
            "/media/hotel-interior.jpg",
            "/media/hero-lake.jpg",
            "/media/annapurna.jpg",
          ].map((src, i) => (
            <Reveal key={src} delay={i * 0.08}>
              <img
                src={src}
                alt=""
                className="aspect-[4/5] w-full object-cover"
              />
            </Reveal>
          ))}
        </div>

        <div className="site-container mt-16">
          <Reveal>
            <div className="overflow-hidden border border-[var(--line)] bg-cream">
              <div className="aspect-[21/9] bg-[linear-gradient(135deg,#1f4f4a_0%,#3a342e_55%,#8b4518_100%)] p-8 text-cream md:p-12">
                <p className="eyebrow opacity-70">Map</p>
                <h3 className="font-display mt-3 text-3xl md:text-4xl">
                  Lakeside Road, Phewa Lake
                </h3>
                <p className="mt-3 max-w-lg text-cream/75">
                  Find us along the main Lakeside strip, a short stroll from the
                  Phewa boardwalk and the colourful boats at the shore. Ask any
                  rickshaw for Baithak Hotel.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
