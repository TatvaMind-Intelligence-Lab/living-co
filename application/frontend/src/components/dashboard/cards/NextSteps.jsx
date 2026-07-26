import {
  Building2,
  FileText,
  Bot,
  Users,
} from "lucide-react";

import Card from "../common/Card";
import StepCard from "../common/StepCard";

export default function NextSteps({
  company,
  profile,
}) {
  if (!profile) return null;

  // Temporary values
  // These will later come from the backend.
  const documents = 0;
  const aiChats = 0;
  const teamMembers = 1;

  const steps = [
    {
      icon: Building2,
      title: "Company Setup",
      description:
        "Your company profile has been successfully configured.",
      completed: profile.onboarding_completed,
    },

    {
      icon: FileText,
      title: "Upload Documents",
      description:
        "Upload SOPs, business plans, contracts and other documents to teach your AI about the company.",
      priority: "High",
      completed: documents > 0,
      action: "Upload",
    },

    {
      icon: Bot,
      title: "Start First AI Conversation",
      description:
        "Talk to your AI Co-Founder and begin building contextual memory.",
      priority: "Medium",
      completed: aiChats > 0,
      action: "Chat",
    },

    {
      icon: Users,
      title: "Invite Team",
      description:
        "Invite your teammates so everyone can collaborate inside Living Co.",
      priority: "Optional",
      completed: teamMembers > 1,
      action: "Invite",
    },
  ];

  return (
    <Card
      title="Next Steps"
      subtitle="Complete your AI workspace"
    >
      <div className="space-y-4">
        {steps.map((step) => (
          <StepCard
            key={step.title}
            icon={step.icon}
            title={step.title}
            description={step.description}
            priority={step.priority}
            completed={step.completed}
            action={step.action}
          />
        ))}
      </div>
    </Card>
  );
}