import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Accessibility",
};

export default function AccessibilityPage() {
  return (
    <>
      <PageHero
        title="Accessibility"
        subtitle="We want every guest to feel welcome at Baithak."
        dark={false}
      />
      <section className="bg-paper pb-20">
        <div className="site-container prose-baithak max-w-2xl">
          <p>
            Our Lakeside dining room is on the ground floor with step-free entry from
            the hotel lobby. An accessible washroom is available beside the main
            corridor. Terrace seating includes both steps and a gently ramped path;
            please ask when booking if you need the ramp route.
          </p>
          <p>
            Large-print menus and allergen guidance are available on request. For any
            access needs, write to{" "}
            <a href={`mailto:${site.location.email}`}>{site.location.email}</a> or call{" "}
            {site.location.phone}.
          </p>
        </div>
      </section>
    </>
  );
}
