/*
  VexarLabs Header - Minimalist Style
*/

import { Link } from "wouter";

export default function Header() {
  return (
    <header className="py-6 border-b border-border">
      <div className="container flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold tracking-tight">
          VexarLabs
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/#apps" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Applications
          </Link>
          <Link href="/support" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Support
          </Link>
        </nav>
      </div>
    </header>
  );
}
