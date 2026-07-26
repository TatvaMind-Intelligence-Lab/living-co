import Sidebar from "./Sidebar";
import TopNavbar from "./TopNavbar";

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Fixed Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="ml-72">

        <TopNavbar />

        <main className="p-8">
          {children}
        </main>

      </div>

    </div>
  );
}