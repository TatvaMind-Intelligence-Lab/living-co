export default function BusinessStep({
  // These default values prevent the app from crashing
  // if React renders the component before props are available.
  companyData = {},
  setCompanyData = () => {},
  errors = {},
  setErrors = () => {},
}) {

  // -----------------------------
  // DEBUG (Remove later)
  // -----------------------------
  console.log("BusinessStep Render");
  console.log("companyData:", companyData);
  console.log("errors:", errors);

  // List of customer types
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

  // List of acquisition channels
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

  /**
   * Toggle selection for a checkbox.
   *
   * Example:
   *
   * customers = ["B2B"]
   *
   * User clicks "Government"
   *
   * customers = ["B2B", "Government"]
   *
   * User clicks "Government" again
   *
   * customers = ["B2B"]
   */
  const toggleSelection = (field, value) => {
    setCompanyData((prev) => {
      // If field doesn't exist yet, start with empty array
      const current = prev[field] || [];

      return {
        ...prev,

        // Remove if already selected
        // Otherwise add it
        [field]: current.includes(value)
          ? current.filter((item) => item !== value)
          : [...current, value],
      };
    });

    // Remove validation error once user starts interacting
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  return (
    <div className="max-w-3xl">

      {/* Heading */}

      <h2 className="text-3xl font-bold text-gray-900">
        Customers & Business
      </h2>

      <p className="mt-3 text-lg text-gray-600">
        Help your AI Co-Founder understand who your customers are and how they
        discover your business.
      </p>

      <div className="mt-10 space-y-10">

        {/* =======================================================
            CUSTOMER TYPES
        ======================================================== */}

        <div>

          <label className="block mb-4 text-sm font-semibold text-gray-800">
            Who are your primary customers?
          </label>

          <div
            className={`grid gap-4 rounded-2xl p-2 transition-all md:grid-cols-2 ${
              errors.customers
                ? "border border-red-300 bg-red-50"
                : ""
            }`}
          >

            {customers.map((customer) => {

              // Check if this customer is already selected
              const selected =
                (companyData.customers || []).includes(customer);

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
                    onChange={() =>
                      toggleSelection("customers", customer)
                    }
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

          {/* Validation Error */}

          {errors.customers && (
            <p className="mt-3 text-sm font-medium text-red-600">
              {errors.customers}
            </p>
          )}

        </div>

        {/* =======================================================
            ACQUISITION CHANNELS
        ======================================================== */}

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

            {acquisitionChannels.map((channel) => {

              // Check whether this channel is selected
              const selected =
                (companyData.acquisition_channels || []).includes(channel);

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
                      toggleSelection(
                        "acquisition_channels",
                        channel
                      )
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

          {/* Validation Error */}

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