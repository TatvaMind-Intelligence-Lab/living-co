import { useState } from "react";

import SetupLayout from "../../components/companySetup/SetupLayout";

import WelcomeStep from "../../components/companySetup/steps/WelcomeStep";
import IdentityStep from "../../components/companySetup/steps/IdentityStep";
import BusinessStep from "../../components/companySetup/steps/BusinessStep";
import GoalsStep from "../../components/companySetup/steps/GoalsStep";
import DNAStep from "../../components/companySetup/steps/DNAStep";
import AIStep from "../../components/companySetup/steps/AIStep";
import FinishStep from "../../components/companySetup/steps/FinishStep";

const steps = [
  WelcomeStep,
  IdentityStep,
  BusinessStep,
  GoalsStep,
  DNAStep,
  AIStep,
  FinishStep,
];

export default function CompanySetup() {
  const [step, setStep] = useState(0);

  const [companyData, setCompanyData] = useState({
    // companies
    name: "",
    description: "",
    industry: "",
    company_size: "",

    // profile
    customers: "",
    acquisition_channels: [],

    annual_goal: "",
    challenges: [],

    decision_style: "",
    company_values: [],

    ai_expectations: "",
    proactivity_level: 3,
    ai_boundaries: "",
  });

  const nextStep = () => {
    if (step < steps.length - 1) {
      setStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (step > 0) {
      setStep((prev) => prev - 1);
    }
  };

  const CurrentStep = steps[step];

  return (
    <SetupLayout
      step={step}
      totalSteps={steps.length}
      onNext={nextStep}
      onBack={prevStep}
    >
      <CurrentStep
        companyData={companyData}
        setCompanyData={setCompanyData}
      />
    </SetupLayout>
  );
}