import { useState } from "react";
import {  IoClose, IoChevronDownSharp } from "react-icons/io5";
import { Link } from "react-router";
import { navLinks } from "./navLinks";
import LanguageToggle from "./LanguageToggle";
import SecondaryBtn from "../Button/SecondaryBtn";
import PrimaryBtn from "../Button/PrimaryBtn";
import { FaList } from "react-icons/fa6";

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
        className="text-2xl text-[#2494cc]"
      >
        <FaList />
      </button>

      {/* backdrop */}
      {isOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 z-40 bg-black/40"
        />
      )}

      {/* slide-in drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-72 transform bg-primary-hover backdrop-blur-2xl shadow-lg transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
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
         <div className="mx-auto"> <LanguageToggle /></div>
          <SecondaryBtn>Sign In</SecondaryBtn>
          <PrimaryBtn>Sign Up</PrimaryBtn>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;