export default function FormSelect({
  label,
  value,
  onChange,
  options = [],
}) {
  return (
    <div>

      <label className="mb-2 block text-sm font-medium text-gray-700">
        {label}
      </label>

      <select
        value={value}
        onChange={onChange}
        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none transition-all focus:border-black"
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>

    </div>
  );
}