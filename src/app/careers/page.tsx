import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { benefits, careersIntro, roles } from "@/content/careers";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join the Baithak team on Phewa Lakeside, Pokhara.",
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow={careersIntro.subtitle}
        title={careersIntro.title}
        subtitle={careersIntro.body[0]}
        image="/media/team.jpg"
      />

      <section className="bg-paper py-16 md:py-24">
        <div className="site-container">
          <Reveal>
            <p className="max-w-3xl text-lg text-ink-soft leading-relaxed">
              {careersIntro.body[1]}
            </p>
          </Reveal>

          <div className="mt-16">
            <p className="eyebrow text-lake">A range of roles</p>
            <h2 className="font-display mt-3 text-4xl">Explore current openings</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {roles.map((role, i) => (
                <Reveal key={role.title} delay={i * 0.06}>
                  <div className="border border-[var(--line)] bg-cream p-7">
                    <h3 className="font-display text-2xl">{role.title}</h3>
                    <p className="mt-3 text-ink-soft">{role.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="mt-20">
            <p className="eyebrow text-lake">Plentiful perks</p>
            <h2 className="font-display mt-3 text-4xl">
              Benefits that enrich life at Baithak
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map((b, i) => (
                <Reveal key={b.title} delay={i * 0.05}>
                  <div className="border-t border-[var(--line)] pt-5">
                    <h3 className="font-display text-xl">{b.title}</h3>
                    <p className="mt-2 text-sm text-ink-soft">{b.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal>
            <div className="mt-20 border border-[var(--line)] bg-cream p-8 text-center md:p-12">
              <h2 className="font-display text-3xl md:text-4xl">Work with us</h2>
              <p className="mx-auto mt-4 max-w-xl text-ink-soft">
                Send a short note about yourself and the role you fancy. We read every
                message over chiya.
              </p>
              <a
                href={`mailto:${site.location.email}?subject=Baithak%20careers`}
                className="eyebrow mt-8 inline-flex bg-ink px-6 py-4 text-cream transition hover:bg-lake"
              >
                Apply by email
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
