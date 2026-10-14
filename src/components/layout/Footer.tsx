import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services & Care" },
  { href: "/#faq", label: "FAQ" },
  { href: "/life-at-our-home", label: "Life at Our Home" },
  { href: "/contact", label: "Contact" },
];

const SERVICE_LINKS = [
  "Residential Care",
  "Assisted Living",
  "Senior Living",
  "Personal Care",
  "Respite & Therapy",
];

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white" role="contentinfo">
      {/* Top border accent */}
      <div className="h-px bg-gradient-to-r from-transparent via-brand-purple/50 to-transparent" />

      <div className="mx-auto px-6 md:px-10 max-w-7xl pt-16 pb-10">

        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">

          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-5 group">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-purple text-white transition-all duration-300 group-hover:bg-brand-purple-dark shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-white text-sm font-bold uppercase tracking-wide">Fresh Start</span>
                <span className="text-[10px] text-brand-purple-light font-semibold uppercase tracking-[0.12em]">Assisted Living</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-[220px]">
              Providing compassionate, personalized senior care in a warm, family-oriented environment.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-[0.15em] mb-5">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-[0.15em] mb-5">
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {SERVICE_LINKS.map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-[0.15em] mb-5">
              Get in Touch
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <Phone className="h-4 w-4 text-brand-purple-light shrink-0 mt-0.5" />
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="h-4 w-4 text-brand-purple-light shrink-0 mt-0.5" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-200 break-all"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-brand-purple hover:bg-brand-purple-dark text-white px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-200"
              >
                Schedule a Tour
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p className="flex items-center gap-1.5">
            {siteConfig.copyright}
          </p>
          <div className="flex items-center gap-5">
            <Link href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
