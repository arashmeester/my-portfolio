export interface Experience {
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string[];
}

export const experiences: Array<Experience> = [
  {
    company: "TalentCloud.ai Sdn. Bhd.",
    position: "Team Lead",
    duration: "2022 - Present",
    location: "Kuala Lumpur, Malaysia",
    description: [
      "Successfully managed and allocated resources to meet tight project timelines, ensuring the timely delivery of major and minor enhancements.",
      "Led a team in the development and implementation of multiple modules, utilizing VueJS, React Native, ReactJS, NodeJS, Laravel, SailsJS, and NestJS technologies.",
      "Led the development of a Form Management Framework adopted across all internal teams and modules.",
      "Developed new Vue directives and plugins for internal use, streamlining development processes and enhancing productivity.",
    ],
  },
  {
    company: "TalentCloud.ai Sdn. Bhd.",
    position: "Fullstack Software Engineer",
    duration: "2020 - 2022",
    location: "Kuala Lumpur, Malaysia",
    description: [
      "Independently developed KPI score calculation logic for performance evaluation module.",
      "Handled full-stack responsibilities, including requirement gathering, designing, coding, data management, and client engagement.",
      "Consistently met tight due dates, delivering high-quality solutions that exceeded client expectations.",
      "Enhance Talentcloud HCM Modules using VueJs, improving functionality and usability for clients.",
      "Identify and implement improvements to the Talentcloud.ai landing page, enhancing user engagement.",
    ],
  },
  {
    company: "Runcloud.io",
    position: "Frontend Software Engineer",
    duration: "2020 - 2020",
    location: "Cyberjaya, Malaysia",
    description: [
      "Collaborated on UI/UX improvements to increase user engagement.",
      "Migrated frontend framework from Bootstrap to Tailwind CSS, resulting in cleaner code, faster development, and improved UI consistency.",
      "Developed a reusable internal component library (e.g., text inputs, modals, dialogs, toast notifications) to standardize UI and accelerate development across projects.",
    ],
  },
  {
    company: "Jobstore Sdn Bhd",
    position: "Software Engineer / Web Developer ",
    duration: "2018 - 2020",
    location: "Kuala Lumpur, Malaysia",
    description: [
      "Designed and developed a full-featured recruitment and hiring module to streamline candidate management, job postings, and interview workflows.",
      "Delivered full-stack solutions, handling both frontend (vueJs) and backend (laravel) development across multiple projects.",
      "Developed a shared Vue component library (vue-library) for use across multiple modules, standardizing UI elements and promoting code reusability.",
      "Designed and developed a dynamic career page used internally and by clients to manage and showcase job openings.",
      "Managed digital marketing-related web development tasks, including creating promotional flyers, blog pages, and landing content to support brand visibility and engagement.",
    ],
  },
];