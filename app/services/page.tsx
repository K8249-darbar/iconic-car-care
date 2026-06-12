import type { Metadata } from "next";
import { BenefitsGrid } from "@/components/benefits-grid";
import { ContactSection } from "@/components/contact-section";
import { PageHero } from "@/components/page-hero";
import { ServicesGrid } from "@/components/services-grid";
import { imagery } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore 12H graphene coating, ceramic coating, borophene coating, PPF, paint correction, interior detailing, and premium car care in Vadodara."
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Services"
        title="Premium protection for every finish."
        description="From high-gloss coating systems to self-healing film and interior revival, every service is designed around the condition and use of your vehicle."
        image={imagery.ppf}
      />
      <ServicesGrid />
      <BenefitsGrid />
      <ContactSection />
    </main>
  );
}
