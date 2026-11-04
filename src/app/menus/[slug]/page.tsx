import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { getMenu, menus } from "@/content/menus";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return menus.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const menu = getMenu(slug);
  if (!menu) return { title: "Menu" };
  return { title: menu.title, description: menu.blurb };
}

export default async function MenuDetailPage({ params }: Props) {
  const { slug } = await params;
  const menu = getMenu(slug);
  if (!menu) notFound();

  return (
    <>
      <PageHero
        eyebrow="Menu"
        title={menu.title}
        subtitle={menu.blurb}
        image={menu.image}
      />

      <section className="bg-paper py-14 md:py-20">
        <div className="site-container mb-10 flex flex-wrap gap-3">
          {menus.map((m) => (
            <Link
              key={m.slug}
              href={`/menus/${m.slug}`}
              className={`eyebrow border px-4 py-2 transition ${
                m.slug === menu.slug
                  ? "border-ink bg-ink text-cream"
                  : "border-[var(--line)] text-ink hover:border-ink/40"
              }`}
            >
              {m.title}
            </Link>
          ))}
        </div>

        <div className="site-container max-w-4xl space-y-14">
          {menu.sections.map((section) => (
            <div key={section.title}>
              <h2 className="font-display text-3xl md:text-4xl">{section.title}</h2>
              {section.intro ? (
                <p className="mt-2 text-ink-soft">{section.intro}</p>
              ) : null}
              <ul className="mt-8 divide-y divide-[var(--line)]">
                {section.items.map((item) => (
                  <li
                    key={item.name}
                    className="grid grid-cols-[88px_1fr] items-start gap-4 py-6 sm:grid-cols-[112px_1fr_auto] sm:gap-6"
                  >
                    <div className="aspect-square overflow-hidden bg-cream">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-baseline gap-3">
                        <h3 className="font-display text-2xl">{item.name}</h3>
                        {item.tags?.map((tag) => (
                          <span
                            key={tag}
                            className="eyebrow rounded-full border border-[var(--line)] px-2 py-0.5 text-[0.6rem] text-ink/50"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-soft">
                        {item.description}
                      </p>
                      <p className="font-display mt-3 text-lg text-lake sm:hidden">
                        NPR {item.price}
                      </p>
                    </div>
                    <p className="hidden font-display text-xl text-lake sm:block">
                      NPR {item.price}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="site-container mt-16 text-center">
          <Link
            href="/reservations"
            className="eyebrow inline-flex bg-ink px-6 py-4 text-cream transition hover:bg-lake"
          >
            Book a table
          </Link>
        </div>
      </section>
    </>
  );
}
