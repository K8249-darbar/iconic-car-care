import Link from "next/link";
import { Check, Crown } from "lucide-react";
import { FadeIn } from "@/components/motion-primitives";
import { SectionHeading } from "@/components/section-heading";
import { packages } from "@/lib/site-data";

export function PackagesGrid() {
  return (
    <section className="bg-obsidian py-20 sm:py-28">
      <div className="container-lux">
        <FadeIn>
          <SectionHeading
            eyebrow="Packages"
            title="Choose the finish your car deserves."
            description="Packages are starting points. Final recommendations depend on paint condition, vehicle size, protection goals, and coverage."
          />
        </FadeIn>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {packages.map((pack, index) => (
            <FadeIn key={pack.name} delay={index * 0.05}>
              <article
                className={`metal-border h-full rounded-lg p-7 ${
                  pack.featured
                    ? "bg-gold-300 text-obsidian shadow-gold"
                    : "glass-panel text-white"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <p
                    className={`text-xs font-extrabold uppercase tracking-[0.24em] ${
                      pack.featured ? "text-obsidian/65" : "text-gold-300"
                    }`}
                  >
                    {pack.tag}
                  </p>
                  {pack.featured ? <Crown className="size-5" /> : null}
                </div>
                <h3 className="mt-5 font-display text-4xl font-semibold">{pack.name}</h3>
                <p className="mt-3 text-2xl font-extrabold">{pack.price}</p>
                <ul className="mt-7 grid gap-4">
                  {pack.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm leading-6">
                      <Check className="mt-0.5 size-4 shrink-0" />
                      <span className={pack.featured ? "text-obsidian/76" : "text-white/62"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact#booking"
                  className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-4 text-sm font-extrabold uppercase tracking-[0.16em] transition ${
                    pack.featured
                      ? "bg-obsidian text-gold-100 hover:bg-black"
                      : "bg-gold-300 text-obsidian hover:bg-gold-200"
                  }`}
                >
                  Book Package
                </Link>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
