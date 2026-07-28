import FormCard from "../../common/FormCard";
import DangerButton from "../../common/DangerButton";

export default function DangerZone() {
  return (
    <FormCard
      title="Danger Zone"
      description="These actions are permanent and cannot be undone."
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

        <div>

          <h3 className="font-semibold text-red-600">
            Delete Workspace
          </h3>

          <p className="mt-2 text-sm text-gray-500">
            Permanently remove your workspace,
            company information,
            documents,
            AI memory,
            and all associated data.
          </p>

        </div>

        <DangerButton
          onClick={() =>
            alert("Coming Soon")
          }
        >
          Delete Workspace
        </DangerButton>

      </div>
    </FormCard>
  );
}