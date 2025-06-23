"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

type ScrollContextType = {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (val: boolean) => void;
  isScrolled: boolean;
};

const ScrollContext = createContext<ScrollContextType>({
  mobileMenuOpen: false,
  setMobileMenuOpen: () => {},
  isScrolled: false
});

export const ScrollProvider = ({ children }: { children: ReactNode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <ScrollContext.Provider value={{ mobileMenuOpen, setMobileMenuOpen, isScrolled }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScrollContext = () => useContext(ScrollContext);
