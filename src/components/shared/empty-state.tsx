import { Search } from "lucide-react";

export function EmptyState({
  title = "Nothing here yet",
  description = "Check back soon for new products and updates.",
  action,
}: {
  title?: string;
  description?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="w-16 h-16 rounded-full bg-neutral-100 flex items-center justify-center mb-6">
        <Search size={28} strokeWidth={1.5} className="text-neutral-400" />
      </div>
      <h3 className="text-lg font-bold uppercase tracking-wide mb-2">{title}</h3>
      <p className="text-sm text-neutral-500 max-w-md">{description}</p>
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}
