import {
  CheckCircle2,
  Database,
  FileText,
  Brain,
} from "lucide-react";

import Card from "../common/Card";
import ProgressBar from "../common/ProgressBar";
import { calculateAIReadiness } from "../../../utils/calculateAIReadiness";

export default function ProgressCard({ profile }) {
  if (!profile) return null;

  // Calculate progress dynamically
  const onboarding = profile.onboarding_completed ? 100 : 0;

  const knowledgeBase = profile.ai_expectations ? 20 : 0;

  const documents = 0; // Will come from document uploads later

  const aiReadiness = calculateAIReadiness(profile);

  return (
    <Card
      title="Company Health"
      subtitle="Your AI Co-Founder readiness"
    >
      <div className="space-y-8">

        <div>
          <div className="mb-2 flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-green-600" />
            <span className="font-medium">Onboarding</span>
          </div>

          <ProgressBar
            label="Completed"
            value={onboarding}
          />
        </div>

        <div>
          <div className="mb-2 flex items-center gap-2">
            <Database className="h-5 w-5 text-blue-600" />
            <span className="font-medium">Knowledge Base</span>
          </div>

          <ProgressBar
            label="Business Knowledge"
            value={knowledgeBase}
          />
        </div>

        <div>
          <div className="mb-2 flex items-center gap-2">
            <FileText className="h-5 w-5 text-orange-600" />
            <span className="font-medium">Documents</span>
          </div>

          <ProgressBar
            label="Uploaded"
            value={documents}
          />
        </div>

        <div>
          <div className="mb-2 flex items-center gap-2">
            <Brain className="h-5 w-5 text-purple-600" />
            <span className="font-medium">AI Readiness</span>
          </div>

          <ProgressBar
            label="Company Context"
            value={aiReadiness}
          />
        </div>

      </div>
    </Card>
  );
}