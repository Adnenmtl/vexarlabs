/*
  VexarLabs 404 Not Found Page
  Creative & Bold Design with multilingual support
*/

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Link } from "wouter";
import { Home, ArrowLeft, Search } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <SEOHead page="home" />
      <Header />
      
      <main className="flex-1 pt-20 flex items-center justify-center">
        <div className="container py-16">
          <div className="max-w-2xl mx-auto text-center">
            {/* 404 Number - Large and Bold */}
            <div className="mb-8">
              <h1 className="text-9xl md:text-[12rem] font-bold text-gradient-sunset leading-none">
                404
              </h1>
            </div>

            {/* Error Message */}
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                {t('notFound.title')}
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-lg mx-auto">
                {t('notFound.description')}
              </p>
            </div>

            {/* Decorative Element */}
            <div className="mb-10 flex justify-center">
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-br from-orange-100 to-cyan-100 rounded-full blur-2xl opacity-50"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Search className="w-16 h-16 text-slate-300" />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-semibold hover:shadow-coral hover:scale-105 transition-all"
              >
                <Home className="w-5 h-5" />
                {t('notFound.cta.home')}
              </Link>
              
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 rounded-xl font-semibold hover:border-cyan-300 hover:bg-slate-50 transition-all"
              >
                <ArrowLeft className="w-5 h-5" />
                {t('notFound.cta.back')}
              </button>
            </div>

            {/* Quick Links */}
            <div className="mt-12 pt-8 border-t border-slate-200">
              <p className="text-sm text-slate-500 mb-4">{t('notFound.quickLinks')}</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/#products"
                  className="text-sm font-medium text-orange-600 hover:text-orange-700 transition-colors"
                >
                  {t('nav.products')}
                </Link>
                <span className="text-slate-300">•</span>
                <Link 
                  href="/#about"
                  className="text-sm font-medium text-orange-600 hover:text-orange-700 transition-colors"
                >
                  {t('nav.about')}
                </Link>
                <span className="text-slate-300">•</span>
                <Link 
                  href="/#contact"
                  className="text-sm font-medium text-orange-600 hover:text-orange-700 transition-colors"
                >
                  {t('nav.contact')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
