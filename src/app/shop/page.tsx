"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useGetProductsQuery } from "@/lib/api/endpoints";
import Link from "next/link";
import { SlidersHorizontal } from "lucide-react";
import { EmptyState } from "@/components/shared/empty-state";
import { LoadingSkeleton } from "@/components/shared/loading-skeleton";
import { ProductCard } from "@/components/products/product-card";

export default function ShopPage() {
  const searchParams = useSearchParams();
  const search = searchParams.get("search") || "";
  const category = searchParams.get("category") || "";
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const { data, isLoading, isError } = useGetProductsQuery({ search, category, limit: 12, page: 1 });
  const products = data?.products || [];

  if (isLoading) return <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-12"><LoadingSkeleton /></div>;
  if (isError) return <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-12"><EmptyState title="Failed to load products" description="Please try again later." action={<button onClick={() => window.location.reload()} className="mt-6 px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wide border-2 border-ink hover:bg-ink hover:text-paper transition-colors">Retry</button>} /></div>;
  if (products.length === 0) return <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-12"><EmptyState title="No products found" description="Try adjusting your filters or search." /></div>;

  return (
    <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-12 md:py-20">
      <div className="flex items-center justify-between mb-8 md:mb-12">
        <h1 className="font-display text-3xl md:text-5xl font-extrabold uppercase tracking-tight">Shop</h1>
        <button onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)} className="md:hidden flex items-center gap-2 px-4 py-2 rounded-full border-2 border-ink text-xs font-bold uppercase tracking-[0.08em] hover:bg-ink hover:text-paper transition-colors">
          <SlidersHorizontal size={16} strokeWidth={2.5} /> Filters
        </button>
      </div>

      <div className="hidden md:flex gap-3 mb-10 flex-wrap">
        {["All", "Footwear", "Panjabi", "Shirt", "T-Shirt", "Pant", "Bag", "Accessories"].map((cat) => (
          <Link key={cat} href={cat === "All" ? "/shop" : "/shop?category=" + cat.toLowerCase()} className="px-4 py-2 rounded-full border-2 border-subtle text-xs font-bold uppercase tracking-[0.08em] hover:bg-ink hover:text-paper hover:border-ink transition-colors">
            {cat}
          </Link>
        ))}
      </div>

      {mobileFiltersOpen && (
        <div className="md:hidden mb-6 p-4 rounded-[10px] border-2 border-subtle bg-paper">
          <p className="text-xs text-neutral-500">Filters applied: search + category query parameters.</p>
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {products.map((item: any) => <ProductCard key={item.slug} item={item} />)}
      </div>
    </div>
  );
}
