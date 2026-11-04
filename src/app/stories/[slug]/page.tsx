import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { getStory, stories } from "@/content/stories";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return stories.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const story = getStory(slug);
  if (!story) return { title: "Story" };
  return { title: story.title, description: story.excerpt };
}

export default async function StoryPage({ params }: Props) {
  const { slug } = await params;
  const story = getStory(slug);
  if (!story) notFound();

  const others = stories.filter((s) => s.slug !== story.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={`${story.category} · ${story.date}`}
        title={story.title}
        subtitle={story.excerpt}
        image={story.image}
      />

      <article className="bg-paper py-14 md:py-20">
        <div className="site-container prose-baithak max-w-2xl">
          {story.body.map((para) => (
            <p key={para.slice(0, 24)}>{para}</p>
          ))}
          <Link
            href="/stories"
            className="eyebrow mt-12 inline-flex border border-ink/25 px-5 py-3 no-underline transition hover:bg-ink hover:text-cream"
          >
            ← All stories
          </Link>
        </div>

        <div className="site-container mt-20">
          <p className="eyebrow text-ink/45">Continue reading</p>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {others.map((s) => (
              <Link
                key={s.slug}
                href={`/stories/${s.slug}`}
                className="group border border-[var(--line)] bg-cream"
              >
                <img
                  src={s.image}
                  alt=""
                  className="aspect-[16/10] w-full object-cover"
                />
                <div className="p-5">
                  <p className="font-display text-xl group-hover:text-lake">{s.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
