export interface Project {
  id: string;
  title: string;
  description: string;
  techTags: string[];
  githubUrl: string;
  liveDemoUrl: string;
  inProgress?: boolean;
}

export const projects: Project[] = [
  {
    id: "cleaning-site",
    title: "Cleaning Services Website",
    description:
      "A production business website built for a local cleaning company. Features a fully responsive layout, services & pricing section, and a customer contact form. Live and serving real customers.",
    techTags: ["Next.js", "React", "Tailwind CSS"],
    githubUrl: "https://github.com/danielavramov607-art/chisto-pod-tepeto",
    liveDemoUrl: "https://www.chistopodtepeto.com",
  },
  {
    id: "finance-flow",
    title: "YourFinanceFlow",
    description:
      "A full-stack personal finance tracker featuring Google OAuth & email auth, transaction management with filters/search/CSV export, PDF & CSV bank statement import with AI-powered categorisation (Claude API), and a real-time dashboard with ApexCharts.",
    techTags: ["Next.js", "TypeScript", "PostgreSQL", "Claude API", "ApexCharts"],
    githubUrl: "https://github.com/danielavramov607-art/YourFinanceFlow",
    liveDemoUrl: "https://yourfinanceflow.app/",
    inProgress: true,
  },
  {
    id: "devops-dashboard",
    title: "DevOps Dashboard",
    description:
      "An internal monitoring dashboard for tracking deployment pipelines, server health, and application metrics in real time. Containerised with Docker for easy self-hosting.",
    techTags: ["React", "Express", "Docker", "Tailwind CSS", "Chart.js"],
    githubUrl: "#",
    liveDemoUrl: "#",
    inProgress: true,
  },
];
