import { CheckCircle2, Circle } from "lucide-react";

export default function EmptyState() {
  return (
    <div className="mt-8 rounded-3xl border border-gray-200 bg-white p-8">

      <h2 className="text-2xl font-semibold">
        Next Steps
      </h2>

      <div className="mt-8 space-y-5">

        <div className="flex items-center gap-4">
          <CheckCircle2 className="text-green-600" />
          Company onboarding completed
        </div>

        <div className="flex items-center gap-4">
          <Circle />
          Upload your first document
        </div>

        <div className="flex items-center gap-4">
          <Circle />
          Start your first AI conversation
        </div>

        <div className="flex items-center gap-4">
          <Circle />
          Invite your team
        </div>

      </div>

    </div>
  );
}