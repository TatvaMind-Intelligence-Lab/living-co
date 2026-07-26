export default function ActionButton({
  children,
  primary = false,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-xl px-5 py-3 font-medium transition-all duration-300

      ${
        primary
          ? "bg-black text-white hover:bg-gray-800"
          : "border border-gray-200 bg-white text-gray-700 hover:border-black hover:bg-gray-50"
      }
      `}
    >
      {children}
    </button>
  );
}