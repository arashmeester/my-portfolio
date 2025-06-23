export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  image: string;
  featured: boolean;
}

export const projects: Array<Project> = [
  {
    id: 1,
    title: "Math Worksheet",
    description: "A simple quiz pages",
    technologies: ["Vue", "Node.js", "Tailwind", "TypeScript"],
    githubUrl: "https://github.com/arashmeester/quiz-pages",
    liveUrl: "https://arashmeester.github.io/quiz-pages/",
    image:
      "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    featured: true,
  },
];