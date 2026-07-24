export default function BusinessStep({
  companyData,
  setCompanyData,
  errors,
  setErrors,
}) {
  const customers = [
    "Individuals (B2C)",
    "Businesses (B2B)",
    "Government",
    "Startups",
    "Enterprises",
    "Students",
    "Healthcare",
    "Other",
  ];

  const acquisitionChannels = [
    "Website",
    "Instagram",
    "LinkedIn",
    "Facebook",
    "Google Ads",
    "Word of Mouth",
    "Cold Email",
    "Sales Team",
    "Partners",
    "Events",
    "Marketplace",
    "Other",
  ];

  const toggleSelection = (field, value) => {
    setCompanyData((prev) => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter((item) => item !== value)
        : [...prev[field], value],
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
      <h2 className="text-3xl font-bold text-gray-900">Customers & Business</h2>

      <p className="mt-3 text-lg text-gray-600">
        Help your AI Co-Founder understand who your customers are and how they
        discover your business.
      </p>

      <div className="mt-10 space-y-10">
        {/* Customers */}

        <div>
          <label className="block mb-4 text-sm font-semibold text-gray-800">
            Who are your primary customers?
          </label>

          <div
            className={`grid gap-4 rounded-2xl p-2 transition-all md:grid-cols-2 ${
              errors.customers ? "border border-red-300 bg-red-50" : ""
            }`}
          >
            {customers.map((customer) => {
              const selected = companyData.customers.includes(customer);

              return (
                <label
                  key={customer}
                  className={`cursor-pointer rounded-2xl border p-5 transition-all duration-200 hover:border-black hover:shadow-md ${
                    selected
                      ? "border-black bg-black text-white shadow-lg"
                      : "border-gray-300 bg-white"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={selected}
                    onChange={() => toggleSelection("customers", customer)}
                    className="hidden"
                  />

                  <div className="flex items-center justify-between">
                    <span>{customer}</span>

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
          {errors.customers && (
            <p className="mt-3 text-sm font-medium text-red-600">
              {errors.customers}
            </p>
          )}
        </div>

        {/* Acquisition Channels */}

        <div>
          <label className="block mb-4 text-sm font-semibold text-gray-800">
            How do customers discover your business?
          </label>

          <div
            className={`grid gap-4 rounded-2xl p-2 transition-all md:grid-cols-2 ${
              errors.acquisition_channels
                ? "border border-red-300 bg-red-50"
                : ""
            }`}
          >
            {" "}
            {acquisitionChannels.map((channel) => {
              const selected =
                companyData.acquisition_channels.includes(channel);

              return (
                <label
                  key={channel}
                  className={`cursor-pointer rounded-2xl border p-5 transition-all duration-200 hover:border-black hover:shadow-md ${
                    selected
                      ? "border-black bg-black text-white shadow-lg"
                      : "border-gray-300 bg-white"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={selected}
                    onChange={() =>
                      toggleSelection("acquisition_channels", channel)
                    }
                    className="hidden"
                  />

                  <div className="flex items-center justify-between">
                    <span>{channel}</span>

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
          {errors.acquisition_channels && (
            <p className="mt-3 text-sm font-medium text-red-600">
              {errors.acquisition_channels}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
