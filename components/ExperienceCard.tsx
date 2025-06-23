import { Calendar, MapPin } from "lucide-react";
import { Experience } from "@/data/experiences";

const ExperienceCard = ({ exp }: { exp: Experience }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg h-full">
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
      <div>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
          {exp.position}
        </h3>
        <p className="text-blue-600 dark:text-blue-400 font-medium">
          {exp.company}
        </p>
      </div>
      <div className="text-right min-w-50">
        <p className="text-gray-600 dark:text-gray-300 flex items-center gap-1">
          <Calendar size={16} />
          {exp.duration}
        </p>
        <p className="text-gray-500 dark:text-gray-400 flex items-center gap-1">
          <MapPin size={16} />
          {exp.location}
        </p>
      </div>
    </div>
    <ul className="space-y-2">
      {exp.description.map((item, idx) => (
        <li
          key={idx}
          className="text-gray-600 dark:text-gray-300 flex items-start gap-2"
        >
          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default ExperienceCard;
