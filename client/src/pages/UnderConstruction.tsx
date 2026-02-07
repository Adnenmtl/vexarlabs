/*
  VexarLabs Under Construction Page - Password Protected
*/

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";

const CORRECT_PASSWORD = "Vx@rL4bs#2026!Qc";

interface UnderConstructionProps {
  onUnlock: () => void;
}

export default function UnderConstruction({ onUnlock }: UnderConstructionProps) {
  const { language, setLanguage, t } = useLanguage();
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password === CORRECT_PASSWORD) {
      // Store unlock status in sessionStorage
      sessionStorage.setItem("vexarlabs_unlocked", "true");
      onUnlock();
    } else {
      setError(true);
      setShake(true);
      setTimeout(() => setShake(false), 500);
      setPassword("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-cyan-50 flex items-center justify-center p-4">
      {/* Language Selector - Top Right */}
      <div className="fixed top-4 right-4 z-50">
        <div className="relative">
          <button
            onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
            className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg shadow-md text-sm font-semibold text-slate-700 hover:text-orange-600 transition-colors border border-slate-200"
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
      </div>
      
      <div className="max-w-md w-full">
        {/* Logo */}
        <div className="text-center mb-8">
          <img 
            src="/images/logo-vexarlabs.png" 
            alt="VexarLabs" 
            className="h-16 w-auto mx-auto mb-6"
          />
        </div>

        {/* Construction Card */}
        <div className={`bg-white rounded-2xl shadow-xl p-8 border-2 border-orange-100 ${shake ? 'animate-shake' : ''}`}>
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
              <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">
              {t('construction.title')}
            </h1>
            <p className="text-slate-600">
              {t('construction.description')}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-slate-700 mb-2">
                {t('construction.password')}
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError(false);
                }}
                className={`w-full px-4 py-3 rounded-lg border-2 ${
                  error 
                    ? 'border-red-300 focus:border-red-500' 
                    : 'border-slate-200 focus:border-orange-500'
                } focus:outline-none transition-colors`}
                placeholder={t('construction.placeholder')}
                autoFocus
              />
              {error && (
                <p className="mt-2 text-sm text-red-600">
                  {t('construction.error')}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow-md hover:shadow-lg"
            >
              {t('construction.button')}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-slate-200">
            <p className="text-center text-sm text-slate-500">
              © {new Date().getFullYear()} VexarLabs. {t('construction.footer')}
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="mt-8 flex justify-center gap-2">
          <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-10px); }
          75% { transform: translateX(10px); }
        }
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
}
