import HeroSkeleton from "./HeroSkeleton";
import CardSkeleton from "./CardSkeleton";

export default function DashboardSkeleton() {
  return (
    <div className="space-y-6">

      <HeroSkeleton />

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">

        <div className="xl:col-span-2">
          <CardSkeleton className="h-[520px]" />
        </div>

        <CardSkeleton className="h-[520px]" />

      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

        <CardSkeleton className="h-[420px]" />
        <CardSkeleton className="h-[420px]" />

      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

        <div className="lg:col-span-2">
          <CardSkeleton className="h-[500px]" />
        </div>

        <CardSkeleton className="h-[500px]" />

      </div>

    </div>
  );
}