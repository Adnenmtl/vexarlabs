/*
  VexarLabs Header - Creative & Bold Design with Auto-hide
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
      className={`py-4 border-b-2 border-orange-100 bg-white/95 backdrop-blur-md fixed left-0 right-0 z-50 transition-transform duration-150 shadow-sm ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
      style={{ top: 0 }}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <img 
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663027599823/gROodYkUyBumlfrz.png" 
            alt="VexarLabs" 
            className="h-40 w-auto object-contain"
          />
        </Link>
        <nav className="flex items-center gap-8">
          <a 
            href="/#products" 
            className="text-sm font-semibold text-slate-700 hover:text-orange-600 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-orange-600 after:transition-all hover:after:w-full"
          >
            Products
          </a>
          <a 
            href="/#about" 
            className="text-sm font-semibold text-slate-700 hover:text-orange-600 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-orange-600 after:transition-all hover:after:w-full"
          >
            About
          </a>
          <a 
            href="/#contact" 
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-semibold hover:shadow-coral hover:scale-105 transition-all text-sm"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
