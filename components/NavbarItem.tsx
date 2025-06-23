import React, { useContext } from "react";
import { useScrollTo } from "@/hooks/useScrollTo";

const NavItem = ({
  id,
  label,
  icon,
  activeSection,
  isMobile = false,
}: {
  id: string;
  label: string;
  icon: React.ReactNode;
  activeSection: string;
  isMobile?: boolean;
}) => {
  const { scrollToSection } = useScrollTo();

  console.log('activeSection', activeSection);
  

  return (
    <button
      onClick={() => scrollToSection(id)}
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
