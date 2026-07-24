export default function GoalsStep({
  companyData,
  setCompanyData,
  errors,
  setErrors,
}) {
  const challenges = [
    "Sales",
    "Marketing",
    "Hiring",
    "Customer Support",
    "Operations",
    "Finance",
    "Product",
    "Compliance",
    "Fundraising",
    "Strategy",
  ];

  const toggleChallenge = (challenge) => {
    setCompanyData((prev) => ({
      ...prev,
      challenges: prev.challenges.includes(challenge)
        ? prev.challenges.filter((c) => c !== challenge)
        : [...prev.challenges, challenge],
    }));

    if (errors.challenges) {
      setErrors((prev) => ({
        ...prev,
        challenges: "",
      }));
    }
  };

  return (
    <div className="max-w-3xl">
      <h2 className="text-3xl font-bold text-gray-900">Goals & Challenges</h2>

      <p className="mt-3 text-lg text-gray-600">
        Tell your AI Co-Founder what success looks like and where you need the
        most support.
      </p>

      <div className="mt-10 space-y-10">
        {/* Annual Goal */}

        <div>
          <label className="block mb-2 text-sm font-semibold text-gray-800">
            What's your biggest goal for the next 12 months?
          </label>

          <textarea
            rows={5}
            value={companyData.annual_goal}
            placeholder="Example: Reach ₹10 Crore ARR while expanding into Southeast Asia."
            onChange={(e) => {
              setCompanyData((prev) => ({
                ...prev,
                annual_goal: e.target.value,
              }));

              if (errors.annual_goal) {
                setErrors((prev) => ({
                  ...prev,
                  annual_goal: "",
                }));
              }
            }}
            className={`w-full resize-none rounded-xl bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 shadow-sm outline-none transition-all duration-200 ${
              errors.annual_goal
                ? "border border-red-500 focus:ring-4 focus:ring-red-100"
                : "border border-gray-300 focus:border-black focus:ring-4 focus:ring-gray-200"
            }`}
          />
          {errors.annual_goal && (
            <p className="mt-2 text-sm font-medium text-red-600">
              {errors.annual_goal}
            </p>
          )}

          <p className="mt-2 text-sm text-gray-400">
            Describe your biggest business objective.
          </p>
        </div>

        {/* Challenges */}

        <div>
          <label className="block mb-4 text-sm font-semibold text-gray-800">
            What challenges are slowing your growth?
          </label>

          <div
            className={`grid gap-4 rounded-2xl p-2 transition-all md:grid-cols-2 ${
              errors.challenges ? "border border-red-300 bg-red-50" : ""
            }`}
          >
            {challenges.map((challenge) => {
              const selected = companyData.challenges.includes(challenge);

              return (
                <label
                  key={challenge}
                  className={`cursor-pointer rounded-2xl border p-5 transition-all duration-200 hover:border-black hover:shadow-md ${
                    selected
                      ? "border-black bg-black text-white shadow-lg"
                      : "border-gray-300 bg-white"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={selected}
                    onChange={() => toggleChallenge(challenge)}
                    className="hidden"
                  />

                  <div className="flex items-center justify-between">
                    <span>{challenge}</span>

                    {selected && (
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-black">
                        ✓
                      </div>
                    )}
                  </div>
                </label>
              );
            })}
          </div>
          {errors.challenges && (
            <p className="mt-3 text-sm font-medium text-red-600">
              {errors.challenges}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
