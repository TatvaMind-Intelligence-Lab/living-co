import { ArrowUpRight } from "lucide-react";

export default function ActivityItem({
  icon: Icon,
  title,
  description,
  time,
  color = "bg-gray-100",
}) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-gray-200 p-4 transition-all duration-300 hover:border-black hover:shadow-md">

      <div className={`${color} rounded-xl p-3 flex-shrink-0`}>
        <Icon className="h-5 w-5 text-gray-700" />
      </div>

      <div className="flex-1">

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

          <div>

            <h3 className="font-semibold text-gray-900">
              {title}
            </h3>

            <p className="mt-1 text-sm leading-6 text-gray-500">
              {description}
            </p>

          </div>

          <div className="flex items-center gap-2 text-sm text-gray-400">

            <span>{time}</span>

            <ArrowUpRight className="h-4 w-4" />

          </div>

        </div>

      </div>

    </div>
  );
}