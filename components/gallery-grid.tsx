"use client";

import Image from "next/image";
import { X, ZoomIn } from "lucide-react";
import { useState } from "react";
import { FadeIn, MotionDiv } from "@/components/motion-primitives";
import { SectionHeading } from "@/components/section-heading";
import { galleryItems } from "@/lib/site-data";

export function GalleryGrid() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeItem = activeIndex === null ? null : galleryItems[activeIndex];

  return (
    <section className="bg-obsidian py-20 sm:py-28">
      <div className="container-lux">
        <FadeIn>
          <SectionHeading
            eyebrow="Gallery"
            title="Before and after transformations with a high-gloss finish."
            description="Tap any showcase to open a premium lightbox view."
          />
        </FadeIn>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {galleryItems.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.05}>
              <button
                suppressContentEditableWarning
                onClick={() => setActiveIndex(index)}
                className="group glass-panel metal-border w-full overflow-hidden rounded-lg text-left"
              >
                <div className="relative grid aspect-[4/3] grid-cols-2 overflow-hidden">
                  <div className="relative">
                    <Image
                      src={item.before}
                      alt={`${item.title} before`}
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover grayscale transition duration-700 group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-black/65 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-white">
                      Before
                    </span>
                  </div>
                  <div className="relative">
                    <Image
                      src={item.after}
                      alt={`${item.title} after`}
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                    <span className="absolute right-4 top-4 rounded-full bg-gold-300 px-3 py-1 text-xs font-extrabold uppercase tracking-[0.18em] text-obsidian">
                      After
                    </span>
                  </div>
                  <div className="absolute inset-y-0 left-1/2 w-px bg-gold-200/70" />
                </div>
                <div className="flex items-center justify-between gap-4 p-6">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold-300">
                      {item.label}
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-semibold text-white">
                      {item.title}
                    </h3>
                  </div>
                  <span className="grid size-11 shrink-0 place-items-center rounded-full border border-gold-300/25 text-gold-200">
                    <ZoomIn className="size-5" />
                  </span>
                </div>
              </button>
            </FadeIn>
          ))}
        </div>
      </div>

      {activeItem ? (
        <MotionDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] grid place-items-center bg-black/88 p-4 backdrop-blur-lg"
          onClick={() => setActiveIndex(null)}
        >
          <button
            type="button"
            aria-label="Close gallery lightbox"
            onClick={() => setActiveIndex(null)}
            className="absolute right-5 top-5 grid size-11 place-items-center rounded-full border border-white/15 bg-white/10 text-white"
          >
            <X className="size-5" />
          </button>
          <div
            className="glass-panel metal-border w-full max-w-5xl overflow-hidden rounded-lg"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="grid md:grid-cols-2">
              <div className="relative min-h-[320px]">
                <Image src={activeItem.before} alt="Before result" fill sizes="50vw" className="object-cover grayscale" />
                <span className="absolute left-5 top-5 rounded-full bg-black/65 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white">
                  Before
                </span>
              </div>
              <div className="relative min-h-[320px]">
                <Image src={activeItem.after} alt="After result" fill sizes="50vw" className="object-cover" />
                <span className="absolute left-5 top-5 rounded-full bg-gold-300 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-obsidian">
                  After
                </span>
              </div>
            </div>
            <div className="p-6">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-gold-300">
                {activeItem.label}
              </p>
              <h3 className="mt-2 font-display text-3xl font-semibold text-white">
                {activeItem.title}
              </h3>
            </div>
          </div>
        </MotionDiv>
      ) : null}
      <div className="w-full max-w-6xl mx-auto my-12 p-4">
  <h3 className="text-white text-2xl font-bold mb-6 text-center tracking-wide uppercase">
    Our Latest Detailing Work (Video Gallery)
  </h3>
  
  {/* Grid Setup for 3 Videos */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    
    {/* First Video */}
    <div className="relative w-full h-[250px] sm:h-[300px] overflow-hidden rounded-2xl shadow-2xl border border-white/10">
      <video src="/car-video.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover" />
    </div>

    {/* Second Video */}
    <div className="relative w-full h-[250px] sm:h-[300px] overflow-hidden rounded-2xl shadow-2xl border border-white/10">
      <video src="/car-video2.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover" />
    </div>

    {/* Third Video */}
    <div className="relative w-full h-[250px] sm:h-[300px] overflow-hidden rounded-2xl shadow-2xl border border-white/10">
      <video src="/car-video3.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover" />
    </div>

  </div>
</div>
    </section>
  );
}
