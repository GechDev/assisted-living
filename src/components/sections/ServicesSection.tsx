"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: "residential-care",
    title: "Residential Care",
    description: "24/7 dedicated support in comfortable, home-like suites.",
    image: "/images/service_residential_friends.jpg",
    href: "/contact?service=residential-care",
  },
  {
    id: "assisted-living",
    title: "Assisted Living",
    description: "Daily assistance tailored to foster independence and comfort.",
    image: "/images/service_assisted_living_family.jpg",
    href: "/contact?service=assisted-living",
  },
  {
    id: "senior-living",
    title: "Senior Living",
    description: "Enriching activities and a vibrant, connected community.",
    image: "/images/service_senior_caregiver.jpg",
    href: "/contact?service=senior-living",
  },
  {
    id: "skilled-nursing",
    title: "Skilled Nursing",
    description: "Professional, attentive medical and clinical oversight.",
    image: "/images/medical_care_1791538326673.jpg",
    href: "/contact?service=skilled-nursing",
  },
  {
    id: "personal-care",
    title: "Personal Care",
    description: "Dignified assistance with everyday personal routines.",
    image: "/images/service_personal_care_celebrate.jpg",
    href: "/contact?service=personal-care",
  },
  {
    id: "respite-therapy",
    title: "Respite & Therapy",
    description: "Short-term recovery and restorative wellness programs.",
    image: "/images/therapy_session_1791538340595.jpg",
    href: "/contact?service=respite-therapy",
  },
];

const EXTENDED_SERVICES = [...SERVICES, ...SERVICES, ...SERVICES];

export function ServicesSection() {
  const totalOriginal = SERVICES.length;
  const [currentIndex, setCurrentIndex] = useState(totalOriginal);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const currentIndexRef = useRef(currentIndex);
  useEffect(() => { currentIndexRef.current = currentIndex; }, [currentIndex]);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      setCardsPerView(w < 640 ? 1 : w < 1024 ? 2 : 3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const nextSlide = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((p) => p + 1);
  }, []);

  const prevSlide = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((p) => p - 1);
  }, []);

  const handleTransitionEnd = (e: React.TransitionEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget) return;
    const cur = currentIndexRef.current;
    if (cur >= 2 * totalOriginal) {
      setIsTransitioning(false);
      setCurrentIndex(cur - totalOriginal);
      requestAnimationFrame(() => requestAnimationFrame(() => setIsTransitioning(true)));
    } else if (cur < totalOriginal) {
      setIsTransitioning(false);
      setCurrentIndex(cur + totalOriginal);
      requestAnimationFrame(() => requestAnimationFrame(() => setIsTransitioning(true)));
    }
  };

  useEffect(() => {
    if (isPaused || prefersReducedMotion) return;
    const t = setInterval(nextSlide, 3500);
    return () => clearInterval(t);
  }, [isPaused, prefersReducedMotion, nextSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };
  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const d = touchStartX.current - touchEndX.current;
    if (d > 45) nextSlide();
    else if (d < -45) prevSlide();
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") prevSlide();
    else if (e.key === "ArrowRight") nextSlide();
  };

  const activeIndicatorIndex =
    ((currentIndex % totalOriginal) + totalOriginal) % totalOriginal;

  return (
    <section
      id="services"
      aria-label="Our Care Services"
      className="py-20 lg:py-28 bg-white relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div className="mx-auto px-6 md:px-10 max-w-7xl">

        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 lg:mb-12">
          <ScrollReveal direction="left">
            <p className="text-xs font-bold text-brand-purple uppercase tracking-[0.15em] mb-2">
              What We Offer
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-tight">
              Care Services Tailored<br className="hidden sm:block" /> to Every Resident
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-purple hover:text-brand-purple-dark transition-colors group shrink-0"
            >
              View all services
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </ScrollReveal>
        </div>

        {/* Carousel */}
        <div
          ref={containerRef}
          tabIndex={0}
          role="region"
          aria-roledescription="carousel"
          aria-label="Care Services Carousel"
          onKeyDown={handleKeyDown}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="relative focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/40 rounded-2xl"
        >
          {/* Track */}
          <div className="overflow-hidden py-2 -my-2">
            <div
              onTransitionEnd={handleTransitionEnd}
              className="flex"
              style={{
                transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
                transition:
                  prefersReducedMotion || !isTransitioning
                    ? "none"
                    : "transform 600ms cubic-bezier(0.25, 1, 0.5, 1)",
              }}
            >
              {EXTENDED_SERVICES.map((service, index) => {
                const widthClass =
                  cardsPerView === 1
                    ? "w-full min-w-full"
                    : cardsPerView === 2
                    ? "w-1/2 min-w-[50%]"
                    : "w-1/3 min-w-[33.333333%]";

                return (
                  <div
                    key={`${service.id}-${index}`}
                    className={`${widthClass} shrink-0 px-2 sm:px-3`}
                  >
                    <Link
                      href={service.href}
                      className="group flex flex-col bg-white border border-gray-100 hover:border-brand-purple/25 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:shadow-brand-purple/10 transition-all duration-300 hover:-translate-y-1"
                    >
                      {/* Image */}
                      <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>

                      {/* Content */}
                      <div className="flex items-center justify-between p-5">
                        <div>
                          <h3 className="text-base font-bold text-gray-900 group-hover:text-brand-purple transition-colors duration-200 mb-1">
                            {service.title}
                          </h3>
                          <p className="text-sm text-gray-500 leading-snug line-clamp-2">
                            {service.description}
                          </p>
                        </div>
                        <div className="ml-4 shrink-0 w-9 h-9 rounded-full border border-gray-200 group-hover:border-brand-purple group-hover:bg-brand-purple flex items-center justify-center transition-all duration-300">
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Arrow buttons */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous service"
            className="hidden sm:flex absolute -left-4 lg:-left-5 top-[calc(50%-24px)] -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-gray-200 hover:border-brand-purple hover:bg-brand-purple text-gray-500 hover:text-white shadow-sm hover:shadow-md items-center justify-center transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple active:scale-95"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next service"
            className="hidden sm:flex absolute -right-4 lg:-right-5 top-[calc(50%-24px)] -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-gray-200 hover:border-brand-purple hover:bg-brand-purple text-gray-500 hover:text-white shadow-sm hover:shadow-md items-center justify-center transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple active:scale-95"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Indicators */}
        <div className="mt-8 flex items-center justify-center gap-2">
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous"
            className="sm:hidden w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-brand-purple"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>

          {SERVICES.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                setIsTransitioning(true);
                setCurrentIndex(totalOriginal + index);
              }}
              aria-label={`Go to ${item.title}`}
              aria-current={index === activeIndicatorIndex ? "true" : undefined}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === activeIndicatorIndex
                  ? "w-8 bg-brand-purple"
                  : "w-3 bg-gray-200 hover:bg-brand-purple/30"
              }`}
            />
          ))}

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next"
            className="sm:hidden w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-brand-purple"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
