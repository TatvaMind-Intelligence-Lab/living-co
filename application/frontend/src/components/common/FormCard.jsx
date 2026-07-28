export default function FormCard({
  title,
  description,
  children,
  className = "",
}) {
  return (
    <div
      className={`rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md ${className}`}
    >
      {(title || description) && (
        <div className="mb-6 border-b border-gray-100 pb-5">
          {title && (
            <h2 className="text-xl font-semibold text-gray-900">
              {title}
            </h2>
          )}

          {description && (
            <p className="mt-2 text-sm leading-6 text-gray-500">
              {description}
            </p>
          )}
        </div>
      )}

      {children}
    </div>
  );
}