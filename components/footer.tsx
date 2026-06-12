import Link from "next/link";
import { Instagram, MapPin, Phone, ShieldCheck } from "lucide-react";
import { navItems, siteConfig } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-obsidian">
      <div className="container-lux grid gap-10 py-12 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-full border border-gold-300/35 bg-gold-300/10 text-gold-200">
              <ShieldCheck className="size-5" />
            </span>
            <div>
              <p className="font-display text-2xl font-semibold text-white">{siteConfig.name}</p>
              <p className="text-xs font-bold uppercase tracking-[0.32em] text-gold-300">
                Premium car care
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-md leading-7 text-white/58">
            Vadodara's destination for 12H graphene, ceramic, borophene coating,
            PPF, paint correction, and luxury detailing.
          </p>
        </div>

        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-gold-300">
            Explore
          </p>
          <div className="grid gap-3">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-white/62 hover:text-gold-200">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-gold-300">
            Contact
          </p>
          <div className="grid gap-4 text-sm text-white/64">
            <a href={siteConfig.phoneHref} className="flex items-center gap-3 hover:text-gold-200">
              <Phone className="size-4 text-gold-300" />
              {siteConfig.phoneDisplay}
            </a>
            <p className="flex items-center gap-3">
              <MapPin className="size-4 text-gold-300" />
              {siteConfig.location}
            </p>
            <a href={siteConfig.instagram} className="flex items-center gap-3 hover:text-gold-200">
              <Instagram className="size-4 text-gold-300" />
              @iconic__car__care
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/42">
        Copyright {new Date().getFullYear()} Iconic Car care. All rights reserved.
      </div>
    </footer>
  );
}
