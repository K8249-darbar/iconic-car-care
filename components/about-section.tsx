import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Gauge, Shield, Sparkles } from "lucide-react";
import { FadeIn } from "@/components/motion-primitives";
import { SectionHeading } from "@/components/section-heading";
import { imagery } from "@/lib/site-data";

const pillars = [
  {
    title: "Preparation first",
    description: "Every coating and film job starts with surface inspection, decontamination, and finish planning.",
    icon: Gauge
  },
  {
    title: "Premium protection",
    description: "Graphene, ceramic, borophene, and PPF systems are selected around the vehicle's real use.",
    icon: Shield
  },
  {
    title: "Showroom delivery",
    description: "The final inspection is designed around gloss, clarity, edges, interiors, and client handover.",
    icon: Sparkles
  }
];

export function AboutSection() {
  return (
    <section className="bg-obsidian py-20 sm:py-28">
      <div className="container-lux grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <FadeIn>
          <div className="relative min-h-[520px] overflow-hidden rounded-lg">
            <Image
              src={imagery.correction}
              alt="Paint protection and correction work in progress"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent" />
            <div className="glass-panel metal-border absolute bottom-5 left-5 right-5 rounded-lg p-5">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold-300">
                Vadodara studio
              </p>
              <p className="mt-2 font-display text-3xl font-semibold text-white">
                Built for serious car care.
              </p>
            </div>
          </div>
        </FadeIn>

        <div>
          <FadeIn>
            <SectionHeading
              align="left"
              eyebrow="About Iconic"
              title="Luxury detailing with the discipline of surface engineering."
              description="Iconic Car care is built for owners who want their vehicle protected properly, not just washed quickly. The experience blends careful inspection, premium products, precise installation, and a finish that turns every reflection into a statement."
            />
          </FadeIn>

          <div className="mt-9 grid gap-4">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <FadeIn key={pillar.title} delay={index * 0.05}>
                  <div className="glass-panel metal-border flex gap-5 rounded-lg p-5">
                    <span className="grid size-12 shrink-0 place-items-center rounded-full bg-gold-300/12 text-gold-200">
                      <Icon className="size-5" />
                    </span>
                    <div>
                      <h3 className="font-display text-2xl font-semibold text-white">
                        {pillar.title}
                      </h3>
                      <p className="mt-1 leading-7 text-white/58">{pillar.description}</p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>

          <FadeIn delay={0.18}>
            <Link
              href="/services"
              className="mt-8 inline-flex items-center gap-3 rounded-full border border-gold-300/35 px-6 py-4 text-sm font-extrabold uppercase tracking-[0.16em] text-gold-100 transition hover:bg-gold-300/10"
            >
              Explore Services
              <ArrowRight className="size-4" />
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
