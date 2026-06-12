import { Quote, Star } from "lucide-react";
import { FadeIn } from "@/components/motion-primitives";
import { SectionHeading } from "@/components/section-heading";
import { testimonials } from "@/lib/site-data";

export function TestimonialGrid() {
  return (
    <section className="bg-carbon py-20 sm:py-28">
      <div className="container-lux">
        <FadeIn>
          <SectionHeading
            eyebrow="Testimonials"
            title="Trusted by owners who care about the smallest reflections."
          />
        </FadeIn>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={testimonial.name} delay={index * 0.05}>
              <article className="glass-panel metal-border h-full rounded-lg p-7">
                <Quote className="size-8 text-gold-300" />
                <div className="mt-5 flex gap-1 text-gold-300">
                  {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                    <Star key={starIndex} className="size-4 fill-current" />
                  ))}
                </div>
                <p className="mt-5 leading-8 text-white/68">"{testimonial.review}"</p>
                <div className="mt-7 border-t border-white/10 pt-5">
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="mt-1 text-sm text-gold-200">{testimonial.car}</p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
