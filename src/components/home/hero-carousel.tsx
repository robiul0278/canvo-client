"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
  }, []);

  const slides = [
    { headline: "CANVO", sub: "Premium Fashion â€” Bangladesh", cta: "Shop Now", image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1600&auto=format&fit=crop" },
    { headline: "NEW COLLECTION", sub: "Autumn / Winter 2026", cta: "Explore", image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1600&auto=format&fit=crop" },
  ];

  const nextSlide = useCallback(() => setCurrent((prev) => (prev + 1) % slides.length), [slides.length]);
  const prevSlide = useCallback(() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length), [slides.length]);

  useEffect(() => {
    if (reducedMotion) return;
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [reducedMotion, nextSlide]);

  const slide = slides[current];

  return (
    <section className="relative w-full overflow-hidden canvo-pattern">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-8 md:py-12">
        <div className="relative h-[480px] md:h-[640px] rounded-[10px] overflow-hidden border-2 border-ink bg-paper">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={reducedMotion ? { opacity: 1 } : { opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reducedMotion ? { opacity: 1 } : { opacity: 0, scale: 1.02 }}
              transition={{ duration: reducedMotion ? 0 : 0.7, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <img src={slide.image} alt={slide.headline} className="w-full h-full object-cover" loading="eager" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
            </motion.div>
          </AnimatePresence>

          {/* Content card */}
          <div className="absolute bottom-8 left-8 md:bottom-14 md:left-14 bg-paper/95 backdrop-blur-sm p-6 md:p-10 rounded-[10px] border-2 border-ink max-w-md shadow-none">
            <h1 className="font-display text-4xl md:text-6xl font-extrabold uppercase tracking-tight leading-[0.9] mb-4">{slide.headline}</h1>
            <p className="text-sm md:text-base font-medium uppercase tracking-[0.08em] mb-6">{slide.sub}</p>
            <a href="/shop" className="inline-block px-8 py-3 bg-ink text-paper text-xs font-bold uppercase tracking-[0.1em] rounded-[6px] border-2 border-ink hover:bg-paper hover:text-ink transition-colors">
              {slide.cta}
            </a>
          </div>

          {/* Arrows */}
          <button onClick={prevSlide} aria-label="Previous" className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-paper/90 border-2 border-ink flex items-center justify-center hover:bg-ink hover:text-paper transition-colors z-10">
            <ChevronLeft size={20} strokeWidth={2.5} />
          </button>
          <button onClick={nextSlide} aria-label="Next" className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-paper/90 border-2 border-ink flex items-center justify-center hover:bg-ink hover:text-paper transition-colors z-10">
            <ChevronRight size={20} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </section>
  );
}
