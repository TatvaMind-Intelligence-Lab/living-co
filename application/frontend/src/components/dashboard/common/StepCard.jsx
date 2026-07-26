import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function StepCard({
  icon: Icon,
  title,
  description,
  priority = "Medium",
  completed = false,
  action = "Start",
  onClick,
}) {
  const priorityColors = {
    High: "bg-red-100 text-red-700",
    Medium: "bg-amber-100 text-amber-700",
    Low: "bg-blue-100 text-blue-700",
    Optional: "bg-gray-100 text-gray-700",
  };

  return (
    <div
      className={`rounded-2xl border p-5 transition-all duration-300 ${
        completed
          ? "border-green-200 bg-green-50"
          : "border-gray-200 bg-white hover:border-black hover:shadow-md"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        {/* Left Side */}
        <div className="flex flex-1 gap-4">
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-xl ${
              completed ? "bg-green-100" : "bg-gray-100"
            }`}
          >
            {completed ? (
              <CheckCircle2 className="h-6 w-6 text-green-600" />
            ) : (
              <Icon className="h-6 w-6 text-gray-700" />
            )}
          </div>

          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="font-semibold text-gray-900">{title}</h3>

              {!completed && (
                <span
                  className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                    priorityColors[priority]
                  }`}
                >
                  {priority}
                </span>
              )}
            </div>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              {description}
            </p>
          </div>
        </div>

        {/* Right Side */}

        {completed ? (
          <span className="rounded-full bg-green-600 px-3 py-1 text-xs font-medium text-white">
            Completed
          </span>
        ) : (
          <button
            onClick={onClick}
            className="flex items-center gap-2 rounded-xl border border-gray-200 px-4 py-2 text-sm font-medium transition hover:border-black hover:bg-black hover:text-white"
          >
            {action}
            <ArrowRight className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
}
