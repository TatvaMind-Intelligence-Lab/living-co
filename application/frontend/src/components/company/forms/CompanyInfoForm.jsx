import FormCard from "../../common/FormCard";
import FormInput from "../../common/FormInput";
import FormTextarea from "../../common/FormTextarea";
import FormSelect from "../../common/FormSelect";
import FormSection from "../../common/FormSection";

const industries = [
  { label: "Select Industry", value: "" },
  { label: "Technology", value: "Technology" },
  { label: "Healthcare", value: "Healthcare" },
  { label: "Finance", value: "Finance" },
  { label: "Education", value: "Education" },
  { label: "Retail", value: "Retail" },
  { label: "Manufacturing", value: "Manufacturing" },
  { label: "Marketing", value: "Marketing" },
  { label: "Consulting", value: "Consulting" },
  { label: "Other", value: "Other" },
];

const companySizes = [
  { label: "Select Company Size", value: "" },
  { label: "Solo (1)", value: "1" },
  { label: "2 - 10", value: "2-10" },
  { label: "11 - 50", value: "11-50" },
  { label: "51 - 200", value: "51-200" },
  { label: "201 - 500", value: "201-500" },
  { label: "500+", value: "500+" },
];

export default function CompanyInfoForm({
  formData,
  onChange,
}) {
  const updateField = (field, value) => {
    onChange({
      ...formData,
      [field]: value,
    });
  };

  return (
    <FormCard
      title="Company Information"
      description="Basic details about your organization."
    >
      <div className="space-y-8">

        <FormSection title="General Information">

          <div className="grid gap-6 md:grid-cols-2">

            <FormInput
              label="Company Name"
              required
              value={formData.name}
              placeholder="Acme Inc."
              onChange={(e) =>
                updateField("name", e.target.value)
              }
            />

            <FormSelect
              label="Industry"
              value={formData.industry}
              options={industries}
              onChange={(e) =>
                updateField("industry", e.target.value)
              }
            />

          </div>

          <div className="mt-6">

            <FormSelect
              label="Company Size"
              value={formData.company_size}
              options={companySizes}
              onChange={(e) =>
                updateField("company_size", e.target.value)
              }
            />

          </div>

        </FormSection>

        <FormSection
          title="Business Description"
          description="Help Living Co understand your company."
        >

          <FormTextarea
            label="Description"
            rows={6}
            placeholder="Describe what your company does..."
            value={formData.description}
            onChange={(e) =>
              updateField("description", e.target.value)
            }
          />

        </FormSection>

      </div>
    </FormCard>
  );
}