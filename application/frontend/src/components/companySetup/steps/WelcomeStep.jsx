export default function WelcomeStep() {
  return (
    <div className="max-w-2xl">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-black text-white text-3xl mb-8">
        👋
      </div>

      <h2 className="text-4xl font-bold text-gray-900 leading-tight">
        Welcome to The Living Company
      </h2>

      <p className="mt-6 text-lg text-gray-600 leading-8">
        Every great company has a unique way of thinking, making decisions,
        and solving problems. Your AI Co-Founder should understand that too.
      </p>

      <p className="mt-4 text-lg text-gray-600 leading-8">
        Over the next few steps, you'll introduce your company, your goals,
        and how your team works. This information becomes the foundation of
        your company's institutional intelligence.
      </p>

      <div className="mt-10 rounded-2xl border border-gray-200 bg-gray-50 p-6">
        <h3 className="text-lg font-semibold text-gray-900">
          What we'll cover
        </h3>

        <ul className="mt-4 space-y-3 text-gray-600">
          <li>• Company Identity</li>
          <li>• Customers & Business</li>
          <li>• Goals & Challenges</li>
          <li>• Company Decision Making</li>
          <li>• AI Co-Founder Expectations</li>
        </ul>
      </div>
    </div>
  );
}