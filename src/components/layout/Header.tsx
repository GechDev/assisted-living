"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { PhoneCall, Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/#faq", label: "FAQ" },
  { href: "/life-at-our-home", label: "Life at Our Home" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handler = () => {
      setScrolled(window.scrollY > 40);
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? Math.min((window.scrollY / docHeight) * 100, 100) : 0);
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#1B112C]/95 backdrop-blur-md shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto px-6 md:px-10 max-w-7xl flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-full bg-brand-purple text-white transition-all duration-300 group-hover:bg-brand-purple-dark shrink-0">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4.5 h-4.5">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-white text-base md:text-[17px] font-bold tracking-wide uppercase">Fresh Start</span>
              <span className="text-[10px] text-brand-purple-light font-semibold uppercase tracking-[0.12em]">Assisted Living</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-1.5">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 lg:px-3.5 py-2 text-[13px] font-semibold text-white/85 hover:text-white uppercase tracking-wider transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute bottom-0.5 left-3 right-3 h-[2px] bg-brand-purple-light scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left rounded-full" />
              </Link>
            ))}
          </nav>

          {/* Right: Phone + Mobile toggle */}
          <div className="flex items-center gap-4">
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}
              className="hidden lg:flex items-center gap-2.5 group"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-purple text-white transition-all duration-300 group-hover:bg-brand-purple-dark">
                <PhoneCall className="h-4 w-4" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-white text-sm font-bold">{siteConfig.contact.phone}</span>
                <span className="text-[11px] text-white/50">Available 24/7</span>
              </div>
            </a>

            <Link
              href="/contact"
              className="hidden md:inline-flex items-center gap-2 bg-brand-purple hover:bg-brand-purple-dark text-white px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-200"
            >
              Schedule Tour
            </Link>

            {/* Hamburger */}
            <button
              type="button"
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-200"
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
        {/* Scroll progress bar */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-brand-purple via-brand-purple-light to-brand-purple transition-[width] duration-75"
          style={{ width: `${scrollProgress}%` }}
        />
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] flex">
          {/* Backdrop — animated fade-in */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-[fade-in_0.25s_ease_both]"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          {/* Drawer — slides in from the right */}
          <div className="relative ml-auto w-72 max-w-[85vw] h-full bg-[#1B112C] flex flex-col p-6 shadow-2xl drawer-enter">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-purple text-white">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </div>
                <span className="text-white text-sm font-bold uppercase tracking-wide">Fresh Start</span>
              </div>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                aria-label="Close navigation menu"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <nav className="flex flex-col gap-1 flex-1">
              {NAV_LINKS.map((link, i) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  style={{ animationDelay: `${0.06 + i * 0.05}s` }}
                  className="px-4 py-3 rounded-xl text-white/80 hover:text-white hover:bg-white/10 font-semibold text-sm transition-all duration-200 border-l-2 border-transparent hover:border-brand-purple-light animate-[fade-left_0.3s_cubic-bezier(0.22,1,0.36,1)_both]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="border-t border-white/10 pt-6 space-y-3">
              <a
                href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-brand-purple-light" />
                <span className="text-sm font-semibold">{siteConfig.contact.phone}</span>
              </a>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center bg-brand-purple hover:bg-brand-purple-dark text-white px-5 py-3 rounded-full text-sm font-bold tracking-wider uppercase transition-all duration-200 w-full"
              >
                Schedule a Tour
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
