import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Building, Heart, Activity, Stethoscope, ArrowRight } from "lucide-react";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { assetPath, propertyFiles } from "@/config/media";

const SERVICES = [
  {
    icon: Building,
    title: "Independent Living",
    desc: "Enjoy the freedom of independence with the security of 24/7 support available whenever you need it.",
  },
  {
    icon: Heart,
    title: "Assisted Care",
    desc: "Personalized assistance with daily activities, ensuring comfort, dignity, and safety every step of the way.",
  },
  {
    icon: Stethoscope,
    title: "Nursing Staff",
    desc: "Professional nursing care available round the clock for medication management and health monitoring.",
  },
  {
    icon: Activity,
    title: "Memory Care",
    desc: "Specialized, compassionate support for residents with memory-related conditions in a safe environment.",
  },
];

export default function Services() {
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
              src={assetPath(propertyFiles.kitchenMain)}
              alt="Kitchen where chef-prepared meals are served"
              fill
              className="object-cover scale-105"
              priority
            />
            <div className="absolute inset-0 bg-brand-dark/70" />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/80 to-transparent" />
          </div>
          <div className="container relative z-10 mx-auto px-6 max-w-7xl">
            <div className="flex flex-col gap-2">
              <p
                className="text-[11px] font-bold text-brand-purple-light uppercase tracking-[0.18em] mb-2"
                style={{ animation: "fade-up 0.7s cubic-bezier(0.22,1,0.36,1) 0.1s both" }}
              >
                What We Offer
              </p>
              <h1
                className="text-4xl md:text-5xl text-white"
                style={{ animation: "fade-up 0.7s cubic-bezier(0.22,1,0.36,1) 0.2s both" }}
              >
                Care &amp; Services
              </h1>
              <p
                className="text-white/60 font-medium mt-2"
                style={{ animation: "fade-up 0.7s cubic-bezier(0.22,1,0.36,1) 0.3s both" }}
              >
                Home / Services
              </p>
            </div>
          </div>
        </section>

        {/* SERVICES GRID */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 max-w-7xl">

            <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-brand-purple font-bold uppercase tracking-wider text-xs mb-4">Our Services</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Comprehensive Care{" "}
                <span className="text-brand-purple">Tailored to You</span>
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We offer a range of services designed to support independence while providing the exact level of care and assistance needed for a fulfilling life.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {SERVICES.map((service, i) => (
                <ScrollReveal
                  key={service.title}
                  direction="up"
                  className={`reveal-delay-${i + 1}`}
                >
                  <div className="bg-brand-surface p-8 rounded-2xl border border-gray-100 hover:shadow-xl hover:shadow-brand-purple/10 hover:border-brand-purple/20 transition-all duration-300 hover:-translate-y-1.5 group h-full flex flex-col">
                    <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:shadow-md group-hover:scale-110 transition-all duration-300">
                      <service.icon className="h-7 w-7 text-brand-purple" />
                    </div>
                    <h3 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-brand-purple transition-colors duration-200">{service.title}</h3>
                    <p className="text-gray-600 text-sm mb-6 leading-relaxed flex-1">{service.desc}</p>
                    <Link
                      href="/contact"
                      className="text-brand-purple font-bold text-sm uppercase tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all duration-200 hover:text-brand-purple-dark"
                    >
                      Learn More <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
