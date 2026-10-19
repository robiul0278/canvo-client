"use client";

import Link from "next/link";
import { useCart } from "@/hooks/use-cart";
import { useAppDispatch } from "@/store/store";
import { removeItem, updateQuantity } from "@/store/cartSlice";
import { Minus, Plus, Trash2, ArrowLeft } from "lucide-react";

export default function CartPage() {
  const { items, total } = useCart();
  const dispatch = useAppDispatch();

  if (items.length === 0) return (
    <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-20 text-center">
      <h2 className="font-display text-3xl md:text-5xl font-extrabold uppercase tracking-tight mb-4">Your Cart</h2>
      <p className="text-sm text-neutral-500">Your cart is empty.</p>
      <Link href="/shop" className="inline-block mt-6 px-6 py-3 rounded-full bg-ink text-paper text-xs font-extrabold uppercase tracking-[0.1em] border-2 border-ink hover:bg-paper hover:text-ink transition-colors">Continue Shopping</Link>
    </div>
  );

  return (
    <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-12 md:py-20">
      <Link href="/shop" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.08em] mb-8 hover:underline"><ArrowLeft size={16} strokeWidth={2.5} /> Back to Shop</Link>
      <h1 className="font-display text-3xl md:text-5xl font-extrabold uppercase tracking-tight mb-10">Your Cart</h1>
      <div className="space-y-6">
        {items.map((item: any) => (
          <div key={item.id + JSON.stringify(item.variant)} className="flex gap-6 py-6 border-b border-subtle">
            <img src={item.image || item.images?.[0]?.url || "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=200"} alt={item.name} className="w-24 h-28 md:w-28 md:h-36 rounded-[8px] object-cover shrink-0" />
            <div className="flex-1 min-w-0">
              <h3 className="font-display text-base font-extrabold uppercase tracking-tight">{item.name}</h3>
              <p className="text-xs text-neutral-500 mt-1">{item.variant ? item.variant.color + " / " + item.variant.size : "One size"}</p>
              <div className="flex items-center gap-3 mt-4">
                <button onClick={() => dispatch(updateQuantity({ id: item.id, quantity: Math.max(1, item.quantity - 1), variant: item.variant }))} className="w-8 h-8 rounded-full border-2 border-subtle flex items-center justify-center hover:bg-ink hover:text-paper transition-colors"><Minus size={12} strokeWidth={2.5} /></button>
                <span className="text-xs font-bold w-6 text-center">{item.quantity}</span>
                <button onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1, variant: item.variant }))} className="w-8 h-8 rounded-full border-2 border-subtle flex items-center justify-center hover:bg-ink hover:text-paper transition-colors"><Plus size={12} strokeWidth={2.5} /></button>
              </div>
            </div>
            <div className="text-right">
              <p className="text-base font-bold">BDT {(item.price * item.quantity).toLocaleString()}</p>
              <button onClick={() => dispatch(removeItem({ id: item.id, variant: item.variant }))} className="text-xs text-neutral-400 hover:text-red-600 mt-2 underline underline-offset-2">Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 pt-8 border-t border-subtle flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h3 className="font-display text-xl font-extrabold uppercase tracking-tight">Subtotal</h3>
          <p className="text-sm text-neutral-500">Shipping and taxes calculated at checkout.</p>
        </div>
        <a href="/checkout" className="w-full md:w-auto px-10 py-4 rounded-[6px] bg-ink text-paper text-xs font-extrabold uppercase tracking-[0.1em] border-2 border-ink hover:bg-paper hover:text-ink transition-colors text-center">Proceed to Checkout — BDT {total.toLocaleString()}</a>
      </div>
    </div>
  );
}
