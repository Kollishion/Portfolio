import { FaArrowRight } from "react-icons/fa";

const displayFont = {
  fontFamily: '"Anton", Impact, "Arial Narrow Bold", sans-serif',
};

const gridBackground = {
  backgroundImage:
    "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
  backgroundSize: "64px 64px",
};

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const Contact = () => {
  return (
    <footer
      id="contact"
      style={gridBackground}
      className="relative overflow-hidden px-6 md:px-16 pt-20 pb-8 border-t border-white/10"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
        <div>
          <span
            style={displayFont}
            className="text-2xl uppercase tracking-wide text-white"
          >
            Abhishek Bose
          </span>
        </div>

        <nav className="relative w-fit md:mx-auto px-6">
          <span className="absolute left-0 top-0 text-slate-400">[</span>
          <span className="absolute right-0 top-0 text-slate-400">]</span>
          <ul className="space-y-1.5 pr-10">
            {navLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="text-sm font-semibold uppercase tracking-wide text-slate-100"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:justify-self-end w-full md:max-w-sm">
          <h3
            style={displayFont}
            className="text-3xl md:text-4xl uppercase leading-none tracking-wide text-white"
          >
            Drop me a line
          </h3>
          <a
            href="mailto:your@email.com"
            className="mt-4 flex items-center justify-between rounded-full bg-green-400 pl-6 pr-2 py-2"
          >
            <span className="text-sm font-semibold uppercase text-black">
              your@email.com
            </span>
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-green-400">
              <FaArrowRight className="rotate-45" />
            </span>
          </a>
        </div>
      </div>

      <div className="mt-10 pt-[8vw] select-none">
        <h2
          style={{
            ...displayFont,
            fontSize: "15vw",
            transform: "scaleY(1.4) skewX(-12deg)",
            transformOrigin: "center bottom",
          }}
          className="whitespace-nowrap text-center uppercase leading-none text-green-400"
        >
          Coffee Coder
        </h2>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-xs font-semibold uppercase text-slate-300">
        <span>
          © {new Date().getFullYear()} Abhishek Bose / All rights reserved
        </span>

        <a
          href="/resume.pdf"
          download
          className="underline underline-offset-2 md:mx-auto w-fit"
        >
          Download resume
        </a>

        <div className="flex items-center gap-6 md:justify-self-end text-green-400">
          <a
            href="https://github.com/kollishion"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/abhishek-bose-0066b7270/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
