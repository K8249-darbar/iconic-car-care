"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { FadeIn } from "@/components/motion-primitives";
import { SectionHeading } from "@/components/section-heading";
import { faqs } from "@/lib/site-data";

export function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-carbon py-20 sm:py-28">
      <div className="container-lux">
        <FadeIn>
          <SectionHeading
            eyebrow="FAQ"
            title="Clear answers before your car enters the studio."
          />
        </FadeIn>

        <div className="mx-auto mt-12 max-w-4xl divide-y divide-white/10 overflow-hidden rounded-lg border border-white/10 bg-white/[0.045]">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;
            return (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() => setActiveIndex(isActive ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-display text-xl font-semibold text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`size-5 shrink-0 text-gold-300 transition ${isActive ? "rotate-180" : ""}`}
                  />
                </button>
                {isActive ? (
                  <div className="px-6 pb-6 leading-7 text-white/62">{faq.answer}</div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
