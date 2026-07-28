import FormCard from "../../common/FormCard";
import FormInput from "../../common/FormInput";
import FormSection from "../../common/FormSection";
import TagInput from "../../common/TagInput";

export default function ProfileForm({ formData, onChange }) {
  const update = (field, value) => {
    onChange({
      ...formData,
      [field]: value,
    });
  };

  return (
    <FormCard
      title="Business Profile"
      description="Help Living Co understand your business so it can provide better insights and recommendations."
    >
      <div className="space-y-8">
        <FormSection
          title="Business Goals"
          description="These help your AI Co-Founder make more relevant recommendations."
        >
          <FormInput
            label="Annual Goal"
            placeholder="Reach $1M ARR"
            value={formData.annual_goal}
            onChange={(e) => update("annual_goal", e.target.value)}
          />

          <div className="mt-6">
            <TagInput
              label="Target Customers"
              placeholder="Press Enter after each customer segment..."
              value={formData.customers}
              onChange={(value) => update("customers", value)}
            />
          </div>
        </FormSection>

        <FormSection
          title="Company Values"
          description="What principles guide your company?"
        >
          <TagInput
            label="Values"
            placeholder="Innovation, Transparency..."
            value={formData.company_values}
            onChange={(value) => update("company_values", value)}
          />
        </FormSection>

        <FormSection
          title="Current Challenges"
          description="What problems are you trying to solve right now?"
        >
          <TagInput
            label="Challenges"
            placeholder="Lead Generation, Hiring..."
            value={formData.challenges}
            onChange={(value) => update("challenges", value)}
          />
        </FormSection>
      </div>
    </FormCard>
  );
}
