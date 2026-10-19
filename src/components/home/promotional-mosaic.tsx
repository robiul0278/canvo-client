"use client";

import Link from "next/link";

export function PromotionalMosaic() {
  return (
    <section className="max-w-[1200px] mx-auto px-5 md:px-8 py-12 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 h-auto md:h-[520px]">
        {/* Large tile */}
        <Link href="/" className="md:row-span-2 md:col-span-2 relative overflow-hidden rounded-[10px] border-2 border-ink group block bg-paper">
          <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1000&auto=format&fit=crop" alt="Lookbook" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
            <span className="inline-block px-5 py-2.5 bg-paper text-ink text-xs font-extrabold uppercase tracking-[0.1em] rounded-full border-2 border-ink shadow-none mb-4">Campaign</span>
            <h3 className="font-display text-3xl md:text-6xl font-extrabold uppercase tracking-tight text-paper leading-[0.9]">Lookbook</h3>
          </div>
        </Link>
        {/* Stacked tiles */}
        <Link href="/" className="relative overflow-hidden rounded-[10px] border-2 border-ink group block bg-sage/30 h-[240px] md:h-auto">
          <img src="https://images.unsplash.com/photo-1552374192-cbca7b989ab7?q=80&w=600&auto=format&fit=crop" alt="Accessories" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent" />
          <div className="absolute bottom-6 left-6">
            <span className="text-xs font-bold uppercase tracking-[0.1em] text-ink">Accessories</span>
          </div>
        </Link>
        <Link href="/" className="relative overflow-hidden rounded-[10px] border-2 border-ink group block bg-mustard/30 h-[240px] md:h-auto">
          <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop" alt="Collabs" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent" />
          <div className="absolute bottom-6 left-6">
            <span className="text-xs font-bold uppercase tracking-[0.1em] text-ink">Collabs</span>
          </div>
        </Link>
      </div>
    </section>
  );
}
