"use client";

import Link from "next/link";
import { Search, User, ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-paper/90 backdrop-blur-md border-b border-subtle">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-display text-[28px] font-extrabold tracking-tight leading-none uppercase text-ink">
          CANVO
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 bg-ink/95 rounded-full px-2 py-1.5">
          {["Shop", "New", "Collections", "About", "Stores"].map((label) => (
            <Link
              key={label}
              href="/"
              className="text-paper text-[11px] uppercase tracking-[0.08em] font-semibold px-4 py-1.5 rounded-full hover:bg-paper hover:text-ink transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <button aria-label="Search" className="w-10 h-10 rounded-full border border-subtle flex items-center justify-center hover:bg-ink hover:text-paper transition-colors">
            <Search size={18} strokeWidth={2} />
          </button>
          <Link href="/profile" aria-label="Account" className="w-10 h-10 rounded-full border border-subtle flex items-center justify-center hover:bg-ink hover:text-paper transition-colors">
            <User size={18} strokeWidth={2} />
          </Link>
          <Link href="/cart" aria-label="Cart" className="w-10 h-10 rounded-full border border-subtle flex items-center justify-center hover:bg-ink hover:text-paper transition-colors relative">
            <ShoppingBag size={18} strokeWidth={2} />
            <span className="absolute top-1 right-1 w-[10px] h-[10px] bg-ink text-paper text-[8px] font-bold rounded-full flex items-center justify-center">2</span>
          </Link>
          <button
            aria-label="Menu"
            className="md:hidden w-10 h-10 rounded-full border border-subtle flex items-center justify-center hover:bg-ink hover:text-paper transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={18} strokeWidth={2} /> : <Menu size={18} strokeWidth={2} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden absolute top-[72px] left-0 right-0 bg-paper border-b border-subtle shadow-xl px-6 py-6 flex flex-col gap-3">
          {["Shop", "New", "Collections", "About", "Stores"].map((label) => (
            <Link key={label} href="/" className="text-ink uppercase tracking-[0.08em] font-semibold text-sm py-2" onClick={() => setMobileOpen(false)}>
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
