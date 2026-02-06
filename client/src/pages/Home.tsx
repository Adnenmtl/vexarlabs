/*
  VexarLabs Home Page - Minimalist Style
  
  Simple showcase of applications with links to privacy policies
*/

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ExternalLink } from "lucide-react";

const apps = [
  {
    id: "ronde-securite-taxi",
    name: "Ronde de Sécurité Taxi",
    description: "Application de sécurité pour les chauffeurs de taxi. Système de rondes automatisées et alertes en temps réel.",
    platforms: ["iOS", "Android"],
  },
  {
    id: "fmarabia",
    name: "FMarabia",
    description: "Application FMarabia.app - Votre solution mobile innovante.",
    platforms: ["iOS", "Android"],
    website: "https://fmarabia.app",
  },
  {
    id: "influvo",
    name: "Influvo",
    description: "Influvo.ai - Plateforme intelligente alimentée par l'IA.",
    platforms: ["Web", "iOS", "Android"],
    website: "https://influvo.ai",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
              VexarLabs
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              Studio de développement d'applications mobiles et web. 
              Nous créons des solutions numériques sur mesure.
            </p>
          </div>
        </section>

        {/* Apps Section */}
        <section id="apps" className="py-16 border-t border-border">
          <div className="container">
            <h2 className="text-xl font-semibold mb-8">Nos Applications</h2>
            
            <div className="grid gap-6">
              {apps.map((app) => (
                <div 
                  key={app.id}
                  className="p-6 border border-border rounded-lg hover:border-foreground/20 transition-colors"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-medium">{app.name}</h3>
                        {app.website && (
                          <a 
                            href={app.website} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground transition-colors"
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
                            className="text-xs px-2 py-1 bg-secondary rounded"
                          >
                            {platform}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-4 text-sm">
                      <Link 
                        href={`/app/${app.id}/privacy`}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        Confidentialité
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 border-t border-border">
          <div className="container">
            <h2 className="text-xl font-semibold mb-4">Contact</h2>
            <p className="text-muted-foreground mb-4">
              Pour toute question concernant nos applications ou nos services :
            </p>
            <a 
              href="mailto:contact@vexarlabs.com" 
              className="text-foreground hover:underline"
            >
              contact@vexarlabs.com
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
