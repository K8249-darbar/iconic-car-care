import type { Metadata } from "next";
import { ContactSection } from "@/components/contact-section";
import { FAQSection } from "@/components/faq-section";
import { PageHero } from "@/components/page-hero";
import { imagery } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Iconic Car care in Vadodara, Gujarat for WhatsApp booking, calls, directions, and premium car detailing appointment requests."
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Book your detailing consultation."
        description="Call, WhatsApp, use the appointment form, or get directions to Iconic Car care in Vadodara, Gujarat."
        image={imagery.interior}
      />
      <ContactSection />
      <FAQSection />
    </main>
  );
}
