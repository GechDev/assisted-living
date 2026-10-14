"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    id: "security",
    question: "How is safety and security maintained at Fresh Start House?",
    answer:
      "We have 24/7 on-site professional staff, secure monitored entrances, emergency alert systems in every room, scheduled wellness checks, and comprehensive fire safety measures — providing complete peace of mind for residents and their families.",
  },
  {
    id: "visiting-policy",
    question: "What is the visiting policy for family and friends?",
    answer:
      "We maintain a warm, open visiting policy. Family and friends are welcome throughout daytime and evening hours, and are encouraged to join residents for meals, activities, or relaxing in our outdoor garden spaces.",
  },
  {
    id: "dietary-requirements",
    question: "Are special dietary needs accommodated in daily meals?",
    answer:
      "Absolutely. Our culinary team prepares three wholesome meals daily tailored to each resident's individual needs, including diabetic-friendly, low-sodium, heart-healthy, gluten-free, and texture-modified options — all coordinated with our care team.",
  },
  {
    id: "agreement-terms",
    question: "What are the residency agreement terms and cancellation conditions?",
    answer:
      "We believe in transparent, straightforward agreements with no hidden fees. Families can transition or conclude residency with reasonable advance written notice per our flexible terms, without burdensome penalties.",
  },
  {
    id: "long-term-stay",
    question: "Can residents stay at Fresh Start House long-term?",
    answer:
      "Yes. We offer both long-term residency and short-term respite stays. As care needs evolve over time, our personalized care plans adapt so residents can age comfortably in place within a familiar, supportive environment.",
  },
];

export function FaqSection() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section
      id="faq"
      className="py-20 lg:py-28 bg-white"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto px-6 md:px-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">

          {/* Left: Q&A */}
          <div className="lg:col-span-7">
            <ScrollReveal>
              <p className="text-xs font-bold text-brand-purple uppercase tracking-[0.15em] mb-3">
                Common Questions
              </p>
              <h2
                id="faq-heading"
                className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-[1.15] mb-10"
              >
                Answers to Questions<br />
                Families Often Ask
              </h2>
            </ScrollReveal>

            <div className="divide-y divide-gray-100">
              {FAQS.map((item, i) => {
                const isOpen = !!openItems[item.id];
                return (
                  <ScrollReveal
                    key={item.id}
                    className={`reveal-delay-${Math.min(i, 3)}`}
                  >
                    <div className="py-5 first:pt-0">
                      <button
                        type="button"
                        onClick={() => toggleItem(item.id)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-answer-${item.id}`}
                        className="w-full text-left flex items-start gap-4 group cursor-pointer"
                      >
                        <span
                          className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                            isOpen
                              ? "border-brand-purple bg-brand-purple text-white"
                              : "border-gray-300 text-gray-400 group-hover:border-brand-purple group-hover:text-brand-purple"
                          }`}
                          aria-hidden="true"
                        >
                          {isOpen ? (
                            <Minus className="h-3 w-3 stroke-[2.5]" />
                          ) : (
                            <Plus className="h-3 w-3 stroke-[2.5]" />
                          )}
                        </span>
                        <span
                          className={`text-base font-semibold leading-snug transition-colors duration-200 ${
                            isOpen
                              ? "text-brand-purple"
                              : "text-gray-900 group-hover:text-brand-purple"
                          }`}
                        >
                          {item.question}
                        </span>
                      </button>

                      <div
                        id={`faq-answer-${item.id}`}
                        role="region"
                        className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        <p className="pl-10 pr-2 pt-3 pb-2 text-gray-500 text-sm leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>

          {/* Right: image */}
          <ScrollReveal direction="right" className="lg:col-span-5 reveal-delay-2 h-full flex flex-col">
            <div className="relative w-full h-full min-h-[380px] rounded-3xl overflow-hidden shadow-xl bg-gray-100 group">
              <Image
                src="/images/faq_senior_reading.jpg"
                alt="Senior resident relaxing and reading at Fresh Start House"
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
              {/* Floating contact nudge */}
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-4 shadow-lg translate-y-0 hover:-translate-y-0.5 transition-transform duration-300">
                <p className="text-xs text-gray-500 mb-0.5">Still have questions?</p>
                <a
                  href="/contact"
                  className="text-sm font-bold text-brand-purple hover:text-brand-purple-dark transition-colors inline-flex items-center gap-1.5 group/link"
                >
                  Contact our team
                  <span className="transition-transform duration-200 group-hover/link:translate-x-0.5">→</span>
                </a>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
