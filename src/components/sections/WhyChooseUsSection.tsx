"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useEffect, useRef } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const REASONS = [
  {
    id: "personalized-care",
    title: "Personalized Daily Care",
    description:
      "Tailored assistance built around each resident's preferences, routines, and health needs.",
  },
  {
    id: "professional-staff",
    title: "Dedicated Professional Staff",
    description:
      "Attentive, qualified caregivers available around the clock to provide safe, compassionate support.",
  },
  {
    id: "community-living",
    title: "Enriching Community Life",
    description:
      "Vibrant social activities, nutritious dining, and meaningful connections that make every day fulfilling.",
  },
  {
    id: "family-peace",
    title: "Peace of Mind for Families",
    description:
      "Transparent communication and open visiting so families stay connected and feel confident in their loved one's care.",
  },
];

/** Animates a list of stagger items when their container enters the viewport. */
function useStaggerReveal(ref: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const items = Array.from(
      container.querySelectorAll<HTMLElement>("[data-stagger]")
    );

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          items.forEach((el) => {
            el.style.opacity = "1";
            el.style.transform = "translateX(0)";
          });
          observer.unobserve(container);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [ref]);
}

export function WhyChooseUsSection() {
  const listRef = useRef<HTMLDivElement>(null);
  useStaggerReveal(listRef);

  return (
    <section
      className="py-20 lg:py-28 bg-brand-surface"
      aria-labelledby="why-choose-heading"
    >
      <div className="mx-auto px-6 md:px-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image column — slides in from the left */}
          <ScrollReveal direction="left" className="relative order-2 lg:order-1">
            <div className="relative">
              {/* Dot accent — floats gently */}
              <div
                className="absolute -bottom-8 -left-8 w-36 h-36 opacity-20 pointer-events-none hidden sm:block float-accent"
                aria-hidden="true"
              >
                <svg width="100%" height="100%" fill="none">
                  <pattern id="dp-why" x="0" y="0" width="18" height="18" patternUnits="userSpaceOnUse">
                    <circle cx="3" cy="3" r="2" fill="#7C4DDB" />
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#dp-why)" />
                </svg>
              </div>

              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-black/15 border-4 border-white z-10">
                <Image
                  src="/images/why_choose_us_family.jpg"
                  alt="Senior resident enjoying quality time with family at Fresh Start House"
                  fill
                  className="object-cover object-center transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  priority
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Content column — slides in from the right */}
          <ScrollReveal direction="right" className="order-1 lg:order-2">
            <p className="text-xs font-bold text-brand-purple uppercase tracking-[0.15em] mb-3">
              Why Choose Us
            </p>
            <h2
              id="why-choose-heading"
              className="text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-gray-900 tracking-tight leading-[1.15] mb-5"
            >
              Care You Can Trust,<br />
              <span className="text-brand-purple">Every Single Day</span>
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-lg">
              We built Fresh Start House around a simple belief: every person deserves to age with dignity, comfort, and the warmth of genuine human connection.
            </p>

            {/* Staggered list items */}
            <div ref={listRef} className="space-y-5 mb-9">
              {REASONS.map((item, i) => (
                <div
                  key={item.id}
                  className="flex items-start gap-4 group"
                  data-stagger="true"
                  style={{
                    opacity: 0,
                    transform: "translateX(16px)",
                    transition: `opacity 0.55s cubic-bezier(0.22,1,0.36,1) ${0.08 + i * 0.1}s, transform 0.55s cubic-bezier(0.22,1,0.36,1) ${0.08 + i * 0.1}s`,
                  }}
                >
                  <CheckCircle2
                    className="w-5 h-5 text-brand-purple shrink-0 mt-0.5 transition-transform duration-200 group-hover:scale-110"
                    strokeWidth={2}
                  />
                  <div>
                    <h3 className="text-sm font-bold text-gray-900 mb-0.5 group-hover:text-brand-purple transition-colors duration-200">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-3 bg-brand-purple hover:bg-brand-purple-dark text-white px-8 py-3.5 rounded-full text-sm font-bold tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-brand-purple/25 hover:-translate-y-0.5 group"
            >
              About Fresh Start House
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
