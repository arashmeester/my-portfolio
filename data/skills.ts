export interface SkillItem {
  name: string,
  level: number,
  category: string,
}

export const skills: Array<SkillItem> = [
  { name: "React", level: 70, category: "frontend" },
  { name: "TypeScript", level: 70, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "Node.js", level: 80, category: "backend" },
  { name: "MySql", level: 70, category: "backend" },
  { name: "Git", level: 80, category: "tools" },
  { name: "Laravel", level: 70, category: "backend" },
  { name: "Tailwind CSS", level: 70, category: "frontend" },
  { name: "Bootstrap", level: 90, category: "frontend" },
  { name: "REST APIs", level: 90, category: "backend" },
  { name: "Next.js", level: 70, category: "frontend" },
  { name: "Express.js", level: 80, category: "backend" },
];