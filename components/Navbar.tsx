import React, { useState, useEffect } from "react";
import NavItem from "@/components/NavbarItem";
import DarkModeToggle from "@/components/DarkModeToggle";
import {
  Code,
  Home,
  User,
  Briefcase,
  MessageCircle,
  Calendar,
  Moon,
  Sun,
  Menu,
  X,
} from "lucide-react";

const Navbar = ({
  onScrollToSection,
  activeSection
}: {
  onScrollToSection: (sectionId: string) => void;
  activeSection: string
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Welcome Fans !
          </h1>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            <NavItem
              activeSection={activeSection}
              id="home"
              label="Home"
              icon={<Home size={18} />}
              onScrollToSection={onScrollToSection}
            />
            <NavItem
              activeSection={activeSection}
              id="about"
              label="About"
              icon={<User size={18} />}
              onScrollToSection={onScrollToSection}
            />
            <NavItem
              activeSection={activeSection}
              id="skills"
              label="Skills"
              icon={<Code size={18} />}
              onScrollToSection={onScrollToSection}
            />
            <NavItem
              activeSection={activeSection}
              id="projects"
              label="Projects"
              icon={<Briefcase size={18} />}
              onScrollToSection={onScrollToSection}
            />
            <NavItem
              activeSection={activeSection}
              id="experience"
              label="Experience"
              icon={<Calendar size={18} />}
              onScrollToSection={onScrollToSection}
            />
            <NavItem
              activeSection={activeSection}
              id="contact"
              label="Contact"
              icon={<MessageCircle size={18} />}
              onScrollToSection={onScrollToSection}
            />
            <DarkModeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <DarkModeToggle />
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 shadow-lg">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-2">
            <NavItem
              activeSection={activeSection}
              id="home"
              label="Home"
              icon={<User size={18} />}
              isMobile
              onScrollToSection={onScrollToSection}
            />
            <NavItem
              activeSection={activeSection}
              id="about"
              label="About"
              icon={<User size={18} />}
              isMobile
              onScrollToSection={onScrollToSection}
            />
            <NavItem
              activeSection={activeSection}
              id="skills"
              label="Skills"
              icon={<Code size={18} />}
              isMobile
              onScrollToSection={onScrollToSection}
            />
            <NavItem
              activeSection={activeSection}
              id="projects"
              label="Projects"
              icon={<Briefcase size={18} />}
              isMobile
              onScrollToSection={onScrollToSection}
            />
            <NavItem
              activeSection={activeSection}
              id="experience"
              label="Experience"
              icon={<Calendar size={18} />}
              isMobile
              onScrollToSection={onScrollToSection}
            />
            <NavItem
              activeSection={activeSection}
              id="contact"
              label="Contact"
              icon={<MessageCircle size={18} />}
              isMobile
              onScrollToSection={onScrollToSection}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
