'use client';
import { createContext, useContext, ReactNode } from 'react';

type ScrollContextType = {
  scrollToSection: (id: string) => void;
};

const ScrollContext = createContext<ScrollContextType>({
  scrollToSection: () => {},
});

export const ScrollProvider = ({ children }: { children: ReactNode }) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ScrollContext.Provider value={{ scrollToSection }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => useContext(ScrollContext);
