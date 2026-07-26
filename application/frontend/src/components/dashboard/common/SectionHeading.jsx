export default function SectionHeading({
  title,
  subtitle,
}) {
  return (
    <div className="mb-5">

      <h2 className="text-xl font-semibold text-gray-900">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-1 text-sm text-gray-500">
          {subtitle}
        </p>
      )}

    </div>
  );
}