/*
  VexarLabs Footer - Creative & Bold Design
*/

import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="py-12 border-t-2 border-orange-100 mt-auto bg-white">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <img 
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663027599823/BSeseeWmcJDkjPoO.png" 
              alt="VexarLabs" 
              className="h-8 w-auto object-contain"
            />
            <span className="text-sm text-slate-600">
              © {new Date().getFullYear()} VexarLabs. Building practical digital solutions.
            </span>
          </div>
          <nav className="flex items-center gap-6">
            <Link 
              href="/privacy" 
              className="text-sm font-medium text-slate-600 hover:text-orange-600 transition-colors"
            >
              Privacy
            </Link>
            <Link 
              href="/terms" 
              className="text-sm font-medium text-slate-600 hover:text-orange-600 transition-colors"
            >
              Terms
            </Link>
            <a 
              href="mailto:contact@vexarlabs.com" 
              className="text-sm font-semibold text-orange-600 hover:text-orange-700 transition-colors"
            >
              contact@vexarlabs.com
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
