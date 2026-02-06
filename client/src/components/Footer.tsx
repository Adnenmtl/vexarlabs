/*
  VexarLabs Footer - Minimalist with Color Accent
*/

import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="py-10 border-t border-border mt-auto bg-secondary/30">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xs">V</span>
            </div>
            <span className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} VexarLabs
            </span>
          </div>
          <nav className="flex items-center gap-6">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Confidentialité
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Conditions
            </Link>
            <Link href="/support" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Support
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
