/*
  VexarLabs Footer - Minimalist Style
*/

import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-border mt-auto">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} VexarLabs. Tous droits réservés.
          </div>
          <nav className="flex items-center gap-6">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Confidentialité
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Conditions
            </Link>
            <Link href="/support" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Support
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
