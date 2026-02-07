/*
  Influvo - Creator Economy Tools
  Creative & Bold Design
*/

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ArrowLeft, Sparkles, Zap, TrendingUp, Brain, Workflow, BarChart } from "lucide-react";

export default function Influvo() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzR2LTRoLTJ2NGgtNHYyaDR2NGgydi00aDR2LTJoLTR6bTAtMzBWMGgtMnY0aC00djJoNHY0aDJWNmg0VjRoLTR6TTYgMzR2LTRINHY0SDB2Mmg0djRoMnYtNGg0di0ySDZ6TTYgNFYwSDR2NEgwdjJoNHY0aDJWNmg0VjRINnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
          
          <div className="container relative z-10">
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-purple-100 hover:text-white transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Products
            </Link>
            
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <img 
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=200&h=200&fit=crop"
                alt="Influvo icon"
                className="w-28 h-28 rounded-3xl shadow-2xl flex-shrink-0 object-cover border-4 border-white/20"
              />
              <div className="flex-1">
                <div className="mb-3">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">Creator Economy Tools</span>
                  <span className="text-sm text-purple-100 ml-2">Global digital creators</span>
                </div>
                <h1 className="text-5xl font-bold mb-4">Influvo</h1>
                <p className="text-xl text-purple-50 mb-6 max-w-2xl">
                  AI-assisted automation platform designed to support content creators in scaling digital presence.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-lg text-sm font-medium">Web</span>
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-lg text-sm font-medium">iOS</span>
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-lg text-sm font-medium">Android</span>
                  <span className="px-3 py-1 bg-white text-purple-600 rounded-lg text-sm font-bold">Advanced Development Phase</span>
                </div>
                <a 
                  href="https://influvo.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-600 rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all"
                >
                  <Sparkles className="w-5 h-5" />
                  Visit Influvo.ai
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
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border-2 border-purple-100 hover:border-purple-300 hover:shadow-lg transition-all">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mb-4 shadow-lg">
                  <Brain className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-2">AI-driven content workflows</h3>
                <p className="text-slate-600">
                  Leverage advanced AI to streamline content creation, from ideation to publication. Smart suggestions help you create engaging content faster.
                </p>
              </div>
              
              <div className="p-8 bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl border-2 border-pink-100 hover:border-pink-300 hover:shadow-lg transition-all">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center mb-4 shadow-lg">
                  <Workflow className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-2">Automation systems</h3>
                <p className="text-slate-600">
                  Automate repetitive tasks like scheduling, cross-posting, and engagement tracking. Focus on creativity while Influvo handles the routine work.
                </p>
              </div>
              
              <div className="p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border-2 border-purple-100 hover:border-purple-300 hover:shadow-lg transition-all">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mb-4 shadow-lg">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-2">Growth optimization tools</h3>
                <p className="text-slate-600">
                  Data-driven insights and recommendations to help you grow your audience, increase engagement, and maximize reach across platforms.
                </p>
              </div>
              
              <div className="p-8 bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl border-2 border-pink-100 hover:border-pink-300 hover:shadow-lg transition-all">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center mb-4 shadow-lg">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-2">Scalable backend infrastructure</h3>
                <p className="text-slate-600">
                  Built on robust, scalable architecture that grows with your needs. From solo creators to large teams, Influvo adapts to your workflow.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About the Platform */}
        <section className="py-20 bg-slate-50">
          <div className="container">
            <h2 className="text-4xl font-bold mb-8">About the Platform</h2>
            <div className="max-w-3xl space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                Influvo is designed for the modern content creator who wants to scale their digital presence without getting 
                overwhelmed by the operational complexity. Whether you're a solo creator, part of a content team, or managing 
                multiple brands, Influvo provides the tools you need to work smarter, not harder.
              </p>
              <p>
                The platform combines artificial intelligence with practical automation to handle time-consuming tasks like 
                content scheduling, performance tracking, and audience analysis. This allows creators to focus on what they 
                do best: creating compelling content that resonates with their audience.
              </p>
              <p>
                Built with a scalable backend infrastructure, Influvo is designed to grow alongside your creator journey. 
                From your first post to managing a global audience, the platform adapts to your evolving needs while maintaining 
                simplicity and ease of use.
              </p>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 bg-white">
          <div className="container">
            <h2 className="text-4xl font-bold mb-12 text-center">
              Who Benefits from <span className="text-gradient-sunset">Influvo?</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { icon: Sparkles, title: "Solo Creators", desc: "Streamline your workflow and grow your audience without hiring a team. Influvo acts as your AI-powered assistant." },
                { icon: BarChart, title: "Content Teams", desc: "Coordinate multi-person workflows, track performance across channels, and maintain consistent brand voice." },
                { icon: TrendingUp, title: "Agencies & Brands", desc: "Manage multiple clients or brands from one platform with powerful automation and detailed analytics." }
              ].map((useCase, index) => {
                const Icon = useCase.icon;
                return (
                  <div key={index} className="p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border-2 border-purple-100 hover:border-purple-300 hover:shadow-lg transition-all">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mb-4 shadow-lg">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-bold text-xl mb-2">{useCase.title}</h3>
                    <p className="text-slate-600">{useCase.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-slate-50">
          <div className="container">
            <h2 className="text-4xl font-bold mb-12 text-center">
              Frequently Asked <span className="text-gradient-sunset">Questions</span>
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                { q: "When will Influvo be available?", a: "Influvo is currently in advanced development phase. We're working hard to bring this platform to creators worldwide. Visit influvo.ai to stay updated on our launch timeline." },
                { q: "Which platforms does Influvo support?", a: "Influvo will be available as a web application with companion mobile apps for iOS and Android, allowing you to manage your content from anywhere." },
                { q: "How does the AI content workflow work?", a: "Influvo's AI analyzes your content style, audience preferences, and performance data to provide intelligent suggestions for topics, timing, and optimization. You remain in full control while benefiting from AI-powered insights." },
                { q: "Is Influvo suitable for beginners?", a: "Absolutely. While Influvo offers advanced features for experienced creators, the interface is designed to be intuitive and accessible for creators at any stage of their journey." },
                { q: "How can I get early access?", a: "Interested in being among the first to try Influvo? Contact us at contact@vexarlabs.com to learn about early access opportunities." }
              ].map((faq, index) => (
                <div key={index} className="p-6 bg-white rounded-xl border-2 border-slate-100 hover:border-purple-200 transition-all">
                  <h3 className="font-bold text-lg mb-2">{faq.q}</h3>
                  <p className="text-slate-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-20 bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 text-white">
          <div className="container">
            <div className="max-w-xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-4">Stay Connected</h2>
              <p className="text-xl text-purple-50 mb-8">
                Want to learn more about Influvo or get notified when we launch? Reach out to our team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:contact@vexarlabs.com" 
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-purple-600 rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all"
                >
                  Get in Touch
                </a>
                <Link 
                  href="/app/influvo/privacy"
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
