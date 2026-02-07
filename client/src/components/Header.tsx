/*
  VexarLabs Header - Creative & Bold Design with Mobile Menu
*/

import { Link } from "wouter";
import { useState, useEffect } from "react";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide header when scrolling down past 100px
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
        setIsMobileMenuOpen(false); // Close mobile menu when hiding header
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

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header 
        className={`py-2 md:py-2 border-b-2 border-orange-100 bg-white/95 backdrop-blur-md fixed left-0 right-0 z-50 transition-transform duration-150 shadow-sm ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
        style={{ top: 0 }}
      >
        <div className="container flex items-center justify-between">
          <Link href="/" className="hover:opacity-80 transition-opacity" onClick={handleLinkClick}>
            <img 
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663027599823/BSeseeWmcJDkjPoO.png" 
              alt="VexarLabs" 
              className="h-16 md:h-20 lg:h-80 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
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

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-slate-700 hover:text-orange-600 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <nav
        className={`fixed top-[72px] right-0 bottom-0 w-64 bg-white shadow-2xl z-40 md:hidden transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col p-6 gap-6">
          <a 
            href="/#products"
            onClick={handleLinkClick}
            className="text-lg font-semibold text-slate-700 hover:text-orange-600 transition-colors py-2 border-b border-slate-100"
          >
            Products
          </a>
          <a 
            href="/#about"
            onClick={handleLinkClick}
            className="text-lg font-semibold text-slate-700 hover:text-orange-600 transition-colors py-2 border-b border-slate-100"
          >
            About
          </a>
          <a 
            href="/#contact"
            onClick={handleLinkClick}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-semibold hover:shadow-coral transition-all text-base mt-4"
          >
            Contact
          </a>
        </div>
      </nav>
    </>
  );
}
