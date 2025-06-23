import { Linkedin, Mail } from "lucide-react";

const Contact = ({ isLargeScreen }: { isLargeScreen: boolean }) => {
  return (
    <div className="container mx-auto px-6">
      <div
        className={`max-w-4xl mx-auto text-center ${
          isLargeScreen ? "max-w-6xl" : ""
        }`}
      >
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">
          Let's Work Together
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
          I'm always open to discussing new opportunities and interesting
          projects.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href="mailto:arashmeester@gmail.com"
            className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            <Mail size={20} />
            Send me an email
          </a>
          <a
            href="https://www.linkedin.com/in/arash-shafiq-656988167"
            className="flex items-center gap-3 px-8 py-4 border-2 border-blue-500 text-blue-500 dark:text-white dark:border-white rounded-full font-semibold hover:bg-blue-500 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-300"
          >
            <Linkedin size={20} />
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact
