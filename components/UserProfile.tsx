import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";

const UserProfile = ({ children, isLargeScreen, onScrollToSection }: { children: React.ReactNode, isLargeScreen: boolean, onScrollToSection: (sectionId: string) => void }) => {
  return (
    <div className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="container mx-auto px-6 text-center">
        <div
          className={`max-w-4xl mx-auto ${isLargeScreen ? "max-w-6xl" : ""}`}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 dark:text-white mb-6 animate-fade-in">
            Hi, I'm{" "}
            <Typewriter
              options={{
                strings: ["Arash Shafiq", "a Software Engineer", "a Husband"],
                autoStart: true,
                loop: true,
                deleteSpeed: "natural",
              }}
            />{" "}
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in-delay-2">
            Full-Stack Developer and Team Lead with over 6 years of experience
            building web and mobile apps using Vue.js, React Native, Node.js,
            Laravel, and NestJS. Skilled in leading teams, creating reusable
            components, and delivering high-quality solutions. Focused on clean
            UI/UX, performance, and scalable architecture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-3">
            <button
              onClick={() => onScrollToSection("projects")}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              View My Work
            </button>
            <button
              onClick={() => onScrollToSection("contact")}
              className="px-8 py-3 border-2 border-blue-500 text-blue-500 dark:text-white dark:border-white rounded-full font-semibold hover:bg-blue-500 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default UserProfile;
