"use client";

export default function AdminProductsPage() {
  return (
    <div>
      <h2 className="font-display text-2xl md:text-3xl font-extrabold uppercase tracking-tight mb-4">Products</h2>
      <p className="text-sm text-neutral-500">Product management interface. Create, edit, delete, and manage images using backend endpoints: POST /products, PATCH /products/:id, DELETE /products/:id, POST /products/:id/images.</p>
      <div className="mt-6 p-4 rounded-[10px] border-2 border-subtle bg-paper text-xs text-neutral-400">Stub — full product management requires auth contract confirmation and image upload setup.</div>
    </div>
  );
}
