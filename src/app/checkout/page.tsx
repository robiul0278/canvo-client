"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useCart } from "@/hooks/use-cart";
import Link from "next/link";

const schema = z.object({
  name: z.string().min(1, "Name is required."),
  email: z.string().email("Invalid email."),
  phone: z.string().min(5, "Phone is required."),
  address: z.string().min(5, "Address is required."),
  coupon: z.string().optional(),
});

type CheckoutForm = z.infer<typeof schema>;

export default function CheckoutPage() {
  const { items, total } = useCart();
  const { register, handleSubmit, formState: { errors } } = useForm<CheckoutForm>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: CheckoutForm) => {
    console.log("Checkout submitted:", data);
    alert("Order submitted (stub). Check server .env for real SSLCommerz keys.");
  };

  if (items.length === 0) return (
    <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-20 text-center">
      <h2 className="font-display text-3xl md:text-5xl font-extrabold uppercase tracking-tight mb-4">Checkout</h2>
      <p className="text-sm text-neutral-500 mb-8">Your cart is empty. Add items before checkout.</p>
      <Link href="/shop" className="px-8 py-3 rounded-full bg-ink text-paper text-xs font-extrabold uppercase tracking-[0.1em] border-2 border-ink hover:bg-paper hover:text-ink transition-colors">Back to Shop</Link>
    </div>
  );

  return (
    <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-12 md:py-20">
      <h1 className="font-display text-3xl md:text-5xl font-extrabold uppercase tracking-tight mb-10">Checkout</h1>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        <form onSubmit={handleSubmit(onSubmit)} className="md:col-span-2 space-y-6">
          <div className="rounded-[10px] border-2 border-subtle p-6 space-y-4">
            <h3 className="font-display text-lg font-extrabold uppercase tracking-tight">Contact & Shipping</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <input {...register("name")} placeholder="Full name" className="w-full px-4 py-3 rounded-[8px] border-2 border-subtle text-sm focus:outline-none focus:border-ink" />
              <input {...register("email")} placeholder="Email address" className="w-full px-4 py-3 rounded-[8px] border-2 border-subtle text-sm focus:outline-none focus:border-ink" />
            </div>
            <input {...register("phone")} placeholder="Phone number" className="w-full px-4 py-3 rounded-[8px] border-2 border-subtle text-sm focus:outline-none focus:border-ink" />
            <textarea {...register("address")} placeholder="Shipping address" rows={3} className="w-full px-4 py-3 rounded-[8px] border-2 border-subtle text-sm focus:outline-none focus:border-ink resize-none" />
            <input {...register("coupon")} placeholder="Coupon code (optional)" className="w-full px-4 py-3 rounded-[8px] border-2 border-subtle text-sm focus:outline-none focus:border-ink" />
          </div>
          <div className="rounded-[10px] border-2 border-subtle p-6">
            <h3 className="font-display text-lg font-extrabold uppercase tracking-tight mb-4">Order Summary</h3>
            <div className="space-y-3 mb-6">
              {items.map((item: any) => (
                <div key={item.id + JSON.stringify(item.variant)} className="flex justify-between text-sm">
                  <span>{item.name} x{item.quantity}</span>
                  <span className="font-bold">BDT {(item.price * item.quantity).toLocaleString()}</span>
                </div>
              ))}
              <div className="border-t border-subtle pt-3 flex justify-between text-base font-extrabold">Total <span>BDT {total.toLocaleString()}</span></div>
            </div>
            <button type="submit" className="w-full px-6 py-4 rounded-[6px] bg-ink text-paper text-xs font-extrabold uppercase tracking-[0.1em] border-2 border-ink hover:bg-paper hover:text-ink transition-colors">Place Order (Stub)</button>
            <p className="text-[10px] text-neutral-400 mt-3">Note: Real SSLCommerz integration requires backend sandbox credentials. See `audit-report.md`.</p>
          </div>
        </form>

        <aside className="md:col-span-1">
          <div className="sticky top-28 rounded-[10px] border-2 border-subtle p-6 bg-neutral-50">
            <h4 className="font-display text-base font-extrabold uppercase tracking-tight mb-5">Cart Items</h4>
            {items.map((item: any) => {
              const itemImage = item.image || (item.images && item.images[0] ? item.images[0].url : "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=200");
              const itemName = item.name || "Product";
              return (
                <div key={item.id + JSON.stringify(item.variant)} className="flex gap-3 mb-4 pb-4 border-b border-subtle last:border-0 last:pb-0 last:mb-0">
                  <img src={itemImage} alt={itemName} className="w-14 h-16 rounded-[6px] object-cover shrink-0" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-tight">{itemName}</p>
                    <p className="text-[10px] text-neutral-500">Qty: {item.quantity}</p>
                  </div>
                  <p className="ml-auto text-xs font-bold">BDT {(item.price * item.quantity).toLocaleString()}</p>
                </div>
              );
            })}
          </div>
        </aside>
      </div>
    </div>
  );
}
