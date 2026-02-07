/*
  Ronde Sécurité Taxi Québec - Dedicated Page
  
  Complete page with detailed description, demo video, FAQ and store badges
  Creative & Bold Design with animations
*/

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Link } from "wouter";
import { ArrowLeft, CheckCircle2, Shield, Clock, FileText, Wifi, Smartphone, Download } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";

export default function RondeSecuriteTaxi() {
  const { t } = useLanguage();
  const featuresAnim = useScrollAnimation({ threshold: 0.1 });
  const checkpointsAnim = useScrollAnimation({ threshold: 0.1 });
  const faqAnim = useScrollAnimation({ threshold: 0.1 });
  const contactAnim = useScrollAnimation({ threshold: 0.2 });
  
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <SEOHead page="ronde" />
      <Header />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-orange-500 to-red-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzR2LTRoLTJ2NGgtNHYyaDR2NGgydi00aDR2LTJoLTR6bTAtMzBWMGgtMnY0aC00djJoNHY0aDJWNmg0VjRoLTR6TTYgMzR2LTRINHY0SDB2Mmg0djRoMnYtNGg0di0ySDZ6TTYgNFYwSDR2NEgwdjJoNHY0aDJWNmg0VjRINnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
          
          <div className="container relative z-10">
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-orange-100 hover:text-white transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              {t('ronde.back')}
            </Link>
            
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <img 
                src="/images/ronde-icon.png" 
                alt="Ronde Sécurité Taxi icon"
                className="w-28 h-28 rounded-3xl shadow-2xl flex-shrink-0 object-cover border-4 border-white/20"
              />
              <div className="flex-1">
                <div className="mb-3">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">{t('ronde.category')}</span>
                  <span className="text-sm text-orange-100 ml-2">{t('ronde.market')}</span>
                </div>
                <h1 className="text-5xl font-bold mb-4">{t('ronde.title')}</h1>
                <p className="text-xl text-orange-50 mb-6 max-w-2xl">
                  {t('ronde.description')}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-lg text-sm font-medium">iOS</span>
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-lg text-sm font-medium">Android</span>
                  <span className="px-3 py-1 bg-white text-orange-600 rounded-lg text-sm font-bold">{t('ronde.status')}</span>
                </div>
                
                {/* Store badges */}
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="#" 
                    className="inline-flex items-center gap-3 px-6 py-3 bg-white text-orange-600 rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all"
                  >
                    <Download className="w-5 h-5" />
                    <div className="text-left">
                      <div className="text-xs">{t('ronde.download.appstore')}</div>
                      <div className="text-sm font-semibold">{t('ronde.download.appstore.name')}</div>
                    </div>
                  </a>
                  <a 
                    href="#" 
                    className="inline-flex items-center gap-3 px-6 py-3 bg-white text-orange-600 rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all"
                  >
                    <Download className="w-5 h-5" />
                    <div className="text-left">
                      <div className="text-xs">{t('ronde.download.playstore')}</div>
                      <div className="text-sm font-semibold">{t('ronde.download.playstore.name')}</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Screenshots Gallery */}
        <section className="py-20 bg-white">
          <div className="container">
            <h2 className="text-4xl font-bold text-center mb-12">
              {t('ronde.screenshots.title').split(' ').slice(0, -2).join(' ')} <span className="text-gradient-sunset">{t('ronde.screenshots.title').split(' ').slice(-2).join(' ')}</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                "/images/ronde-screenshot-1.png",
                "/images/ronde-screenshot-2.png",
                "/images/ronde-screenshot-3.png",
              ].map((screenshot, index) => (
                <img 
                  key={index}
                  src={screenshot} 
                  alt={`App screenshot ${index + 1}`}
                  className="w-64 h-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Demo Video */}
        <section className="py-20 bg-slate-50">
          <div className="container">
            <h2 className="text-4xl font-bold text-center mb-12">
              {t('ronde.demo.title').split(' ')[0]} <span className="text-gradient-sunset">{t('ronde.demo.title').split(' ').slice(1).join(' ')}</span>
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="aspect-video bg-slate-200 rounded-2xl overflow-hidden shadow-2xl">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Ronde Sécurité Taxi Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="text-center text-sm text-slate-600 mt-4">
                {t('ronde.demo.caption')}
              </p>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20 bg-white">
          <div className="container">
            <h2 className="text-4xl font-bold text-center mb-12">
              {t('ronde.features.title').split(' ')[0]} <span className="text-gradient-sunset">{t('ronde.features.title').split(' ').slice(1).join(' ')}</span>
            </h2>
            <div 
              ref={featuresAnim.ref}
              className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto ${featuresAnim.isVisible ? 'animate-fade-in' : 'opacity-0-init translate-y-8-init'}`}
            >
              <div className="p-8 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl border-2 border-orange-100 hover:border-orange-300 hover:shadow-lg transition-all">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center mb-4 shadow-lg">
                  <CheckCircle2 className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-2">{t('ronde.feature1.title')}</h3>
                <p className="text-slate-600">
                  {t('ronde.feature1.desc')}
                </p>
              </div>

              <div className="p-8 bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl border-2 border-red-100 hover:border-red-300 hover:shadow-lg transition-all">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-500 to-orange-600 flex items-center justify-center mb-4 shadow-lg">
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-2">{t('ronde.feature2.title')}</h3>
                <p className="text-slate-600">
                  {t('ronde.feature2.desc')}
                </p>
              </div>

              <div className="p-8 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl border-2 border-orange-100 hover:border-orange-300 hover:shadow-lg transition-all">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center mb-4 shadow-lg">
                  <FileText className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-2">{t('ronde.feature3.title')}</h3>
                <p className="text-slate-600">
                  {t('ronde.feature3.desc')}
                </p>
              </div>

              <div className="p-8 bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl border-2 border-red-100 hover:border-red-300 hover:shadow-lg transition-all">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-500 to-orange-600 flex items-center justify-center mb-4 shadow-lg">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-2">{t('ronde.feature4.title')}</h3>
                <p className="text-slate-600">
                  {t('ronde.feature4.desc')}
                </p>
              </div>

              <div className="p-8 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl border-2 border-orange-100 hover:border-orange-300 hover:shadow-lg transition-all">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center mb-4 shadow-lg">
                  <Wifi className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-2">{t('ronde.feature5.title')}</h3>
                <p className="text-slate-600">
                  {t('ronde.feature5.desc')}
                </p>
              </div>

              <div className="p-8 bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl border-2 border-red-100 hover:border-red-300 hover:shadow-lg transition-all">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-500 to-orange-600 flex items-center justify-center mb-4 shadow-lg">
                  <Smartphone className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-2">{t('ronde.feature6.title')}</h3>
                <p className="text-slate-600">
                  {t('ronde.feature6.desc')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Checkpoints */}
        <section className="py-20 bg-slate-50">
          <div className="container">
            <h2 className="text-4xl font-bold text-center mb-12">
              {t('ronde.checkpoints.title').split(' ')[0]} <span className="text-gradient-sunset">{t('ronde.checkpoints.title').split(' ').slice(1).join(' ')}</span>
            </h2>
            <div 
              ref={checkpointsAnim.ref}
              className={`max-w-4xl mx-auto space-y-8 ${checkpointsAnim.isVisible ? 'animate-fade-in' : 'opacity-0-init translate-y-8-init'}`}
            >
              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl shadow-xl border-2 border-orange-200">
                <h3 className="text-2xl font-bold mb-6 text-orange-900">{t('ronde.checkpoints.standard')}</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {Array.from({length: 19}, (_, i) => t(`ronde.checkpoint${i + 1}`)).map((point, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-2xl shadow-xl border-2 border-cyan-200">
                <h3 className="text-2xl font-bold mb-6 text-cyan-900">{t('ronde.checkpoints.adapted')}</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {Array.from({length: 6}, (_, i) => t(`ronde.adapted${i + 1}`)).map((point, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white">
          <div className="container">
            <h2 className="text-4xl font-bold text-center mb-12">
              {t('ronde.faq.title').split(' ').slice(0, -1).join(' ')} <span className="text-gradient-sunset">{t('ronde.faq.title').split(' ').slice(-1)}</span>
            </h2>
            <div 
              ref={faqAnim.ref}
              className={`max-w-3xl mx-auto space-y-6 ${faqAnim.isVisible ? 'animate-fade-in' : 'opacity-0-init translate-y-8-init'}`}
            >
              {Array.from({length: 7}, (_, i) => ({
                q: t(`ronde.faq${i + 1}.q`),
                a: t(`ronde.faq${i + 1}.a`)
              })).map((faq, index) => (
                <div key={index} className="p-6 bg-slate-50 rounded-xl border-2 border-slate-100 hover:border-orange-200 transition-all">
                  <h3 className="font-bold text-lg mb-2">{faq.q}</h3>
                  <p className="text-slate-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-20 bg-gradient-to-br from-orange-500 to-red-600 text-white">
          <div className="container">
            <div 
              ref={contactAnim.ref}
              className={`max-w-xl mx-auto text-center ${contactAnim.isVisible ? 'animate-scale-in' : 'opacity-0-init scale-95-init'}`}
            >
              <h2 className="text-4xl font-bold mb-4">{t('ronde.contact.title')}</h2>
              <p className="text-xl text-orange-50 mb-8">
                {t('ronde.contact.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:contact@vexarlabs.com" 
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-orange-600 rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all"
                >
                  {t('ronde.contact.cta')}
                </a>
                <Link 
                  href="/privacy"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-xl font-bold hover:bg-white/20 transition-all"
                >
                  {t('ronde.contact.privacy')}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
