"use client";

import { use } from "react";
import { useGetCategoriesQuery, useGetProductsQuery } from "@/lib/api/endpoints";
import Link from "next/link";
import { EmptyState } from "@/components/shared/empty-state";
import { LoadingSkeleton } from "@/components/shared/loading-skeleton";
import { ProductCard } from "@/components/products/product-card";

export default function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const { data: catData, isLoading: catLoading } = useGetCategoriesQuery();
  const { data: prodData, isLoading: prodLoading } = useGetProductsQuery({ category: slug, limit: 12 });

  const category = catData?.categories ? catData.categories.find((c: any) => c.slug === slug) : undefined;
  const products = prodData?.products || [];

  if (catLoading || prodLoading) return <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-12"><LoadingSkeleton /></div>;

  return (
    <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-12 md:py-20">
      <h1 className="font-display text-3xl md:text-5xl font-extrabold uppercase tracking-tight mb-2">{category ? category.name : slug}</h1>
      <p className="text-sm text-neutral-500 uppercase tracking-[0.08em] font-medium mb-10">{category && category.description ? category.description : "Browse this collection."}</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {products.map((item: any) => <ProductCard key={item.slug} item={item} />)}
      </div>
      {products.length === 0 && <EmptyState title="No products in this category" description="Check back soon for new arrivals." />}
    </div>
  );
}
