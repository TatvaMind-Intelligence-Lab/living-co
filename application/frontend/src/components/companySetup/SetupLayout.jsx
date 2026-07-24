import ProgressBar from "./ProgressBar";

export default function SetupLayout({
  children,
  step,
  totalSteps,
  onNext,
  onBack,
}) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-xl border border-gray-100 p-12">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900">
            The Living Company
          </h1>

          <p className="mt-3 text-gray-600 text-lg leading-relaxed max-w-2xl">
            Teach your AI Co-Founder how your company thinks, works,
            and grows. This only takes a few minutes.
          </p>
        </div>

        {/* Progress */}
        <ProgressBar
          step={step}
          totalSteps={totalSteps}
        />

        {/* Content */}
        <div className="min-h-[420px] flex items-center">
          <div className="w-full">
            {children}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-gray-100 pt-8">

          {step === 0 ? (
            <div />
          ) : (
            <button
              onClick={onBack}
              className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 transition-all duration-200"
            >
              ← Back
            </button>
          )}

          <button
            onClick={onNext}
            className="px-8 py-3 rounded-xl bg-black text-white hover:bg-gray-900 transition-all duration-200 shadow-sm"
          >
            {step === totalSteps - 1
              ? "Create Company"
              : "Continue →"}
          </button>

        </div>

      </div>
    </div>
  );
}