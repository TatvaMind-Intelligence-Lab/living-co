export default function FormTextarea({
  label,
  value,
  onChange,
  placeholder,
  rows = 5,
}) {
  return (
    <div>

      <label className="mb-2 block text-sm font-medium text-gray-700">
        {label}
      </label>

      <textarea
        rows={rows}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 outline-none transition-all focus:border-black"
      />

    </div>
  );
}