import type { Metadata } from "next";
import { CTABand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { TestimonialGrid } from "@/components/testimonial-grid";
import { imagery } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Read customer reviews for Iconic Car care's car detailing, coating, paint correction, and PPF services in Vadodara."
};

export default function TestimonialsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Testimonials"
        title="Owners notice the difference."
        description="Premium paint care is felt every time light hits the panel, water leaves the surface, and the cabin feels new again."
        image={imagery.hero}
      />
      <TestimonialGrid />
      <CTABand />
    </main>
  );
}
