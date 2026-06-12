import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-data";

export function CTABand() {
  const whatsappHref = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    "Hi Iconic Car care, I want to protect my car."
  )}`;

  return (
    <section className="bg-obsidian px-5 py-16">
      <div className="container-lux metal-border overflow-hidden rounded-lg bg-[linear-gradient(135deg,#c89d3b,#f8df95_48%,#7a5118)] p-8 text-obsidian sm:p-10">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-obsidian/65">
              Ready for the iconic finish?
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
              Protect the paint before the road writes its own story.
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact#booking"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-obsidian px-6 py-4 text-sm font-extrabold uppercase tracking-[0.14em] text-gold-100"
            >
              Book Appointment
              <ArrowRight className="size-4" />
            </Link>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-obsidian/25 px-6 py-4 text-sm font-extrabold uppercase tracking-[0.14em] text-obsidian"
            >
              <MessageCircle className="size-5" />
              WhatsApp Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
