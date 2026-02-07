/*
  VexarLabs - About Page
  Minimalist design with company story, mission, values, and team
*/

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { useLanguage } from "@/contexts/LanguageContext";
import { Target, Users, MapPin, Lightbulb, Award, Smile, Eye, Mail } from "lucide-react";
import { Link } from "wouter";

export default function About() {
  const { t } = useLanguage();

  const values = [
    {
      icon: Lightbulb,
      title: t('about.values.innovation.title'),
      description: t('about.values.innovation.desc'),
    },
    {
      icon: Award,
      title: t('about.values.quality.title'),
      description: t('about.values.quality.desc'),
    },
    {
      icon: Smile,
      title: t('about.values.simplicity.title'),
      description: t('about.values.simplicity.desc'),
    },
    {
      icon: Eye,
      title: t('about.values.transparency.title'),
      description: t('about.values.transparency.desc'),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead page="about" />
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
          
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                {t('about.title')}
              </h1>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
                {t('about.subtitle')}
              </p>
            </div>
          </div>
        </section>

        {/* Who We Are */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">{t('about.hero.title')}</h2>
              </div>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                {t('about.hero.description')}
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">{t('about.mission.title')}</h2>
              </div>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                {t('about.mission.description')}
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{t('about.values.title')}</h2>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <div 
                      key={index}
                      className="p-6 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                    >
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Approach */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('about.approach.title')}</h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                {t('about.approach.description')}
              </p>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">{t('about.team.title')}</h2>
              </div>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                {t('about.team.description')}
              </p>
            </div>
          </div>
        </section>

        {/* Location */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">{t('about.location.title')}</h2>
              </div>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                {t('about.location.description')}
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-orange-600 text-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <Mail className="w-16 h-16 mx-auto mb-6 opacity-90" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('about.cta.title')}</h2>
              <p className="text-lg md:text-xl mb-8 opacity-90">
                {t('about.cta.description')}
              </p>
              <Link href="/#contact">
                <a className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-slate-100 transition-colors">
                  {t('about.cta.button')}
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
