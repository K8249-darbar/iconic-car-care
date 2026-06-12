import { FadeIn } from "@/components/motion-primitives";
import { SectionHeading } from "@/components/section-heading";
import { benefits } from "@/lib/site-data";

export function BenefitsGrid() {
  return (
    <section className="bg-carbon py-20 sm:py-28">
      <div className="container-lux">
        <FadeIn>
          <SectionHeading
            eyebrow="Why protection matters"
            title="Engineered benefits for Indian roads, heat, dust, and monsoon."
          />
        </FadeIn>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <FadeIn key={benefit.title} delay={index * 0.035}>
                <div className="glass-panel metal-border flex h-full items-center gap-5 rounded-lg p-6">
                  <span className="grid size-14 shrink-0 place-items-center rounded-full bg-gold-300/12 text-gold-200">
                    <Icon className="size-6" />
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-white">
                      {benefit.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-white/52">
                      Premium care designed to keep the vehicle looking freshly delivered.
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
