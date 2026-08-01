import { useState } from "react";
import { IoClose, IoChevronDownSharp } from "react-icons/io5";
import { Link } from "react-router";
import { FaList } from "react-icons/fa6";
import { navLinks } from "./navLinks";
import LanguageToggle from "./LanguageToggle";
import SecondaryBtn from "../Button/SecondaryBtn";
import PrimaryBtn from "../Button/PrimaryBtn";
import Drawer from "../Drawer/Drawer";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="xl:hidden">
      {/* hamburger button */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Open menu"
        className="text-2xl text-[#2494cc] lg:text-black"
      >
        <FaList />
      </button>

      <Drawer
        isOpen={isOpen}
        onClose={closeMenu}
        side="right"
        panelClassName="bg-primary-hover backdrop-blur-2xl"
      >
        <div className="flex items-center justify-between border-b border-gray-50 px-5 py-4">
          <img src="/assets/logo.png" alt="Logo" className="h-10 w-10" />
          <button
            type="button"
            onClick={closeMenu}
            aria-label="Close menu"
            className="text-2xl text-gray-900"
          >
            <IoClose />
          </button>
        </div>

        <nav className="px-5 py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link, i) => (
              <li
                key={i}
                className="inter flex items-center justify-between text-base font-medium text-gray-900"
              >
                <Link to={link.href} onClick={closeMenu}>
                  {link.label}
                </Link>
                {link.isDropdown && <IoChevronDownSharp />}
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col gap-3 border-t border-gray-100 px-5 py-4">
          <div className="mx-auto">
            <LanguageToggle />
          </div>
          <SecondaryBtn className="rounded-[14px] lg:font-medium text-lg px-6 py-2 hover:bg-primary hover:text-white transition-transform hover:-translate-y-0.5 hover:shadow-[0_22px_34px_-8px_rgba(0,0,0,0.5)] cursor-pointer duration-500">
            Sign in
          </SecondaryBtn>

          <PrimaryBtn className="rounded-xl bg-linear-to-b from-primary to-sky-600 px-8 py-3 text-base lg:font-semibold text-white shadow-[0_18px_30px_-8px_rgba(0,0,0,0.45)] transition-transform hover:-translate-y-0.5 hover:shadow-[0_22px_34px_-8px_rgba(0,0,0,0.5)] active:shadow-[0_10px_18px_-6px_rgba(0,0,0,0.4)] duration-500 hover:bg-sky-600 active:translate-y-0 cursor-pointer">
            Donate
          </PrimaryBtn>
        </div>
      </Drawer>
    </div>
  );
};

export default MobileNav;