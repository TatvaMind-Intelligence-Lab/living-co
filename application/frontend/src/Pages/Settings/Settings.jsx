import { useState } from "react";

import CompanyInfoForm from "../../components/company/forms/CompanyInfoForm";
import ProfileForm from "../../components/company/forms/ProfileForm";
import AIPreferencesForm from "../../components/company/forms/AIPreferencesForm";

import WorkspaceCard from "../../components/company/settings/WorkspaceCard";
import GeneralSettingCard from "../../components/company/settings/GeneralSettingCar"
import DangerZone from "../../components/company/settings/DangerZone";

import SaveBar from "../../components/common/SaveBar";

export default function Settings() {
  const [settings, setSettings] = useState({
    company: {
      name: "",
      industry: "",
      company_size: "",
      description: "",
    },

    profile: {
      annual_goal: "",
      customers: [],
      company_values: [],
      challenges: [],
    },

    ai: {
      ai_expectations: "",
      ai_roles: [],
      proactive_ai: true,
      weekly_reports: true,
      smart_notifications: true,
    },
  });

  const [loading, setLoading] = useState(false);

  // -----------------------------
  // Update Handlers
  // -----------------------------

  const updateCompany = (data) => {
    setSettings((prev) => ({
      ...prev,
      company: data,
    }));
  };

  const updateProfile = (data) => {
    setSettings((prev) => ({
      ...prev,
      profile: data,
    }));
  };

  const updateAI = (data) => {
    setSettings((prev) => ({
      ...prev,
      ai: data,
    }));
  };

  // -----------------------------
  // Save
  // -----------------------------

  const handleSave = async () => {
    setLoading(true);

    try {
      console.log("Settings Payload");

      console.log(settings);

      /*
      await updateSettings(settings);
      */

      alert("Settings saved successfully.");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // -----------------------------
  // Cancel
  // -----------------------------

  const handleCancel = () => {
    window.location.reload();
  };

  return (
    <div className="relative mx-auto max-w-6xl pb-36">
      {/* Header */}

      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900">Company Settings</h1>

        <p className="mt-2 max-w-3xl text-gray-500">
          Configure your company information, business profile, AI preferences,
          and workspace settings.
        </p>
      </div>

      {/* Content */}

      <div className="space-y-8">
        <CompanyInfoForm formData={settings.company} onChange={updateCompany} />

        <ProfileForm formData={settings.profile} onChange={updateProfile} />

        <AIPreferencesForm formData={settings.ai} onChange={updateAI} />

        <WorkspaceCard />

        <GeneralSettingCard />

        <DangerZone />
      </div>

      {/* Save Bar */}

      <SaveBar loading={loading} onSave={handleSave} onCancel={handleCancel} />
    </div>
  );
}
