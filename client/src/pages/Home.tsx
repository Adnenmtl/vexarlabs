/*
  VexarLabs Home Page - Creative & Bold Design
  
  Orange/Coral + Cyan/Turquoise palette with asymmetric layouts
*/

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Link } from "wouter";
import { ExternalLink, Smartphone, Globe, Sparkles, X, Code, Zap, Shield, Layers, ArrowRight, CheckCircle2 } from "lucide-react";
import { useState, useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";
import { useAuth } from "@/_core/hooks/useAuth";

const products = [
  {
    id: "ronde-securite-taxi",
    name: "Ronde Sécurité Taxi Québec",
    category: "Mobility & Safety Tech",
    market: "Québec (B2B – Taxi industry)",
    description: "Digital security patrol management application designed for taxi drivers and fleet operators.",
    features: [
      "Digital logging system",
      "Compliance-ready reporting",
      "Mobile-first interface",
      "Operational traceability",
      "Designed for Québec regulatory environment"
    ],
    status: "Advanced Development / Deployment Phase",
    platforms: ["iOS", "Android"],
    icon: Smartphone,
    gradient: "from-orange-500 to-red-500",
    appIcon: "/images/ronde-icon.png",
    screenshots: [
      "/images/ronde-screenshot-1.png",
      "/images/ronde-screenshot-2.png",
      "/images/ronde-screenshot-3.png",
    ],
    appStoreUrl: "#",
    playStoreUrl: "#",
  },
  {
    id: "fmarabia",
    name: "FMarabia",
    category: "Media Platform",
    market: "Arabic-speaking communities (Global)",
    description: "Mobile streaming platform focused on Arabic radio and audio content.",
    features: [
      "Curated international radio stations",
      "Simplified listening experience",
      "Optimized mobile performance",
      "Multi-region accessibility"
    ],
    status: "Active Version",
    platforms: ["iOS", "Android"],
    website: "https://fmarabia.app",
    icon: Globe,
    gradient: "from-cyan-500 to-blue-500",
    appIcon: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=200&h=200&fit=crop",
  },
  {
    id: "influvo",
    name: "Influvo",
    category: "Creator Economy Tools",
    market: "Global digital creators",
    description: "AI-assisted automation platform designed to support content creators in scaling digital presence.",
    features: [
      "AI-driven content workflows",
      "Automation systems",
      "Growth optimization tools",
      "Scalable backend infrastructure"
    ],
    status: "Advanced Development Phase",
    platforms: ["Web", "iOS", "Android"],
    website: "https://influvo.ai",
    icon: Sparkles,
    gradient: "from-purple-500 to-pink-500",
    appIcon: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=200&h=200&fit=crop",
  },
];

export default function Home() {
  // The userAuth hooks provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()
  let { user, loading, error, isAuthenticated, logout } = useAuth();

  const { t } = useLanguage();
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [scrollY, setScrollY] = useState(0);
  
  // Parallax effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Animation hooks for different sections
  const aboutAnim = useScrollAnimation({ threshold: 0.2 });
  const productsAnim = useScrollAnimation({ threshold: 0.1 });
  const approachAnim = useScrollAnimation({ threshold: 0.1 });
  const positioningAnim = useScrollAnimation({ threshold: 0.2 });
  const techAnim = useScrollAnimation({ threshold: 0.1 });
  const contactAnim = useScrollAnimation({ threshold: 0.2 });
  
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <SEOHead page="home" />
      <Header />
      
      <main className="flex-1 pt-20">
        {/* Hero Section - Bold & Asymmetric */}
        <section className="relative overflow-hidden bg-white">
          {/* Decorative background */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-cyan-50 opacity-60"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-100/30 to-transparent"></div>
          
          {/* Geometric shapes with parallax - Hidden on mobile */}
          <div 
            className="hidden md:block absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-orange-400/10 to-cyan-400/10 rounded-full blur-3xl parallax-slow"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          ></div>
          <div 
            className="hidden md:block absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-tr from-cyan-400/10 to-orange-400/10 rounded-full blur-3xl parallax-slow"
            style={{ transform: `translateY(${-scrollY * 0.15}px)` }}
          ></div>
          
          <div className="container relative z-10 py-16 md:py-24 lg:py-32">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <div className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs md:text-sm font-semibold rounded-full mb-4 md:mb-6">
                  {t('hero.badge')}
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-4 md:mb-6">
                  {t('hero.title')} <span className="text-gradient-sunset">{t('hero.title.highlight')}</span> {t('hero.title.end')}
                </h1>
                <p className="text-base md:text-lg lg:text-xl text-slate-600 leading-relaxed mb-6 md:mb-8">
                  {t('hero.description')}
                </p>
                <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4">
                  <a 
                    href="#products"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-semibold hover:shadow-coral hover:scale-105 transition-all text-sm md:text-base"
                  >
                    {t('hero.cta.products')}
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                  </a>
                  <a 
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-white border-2 border-cyan-500 text-cyan-600 rounded-xl font-semibold hover:bg-cyan-50 transition-all text-sm md:text-base"
                  >
                    {t('hero.cta.contact')}
                  </a>
                </div>
              </div>
              
              {/* Visual element with parallax */}
              <div className="hidden md:block relative">
                <div className="relative w-full h-96">
                  <div 
                    className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-orange-400 to-orange-600 rounded-3xl rotate-6 shadow-coral parallax-slow"
                    style={{ transform: `translateY(${scrollY * 0.05}px) rotate(6deg)` }}
                  ></div>
                  <div 
                    className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-3xl -rotate-6 shadow-cyan parallax-slow"
                    style={{ transform: `translateY(${-scrollY * 0.08}px) rotate(-6deg)` }}
                  ></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-64 h-64 bg-white rounded-2xl shadow-2xl flex items-center justify-center">
                      <Code className="w-32 h-32 text-orange-500" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About VexarLabs - Diagonal Section */}
        <section id="about" className="relative bg-gradient-to-br from-slate-900 to-slate-800 text-white diagonal-top">
          <div className="container py-12 md:py-16 lg:py-20">
            <div 
              ref={aboutAnim.ref}
              className={`max-w-4xl ${aboutAnim.isVisible ? 'animate-fade-in' : 'opacity-0-init translate-y-8-init'}`}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
                {t('aboutSection.title')} <span className="text-gradient-coral">{t('aboutSection.title.highlight')}</span>
              </h2>
              <div className="space-y-4 md:space-y-6 text-base md:text-lg text-slate-300 leading-relaxed">
                <p>
                  {t('aboutSection.p1')}
                </p>
                <p>
                  {t('aboutSection.p2')}
                </p>
                <p className="text-lg md:text-xl font-semibold text-white">
                  {t('aboutSection.p3')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Product Portfolio - Bold Cards */}
        <section id="products" className="py-12 md:py-16 lg:py-20 bg-slate-50">
          <div className="container">
            <div 
              ref={productsAnim.ref}
              className={`text-center mb-8 md:mb-12 lg:mb-16 ${productsAnim.isVisible ? 'animate-fade-in' : 'opacity-0-init translate-y-8-init'}`}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
                {t('products.title')} <span className="text-gradient-sunset">{t('products.title.highlight')}</span>
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto px-4">
                {t('products.description')}
              </p>
            </div>
            
            <div className="grid gap-8 max-w-6xl mx-auto">
              {products.map((product, index) => {
                const IconComponent = product.icon;
                const isReversed = index % 2 === 1;
                const ProductAnim = () => {
                  const anim = useScrollAnimation({ threshold: 0.2 });
                  return anim;
                };
                const productAnim = ProductAnim();
                
                return (
                  <div 
                    key={product.id}
                    ref={productAnim.ref}
                    className={`bg-white rounded-2xl md:rounded-3xl shadow-xl overflow-hidden card-hover ${
                      isReversed ? 'md:ml-12' : ''
                    } ${isReversed ? '' : 'md:mr-12'} ${
                      productAnim.isVisible 
                        ? (isReversed ? 'animate-slide-in-right' : 'animate-slide-in-left')
                        : (isReversed ? 'opacity-0-init translate-x-8-init-right' : 'opacity-0-init translate-x-8-init-left')
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-6 md:gap-8 p-5 md:p-8`}>
                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-start gap-3 md:gap-4 mb-4">
                          <div className={`w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                            <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-white" />
                          </div>
                            <div className="flex-1">
                            <div className="flex items-center gap-2 md:gap-3 mb-2">
                              <h3 className="text-xl md:text-2xl font-bold">{t(`product.${product.id}.name`)}</h3>
                              {product.website && (
                                <a 
                                  href={product.website} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="text-orange-500 hover:text-orange-600 transition-colors"
                                >
                                  <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
                                </a>
                              )}
                            </div>
                            <div className="mb-2 md:mb-3">
                              <span className="text-xs md:text-sm font-semibold text-orange-600">{t(`product.${product.id}.category`)}</span>
                              <span className="text-xs md:text-sm text-slate-500"> • {t(`product.${product.id}.market`)}</span>
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-slate-600 mb-4 md:mb-6 text-sm md:text-base lg:text-lg">
                          {t(`product.${product.id}.description`)}
                        </p>
                        
                        <div className="mb-4 md:mb-6">
                          <h4 className="text-xs md:text-sm font-bold mb-2 md:mb-3 text-slate-900">{t('products.features')}</h4>
                          <div className="grid gap-2">
                            {product.features.map((feature, idx) => (
                              <div key={idx} className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                                <span className="text-xs md:text-sm text-slate-600">{t(`product.${product.id}.feature${idx + 1}`)}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-6">
                          {product.platforms.map((platform) => (
                            <span 
                              key={platform}
                              className="px-2 py-0.5 md:px-3 md:py-1 bg-slate-100 text-slate-700 rounded-lg text-xs md:text-sm font-medium"
                            >
                              {platform}
                            </span>
                          ))}
                          <span className="px-2 py-0.5 md:px-3 md:py-1 bg-gradient-to-r from-orange-100 to-orange-200 text-orange-700 rounded-lg text-xs md:text-sm font-semibold">
                            {t(`product.${product.id}.status`)}
                          </span>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-2 md:gap-4">
                          <Link 
                            href={`/app/${product.id}`}
                            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 md:px-6 md:py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-semibold hover:shadow-coral hover:scale-105 transition-all text-sm md:text-base"
                          >
                            {t('products.cta.learn')}
                            <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                          </Link>
                          <Link 
                            href={`/app/${product.id}/privacy`}
                            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 md:px-6 md:py-3 bg-slate-100 text-slate-700 rounded-xl font-semibold hover:bg-slate-200 transition-all text-sm md:text-base"
                          >
                            {t('products.cta.privacy')}
                          </Link>
                        </div>
                      </div>
                      
                      {/* Screenshots */}
                      {product.screenshots && (
                        <div className="flex md:flex-col gap-2 md:gap-3 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
                          {product.screenshots.slice(0, 2).map((screenshot, idx) => (
                            <img 
                              key={idx}
                              src={screenshot} 
                              alt={`${product.name} screenshot ${idx + 1}`}
                              className="w-28 sm:w-32 md:w-40 h-auto rounded-lg md:rounded-xl shadow-lg flex-shrink-0 cursor-pointer hover:scale-105 transition-transform"
                              onClick={() => setLightboxImage(screenshot)}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Development Approach - Grid Layout */}
        <section className="py-12 md:py-16 lg:py-20 bg-white">
          <div className="container">
            <div 
              ref={approachAnim.ref}
              className={`text-center mb-8 md:mb-12 lg:mb-16 ${approachAnim.isVisible ? 'animate-fade-in' : 'opacity-0-init translate-y-8-init'}`}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
                {t('approach.title')} <span className="text-gradient-sunset">{t('approach.title.highlight')}</span>
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto px-4">
                {t('approach.description')}
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
              {[
                { icon: Zap, num: 1, color: "orange" },
                { icon: Layers, num: 2, color: "cyan" },
                { icon: Code, num: 3, color: "orange" },
                { icon: Zap, num: 4, color: "cyan" },
                { icon: Shield, num: 5, color: "orange" },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={index}
                    className="p-4 md:p-6 bg-slate-50 rounded-xl md:rounded-2xl border-2 border-slate-100 hover:border-orange-200 hover:shadow-lg transition-all"
                  >
                    <div className={`w-12 h-12 md:w-14 md:h-14 rounded-lg md:rounded-xl bg-gradient-to-br ${
                      item.color === 'orange' ? 'from-orange-400 to-orange-600' : 'from-cyan-400 to-cyan-600'
                    } flex items-center justify-center mb-3 md:mb-4 shadow-lg`}>
                      <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                    </div>
                    <h3 className="font-bold mb-2 text-base md:text-lg">{t(`approach.item${item.num}.title`)}</h3>
                    <p className="text-xs md:text-sm text-slate-600">{t(`approach.item${item.num}.desc`)}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Strategic Positioning - Diagonal Section */}
        <section className="relative bg-gradient-to-br from-cyan-600 to-cyan-700 text-white diagonal-top">
          <div className="container py-12 md:py-16 lg:py-20">
            <div 
              ref={positioningAnim.ref}
              className={`max-w-4xl ${positioningAnim.isVisible ? 'animate-fade-in' : 'opacity-0-init translate-y-8-init'}`}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
                {t('positioning.title')}
              </h2>
              <div className="space-y-4 md:space-y-6 text-base md:text-lg text-cyan-50 leading-relaxed mb-6 md:mb-8">
                <p>
                  {t('positioning.p1')}
                </p>
                <p className="text-lg md:text-xl font-semibold text-white">
                  {t('positioning.p2')}
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
                {[1, 2, 3, 4].map((num) => (
                  <div key={num} className="flex items-center gap-2 md:gap-3 p-3 md:p-4 bg-white/10 backdrop-blur-sm rounded-lg md:rounded-xl">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-orange-400 flex-shrink-0"></div>
                    <span className="font-medium text-sm md:text-base">{t(`positioning.item${num}`)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-12 md:py-16 lg:py-20 bg-slate-50">
          <div className="container">
            <div 
              ref={techAnim.ref}
              className={`text-center mb-8 md:mb-12 lg:mb-16 ${techAnim.isVisible ? 'animate-fade-in' : 'opacity-0-init translate-y-8-init'}`}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
                {t('tech.title')} <span className="text-gradient-sunset">{t('tech.title.highlight')}</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
              {[1, 2, 3, 4].map((num) => (
                <div 
                  key={num}
                  className="p-4 md:p-6 bg-white rounded-xl md:rounded-2xl border-2 border-slate-100 hover:border-cyan-200 hover:shadow-lg transition-all text-center"
                >
                  <h3 className="font-bold text-slate-900 text-sm md:text-base">{t(`tech.item${num}`)}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Collaboration - CTA Section */}
        <section id="contact" className="relative bg-gradient-to-br from-orange-500 to-orange-600 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzR2LTRoLTJ2NGgtNHYyaDR2NGgydi00aDR2LTJoLTR6bTAtMzBWMGgtMnY0aC00djJoNHY0aDJWNmg0VjRoLTR6TTYgMzR2LTRINHY0SDB2Mmg0djRoMnYtNGg0di0ySDZ6TTYgNFYwSDR2NEgwdjJoNHY0aDJWNmg0VjRINnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
          
          <div className="container relative z-10 py-12 md:py-16 lg:py-20">
            <div 
              ref={contactAnim.ref}
              className={`max-w-4xl mx-auto text-center ${contactAnim.isVisible ? 'animate-scale-in' : 'opacity-0-init scale-95-init'}`}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
                {t('collaboration.title')}
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-orange-50 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
                {t('collaboration.description')}
              </p>
              <p className="text-sm md:text-base lg:text-lg text-orange-100 mb-6 md:mb-10 px-4">
                {t('collaboration.cta')}
              </p>
              <a 
                href="mailto:contact@vexarlabs.com" 
                className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 bg-white text-orange-600 rounded-xl font-bold text-base md:text-lg hover:shadow-2xl hover:scale-105 transition-all"
              >
                contact@vexarlabs.com
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Lightbox */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-2 right-2 md:top-4 md:right-4 text-white hover:text-orange-400 transition-colors p-2"
            onClick={() => setLightboxImage(null)}
          >
            <X className="w-8 h-8 md:w-10 md:h-10" />
          </button>
          <img 
            src={lightboxImage} 
            alt="Enlarged screenshot"
            className="max-w-full max-h-full object-contain rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
