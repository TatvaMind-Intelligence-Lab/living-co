export default function ProgressBar({
  label,
  value,
}) {
  return (
    <div className="space-y-2">

      <div className="flex justify-between">

        <span className="text-sm text-gray-600">
          {label}
        </span>

        <span className="text-sm font-medium">
          {value}%
        </span>

      </div>

      <div className="h-2 overflow-hidden rounded-full bg-gray-100">

        <div
          className="h-full rounded-full bg-black transition-all duration-700"
          style={{
            width: `${value}%`,
          }}
        />

      </div>

    </div>
  );
}