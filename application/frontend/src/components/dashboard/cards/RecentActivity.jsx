import { Building2, CheckCircle2, Brain, FileText } from "lucide-react";

import Card from "../common/Card";
import ActivityItem from "../common/ActivityItem";

export default function RecentActivity() {
  // Temporary data
  // Later this comes from backend events.

  const activities = [
    {
      icon: Building2,
      title: "Company Created",
      description: "Your company workspace has been successfully created.",
      time: "Today",
      color: "bg-blue-100",
    },

    {
      icon: CheckCircle2,
      title: "Onboarding Completed",
      description: "Business profile and AI preferences were configured.",
      time: "Today",
      color: "bg-green-100",
    },

    {
      icon: Brain,
      title: "AI Memory Initialized",
      description: "Living Co has created your initial business memory.",
      time: "Today",
      color: "bg-purple-100",
    },

    {
      icon: FileText,
      title: "Waiting for Documents",
      description: "Upload documents to begin building your knowledge base.",
      time: "Pending",
      color: "bg-orange-100",
    },
  ];

  return (
    <Card
      title="Recent Activity"
      subtitle="Latest events across your workspace"
    >
      <div className="space-y-4">
        {activities.map((activity) => (
          <ActivityItem key={activity.title} {...activity} />
        ))}
      </div>
    </Card>
  );
}
