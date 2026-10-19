"use client";

import { use } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function OrderDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  return (
    <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-12 md:py-20">
      <Link href="/orders" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.08em] mb-8 hover:underline"><ArrowLeft size={16} strokeWidth={2.5} /> Back to Orders</Link>
      <h1 className="font-display text-3xl md:text-5xl font-extrabold uppercase tracking-tight mb-4">Order #{id}</h1>
      <p className="text-sm text-neutral-500 mb-8">This is a protected route stub. Full order detail requires working auth session and backend <code>/orders</code> endpoint.</p>
      <div className="rounded-[10px] border-2 border-subtle p-8 space-y-3 text-sm">
        <div className="flex justify-between"><span className="text-neutral-500">Status</span><span className="font-bold">Pending</span></div>
        <div className="flex justify-between"><span className="text-neutral-500">Total</span><span className="font-bold">BDT 0</span></div>
        <div className="flex justify-between"><span className="text-neutral-500">Payment</span><span className="font-bold">Not confirmed (stub)</span></div>
      </div>
    </div>
  );
}
