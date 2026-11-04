import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy"
        subtitle="How Baithak handles the little information you share with us."
        dark={false}
      />
      <section className="bg-paper pb-20">
        <div className="site-container prose-baithak max-w-2xl">
          <p>
            Baithak Lakeside is an imaginary demonstration restaurant. Reservation and
            careers forms on this site do not transmit data to a server; anything you
            type stays in your browser for this session only.
          </p>
          <p>
            If you email us at {site.location.email}, we will use your message solely to
            respond. We do not sell personal information.
          </p>
          <p>
            This page is a placeholder for a full privacy policy should Baithak become a
            real establishment.
          </p>
        </div>
      </section>
    </>
  );
}
