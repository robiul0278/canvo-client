"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { TrendingUp, ShoppingBag, Users, Package } from "lucide-react";

export default function AdminOverviewPage() {
  const chartData = [
    { month: "Jan", revenue: 4200 },
    { month: "Feb", revenue: 6300 },
    { month: "Mar", revenue: 8100 },
    { month: "Apr", revenue: 9500 },
    { month: "May", revenue: 7200 },
    { month: "Jun", revenue: 10300 },
  ];

  const stats = [
    { label: "Revenue", value: "BDT 46,500", change: "+12%", icon: TrendingUp },
    { label: "Orders", value: "128", change: "+8%", icon: ShoppingBag },
    { label: "Customers", value: "342", change: "+15%", icon: Users },
    { label: "Products", value: "14", change: "0%", icon: Package },
  ];

  return (
    <div>
      <h1 className="font-display text-3xl md:text-5xl font-extrabold uppercase tracking-tight mb-2">Dashboard</h1>
      <p className="text-sm text-neutral-500 uppercase tracking-[0.08em] font-medium mb-10">Overview of store performance.</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {stats.map((s) => (
          <div key={s.label} className="rounded-[10px] border-2 border-subtle p-6 bg-paper">
            <div className="flex items-center gap-2 text-neutral-500 text-xs font-extrabold uppercase tracking-[0.1em] mb-3"><s.icon size={16} strokeWidth={2.5} /> {s.label}</div>
            <div className="font-display text-2xl font-extrabold tracking-tight">{s.value}</div>
            <div className="text-xs font-medium text-green-600 mt-1">{s.change}</div>
          </div>
        ))}
      </div>

      <div className="rounded-[10px] border-2 border-subtle p-6 bg-paper">
        <h3 className="font-display text-lg font-extrabold uppercase tracking-tight mb-6">Revenue Over Time</h3>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <XAxis dataKey="month" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 12 }} axisLine={false} tickLine={false} tickFormatter={(v: number) => `BDT ${v}`} />
              <Tooltip />
              <Bar dataKey="revenue" fill="#0a0a0a" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
