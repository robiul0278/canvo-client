"use client";

import { use } from "react";
import { useGetProductBySlugQuery, useGetContentQuery } from "@/lib/api/endpoints";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useState } from "react";
import { EmptyState } from "@/components/shared/empty-state";
import { LoadingSkeleton } from "@/components/shared/loading-skeleton";

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const { data, isLoading, isError } = useGetProductBySlugQuery(slug);
  const product = data?.product;
  const [selectedImage, setSelectedImage] = useState(0);

  const { data: reviewsData } = useGetContentQuery("reviews");

  if (isLoading) return <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-12"><LoadingSkeleton /></div>;
  if (isError || !product) return <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-12"><EmptyState title="Product not found" description="This product may have been removed or is unavailable." /></div>;

  const images = product.images || [];
  const mainImage = images[selectedImage]?.url || images[0]?.url || "";

  return (
    <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-12 md:py-20">
      <Link href="/shop" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.08em] hover:underline mb-8">Back to Shop <ChevronLeft size={14} strokeWidth={2.5} /></Link>

      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        {/* Gallery */}
        <div>
          <div className="relative aspect-[4/5] rounded-[10px] overflow-hidden border-2 border-subtle bg-neutral-50">
            <img src={mainImage} alt={product.name} className="w-full h-full object-cover" />
          </div>
          <div className="flex gap-3 mt-4 overflow-x-auto pb-2">
            {images.map((img: any, idx: number) => (
              <button key={idx} onClick={() => setSelectedImage(idx)} className={`shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-[8px] overflow-hidden border-2 transition-colors ${selectedImage === idx ? "border-ink" : "border-subtle"}`}>
                <img src={img.url || img.thumbnailUrl || mainImage} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" loading="lazy" />
              </button>
            ))}
          </div>
        </div>

        {/* Details */}
        <div>
          <h1 className="font-display text-3xl md:text-5xl font-extrabold uppercase tracking-tight leading-[0.92] mb-4">{product.name}</h1>
          <p className="text-xl md:text-2xl font-bold mb-2">BDT {product.basePrice?.toLocaleString()}</p>
          <p className="text-sm text-neutral-600 mb-8">{product.shortDescription || product.description}</p>

          {/* Variants stub */}
          <div className="mb-6">
            <h4 className="text-xs font-extrabold uppercase tracking-[0.1em] mb-3">Color / Size</h4>
            <div className="flex gap-2 flex-wrap">
              {(product.variations?.[0]?.sizes || [{ size: "M", stock: 20 }]).map((v: any, idx: number) => (
                <span key={idx} className="px-3 py-1.5 rounded-full border-2 border-subtle text-xs font-bold uppercase tracking-[0.05em] hover:border-ink hover:bg-ink hover:text-paper transition-colors cursor-default">
                  {v.size}
                </span>
              ))}
            </div>
          </div>

          <button className="w-full md:w-auto px-10 py-4 rounded-[6px] bg-ink text-paper text-xs font-extrabold uppercase tracking-[0.1em] border-2 border-ink hover:bg-paper hover:text-ink transition-colors">
            Add to Cart
          </button>

          {/* Quick info */}
          <div className="mt-10 pt-8 border-t border-subtle space-y-4 text-sm text-neutral-600">
            <p><strong className="text-ink font-bold">Shipping:</strong> Free delivery on orders over BDT 2000.</p>
            <p><strong className="text-ink font-bold">Returns:</strong> 7-day return window.</p>
          </div>

          {/* Reviews stub */}
          <div className="mt-8 pt-8 border-t border-subtle">
            <h3 className="font-display text-xl font-extrabold uppercase tracking-tight mb-4">Customer Reviews</h3>
            <div className="flex items-center gap-2 mb-3">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} strokeWidth={2} className={i < Math.round(product.ratings?.average || 0) ? "text-ink fill-ink" : "text-neutral-300 fill-neutral-300"} />
                ))}
              </div>
              <span className="text-sm font-bold">{product.ratings?.average?.toFixed(1) || "0.0"} ({product.ratings?.count || 0} reviews)</span>
            </div>
            <p className="text-sm text-neutral-500">Reviews loaded from `/api/reviews`. Full review submission requires authentication.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
