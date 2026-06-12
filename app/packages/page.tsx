import type { Metadata } from "next";
import { ContactSection } from "@/components/contact-section";
import { FAQSection } from "@/components/faq-section";
import { PackagesGrid } from "@/components/packages-grid";
import { PageHero } from "@/components/page-hero";
import { imagery } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Packages",
  description:
    "Compare premium car detailing, graphene coating, ceramic coating, and PPF packages at Iconic Car care Vadodara."
};

export default function PackagesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Packages"
        title="Detailing and protection packages with premium intent."
        description="Start with a package, then refine coverage and product choice based on paint condition, driving habits, and protection goals."
        image={imagery.studio}
      />
      <PackagesGrid />
      <FAQSection />
      <ContactSection />
    </main>
  );
}
