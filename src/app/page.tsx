import Link from "next/link";
import { DishCarousel } from "@/components/DishCarousel";
import { HomeHero } from "@/components/HomeHero";
import { Reveal } from "@/components/Reveal";
import { site } from "@/content/site";

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <section className="bg-paper py-20 md:py-28">
        <div className="site-container grid items-center gap-12 md:grid-cols-2">
          <Reveal>
            <p className="eyebrow text-lake">A love letter to Pokhara</p>
            <h2 className="font-display mt-4 text-4xl leading-tight md:text-5xl">
              Each Baithak is a gathering by the water — its food, its people, its lake light.
            </h2>
            <p className="mt-6 text-ink-soft leading-relaxed">
              So many voices from so many trails join together in Pokhara. Past the boardwalk
              crowds and between the layers of mountain weather, there is magic: hidden
              courtyards, slow chiya, the most delicious comfort food and countless stories
              still being told.
            </p>
            <p className="mt-4 text-sm text-ink/50">
              ABOVE: Morning mist lifting over Phewa Lake
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="overflow-hidden">
              <img
                src="/media/pokhara-street.jpg"
                alt="Lakeside Pokhara"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-cream py-16 md:py-20">
        <div className="site-container">
          <Reveal>
            <p className="eyebrow text-center text-ink/50">
              Peruse menus, book tables, explore gifts and sundries
            </p>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                href: "/menus",
                title: "Menus",
                text: "Breakfast, lunch, dinner and late tipples",
              },
              {
                href: "/reservations",
                title: "Reservations",
                text: "For bookings and large groups",
              },
              {
                href: "/gifts",
                title: "Gifts",
                text: "First-class gifts and sundries",
              },
            ].map((item, i) => (
              <Reveal key={item.href} delay={i * 0.08}>
                <Link
                  href={item.href}
                  className="group block border border-[var(--line)] bg-paper p-8 transition hover:border-ink/40"
                >
                  <p className="eyebrow text-lake">{item.title}</p>
                  <p className="font-display mt-4 text-3xl transition group-hover:text-lake">
                    {item.text}
                  </p>
                  <span className="eyebrow mt-8 inline-block opacity-50 group-hover:opacity-100">
                    Explore →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-20 md:py-28">
        <div className="site-container grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <Reveal>
            <p className="eyebrow text-lake">Eat your way through the hills</p>
            <h2 className="font-display mt-4 text-4xl md:text-5xl">
              Take refuge with a warming cup of chiya, a simple snack or sublime feast
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-ink-soft leading-relaxed">
              At Baithak you’ll find the food of all Nepal — its tea shops, Newari khaja
              houses, trail-side stalls and family tables. This food evokes fond memories:
              the simple pleasure of sipping chiya with sel roti, the fire of sekuwa on
              charcoal, the comfort of dal bhat shared with friends. We serve true Nepali
              comfort food inspired by Pokhara’s most treasured corners.
            </p>
          </Reveal>
        </div>

        <div className="site-container-wide mt-14 grid gap-4 sm:grid-cols-3">
          {[
            { src: "/media/dal-bhat.jpg", caption: "Succulent grills, pickles and silky dal" },
            { src: "/media/chiya.jpg", caption: "Brewing morning chiya, Lakeside" },
            { src: "/media/sekuwa.jpg", caption: "Charcoal sekuwa with onion salad" },
          ].map((img, i) => (
            <Reveal key={img.src} delay={i * 0.08}>
              <figure>
                <img
                  src={img.src}
                  alt={img.caption}
                  className="aspect-[4/5] w-full object-cover"
                />
                <figcaption className="mt-3 text-xs uppercase tracking-[0.16em] text-ink/45">
                  Above: {img.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <div className="site-container mt-14 max-w-3xl">
          <Reveal>
            <p className="text-ink-soft leading-relaxed">
              Begin the day with breakfast — sel roti, a laden thal or a bowl of warm
              porridge. Lunch lightly on momo or thukpa. Unfurl into the afternoon with
              sips of chiya. The evening brings smoky sekuwa, robust goat curry and trout
              from the cold rivers. Come, savour Newari khaja with mustard greens and a
              cold Gorkha on the terrace.
            </p>
            <Link
              href="/menus"
              className="eyebrow mt-8 inline-flex border border-ink/25 px-5 py-3 transition hover:bg-ink hover:text-cream"
            >
              View menus
            </Link>
          </Reveal>
        </div>
      </section>

      <DishCarousel />

      <section className="relative overflow-hidden bg-ink py-24 text-cream md:py-32">
        <img
          src="/media/annapurna.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-ink/55" />
        <div className="relative site-container text-center">
          <Reveal>
            <p className="eyebrow opacity-70">Baithak Hotel & Dining</p>
            <h2 className="font-display mx-auto mt-4 max-w-3xl text-4xl md:text-6xl">
              Stay for supper. Stay the night. Stay for the lake light.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-cream/75">
              Our dining room sits inside Baithak Hotel on Phewa Lakeside — open all day,
              every day. All are welcome.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/our-place"
                className="eyebrow border border-white/40 px-5 py-3 transition hover:bg-white hover:text-ink"
              >
                Explore our place
              </Link>
              <Link
                href="/reservations"
                className="eyebrow bg-cream px-5 py-3 text-ink transition hover:bg-white"
              >
                Book a table
              </Link>
            </div>
            <p className="mt-10 text-sm text-cream/55">
              {site.location.addressLine1} · {site.location.hours}
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
