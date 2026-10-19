"use client";

import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export function QuickViewDialog({ open, onClose, product }: { open: boolean; onClose: () => void; product?: any }) {
  if (!product) return null;
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="bg-paper max-w-lg w-full rounded-[10px] border-2 border-ink p-6 md:p-8 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={onClose} aria-label="Close" className="absolute top-4 right-4 w-9 h-9 rounded-full border-2 border-subtle flex items-center justify-center hover:bg-ink hover:text-paper transition-colors">
              <X size={16} strokeWidth={2.5} />
            </button>
            <h3 className="font-display text-xl font-extrabold uppercase tracking-tight mb-2 pr-8">{product.name}</h3>
            <p className="text-sm text-neutral-600 mb-4">{product.shortDescription || product.description}</p>
            <p className="text-lg font-bold mb-6">BDT {product.basePrice?.toLocaleString()}</p>
            <div className="flex gap-3">
              <a href={`/product/${product.slug}`} className="flex-1 text-center px-6 py-3 rounded-[6px] bg-ink text-paper text-xs font-extrabold uppercase tracking-[0.1em] border-2 border-ink hover:bg-paper hover:text-ink transition-colors">View Full</a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
