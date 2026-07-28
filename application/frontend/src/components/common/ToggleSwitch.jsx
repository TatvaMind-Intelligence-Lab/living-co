export default function ToggleSwitch({
  label,
  description,
  checked,
  onChange,
}) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-gray-200 p-4">

      <div>

        <h4 className="font-medium text-gray-900">
          {label}
        </h4>

        {description && (
          <p className="mt-1 text-sm text-gray-500">
            {description}
          </p>
        )}

      </div>

      <button
        type="button"
        onClick={() => onChange(!checked)}
        className={`relative h-7 w-12 rounded-full transition-all ${
          checked ? "bg-black" : "bg-gray-300"
        }`}
      >
        <span
          className={`absolute top-1 h-5 w-5 rounded-full bg-white transition-all ${
            checked ? "left-6" : "left-1"
          }`}
        />
      </button>

    </div>
  );
}