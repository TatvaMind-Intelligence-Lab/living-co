import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

import { getCompany } from "../services/company.service";

export default function OnboardingGuard({
  children,
  requireCompany = true,
}) {
  const [loading, setLoading] = useState(true);
  const [hasCompany, setHasCompany] = useState(false);

  useEffect(() => {
    async function checkCompany() {
      try {
        console.log("Checking company...");

        const company = await getCompany();

        console.log("Company Found:", company);

        setHasCompany(true);
      } catch (error) {
        console.log("Company Check Error:", error);

        if (error.response?.status === 404) {
          console.log("Company does not exist");

          setHasCompany(false);
        } else {
          console.error(error);
        }
      } finally {
        setLoading(false);
      }
    }

    checkCompany();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-xl font-semibold">
          Preparing your workspace...
        </h2>
      </div>
    );
  }

  // Dashboard Route
  if (requireCompany && !hasCompany) {
    return <Navigate to="/company/setup" replace />;
  }

  // Company Setup Route
  if (!requireCompany && hasCompany) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}