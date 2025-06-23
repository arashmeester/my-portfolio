import { Github, ExternalLink, Star } from "lucide-react";
import { Project } from "@/data/projects";

const ProjectCard = ({ project }: { project: Project }) => (
  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
    <div className="relative overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
      />
      {project.featured && (
        <div className="absolute top-4 left-4 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
          <Star size={12} />
          Featured
        </div>
      )}
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
        {project.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech: string, index: number) => (
          <span
            key={index}
            className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-3 justify-between pt-3">
        <a
          href={project.githubUrl}
          className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors border w-100"
          target="_blank"
        >
          <Github size={16} />
          Source Code
        </a>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors w-100"
            target="_blank"
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
        )}
      </div>
    </div>
  </div>
);

export default ProjectCard
