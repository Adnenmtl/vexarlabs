/*
  VexarLabs - About Page
  Creative & Bold Design matching Home page style
*/

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { useLanguage } from "@/contexts/LanguageContext";
import { Target, Users, MapPin, Lightbulb, Award, Smile, Eye, Mail, ArrowRight, Code, Zap } from "lucide-react";
import { Link } from "wouter";
import { useState, useEffect } from "react";

export default function About() {
  const { t } = useLanguage();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const values = [
    {
      icon: Lightbulb,
      title: t('about.values.innovation.title'),
      description: t('about.values.innovation.desc'),
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: Award,
      title: t('about.values.quality.title'),
      description: t('about.values.quality.desc'),
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      icon: Smile,
      title: t('about.values.simplicity.title'),
      description: t('about.values.simplicity.desc'),
      gradient: "from-orange-400 to-orange-600",
    },
    {
      icon: Eye,
      title: t('about.values.transparency.title'),
      description: t('about.values.transparency.desc'),
      gradient: "from-cyan-400 to-cyan-600",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead page="about" />
      <Header />
      
      <main className="flex-1">
        {/* Hero Section - Creative Asymmetric */}
        <section className="relative min-h-[60vh] md:min-h-[70vh] bg-gradient-to-br from-orange-50 via-white to-cyan-50 pt-24 md:pt-32 pb-12 md:pb-20 overflow-hidden">
          {/* Decorative shapes */}
          <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full opacity-20 blur-3xl"></div>
          
          <div className="container relative z-10">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold mb-4 md:mb-6">
                  {t('about.subtitle')}
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
                  {t('about.title')}
                </h1>
                <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                  {t('about.hero.description')}
                </p>
              </div>
              
              {/* Visual element with parallax */}
              <div className="hidden md:block relative">
                <div className="relative w-full h-96">
                  <div 
                    className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-400 to-orange-600 rounded-3xl rotate-12 shadow-coral"
                    style={{ transform: `translateY(${scrollY * 0.05}px) rotate(12deg)` }}
                  ></div>
                  <div 
                    className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-3xl -rotate-12 shadow-cyan"
                    style={{ transform: `translateY(${-scrollY * 0.08}px) rotate(-12deg)` }}
                  ></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-56 h-56 bg-white rounded-2xl shadow-2xl flex items-center justify-center">
                      <Users className="w-28 h-28 text-orange-500" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission - Diagonal Section */}
        <section className="relative bg-gradient-to-br from-slate-900 to-slate-800 text-white diagonal-top">
          <div className="container py-16 md:py-24">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-coral">
                  <Target className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">{t('about.mission.title')}</h2>
              </div>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
                {t('about.mission.description')}
              </p>
            </div>
          </div>
        </section>

        {/* Values - Grid with Gradients */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                {t('about.values.title')}
              </h2>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div 
                    key={index}
                    className="group relative p-6 md:p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-white border-2 border-slate-100 hover:border-transparent hover:shadow-xl transition-all duration-300"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`}></div>
                    <div className={`relative w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-4 shadow-lg`}>
                      <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                    </div>
                    <h3 className="relative text-xl md:text-2xl font-bold mb-3">{value.title}</h3>
                    <p className="relative text-slate-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Approach - Asymmetric Layout */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-orange-50 to-cyan-50">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="relative">
                <div className="w-full h-64 md:h-96 bg-gradient-to-br from-orange-400 to-orange-600 rounded-3xl shadow-coral flex items-center justify-center">
                  <Code className="w-32 h-32 md:w-40 md:h-40 text-white opacity-90" />
                </div>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{t('about.approach.title')}</h2>
                <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
                  {t('about.approach.description')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team & Location - Diagonal Section */}
        <section className="relative bg-gradient-to-br from-slate-900 to-slate-800 text-white diagonal-top">
          <div className="container py-16 md:py-24">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16">
              {/* Team */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center shadow-cyan">
                    <Users className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold">{t('about.team.title')}</h2>
                </div>
                <p className="text-lg text-slate-300 leading-relaxed">
                  {t('about.team.description')}
                </p>
              </div>
              
              {/* Location */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-coral">
                    <MapPin className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold">{t('about.location.title')}</h2>
                </div>
                <p className="text-lg text-slate-300 leading-relaxed">
                  {t('about.location.description')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Bold Gradient */}
        <section className="relative py-16 md:py-24 bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 text-white overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-sm rounded-2xl mb-6 md:mb-8">
                <Mail className="w-8 h-8 md:w-10 md:h-10" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">{t('about.cta.title')}</h2>
              <p className="text-lg md:text-xl mb-8 md:mb-10 opacity-95">
                {t('about.cta.description')}
              </p>
              <Link href="/#contact">
                <a className="inline-flex items-center gap-2 px-8 py-4 bg-white text-orange-600 rounded-xl font-bold hover:bg-slate-100 hover:scale-105 transition-all shadow-xl text-base md:text-lg">
                  {t('about.cta.button')}
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
