import Card from "../common/Card";
import ProgressBar from "../common/ProgressBar";

export default function CompanyHealth() {
  return (
    <Card
      title="Company Health"
      subtitle="Current business readiness"
    >
      <div className="space-y-6">

        <ProgressBar
          label="Onboarding"
          value={100}
        />

        <ProgressBar
          label="Knowledge Base"
          value={15}
        />

        <ProgressBar
          label="Documents"
          value={0}
        />

        <ProgressBar
          label="AI Readiness"
          value={20}
        />

      </div>
    </Card>
  );
}