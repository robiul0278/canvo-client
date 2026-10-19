"use client";

import Link from "next/link";
import { User, Package, MapPin, LogOut } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-12 md:py-20">
      <h1 className="font-display text-3xl md:text-5xl font-extrabold uppercase tracking-tight mb-10">Profile</h1>
      <div className="grid md:grid-cols-3 gap-8">
        <aside className="md:col-span-1 rounded-[10px] border-2 border-subtle p-6 space-y-2">
          <Link href="/profile" className="flex items-center gap-3 px-4 py-3 rounded-[8px] bg-ink text-paper text-sm font-bold"><User size={18} strokeWidth={2} /> Profile</Link>
          <Link href="/orders" className="flex items-center gap-3 px-4 py-3 rounded-[8px] hover:bg-neutral-100 text-sm font-medium"><Package size={18} strokeWidth={2} /> Orders</Link>
          <Link href="#" className="flex items-center gap-3 px-4 py-3 rounded-[8px] hover:bg-neutral-100 text-sm font-medium text-neutral-400"><MapPin size={18} strokeWidth={2} /> Addresses</Link>
          <Link href="#" className="flex items-center gap-3 px-4 py-3 rounded-[8px] hover:bg-red-50 text-sm font-medium text-red-600"><LogOut size={18} strokeWidth={2} /> Sign Out</Link>
        </aside>
        <main className="md:col-span-2 rounded-[10px] border-2 border-subtle p-8">
          <h2 className="font-display text-xl font-extrabold uppercase tracking-tight mb-4">Account Details</h2>
          <p className="text-sm text-neutral-500">This is a protected page stub. Full profile editing requires working NextAuth session integration with the backend <code>/auth/me</code> endpoint. See audit-report.md auth blocker notes.</p>
          <div className="mt-6 space-y-3 text-sm">
            <div className="flex justify-between border-b border-subtle py-2"><span className="text-neutral-500">Name</span><span className="font-bold">—</span></div>
            <div className="flex justify-between border-b border-subtle py-2"><span className="text-neutral-500">Email</span><span className="font-bold">—</span></div>
            <div className="flex justify-between border-b border-subtle py-2"><span className="text-neutral-500">Phone</span><span className="font-bold">—</span></div>
          </div>
        </main>
      </div>
    </div>
  );
}
