import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { siteConfig } from "@/config/site";
import { assetPath, propertyFiles } from "@/config/media";

export default function Contact() {
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
              src={assetPath(propertyFiles.exteriorDriveway)}
              alt="Driveway and welcoming front approach to Fresh Start House"
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
                Get in Touch
              </p>
              <h1
                className="text-4xl md:text-5xl text-white"
                style={{ animation: "fade-up 0.7s cubic-bezier(0.22,1,0.36,1) 0.2s both" }}
              >
                Schedule a Tour
              </h1>
              <p
                className="text-white/60 font-medium mt-2"
                style={{ animation: "fade-up 0.7s cubic-bezier(0.22,1,0.36,1) 0.3s both" }}
              >
                Home / Contact
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="py-20 bg-brand-surface">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

              {/* Left Column: Info — slides from left */}
              <ScrollReveal direction="left">
                <p className="text-brand-purple font-bold uppercase tracking-wider text-xs mb-4">Appointment</p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
                  Join Our{" "}
                  <span className="text-brand-purple">Caring Community</span>
                </h2>

                <p className="text-gray-600 mb-10 leading-relaxed">
                  We would love to welcome you and your loved one to Fresh Start House. Schedule a personal tour and discover how we can provide the compassionate, dignified care your family deserves.
                </p>

                <div className="mb-10">
                  <h3 className="font-bold text-gray-900 mb-5 text-base uppercase tracking-wider text-xs flex items-center gap-2">
                    <Clock className="h-4 w-4 text-brand-purple" />
                    Opening Hours
                  </h3>
                  <div className="flex flex-col gap-3 text-gray-600 text-sm">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-brand-purple shrink-0" />
                      <span>{siteConfig.businessHours.mondayFriday}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-brand-purple/60 shrink-0" />
                      <span>{siteConfig.businessHours.saturday}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-brand-purple/40 shrink-0" />
                      <span>{siteConfig.businessHours.sunday}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-5 text-xs uppercase tracking-wider flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-brand-purple" />
                    Our Location
                  </h3>
                  <ul className="space-y-4 text-sm text-gray-600">
                    <li className="flex gap-3 items-start hover:text-gray-900 transition-colors duration-200">
                      <MapPin className="h-5 w-5 text-brand-purple shrink-0 mt-0.5" />
                      <span>{siteConfig.contact.address.full}</span>
                    </li>
                    <li>
                      <a
                        href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}
                        className="flex items-center gap-3 hover:text-brand-purple transition-colors duration-200 group"
                      >
                        <Phone className="h-5 w-5 text-brand-purple shrink-0 transition-transform duration-200 group-hover:scale-110" />
                        <span>{siteConfig.contact.phone}</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="flex items-center gap-3 hover:text-brand-purple transition-colors duration-200 group"
                      >
                        <Mail className="h-5 w-5 text-brand-purple shrink-0 transition-transform duration-200 group-hover:scale-110" />
                        <span>{siteConfig.contact.email}</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>

              {/* Right Column: Form — slides from right */}
              <ScrollReveal direction="right">
                <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl hover:shadow-brand-purple/5 transition-shadow duration-500">
                  <h3 className="text-lg font-bold text-gray-900 mb-6">Send Us a Message</h3>
                  <form className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        placeholder="Your Name"
                        className="w-full border-b-2 border-gray-200 py-3 text-gray-700 focus:outline-none focus:border-brand-purple transition-colors duration-300 bg-transparent placeholder:text-gray-300 text-sm"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="phone" className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          placeholder="Your Phone"
                          className="w-full border-b-2 border-gray-200 py-3 text-gray-700 focus:outline-none focus:border-brand-purple transition-colors duration-300 bg-transparent placeholder:text-gray-300 text-sm"
                          required
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          placeholder="Your Email"
                          className="w-full border-b-2 border-gray-200 py-3 text-gray-700 focus:outline-none focus:border-brand-purple transition-colors duration-300 bg-transparent placeholder:text-gray-300 text-sm"
                          required
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="service" className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        Service Interest
                      </label>
                      <select
                        id="service"
                        className="w-full border-b-2 border-gray-200 py-3 text-gray-700 focus:outline-none focus:border-brand-purple transition-colors duration-300 bg-transparent appearance-none text-sm cursor-pointer"
                      >
                        <option value="">Select a Service</option>
                        <option value="independent">Independent Living</option>
                        <option value="assisted">Assisted Care</option>
                        <option value="nursing">24/7 Nursing</option>
                        <option value="memory">Memory Care</option>
                        <option value="respite">Respite & Therapy</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        Message
                      </label>
                      <textarea
                        id="message"
                        placeholder="Tell us about your loved one's needs..."
                        rows={4}
                        className="w-full border-b-2 border-gray-200 py-3 text-gray-700 focus:outline-none focus:border-brand-purple transition-colors duration-300 resize-none bg-transparent placeholder:text-gray-300 text-sm"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="self-start inline-flex items-center gap-3 bg-brand-purple hover:bg-brand-purple-dark text-white px-8 py-3.5 rounded-full text-sm font-bold tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-brand-purple/25 hover:-translate-y-0.5 active:translate-y-0 group"
                    >
                      Schedule a Tour
                    </button>
                  </form>
                </div>
              </ScrollReveal>

            </div>
          </div>
        </section>

        {/* BOTTOM CTA SECTION */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/community_1791526854672.jpg"
              alt="Community at Fresh Start House"
              fill
              className="object-cover scale-105"
            />
            <div className="absolute inset-0 bg-brand-dark/80" />
            <div className="absolute inset-0 bg-brand-purple/15" />
          </div>

          <div className="container relative z-10 mx-auto px-6 text-center max-w-3xl">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-purple-light pulse-soft" />
                <p className="text-[11px] font-bold text-brand-purple-light uppercase tracking-[0.18em]">
                  Always Here for You
                </p>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Your Family Deserves{" "}
                <span className="text-brand-purple-light">the Best Care</span>
              </h2>
              <p className="text-white/65 mb-10 text-base md:text-lg leading-relaxed max-w-xl mx-auto">
                Reach out today and let us show you how Fresh Start House can become a true home for your loved one.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}
                  className="inline-flex items-center gap-3 bg-brand-purple hover:bg-brand-purple-dark text-white px-9 py-4 rounded-full text-sm font-bold tracking-wide transition-all duration-300 hover:shadow-xl hover:shadow-brand-purple/30 hover:-translate-y-0.5"
                >
                  Call {siteConfig.contact.phone}
                </a>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="inline-flex items-center gap-3 border border-white/40 hover:border-white/80 hover:bg-white/10 text-white px-9 py-4 rounded-full text-sm font-bold tracking-wide transition-all duration-300 backdrop-blur-sm hover:-translate-y-0.5"
                >
                  Email Us
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
