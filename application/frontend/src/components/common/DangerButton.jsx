export default function DangerButton({
  children,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className="rounded-xl border border-red-300 bg-red-50 px-5 py-3 font-medium text-red-600 transition hover:bg-red-600 hover:text-white"
    >
      {children}
    </button>
  );
}