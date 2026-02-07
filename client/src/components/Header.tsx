/*
  VexarLabs Header - Minimalist with Color Accent
*/

import { Link } from "wouter";

export default function Header() {
  return (
    <header className="py-5 border-b border-border bg-white/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-50">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <img 
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663027599823/pCBMueMfEDSMWROP.svg" 
            alt="VexarLabs Logo" 
            className="h-12 object-contain"
          />
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/#apps" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Applications
          </Link>
          <Link href="/support" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Support
          </Link>
        </nav>
      </div>
    </header>
  );
}
