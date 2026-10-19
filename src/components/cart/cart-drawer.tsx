"use client";

import { X, ShoppingBag, Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import { useAppDispatch } from "@/store/store";
import { closeCart, removeItem, updateQuantity } from "@/store/cartSlice";

export function CartDrawer() {
  const { items, isOpen, total, count } = useCart();
  const dispatch = useAppDispatch();

  if (!isOpen) return null;

  const itemImage = (item: any) => item.image || (item.images && item.images[0] ? item.images[0].url : "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=200");
  const itemAlt = (item: any) => item.name || "Product";

  return (
    <div className="fixed inset-0 z-[70] bg-black/40 backdrop-blur-sm" onClick={() => dispatch(closeCart())}>
      <div className="absolute right-0 top-0 h-full w-full sm:w-[420px] bg-paper border-l-2 border-subtle shadow-2xl flex flex-col" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between px-6 py-5 border-b border-subtle">
          <h2 className="font-display text-xl font-extrabold uppercase tracking-tight flex items-center gap-3">
            <ShoppingBag size={22} strokeWidth={2.5} /> Cart <span className="text-sm font-medium text-neutral-500">({count})</span>
          </h2>
          <button onClick={() => dispatch(closeCart())} aria-label="Close cart" className="w-9 h-9 rounded-full border-2 border-subtle flex items-center justify-center hover:bg-ink hover:text-paper transition-colors">
            <X size={16} strokeWidth={2.5} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-16 text-neutral-400 text-sm font-medium">Your cart is empty.</div>
          ) : (
            items.map((item: any) => (
              <div key={item.id + JSON.stringify(item.variant)} className="flex gap-4 py-3 border-b border-subtle">
                <img src={itemImage(item)} alt={itemAlt(item)} className="w-20 h-24 rounded-[8px] object-cover shrink-0" />
                <div className="flex-1 min-w-0">
                  <h4 className="font-display text-sm font-extrabold uppercase tracking-tight truncate">{item.name}</h4>
                  <p className="text-xs text-neutral-500 mt-0.5">{item.variant ? item.variant.color + " / " + item.variant.size : "One size"}</p>
                  <div className="flex items-center gap-3 mt-3">
                    <button onClick={() => dispatch(updateQuantity({ id: item.id, quantity: Math.max(1, item.quantity - 1), variant: item.variant }))} className="w-7 h-7 rounded-full border-2 border-subtle flex items-center justify-center hover:bg-ink hover:text-paper transition-colors"><Minus size={12} strokeWidth={2.5} /></button>
                    <span className="text-xs font-bold w-4 text-center">{item.quantity}</span>
                    <button onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1, variant: item.variant }))} className="w-7 h-7 rounded-full border-2 border-subtle flex items-center justify-center hover:bg-ink hover:text-paper transition-colors"><Plus size={12} strokeWidth={2.5} /></button>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <p className="text-sm font-bold">BDT {(item.price * item.quantity).toLocaleString()}</p>
                  <button onClick={() => dispatch(removeItem({ id: item.id, variant: item.variant }))} aria-label="Remove" className="text-neutral-400 hover:text-red-600 transition-colors"><Trash2 size={14} strokeWidth={2} /></button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="border-t border-subtle px-6 py-6">
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs font-extrabold uppercase tracking-[0.1em]">Subtotal</span>
            <span className="text-xl font-extrabold">BDT {total.toLocaleString()}</span>
          </div>
          <a href="/checkout" className="block w-full text-center px-6 py-3.5 rounded-[6px] bg-ink text-paper text-xs font-extrabold uppercase tracking-[0.1em] border-2 border-ink hover:bg-paper hover:text-ink transition-colors">
            Proceed to Checkout
          </a>
          <button onClick={() => dispatch(closeCart())} className="w-full text-center mt-3 text-xs font-bold uppercase tracking-[0.08em] text-neutral-500 hover:text-ink transition-colors">Continue Shopping</button>
        </div>
      </div>
    </div>
  );
}
