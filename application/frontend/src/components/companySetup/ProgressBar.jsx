export default function ProgressBar({
  step,
  totalSteps,
}) {
  const progress =
    ((step + 1) / totalSteps) * 100;

  return (
    <div className="mb-12">

      <div className="flex items-center justify-between mb-3">

        <div>
          <p className="text-sm font-medium text-gray-500">
            Step {step + 1} of {totalSteps}
          </p>
        </div>

      </div>

      <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">

        <div
          className="h-full rounded-full bg-black transition-all duration-500 ease-in-out"
          style={{
            width: `${progress}%`,
          }}
        />

      </div>

    </div>
  );
}