const displayFont = {
  fontFamily: '"Anton", Impact, "Arial Narrow Bold", sans-serif',
};

const internship = {
  company: "Zidio Development",
  role: "Web Development Intern",
  period: "05/2024 – 08/2024",
  location: "Remote",
  points: [
    "Built a job portal where users can search and apply for jobs, with a built-in resume builder.",
    "Designed the REST API with Node.js, Express and MongoDB, and the React frontend that uses it.",
    "Added PDF and PNG resume export, with document generation running asynchronously so the page stays responsive.",
  ],
  stack: ["React", "Node.js", "MongoDB", "Express.js"],
};

const openSource = {
  project: "Apache Fineract Consumer Facing",
  repo: "https://github.com/apache/fineract-consumer-facing",
  summary:
    "Contributor to the Apache Fineract consumer-facing banking project. Both pull requests below were reviewed by maintainers and merged.",
  contributions: [
    {
      title: "CQRS naming for command-side data classes",
      pr: "#196",
      url: "https://github.com/apache/fineract-consumer-facing/pull/196",
      points: [
        "Renamed command-side data classes to follow the project's CQRS naming convention.",
        "Removed the ArchUnit freeze wrapper and its frozen-violations store, as requested in review.",
        "Updated the architecture docs (modules.adoc) to match, and rebased onto the latest main.",
      ],
      stack: ["Java", "ArchUnit", "AsciiDoc"],
    },
    {
      title: "Move i18n and device fingerprint onto adapters",
      pr: "#205",
      issue: "#173",
      url: "https://github.com/apache/fineract-consumer-facing/pull/205",
      points: [
        "Moved I18nService and the device fingerprint logic onto the I18N and STORAGE adapters in the Angular frontend.",
        "Updated every caller of DeviceFingerprint, including the BFF API clients and the audit service.",
        "Passed CI/CD, Playwright end-to-end tests and linting checks before merge.",
      ],
      stack: ["Angular", "TypeScript", "Playwright"],
    },
  ],
};

const Tag = ({ children }) => (
  <span className="px-2.5 py-1 text-xs font-medium text-green-300 bg-green-400/10 border border-green-400/30 rounded-full">
    {children}
  </span>
);

const Points = ({ items }) => (
  <ul className="mt-3 space-y-2 text-slate-300">
    {items.map((text) => (
      <li key={text} className="flex gap-3">
        <span className="mt-2 w-1.5 h-1.5 bg-green-400 rounded-full shrink-0" />
        <span>{text}</span>
      </li>
    ))}
  </ul>
);

const Entry = ({ children }) => (
  <div className="relative pl-8 pb-12 last:pb-0 border-l-2 border-green-400/30">
    <span className="absolute -left-[9px] top-1.5 w-4 h-4 bg-green-400 rounded-full shadow-[0_0_14px_rgba(74,222,128,0.6)]" />
    {children}
  </div>
);

const GroupTitle = ({ children }) => (
  <h3 className="text-2xl md:text-3xl text-white mb-8" style={displayFont}>
    {children}
  </h3>
);

const Experience = () => {
  return (
    <section id="experience" className="relative py-16 px-6 md:px-16 lg:px-18">
      <h2
        style={displayFont}
        className="text-4xl sm:text-5xl md:text-6xl uppercase tracking-wide text-white"
      >
        Experience
      </h2>

      <div className="mt-12 grid gap-16 lg:grid-cols-2 lg:gap-20">
        <div>
          <GroupTitle>Internship</GroupTitle>
          <Entry>
            <h4 className="text-xl font-semibold text-gray-300">
              {internship.role}
            </h4>
            <p className="text-green-400 font-medium">{internship.company}</p>
            <p className="text-sm text-slate-400 mt-1">
              {internship.period}
              {internship.location && ` · ${internship.location}`}
            </p>
            <Points items={internship.points} />
            <div className="mt-4 flex flex-wrap gap-2">
              {internship.stack.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </Entry>
        </div>

        <div>
          <GroupTitle>Open source</GroupTitle>
          <p className="-mt-2 mb-8 text-slate-300 max-w-2xl">
            <a
              href={openSource.repo}
              target="_blank"
              rel="noreferrer"
              className="text-green-400 font-semibold border-b border-green-400/40 hover:border-green-400 transition-colors"
            >
              {openSource.project}
            </a>
            . {openSource.summary}
          </p>

          {openSource.contributions.map((c) => (
            <Entry key={c.pr}>
              <h4 className="text-xl font-semibold text-white">{c.title}</h4>
              <p className="text-sm text-slate-400 mt-1">
                <a
                  href={c.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-green-400 hover:underline"
                >
                  Pull request {c.pr}
                </a>
                {c.issue && ` for issue ${c.issue}`} · Merged
              </p>
              <Points items={c.points} />
              <div className="mt-4 flex flex-wrap gap-2">
                {c.stack.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </Entry>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
