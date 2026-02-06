/*
  VexarLabs Header - Minimalist with Color Accent
*/

import { Link } from "wouter";

export default function Header() {
  return (
    <header className="py-5 border-b border-border bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">V</span>
          </div>
          <span className="text-xl font-semibold tracking-tight">VexarLabs</span>
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
