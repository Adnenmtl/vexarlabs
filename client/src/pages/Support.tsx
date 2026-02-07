/*
  VexarLabs - Support Page
*/

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, HelpCircle, Trash2, Download, AlertCircle } from "lucide-react";

export default function Support() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      
      <main className="flex-1 py-16 pt-32">
        <div className="container max-w-3xl">
          <h1 className="text-4xl font-bold mb-3">Support</h1>
          <p className="text-slate-600 text-lg mb-10">
            We're here to help.
          </p>

          <div className="space-y-8">
            <section className="p-8 bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-200 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl shadow-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">Contact us by email</h2>
                  <p className="text-slate-700 mb-4">
                    For any questions, technical issues, or assistance requests regarding our applications, 
                    send us an email. We typically respond within 24-48 hours.
                  </p>
                  <a 
                    href="mailto:contact@vexarlabs.com" 
                    className="inline-flex items-center gap-2 text-orange-600 font-bold hover:text-orange-700 transition-colors"
                  >
                    contact@vexarlabs.com
                  </a>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <HelpCircle className="w-6 h-6 text-orange-500" />
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-4">
                <div className="p-6 bg-white border-2 border-slate-100 rounded-xl hover:border-orange-200 transition-colors">
                  <div className="flex items-start gap-3">
                    <Trash2 className="w-5 h-5 text-slate-500 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">How do I delete my account?</h3>
                      <p className="text-sm text-slate-600">
                        To delete your account and data, send us an email at contact@vexarlabs.com 
                        with the subject "Account Deletion". We will process your request within 30 days.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-white border-2 border-slate-100 rounded-xl hover:border-orange-200 transition-colors">
                  <div className="flex items-start gap-3">
                    <Download className="w-5 h-5 text-slate-500 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">How do I retrieve my data?</h3>
                      <p className="text-sm text-slate-600">
                        In accordance with GDPR, you can request a copy of your personal data. 
                        Contact us by email with the subject "Data Request".
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-white border-2 border-slate-100 rounded-xl hover:border-orange-200 transition-colors">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-slate-500 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">The app isn't working properly</h3>
                      <p className="text-sm text-slate-600">
                        First try updating the app to the latest version. 
                        If the problem persists, contact us describing the issue and your device.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="p-8 bg-slate-100 rounded-2xl">
              <h2 className="text-xl font-bold mb-4">Contact Information</h2>
              <div className="text-sm text-slate-600 space-y-2">
                <p><strong className="text-slate-900">VexarLabs</strong></p>
                <p>Email: <a href="mailto:contact@vexarlabs.com" className="text-orange-600 font-semibold hover:text-orange-700">contact@vexarlabs.com</a></p>
                <p>Support: <a href="mailto:contact@vexarlabs.com" className="text-orange-600 font-semibold hover:text-orange-700">contact@vexarlabs.com</a></p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
