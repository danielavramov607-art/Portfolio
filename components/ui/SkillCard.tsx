import { Skill } from "@/data/skills";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiNodedotjs,
  SiExpress,
  SiGraphql,
  SiPostgresql,
  SiMongodb,
  SiGithub,
  SiDocker,
  SiLinux,
} from "react-icons/si";

const skillIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "React / Next.js": SiNextdotjs,
  "TypeScript": SiTypescript,
  "Tailwind CSS": SiTailwindcss,
  "HTML & CSS": SiHtml5,
  "Node.js / Express": SiNodedotjs,
  "REST APIs": SiExpress,
  "GraphQL": SiGraphql,
  "PostgreSQL": SiPostgresql,
  "MongoDB": SiMongodb,
  "Git / GitHub": SiGithub,
  "Docker": SiDocker,
  "Linux / CLI": SiLinux,
};

const categoryIconColor: Record<Skill["category"], string> = {
  frontend: "text-cyan-400",
  backend: "text-violet-400",
  database: "text-emerald-400",
  tooling: "text-orange-400",
};

interface SkillCardProps {
  skill: Skill;
}

export default function SkillCard({ skill }: SkillCardProps) {
  const Icon = skillIcons[skill.name];

  return (
    <div className="group rounded-xl border border-white/8 bg-black/40 p-4 flex items-center gap-3 transition-all duration-300 hover:border-accent/40 hover:bg-accent/5">
      {Icon && (
        <Icon className={`w-5 h-5 flex-shrink-0 ${categoryIconColor[skill.category]}`} />
      )}
      <span className="text-foreground text-sm font-medium group-hover:text-accent transition-colors duration-300 leading-tight">
        {skill.name}
      </span>
    </div>
  );
}
