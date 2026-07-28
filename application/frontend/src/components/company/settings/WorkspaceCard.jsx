import FormCard from "../../common/FormCard";

export default function WorkspaceCard() {
  return (
    <FormCard
      title="Workspace"
      description="Overview of your current workspace."
    >
      <div className="grid gap-6 md:grid-cols-2">

        <div>
          <p className="text-sm text-gray-500">Workspace Name</p>
          <h3 className="mt-1 font-semibold">Living Co</h3>
        </div>

        <div>
          <p className="text-sm text-gray-500">Owner</p>
          <h3 className="mt-1 font-semibold">
            You
          </h3>
        </div>

        <div>
          <p className="text-sm text-gray-500">Members</p>
          <h3 className="mt-1 font-semibold">1 Member</h3>
        </div>

        <div>
          <p className="text-sm text-gray-500">Workspace Status</p>
          <span className="inline-flex rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
            Active
          </span>
        </div>

      </div>
    </FormCard>
  );
}