import Image from "next/image";
import { Instagram } from "lucide-react";
import { FadeIn } from "@/components/motion-primitives";
import { imagery, siteConfig } from "@/lib/site-data";

const posts = [
  { image: imagery.ppf, label: "PPF install" },
  { image: imagery.correction, label: "Paint correction" },
  { image: imagery.interior, label: "Interior reset" },
  { image: imagery.supercar, label: "Gloss delivery" }
];

export function InstagramFeed() {
  return (
    <section className="bg-obsidian py-20 sm:py-28">
      <div className="container-lux">
        <FadeIn>
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.34em] text-gold-300">
                Instagram
              </p>
              <h2 className="mt-4 font-display text-4xl font-semibold text-white sm:text-5xl">
                Fresh finishes from the studio.
              </h2>
            </div>
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-gold-300/35 px-6 py-4 text-sm font-extrabold uppercase tracking-[0.16em] text-gold-100 transition hover:bg-gold-300/10"
            >
              <Instagram className="size-5" />
              Follow @iconiccarcare
            </a>
          </div>
        </FadeIn>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {posts.map((post, index) => (
            <FadeIn key={post.label} delay={index * 0.04}>
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noreferrer"
                className="group relative block aspect-square overflow-hidden rounded-lg"
              >
                <Image
                  src={post.image}
                  alt={post.label}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 rounded-full bg-black/50 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-gold-100 backdrop-blur">
                  {post.label}
                </span>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
