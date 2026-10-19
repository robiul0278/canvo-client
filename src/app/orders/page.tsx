"use client";

import Link from "next/link";
import { Package } from "lucide-react";

export default function OrdersPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-12 md:py-20">
      <h1 className="font-display text-3xl md:text-5xl font-extrabold uppercase tracking-tight mb-10">Orders</h1>
      <div className="rounded-[10px] border-2 border-subtle p-10 text-center">
        <Package size={40} strokeWidth={1.5} className="mx-auto text-neutral-300 mb-4" />
        <h3 className="font-display text-xl font-extrabold uppercase tracking-tight mb-2">No orders yet</h3>
        <p className="text-sm text-neutral-500">Once you place orders, they will appear here.</p>
        <Link href="/shop" className="inline-block mt-6 px-6 py-3 rounded-full bg-ink text-paper text-xs font-extrabold uppercase tracking-[0.1em] border-2 border-ink hover:bg-paper hover:text-ink transition-colors">Browse Products</Link>
      </div>
    </div>
  );
}
