import type { Metadata } from "next";
import { CTABand } from "@/components/cta-band";
import { GalleryGrid } from "@/components/gallery-grid";
import { InstagramFeed } from "@/components/instagram-feed";
import { PageHero } from "@/components/page-hero";
import { imagery } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "View luxury before-and-after car detailing transformations, PPF installation, paint correction, and interior detailing from Iconic Car care."
};

export default function GalleryPage() {
  return (
    <main>
      <PageHero
        eyebrow="Gallery"
        title="Transformations with depth, gloss, and clarity."
        description="Browse premium detailing visuals and open before-after showcases with the built-in lightbox experience."
        image={imagery.supercar}
      />
      <GalleryGrid />
      <InstagramFeed />
      <CTABand />
    </main>
  );
}
