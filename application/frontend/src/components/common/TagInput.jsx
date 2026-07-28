import { useState } from "react";
import { X } from "lucide-react";

export default function TagInput({
  label,
  placeholder = "Type and press Enter...",
  value = [],
  onChange,
}) {
  const [input, setInput] = useState("");

  const addTag = () => {
    const tag = input.trim();

    if (!tag) return;

    if (value.includes(tag)) {
      setInput("");
      return;
    }

    onChange([...value, tag]);
    setInput("");
  };

  const removeTag = (tag) => {
    onChange(value.filter((item) => item !== tag));
  };

  return (
    <div>

      {label && (
        <label className="mb-2 block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <div className="rounded-xl border border-gray-200 p-3">

        <div className="mb-3 flex flex-wrap gap-2">

          {value.map((tag) => (
            <span
              key={tag}
              className="flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-sm"
            >
              {tag}

              <button
                type="button"
                onClick={() => removeTag(tag)}
              >
                <X className="h-4 w-4" />
              </button>
            </span>
          ))}

        </div>

        <input
          value={input}
          placeholder={placeholder}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              addTag();
            }
          }}
          className="w-full border-none outline-none"
        />

      </div>

    </div>
  );
}