import {
  Sparkles,
  ArrowRight,
  BrainCircuit,
} from "lucide-react";

import Card from "../common/Card";

export default function AIInsight({ company, profile }) {
  if (!company || !profile) return null;

  // Temporary recommendation
  // Later this will come from Gemini.

  const insight = {
    category: "Knowledge",
    confidence: 92,
    title: "Teach me about your business",
    message:
      "You've completed onboarding, but I still don't know how your business operates. Upload documents like SOPs, business plans, invoices, or proposals so I can provide contextual recommendations.",
    action: "Upload Documents",
  };

  return (
    <Card className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-2">

          <Sparkles className="h-5 w-5" />

          <span className="text-sm uppercase tracking-widest text-gray-400">
            AI Insight
          </span>

        </div>

        <span className="rounded-full bg-white/10 px-3 py-1 text-xs">
          {insight.confidence}% Confidence
        </span>

      </div>

      <div className="mt-8">

        <div className="flex items-center gap-3">

          <div className="rounded-xl bg-white/10 p-3">

            <BrainCircuit className="h-6 w-6" />

          </div>

          <div>

            <p className="text-sm text-gray-400">
              {insight.category}
            </p>

            <h2 className="text-xl font-semibold">
              {insight.title}
            </h2>

          </div>

        </div>

        <p className="mt-6 leading-7 text-gray-300">
          {insight.message}
        </p>

        <button
          className="mt-8 flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-medium text-black transition hover:bg-gray-200"
        >
          {insight.action}

          <ArrowRight className="h-4 w-4" />

        </button>

      </div>

    </Card>
  );
}