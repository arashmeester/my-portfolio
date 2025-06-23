'use client';
import { useScrollContext } from '@/contexts/ScrollContext';

export const useScrollTo = () => {
  const { setMobileMenuOpen } = useScrollContext();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }

    // Auto-close mobile menu if open
    setMobileMenuOpen(false);
  };

  return { scrollToSection };
};
