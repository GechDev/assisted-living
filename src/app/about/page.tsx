import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Check, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { siteConfig } from "@/config/site";
import { assetPath, propertyFiles } from "@/config/media";

const HIGHLIGHTS = [
  "Excellent Protection",
  "High Savings Potential",
  "Maximum Time Savings",
  "Personalised Daily Routines",
];

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-brand-dark">
        <Header />
        <div className="h-24"></div>
      </div>

      <main className="flex-grow">
        {/* PAGE HEADER */}
        <section className="relative h-[340px] flex items-center bg-brand-dark overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src={assetPath(propertyFiles.neighborhoodAerial)}
              alt="Tree-lined neighborhood surrounding Fresh Start House"
              fill
              className="object-cover scale-105"
              priority
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-brand-dark/70" />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/80 to-transparent" />
          </div>
          <div className="container relative z-10 mx-auto px-6 max-w-7xl">
            <div className="flex flex-col gap-2">
              {/* Eyebrow */}
              <p
                className="text-[11px] font-bold text-brand-purple-light uppercase tracking-[0.18em] mb-2"
                style={{ animation: "fade-up 0.7s cubic-bezier(0.22,1,0.36,1) 0.1s both" }}
              >
                Fresh Start House
              </p>
              <h1
                className="text-4xl md:text-5xl text-white"
                style={{ animation: "fade-up 0.7s cubic-bezier(0.22,1,0.36,1) 0.2s both" }}
              >
                About Us
              </h1>
              <p
                className="text-white/60 font-medium mt-2"
                style={{ animation: "fade-up 0.7s cubic-bezier(0.22,1,0.36,1) 0.3s both" }}
              >
                Home / About Us
              </p>
            </div>
          </div>
        </section>

        {/* MAIN ABOUT SECTION */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              {/* Left Column: Text — slides from left */}
              <ScrollReveal direction="left">
                <p className="text-brand-purple font-bold uppercase tracking-wider text-xs mb-4">
                  About Us
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
                  Making Golden Years{" "}
                  <span className="text-brand-purple">Truly Memorable</span>
                </h2>

                <p className="text-gray-600 mb-8 leading-relaxed">
                  At Fresh Start House, we believe every person deserves to age with dignity, warmth, and genuine human connection. Our dedicated team provides compassionate, personalized care tailored to each resident&apos;s unique needs — creating a true home where comfort and support go hand in hand.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {HIGHLIGHTS.map((item, i) => (
                    <ScrollReveal
                      key={item}
                      direction="up"
                      className={i > 0 ? `reveal-delay-${Math.min(i, 4)}` : ""}
                    >
                      <div className="flex items-center gap-2.5 group">
                        <Check className="h-4 w-4 text-brand-purple shrink-0 transition-transform duration-200 group-hover:scale-110" />
                        <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-200">{item}</span>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-8 mt-8">
                  <div>
                    <p className="font-bold text-gray-900 text-lg">Jacob Roberts</p>
                    <p className="text-xs font-medium text-brand-purple uppercase tracking-widest">{siteConfig.name} — Founder</p>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-3 bg-brand-purple hover:bg-brand-purple-dark text-white px-7 py-3.5 rounded-full text-sm font-bold tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-brand-purple/25 hover:-translate-y-0.5 group"
                  >
                    Contact Us
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </ScrollReveal>

              {/* Right Column: Image Grid — slides from right */}
              <ScrollReveal direction="right" className="relative flex items-center justify-center">
                <div className="relative w-full max-w-lg">
                  {/* Decorative dot matrix pattern — positioned in top right corner with subtle premium glow */}
                  <div
                    className="absolute -top-6 -right-6 w-36 h-36 opacity-30 pointer-events-none hidden sm:block float-accent z-0"
                    aria-hidden="true"
                  >
                    <svg width="100%" height="100%" fill="none">
                      <pattern id="dp-about-grid" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                        <circle cx="2.5" cy="2.5" r="1.5" fill="#7C4DDB" />
                      </pattern>
                      <rect width="100%" height="100%" fill="url(#dp-about-grid)" />
                    </svg>
                  </div>

                  {/* Two-column balanced image layout */}
                  <div className="relative z-10 grid grid-cols-2 gap-4 sm:gap-5 items-stretch">
                    {/* Left primary image */}
                    <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-brand-purple/10 border-2 border-white/80 group">
                      <Image
                        src={assetPath(propertyFiles.exteriorFront)}
                        alt="Front exterior of Fresh Start House"
                        width={300}
                        height={400}
                        className="object-cover w-full h-[330px] sm:h-[350px] transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
                    </div>

                    {/* Right column: secondary image + experience badge */}
                    <div className="flex flex-col justify-between gap-4">
                      <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-brand-purple/10 border-2 border-white/80 flex-1 group">
                        <Image
                          src="/images/caregiver_1791526839656.jpg"
                          alt="Caregiver with senior resident"
                          width={300}
                          height={260}
                          className="object-cover w-full h-[220px] sm:h-[235px] transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                      </div>

                      {/* Experience badge with refined premium card styling */}
                      <div className="bg-gradient-to-br from-brand-dark via-gray-900 to-brand-dark text-white p-4 sm:p-5 rounded-2xl border border-white/10 shadow-xl shadow-black/20 backdrop-blur-sm relative overflow-hidden">
                        <div className="absolute -right-4 -bottom-4 w-16 h-16 bg-brand-purple/20 rounded-full blur-xl pointer-events-none" />
                        <div className="relative z-10 flex items-center gap-3.5">
                          <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-purple-light to-purple-300 leading-none">
                            5+
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-white tracking-wide">Years of Excellence</div>
                            <div className="text-[11px] text-white/60 font-medium">Compassionate Care</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Decorative background glow */}
                  <div className="absolute -top-10 -right-10 w-56 h-56 bg-brand-purple/10 rounded-full filter blur-3xl -z-10 pointer-events-none" />
                </div>
              </ScrollReveal>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
