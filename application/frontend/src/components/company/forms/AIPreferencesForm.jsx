import FormCard from "../../common/FormCard";
import FormSection from "../../common/FormSection";
import FormTextarea from "../../common/FormTextarea";
import TagInput from "../../common/TagInput";
import ToggleSwitch from "../../common/ToggleSwitch";

export default function AIPreferencesForm({ formData, onChange }) {
  const update = (field, value) => {
    onChange({
      ...formData,
      [field]: value,
    });
  };

  return (
    <FormCard
      title="AI Preferences"
      description="Customize how Living Co behaves as your AI Co-Founder."
    >
      <div className="space-y-8">
        <FormSection
          title="AI Expectations"
          description="Describe how you want Living Co to help your business."
        >
          <FormTextarea
            label="Expectations"
            rows={5}
            placeholder="Act like a COO, identify bottlenecks, help improve operations..."
            value={formData.ai_expectations}
            onChange={(e) => update("ai_expectations", e.target.value)}
          />

          <div className="mt-6">
            <TagInput
              label="AI Roles"
              placeholder="COO, CFO, Marketing Advisor..."
              value={formData.ai_roles}
              onChange={(value) => update("ai_roles", value)}
            />
          </div>
        </FormSection>

        <FormSection
          title="Automation"
          description="Choose how proactive Living Co should be."
        >
          <div className="space-y-4">
            <ToggleSwitch
              label="Proactive Suggestions"
              description="Allow AI to proactively recommend improvements."
              checked={formData.proactive_ai}
              onChange={(value) => update("proactive_ai", value)}
            />

            <ToggleSwitch
              label="Weekly Business Reports"
              description="Receive a weekly AI-generated business summary."
              checked={formData.weekly_reports}
              onChange={(value) => update("weekly_reports", value)}
            />

            <ToggleSwitch
              label="Smart Notifications"
              description="Receive important AI alerts and reminders."
              checked={formData.smart_notifications}
              onChange={(value) => update("smart_notifications", value)}
            />
          </div>
        </FormSection>
      </div>
    </FormCard>
  );
}
