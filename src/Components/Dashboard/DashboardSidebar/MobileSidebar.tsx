import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { Link, useLocation } from "react-router";
import Drawer from "../../Shared/Drawer/Drawer";
import { sidebarLinks } from "./SIdebarLinks";

const MobileSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="lg:hidden">
      {/* hamburger button */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Open menu"
        className="text-2xl text-gray-700"
      >
        <IoMenu />
      </button>

      <Drawer
        isOpen={isOpen}
        onClose={closeMenu}
        side="left"
        panelClassName="bg-white"
      >
        <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
          <img src="/assets/logo.png" alt="Logo" className="h-9 w-9" />
          <button
            type="button"
            onClick={closeMenu}
            aria-label="Close menu"
            className="text-2xl text-gray-900"
          >
            <IoClose />
          </button>
        </div>

        <nav className="px-3 py-4">
          <ul className="flex flex-col gap-1">
            {sidebarLinks.map((link) => {
              const isActive = pathname === link.href;
              const Icon = link.icon;

              return (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    onClick={closeMenu}
                    className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? "bg-primary text-white"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <Icon className="shrink-0 text-lg" />
                    <span className="truncate">{link.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </Drawer>
    </div>
  );
};

export default MobileSidebar;
