"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";
import { MotionDiv } from "@/components/motion-primitives";
import { imagery, siteConfig, stats } from "@/lib/site-data";

export function Hero() {
  const whatsappHref = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    "Hi Iconic Car care, I want to book a coating or detailing appointment."
  )}`;

  return (
    <section className="noise-overlay relative isolate min-h-[94svh] overflow-hidden pt-28 md:min-h-screen">
      <Image
        src={imagery.hero}
        alt="Premium sports car inside a dark luxury garage"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(5,5,5,0.94)_0%,rgba(5,5,5,0.72)_40%,rgba(5,5,5,0.22)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-obsidian via-obsidian/70 to-transparent" />

      <div className="container-lux flex min-h-[calc(94svh-7rem)] flex-col justify-center pb-16 md:min-h-[calc(100vh-7rem)]">
        <div className="max-w-4xl">
          <MotionDiv
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-5 inline-flex items-center gap-3 rounded-full border border-gold-300/25 bg-black/35 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-gold-200 backdrop-blur-xl"
          >
            <ShieldCheck className="size-4" />
            Iconic Car care, Vadodara
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="font-display text-5xl font-semibold leading-[0.95] text-white sm:text-7xl lg:text-8xl">
              Ultimate Protection.{" "}
              <span className="gold-text block">Unmatched Shine.</span>
            </h1>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/72 sm:text-xl">
              Vadodara&apos;s Premium Destination for 12H Graphene, Ceramic, Borophene
              Coating & Paint Protection Film.
            </p>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Link
              href="/contact#booking"
              className="sheen inline-flex items-center justify-center gap-3 rounded-full bg-gold-300 px-7 py-4 text-sm font-extrabold uppercase tracking-[0.14em] text-obsidian shadow-gold transition hover:bg-gold-200"
            >
              <CalendarDays className="size-5" />
              Book Appointment
              <ArrowRight className="size-4" />
            </Link>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-gold-300/35 bg-black/35 px-7 py-4 text-sm font-extrabold uppercase tracking-[0.14em] text-gold-100 backdrop-blur-xl transition hover:border-gold-200 hover:bg-gold-300/10"
            >
              <MessageCircle className="size-5" />
              WhatsApp Now
            </a>
          </MotionDiv>
        </div>

        <MotionDiv
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass-panel metal-border rounded-lg px-5 py-4"
            >
              <div className="flex items-center gap-3">
                <Sparkles className="size-4 text-gold-300" />
                <p className="font-display text-3xl font-semibold text-white">{stat.value}</p>
              </div>
              <p className="mt-1 text-sm text-white/55">{stat.label}</p>
            </div>
          ))}
        </MotionDiv>
      </div>
    </section>
  );
}
