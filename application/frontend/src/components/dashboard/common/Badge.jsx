export default function Badge({
  children,
  dark = false,
}) {
  return (
    <span
      className={`rounded-full px-4 py-2 text-sm font-medium transition

      ${
        dark
          ? "bg-black text-white"
          : "border border-gray-200 bg-gray-50 text-gray-700 hover:bg-black hover:text-white"
      }
      
      `}
    >
      {children}
    </span>
  );
}