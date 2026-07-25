import ProgressBar from "./ProgressBar";
import {Link} from "react-router-dom";

export default function SetupLayout({
  children,
  step,
  totalSteps,
  onNext,
  onBack,
  loading = false,
}) {
  const isLastStep = step === totalSteps - 1;

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-4xl rounded-3xl border border-gray-100 bg-white p-12 shadow-xl">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900">
            The Living Company
          </h1>

          <p className="mt-3 max-w-2xl text-lg leading-relaxed text-gray-600">
            Teach your AI Co-Founder how your company thinks, works, and grows.
            This only takes a few minutes.
          </p>
        </div>

        {/* Progress */}
        <ProgressBar
          step={step}
          totalSteps={totalSteps}
        />

        {/* Content */}
        <div className="flex min-h-[420px] items-center">
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
              disabled={loading}
              className={`rounded-xl border px-6 py-3 transition-all duration-200 ${
                loading
                  ? "cursor-not-allowed border-gray-200 bg-gray-100 text-gray-400"
                  : "border-gray-300 text-gray-700 hover:bg-gray-100"
              }`}
            >
              ← Back
            </button>
          )}

          <Link
            onClick={onNext}
            disabled={loading}
            className={`flex min-w-[190px] items-center justify-center rounded-xl px-8 py-3 font-semibold shadow-sm transition-all duration-200 ${
              loading
                ? "cursor-not-allowed bg-gray-400 text-white"
                : "bg-black text-white hover:bg-gray-900"
            }`}
            to={isLastStep ? "/dashboard" : "#"}
          >
            {loading ? (
              <>
                <svg
                  className="mr-3 h-5 w-5 animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-20"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />

                  <path
                    className="opacity-90"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  />
                </svg>

                Creating Company...
              </>
            ) : isLastStep ? (
              "Create Company"
            ) : (
              "Continue →"
            )}
          </Link>

        </div>
      </div>
    </div>
  );
}