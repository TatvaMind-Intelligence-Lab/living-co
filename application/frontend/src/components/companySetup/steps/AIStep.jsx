export default function AIStep({
  companyData,
  setCompanyData,
  errors,
  setErrors,
}) {
  return (
    <div className="max-w-3xl">
      <h2 className="text-3xl font-bold text-gray-900">Your AI Co-Founder</h2>

      <p className="mt-3 text-lg text-gray-600">
        Finally, tell your AI Co-Founder how you'd like it to work with you, how
        proactive it should be, and where it should draw the line.
      </p>

      <div className="mt-10 space-y-10">
        {/* AI Expectations */}

        <div>
          <label className="block mb-2 text-sm font-semibold text-gray-800">
            What do you expect from your AI Co-Founder?
          </label>

          <textarea
            rows={5}
            value={companyData.ai_expectations}
            placeholder="Example: I want my AI Co-Founder to challenge my decisions, identify opportunities, and proactively suggest improvements."
            onChange={(e) => {
              setCompanyData((prev) => ({
                ...prev,
                ai_expectations: e.target.value,
              }));

              if (errors.ai_expectations) {
                setErrors((prev) => ({
                  ...prev,
                  ai_expectations: "",
                }));
              }
            }}
            className={`w-full resize-none rounded-xl bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 shadow-sm outline-none transition-all duration-200 ${
              errors.ai_expectations
                ? "border border-red-500 focus:ring-4 focus:ring-red-100"
                : "border border-gray-300 focus:border-black focus:ring-4 focus:ring-gray-200"
            }`}
          />
          {errors.ai_expectations && (
            <p className="mt-2 text-sm font-medium text-red-600">
              {errors.ai_expectations}
            </p>
          )}

          <p className="mt-2 text-sm text-gray-400">
            Describe how you'd like your AI to contribute to your business.
          </p>
        </div>

        {/* Slider */}

        <div>
          <label className="block mb-4 text-sm font-semibold text-gray-800">
            How proactive should your AI Co-Founder be?
          </label>

          <div className="rounded-2xl border border-gray-300 bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-center justify-between">
              <span className="text-sm font-medium text-gray-500">
                Reactive
              </span>

              <span className="rounded-full bg-black px-4 py-1 text-sm font-semibold text-white shadow">
                {companyData.proactivity_level}/10
              </span>

              <span className="text-sm font-medium text-gray-500">
                Highly Proactive
              </span>
            </div>

            <input
              type="range"
              min="1"
              max="10"
              value={companyData.proactivity_level}
              onChange={(e) =>
                setCompanyData((prev) => ({
                  ...prev,
                  proactivity_level: Number(e.target.value),
                }))
              }
              className="w-full cursor-pointer accent-black"
            />
            <p className="mt-4 text-center text-sm text-gray-500">
              {companyData.proactivity_level <= 3 &&
                "Your AI will wait for instructions before taking action."}

              {companyData.proactivity_level > 3 &&
                companyData.proactivity_level <= 7 &&
                "Your AI will proactively suggest ideas while keeping you in control."}

              {companyData.proactivity_level > 7 &&
                "Your AI will actively monitor your business and surface opportunities automatically."}
            </p>
          </div>
        </div>

        {/* Boundaries */}

        <div>
          <label className="block mb-2 text-sm font-semibold text-gray-800">
            Are there any boundaries your AI should never cross?
          </label>

          <textarea
            rows={5}
            value={companyData.ai_boundaries}
            onChange={(e) =>
              setCompanyData((prev) => ({
                ...prev,
                ai_boundaries: e.target.value,
              }))
            }
            placeholder={`Example:
• Never send emails without my approval.
• Never make financial decisions automatically.
• Never delete company data.`}
            className="w-full resize-none rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 shadow-sm transition-all duration-200 focus:border-black focus:ring-4 focus:ring-gray-200 outline-none"
          />

          <p className="mt-2 text-sm text-gray-400">
            These rules help your AI respect your preferences while keeping you
            in control.
          </p>
        </div>
      </div>
    </div>
  );
}
