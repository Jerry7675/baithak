import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ReservationForm } from "@/components/ReservationForm";
import { Reveal } from "@/components/Reveal";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Reservations",
  description: "Book a table at Baithak Lakeside, Pokhara.",
};

export default function ReservationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Reservations"
        title="Bookings and reservations at Baithak"
        subtitle="Book a table anytime before 6pm. After 6pm, groups of six or more may book. If your desired time isn’t available, simply come along — we keep most of our tables for walk-ins."
        image="/media/hotel-interior.jpg"
      />

      <section className="bg-paper py-16 md:py-24">
        <div className="site-container grid gap-12 md:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl">
              Join for breakfast, lunch, afternoon snacking, dinner and evening tipples.
            </h2>
            <ul className="mt-8 space-y-4 text-ink-soft">
              <li>Large groups (8+) — please note your occasion in the form.</li>
              <li>Terrace seats are weather-dependent and cannot be guaranteed.</li>
              <li>
                Telephone:{" "}
                <a href={`tel:${site.location.phone}`} className="underline">
                  {site.location.phone}
                </a>
              </li>
              <li>
                Email:{" "}
                <a href={`mailto:${site.location.email}`} className="underline">
                  {site.location.email}
                </a>
              </li>
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="border border-[var(--line)] bg-cream p-6 md:p-10">
              <p className="eyebrow text-lake">Request a table</p>
              <h3 className="font-display mt-2 text-3xl">Baithak Lakeside</h3>
              <div className="mt-8">
                <ReservationForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
