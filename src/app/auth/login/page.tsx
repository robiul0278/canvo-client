"use client";

import Link from "next/link";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-paper">
      <div className="max-w-md w-full px-8 py-14 rounded-[10px] border-2 border-subtle text-center">
        <h1 className="font-display text-4xl md:text-5xl font-extrabold uppercase tracking-tight mb-2">CANVO</h1>
        <p className="text-sm text-neutral-500 mb-10">Sign in to access your profile, orders, and more.</p>
        <button
          onClick={() => signIn("google", { callbackUrl: "/profile" })}
          className="w-full px-8 py-4 rounded-[6px] bg-ink text-paper text-sm font-extrabold uppercase tracking-[0.1em] border-2 border-ink hover:bg-paper hover:text-ink transition-colors"
        >
          Continue with Google
        </button>
        <div className="mt-8 p-4 rounded-[8px] bg-neutral-50 border border-subtle text-left">
          <h4 className="text-xs font-extrabold uppercase tracking-[0.1em] mb-2">Auth Integration Note</h4>
          <p className="text-[11px] text-neutral-500 leading-relaxed">Google login requires <code>GOOGLE_CLIENT_ID</code> and <code>GOOGLE_CLIENT_SECRET</code> in <code>.env.local</code>. The backend <code>/auth/sync</code> endpoint requires a defined session exchange contract (see audit-report.md blocker). Without these, the login is a stub.</p>
        </div>
      </div>
    </div>
  );
}
