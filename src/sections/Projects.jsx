import vectorDb from "../assets/VectorDB.png";
import collabEditor from "../assets/Collab_Editor.png";
import mentourAi from "../assets/MentourAI.png";
import upi from "../assets/UPI.png";
import chatapp from "../assets/chatapp.png";
import hr_ms from "../assets/HR_Management_System.png";
const projects = [
  {
    title: "VectorDB",
    description:
      "A Java vector database built from scratch with HNSW, KD-Tree, and Brute-Force similarity search, supporting multiple distance metrics and REST APIs.",
    stack: ["Java", "HTML", "RAG Pipeline"],
    code: "https://github.com/Kollishion/VectorDB",
    image: vectorDb,
  },
  {
    title: "Collab Editor",
    description: "A real-time collaborative code editor.",
    stack: [
      "AWS",
      "Amazon ECS",
      "Amazon ECR",
      "Typescript",
      "Javascript",
      "React",
      "HTML",
      "CSS",
      "YJS",
      "Docker",
      "Socket.io",
    ],
    code: "https://github.com/Kollishion/Collab_Editor",
    image: collabEditor,
  },
  {
    title: "MentourAI",
    description:
      "MentourAI is a full-stack AI-powered application that combines a custom-trained AI model with a modern web interface. The AI model was developed by my teammate, while I built the complete full-stack integration, including the frontend, backend, API integration, authentication, and deployment-ready architecture.",
    stack: [
      "React",
      "Typescript",
      "Docker",
      "Python",
      "FastAPI",
      "REST APIs",
      "AI",
      "OLLAMA",
      "MySQL",
    ],
    code: "https://github.com/Kollishion/MentourAi",
    image: mentourAi,
  },
  {
    title: "UPI without Internet",
    description:
      "UPI without internet solving three main problems in real world, and making payments available through bluetooth instead of Wi-Fi",
    stack: ["Java", "SpringBoot", "HTML", "Idempotency", "REST APIs"],
    code: "https://github.com/Kollishion/UPI_Without_Internet",
    image: upi,
  },
  {
    title: "ChatApp",
    description:
      "A chat app using MERN stack, socket IO, bcrypt for hashing passwords, jwt token for tracking user and lots more.",
    stack: [
      "HTML",
      "CSS",
      "Javascript",
      "React",
      "Redux",
      "Socket.io",
      "Express",
      "Node",
    ],
    code: "https://github.com/Kollishion/Chat_App",
    image: chatapp,
  },
  {
    title: "HR Management System",
    description:
      "Led backend development of an HR management system in TypeScript, with a MySQL database modelled and queried through Prisma.",
    stack: ["Docker", "Typescript", "Prisma", "MySQL", "Python"],
    code: "https://github.com/Om99roy/Human-Resource-Management",
    image: hr_ms,
  },
];

const MAX_TAGS = 8;

const displayFont = {
  fontFamily: '"Anton", Impact, "Arial Narrow Bold", sans-serif',
};

const gridPattern = {
  backgroundImage:
    "radial-gradient(rgba(74,222,128,0.18) 1px, transparent 1px)",
  backgroundSize: "22px 22px",
};

const ArrowIcon = () => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4"
    aria-hidden="true"
  >
    <path d="M4 12L12 4M5.5 4H12v6.5" />
  </svg>
);

const Projects = () => {
  return (
    <section id="projects" className="px-6 md:px-16 py-20">
      <h2
        style={displayFont}
        className="text-4xl md:text-6xl uppercase tracking-wide text-white"
      >
        Projects
      </h2>
      <p className="mt-4 mb-12 max-w-2xl text-slate-400">
        A few things I have built...
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p, i) => {
          const shown = p.stack.slice(0, MAX_TAGS);
          const extra = p.stack.length - shown.length;

          return (
            <article
              key={p.title}
              className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#141414]"
            >
              <div className="relative aspect-video shrink-0 overflow-hidden border-b border-white/10 bg-gradient-to-br from-emerald-900/70 via-[#0f1a14] to-[#0a0a0a]">
                {p.image ? (
                  <img
                    src={p.image}
                    alt={p.title}
                    className="absolute inset-0 w-full h-full object-cover object-top"
                  />
                ) : (
                  <>
                    <div className="absolute inset-0" style={gridPattern} />
                    <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-green-400/20 blur-3xl" />
                    <span
                      style={displayFont}
                      className="absolute bottom-3 left-5 text-8xl leading-none text-white/10"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </>
                )}
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-xl font-semibold text-white">{p.title}</h3>

                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {p.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {shown.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-0.5 rounded-full border border-green-400/40 text-green-400 bg-green-400/5"
                    >
                      {t}
                    </span>
                  ))}
                  {extra > 0 && (
                    <span className="text-xs px-2.5 py-0.5 rounded-full border border-white/15 text-slate-400">
                      +{extra}
                    </span>
                  )}
                </div>

                <a
                  href={p.code}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto pt-5 inline-flex items-center gap-2 text-sm font-medium text-slate-200"
                >
                  View code
                  <ArrowIcon />
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
