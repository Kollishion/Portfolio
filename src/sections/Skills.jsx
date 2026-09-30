import {
  FaJava,
  FaReact,
  FaDocker,
  FaAws,
  FaSitemap,
  FaProjectDiagram,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiTypescript,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiPrisma,
} from "react-icons/si";

const skills = [
  { name: "Spring Boot", Icon: SiSpringboot, color: "#6DB33F" },
  { name: "Java", Icon: FaJava, color: "#ED8B00" },
  { name: "React", Icon: FaReact, color: "#61DAFB" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { name: "Docker", Icon: FaDocker, color: "#2496ED" },
  { name: "AWS", Icon: FaAws, color: "#FF9900" },
  { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
  { name: "Prisma", Icon: SiPrisma, color: "#E2E8F0" },
  { name: "DSA", Icon: FaProjectDiagram, color: "#10b981" },
  { name: "System Design", Icon: FaSitemap, color: "#34d399" },
];

const displayFont = {
  fontFamily: '"Anton", Impact, "Arial Narrow Bold", sans-serif',
};

const Skills = () => {
  return (
    <section id="skills" className="px-6 md:px-16 py-20">
      <h2
        style={displayFont}
        className="text-4xl md:text-6xl uppercase tracking-wide text-white mb-10"
      >
        Skills
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {skills.map(({ name, Icon, color }) => (
          <div
            key={name}
            className="flex flex-col items-center justify-center gap-3 py-8 rounded-xl border border-white/10 bg-[#141414]"
          >
            <Icon className="text-4xl" style={{ color }} />
            <span className="text-sm font-medium text-slate-200">{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

