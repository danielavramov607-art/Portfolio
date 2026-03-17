export type SkillCategory = "frontend" | "backend" | "database" | "tooling";
export type SkillLevel = "Advanced" | "Intermediate" | "Familiar";

export interface Skill {
  name: string;
  category: SkillCategory;
  level: SkillLevel;
}

export const skills: Skill[] = [
  // Frontend
  { name: "React / Next.js", category: "frontend", level: "Advanced" },
  { name: "TypeScript", category: "frontend", level: "Advanced" },
  { name: "Tailwind CSS", category: "frontend", level: "Advanced" },
  { name: "HTML & CSS", category: "frontend", level: "Advanced" },
  // Backend
  { name: "Node.js / Express", category: "backend", level: "Advanced" },
  { name: "REST APIs", category: "backend", level: "Advanced" },
  { name: "GraphQL", category: "backend", level: "Intermediate" },
  // Database
  { name: "PostgreSQL", category: "database", level: "Advanced" },
  { name: "MongoDB", category: "database", level: "Intermediate" },
  // Tooling
  { name: "Git / GitHub", category: "tooling", level: "Advanced" },
  { name: "Docker", category: "tooling", level: "Intermediate" },
  { name: "Linux / CLI", category: "tooling", level: "Intermediate" },
];

export const categoryLabels: Record<SkillCategory, string> = {
  frontend: "Frontend",
  backend: "Backend",
  database: "Databases",
  tooling: "Tooling",
};
