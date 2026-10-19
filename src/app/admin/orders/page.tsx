"use client";

export default function AdminOrdersPage() {
  return (
    <div>
      <h2 className="font-display text-2xl md:text-3xl font-extrabold uppercase tracking-tight mb-4">Orders</h2>
      <p className="text-sm text-neutral-500">Order management interface. Use GET /orders, PATCH /orders/:id/status. Note: do not allow payment status changes through order status form unless backend explicitly supports it.</p>
      <div className="mt-6 p-4 rounded-[10px] border-2 border-subtle bg-paper text-xs text-neutral-400">Stub</div>
    </div>
  );
}
