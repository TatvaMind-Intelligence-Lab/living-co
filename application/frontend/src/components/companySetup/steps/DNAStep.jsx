export default function DNAStep({
  companyData,
  setCompanyData,
  errors,
  setErrors,
}) {
  const decisionStyles = [
    "Founder decides everything",
    "Leadership Team",
    "Data Driven",
    "Consensus Based",
    "Experiment First",
  ];

  const companyValues = [
    "Innovation",
    "Speed",
    "Quality",
    "Transparency",
    "Customer First",
    "Ownership",
    "Integrity",
    "Learning",
    "Creativity",
    "Excellence",
  ];

  const toggleValue = (value) => {
    setCompanyData((prev) => ({
      ...prev,
      company_values: prev.company_values.includes(value)
        ? prev.company_values.filter((v) => v !== value)
        : [...prev.company_values, value],
    }));

    if (errors.company_values) {
      setErrors((prev) => ({
        ...prev,
        company_values: "",
      }));
    }
  };

  return (
    <div className="max-w-3xl">
      <h2 className="text-3xl font-bold text-gray-900">Company DNA</h2>

      <p className="mt-3 text-lg text-gray-600">
        Every company makes decisions differently. Help your AI Co-Founder
        understand how your organization thinks, collaborates, and operates.
      </p>

      <div className="mt-10 space-y-10">
        {/* Decision Style */}

        <div>
          <label className="block mb-4 text-sm font-semibold text-gray-800">
            How are important decisions usually made?
          </label>

          <div
            className={`space-y-4 rounded-2xl p-2 transition-all ${
              errors.decision_style ? "border border-red-300 bg-red-50" : ""
            }`}
          >
            {" "}
            {decisionStyles.map((style) => {
              const selected = companyData.decision_style === style;

              return (
                <label
                  key={style}
                  className={`cursor-pointer rounded-2xl border p-5 transition-all duration-200 hover:border-black hover:shadow-md ${
                    selected
                      ? "border-black bg-black text-white shadow-lg"
                      : "border-gray-300 bg-white"
                  }`}
                >
                  <input
                    type="radio"
                    name="decision_style"
                    value={style}
                    checked={selected}
                    onChange={(e) => {
                      setCompanyData((prev) => ({
                        ...prev,
                        decision_style: e.target.value,
                      }));

                      if (errors.decision_style) {
                        setErrors((prev) => ({
                          ...prev,
                          decision_style: "",
                        }));
                      }
                    }}
                    className="hidden"
                  />

                  <div className="flex items-center justify-between">
                    <span>{style}</span>

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
          {errors.decision_style && (
            <p className="mt-3 text-sm font-medium text-red-600">
              {errors.decision_style}
            </p>
          )}
        </div>

        {/* Company Values */}

        <div>
          <label className="block mb-4 text-sm font-semibold text-gray-800">
            Which values define your company culture?
          </label>

          <div
            className={`grid gap-4 rounded-2xl p-2 transition-all md:grid-cols-2 ${
              errors.company_values ? "border border-red-300 bg-red-50" : ""
            }`}
          >
            {companyValues.map((value) => {
              const selected = companyData.company_values.includes(value);

              return (
                <label
                  key={value}
                  className={`cursor-pointer rounded-2xl border p-5 transition-all duration-200 hover:border-black hover:shadow-md ${
                    selected
                      ? "border-black bg-black text-white shadow-lg"
                      : "border-gray-300 bg-white"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={selected}
                    onChange={() => toggleValue(value)}
                    className="hidden"
                  />

                  <div className="flex items-center justify-between">
                    <span>{value}</span>

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
          {errors.company_values && (
            <p className="mt-3 text-sm font-medium text-red-600">
              {errors.company_values}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
