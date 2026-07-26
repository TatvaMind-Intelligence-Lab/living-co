export function calculateAIReadiness(profile) {
  if (!profile) return 0;

  let score = 0;

  // Company Goal
  if (profile.annual_goal?.trim()) score += 20;

  // Customers
  if (profile.customers?.length) score += 20;

  // Company Values
  if (profile.company_values?.length) score += 20;

  // Challenges
  if (profile.challenges?.length) score += 20;

  // AI Expectations
  if (profile.ai_expectations?.trim()) score += 20;

  return Math.min(score, 100);
}