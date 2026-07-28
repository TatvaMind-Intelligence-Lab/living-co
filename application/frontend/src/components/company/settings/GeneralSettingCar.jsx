import FormCard from "../../common/FormCard";
import FormSelect from "../../common/FormSelect";

export default function GeneralSettingsCard() {
  return (
    <FormCard
      title="General Settings"
      description="Regional and workspace preferences."
    >
      <div className="grid gap-6 md:grid-cols-2">

        <FormSelect
          label="Timezone"
          value="Asia/Kolkata"
          options={[
            {
              label: "Asia/Kolkata",
              value: "Asia/Kolkata",
            },
          ]}
        />

        <FormSelect
          label="Language"
          value="English"
          options={[
            {
              label: "English",
              value: "English",
            },
          ]}
        />

      </div>
    </FormCard>
  );
}