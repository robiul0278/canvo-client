"use client";
import { useState, useEffect } from "react";

export function AnnouncementBar() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
  }, []);

  const text = "FREE DELIVERY ABOVE BDT 2000 • EID COLLECTION OUT NOW";
  return (
    <div className="w-full bg-ink text-paper overflow-hidden py-2 text-xs uppercase tracking-widest font-body relative">
      <div className="whitespace-nowrap inline-block" style={reducedMotion ? undefined : { animation: "scroll-x 20s linear infinite" }}>
        <span className="inline-flex gap-4 mx-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="inline-flex items-center gap-4">
              <span>{text}</span>
              <span className="text-paper/40">★</span>
            </span>
          ))}
        </span>
      </div>
      <style jsx global>{`
        @keyframes scroll-x {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
