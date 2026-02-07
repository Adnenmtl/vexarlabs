/*
  FMarabia - Media Platform
  Mobile streaming platform focused on Arabic radio and audio content
*/

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ArrowLeft, Radio, Globe, Smartphone, Headphones } from "lucide-react";

export default function FMarabia() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 via-indigo-50/30 to-white">
          <div className="container">
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" />
              Back to Products
            </Link>
            
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <img 
                src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=200&h=200&fit=crop"
                alt="FMarabia icon"
                className="w-24 h-24 rounded-2xl shadow-lg flex-shrink-0 object-cover"
              />
              <div className="flex-1">
                <div className="mb-3">
                  <span className="text-sm font-medium text-primary">Media Platform</span>
                  <span className="text-sm text-muted-foreground"> • Arabic-speaking communities (Global)</span>
                </div>
                <h1 className="text-4xl font-bold mb-4">FMarabia</h1>
                <p className="text-lg text-muted-foreground mb-6">
                  Mobile streaming platform focused on Arabic radio and audio content.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-xs px-3 py-1 bg-secondary text-secondary-foreground rounded-full font-medium">
                    iOS
                  </span>
                  <span className="text-xs px-3 py-1 bg-secondary text-secondary-foreground rounded-full font-medium">
                    Android
                  </span>
                  <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">
                    Active Version
                  </span>
                </div>
                <a 
                  href="https://fmarabia.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  <Globe className="w-4 h-4" />
                  Visit FMarabia.app
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
              <div className="p-6 bg-gradient-to-br from-blue-50 to-white rounded-lg border border-border">
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                  <Radio className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Curated international radio stations</h3>
                <p className="text-sm text-muted-foreground">
                  Access a carefully selected collection of Arabic radio stations from around the world, bringing you closer to your culture and community.
                </p>
              </div>
              
              <div className="p-6 bg-gradient-to-br from-indigo-50 to-white rounded-lg border border-border">
                <div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-4">
                  <Headphones className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="font-semibold mb-2">Simplified listening experience</h3>
                <p className="text-sm text-muted-foreground">
                  Intuitive interface designed for effortless browsing and streaming. Just tap and listen—no complicated setup required.
                </p>
              </div>
              
              <div className="p-6 bg-gradient-to-br from-blue-50 to-white rounded-lg border border-border">
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                  <Smartphone className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Optimized mobile performance</h3>
                <p className="text-sm text-muted-foreground">
                  Lightweight app engineered for smooth playback and minimal battery consumption, even on older devices.
                </p>
              </div>
              
              <div className="p-6 bg-gradient-to-br from-indigo-50 to-white rounded-lg border border-border">
                <div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="font-semibold mb-2">Multi-region accessibility</h3>
                <p className="text-sm text-muted-foreground">
                  Available worldwide with stations from multiple countries, connecting Arabic speakers across continents.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About the Platform */}
        <section className="py-16 bg-secondary/30">
          <div className="container">
            <h2 className="text-3xl font-bold mb-6">About the Platform</h2>
            <div className="max-w-3xl space-y-4 text-muted-foreground leading-relaxed">
              <p>
                FMarabia is a mobile streaming platform designed to bring Arabic radio content to listeners around the world. 
                Whether you're at home, commuting, or traveling, FMarabia keeps you connected to your favorite stations.
              </p>
              <p>
                The platform focuses on delivering a streamlined listening experience with carefully curated content that 
                resonates with Arabic-speaking communities globally. From news and talk shows to music and cultural programs, 
                FMarabia offers diverse content for every listener.
              </p>
              <p>
                Built with performance and accessibility in mind, FMarabia works seamlessly across iOS and Android devices, 
                ensuring that quality audio streaming is available to everyone, regardless of their device or location.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
            <div className="max-w-3xl space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Is FMarabia free to use?</h3>
                <p className="text-muted-foreground">
                  Yes, FMarabia is free to download and use. We believe in making Arabic radio content accessible to everyone.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">What devices are supported?</h3>
                <p className="text-muted-foreground">
                  FMarabia is available on both iOS (iPhone and iPad) and Android devices. Simply download from the App Store or Google Play.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Can I listen offline?</h3>
                <p className="text-muted-foreground">
                  FMarabia streams live radio content, so an internet connection is required for listening. We recommend Wi-Fi or a stable mobile data connection for the best experience.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Which countries' stations are available?</h3>
                <p className="text-muted-foreground">
                  FMarabia features radio stations from multiple Arabic-speaking countries and regions, including stations broadcasting to diaspora communities worldwide.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">How do I request a new station?</h3>
                <p className="text-muted-foreground">
                  We're always looking to expand our station lineup. Contact us at contact@vexarlabs.com with your suggestions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-16 bg-gradient-to-br from-blue-50 via-indigo-50/30 to-white">
          <div className="container">
            <div className="max-w-xl">
              <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
              <p className="text-muted-foreground mb-6">
                Have questions about FMarabia? Want to suggest a feature or report an issue? We'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="mailto:contact@vexarlabs.com" 
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  Contact Support
                </a>
                <Link 
                  href="/app/fmarabia/privacy"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border border-border text-foreground rounded-lg font-medium hover:border-primary/30 hover:shadow-md transition-all"
                >
                  Privacy Policy
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
