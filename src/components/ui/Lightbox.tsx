"use client";

import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import type { GalleryImage } from "@/config/media";

type LightboxProps = {
  images: GalleryImage[];
  initialIndex: number;
  onClose: () => void;
};

export function Lightbox({ images, initialIndex, onClose }: LightboxProps) {
  const [current, setCurrent] = useState(initialIndex);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + images.length) % images.length);
  }, [images.length]);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    setCurrent(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose, prev, next]);

  const img = images[current];

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
    >
      <div
        className="absolute inset-0 bg-black/92 backdrop-blur-md"
        onClick={onClose}
        aria-hidden="true"
      />

      <button
        type="button"
        onClick={onClose}
        aria-label="Close image viewer"
        className="absolute top-5 right-5 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/20"
      >
        <X className="w-5 h-5" />
      </button>

      <div className="absolute top-5 left-1/2 -translate-x-1/2 z-10 text-white/60 text-sm font-sans-heading tracking-widest">
        {current + 1} / {images.length}
      </div>

      <button
        type="button"
        onClick={prev}
        aria-label="Previous image"
        className="absolute left-4 md:left-8 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-all border border-white/20 hover:scale-105"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <div className="relative z-10 w-full h-full flex items-center justify-center px-16 py-20 md:px-24">
        {img.isPropertyPhoto ? (
          // eslint-disable-next-line @next/next/no-img-element -- full-resolution local property photos
          <img
            src={img.src}
            alt={img.alt}
            className="max-h-[80vh] max-w-[min(100%,80rem)] w-auto h-auto object-contain shadow-2xl"
          />
        ) : (
          <div className="relative w-full max-w-5xl h-[min(80vh,900px)]">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 95vw, 80vw"
              priority
            />
          </div>
        )}
      </div>

      <button
        type="button"
        onClick={next}
        aria-label="Next image"
        className="absolute right-4 md:right-8 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-all border border-white/20 hover:scale-105"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-center max-w-lg px-4">
        <p className="text-white font-semibold text-sm font-sans-heading">{img.label}</p>
        <p className="text-white/50 text-xs font-sans-heading mt-1">{img.category}</p>
      </div>
    </div>
  );
}
