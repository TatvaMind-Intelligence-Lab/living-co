import {
  LayoutDashboard,
  Bot,
  BookOpen,
  FileText,
  CheckSquare,
  Users,
  Settings,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const menu = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    title: "AI Co-Founder",
    icon: Bot,
    path: "/dashboard/ai",
  },
  {
    title: "Knowledge",
    icon: BookOpen,
    path: "/dashboard/knowledge",
  },
  {
    title: "Documents",
    icon: FileText,
    path: "/dashboard/documents",
  },
  {
    title: "Tasks",
    icon: CheckSquare,
    path: "/dashboard/tasks",
  },
  {
    title: "Team",
    icon: Users,
    path: "/dashboard/team",
  },
  {
    title: "Settings",
    icon: Settings,
    path: "/dashboard/settings",
  },
];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-72 border-r border-gray-200 bg-white">

      {/* Logo */}

      <div className="border-b border-gray-100 p-8">

        <h1 className="text-2xl font-bold">
          Living Co
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          AI Co-Founder
        </p>

      </div>

      {/* Navigation */}

      <nav className="mt-8 px-4">

        {menu.map((item) => {

          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `mb-2 flex items-center rounded-xl px-4 py-3 transition ${
                  isActive
                    ? "bg-black text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              <Icon className="mr-3 h-5 w-5" />

              {item.title}

            </NavLink>
          );
        })}

      </nav>

    </aside>
  );
}