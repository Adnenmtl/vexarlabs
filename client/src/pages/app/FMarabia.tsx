/*
  FMarabia - Media Platform
  Creative & Bold Design
*/

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ArrowLeft, Radio, Globe, Smartphone, Headphones } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function FMarabia() {
  const featuresAnim = useScrollAnimation({ threshold: 0.1 });
  const aboutAnim = useScrollAnimation({ threshold: 0.2 });
  const faqAnim = useScrollAnimation({ threshold: 0.1 });
  const contactAnim = useScrollAnimation({ threshold: 0.2 });
  
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-cyan-500 to-blue-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzR2LTRoLTJ2NGgtNHYyaDR2NGgydi00aDR2LTJoLTR6bTAtMzBWMGgtMnY0aC00djJoNHY0aDJWNmg0VjRoLTR6TTYgMzR2LTRINHY0SDB2Mmg0djRoMnYtNGg0di0ySDZ6TTYgNFYwSDR2NEgwdjJoNHY0aDJWNmg0VjRINnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
          
          <div className="container relative z-10">
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-cyan-100 hover:text-white transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Products
            </Link>
            
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <img 
                src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=200&h=200&fit=crop"
                alt="FMarabia icon"
                className="w-28 h-28 rounded-3xl shadow-2xl flex-shrink-0 object-cover border-4 border-white/20"
              />
              <div className="flex-1">
                <div className="mb-3">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">Media Platform</span>
                  <span className="text-sm text-cyan-100 ml-2">Arabic-speaking communities (Global)</span>
                </div>
                <h1 className="text-5xl font-bold mb-4">FMarabia</h1>
                <p className="text-xl text-cyan-50 mb-6 max-w-2xl">
                  Mobile streaming platform focused on Arabic radio and audio content.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-lg text-sm font-medium">iOS</span>
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-lg text-sm font-medium">Android</span>
                  <span className="px-3 py-1 bg-white text-cyan-600 rounded-lg text-sm font-bold">Active Version</span>
                </div>
                <a 
                  href="https://fmarabia.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-cyan-600 rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all"
                >
                  <Globe className="w-5 h-5" />
                  Visit FMarabia.app
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20 bg-white">
          <div className="container">
            <h2 className="text-4xl font-bold mb-12 text-center">
              Key <span className="text-gradient-sunset">Features</span>
            </h2>
            <div 
              ref={featuresAnim.ref}
              className={`grid md:grid-cols-2 gap-6 max-w-4xl mx-auto ${featuresAnim.isVisible ? 'animate-fade-in' : 'opacity-0-init translate-y-8-init'}`}
            >
              <div className="p-8 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl border-2 border-cyan-100 hover:border-cyan-300 hover:shadow-cyan transition-all">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4 shadow-lg">
                  <Radio className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-2">Curated international radio stations</h3>
                <p className="text-slate-600">
                  Access a carefully selected collection of Arabic radio stations from around the world, bringing you closer to your culture and community.
                </p>
              </div>
              
              <div className="p-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border-2 border-blue-100 hover:border-blue-300 hover:shadow-cyan transition-all">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center mb-4 shadow-lg">
                  <Headphones className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-2">Simplified listening experience</h3>
                <p className="text-slate-600">
                  Intuitive interface designed for effortless browsing and streaming. Just tap and listen—no complicated setup required.
                </p>
              </div>
              
              <div className="p-8 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl border-2 border-cyan-100 hover:border-cyan-300 hover:shadow-cyan transition-all">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4 shadow-lg">
                  <Smartphone className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-2">Optimized mobile performance</h3>
                <p className="text-slate-600">
                  Lightweight app engineered for smooth playback and minimal battery consumption, even on older devices.
                </p>
              </div>
              
              <div className="p-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border-2 border-blue-100 hover:border-blue-300 hover:shadow-cyan transition-all">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center mb-4 shadow-lg">
                  <Globe className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-2">Multi-region accessibility</h3>
                <p className="text-slate-600">
                  Available worldwide with stations from multiple countries, connecting Arabic speakers across continents.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About the Platform */}
        <section className="py-20 bg-slate-50">
          <div className="container">
            <div 
              ref={aboutAnim.ref}
              className={`${aboutAnim.isVisible ? 'animate-fade-in' : 'opacity-0-init translate-y-8-init'}`}
            >
              <h2 className="text-4xl font-bold mb-8">About the Platform</h2>
              <div className="max-w-3xl space-y-6 text-lg text-slate-600 leading-relaxed">
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
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white">
          <div className="container">
            <h2 className="text-4xl font-bold mb-12 text-center">
              Frequently Asked <span className="text-gradient-sunset">Questions</span>
            </h2>
            <div 
              ref={faqAnim.ref}
              className={`max-w-3xl mx-auto space-y-6 ${faqAnim.isVisible ? 'animate-fade-in' : 'opacity-0-init translate-y-8-init'}`}
            >
              {[
                { q: "Is FMarabia free to use?", a: "Yes, FMarabia is free to download and use. We believe in making Arabic radio content accessible to everyone." },
                { q: "What devices are supported?", a: "FMarabia is available on both iOS (iPhone and iPad) and Android devices. Simply download from the App Store or Google Play." },
                { q: "Can I listen offline?", a: "FMarabia streams live radio content, so an internet connection is required for listening. We recommend Wi-Fi or a stable mobile data connection for the best experience." },
                { q: "Which countries' stations are available?", a: "FMarabia features radio stations from multiple Arabic-speaking countries and regions, including stations broadcasting to diaspora communities worldwide." },
                { q: "How do I request a new station?", a: "We're always looking to expand our station lineup. Contact us at contact@vexarlabs.com with your suggestions." }
              ].map((faq, index) => (
                <div key={index} className="p-6 bg-slate-50 rounded-xl border-2 border-slate-100 hover:border-cyan-200 transition-all">
                  <h3 className="font-bold text-lg mb-2">{faq.q}</h3>
                  <p className="text-slate-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-20 bg-gradient-to-br from-cyan-500 to-blue-600 text-white">
          <div className="container">
            <div 
              ref={contactAnim.ref}
              className={`max-w-xl mx-auto text-center ${contactAnim.isVisible ? 'animate-scale-in' : 'opacity-0-init scale-95-init'}`}
            >
              <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
              <p className="text-xl text-cyan-50 mb-8">
                Have questions about FMarabia? Want to suggest a feature or report an issue? We'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:contact@vexarlabs.com" 
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-cyan-600 rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all"
                >
                  Contact Support
                </a>
                <Link 
                  href="/app/fmarabia/privacy"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-xl font-bold hover:bg-white/20 transition-all"
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
