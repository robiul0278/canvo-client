import { AlertCircle } from "lucide-react";

export function ErrorState({
  title = "Something went wrong",
  description = "We couldn't load this content. Please try again.",
  onRetry,
}: {
  title?: string;
  description?: string;
  onRetry?: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="w-16 h-16 rounded-full bg-red-50 text-red-600 flex items-center justify-center mb-6">
        <AlertCircle size={28} strokeWidth={1.5} />
      </div>
      <h3 className="text-lg font-bold uppercase tracking-wide mb-2">{title}</h3>
      <p className="text-sm text-neutral-500 max-w-md">{description}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-6 px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wide border-2 border-ink hover:bg-ink hover:text-paper transition-colors"
        >
          Retry
        </button>
      )}
    </div>
  );
}
