/*
  VexarLabs Home Page - Creative & Bold Design
  
  Orange/Coral + Cyan/Turquoise palette with asymmetric layouts
*/

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ExternalLink, Smartphone, Globe, Sparkles, X, Code, Zap, Shield, Layers, ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";

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
    appIcon: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663027599823/xaZHlbEgJmsATdJf.png",
    screenshots: [
      "https://files.manuscdn.com/user_upload_by_module/session_file/310419663027599823/xLWDDYoUpTABhfWp.png",
      "https://files.manuscdn.com/user_upload_by_module/session_file/310419663027599823/EVLvPWqvQAXjYPld.png",
      "https://files.manuscdn.com/user_upload_by_module/session_file/310419663027599823/VBjeviPOeFuNsPjP.png",
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
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      
      <main className="flex-1 pt-20">
        {/* Hero Section - Bold & Asymmetric */}
        <section className="relative overflow-hidden bg-white">
          {/* Decorative background */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-cyan-50 opacity-60"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-100/30 to-transparent"></div>
          
          {/* Geometric shapes */}
          <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-orange-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-tr from-cyan-400/10 to-orange-400/10 rounded-full blur-3xl"></div>
          
          <div className="container relative z-10 py-24 md:py-32">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-semibold rounded-full mb-6">
                  Québec-based Tech Studio
                </div>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                  Building <span className="text-gradient-sunset">Practical</span> Digital Solutions
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed mb-8">
                  We focus on mobility, media platforms, and creator economy tools that solve real-world challenges.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="#products"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-semibold hover:shadow-coral hover:scale-105 transition-all"
                  >
                    View Our Products
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <a 
                    href="#contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-cyan-500 text-cyan-600 rounded-xl font-semibold hover:bg-cyan-50 transition-all"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
              
              {/* Visual element */}
              <div className="hidden md:block relative">
                <div className="relative w-full h-96">
                  <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-orange-400 to-orange-600 rounded-3xl rotate-6 shadow-coral"></div>
                  <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-3xl -rotate-6 shadow-cyan"></div>
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
          <div className="container py-20">
            <div className="max-w-4xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="text-gradient-coral">VexarLabs</span>
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  VexarLabs is a Québec-based technology studio developing focused digital solutions designed to solve concrete operational and media-related challenges.
                </p>
                <p>
                  We build scalable applications with lean architecture and automation-first thinking.
                </p>
                <p className="text-xl font-semibold text-white">
                  Our objective is simple: build products that are practical, reliable, and growth-ready.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Product Portfolio - Bold Cards */}
        <section id="products" className="py-20 bg-slate-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Product <span className="text-gradient-sunset">Portfolio</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Three focused products solving real challenges in mobility, media, and creator economy.
              </p>
            </div>
            
            <div className="grid gap-8 max-w-6xl mx-auto">
              {products.map((product, index) => {
                const IconComponent = product.icon;
                const isReversed = index % 2 === 1;
                
                return (
                  <div 
                    key={product.id}
                    className={`bg-white rounded-3xl shadow-xl overflow-hidden card-hover ${
                      isReversed ? 'md:ml-12' : 'md:mr-12'
                    }`}
                  >
                    <div className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 p-8`}>
                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-start gap-4 mb-4">
                          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                            <IconComponent className="w-8 h-8 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-2xl font-bold">{product.name}</h3>
                              {product.website && (
                                <a 
                                  href={product.website} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="text-orange-500 hover:text-orange-600 transition-colors"
                                >
                                  <ExternalLink className="w-5 h-5" />
                                </a>
                              )}
                            </div>
                            <div className="mb-3">
                              <span className="text-sm font-semibold text-orange-600">{product.category}</span>
                              <span className="text-sm text-slate-500"> • {product.market}</span>
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-slate-600 mb-6 text-lg">
                          {product.description}
                        </p>
                        
                        <div className="mb-6">
                          <h4 className="text-sm font-bold mb-3 text-slate-900">Key Features:</h4>
                          <div className="grid gap-2">
                            {product.features.map((feature, idx) => (
                              <div key={idx} className="flex items-start gap-2">
                                <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-slate-600">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mb-6">
                          {product.platforms.map((platform) => (
                            <span 
                              key={platform}
                              className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium"
                            >
                              {platform}
                            </span>
                          ))}
                          <span className="px-3 py-1 bg-gradient-to-r from-orange-100 to-orange-200 text-orange-700 rounded-lg text-sm font-semibold">
                            {product.status}
                          </span>
                        </div>
                        
                        <div className="flex gap-4">
                          <Link 
                            href={`/app/${product.id}`}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-semibold hover:shadow-coral hover:scale-105 transition-all"
                          >
                            Learn More
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                          <Link 
                            href={`/app/${product.id}/privacy`}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-100 text-slate-700 rounded-xl font-semibold hover:bg-slate-200 transition-all"
                          >
                            Privacy Policy
                          </Link>
                        </div>
                      </div>
                      
                      {/* Screenshots */}
                      {product.screenshots && (
                        <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible">
                          {product.screenshots.slice(0, 2).map((screenshot, idx) => (
                            <img 
                              key={idx}
                              src={screenshot} 
                              alt={`${product.name} screenshot ${idx + 1}`}
                              className="w-32 md:w-40 h-auto rounded-xl shadow-lg flex-shrink-0 cursor-pointer hover:scale-105 transition-transform"
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
        <section className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Development <span className="text-gradient-sunset">Approach</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                At VexarLabs, we follow a structured development methodology that prioritizes functionality and market relevance.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                { icon: Zap, title: "Problem-first product design", desc: "Starting with real-world challenges to build meaningful solutions", color: "orange" },
                { icon: Layers, title: "Lean and modular architecture", desc: "Building flexible systems that adapt to changing requirements", color: "cyan" },
                { icon: Code, title: "Scalable infrastructure", desc: "Designing for growth from day one", color: "orange" },
                { icon: Zap, title: "Automation-driven workflows", desc: "Reducing manual work through intelligent automation", color: "cyan" },
                { icon: Shield, title: "Long-term maintainability", desc: "Building systems that stand the test of time", color: "orange" },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={index}
                    className="p-6 bg-slate-50 rounded-2xl border-2 border-slate-100 hover:border-orange-200 hover:shadow-lg transition-all"
                  >
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${
                      item.color === 'orange' ? 'from-orange-400 to-orange-600' : 'from-cyan-400 to-cyan-600'
                    } flex items-center justify-center mb-4 shadow-lg`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-bold mb-2 text-lg">{item.title}</h3>
                    <p className="text-sm text-slate-600">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Strategic Positioning - Diagonal Section */}
        <section className="relative bg-gradient-to-br from-cyan-600 to-cyan-700 text-white diagonal-top">
          <div className="container py-20">
            <div className="max-w-4xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Strategic Positioning
              </h2>
              <div className="space-y-6 text-lg text-cyan-50 leading-relaxed mb-8">
                <p>
                  Based in Québec, VexarLabs develops solutions tailored to local operational realities while building platforms capable of global scalability.
                </p>
                <p className="text-xl font-semibold text-white">
                  We operate at the intersection of:
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Mobility infrastructure",
                  "Media distribution",
                  "Creator economy systems",
                  "Applied AI technologies"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                    <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-20 bg-slate-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Technology <span className="text-gradient-sunset">Stack</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                "Cross-platform mobile development",
                "Cloud-based backend infrastructure",
                "Modular system architecture",
                "Automation pipelines"
              ].map((tech, index) => (
                <div 
                  key={index}
                  className="p-6 bg-white rounded-2xl border-2 border-slate-100 hover:border-cyan-200 hover:shadow-lg transition-all text-center"
                >
                  <h3 className="font-bold text-slate-900">{tech}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Collaboration - CTA Section */}
        <section id="contact" className="relative bg-gradient-to-br from-orange-500 to-orange-600 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzR2LTRoLTJ2NGgtNHYyaDR2NGgydi00aDR2LTJoLTR6bTAtMzBWMGgtMnY0aC00djJoNHY0aDJWNmg0VjRoLTR6TTYgMzR2LTRINHY0SDB2Mmg0djRoMnYtNGg0di0ySDZ6TTYgNFYwSDR2NEgwdjJoNHY0aDJWNmg0VjRINnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
          
          <div className="container relative z-10 py-20">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Let's Collaborate
              </h2>
              <p className="text-xl text-orange-50 mb-8 max-w-2xl mx-auto">
                VexarLabs is open to collaboration with developers, designers, transport industry professionals, digital creators, and strategic partners.
              </p>
              <p className="text-lg text-orange-100 mb-10">
                Contact us to explore partnership opportunities.
              </p>
              <a 
                href="mailto:contact@vexarlabs.com" 
                className="inline-flex items-center gap-2 px-10 py-5 bg-white text-orange-600 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all"
              >
                contact@vexarlabs.com
                <ArrowRight className="w-6 h-6" />
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
            className="absolute top-4 right-4 text-white hover:text-orange-400 transition-colors"
            onClick={() => setLightboxImage(null)}
          >
            <X className="w-10 h-10" />
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
