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
            src="https://private-us-east-1.manuscdn.com/sessionFile/KjkPlQmy0eBADmP4aUc6MR/sandbox/Enl1RgbPBnFiQHPrKY01a6_1770430364568_na1fn_dmV4YXJsYWJzLWxvZ28td2hpdGU.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvS2prUGxRbXkwZUJBRG1QNGFVYzZNUi9zYW5kYm94L0VubDFSZ2JQQm5GaVFIUHJLWTAxYTZfMTc3MDQzMDM2NDU2OF9uYTFmbl9kbVY0WVhKc1lXSnpMV3h2WjI4dGQyaHBkR1VucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=sq-T3NJfciFhMKvXmCAJI0ZRm9wn3q~Gr3SdAA~-cVXxH4G3R7xXgo81UGcu1i0KTxdThvfAmSIjv7Kd1BUGA546KDzIyvue9nxqzAP3Z1E1~boPKnBBJKim9WZXuJoS0VpKzVrRTHMJIBWCyJQ6PKUc25uf1aNdWlcvnF3e~~iJvnujhmjZuyt3hn6xCgEk9hJeJyvs22GI21gpvSzwt49KAsiaWERXDX3aSmBXmNMN6hISGgwAakUCtVooAIcZR6N7WP485Zrga3O3rQPK5C3YWrJJZPioaAzfZAoix3EgcARAIUjtqlEHi2-aHivILSW6-wiiWML8x5zKFCAvbA__" 
            alt="VexarLabs" 
            className="h-10 w-auto object-contain"
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
