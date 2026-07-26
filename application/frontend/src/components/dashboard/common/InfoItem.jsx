export default function InfoItem({ icon: Icon, label, value }) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-gray-100 p-4 transition hover:border-gray-300 hover:shadow-sm">
      <div className="rounded-lg bg-gray-100 p-2">
        <Icon className="h-5 w-5 text-gray-700" />
      </div>

      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="mt-1 font-semibold text-gray-900">
          {value || "Not provided"}
        </p>
      </div>
    </div>
  );
}