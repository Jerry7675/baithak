import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { menus } from "@/content/menus";

export const metadata: Metadata = {
  title: "Menus",
  description: "Breakfast, all-day, dinner and drinks at Baithak Lakeside, Pokhara.",
};

export default function MenusPage() {
  return (
    <>
      <PageHero
        eyebrow="Baithak menus"
        title="Breakfast, lunch, dinner and late tipples"
        subtitle="Nepali comfort food inspired by tea shops, Newari kitchens and the trails above Pokhara."
        image="/media/dal-bhat.jpg"
      />

      <section className="bg-paper py-16 md:py-24">
        <div className="site-container grid gap-8 md:grid-cols-2">
          {menus.map((menu, i) => (
            <Reveal key={menu.slug} delay={i * 0.06}>
              <Link
                href={`/menus/${menu.slug}`}
                className="group block overflow-hidden border border-[var(--line)] bg-cream"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={menu.image}
                    alt={menu.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-7">
                  <p className="eyebrow text-lake">{menu.subtitle}</p>
                  <h2 className="font-display mt-2 text-4xl">{menu.title}</h2>
                  <p className="mt-3 text-ink-soft">{menu.blurb}</p>
                  <span className="eyebrow mt-6 inline-block opacity-50 group-hover:opacity-100">
                    Open menu →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
