import { AboutSection } from "@/components/about-section";
import { BenefitsGrid } from "@/components/benefits-grid";
import { ContactSection } from "@/components/contact-section";
import { CTABand } from "@/components/cta-band";
import { FAQSection } from "@/components/faq-section";
import { GalleryGrid } from "@/components/gallery-grid";
import { Hero } from "@/components/hero";
import { InstagramFeed } from "@/components/instagram-feed";
import { PackagesGrid } from "@/components/packages-grid";
import { ServicesGrid } from "@/components/services-grid";
import { TestimonialGrid } from "@/components/testimonial-grid";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <ServicesGrid />
      <BenefitsGrid />
      <GalleryGrid />
      <PackagesGrid />
      <TestimonialGrid />
      <FAQSection />
      <InstagramFeed />
      <CTABand />
      <ContactSection />
    </main>
  );
}
