import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import CompanySetup from "./pages/CompanySetup/CompanySetup";
import AuthCallback from "./pages/AuthCallback/AuthCallback";

import ProtectedRoute from "./routes/ProtectedRoute";
import OnboardingGuard from "./routes/OnboardingGuard";

function App() {
  return (
    <Routes>
      {/* Default */}
      <Route path="/" element={<Navigate to="/dashboard" replace />} />

      {/* Login */}
      <Route path="/login" element={<Login />} />

      {/* OAuth Callback */}
      <Route path="/auth/callback" element={<AuthCallback />} />

      {/* Company Setup */}
      <Route
        path="/company/setup"
        element={
          <ProtectedRoute>
            <OnboardingGuard requireCompany={false}>
              <CompanySetup />
            </OnboardingGuard>
          </ProtectedRoute>
        }
      />

      {/* Dashboard */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <OnboardingGuard requireCompany={true}>
              <Dashboard />
            </OnboardingGuard>
          </ProtectedRoute>
        }
      />

      {/* Catch All */}
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}

export default App;
