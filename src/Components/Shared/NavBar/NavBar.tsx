import { IoChevronDownSharp } from "react-icons/io5";
import { navLinks } from "./navLinks";
import { Link } from "react-router";
import LanguageToggle from "./LanguageToggle";
import SecondaryBtn from "../Button/SecondaryBtn";
import PrimaryBtn from "../Button/PrimaryBtn";

const NavBar = () => {
  return (
    <section className="max-w-[1600px] mx-auto flex items-center justify-between bg-transparent rounded-full border border-white shaodw-sm">
      {/* logo */}
      <div>
        <img src="/assets/logo.png" alt="Logo" className="w-16 h-16" />
      </div>

      {/* navitems */}
      <nav>
        <ul className="flex items-center gap-4 ">
          {navLinks.map((link, i) => (
            <li
              key={i}
              className="inter text-muted text-sm lg:text-xl font-medium flex items-center gap-1"
            >
              <Link to={link.href}>{link.label}</Link>
              {link.isDropdown && <IoChevronDownSharp />}
            </li>
          ))}
        </ul>
      </nav>
      {/* translater and buttons */}
      <div>
        <LanguageToggle />
        <SecondaryBtn>Sign In </SecondaryBtn>

        <PrimaryBtn>Sign U</PrimaryBtn>
      </div>
    </section>
  );
};

export default NavBar;
