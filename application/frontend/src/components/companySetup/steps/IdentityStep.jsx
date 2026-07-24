export default function IdentityStep({
  companyData,
  setCompanyData,
  errors,
  setErrors,
}) {
  const companySizes = [
    "Solo Founder",
    "2 – 10 Employees",
    "11 – 50 Employees",
    "51 – 200 Employees",
    "200+ Employees",
  ];

  const industries = [
    "Technology",
    "Healthcare",
    "Finance",
    "Education",
    "Retail",
    "Manufacturing",
    "Consulting",
    "Marketing",
    "Legal",
    "Real Estate",
    "Hospitality",
    "Media",
    "Logistics",
    "Agriculture",
    "Construction",
    "Government",
    "Non-Profit",
    "Other",
  ];

  const updateField = (field, value) => {
    setCompanyData((prev) => ({
      ...prev,
      [field]: value,
    }));

    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  return (
    <div className="max-w-3xl">
      <h2 className="text-3xl font-bold text-gray-900">Company Identity</h2>

      <p className="mt-3 text-lg text-gray-600">
        Let's start with the basics. Tell your AI Co-Founder who you are and
        what your company does.
      </p>

      <div className="mt-10 space-y-8">
        {/* Company Name */}

        <div>
          <label className="block mb-2 text-sm font-semibold text-gray-800">
            Company Name
          </label>

          <input
            type="text"
            placeholder="Acme Technologies Pvt. Ltd."
            value={companyData.name}
            onChange={(e) => updateField("name", e.target.value)}
            className={`w-full rounded-xl px-4 py-3 outline-none transition-all duration-200 ${
              errors.name
                ? "border border-red-500 focus:ring-4 focus:ring-red-100"
                : "border border-gray-300 focus:border-black focus:ring-4 focus:ring-gray-200"
            }`}
          />

          {errors.name && (
            <p className="mt-2 text-sm font-medium text-red-600">
              {errors.name}
            </p>
          )}
        </div>

        {/* Description */}

        <div>
          <label className="block mb-2 text-sm font-semibold text-gray-800">
            What does your company do?
          </label>

          <textarea
            rows={5}
            maxLength={250}
            placeholder="Describe your company in a few sentences..."
            value={companyData.description}
            onChange={(e) => updateField("description", e.target.value)}
            className={`w-full rounded-xl px-4 py-3 outline-none transition-all duration-200 ${
              errors.description
                ? "border border-red-500 focus:ring-4 focus:ring-red-100"
                : "border border-gray-300 focus:border-black focus:ring-4 focus:ring-gray-200"
            }`}
          />

          {errors.name && (
            <p className="mt-2 text-sm font-medium text-red-600">
              {errors.name}
            </p>
          )}
          <div className="mt-2 flex justify-between text-sm text-gray-400">
            <span>Maximum 250 characters</span>

            <span>{companyData.description.length}/250</span>
          </div>
        </div>

        {/* Industry */}

        <div>
          <label className="block mb-2 text-sm font-semibold text-gray-800">
            Industry
          </label>

          <select
            value={companyData.industry}
            onChange={(e) => updateField("industry", e.target.value)}
            className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm transition-all duration-200 focus:border-black focus:ring-4 focus:ring-gray-200 outline-none"
          >
            <option value="">Select an industry</option>

            {industries.map((industry) => (
              <option key={industry} value={industry}>
                {industry}
              </option>
            ))}
          </select>
        </div>

        {/* Company Size */}

        <div>
          <label className="block mb-4 text-sm font-semibold text-gray-800">
            Company Size
          </label>

          <div className="grid gap-4 md:grid-cols-2">
            {companySizes.map((size) => (
              <label
                key={size}
                className={`cursor-pointer rounded-2xl border p-5 transition-all duration-200 hover:border-black hover:shadow-md ${
                  companyData.company_size === size
                    ? "border-black bg-black text-white shadow-lg"
                    : "border-gray-300 bg-white"
                }`}
              >
                <input
                  type="radio"
                  name="company_size"
                  value={size}
                  checked={companyData.company_size === size}
                  onChange={(e) => updateField("company_size", e.target.value)}
                  className="hidden"
                />

                <div className="flex items-center justify-between">
                  <span className="font-medium">{size}</span>

                  {companyData.company_size === size && (
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-black">
                      ✓
                    </div>
                  )}
                </div>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
