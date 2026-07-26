import { ArrowUpRight } from "lucide-react";

export default function StatCard({
  icon: Icon,
  title,
  value,
  color = "bg-gray-100",
}) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

      <div className="flex items-center justify-between">

        <div className={`${color} rounded-xl p-2`}>
          <Icon className="h-5 w-5 text-gray-700" />
        </div>

        <ArrowUpRight className="h-4 w-4 text-gray-400" />

      </div>

      <h3 className="mt-5 text-3xl font-bold text-gray-900">
        {value}
      </h3>

      <p className="mt-1 text-sm text-gray-500">
        {title}
      </p>

    </div>
  );
}