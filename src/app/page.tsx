import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Heart,
  ShieldCheck,
  Utensils,
  BedDouble,
  Leaf,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FaqSection } from "@/components/sections/FaqSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { siteConfig } from "@/config/site";
import {
  HERO_SLIDES,
  HOME_SPACE_CARDS,
  FEATURED_BANNER_IMAGE,
  assetPath,
  propertyFiles,
} from "@/config/media";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">

        {/* ─── HERO ─────────────────────────────────────────────── */}
        <section
          className="relative flex items-center overflow-hidden"
          style={{ minHeight: "100svh" }}
          aria-label="Hero"
        >
          {/* Slideshow background */}
          <div className="absolute inset-0 z-0">
            <style dangerouslySetInnerHTML={{ __html: `
              @keyframes hs1 {
                0%   { opacity:1; transform:scale(1) translate3d(0,0,0); }
                30%  { opacity:1; }
                36%  { opacity:0; transform:scale(1.06) translate3d(-0.5%,-0.3%,0); }
                96%  { opacity:0; transform:scale(1) translate3d(0,0,0); }
                100% { opacity:1; transform:scale(1) translate3d(0,0,0); }
              }
              @keyframes hs2 {
                0%,30%  { opacity:0; transform:scale(1) translate3d(0,0,0); }
                36%  { opacity:1; transform:scale(1) translate3d(0,0,0); }
                63%  { opacity:1; }
                69%  { opacity:0; transform:scale(1.06) translate3d(-0.5%,-0.3%,0); }
                100% { opacity:0; }
              }
              @keyframes hs3 {
                0%,63%  { opacity:0; transform:scale(1) translate3d(0,0,0); }
                69%  { opacity:1; transform:scale(1) translate3d(0,0,0); }
                96%  { opacity:1; }
                100% { opacity:0; transform:scale(1.06) translate3d(-0.5%,-0.3%,0); }
              }
              .hs1 { animation: hs1 20s ease-in-out infinite; will-change:transform,opacity; }
              .hs2 { animation: hs2 20s ease-in-out infinite; will-change:transform,opacity; }
              .hs3 { animation: hs3 20s ease-in-out infinite; will-change:transform,opacity; }
              @media (prefers-reduced-motion:reduce) {
                .hs1,.hs2,.hs3 { animation:none!important; opacity:1!important; }
                .hs2,.hs3 { opacity:0!important; }
              }
            `}} />

            <div className="absolute inset-0 hs1">
              <Image
                src={HERO_SLIDES[0].src}
                alt={HERO_SLIDES[0].alt}
                fill priority
                className="object-cover object-center"
                sizes="100vw"
              />
            </div>
            <div className="absolute inset-0 hs2">
              <Image
                src={HERO_SLIDES[1].src}
                alt={HERO_SLIDES[1].alt}
                fill priority
                className="object-cover object-center"
                sizes="100vw"
              />
            </div>
            <div className="absolute inset-0 hs3">
              <Image
                src={HERO_SLIDES[2].src}
                alt={HERO_SLIDES[2].alt}
                fill priority
                className="object-cover object-center"
                sizes="100vw"
              />
            </div>

            {/* Gradient: strong on left for text, fades right */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0e0818]/80 via-[#0e0818]/55 to-[#0e0818]/20" />
            {/* Subtle bottom vignette */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0e0818]/40 to-transparent" />
          </div>

          {/* Hero content */}
          <div className="relative z-10 mx-auto w-full px-6 md:px-10 max-w-7xl pt-32 pb-28 md:pt-44 md:pb-36 flex flex-col items-start">
            <div className="max-w-[720px]">

              {/* Eyebrow */}
              <div className="hero-headline inline-flex items-center gap-3 mb-8">
                <span className="h-px w-10 bg-brand-purple-light/80" />
                <span className="text-brand-purple-light text-[11px] font-semibold uppercase tracking-[0.22em] font-sans-heading">
                  Fresh Start House · Apple Valley, MN
                </span>
              </div>

              {/* Main headline — DM Serif Display for editorial feel */}
              <h1 className="hero-headline text-[clamp(2.4rem,5.5vw,4.2rem)] text-white leading-[1.1] tracking-tight mb-3.5 md:mb-4">
                <span className="block">Where Warmth <em className="not-italic text-brand-purple-light">Meets</em></span>
                <span className="block">Professional Care.</span>
              </h1>

              <p className="hero-subtext text-white/70 text-base md:text-[1.05rem] leading-[1.75] mb-10 max-w-[500px] font-sans-heading font-light">
                A nurturing home where your loved ones receive compassionate, personalized care — and the dignity they deserve.
              </p>

              {/* Both buttons: same bg-brand-purple, differentiated by label + subtle border */}
              <div className="hero-actions flex flex-wrap items-center gap-3">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-3 bg-brand-purple hover:bg-brand-purple-dark text-white px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-brand-purple/30 group font-sans-heading"
                >
                  Discover Our Home
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-brand-purple hover:bg-brand-purple-dark text-white px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-brand-purple/30 group font-sans-heading border border-brand-purple-light/30"
                >
                  Schedule a Tour
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Hero bottom stat strip */}
            <div className="hero-actions absolute bottom-0 left-0 right-0 hidden md:block">
              <div className="mx-auto max-w-7xl px-6 md:px-10 pb-10">
                <div className="inline-flex items-center gap-8 bg-white/8 backdrop-blur-md border border-white/10 rounded-2xl px-7 py-4">
                  <div className="flex items-center gap-3 text-white">
                    <ShieldCheck className="h-5 w-5 text-brand-purple-light shrink-0" />
                    <div>
                      <div className="text-xs font-bold font-sans-heading">24/7 Care Support</div>
                      <div className="text-[11px] text-white/50 font-sans-heading">Always available</div>
                    </div>
                  </div>
                  <div className="w-px h-8 bg-white/15" />
                  <div className="flex items-center gap-3 text-white">
                    <Heart className="h-5 w-5 text-brand-purple-light shrink-0" />
                    <div>
                      <div className="text-xs font-bold font-sans-heading">Personalized Plans</div>
                      <div className="text-[11px] text-white/50 font-sans-heading">Tailored for each resident</div>
                    </div>
                  </div>
                  <div className="w-px h-8 bg-white/15" />
                  <div className="flex items-center gap-3 text-white">
                    <Building2 className="h-5 w-5 text-brand-purple-light shrink-0" />
                    <div>
                      <div className="text-xs font-bold font-sans-heading">Comfortable Suites</div>
                      <div className="text-[11px] text-white/50 font-sans-heading">Home-like environment</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── FEATURES STRIP ──────────────────────────────────── */}
        <section className="bg-brand-dark border-b border-white/10" aria-label="Key features">
          <div className="mx-auto px-6 md:px-10 max-w-7xl">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-0 divide-x divide-white/10 text-white">
              {[
                { icon: Building2, label: "Independent Living" },
                { icon: Heart,     label: "Emotional Support" },
                { icon: ShieldCheck, label: "Emergency Response" },
                { icon: Utensils,  label: "Chef-Prepared Meals" },
                { icon: BedDouble, label: "Comfortable Suites" },
                { icon: Leaf,      label: "Garden & Wellness" },
              ].map(({ icon: Icon, label }, i) => (
                <div
                  key={label}
                  className="flex flex-col items-center text-center gap-2.5 py-5 px-4 hover:bg-white/5 transition-all duration-300 group"
                  style={{
                    animation: `fade-up 0.6s cubic-bezier(0.22,1,0.36,1) ${0.05 + i * 0.07}s both`,
                  }}
                >
                  <Icon className="h-5 w-5 text-brand-purple-light transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-0.5" strokeWidth={1.75} />
                  <span className="text-[11px] sm:text-xs font-semibold text-white/75 leading-snug group-hover:text-white/95 transition-colors duration-200">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── ABOUT ───────────────────────────────────────────── */}
        <section className="py-20 lg:py-28 bg-white" aria-labelledby="about-heading">
          <div className="mx-auto px-6 md:px-10 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

              {/* Image column — slides in from the left */}
              <ScrollReveal direction="left" className="relative flex items-center justify-center">
                <div className="relative w-full max-w-md lg:max-w-[460px] mx-auto">
                  {/* Dot grid accent — placed in the top right corner with elegant ambient glow */}
                  <div
                    className="absolute -top-7 -right-7 w-36 h-36 opacity-30 pointer-events-none hidden sm:block float-accent z-0"
                    aria-hidden="true"
                  >
                    <svg width="100%" height="100%" fill="none">
                      <pattern id="dp-about" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                        <circle cx="2.5" cy="2.5" r="1.5" fill="#7C4DDB" />
                      </pattern>
                      <rect width="100%" height="100%" fill="url(#dp-about)" />
                    </svg>
                  </div>

                  {/* Main image — balanced height matching text column with premium rounded border & shadows */}
                  <div className="relative aspect-[4/3.7] sm:aspect-[4/3.8] rounded-3xl overflow-hidden shadow-2xl shadow-brand-purple/15 border-4 border-white z-10 group">
                    <Image
                      src="/images/about_caregiver_senior.jpg"
                      alt="Caregiver smiling with senior resident at Fresh Start House"
                      fill
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 1024px) 90vw, 45vw"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Experience badge — sleek dark glassmorphism card */}
                  <div className="absolute -bottom-5 left-4 sm:-left-5 bg-gradient-to-br from-brand-dark via-gray-900 to-brand-dark text-white px-6 py-4 rounded-2xl shadow-2xl shadow-black/25 border border-white/10 flex items-center gap-4 z-20 backdrop-blur-md">
                    <div className="w-11 h-11 rounded-full bg-brand-purple/20 border border-brand-purple-light/40 flex items-center justify-center shrink-0 shadow-inner">
                      <Heart className="w-5 h-5 text-brand-purple-light fill-brand-purple-light/20" />
                    </div>
                    <div>
                      <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-purple-light to-purple-300 leading-none">5+</div>
                      <div className="text-[11px] text-white/70 font-medium tracking-wide mt-1">Years of Compassionate Care</div>
                    </div>
                  </div>

                  {/* Ambient background glow */}
                  <div className="absolute -top-10 -right-10 w-48 h-48 bg-brand-purple/10 rounded-full filter blur-3xl -z-10 pointer-events-none" />
                </div>
              </ScrollReveal>

              {/* Content column — slides in from the right */}
              <ScrollReveal direction="right">
                <p className="text-xs font-bold text-brand-purple uppercase tracking-[0.15em] mb-3">
                  About Fresh Start House
                </p>
                <h2 id="about-heading" className="text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-gray-900 tracking-tight leading-[1.15] mb-5">
                  A Home Built on<br />
                  <span className="text-brand-purple">Compassion & Trust</span>
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6 text-base">
                  At Fresh Start House, we provide personalized care designed to support independence, health, and dignity. Our compassionate team ensures every resident enjoys comfortable accommodations, nutritious dining, and attentive support in a warm, welcoming environment.
                </p>

                <ul className="space-y-3.5 mb-8">
                  {[
                    "Dedicated professional staff providing attentive, round-the-clock support",
                    "Nutritious, chef-prepared meals tailored to individual dietary needs",
                    "Enriching daily activities, social programs, and wellness routines",
                  ].map((item, i) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-gray-700"
                      style={{ transitionDelay: `${0.08 + i * 0.1}s` }}
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-purple shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/about"
                  className="inline-flex items-center gap-3 bg-brand-purple hover:bg-brand-purple-dark text-white px-8 py-3.5 rounded-full text-sm font-bold tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-brand-purple/25 hover:-translate-y-0.5 group"
                >
                  Learn More About Us
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </ScrollReveal>

            </div>
          </div>
        </section>

        {/* ─── SPACES GALLERY ──────────────────────────────────── */}
        <section className="py-20 lg:py-28 bg-brand-surface" aria-labelledby="spaces-heading">
          <div className="mx-auto px-6 md:px-10 max-w-7xl">

            {/* Header row */}
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 lg:mb-12">
              <ScrollReveal direction="left">
                <p className="text-xs font-semibold text-brand-purple uppercase tracking-[0.15em] mb-3 font-sans-heading">Our Spaces</p>
                <h2 id="spaces-heading" className="text-3xl md:text-4xl text-gray-900 leading-tight">
                  Life at Fresh Start House
                </h2>
              </ScrollReveal>
              <ScrollReveal direction="right">
                <Link
                  href="/life-at-our-home"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-purple hover:text-brand-purple-dark transition-colors group font-sans-heading"
                >
                  View all spaces
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </ScrollReveal>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-4">
              {HOME_SPACE_CARDS.map((space, i) => (
                <ScrollReveal
                  key={space.id}
                  direction="up"
                  className={`reveal-delay-${Math.min(i + 1, 5)}`}
                >
                  <Link
                    href="/life-at-our-home"
                    className="group block bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-brand-purple/30 shadow-sm hover:shadow-lg hover:shadow-brand-purple/10 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                      <Image
                        src={space.image}
                        alt={space.title}
                        fill
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                      />
                      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3">
                        <div className="text-white font-semibold text-sm leading-tight font-sans-heading">{space.title}</div>
                        <div className="text-white/65 text-[11px] mt-0.5 font-sans-heading">{space.subtitle}</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between px-4 py-3">
                      <span className="text-[11px] font-semibold text-gray-500 group-hover:text-brand-purple transition-colors font-sans-heading">Explore</span>
                      <div className="w-6 h-6 rounded-full border border-gray-200 group-hover:border-brand-purple group-hover:bg-brand-purple flex items-center justify-center transition-all duration-300">
                        <ArrowRight className="w-3 h-3 text-gray-400 group-hover:text-white transition-colors" />
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>

            {/* Featured Banner */}
            <ScrollReveal direction="up" className="mt-6 lg:mt-8">
              <div className="relative bg-brand-dark rounded-3xl overflow-hidden">
                {/* Background image */}
                <div className="absolute inset-0">
                  <Image
                    src={FEATURED_BANNER_IMAGE}
                    alt="Finished lower-level lounge at Fresh Start House"
                    fill
                    className="object-cover object-center scale-105 hover:scale-110 transition-transform duration-[6000ms]"
                    sizes="100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/70 to-brand-dark/20" />
                </div>

                <div className="relative z-10 px-8 sm:px-12 py-12 sm:py-14 max-w-lg">
                  <p className="text-[11px] font-semibold text-brand-purple-light uppercase tracking-[0.18em] mb-3 font-sans-heading">
                    All-Inclusive Care
                  </p>
                  <h3 className="text-2xl sm:text-3xl text-white leading-tight mb-4">
                    Comfort Designed<br />Around Every Resident
                  </h3>
                  <p className="text-white/65 text-sm leading-relaxed mb-7 font-sans-heading">
                    Thoughtfully designed spaces built for safety, dignity, and joyful everyday moments.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2.5 bg-brand-purple hover:bg-brand-purple-dark text-white px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-purple/25 group font-sans-heading"
                  >
                    Schedule a Tour
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ─── SERVICES ────────────────────────────────────────── */}
        <ServicesSection />

        {/* ─── WHY CHOOSE US ───────────────────────────────────── */}
        <WhyChooseUsSection />

        {/* ─── STATS ───────────────────────────────────────────── */}
        <section className="py-16 lg:py-20 bg-brand-dark" aria-label="Our impact">
          <div className="mx-auto px-6 md:px-10 max-w-7xl">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden">
              {[
                { value: "5+", label: "Years of Care", suffix: "" },
                { value: "100", label: "Commitment to Every Resident", suffix: "%" },
                { value: "24", label: "Hour Professional Support", suffix: "/7" },
                { value: "6", label: "Core Care Services", suffix: "" },
              ].map(({ value, label, suffix }, i) => (
                <ScrollReveal
                  key={label}
                  direction="scale"
                  className={`reveal-delay-${i + 1}`}
                >
                  <div
                    className="bg-brand-dark flex flex-col items-center justify-center text-center py-10 px-6 hover:bg-white/5 transition-colors duration-300 h-full"
                  >
                    <div className="text-3xl md:text-4xl font-black text-white tracking-tight mb-1.5">
                      {value}
                      <span className="text-brand-purple-light">{suffix}</span>
                    </div>
                    <div className="text-[11px] md:text-xs text-white/50 font-medium uppercase tracking-wider leading-snug max-w-[140px]">
                      {label}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FAQ ─────────────────────────────────────────────── */}
        <FaqSection />

        {/* ─── CTA BANNER ──────────────────────────────────────── */}
        <section className="relative py-24 lg:py-32 overflow-hidden" aria-label="Call to action">
          <div className="absolute inset-0 z-0">
            <Image
              src={assetPath(propertyFiles.exteriorRear)}
              alt="Backyard and rear exterior at Fresh Start House"
              fill
              className="object-cover object-center scale-105 hover:scale-110 transition-transform duration-[8000ms]"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-brand-dark/75" />
            {/* Soft purple accent wash */}
            <div className="absolute inset-0 bg-brand-purple/15" />
          </div>

          <div className="relative z-10 mx-auto px-6 md:px-10 max-w-4xl text-center">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-purple-light pulse-soft" />
                <p className="text-[11px] font-bold text-brand-purple-light uppercase tracking-[0.18em]">
                  Ready to Get Started?
                </p>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-tight mb-5">
                Find the Right Home<br />for Your Loved One
              </h2>
              <p className="text-white/65 text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
                Schedule a personal tour and see how Fresh Start House can provide the compassionate care your family deserves.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-brand-purple hover:bg-brand-purple-dark text-white px-9 py-4 rounded-full text-sm font-bold tracking-wide transition-all duration-300 hover:shadow-xl hover:shadow-brand-purple/30 hover:-translate-y-0.5 group min-w-[180px] justify-center"
                >
                  Schedule a Tour
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}
                  className="inline-flex items-center gap-3 border border-white/40 hover:border-white/80 hover:bg-white/10 text-white px-9 py-4 rounded-full text-sm font-bold tracking-wide transition-all duration-300 backdrop-blur-sm hover:-translate-y-0.5 group min-w-[180px] justify-center"
                >
                  Call {siteConfig.contact.phone}
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
