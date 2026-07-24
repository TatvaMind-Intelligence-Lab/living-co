export default function ProgressBar({
  step,
  totalSteps,
}) {

  const progress =
    (step / (totalSteps - 1)) * 100;

  return (
    <div className="mb-8">

      <div className="flex justify-between text-sm mb-2">

        <span>
          Step {step + 1} of {totalSteps}
        </span>

        <span>
          {Math.round(progress)}%
        </span>

      </div>

      <div className="h-2 bg-gray-200 rounded-full">

        <div
          className="h-2 bg-black rounded-full transition-all duration-300"
          style={{
            width: `${progress}%`,
          }}
        />

      </div>

    </div>
  );
}