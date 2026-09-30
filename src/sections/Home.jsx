import Hero from "../assets/Hero2.png";
import { TypeAnimation } from "react-type-animation";
import HeroButton from "../components/Button";
import { HashLink } from "react-router-hash-link";

const displayFont = {
  fontFamily: '"Anton", Impact, "Arial Narrow Bold", sans-serif',
};

const GithubIcon = () => (
  <svg
    viewBox="0 0 16 16"
    fill="currentColor"
    className="w-6 h-6"
    aria-hidden="true"
  >
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg
    viewBox="0 0 16 16"
    fill="currentColor"
    className="w-6 h-6"
    aria-hidden="true"
  >
    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 01.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
  </svg>
);

const Home = () => {
  const btnText1 = "My projects";
  const btnText2 = "Get in touch";

  const handleClick1 = () => {
    console.log("clicked on button 1");
  };
  const handleClick2 = () => {
    console.log("clicked on button 2");
  };

  return (
    <div className="relative min-h-[88vh] flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-16 lg:gap-24 md:pr-16 py-10 isolate">
      <div className="absolute top-1/2 left-0 w-[400px] h-[160px] -translate-y-1/2 bg-green-400/40 rounded-full blur-[150px] pointer-events-none z-2 animate-glow" />

      <div className="relative z-10 shrink-0 h-[340px] md:h-[60vh] max-h-[520px] aspect-[4/5] p-[3px] rounded-r-full bg-gradient-to-br from-green-400 to-emerald-900 shadow-[0_0_60px_rgba(74,222,128,0.25)]">
        <div className="w-full h-full rounded-r-full overflow-hidden bg-[#141414]">
          <img
            src={Hero}
            alt="Abhishek with a coffee"
            style={{ objectPosition: "50% 60%" }}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="relative z-10 flex-1 px-6 md:px-0">
        <h1
          style={displayFont}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase leading-none tracking-wide text-white"
        >
          Hey, I'm Abhishek
        </h1>

        <div className="mt-6 flex items-center gap-3 text-xl md:text-2xl text-green-400 font-semibold uppercase tracking-widest min-h-[2rem]">
          <span className="inline-block w-3.5 h-3.5 bg-green-400 shrink-0" />
          <TypeAnimation
            sequence={[
              "MERN Stack Developer",
              2000,
              "Java Enthusiast",
              2000,
              "Problem Solver",
              2000,
              "Full Stack Explorer",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>

        <p className="mt-4 text-lg text-slate-300 max-w-xl">
          I build full-stack web apps with React, Node and MongoDB, turning
          ideas into code and coffee into features.
        </p>

        <div className="flex items-center gap-3 mt-4">
          <HashLink smooth to="#projects">
            <HeroButton text={btnText1} onClick={handleClick1} />
          </HashLink>
          <HashLink smooth to="#contact">
            <HeroButton text={btnText2} onClick={handleClick2} />
          </HashLink>
        </div>

        <div className="mt-8 flex items-center gap-5 text-slate-300">
          <a
            href="https://github.com/kollishion"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hover:text-green-400 transition-colors"
          >
            <GithubIcon />
          </a>
          <a
            href="//www.linkedin.com/in/abhishek-bose-0066b7270/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hover:text-green-400 transition-colors"
          >
            <LinkedinIcon />
          </a>
          <a
            href="/resume.pdf"
            download
            className="text-sm font-medium border-b border-slate-500 hover:text-green-400 hover:border-green-400 transition-colors"
          >
            Download resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
