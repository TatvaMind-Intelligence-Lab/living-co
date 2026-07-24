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
  const [errors, setErrors] = useState({});

  const [companyData, setCompanyData] = useState({
    // Company
    name: "",
    description: "",
    industry: "",
    company_size: "",

    // Business
    customers: [],
    acquisition_channels: [],

    // Goals
    annual_goal: "",
    challenges: [],

    // DNA
    decision_style: "",
    company_values: [],

    // AI
    ai_expectations: "",
    proactivity_level: 5,
    ai_boundaries: "",
  });

  const validateStep = () => {
    const newErrors = {};

    switch (step) {
      // Welcome
      case 0:
        break;

      // Company Identity
      case 1:
        if (!companyData.name.trim())
          newErrors.name = "Company name is required.";

        if (!companyData.description.trim())
          newErrors.description = "Please describe your company.";
        else if (companyData.description.trim().length < 20)
          newErrors.description =
            "Description should be at least 20 characters.";

        if (!companyData.industry)
          newErrors.industry = "Please select an industry.";

        if (!companyData.company_size)
          newErrors.company_size = "Select your company size.";

        break;

      // Customers & Business
      case 2:
        if (companyData.customers.length === 0)
          newErrors.customers = "Select at least one customer type.";

        if (companyData.acquisition_channels.length === 0)
          newErrors.acquisition_channels =
            "Select at least one acquisition channel.";

        break;

      // Goals
      case 3:
        if (!companyData.annual_goal.trim())
          newErrors.annual_goal = "Tell us your primary business goal.";
        else if (companyData.annual_goal.trim().length < 20)
          newErrors.annual_goal = "Goal should contain at least 20 characters.";

        if (companyData.challenges.length === 0)
          newErrors.challenges = "Select at least one challenge.";

        break;

      // DNA
      case 4:
        if (!companyData.decision_style)
          newErrors.decision_style = "Choose your decision-making style.";

        if (companyData.company_values.length === 0)
          newErrors.company_values = "Choose at least one company value.";

        break;

      // AI
      case 5:
        if (!companyData.ai_expectations.trim())
          newErrors.ai_expectations = "Tell us what you expect from your AI.";
        else if (companyData.ai_expectations.trim().length < 20)
          newErrors.ai_expectations =
            "Please provide a more detailed response.";

        break;

      default:
        break;
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    const isValid = validateStep();

    if (!isValid) return;

    if (step < steps.length - 1) {
      setStep((prev) => prev + 1);
    } else {
      console.log("Ready to create company");
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
        errors={errors}
        setErrors={setErrors}
      />
    </SetupLayout>
  );
}
