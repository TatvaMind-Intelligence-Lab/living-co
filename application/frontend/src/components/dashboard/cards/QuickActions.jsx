import {
  Upload,
  Bot,
  FileText,
  Users,
} from "lucide-react";

import Card from "../common/Card";

const actions = [
  {
    title: "Upload Documents",
    description: "Build your knowledge base",
    icon: Upload,
  },
  {
    title: "Ask AI",
    description: "Talk with your Co-Founder",
    icon: Bot,
  },
  {
    title: "Knowledge",
    description: "View company memory",
    icon: FileText,
  },
  {
    title: "Invite Team",
    description: "Collaborate together",
    icon: Users,
  },
];

export default function QuickActions() {
  return (
    <Card title="Quick Actions">

      <div className="grid grid-cols-2 gap-4">

        {actions.map((action) => {

          const Icon = action.icon;

          return (
            <button
              key={action.title}
              className="rounded-2xl border border-gray-200 p-5 text-left transition hover:-translate-y-1 hover:border-black hover:shadow-md"
            >
              <Icon className="mb-4 h-7 w-7" />

              <h3 className="font-semibold">
                {action.title}
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                {action.description}
              </p>

            </button>
          );
        })}

      </div>

    </Card>
  );
}