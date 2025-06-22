import React, { useContext } from "react";

const NavItem = ({
  id,
  label,
  icon,
  onScrollToSection,
  activeSection,
  isMobile = false,
}: {
  id: string;
  label: string;
  icon: React.ReactNode;
  activeSection: string,
  onScrollToSection: (sectionId: string) => void;
  isMobile?: boolean;
}) => {
  return (
    <button
      onClick={() => onScrollToSection(id)}
      className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
        activeSection === id
          ? "bg-blue-500 text-white shadow-lg"
          : "text-gray-600 hover:text-blue-500 hover:bg-blue-50 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-gray-700"
      }`}
    >
      {icon}
      {(isMobile || !isMobile) && (
        <span className={isMobile ? "" : "hidden md:inline"}>{label}</span>
      )}
    </button>
  );
};

export default NavItem;
