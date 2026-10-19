export function LoadingSkeleton() {
  return (
    <div className="w-full animate-pulse space-y-4">
      <div className="h-8 bg-neutral-200 rounded-md w-[60%]" />
      <div className="h-4 bg-neutral-100 rounded-md w-[80%]" />
      <div className="h-64 bg-neutral-100 rounded-xl" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-48 bg-neutral-100 rounded-xl" />
        ))}
      </div>
    </div>
  );
}
