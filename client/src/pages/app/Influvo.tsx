/*
  Influvo - Creator Economy Tools
  AI-assisted automation platform for content creators
*/

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ArrowLeft, Sparkles, Zap, TrendingUp, Brain, Workflow, BarChart } from "lucide-react";

export default function Influvo() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-violet-50 via-purple-50/30 to-white">
          <div className="container">
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" />
              Back to Products
            </Link>
            
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <img 
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=200&h=200&fit=crop"
                alt="Influvo icon"
                className="w-24 h-24 rounded-2xl shadow-lg flex-shrink-0 object-cover"
              />
              <div className="flex-1">
                <div className="mb-3">
                  <span className="text-sm font-medium text-primary">Creator Economy Tools</span>
                  <span className="text-sm text-muted-foreground"> • Global digital creators</span>
                </div>
                <h1 className="text-4xl font-bold mb-4">Influvo</h1>
                <p className="text-lg text-muted-foreground mb-6">
                  AI-assisted automation platform designed to support content creators in scaling digital presence.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-xs px-3 py-1 bg-secondary text-secondary-foreground rounded-full font-medium">
                    Web
                  </span>
                  <span className="text-xs px-3 py-1 bg-secondary text-secondary-foreground rounded-full font-medium">
                    iOS
                  </span>
                  <span className="text-xs px-3 py-1 bg-secondary text-secondary-foreground rounded-full font-medium">
                    Android
                  </span>
                  <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">
                    Advanced Development Phase
                  </span>
                </div>
                <a 
                  href="https://influvo.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  <Sparkles className="w-4 h-4" />
                  Visit Influvo.ai
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
              <div className="p-6 bg-gradient-to-br from-violet-50 to-white rounded-lg border border-border">
                <div className="w-12 h-12 rounded-lg bg-violet-500/10 flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-violet-600" />
                </div>
                <h3 className="font-semibold mb-2">AI-driven content workflows</h3>
                <p className="text-sm text-muted-foreground">
                  Leverage advanced AI to streamline content creation, from ideation to publication. Smart suggestions help you create engaging content faster.
                </p>
              </div>
              
              <div className="p-6 bg-gradient-to-br from-purple-50 to-white rounded-lg border border-border">
                <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
                  <Workflow className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">Automation systems</h3>
                <p className="text-sm text-muted-foreground">
                  Automate repetitive tasks like scheduling, cross-posting, and engagement tracking. Focus on creativity while Influvo handles the routine work.
                </p>
              </div>
              
              <div className="p-6 bg-gradient-to-br from-violet-50 to-white rounded-lg border border-border">
                <div className="w-12 h-12 rounded-lg bg-violet-500/10 flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-violet-600" />
                </div>
                <h3 className="font-semibold mb-2">Growth optimization tools</h3>
                <p className="text-sm text-muted-foreground">
                  Data-driven insights and recommendations to help you grow your audience, increase engagement, and maximize reach across platforms.
                </p>
              </div>
              
              <div className="p-6 bg-gradient-to-br from-purple-50 to-white rounded-lg border border-border">
                <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">Scalable backend infrastructure</h3>
                <p className="text-sm text-muted-foreground">
                  Built on robust, scalable architecture that grows with your needs. From solo creators to large teams, Influvo adapts to your workflow.
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
        <section className="py-16 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8">Who Benefits from Influvo?</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl">
              <div className="p-6 bg-gradient-to-br from-violet-50 to-white rounded-lg border border-border">
                <div className="w-12 h-12 rounded-lg bg-violet-500/10 flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-violet-600" />
                </div>
                <h3 className="font-semibold mb-2">Solo Creators</h3>
                <p className="text-sm text-muted-foreground">
                  Streamline your workflow and grow your audience without hiring a team. Influvo acts as your AI-powered assistant.
                </p>
              </div>
              
              <div className="p-6 bg-gradient-to-br from-purple-50 to-white rounded-lg border border-border">
                <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
                  <BarChart className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">Content Teams</h3>
                <p className="text-sm text-muted-foreground">
                  Coordinate multi-person workflows, track performance across channels, and maintain consistent brand voice.
                </p>
              </div>
              
              <div className="p-6 bg-gradient-to-br from-violet-50 to-white rounded-lg border border-border">
                <div className="w-12 h-12 rounded-lg bg-violet-500/10 flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-violet-600" />
                </div>
                <h3 className="font-semibold mb-2">Agencies & Brands</h3>
                <p className="text-sm text-muted-foreground">
                  Manage multiple clients or brands from one platform with powerful automation and detailed analytics.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-secondary/30">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
            <div className="max-w-3xl space-y-6">
              <div>
                <h3 className="font-semibold mb-2">When will Influvo be available?</h3>
                <p className="text-muted-foreground">
                  Influvo is currently in advanced development phase. We're working hard to bring this platform to creators worldwide. 
                  Visit influvo.ai to stay updated on our launch timeline.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Which platforms does Influvo support?</h3>
                <p className="text-muted-foreground">
                  Influvo will be available as a web application with companion mobile apps for iOS and Android, allowing you to 
                  manage your content from anywhere.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">How does the AI content workflow work?</h3>
                <p className="text-muted-foreground">
                  Influvo's AI analyzes your content style, audience preferences, and performance data to provide intelligent 
                  suggestions for topics, timing, and optimization. You remain in full control while benefiting from AI-powered insights.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Is Influvo suitable for beginners?</h3>
                <p className="text-muted-foreground">
                  Absolutely. While Influvo offers advanced features for experienced creators, the interface is designed to be 
                  intuitive and accessible for creators at any stage of their journey.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">How can I get early access?</h3>
                <p className="text-muted-foreground">
                  Interested in being among the first to try Influvo? Contact us at contact@vexarlabs.com to learn about early 
                  access opportunities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-16 bg-gradient-to-br from-violet-50 via-purple-50/30 to-white">
          <div className="container">
            <div className="max-w-xl">
              <h2 className="text-2xl font-bold mb-4">Stay Connected</h2>
              <p className="text-muted-foreground mb-6">
                Want to learn more about Influvo or get notified when we launch? Reach out to our team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="mailto:contact@vexarlabs.com" 
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  Get in Touch
                </a>
                <Link 
                  href="/app/influvo/privacy"
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
