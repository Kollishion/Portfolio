import Logo from "../assets/Logo.svg";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkUnderlineClass =
    "relative no-underline text-[var(--color-text)] text-lg font-semibold " +
    "after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] " +
    "after:w-full after:bg-[var(--color-text)] after:origin-left after:scale-x-0 " +
    "after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:bg-green-500";

  return (
    <nav className="w-full sticky top-4 z-20 px-[5vw] font-sans">
      <div className="backdrop-blur-md bg-[var(--color-bg)] shadow-[0_1px_10px_var(--accent-primary)]  rounded-2xl">
        <div className="container mx-auto px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src={Logo}
              alt="Logo"
              className="w-[40px] sm:w-[60px] md:w-[80px] object-contain"
            />
          </div>

          <div className="hidden sm:flex gap-12 items-center z-20">
            <HashLink smooth to="#about" className={linkUnderlineClass}>
              About
            </HashLink>
            <HashLink smooth to="#projects" className={linkUnderlineClass}>
              Projects
            </HashLink>
            <HashLink smooth to="#skills" className={linkUnderlineClass}>
              Skills
            </HashLink>
            <HashLink
              smooth
              to="#contact"
              className="px-5 py-2 rounded-lg border-2 border-green-400 text-green-400 text-lg font-semibold hover:bg-green-400 hover:text-black transition-colors"
            >
              Contact
            </HashLink>
          </div>

          <div className="sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[var(--color-text)] focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="sm:hidden px-4 pb-4 z-20">
            <div className="flex flex-col gap-2">
              <HashLink
                smooth
                to="#about"
                className="text-[var(--color-text)] text-lg font-semibold hover:text-green-400"
                onClick={() => setIsOpen(false)}
              >
                About
              </HashLink>
              <HashLink
                smooth
                to="#contact"
                className="text-[var(--color-text)] text-lg font-semibold hover:text-green-400"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </HashLink>
              <HashLink
                smooth
                to="#projects"
                className="text-[var(--color-text)] text-lg font-semibold hover:text-green-400"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </HashLink>
              <HashLink
                smooth
                to="#skills"
                className="text-[var(--color-text)] text-lg font-semibold hover:text-green-400"
                onClick={() => setIsOpen(false)}
              >
                Skills
              </HashLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
