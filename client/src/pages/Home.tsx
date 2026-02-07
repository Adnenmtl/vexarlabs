/*
  VexarLabs Home Page - Professional Tech Studio
  
  Québec-based technology studio focused on mobility, media platforms, and creator economy tools.
*/

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ExternalLink, Smartphone, Globe, Sparkles, X, Code, Zap, Shield, Layers } from "lucide-react";
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
    color: "bg-emerald-500",
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
    color: "bg-blue-500",
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
    color: "bg-violet-500",
    appIcon: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=200&h=200&fit=crop",
  },
];

export default function Home() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="py-20 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50/30 to-white"></div>
          <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%231e3a8a" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'}}
          ></div>
          <div className="container relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-foreground">
                Building Practical Digital Solutions for Real-World Needs
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                Québec-based technology studio focused on mobility, media platforms, and creator economy tools.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#products"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  View Our Products
                </a>
                <a 
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-border text-foreground rounded-lg font-medium hover:border-primary/30 hover:shadow-md transition-all"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About VexarLabs */}
        <section id="about" className="py-16 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold mb-6">About VexarLabs</h2>
            <div className="max-w-4xl space-y-4 text-muted-foreground leading-relaxed">
              <p>
                VexarLabs is a Québec-based technology studio developing focused digital solutions designed to solve concrete operational and media-related challenges.
              </p>
              <p>
                We build scalable applications with lean architecture and automation-first thinking.
              </p>
              <p className="font-medium text-foreground">
                Our objective is simple: build products that are practical, reliable, and growth-ready.
              </p>
            </div>
          </div>
        </section>

        {/* Product Portfolio */}
        <section id="products" className="py-16 bg-gradient-to-b from-gray-50/50 to-white">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8">Product Portfolio</h2>
            
            <div className="grid gap-6">
              {products.map((product) => {
                const IconComponent = product.icon;
                return (
                  <div 
                    key={product.id}
                    className="p-6 md:p-8 bg-white border border-border rounded-xl hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                  >
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      <div className="flex gap-4 flex-1">
                        {product.appIcon ? (
                          <img 
                            src={product.appIcon} 
                            alt={`${product.name} icon`}
                            className="w-16 h-16 rounded-xl flex-shrink-0 object-cover"
                          />
                        ) : (
                          <div className={`w-16 h-16 rounded-xl ${product.color} flex items-center justify-center flex-shrink-0`}>
                            <IconComponent className="w-8 h-8 text-white" />
                          </div>
                        )}
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-bold">{product.name}</h3>
                            {product.website && (
                              <a 
                                href={product.website} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors"
                              >
                                <ExternalLink className="w-4 h-4" />
                              </a>
                            )}
                          </div>
                          
                          <div className="mb-3">
                            <span className="text-sm font-medium text-primary">{product.category}</span>
                            <span className="text-sm text-muted-foreground"> • {product.market}</span>
                          </div>
                          
                          <p className="text-muted-foreground mb-4">
                            {product.description}
                          </p>
                          
                          <div className="mb-4">
                            <h4 className="text-sm font-semibold mb-2">Key Features:</h4>
                            <ul className="space-y-1">
                              {product.features.map((feature, index) => (
                                <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                                  <span className="text-primary mt-1">•</span>
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="flex flex-wrap gap-2 mb-4">
                            {product.platforms.map((platform) => (
                              <span 
                                key={platform}
                                className="text-xs px-3 py-1 bg-secondary text-secondary-foreground rounded-full font-medium"
                              >
                                {platform}
                              </span>
                            ))}
                            <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">
                              {product.status}
                            </span>
                          </div>
                          
                          {/* Store badges for Ronde Sécurité Taxi */}
                          {product.id === "ronde-securite-taxi" && product.appStoreUrl && (
                            <div className="flex gap-2 mb-4">
                              <a 
                                href={product.appStoreUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block"
                              >
                                <img 
                                  src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1705363200" 
                                  alt="Download on the App Store"
                                  className="h-10"
                                />
                              </a>
                              <a 
                                href={product.playStoreUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block"
                              >
                                <img 
                                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" 
                                  alt="Get it on Google Play"
                                  className="h-10"
                                />
                              </a>
                            </div>
                          )}
                          
                          <div className="flex gap-4">
                            <Link 
                              href={`/app/${product.id}`}
                              className="text-primary hover:text-primary/80 font-medium transition-colors text-sm inline-block"
                            >
                              Learn More →
                            </Link>
                            <Link 
                              href={`/app/${product.id}/privacy`}
                              className="text-muted-foreground hover:text-primary font-medium transition-colors text-sm inline-block"
                            >
                              Privacy Policy →
                            </Link>
                          </div>
                        </div>
                      </div>
                      
                      {product.screenshots && (
                        <div className="flex gap-2 overflow-x-auto md:overflow-visible">
                          {product.screenshots.map((screenshot, index) => (
                            <img 
                              key={index}
                              src={screenshot} 
                              alt={`${product.name} screenshot ${index + 1}`}
                              className="w-24 md:w-32 h-auto rounded-lg shadow-md flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
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

        {/* Development Approach */}
        <section className="py-16 bg-secondary/30">
          <div className="container">
            <h2 className="text-3xl font-bold mb-6">Development Approach</h2>
            <p className="text-muted-foreground mb-8 max-w-3xl">
              At VexarLabs, we follow a structured development methodology:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
              <div className="p-6 bg-white rounded-lg border border-border">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Problem-first product design</h3>
                <p className="text-sm text-muted-foreground">Starting with real-world challenges to build meaningful solutions</p>
              </div>
              <div className="p-6 bg-white rounded-lg border border-border">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Layers className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Lean and modular architecture</h3>
                <p className="text-sm text-muted-foreground">Building flexible systems that adapt to changing requirements</p>
              </div>
              <div className="p-6 bg-white rounded-lg border border-border">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Scalable infrastructure</h3>
                <p className="text-sm text-muted-foreground">Designing for growth from day one</p>
              </div>
              <div className="p-6 bg-white rounded-lg border border-border">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Automation-driven workflows</h3>
                <p className="text-sm text-muted-foreground">Reducing manual work through intelligent automation</p>
              </div>
              <div className="p-6 bg-white rounded-lg border border-border">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Long-term maintainability focus</h3>
                <p className="text-sm text-muted-foreground">Building systems that stand the test of time</p>
              </div>
            </div>
            <p className="text-muted-foreground mt-8 max-w-3xl">
              We prioritize functionality and market relevance over unnecessary complexity.
            </p>
          </div>
        </section>

        {/* Strategic Positioning */}
        <section className="py-16 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold mb-6">Strategic Positioning</h2>
            <div className="max-w-4xl space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Based in Québec, VexarLabs develops solutions tailored to local operational realities while building platforms capable of global scalability.
              </p>
              <p className="font-medium text-foreground">
                We operate at the intersection of:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>Mobility infrastructure</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>Media distribution</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>Creator economy systems</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>Applied AI technologies</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-16 bg-gradient-to-b from-gray-50/50 to-white">
          <div className="container">
            <h2 className="text-3xl font-bold mb-6">Technology Stack</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl">
              <div className="p-6 bg-white rounded-lg border border-border">
                <h3 className="font-semibold mb-2">Cross-platform mobile development</h3>
                <p className="text-sm text-muted-foreground">Native iOS and Android experiences</p>
              </div>
              <div className="p-6 bg-white rounded-lg border border-border">
                <h3 className="font-semibold mb-2">Cloud-based backend infrastructure</h3>
                <p className="text-sm text-muted-foreground">Scalable and reliable services</p>
              </div>
              <div className="p-6 bg-white rounded-lg border border-border">
                <h3 className="font-semibold mb-2">Modular system architecture</h3>
                <p className="text-sm text-muted-foreground">Flexible and maintainable code</p>
              </div>
              <div className="p-6 bg-white rounded-lg border border-border">
                <h3 className="font-semibold mb-2">Automation pipelines</h3>
                <p className="text-sm text-muted-foreground">Efficient deployment and testing</p>
              </div>
            </div>
          </div>
        </section>

        {/* In Development */}
        <section className="py-16 bg-secondary/30">
          <div className="container">
            <h2 className="text-3xl font-bold mb-6">In Development</h2>
            <p className="text-muted-foreground mb-6 max-w-3xl">
              Upcoming focus areas:
            </p>
            <div className="grid md:grid-cols-2 gap-4 max-w-3xl">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-muted-foreground">AI-powered operational systems</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-muted-foreground">Intelligent automation frameworks</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-muted-foreground">Interactive digital environments</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-muted-foreground">Scalable SaaS infrastructure models</span>
              </div>
            </div>
          </div>
        </section>

        {/* Collaboration */}
        <section id="contact" className="py-16 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold mb-6">Collaboration</h2>
            <div className="max-w-4xl">
              <p className="text-muted-foreground mb-6">
                VexarLabs is open to collaboration with:
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-muted-foreground">Developers</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-muted-foreground">Designers</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-muted-foreground">Transport industry professionals</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-muted-foreground">Digital creators</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-muted-foreground">Strategic partners</span>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                Contact us to explore partnership opportunities.
              </p>
              <a 
                href="mailto:contact@vexarlabs.com" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                contact@vexarlabs.com
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Lightbox for screenshots */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setLightboxImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img 
            src={lightboxImage} 
            alt="Enlarged screenshot"
            className="max-w-full max-h-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
