export default function FinishStep({ companyData }) {
  return (
    <div className="mx-auto max-w-4xl">

      <div className="text-center">

        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-black text-5xl text-white shadow-lg">
          🚀
        </div>

        <h2 className="mt-8 text-4xl font-bold text-gray-900">
          Review Your Company
        </h2>

        <p className="mt-4 text-lg leading-8 text-gray-600">
          Everything looks good. Review your information before creating your
          company workspace.
        </p>

      </div>

      <div className="mt-12 grid gap-6">

        {/* Company */}

        <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="mb-5 text-xl font-semibold text-gray-900">
            Company Information
          </h3>

          <div className="grid gap-5 md:grid-cols-2">

            <div>
              <p className="text-sm text-gray-500">Company Name</p>
              <p className="mt-1 font-medium text-gray-900">
                {companyData.name || "—"}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Industry</p>
              <p className="mt-1 font-medium text-gray-900">
                {companyData.industry || "—"}
              </p>
            </div>

            <div className="md:col-span-2">
              <p className="text-sm text-gray-500">
                Company Description
              </p>

              <p className="mt-1 leading-7 text-gray-900">
                {companyData.description || "—"}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Company Size
              </p>

              <p className="mt-1 font-medium text-gray-900">
                {companyData.company_size || "—"}
              </p>
            </div>

          </div>
        </section>

        {/* Business */}

        <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="mb-5 text-xl font-semibold text-gray-900">
            Customers & Business
          </h3>

          <div className="space-y-5">

            <div>
              <p className="text-sm text-gray-500">
                Customers
              </p>

              <div className="mt-2 flex flex-wrap gap-2">
                {companyData.customers.length ? (
                  companyData.customers.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-gray-100 px-3 py-1 text-sm"
                    >
                      {item}
                    </span>
                  ))
                ) : (
                  <span className="text-gray-400">—</span>
                )}
              </div>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Acquisition Channels
              </p>

              <div className="mt-2 flex flex-wrap gap-2">
                {companyData.acquisition_channels.length ? (
                  companyData.acquisition_channels.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-gray-100 px-3 py-1 text-sm"
                    >
                      {item}
                    </span>
                  ))
                ) : (
                  <span className="text-gray-400">—</span>
                )}
              </div>
            </div>

          </div>
        </section>

        {/* Goals */}

        <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="mb-5 text-xl font-semibold text-gray-900">
            Goals & Challenges
          </h3>

          <div className="space-y-5">

            <div>
              <p className="text-sm text-gray-500">
                Annual Goal
              </p>

              <p className="mt-1 leading-7 text-gray-900">
                {companyData.annual_goal || "—"}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Challenges
              </p>

              <div className="mt-2 flex flex-wrap gap-2">
                {companyData.challenges.length ? (
                  companyData.challenges.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-gray-100 px-3 py-1 text-sm"
                    >
                      {item}
                    </span>
                  ))
                ) : (
                  <span className="text-gray-400">—</span>
                )}
              </div>
            </div>

          </div>
        </section>

        {/* Company DNA */}

        <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="mb-5 text-xl font-semibold text-gray-900">
            Company DNA
          </h3>

          <div className="space-y-5">

            <div>
              <p className="text-sm text-gray-500">
                Decision Style
              </p>

              <p className="mt-1 font-medium text-gray-900">
                {companyData.decision_style || "—"}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Company Values
              </p>

              <div className="mt-2 flex flex-wrap gap-2">
                {companyData.company_values.length ? (
                  companyData.company_values.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-gray-100 px-3 py-1 text-sm"
                    >
                      {item}
                    </span>
                  ))
                ) : (
                  <span className="text-gray-400">—</span>
                )}
              </div>
            </div>

          </div>
        </section>

        {/* AI */}

        <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="mb-5 text-xl font-semibold text-gray-900">
            AI Co-Founder
          </h3>

          <div className="space-y-5">

            <div>
              <p className="text-sm text-gray-500">
                AI Expectations
              </p>

              <p className="mt-1 leading-7 text-gray-900">
                {companyData.ai_expectations || "—"}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Proactivity Level
              </p>

              <p className="mt-1 font-medium text-gray-900">
                {companyData.proactivity_level}/10
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                AI Boundaries
              </p>

              <p className="mt-1 whitespace-pre-line leading-7 text-gray-900">
                {companyData.ai_boundaries || "—"}
              </p>
            </div>

          </div>
        </section>

      </div>

      <div className="mt-10 rounded-2xl border border-green-200 bg-green-50 px-6 py-5">
        <p className="text-center font-medium text-green-800">
          🎉 Everything looks ready. Click{" "}
          <strong>Create Company</strong> below to initialize your AI
          Co-Founder and enter your workspace.
        </p>
      </div>

    </div>
  );
} 