import Image from "next/image";
import { FadeIn } from "@/components/motion-primitives";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
};

export function PageHero({ eyebrow, title, description, image }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden pb-20 pt-36 sm:pb-24 sm:pt-44">
      <Image
        src={image}
        alt={title}
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(5,5,5,0.94),rgba(5,5,5,0.72),rgba(5,5,5,0.3))]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-obsidian to-transparent" />
      <div className="container-lux">
        <FadeIn>
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.34em] text-gold-300">
              {eyebrow}
            </p>
            <h1 className="mt-5 font-display text-5xl font-semibold leading-tight text-white sm:text-7xl">
              {title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/70">{description}</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
