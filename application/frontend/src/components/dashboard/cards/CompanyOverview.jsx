import {
  Building2,
  Briefcase,
  Users,
  Target,
  Brain,
  Heart,
} from "lucide-react";
import InfoItem from "../common/InfoItem";

export default function CompanyOverview({ data }) {
  if (!data) return null;

  const { company, profile } = data;

  const customers = profile?.customers || [];
  const values = profile?.company_values || [];

//   const InfoItem = ({ icon: Icon, label, value }) => (
//     <div className="flex items-start gap-3 rounded-xl border border-gray-100 p-4 transition hover:border-gray-300 hover:shadow-sm">
//       <div className="rounded-lg bg-gray-100 p-2">
//         <Icon className="h-5 w-5 text-gray-700" />
//       </div>

//       <div>
//         <p className="text-sm text-gray-500">{label}</p>
//         <p className="mt-1 font-semibold text-gray-900">
//           {value || "Not provided"}
//         </p>
//       </div>
//     </div>
//   );

  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">

      {/* Header */}

      <div className="flex flex-col justify-between gap-4 border-b border-gray-100 pb-6 md:flex-row md:items-center">

        <div>
          <p className="text-sm font-medium uppercase tracking-wider text-gray-500">
            Company Overview
          </p>

          <h2 className="mt-2 text-3xl font-bold text-gray-900">
            {company?.name}
          </h2>

          <p className="mt-2 text-gray-500">
            {company?.description || "No description available."}
          </p>
        </div>

        <div className="rounded-2xl bg-gray-900 px-5 py-4 text-white">
          <p className="text-xs uppercase tracking-wide text-gray-400">
            Company Type
          </p>

          <h3 className="mt-1 text-xl font-semibold">
            {company?.industry || "N/A"}
          </h3>
        </div>

      </div>

      {/* Information */}

      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">

        <InfoItem
          icon={Building2}
          label="Industry"
          value={company?.industry}
        />

        <InfoItem
          icon={Users}
          label="Company Size"
          value={company?.company_size}
        />

        <InfoItem
          icon={Brain}
          label="Decision Style"
          value={profile?.decision_style}
        />

        <InfoItem
          icon={Target}
          label="Annual Goal"
          value={profile?.annual_goal}
        />

      </div>

      {/* Customers */}

      <div className="mt-8">

        <div className="mb-3 flex items-center gap-2">

          <Briefcase className="h-5 w-5 text-gray-600" />

          <h3 className="text-lg font-semibold text-gray-900">
            Target Customers
          </h3>

        </div>

        <div className="flex flex-wrap gap-3">

          {customers.length > 0 ? (
            customers.map((customer) => (
              <span
                key={customer}
                className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-black hover:text-white"
              >
                {customer}
              </span>
            ))
          ) : (
            <p className="text-gray-400">
              No target customers added.
            </p>
          )}

        </div>

      </div>

      {/* Company Values */}

      <div className="mt-8">

        <div className="mb-3 flex items-center gap-2">

          <Heart className="h-5 w-5 text-gray-600" />

          <h3 className="text-lg font-semibold text-gray-900">
            Company Values
          </h3>

        </div>

        <div className="flex flex-wrap gap-3">

          {values.length > 0 ? (
            values.map((value) => (
              <span
                key={value}
                className="rounded-full border border-gray-200 px-4 py-2 text-sm font-medium transition hover:border-black hover:bg-black hover:text-white"
              >
                {value}
              </span>
            ))
          ) : (
            <p className="text-gray-400">
              No company values defined.
            </p>
          )}

        </div>

      </div>

      {/* AI Expectations */}

      <div className="mt-8 rounded-2xl bg-gray-50 p-5">

        <h3 className="text-lg font-semibold text-gray-900">
          AI Expectations
        </h3>

        <p className="mt-3 leading-relaxed text-gray-600">
          {profile?.ai_expectations || "No AI expectations provided."}
        </p>

      </div>

    </div>
  );
}