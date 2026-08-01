import { useState } from "react";
import { Link, useLocation } from "react-router";
import { IoMenu } from "react-icons/io5";
import { sidebarLinks } from "./SIdebarLinks";
import { FaUser } from "react-icons/fa";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { pathname } = useLocation();

  return (
    <aside
      className={`hidden h-screen shrink-0 border-r border-gray-100 bg-background transition-all duration-300 lg:block ${
        isCollapsed ? "w-20" : "w-64"
      }`}
    >
      {/* header logo + collapse toggle */}
      <div className="flex items-center justify-between border-b border-gray-100 px-4 py-4">
        {!isCollapsed && (
          <img src="/assets/logo.png" alt="Logo" className="h-9 w-9" />
        )}
        <button
          type="button"
          onClick={() => setIsCollapsed((prev) => !prev)}
          aria-label="Toggle sidebar"
          className="text-xl text-gray-600 hover:text-gray-900"
        >
          <IoMenu />
        </button>
      </div>

      {/* nav links */}
      <nav className="px-3 py-4">
        <ul className="flex flex-col gap-1">
          {sidebarLinks.map((link) => {
            const isActive = pathname === link.href;
            const Icon = link.icon;

            return (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "bg-primary text-white"
                      : "text-gray-700 hover:bg-gray-50"
                  } ${isCollapsed ? "justify-center" : ""}`}
                  title={isCollapsed ? link.label : undefined}
                >
                  <Icon className="shrink-0 text-lg" />
                  {!isCollapsed && (
                    <span className="truncate">{link.label}</span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* user mock info */}

      <div
        className={`absolute bottom-0 left-0 right-0 flex items-center gap-3 border border-gray-200 px-4 py-4 transition-all duration-300 shadow-sm rounded-lg ${
          isCollapsed ? "justify-center w-20" : "w-64"
        }`}
      >
        {/* avatar */}
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-300">
          <FaUser className="text-black" />
        </div>

        {/* info*/}
        {!isCollapsed && (
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-gray-900">
              Super Admin
            </p>
            <p className="truncate text-xs text-gray-500">
              super.admin@example.com
            </p>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
