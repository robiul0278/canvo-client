"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Package, ListOrdered, User, Percent, MessageSquare, Settings } from "lucide-react";

export function AdminSidebar() {
  const pathname = usePathname();
  const links = [
    { label: "Overview", href: "/admin", icon: LayoutDashboard },
    { label: "Products", href: "/admin/products", icon: Package },
    { label: "Orders", href: "/admin/orders", icon: ListOrdered },
    { label: "Categories", href: "/admin/categories", icon: User },
    { label: "Discounts", href: "/admin/discounts", icon: Percent },
    { label: "Reviews", href: "/admin/reviews", icon: MessageSquare },
  ];

  return (
    <aside className="w-[240px] shrink-0 sticky top-28 self-start rounded-[10px] border-2 border-subtle p-4 bg-neutral-50">
      <h3 className="font-display text-sm font-extrabold uppercase tracking-tight mb-4">Admin</h3>
      <nav className="flex flex-col gap-1">
        {links.map((link) => {
          const active = pathname === link.href || pathname?.startsWith(link.href + "/");
          return (
            <Link key={link.href} href={link.href} className={`flex items-center gap-3 px-3 py-2.5 rounded-[8px] text-xs font-bold uppercase tracking-[0.06em] transition-colors ${active ? "bg-ink text-paper" : "text-neutral-700 hover:bg-neutral-200"}`}>
              <link.icon size={16} strokeWidth={2} /> {link.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
