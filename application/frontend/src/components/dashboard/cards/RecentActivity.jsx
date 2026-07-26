import Card from "../common/Card";

const activities = [
  {
    title: "Company Created",
    time: "Today",
  },
  {
    title: "Onboarding Completed",
    time: "Today",
  },
  {
    title: "AI Memory Initialized",
    time: "Today",
  },
];

export default function RecentActivity() {
  return (
    <Card title="Recent Activity">

      <div className="space-y-6">

        {activities.map((activity) => (
          <div
            key={activity.title}
            className="flex justify-between border-b border-gray-100 pb-4"
          >
            <div>

              <h3 className="font-medium">
                {activity.title}
              </h3>

            </div>

            <span className="text-sm text-gray-400">
              {activity.time}
            </span>

          </div>
        ))}

      </div>

    </Card>
  );
}