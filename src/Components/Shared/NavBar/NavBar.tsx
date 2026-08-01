import { IoChevronDownSharp } from "react-icons/io5";
import { navLinks } from "./navLinks";
import { Link } from "react-router";
import LanguageToggle from "./LanguageToggle";
import SecondaryBtn from "../Button/SecondaryBtn";
import PrimaryBtn from "../Button/PrimaryBtn";
import { useEffect, useState } from "react";
import MobileNav from "./MobileNav";

const NavBar = () => {
  //navbar sticky
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <section
      className={`mx-auto flex max-w-[1400px] items-center justify-between rounded-full xl:border xl:border-slate-300 xl:backdrop-blur-sm transition-colors duration-300 py-6 lg:py-12 xl:py-5 mt-3 px-4 sm:px-5 md:px-6 lg:px-8 xl:px-12 2xl:px-14${
        isScrolled
          ? "xl:border-gray-200 bg-white/20 backdrop-blur-md shadow-sm"
          : "xl:border-white bg-transparent"
      }`}
    >
      {/* logo */}
      <div className="hidden xl:block">
        <img src="/assets/logo.png" alt="Logo" className="w-10 h-10 rounded-full" />
      </div>

      {/* navitems */}
      <nav className="hidden xl:block">
        <ul className="flex items-center gap-4 ">
          {navLinks.map((link, i) => (
            <li
              key={i}
              className="inter text-text-muted text-sm lg:text-xl font-medium flex items-center gap-1"
            >
              <Link to={link.href}>{link.label}</Link>
              {link.isDropdown && <IoChevronDownSharp />}
            </li>
          ))}
        </ul>
      </nav>
      {/* translater and buttons */}
      <div className="hidden xl:flex items-center gap-4">
        <LanguageToggle />
        <SecondaryBtn className="rounded-[14px] lg:font-medium text-lg  px-6 py-2 hover:bg-primary hover:text-white transition-transform hover:-translate-y-0.5 hover:shadow-[0_22px_34px_-8px_rgba(0,0,0,0.5)] cursor-pointer duration-500">Sign in </SecondaryBtn>

        <PrimaryBtn className="rounded-xl bg-linear-to-b from-primary to-sky-600 px-8 py-3 text-base font-semibold text-white shadow-[0_18px_30px_-8px_rgba(0,0,0,0.45)] transition-transform  hover:-translate-y-0.5 hover:shadow-[0_22px_34px_-8px_rgba(0,0,0,0.5)] active:shadow-[0_10px_18px_-6px_rgba(0,0,0,0.4)]d duration-500 hover:bg-sky-600 active:translate-y-0 cursor-pointer">Donate</PrimaryBtn>

      </div>
      {/* hamburger menu */}
      <div className="ml-auto xl:hidden">
        <MobileNav />
      </div>
    </section>
  );
};

export default NavBar;
