import type { Metadata } from "next";
import { AboutSection } from "@/components/about-section";
import { BenefitsGrid } from "@/components/benefits-grid";
import { CTABand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { imagery } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Iconic Car care, Vadodara's premium car detailing, coating, PPF, and paint correction studio."
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About us"
        title="Vadodara's premium car care studio."
        description="Iconic Car care is built for owners who want disciplined preparation, advanced coatings, premium PPF, and a final handover worthy of the car."
        image={imagery.correction}
      />
      <AboutSection />
      <BenefitsGrid />
      <CTABand />
    </main>
  );
}
