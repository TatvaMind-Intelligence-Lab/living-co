export default function FormInput({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  disabled = false,
  required = false,
}) {
  return (
    <div>

      <label className="mb-2 block text-sm font-medium text-gray-700">
        {label}

        {required && (
          <span className="ml-1 text-red-500">*</span>
        )}
      </label>

      <input
        type={type}
        value={value}
        disabled={disabled}
        placeholder={placeholder}
        onChange={onChange}
        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none transition-all focus:border-black"
      />

    </div>
  );
}