"use client";

import Link from "next/link";

export function StoreLocations() {
  // Stub: no real backend endpoint for store locations; using placeholder content clearly identified
  return (
    <section className="max-w-[1200px] mx-auto px-5 md:px-8 pb-12 md:pb-20">
      <h3 className="font-display text-xl md:text-2xl font-extrabold uppercase tracking-tight mb-6">Find a Store</h3>
      <div className="flex flex-wrap gap-3">
        {["Dhaka — Gulshan", "Dhaka — Dhanmondi", "Chittagong", "Sylhet"].map((store) => (
          <Link key={store} href="/" className="px-5 py-2.5 rounded-full border-2 border-ink bg-paper text-ink text-xs font-bold uppercase tracking-[0.08em] hover:bg-ink hover:text-paper transition-colors">
            {store}
          </Link>
        ))}
      </div>
      <p className="text-xs text-neutral-400 mt-3">Location data not configured. This is placeholder content.</p>
    </section>
  );
}
