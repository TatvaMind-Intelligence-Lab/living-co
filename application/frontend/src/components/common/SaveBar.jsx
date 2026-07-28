import{Link }from"react-router-dom";

export default function SaveBar({
  loading = false,
  onSave,
  onCancel,
}) {
  return (
    <div className="sticky bottom-6 z-20 mt-8 flex items-center justify-between rounded-2xl border border-gray-200 bg-white p-5 shadow-lg">

      <div>

        <h4 className="font-semibold">
          Unsaved Changes
        </h4>

        <p className="text-sm text-gray-500">
          Save your updates before leaving this page.
        </p>

      </div>

      <div className="flex gap-3">

        <Link
        to="/"
          onClick={onCancel}
          className="rounded-xl border border-gray-200 px-5 py-2.5 transition hover:border-black"
        >
          Cancel
        </Link>

        <Link
          to="/dashboard"
          disabled={loading}
          onClick={onSave}
          className="rounded-xl bg-black px-5 py-2.5 font-medium text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Saving..." : "Save Changes"}
        </Link>

      </div>

    </div>
  );
}