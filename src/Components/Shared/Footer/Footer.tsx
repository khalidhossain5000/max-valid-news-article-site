import { Link } from "react-router";

const footerLinks = {
  Company: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our Work", href: "/our-work" },
    { label: "Gallery", href: "/gallery" },
    { label: "Blog", href: "/blog" },
  ],
  Donate: [
    { label: "Donate", href: "/donate" },
    { label: "Blood Donate", href: "/blood-donate" },
    { label: "Blood Request", href: "/blood-request" },
  ],
  Others: [
    { label: "Contact", href: "/contact" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
};

const Footer = () => {
  return (
    <div className="bg-neutral-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-6 lg:px-8 xl:px-12 2xl:px-14 py-12">
        <div className="flex flex-col gap-10 lg:flex-row justify-center lg:justify-between">
          {/* logo + description */}
          <div className="max-w-md mx-auto text-center lg:text-left">
            <img
              src="/assets/logo.png"
              alt="Logo"
              className="h-10 w-10 rounded-full mx-auto lg:mx-0"
            />
            <p className="mt-4 text-sm leading-relaxed text-[#fdfdfd] inter">
              This institution is striving to build an ideal welfare society by
              following the footsteps of the Prophet of Humanity, the Messenger
              of Human Freedom and Peace, the ideal of human service, the
              Prophet Muhammad (PBUH), in the service of humanity.
            </p>
          </div>

          {/* link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 ">
            {Object.entries(footerLinks).map(([title, links]) => (
              <nav key={title} aria-label={`${title} links`}>
                <h3 className="mb-3 text-sm font-semibold text-[#fdfdfd] text-center lg:text-left">
                  {title}
                </h3>
                <ul className="flex flex-col items-center lg:items-start gap-2.5">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        className="text-sm text-[#c1c4c4] transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>
      </div>

      {/* bottom bar */}
      <div className="border-t border-gray-800 px-6 py-5 text-center text-sm text-[#c2c2c2]">
        © {new Date().getFullYear()} Bandhan Paribar. All rights reserved
      </div>
    </div>
  );
};

export default Footer;
