"use client";

export function FilterSidebar() {
  return (
    <aside className="hidden md:block w-[240px] shrink-0">
      <div className="sticky top-28 space-y-6">
        <div className="rounded-[10px] border-2 border-subtle p-5">
          <h4 className="text-xs font-extrabold uppercase tracking-[0.1em] mb-4">Category</h4>
          <ul className="space-y-2.5 text-sm font-medium text-neutral-600">
            {["All", "Footwear", "Panjabi", "Shirt", "T-Shirt", "Pant", "Bag", "Accessories"].map((cat) => (
              <li key={cat}>
                <a href={`/shop?category=${cat.toLowerCase()}`} className="hover:text-ink hover:underline underline-offset-4">{cat}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-[10px] border-2 border-subtle p-5">
          <h4 className="text-xs font-extrabold uppercase tracking-[0.1em] mb-4">Price</h4>
          <ul className="space-y-2.5 text-sm font-medium text-neutral-600">
            <li><a href="/shop" className="hover:text-ink hover:underline underline-offset-4">Under BDT 1000</a></li>
            <li><a href="/shop" className="hover:text-ink hover:underline underline-offset-4">BDT 1000 - 2000</a></li>
            <li><a href="/shop" className="hover:text-ink hover:underline underline-offset-4">Over BDT 2000</a></li>
          </ul>
        </div>
      </div>
    </aside>
  );
}
