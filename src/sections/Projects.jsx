const projects = [
  {
    title: "Project One",
    description: "One or two lines about what this project does.",
    stack: ["React", "Node", "MongoDB"],
    code: "#",
    size: "large",
  },
  {
    title: "Project Two",
    stack: ["Java", "Spring"],
    code: "#",
  },
  {
    title: "Project Three",
    stack: ["React", "Tailwind"],
    code: "#",
  },
  {
    title: "Project Four",
    stack: ["Node", "Express", "MongoDB"],
    code: "#",
    size: "wide",
  },
  {
    title: "Project Five",
    stack: ["Java"],
    code: "#",
  },
  {
    title: "Project Six",
    stack: ["React"],
    code: "#",
  },
  {
    title: "Project Seven",
    stack: ["Node", "MongoDB"],
    code: "#",
  },
  {
    title: "Project Eight",
    stack: ["React", "Node"],
    code: "#",
  },
];

const sizes = {
  large: "col-span-2 md:row-span-2",
  wide: "col-span-2",
};

const displayFont = {
  fontFamily: '"Anton", Impact, "Arial Narrow Bold", sans-serif',
};

const Projects = () => {
  return (
    <section id="projects" className="px-6 md:px-16 py-20">
      <h2
        style={displayFont}
        className="text-4xl md:text-6xl uppercase tracking-wide text-white mb-10"
      >
        Projects
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 grid-flow-dense auto-rows-[200px] md:auto-rows-[240px] gap-4">
        {projects.map((p) => (
          <article
            key={p.title}
            className="relative overflow-hidden rounded-xl border border-white/10 bg-[#141414]"
          >
            <div className="absolute inset-0 bg-linear-to-br from-emerald-900 to-[#0a0a0a] flex items-center justify-center text-slate-600 text-sm">
              Screenshot
            </div>

            <div className="absolute inset-x-0 bottom-0 p-4 bg-linear-to-t from-black/90 via-black/60 to-transparent">
              <h3 className="text-lg font-semibold text-white">{p.title}</h3>

              {p.description && (
                <p className="mt-1 text-sm text-slate-300 hidden md:block">
                  {p.description}
                </p>
              )}

              <div className="mt-2 flex flex-wrap items-center gap-2">
                {p.stack.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-0.5 rounded-full border border-green-400/40 text-green-400"
                  >
                    {t}
                  </span>
                ))}
                <a
                  href={p.code}
                  target="_blank"
                  rel="noreferrer"
                  className="ml-auto text-xs font-medium text-slate-200 hover:text-green-400 transition-colors"
                >
                  Code
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
