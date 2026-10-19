"use client";

import Link from "next/link";
import { useGetNewArrivalsQuery } from "@/lib/api/endpoints";

export function NewArrivals() {
  const { data, isLoading } = useGetNewArrivalsQuery();
  const products = data?.products || [];

  if (isLoading) return (
    <section className="max-w-[1200px] mx-auto px-5 md:px-8 py-12 md:py-20">
      <h2 className="font-display text-3xl md:text-5xl font-extrabold uppercase tracking-tight mb-8">New Arrivals</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="aspect-[3/4] rounded-[10px] bg-neutral-100 animate-pulse border-2 border-subtle" />
        ))}
      </div>
    </section>
  );

  if (products.length === 0) return null;

  return (
    <section className="max-w-[1200px] mx-auto px-5 md:px-8 py-12 md:py-20">
      <h2 className="font-display text-3xl md:text-5xl font-extrabold uppercase tracking-tight mb-8 md:mb-12">New Arrivals</h2>
      <div className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-none">
        {products.map((product: any) => (
          <Link key={product.id || product.slug} href={`/product/${product.slug}`} className="snap-start shrink-0 w-[calc(50vw-20px)] md:w-[calc(25vw-16px)] min-w-[160px] md:min-w-[260px] group block">
            <div className="relative aspect-[3/4] overflow-hidden rounded-[10px] border-2 border-subtle bg-neutral-50">
              <img
                src={product.images?.[0]?.url || "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600&auto=format&fit=crop"}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="mt-4">
              <h3 className="font-display text-base md:text-lg font-extrabold uppercase tracking-tight leading-tight group-hover:underline underline-offset-4">{product.name}</h3>
              <p className="text-sm font-bold mt-1">BDT {product.basePrice?.toLocaleString()}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
