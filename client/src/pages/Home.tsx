/*
  VexarLabs Home Page - Minimalist with Color Accent
  
  Simple showcase of applications with links to privacy policies
*/

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ExternalLink, Smartphone, Globe, Sparkles } from "lucide-react";

const apps = [
  {
    id: "ronde-securite-taxi",
    name: "Ronde de Sécurité Taxi",
    description: "Application de sécurité pour les chauffeurs de taxi. Système de rondes automatisées et alertes en temps réel.",
    platforms: ["iOS", "Android"],
    icon: Smartphone,
    color: "bg-emerald-500",
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
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex gap-4">
                        <div className={`w-12 h-12 rounded-xl ${app.color} flex items-center justify-center flex-shrink-0`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
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
                          <div className="flex gap-2">
                            {app.platforms.map((platform) => (
                              <span 
                                key={platform}
                                className="text-xs px-2.5 py-1 bg-secondary text-secondary-foreground rounded-full font-medium"
                              >
                                {platform}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex gap-4 text-sm md:ml-4">
                        <Link 
                          href={`/app/${app.id}/privacy`}
                          className="text-primary hover:text-primary/80 font-medium transition-colors"
                        >
                          Confidentialité →
                        </Link>
                      </div>
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
    </div>
  );
}
