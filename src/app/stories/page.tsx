import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { stories } from "@/content/stories";

export const metadata: Metadata = {
  title: "Stories",
  description: "Recipes, interviews and newest stories from Baithak Lakeside.",
};

export default function StoriesPage() {
  return (
    <>
      <PageHero
        eyebrow="The Baithak Journal"
        title="Browse most-loved recipes, recent interviews and newest stories"
        subtitle="From Pokhara with Love — notes from the lake, the kitchen and the hotel."
        image="/media/annapurna.jpg"
      />

      <section className="bg-paper py-16 md:py-24">
        <div className="site-container grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((story, i) => (
            <Reveal key={story.slug} delay={i * 0.05}>
              <Link
                href={`/stories/${story.slug}`}
                className="group flex h-full flex-col overflow-hidden border border-[var(--line)] bg-cream"
              >
                <div className="aspect-[16/11] overflow-hidden">
                  <img
                    src={story.image}
                    alt=""
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="eyebrow text-lake">
                    {story.category} · {story.date}
                  </p>
                  <h2 className="font-display mt-3 text-2xl leading-snug md:text-3xl">
                    {story.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm text-ink-soft">{story.excerpt}</p>
                  <span className="eyebrow mt-6 opacity-50 group-hover:opacity-100">
                    Read →
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
