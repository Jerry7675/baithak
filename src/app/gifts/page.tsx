import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { giftCategories, gifts } from "@/content/gifts";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Gifts",
  description: "Gifts and sundries from Baithak Lakeside — chiya, achar, merch and hampers.",
};

export default function GiftsPage() {
  return (
    <>
      <PageHero
        eyebrow="Baithak store"
        title="A choice selection of most-cherished gifts and sundries"
        subtitle="Suitable for all persons and purses — available at the Lakeside shop counter."
        image="/media/gift-tea.jpg"
      />

      <section className="bg-paper py-14 md:py-20">
        <div className="site-container">
          <Reveal>
            <ol className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-soft">
              {giftCategories.map((cat, i) => (
                <li key={cat}>
                  <span className="eyebrow text-ink/35">
                    {String(i + 1).padStart(2, "0")}.
                  </span>{" "}
                  {cat}
                </li>
              ))}
            </ol>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {gifts.map((gift, i) => (
              <Reveal key={gift.id} delay={i * 0.04}>
                <article className="group flex h-full flex-col border border-[var(--line)] bg-cream">
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={gift.image}
                      alt={gift.name}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    {gift.badge ? (
                      <span className="eyebrow absolute left-3 top-3 bg-paper/90 px-2 py-1 text-[0.6rem]">
                        {gift.badge}
                      </span>
                    ) : null}
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <p className="eyebrow text-ink/40">{gift.category}</p>
                    <h2 className="font-display mt-2 text-2xl">{gift.name}</h2>
                    <p className="mt-2 flex-1 text-sm text-ink-soft">
                      {gift.description}
                    </p>
                    <p className="mt-4 font-display text-xl text-lake">
                      NPR {gift.price}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="mt-14 max-w-2xl text-center text-sm text-ink-soft md:mx-auto">
              Online checkout is not available yet. Visit the shop at{" "}
              {site.location.addressLine1}, or write to{" "}
              <a href={`mailto:${site.location.email}`} className="underline">
                {site.location.email}
              </a>{" "}
              for gift enquiries and hotel delivery.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
