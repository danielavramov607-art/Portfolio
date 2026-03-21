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
    id: "taskflow",
    title: "TaskFlow",
    description:
      "A real-time collaborative task management app inspired by Linear/Trello. Features a GraphQL API with WebSocket subscriptions for live updates across tabs, drag-and-drop Kanban boards, role-based access control (Owner/Editor/Viewer), Google OAuth, threaded comments, file attachments via Cloudinary, and a full notification system. Containerised with Docker.",
    techTags: ["React", "TypeScript", "GraphQL", "Apollo", "Node.js", "MongoDB", "Docker"],
    githubUrl: "https://github.com/danielavramov607-art/TaskFlow",
    liveDemoUrl: "https://task-flow-tan-one.vercel.app/",
  },
];
