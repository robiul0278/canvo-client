import Link from "next/link";

export function ProductCard({ item }: { item: any }) {
  const imageUrl = item.images && item.images[0] ? item.images[0].url : "https://images.unsplash.com/photo-1509631179647-0177331693ae";
  const altText = item.name || "Product";
  const priceText = item.basePrice ? item.basePrice.toLocaleString() : "N/A";

  return (
    <Link href={"/product/" + item.slug} className="group block">
      <div className="aspect-[3/4] rounded-[10px] overflow-hidden border-2 border-subtle bg-neutral-50">
        <img src={imageUrl} alt={altText} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
      </div>
      <div className="mt-4">
        <h3 className="font-display text-sm md:text-base font-extrabold uppercase tracking-tight leading-tight group-hover:underline underline-offset-4">{item.name}</h3>
        <p className="text-sm font-bold mt-1">BDT {priceText}</p>
      </div>
    </Link>
  );
}
