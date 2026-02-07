/*
  VexarLabs Footer - Creative & Bold Design
*/

import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="py-8 md:py-12 border-t-2 border-orange-100 mt-auto bg-white">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
          <div className="flex flex-col items-center md:items-start gap-3 md:gap-4">
            <img 
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663027599823/BSeseeWmcJDkjPoO.png" 
              alt="VexarLabs" 
              className="h-6 md:h-8 w-auto object-contain"
            />
            <span className="text-xs md:text-sm text-slate-600 text-center md:text-left">
              © {new Date().getFullYear()} VexarLabs. {t('footer.tagline')}
            </span>
          </div>
          <nav className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 md:gap-6">
            <Link 
              href="/privacy" 
              className="text-xs md:text-sm font-medium text-slate-600 hover:text-orange-600 transition-colors"
            >
              {t('footer.privacy')}
            </Link>
            <Link 
              href="/terms" 
              className="text-xs md:text-sm font-medium text-slate-600 hover:text-orange-600 transition-colors"
            >
              {t('footer.terms')}
            </Link>
            <a 
              href="mailto:contact@vexarlabs.com" 
              className="text-xs md:text-sm font-semibold text-orange-600 hover:text-orange-700 transition-colors"
            >
              contact@vexarlabs.com
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
