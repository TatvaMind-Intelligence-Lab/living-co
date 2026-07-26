import {
  Bot,
  Building2,
  FileText,
  MessageSquare,
  CheckSquare,
  Sparkles,
} from "lucide-react";

import StatCard from "../common/StatCard";
import ActionButton from "../common/ActionButton";

export default function HeroCard({ company }) {
  const greeting = () => {
    const hour = new Date().getHours();

    if (hour < 12) return "Good Morning";
    if (hour < 17) return "Good Afternoon";
    return "Good Evening";
  };

  const aiReadiness = 80;

  return (
    <div className="overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-br from-white via-white to-gray-50 p-8 shadow-sm">
      {/* Header */}

      <div className="flex flex-col justify-between gap-8 xl:flex-row xl:items-start">
        {/* Left */}

        <div className="max-w-3xl">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-black" />

            <span className="text-sm font-medium uppercase tracking-wider text-gray-500">
              AI Co-Founder
            </span>
          </div>

          <h1 className="mt-3 text-4xl font-bold text-gray-900">
            {greeting()},
          </h1>

          <h2 className="mt-2 text-2xl font-semibold text-gray-800">
            {company?.name || "Your Company"}
          </h2>

          <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Building2 className="h-4 w-4" />

              <span>{company?.industry || "Industry"}</span>
            </div>

            <span>•</span>

            <span>{company?.company_size || "Company Size"}</span>
          </div>

          <p className="mt-6 max-w-2xl leading-7 text-gray-600">
            Your company profile is complete. The next step is to upload
            business documents so your AI Co-Founder can understand your
            operations, answer context-aware questions, and provide proactive
            recommendations.
          </p>

          {/* Buttons */}

          <div className="mt-8 flex flex-wrap gap-4">
            <ActionButton primary>Ask AI Co-Founder</ActionButton>

            <ActionButton>Upload Documents</ActionButton>
          </div>
        </div>

        {/* Right */}

        <div className="rounded-2xl border border-gray-200 bg-white px-6 py-5 shadow-sm">
          <p className="text-sm text-gray-500">AI Readiness</p>

          <h2 className="mt-2 text-5xl font-bold">{aiReadiness}%</h2>

          <p className="mt-3 max-w-[220px] text-sm leading-6 text-gray-500">
            Your business profile is ready. Upload documents to unlock the full
            potential of your AI Co-Founder.
          </p>
        </div>
      </div>

      {/* Stats */}

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={FileText} title="Documents" value="0" />

        <StatCard icon={MessageSquare} title="AI Chats" value="0" />

        <StatCard icon={CheckSquare} title="Tasks" value="0" />

        <StatCard icon={Bot} title="AI Readiness" value={`${aiReadiness}%`} />
      </div>
    </div>
  );
}
