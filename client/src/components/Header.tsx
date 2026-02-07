/*
  VexarLabs Header - Minimalist with Color Accent + Auto-hide on scroll
*/

import { Link } from "wouter";
import { useState, useEffect } from "react";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide header when scrolling down past 100px
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } 
      // Show header when scrolling up
      else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header 
      className={`py-5 border-b border-border bg-white/80 backdrop-blur-sm fixed left-0 right-0 z-50 transition-transform duration-150 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
      style={{ top: 0 }}
    >
      <div className="container flex items-center justify-between">
        <Link href="/">
          <img 
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663027599823/pCBMueMfEDSMWROP.svg" 
            alt="VexarLabs Logo" 
            className="h-12 object-contain"
          />
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/#products" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Products
          </Link>
          <Link href="/#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
