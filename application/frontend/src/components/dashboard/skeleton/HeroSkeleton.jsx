import StatSkeleton from "./StatSkeleton";

export default function HeroSkeleton() {
  return (
    <div className="animate-pulse rounded-3xl border border-gray-200 bg-white p-8">

      <div className="h-8 w-52 rounded bg-gray-200"></div>

      <div className="mt-4 h-10 w-80 rounded bg-gray-200"></div>

      <div className="mt-6 h-4 w-full rounded bg-gray-200"></div>

      <div className="mt-3 h-4 w-5/6 rounded bg-gray-200"></div>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

        <StatSkeleton />
        <StatSkeleton />
        <StatSkeleton />
        <StatSkeleton />

      </div>

    </div>
  );
}