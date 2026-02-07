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

export default function RondeSecuriteTaxi() {
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
              Back to Products
            </Link>
            
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <img 
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663027599823/xaZHlbEgJmsATdJf.png" 
                alt="Ronde Sécurité Taxi icon"
                className="w-28 h-28 rounded-3xl shadow-2xl flex-shrink-0 object-cover border-4 border-white/20"
              />
              <div className="flex-1">
                <div className="mb-3">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">Mobility & Safety Tech</span>
                  <span className="text-sm text-orange-100 ml-2">Québec (B2B – Taxi industry)</span>
                </div>
                <h1 className="text-5xl font-bold mb-4">Ronde Sécurité Taxi Québec</h1>
                <p className="text-xl text-orange-50 mb-6 max-w-2xl">
                  Digital security patrol management application designed for taxi drivers and fleet operators. 
                  Streamline your mandatory daily inspections with our comprehensive checklist.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-lg text-sm font-medium">iOS</span>
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-lg text-sm font-medium">Android</span>
                  <span className="px-3 py-1 bg-white text-orange-600 rounded-lg text-sm font-bold">Advanced Development / Deployment Phase</span>
                </div>
                
                {/* Store badges */}
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="#" 
                    className="inline-flex items-center gap-3 px-6 py-3 bg-white text-orange-600 rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all"
                  >
                    <Download className="w-5 h-5" />
                    <div className="text-left">
                      <div className="text-xs">Download on</div>
                      <div className="text-sm font-semibold">App Store</div>
                    </div>
                  </a>
                  <a 
                    href="#" 
                    className="inline-flex items-center gap-3 px-6 py-3 bg-white text-orange-600 rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all"
                  >
                    <Download className="w-5 h-5" />
                    <div className="text-left">
                      <div className="text-xs">Get it on</div>
                      <div className="text-sm font-semibold">Google Play</div>
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
              App <span className="text-gradient-sunset">Screenshots</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                "https://files.manuscdn.com/user_upload_by_module/session_file/310419663027599823/xLWDDYoUpTABhfWp.png",
                "https://files.manuscdn.com/user_upload_by_module/session_file/310419663027599823/EVLvPWqvQAXjYPld.png",
                "https://files.manuscdn.com/user_upload_by_module/session_file/310419663027599823/VBjeviPOeFuNsPjP.png",
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
              Demo <span className="text-gradient-sunset">Video</span>
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
                Discover how to use the app in less than 2 minutes
              </p>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20 bg-white">
          <div className="container">
            <h2 className="text-4xl font-bold text-center mb-12">
              Key <span className="text-gradient-sunset">Features</span>
            </h2>
            <div 
              ref={featuresAnim.ref}
              className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto ${featuresAnim.isVisible ? 'animate-fade-in' : 'opacity-0-init translate-y-8-init'}`}
            >
              <div className="p-8 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl border-2 border-orange-100 hover:border-orange-300 hover:shadow-lg transition-all">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center mb-4 shadow-lg">
                  <CheckCircle2 className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-2">Complete Checklist</h3>
                <p className="text-slate-600">
                  19 standard checkpoints + 6 additional points for Adapted Taxi. 
                  Compliant with SAAQ requirements.
                </p>
              </div>

              <div className="p-8 bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl border-2 border-red-100 hover:border-red-300 hover:shadow-lg transition-all">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-500 to-orange-600 flex items-center justify-center mb-4 shadow-lg">
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-2">Patrol History</h3>
                <p className="text-slate-600">
                  View all past inspections with date, time, and detailed results. 
                  Complete traceability guaranteed.
                </p>
              </div>

              <div className="p-8 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl border-2 border-orange-100 hover:border-orange-300 hover:shadow-lg transition-all">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center mb-4 shadow-lg">
                  <FileText className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-2">Email Reports</h3>
                <p className="text-slate-600">
                  Automatic sending of professional PDF reports including all driver, 
                  vehicle, and inspection information.
                </p>
              </div>

              <div className="p-8 bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl border-2 border-red-100 hover:border-red-300 hover:shadow-lg transition-all">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-500 to-orange-600 flex items-center justify-center mb-4 shadow-lg">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-2">Settings Management</h3>
                <p className="text-slate-600">
                  Save your personal information and vehicle details for automatic 
                  filling during future patrols.
                </p>
              </div>

              <div className="p-8 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl border-2 border-orange-100 hover:border-orange-300 hover:shadow-lg transition-all">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center mb-4 shadow-lg">
                  <Wifi className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-2">Offline Mode</h3>
                <p className="text-slate-600">
                  All data is stored locally. No internet connection required 
                  to perform patrols.
                </p>
              </div>

              <div className="p-8 bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl border-2 border-red-100 hover:border-red-300 hover:shadow-lg transition-all">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-500 to-orange-600 flex items-center justify-center mb-4 shadow-lg">
                  <Smartphone className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-2">Intuitive Interface</h3>
                <p className="text-slate-600">
                  Simple and ergonomic design. Complete your daily inspections 
                  in just a few minutes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Checkpoints */}
        <section className="py-20 bg-slate-50">
          <div className="container">
            <h2 className="text-4xl font-bold text-center mb-12">
              Inspection <span className="text-gradient-sunset">Checkpoints</span>
            </h2>
            <div 
              ref={checkpointsAnim.ref}
              className={`max-w-4xl mx-auto space-y-8 ${checkpointsAnim.isVisible ? 'animate-fade-in' : 'opacity-0-init translate-y-8-init'}`}
            >
              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl shadow-xl border-2 border-orange-200">
                <h3 className="text-2xl font-bold mb-6 text-orange-900">19 Standard Points</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Valid driver's license",
                    "Taxi driver authorization",
                    "Registration certificate",
                    "Valid insurance",
                    "Tires - Pressure",
                    "Tires - Wear/Damage",
                    "Headlights",
                    "Tail and brake lights",
                    "Turn signals and hazard lights",
                    "Windshield",
                    "Wipers",
                    "Mirrors",
                    "Doors and body",
                    "Seat belts",
                    "Horn",
                    "Dashboard warning lights",
                    "Brakes",
                    "Steering",
                    "Engine oil level"
                  ].map((point, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-2xl shadow-xl border-2 border-cyan-200">
                <h3 className="text-2xl font-bold mb-6 text-cyan-900">6 Adapted Taxi Points</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Access ramp",
                    "Securing system",
                    "Adapted seat belts",
                    "Clear interior space",
                    "Adapted Taxi signage",
                    "Assistance equipment"
                  ].map((point, index) => (
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
              Frequently Asked <span className="text-gradient-sunset">Questions</span>
            </h2>
            <div 
              ref={faqAnim.ref}
              className={`max-w-3xl mx-auto space-y-6 ${faqAnim.isVisible ? 'animate-fade-in' : 'opacity-0-init translate-y-8-init'}`}
            >
              {[
                { 
                  q: "Is the app free?", 
                  a: "Yes, Ronde Sécurité Taxi is completely free to download and use. No hidden fees or subscriptions." 
                },
                { 
                  q: "Is it compliant with SAAQ regulations?", 
                  a: "Absolutely. The app includes all mandatory checkpoints required by the SAAQ for taxi security patrols in Québec." 
                },
                { 
                  q: "Do I need internet to use the app?", 
                  a: "No. All data is stored locally on your device. You can perform patrols completely offline. Internet is only needed to send email reports." 
                },
                { 
                  q: "Can I use it for multiple vehicles?", 
                  a: "Yes. You can save information for multiple vehicles and switch between them easily in the settings." 
                },
                { 
                  q: "How long are patrol records kept?", 
                  a: "All patrol records are stored indefinitely on your device. You can export or delete them at any time." 
                },
                { 
                  q: "Is there support for Adapted Taxi?", 
                  a: "Yes. The app includes 6 additional checkpoints specifically for Adapted Taxi vehicles, in addition to the 19 standard points." 
                },
                { 
                  q: "Can I get technical support?", 
                  a: "Of course. Contact us at contact@vexarlabs.com for any questions or technical issues." 
                }
              ].map((faq, index) => (
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
              <h2 className="text-4xl font-bold mb-4">Need Help?</h2>
              <p className="text-xl text-orange-50 mb-8">
                Questions about the app? Need technical support? We're here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:contact@vexarlabs.com" 
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-orange-600 rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all"
                >
                  Contact Support
                </a>
                <Link 
                  href="/privacy"
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
