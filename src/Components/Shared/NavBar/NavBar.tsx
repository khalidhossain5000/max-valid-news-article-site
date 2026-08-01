import { IoChevronDownSharp } from "react-icons/io5";
import { navLinks } from "./navLinks";
import { Link } from "react-router";
import LanguageToggle from "./LanguageToggle";
import SecondaryBtn from "../Button/SecondaryBtn";
import PrimaryBtn from "../Button/PrimaryBtn";

const NavBar = () => {
  return (
    <section>
      {/* logo */}
      <div>
        <img src="/assets/logo.png" alt="Logo" />
      </div>

      {/* navitems */}
      <nav>
        <ul>
          {navLinks.map((link, i) => (
            <li key={i} className="inter text-muted text-sm lg:text-xl font-medium">
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
