import ProgressBar from "./ProgressBar";

export default function SetupLayout({
  children,
  step,
  totalSteps,
  onNext,
  onBack,
}) {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center p-8">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-3xl p-10">

        <h1 className="text-3xl font-bold mb-2">
          The Living Company
        </h1>

        <p className="text-gray-500 mb-8">
          Let's build your AI Co-Founder.
        </p>

        <ProgressBar
          step={step}
          totalSteps={totalSteps}
        />

        <div className="py-12">
          {children}
        </div>

        <div className="flex justify-between">

          {step === 0 ? (
            <div />
          ) : (
            <button
              onClick={onBack}
              className="px-5 py-2 rounded-lg border"
            >
              Back
            </button>
          )}

          <button
            onClick={onNext}
            className="bg-black text-white px-6 py-2 rounded-lg"
          >
            {step === totalSteps - 1
              ? "Create Company"
              : "Continue"}
          </button>

        </div>

      </div>
    </div>
  );
}