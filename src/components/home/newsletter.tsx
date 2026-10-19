"use client";

import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";

const schema = z.object({ email: z.string().email("Please enter a valid email.") });

type FormData = z.infer<typeof schema>;

export function Newsletter() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setStatus("idle");
    try {
      // Stub: no backend endpoint for newsletter subscriptions
      await new Promise((res) => setTimeout(res, 600));
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="max-w-[1200px] mx-auto px-5 md:px-8 py-12 md:py-20">
      <div className="bg-ink rounded-[10px] border-2 border-ink p-8 md:p-14 relative overflow-hidden canvo-pattern">
        <div className="relative z-10 max-w-xl">
          <h2 className="font-display text-3xl md:text-5xl font-extrabold uppercase tracking-tight text-paper mb-4">Stay in the loop</h2>
          <p className="text-sm md:text-base text-paper/70 mb-8">Subscribe for exclusive drops, early access, and premium fashion updates.</p>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-3">
            <input
              {...register("email")}
              type="email"
              placeholder="Your email address"
              className="flex-1 px-5 py-3.5 rounded-full bg-paper text-ink text-sm font-medium border-2 border-paper focus:outline-none focus:border-paper/60 placeholder:text-neutral-400"
            />
            <button type="submit" className="px-6 py-3.5 rounded-full bg-paper text-ink text-xs font-extrabold uppercase tracking-[0.1em] border-2 border-paper hover:bg-ink hover:text-paper transition-colors flex items-center justify-center gap-2">
              Subscribe <Send size={14} strokeWidth={2.5} />
            </button>
          </form>
          {errors.email && <p className="text-red-300 text-xs mt-3">{errors.email.message}</p>}
          {status === "success" && <p className="text-green-300 text-xs mt-3">Subscribed! Check your inbox for confirmation.</p>}
          {status === "error" && <p className="text-red-300 text-xs mt-3">Something went wrong. Please try again.</p>}
        </div>
      </div>
    </section>
  );
}
