/*
  VexarLabs - Privacy Policy Page with Color Accent
*/

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Database, Share2, Lock, UserCheck, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function PrivacyPolicy() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-16 pt-32">
        <div className="container max-w-3xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
              <Shield className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">{t('privacy.title')}</h1>
              <p className="text-muted-foreground">{t('privacy.company')}</p>
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground mb-10 pb-6 border-b border-border">
            {t('privacy.lastUpdated')} {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="space-y-10">
            <section>
              <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Shield className="w-4 h-4 text-primary" />
                </span>
                {t('privacy.section1.title')}
              </h2>
              <p className="text-muted-foreground leading-relaxed pl-10">
                {t('privacy.section1.content')}
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Database className="w-4 h-4 text-primary" />
                </span>
                {t('privacy.section2.title')}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-3 pl-10">
                {t('privacy.section2.intro')}
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 pl-10">
                <li>{t('privacy.section2.item1')}</li>
                <li>{t('privacy.section2.item2')}</li>
                <li>{t('privacy.section2.item3')}</li>
                <li>{t('privacy.section2.item4')}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Shield className="w-4 h-4 text-primary" />
                </span>
                {t('privacy.section3.title')}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-3 pl-10">
                {t('privacy.section3.intro')}
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 pl-10">
                <li>{t('privacy.section3.item1')}</li>
                <li>{t('privacy.section3.item2')}</li>
                <li>{t('privacy.section3.item3')}</li>
                <li>{t('privacy.section3.item4')}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Share2 className="w-4 h-4 text-primary" />
                </span>
                {t('privacy.section4.title')}
              </h2>
              <p className="text-muted-foreground leading-relaxed pl-10">
                {t('privacy.section4.content')}
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Lock className="w-4 h-4 text-primary" />
                </span>
                {t('privacy.section5.title')}
              </h2>
              <p className="text-muted-foreground leading-relaxed pl-10">
                {t('privacy.section5.content')}
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <UserCheck className="w-4 h-4 text-primary" />
                </span>
                {t('privacy.section6.title')}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-3 pl-10">
                {t('privacy.section6.intro')}
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 pl-10">
                <li>{t('privacy.section6.item1')}</li>
                <li>{t('privacy.section6.item2')}</li>
                <li>{t('privacy.section6.item3')}</li>
                <li>{t('privacy.section6.item4')}</li>
                <li>{t('privacy.section6.item5')}</li>
              </ul>
            </section>

            <section className="p-6 bg-secondary/50 rounded-xl">
              <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary" />
                {t('privacy.section7.title')}
              </h2>
              <p className="text-muted-foreground">
                {t('privacy.section7.content')} <a href="mailto:contact@vexarlabs.com" className="text-primary hover:underline">contact@vexarlabs.com</a>
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
