import { useEffect, useState } from "react";

import DashboardLayout from "../../components/dashboard/layout/DashboardLayout";

import HeroCard from "../../components/dashboard/cards/HeroCard";
import CompanyOverview from "../../components/dashboard/cards/CompanyOverview";
import QuickActions from "../../components/dashboard/cards/QuickActions";
import ProgressCard from "../../components/dashboard/cards/ProgressCard";
import NextSteps from "../../components/dashboard/cards/NextSteps";
import RecentActivity from "../../components/dashboard/cards/RecentActivity";
import AIInsight from "../../components/dashboard/cards/AIInsight";
import { calculateAIReadiness } from "../../utils/calculateAIReadiness";

import { getCompany } from "../../services/company.service";

export default function Dashboard() {
  const [companyData, setCompanyData] = useState(null);
  const [loading, setLoading] = useState(true);
  const aiReadiness = calculateAIReadiness(companyData?.profile);

  useEffect(() => {
    async function loadCompany() {
      try {
        const data = await getCompany();

        console.log("Company Data:", data);

        setCompanyData(data);
      } catch (error) {
        console.error("Failed to load company:", error);
      } finally {
        setLoading(false);
      }
    }

    loadCompany();
  }, []);

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex h-[70vh] items-center justify-center">
          <p className="text-lg font-medium text-gray-500">
            Loading Dashboard...
          </p>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Hero */}
        <HeroCard company={companyData?.company} aiReadiness={aiReadiness} />
        {/* Overview + Progress */}
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
          <div className="xl:col-span-2">
            <CompanyOverview data={companyData} />
          </div>

          <ProgressCard profile={companyData?.profile} />
        </div>
        Quick Actions
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <QuickActions />

          <NextSteps />
        </div>
        {/* Bottom Section */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <RecentActivity />
          </div>

          <AIInsight />
        </div>
      </div>
    </DashboardLayout>
  );
}
