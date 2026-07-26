import {
  CheckCircle2,
  Circle,
} from "lucide-react";

import Card from "../common/Card";

const steps = [
  {
    title: "Company Setup",
    completed: true,
  },
  {
    title: "Upload Documents",
    completed: false,
  },
  {
    title: "Train AI",
    completed: false,
  },
  {
    title: "Invite Team",
    completed: false,
  },
];

export default function NextSteps() {
  return (
    <Card title="Next Steps">

      <div className="space-y-5">

        {steps.map((step) => (
          <div
            key={step.title}
            className="flex items-center gap-3"
          >
            {step.completed ? (
              <CheckCircle2 className="text-green-600" />
            ) : (
              <Circle className="text-gray-400" />
            )}

            <span>{step.title}</span>
          </div>
        ))}

      </div>

    </Card>
  );
}