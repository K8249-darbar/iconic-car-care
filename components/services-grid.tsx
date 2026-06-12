import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/motion-primitives";
import { SectionHeading } from "@/components/section-heading";
import { services } from "@/lib/site-data";

export function ServicesGrid({ compact = false }: { compact?: boolean }) {
  return (
    <section className="relative overflow-hidden bg-obsidian py-20 sm:py-28">
      <div className="container-lux">
        <FadeIn>
          <SectionHeading
            eyebrow="Surface science"
            title="Protection systems crafted for gloss, depth, and durability."
            description="Every service is built around careful preparation, premium products, and a finish that looks expensive before it even leaves the studio."
          />
        </FadeIn>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <FadeIn key={service.title} delay={index * 0.04}>
                <article className="group glass-panel metal-border h-full overflow-hidden rounded-lg">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/10 to-transparent" />
                    <div className="absolute left-5 top-5 grid size-12 place-items-center rounded-full border border-gold-300/30 bg-black/45 text-gold-200 backdrop-blur-xl">
                      <Icon className="size-5" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-2xl font-semibold text-white">
                      {service.title}
                    </h3>
                    <p className="mt-3 leading-7 text-white/58">{service.description}</p>
                    {!compact ? (
                      <Link
                        href="/contact#booking"
                        className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-gold-200"
                      >
                        Book this service
                        <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                      </Link>
                    ) : null}
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
