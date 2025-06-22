"use client";

import React, { useState, useEffect, useRef, createContext } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { ChevronDown } from "lucide-react";
import UserProfile from "@/components/UserProfile";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Navbar from "@/components/Navbar";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(true);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const checkScrollTop = () => {
      if (window.scrollY > 300) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1280);
      if (window.innerWidth > 768) {
        setMobileMenuOpen(false);
      }
    };

    // Set up Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    // Observe all sections
    const sections = [
      "home",
      "about",
      "skills",
      "projects",
      "experience",
      "contact",
    ];
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        sectionRefs.current[section] = element;
        observer.observe(element);
      }
    });

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", checkScrollTop);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", checkScrollTop);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);

      // Clean up observer
      sections.forEach((section) => {
        const element = sectionRefs.current[section];
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <ParallaxProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 overflow-x-hidden">
        {/* Animated Background */}
        <div className="fixed inset-0 pointer-events-none">
          <div
            className="absolute w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl transition-all duration-1000 dark:from-blue-600/20 dark:to-purple-600/20"
            style={{
              left: mousePosition.x - 192,
              top: mousePosition.y - 192,
            }}
          />
        </div>

        {/* Navigation */}
        <Navbar activeSection={activeSection} onScrollToSection={scrollToSection} />

        {/* Hero Section */}
        <section id="home">
          <UserProfile
            isLargeScreen={isLargeScreen}
            onScrollToSection={scrollToSection}
          >
            <button
              onClick={() => scrollToSection("about")}
              className="absolute bottom-8 inset-x-0 flex justify-center animate-bounce"
              aria-label="Scroll down"
            >
              <ChevronDown
                size={32}
                className="text-gray-400 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              />
            </button>
          </UserProfile>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white dark:bg-gray-800">
          <AboutMe
            isLargeScreen={isLargeScreen}
            onScrollToSection={scrollToSection}
          />
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
          <Skills
            isLargeScreen={isLargeScreen}
            onScrollToSection={scrollToSection}
          />
        </section>
      </div>
    </ParallaxProvider>
  );
};

export default App;
