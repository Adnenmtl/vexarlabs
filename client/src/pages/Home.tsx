/*
  VexarLabs Home Page - Minimalist with Color Accent
  
  Simple showcase of applications with links to privacy policies
*/

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ExternalLink, Smartphone, Globe, Sparkles, X } from "lucide-react";
import { useState } from "react";

const apps = [
  {
    id: "ronde-securite-taxi",
    name: "Ronde de Sécurité Taxi",
    description: "Application mobile de gestion des rondes de sécurité pour chauffeurs de taxi, conforme aux normes de la SAAQ. Checklist complète de 19 points (+ 6 points Taxi Adapté), historique des rondes, rapports par email, mode hors-ligne.",
    platforms: ["iOS", "Android"],
    icon: Smartphone,
    color: "bg-emerald-500",
    appIcon: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663027599823/xaZHlbEgJmsATdJf.png",
    screenshots: [
      "https://files.manuscdn.com/user_upload_by_module/session_file/310419663027599823/xLWDDYoUpTABhfWp.png",
      "https://files.manuscdn.com/user_upload_by_module/session_file/310419663027599823/EVLvPWqvQAXjYPld.png",
      "https://files.manuscdn.com/user_upload_by_module/session_file/310419663027599823/VBjeviPOeFuNsPjP.png",
    ],
    appStoreUrl: "#", // À remplacer par le vrai lien App Store
    playStoreUrl: "#", // À remplacer par le vrai lien Google Play
  },
  {
    id: "fmarabia",
    name: "FMarabia",
    description: "Application FMarabia.app - Votre solution mobile innovante.",
    platforms: ["iOS", "Android"],
    website: "https://fmarabia.app",
    icon: Globe,
    color: "bg-blue-500",
  },
  {
    id: "influvo",
    name: "Influvo",
    description: "Influvo.ai - Plateforme intelligente alimentée par l'IA.",
    platforms: ["Web", "iOS", "Android"],
    website: "https://influvo.ai",
    icon: Sparkles,
    color: "bg-violet-500",
  },
];

export default function Home() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-secondary/50 to-background">
          <div className="container">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-5 text-foreground">
                Vexar<span className="text-primary">Labs</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Studio de développement d'applications mobiles et web. 
                Nous créons des solutions numériques sur mesure pour donner vie à vos idées.
              </p>
            </div>
          </div>
        </section>

        {/* Apps Section */}
        <section id="apps" className="py-16">
          <div className="container">
            <h2 className="text-2xl font-semibold mb-8">Nos Applications</h2>
            
            <div className="grid gap-5">
              {apps.map((app) => {
                const IconComponent = app.icon;
                return (
                  <div 
                    key={app.id}
                    className="p-6 bg-white border border-border rounded-xl hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                  >
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      <div className="flex gap-4 flex-1">
                        {app.appIcon ? (
                          <img 
                            src={app.appIcon} 
                            alt={`Icône ${app.name}`}
                            className="w-12 h-12 rounded-xl flex-shrink-0 object-cover"
                          />
                        ) : (
                          <div className={`w-12 h-12 rounded-xl ${app.color} flex items-center justify-center flex-shrink-0`}>
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                        )}
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-lg font-semibold">{app.name}</h3>
                            {app.website && (
                              <a 
                                href={app.website} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors"
                              >
                                <ExternalLink className="w-4 h-4" />
                              </a>
                            )}
                          </div>
                          <p className="text-muted-foreground text-sm mb-3">
                            {app.description}
                          </p>
                          <div className="flex gap-2 mb-3">
                            {app.platforms.map((platform) => (
                              <span 
                                key={platform}
                                className="text-xs px-2.5 py-1 bg-secondary text-secondary-foreground rounded-full font-medium"
                              >
                                {platform}
                              </span>
                            ))}
                          </div>
                          {/* Badges stores pour Ronde de Sécurité Taxi */}
                          {app.id === "ronde-securite-taxi" && (app as any).appStoreUrl && (
                            <div className="flex gap-2 mb-3">
                              <a 
                                href={(app as any).appStoreUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block"
                              >
                                <img 
                                  src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/fr-ca?size=250x83&amp;releaseDate=1705363200" 
                                  alt="Télécharger dans l'App Store"
                                  className="h-10"
                                />
                              </a>
                              <a 
                                href={(app as any).playStoreUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block"
                              >
                                <img 
                                  src="https://play.google.com/intl/en_us/badges/static/images/badges/fr_badge_web_generic.png" 
                                  alt="Disponible sur Google Play"
                                  className="h-10"
                                />
                              </a>
                            </div>
                          )}
                          
                          <div className="flex gap-3">
                            {app.id === "ronde-securite-taxi" && (
                              <Link 
                                href="/app/ronde-securite-taxi"
                                className="text-primary hover:text-primary/80 font-medium transition-colors text-sm inline-block"
                              >
                                En savoir plus →
                              </Link>
                            )}
                            <Link 
                              href={`/app/${app.id}/privacy`}
                              className="text-primary hover:text-primary/80 font-medium transition-colors text-sm inline-block"
                            >
                              Confidentialité →
                            </Link>
                          </div>
                        </div>
                      </div>
                      
                      {app.screenshots && (
                        <div className="flex gap-2 overflow-x-auto md:overflow-visible">
                          {app.screenshots.map((screenshot, index) => (
                            <img 
                              key={index}
                              src={screenshot} 
                              alt={`Capture d'écran ${index + 1} de ${app.name}`}
                              className="w-24 md:w-28 h-auto rounded-lg shadow-md flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
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

        {/* Contact Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container">
            <div className="max-w-xl">
              <h2 className="text-2xl font-semibold mb-4">Contact</h2>
              <p className="text-muted-foreground mb-5">
                Pour toute question concernant nos applications ou nos services, n'hésitez pas à nous contacter.
              </p>
              <a 
                href="mailto:contact@vexarlabs.com" 
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                contact@vexarlabs.com
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Lightbox pour agrandir les captures d'écran */}
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
            alt="Capture d'écran agrandie"
            className="max-w-full max-h-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
