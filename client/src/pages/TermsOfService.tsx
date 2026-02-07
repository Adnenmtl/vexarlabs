/*
  VexarLabs - Terms of Service Page with Color Accent
*/

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText, CheckCircle, User, Shield, Scale, RefreshCw, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function TermsOfService() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-16 pt-32">
        <div className="container max-w-3xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
              <FileText className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">{t('terms.title')}</h1>
              <p className="text-muted-foreground">{t('terms.company')}</p>
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground mb-10 pb-6 border-b border-border">
            {t('terms.lastUpdated')} {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="space-y-10">
            <section>
              <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-primary" />
                </span>
                {t('terms.section1.title')}
              </h2>
              <p className="text-muted-foreground leading-relaxed pl-10">
                {t('terms.section1.content')}
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileText className="w-4 h-4 text-primary" />
                </span>
                {t('terms.section2.title')}
              </h2>
              <p className="text-muted-foreground leading-relaxed pl-10">
                {t('terms.section2.content')}
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <User className="w-4 h-4 text-primary" />
                </span>
                {t('terms.section3.title')}
              </h2>
              <p className="text-muted-foreground leading-relaxed pl-10">
                {t('terms.section3.content')}
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Shield className="w-4 h-4 text-primary" />
                </span>
                {t('terms.section4.title')}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-3 pl-10">
                {t('terms.section4.intro')}
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 pl-10">
                <li>{t('terms.section4.item1')}</li>
                <li>{t('terms.section4.item2')}</li>
                <li>{t('terms.section4.item3')}</li>
                <li>{t('terms.section4.item4')}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileText className="w-4 h-4 text-primary" />
                </span>
                {t('terms.section5.title')}
              </h2>
              <p className="text-muted-foreground leading-relaxed pl-10">
                {t('terms.section5.content')}
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Scale className="w-4 h-4 text-primary" />
                </span>
                {t('terms.section6.title')}
              </h2>
              <p className="text-muted-foreground leading-relaxed pl-10">
                {t('terms.section6.content')}
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <RefreshCw className="w-4 h-4 text-primary" />
                </span>
                {t('terms.section7.title')}
              </h2>
              <p className="text-muted-foreground leading-relaxed pl-10">
                {t('terms.section7.content')}
              </p>
            </section>

            <section className="p-6 bg-secondary/50 rounded-xl">
              <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary" />
                {t('terms.section8.title')}
              </h2>
              <p className="text-muted-foreground">
                {t('terms.section8.content')} <a href="mailto:contact@vexarlabs.com" className="text-primary hover:underline ml-1">contact@vexarlabs.com</a>
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
