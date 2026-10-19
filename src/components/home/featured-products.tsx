"use client";

import Link from "next/link";
import { useGetFeaturedQuery } from "@/lib/api/endpoints";
import { ShoppingBag } from "lucide-react";

export function FeaturedProducts() {
  const { data, isLoading, isError } = useGetFeaturedQuery();
  const products = data?.products || [];

  if (isLoading) return (
    <section className="max-w-[1200px] mx-auto px-5 md:px-8 py-12 md:py-20">
      <h2 className="font-display text-3xl md:text-5xl font-extrabold uppercase tracking-tight mb-8">Featured</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="aspect-[3/4] rounded-[10px] bg-neutral-100 animate-pulse border-2 border-subtle" />
        ))}
      </div>
    </section>
  );

  if (isError || products.length === 0) return null;

  return (
    <section className="max-w-[1200px] mx-auto px-5 md:px-8 py-12 md:py-20">
      <h2 className="font-display text-3xl md:text-5xl font-extrabold uppercase tracking-tight mb-8 md:mb-12">Featured</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {products.map((product: any) => (
          <Link key={product.id || product.slug} href={`/product/${product.slug}`} className="group block">
            <div className="relative aspect-[3/4] overflow-hidden rounded-[10px] border-2 border-subtle bg-neutral-50">
              <img
                src={product.images?.[0]?.url || "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=600&auto=format&fit=crop"}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute top-3 right-3">
                <span className="w-9 h-9 rounded-full bg-paper border-2 border-ink flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-none">
                  <ShoppingBag size={16} strokeWidth={2} />
                </span>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-[10px] uppercase tracking-[0.1em] font-bold text-neutral-500 mb-1">{typeof product.category === "object" ? product.category.name : "Fashion"}</p>
              <h3 className="font-display text-base md:text-lg font-extrabold uppercase tracking-tight leading-tight group-hover:underline underline-offset-4">{product.name}</h3>
              <p className="text-sm font-bold mt-1">BDT {product.basePrice?.toLocaleString()}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
