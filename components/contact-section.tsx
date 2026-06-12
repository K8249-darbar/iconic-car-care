"use client";

import { FormEvent } from "react";
import { CalendarDays, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { FadeIn } from "@/components/motion-primitives";
import { SectionHeading } from "@/components/section-heading";
import { services, siteConfig } from "@/lib/site-data";

function buildWhatsAppMessage(formData: FormData) {
  const lines = [
    "🚨 *NEW BOOKING APPLICATION* 🚨",
    "───────────────────",
    "👤 *CUSTOMER DETAILS:*",
    `• *Name:* ${formData.get("name") || ""}`,
    `• *Phone:* ${formData.get("phone") || ""}`,
    `• *Vehicle/Car:* ${formData.get("vehicle") || ""}`,
    "",
    "🛠️ *SERVICE REQUESTED:*",
    `• *Type:* ${formData.get("service") || ""}`,
    `• *Preferred Date:* ${formData.get("date") || ""}`,
    `• *Message:* ${formData.get("message") || ""}`,
    "───────────────────",
    "👉 _Reply with *CONFIRM* to block this slot!_"
  ];

  return lines.join("\n");
}

export function ContactSection() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const message = buildWhatsAppMessage(formData);
    window.open(
      `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  const whatsappHref = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    "Hi Iconic Car care, I want to book a premium car care appointment."
  )}`;

  return (
    <section id="contact" className="bg-obsidian py-20 sm:py-28">
      <div className="container-lux">
        <FadeIn>
          <SectionHeading
            eyebrow="Contact"
            title="Book a premium car care appointment in Vadodara."
            description="Share your car model and protection goal. The team can recommend coating, correction, PPF, or detailing based on your use case."
          />
        </FadeIn>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <FadeIn>
            <div className="glass-panel metal-border h-full rounded-lg p-7">
              <p className="text-xs font-bold uppercase tracking-[0.32em] text-gold-300">
                Visit the studio
              </p>
              <h3 className="mt-4 font-display text-4xl font-semibold text-white">
                {siteConfig.name}
              </h3>
              <div className="mt-6 grid gap-4 text-white/68">
                <p className="flex items-center gap-3">
                  <MapPin className="size-5 text-gold-300" />
                  {siteConfig.address}
                </p>
                <a href={siteConfig.phoneHref} className="flex items-center gap-3 hover:text-gold-200">
                  <Phone className="size-5 text-gold-300" />
                  {siteConfig.phoneDisplay}
                </a>
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-[#25d366] px-5 py-4 text-sm font-extrabold uppercase tracking-[0.14em] text-obsidian"
                >
                  <MessageCircle className="size-5" />
                  WhatsApp
                </a>
                <a
                  href={siteConfig.phoneHref}
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-gold-300/35 px-5 py-4 text-sm font-extrabold uppercase tracking-[0.14em] text-gold-100"
                >
                  <Phone className="size-5" />
                  Call Now
                </a>
              </div>

              <div className="mt-7 overflow-hidden rounded-lg border border-white/10">
                
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.06}>
            <form
              id="booking"
              onSubmit={handleSubmit}
              className="glass-panel metal-border rounded-lg p-7"
            >
              <div className="mb-7 flex items-center gap-4">
                <span className="grid size-12 place-items-center rounded-full bg-gold-300/12 text-gold-200">
                  <CalendarDays className="size-5" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.26em] text-gold-300">
                    Booking form
                  </p>
                  <h3 className="font-display text-3xl font-semibold text-white">
                    Request appointment
                  </h3>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold text-white/72">
                  Name
                  <input
                    required
                    name="name"
                    placeholder="Your name"
                    className="rounded-lg border border-white/10 bg-black/35 px-4 py-4 text-white outline-none transition placeholder:text-white/28 focus:border-gold-300/60"
                    suppressHydrationWarning
                  />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-white/72">
                  Phone
                  <input
                    required
                    name="phone"
                    placeholder="+91"
                    className="rounded-lg border border-white/10 bg-black/35 px-4 py-4 text-white outline-none transition placeholder:text-white/28 focus:border-gold-300/60"
                    suppressHydrationWarning
                  />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-white/72">
                  Vehicle
                  <input
                    name="vehicle"
                    placeholder="Car model"
                    className="rounded-lg border border-white/10 bg-black/35 px-4 py-4 text-white outline-none transition placeholder:text-white/28 focus:border-gold-300/60"
                  />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-white/72">
                  Preferred date
                  <input
                    name="date"
                    type="date"
                    className="rounded-lg border border-white/10 bg-black/35 px-4 py-4 text-white outline-none transition focus:border-gold-300/60"
                  />
                </label>
              </div>

              <label className="mt-4 grid gap-2 text-sm font-semibold text-white/72">
                Service
                <select
                  name="service"
                  className="rounded-lg border border-white/10 bg-black/35 px-4 py-4 text-white outline-none transition focus:border-gold-300/60"
                >
                  {services.map((service) => (
                    <option key={service.title}>{service.title}</option>
                  ))}
                  <option>Premium Car Care Consultation</option>
                </select>
              </label>

              <label className="mt-4 grid gap-2 text-sm font-semibold text-white/72">
                Message
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell us about your paint condition, coverage needs, or preferred package."
                  className="resize-none rounded-lg border border-white/10 bg-black/35 px-4 py-4 text-white outline-none transition placeholder:text-white/28 focus:border-gold-300/60"
                />
              </label>

              <button
                type="submit"
                className="sheen mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full bg-gold-300 px-6 py-4 text-sm font-extrabold uppercase tracking-[0.16em] text-obsidian shadow-gold transition hover:bg-gold-200"
              >
                <Send className="size-5" />
                Send on WhatsApp
              </button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
