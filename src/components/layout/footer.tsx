import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-ink text-paper mt-auto">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">
          <div>
            <h4 className="uppercase tracking-[0.08em] text-[11px] font-bold mb-5">Shop</h4>
            <ul className="flex flex-col gap-3 text-sm font-medium text-paper/80">
              {["Men", "Women", "Accessories", "New Arrivals", "Sale"].map((item) => (
                <li key={item}><Link href="/" className="hover:text-paper hover:underline underline-offset-4">{item}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="uppercase tracking-[0.08em] text-[11px] font-bold mb-5">Help</h4>
            <ul className="flex flex-col gap-3 text-sm font-medium text-paper/80">
              {["Shipping", "Returns", "Size Guide", "FAQ", "Contact"].map((item) => (
                <li key={item}><Link href="/" className="hover:text-paper hover:underline underline-offset-4">{item}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="uppercase tracking-[0.08em] text-[11px] font-bold mb-5">About</h4>
            <ul className="flex flex-col gap-3 text-sm font-medium text-paper/80">
              {["Our Story", "Sustainability", "Stores", "Careers", "Press"].map((item) => (
                <li key={item}><Link href="/" className="hover:text-paper hover:underline underline-offset-4">{item}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="uppercase tracking-[0.08em] text-[11px] font-bold mb-5">Social</h4>
            <ul className="flex flex-col gap-3 text-sm font-medium text-paper/80">
              {["Instagram", "TikTok", "Pinterest", "YouTube"].map((item) => (
                <li key={item}><Link href="/" className="hover:text-paper hover:underline underline-offset-4">{item}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-paper/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-paper/50">© 2026 CANVO. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-paper/50">
            <Link href="/" className="hover:text-paper">Privacy</Link>
            <Link href="/" className="hover:text-paper">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
