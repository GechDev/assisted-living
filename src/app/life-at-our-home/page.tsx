"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ZoomIn } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Lightbox } from "@/components/ui/Lightbox";
import {
  GALLERY_IMAGES,
  PROPERTY_SPACES,
  LIFE_AT_HERO_IMAGE,
  getGalleryIndex,
} from "@/config/media";

export default function LifeAtOurHome() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-brand-dark">
        <Header />
        <div className="h-24" />
      </div>

      <main className="flex-grow">
        <section className="relative h-[400px] flex items-center bg-brand-dark overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src={LIFE_AT_HERO_IMAGE}
              alt="Fresh Start House exterior"
              fill
              className="object-cover object-center scale-105"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-brand-dark/70" />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/85 via-brand-dark/50 to-transparent" />
          </div>
          <div className="container relative z-10 mx-auto px-6 max-w-7xl">
            <div className="flex flex-col gap-2 max-w-xl">
              <p
                className="text-[11px] font-bold text-brand-purple-light uppercase tracking-[0.22em] mb-2 font-sans-heading"
                style={{ animation: "fade-up 0.7s cubic-bezier(0.22,1,0.36,1) 0.1s both" }}
              >
                Our Spaces
              </p>
              <h1
                className="text-4xl md:text-5xl text-white"
                style={{ animation: "fade-up 0.7s cubic-bezier(0.22,1,0.36,1) 0.2s both" }}
              >
                Life at Our Home
              </h1>
              <p
                className="text-white/60 font-medium mt-2 font-sans-heading text-sm"
                style={{ animation: "fade-up 0.7s cubic-bezier(0.22,1,0.36,1) 0.3s both" }}
              >
                Home / Life at Our Home
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28 bg-white">
          <div className="container mx-auto px-6 max-w-7xl">
            <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-brand-purple font-semibold uppercase tracking-[0.15em] text-xs mb-4 font-sans-heading">
                Our Spaces
              </p>
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-5">
                Every Corner Designed for{" "}
                <span className="text-brand-purple">Comfort & Joy</span>
              </h2>
              <p className="text-gray-600 leading-relaxed font-sans-heading text-[0.95rem]">
                Explore the actual rooms and outdoor areas at Fresh Start House — photographed on site for your tour.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {PROPERTY_SPACES.map((space, i) => (
                <ScrollReveal
                  key={space.id}
                  direction="up"
                  className={`reveal-delay-${Math.min(i + 1, 5)}`}
                >
                  <button
                    type="button"
                    onClick={() => setLightboxIndex(getGalleryIndex(space.galleryId))}
                    className="group w-full text-left bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-brand-purple/30 shadow-sm hover:shadow-xl hover:shadow-brand-purple/10 transition-all duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/50"
                    aria-label={`View ${space.title} — ${space.subtitle}`}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                      <Image
                        src={space.image}
                        alt={space.title}
                        fill
                        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/30">
                        <ZoomIn className="w-4 h-4 text-white" />
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <div className="text-white font-semibold text-base font-sans-heading leading-tight">
                          {space.title}
                        </div>
                        <div className="text-white/70 text-xs font-sans-heading mt-0.5">
                          {space.subtitle}
                        </div>
                      </div>
                    </div>
                    <div className="p-5">
                      <p className="text-gray-600 text-sm leading-relaxed font-sans-heading">
                        {space.description}
                      </p>
                      <div className="mt-4 flex items-center gap-2 text-brand-purple text-xs font-semibold font-sans-heading group-hover:gap-3 transition-all duration-200">
                        <span>View Photo</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </button>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28 bg-brand-surface">
          <div className="container mx-auto px-6 max-w-7xl">
            <ScrollReveal className="mb-12">
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                <div>
                  <p className="text-brand-purple font-semibold uppercase tracking-[0.15em] text-xs mb-3 font-sans-heading">
                    Property Gallery
                  </p>
                  <h2 className="text-3xl md:text-4xl text-gray-900">
                    See Every Space
                  </h2>
                </div>
                <p className="text-gray-500 text-sm font-sans-heading max-w-xs sm:text-right">
                  On-site photography plus reference details for care and accessibility
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 lg:gap-4 auto-rows-[minmax(140px,auto)]">
              {GALLERY_IMAGES.map((img, i) => {
                const isHero = img.featured;
                return (
                  <ScrollReveal
                    key={img.id}
                    direction="up"
                    className={`${isHero ? "col-span-2 row-span-2 md:col-span-2 md:row-span-2" : "col-span-1 row-span-1"} reveal-delay-${Math.min((i % 4) + 1, 5)}`}
                  >
                    <button
                      type="button"
                      onClick={() => setLightboxIndex(i)}
                      aria-label={`Open photo: ${img.label}`}
                      className={`group relative w-full h-full min-h-[140px] overflow-hidden rounded-2xl bg-gray-100 block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/50 ${
                        isHero ? "min-h-[280px] md:min-h-[320px]" : "aspect-[4/3]"
                      }`}
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                        sizes={
                          isHero
                            ? "(max-width: 768px) 100vw, 40vw"
                            : "(max-width: 640px) 50vw, 20vw"
                        }
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-colors duration-300 flex items-end justify-start p-3">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="text-white text-xs font-semibold font-sans-heading drop-shadow-lg">
                            {img.label}
                          </span>
                        </div>
                      </div>
                    </button>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src={GALLERY_IMAGES.find((g) => g.id === "patio-firepit")!.src}
              alt="Backyard patio at Fresh Start House"
              fill
              className="object-cover object-center scale-105"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-brand-dark/80" />
            <div className="absolute inset-0 bg-brand-purple/12" />
          </div>
          <div className="container relative z-10 mx-auto px-6 text-center max-w-3xl">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-purple-light pulse-soft" />
                <p className="text-[11px] font-semibold text-brand-purple-light uppercase tracking-[0.22em] font-sans-heading">
                  Schedule a Visit
                </p>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-white mb-5">
                See It in Person
              </h2>
              <p className="text-white/65 mb-10 text-base leading-relaxed max-w-xl mx-auto font-sans-heading">
                Photos tell part of the story. A personal tour lets you feel the warmth, meet our team, and walk through the rooms yourself.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-brand-purple hover:bg-brand-purple-dark text-white px-9 py-4 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 hover:shadow-xl hover:shadow-brand-purple/30 hover:-translate-y-0.5 font-sans-heading"
                >
                  Schedule a Tour
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-3 bg-brand-purple hover:bg-brand-purple-dark text-white px-9 py-4 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 hover:shadow-xl hover:shadow-brand-purple/30 hover:-translate-y-0.5 font-sans-heading border border-brand-purple-light/30"
                >
                  Learn About Us
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />

      {lightboxIndex !== null && (
        <Lightbox
          images={GALLERY_IMAGES}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </div>
  );
}
