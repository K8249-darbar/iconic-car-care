"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarDays, Menu, Phone, ShieldCheck, X } from "lucide-react";
import { useState } from "react";
import { navItems, siteConfig } from "@/lib/site-data";

function whatsappHref() {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    "Hi Iconic Car care, I want to book a car detailing appointment."
  )}`;
}

export function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3">
      <nav className="container-lux glass-panel metal-border rounded-full px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3" aria-label="Iconic Car care home">
            <span className="grid size-10 place-items-center overflow-hidden rounded-full">
             <img 
                src="/logo.jpeg" 
                alt="Iconic Car Care Logo" 
                className="size-full object-cover" 
              />
            </span>
            <span>
              <span className="block font-display text-xl font-semibold leading-none text-white">
                Iconic
              </span>
              <span className="text-[0.62rem] font-bold uppercase tracking-[0.3em] text-gold-300">
                Car care
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    active
                      ? "bg-gold-300 text-obsidian"
                      : "text-white/72 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <a
              href={siteConfig.phoneHref}
              className="grid size-11 place-items-center rounded-full border border-white/10 text-white/78 transition hover:border-gold-300/55 hover:text-gold-200"
              aria-label="Call Iconic Car care"
            >
              <Phone className="size-4" />
            </a>
            <a
              href="/contact#booking"
              className="sheen inline-flex items-center gap-2 rounded-full bg-gold-300 px-5 py-3 text-sm font-extrabold text-obsidian shadow-gold transition hover:bg-gold-200"
            >
              <CalendarDays className="size-4" />
              Book Appointment
            </a>
          </div>

          <button
            type="button"
            aria-label="Open navigation menu"
            onClick={() => setIsOpen((current) => !current)}
            className="grid size-11 place-items-center rounded-full border border-white/10 text-white lg:hidden"
          >
            {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {isOpen ? (
          <div className="mt-4 border-t border-white/10 pb-2 pt-4 lg:hidden">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg px-4 py-3 text-sm font-semibold text-white/78 transition hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <a
                href={whatsappHref()}
                className="rounded-full border border-gold-300/30 px-4 py-3 text-center text-sm font-bold text-gold-200"
              >
                WhatsApp
              </a>
              <a
                href="/contact#booking"
                onClick={() => setIsOpen(false)}
                className="rounded-full bg-gold-300 px-4 py-3 text-center text-sm font-extrabold text-obsidian"
              >
                Book Now
              </a>
            </div>
          </div>
        ) : null}
      </nav>
    </header>
  );
}
