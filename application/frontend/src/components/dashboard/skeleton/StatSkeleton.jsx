export default function CardSkeleton({
  className = "",
}) {
  return (
    <div
      className={`animate-pulse rounded-3xl border border-gray-200 bg-white p-6 ${className}`}
    >
      <div className="h-6 w-40 rounded bg-gray-200"></div>

      <div className="mt-6 space-y-4">

        <div className="h-4 rounded bg-gray-200"></div>

        <div className="h-4 w-5/6 rounded bg-gray-200"></div>

        <div className="h-4 w-2/3 rounded bg-gray-200"></div>

      </div>
    </div>
  );
}