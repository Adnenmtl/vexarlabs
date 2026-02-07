/*
  VexarLabs Header - Creative & Bold Design with Mobile Menu
*/

import { Link } from "wouter";
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

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
              src="/images/logo-vexarlabs.png" 
              alt="VexarLabs" 
              className="h-16 md:h-20 lg:h-20 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a 
              href="/#products" 
              className="text-sm font-semibold text-slate-700 hover:text-orange-600 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-orange-600 after:transition-all hover:after:w-full"
            >
              {t('nav.products')}
            </a>
            <a 
              href="/#about" 
              className="text-sm font-semibold text-slate-700 hover:text-orange-600 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-orange-600 after:transition-all hover:after:w-full"
            >
              {t('nav.about')}
            </a>
            <a 
              href="/#contact" 
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-semibold hover:shadow-coral hover:scale-105 transition-all text-sm"
            >
              {t('nav.contact')}
            </a>
            
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-slate-700 hover:text-orange-600 transition-colors"
                aria-label="Select language"
              >
                <Globe className="w-4 h-4" />
                <span className="uppercase">{language}</span>
              </button>
              
              {isLangMenuOpen && (
                <>
                  <div 
                    className="fixed inset-0 z-40" 
                    onClick={() => setIsLangMenuOpen(false)}
                  />
                  <div className="absolute right-0 top-full mt-2 w-32 bg-white rounded-lg shadow-lg border border-slate-200 py-2 z-50">
                    <button
                      onClick={() => {
                        setLanguage('en');
                        setIsLangMenuOpen(false);
                      }}
                      className={`w-full px-4 py-2 text-left text-sm hover:bg-orange-50 transition-colors ${
                        language === 'en' ? 'text-orange-600 font-semibold' : 'text-slate-700'
                      }`}
                    >
                      English
                    </button>
                    <button
                      onClick={() => {
                        setLanguage('fr');
                        setIsLangMenuOpen(false);
                      }}
                      className={`w-full px-4 py-2 text-left text-sm hover:bg-orange-50 transition-colors ${
                        language === 'fr' ? 'text-orange-600 font-semibold' : 'text-slate-700'
                      }`}
                    >
                      Français
                    </button>
                  </div>
                </>
              )}
            </div>
          </nav>

          {/* Mobile Menu Controls */}
          <div className="md:hidden flex items-center gap-2">
            {/* Language Selector Mobile */}
            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center gap-1 px-2 py-1.5 text-xs font-semibold text-slate-700 hover:text-orange-600 transition-colors"
                aria-label="Select language"
              >
                <Globe className="w-4 h-4" />
                <span className="uppercase">{language}</span>
              </button>
              
              {isLangMenuOpen && (
                <>
                  <div 
                    className="fixed inset-0 z-40" 
                    onClick={() => setIsLangMenuOpen(false)}
                  />
                  <div className="absolute right-0 top-full mt-2 w-28 bg-white rounded-lg shadow-lg border border-slate-200 py-2 z-50">
                    <button
                      onClick={() => {
                        setLanguage('en');
                        setIsLangMenuOpen(false);
                      }}
                      className={`w-full px-3 py-2 text-left text-xs hover:bg-orange-50 transition-colors ${
                        language === 'en' ? 'text-orange-600 font-semibold' : 'text-slate-700'
                      }`}
                    >
                      English
                    </button>
                    <button
                      onClick={() => {
                        setLanguage('fr');
                        setIsLangMenuOpen(false);
                      }}
                      className={`w-full px-3 py-2 text-left text-xs hover:bg-orange-50 transition-colors ${
                        language === 'fr' ? 'text-orange-600 font-semibold' : 'text-slate-700'
                      }`}
                    >
                      Français
                    </button>
                  </div>
                </>
              )}
            </div>
            
            {/* Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-orange-600 transition-colors"
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
            {t('nav.products')}
          </a>
          <a 
            href="/#about"
            onClick={handleLinkClick}
            className="text-lg font-semibold text-slate-700 hover:text-orange-600 transition-colors py-2 border-b border-slate-100"
          >
            {t('nav.about')}
          </a>
          <a 
            href="/#contact"
            onClick={handleLinkClick}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-semibold hover:shadow-coral transition-all text-base mt-4"
          >
            {t('nav.contact')}
          </a>
        </div>
      </nav>
    </>
  );
}
