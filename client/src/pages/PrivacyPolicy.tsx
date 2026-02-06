/*
  VexarLabs - Privacy Policy Page with Color Accent
*/

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Database, Share2, Lock, UserCheck, Mail } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-16">
        <div className="container max-w-3xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
              <Shield className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Politique de Confidentialité</h1>
              <p className="text-muted-foreground">VexarLabs</p>
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground mb-10 pb-6 border-b border-border">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="space-y-10">
            <section>
              <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Shield className="w-4 h-4 text-primary" />
                </span>
                1. Introduction
              </h2>
              <p className="text-muted-foreground leading-relaxed pl-10">
                VexarLabs ("nous", "notre", "nos") s'engage à protéger la confidentialité de vos informations personnelles. 
                Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos données 
                lorsque vous utilisez nos services et applications.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Database className="w-4 h-4 text-primary" />
                </span>
                2. Informations collectées
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-3 pl-10">
                Nous pouvons collecter les types d'informations suivants :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 pl-10">
                <li>Informations d'identification (nom, adresse email)</li>
                <li>Données d'utilisation des applications</li>
                <li>Informations techniques (type d'appareil, système d'exploitation)</li>
                <li>Données de localisation (si autorisé par l'utilisateur)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Shield className="w-4 h-4 text-primary" />
                </span>
                3. Utilisation des données
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-3 pl-10">
                Nous utilisons vos informations pour :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 pl-10">
                <li>Fournir et améliorer nos services</li>
                <li>Personnaliser votre expérience utilisateur</li>
                <li>Communiquer avec vous concernant nos services</li>
                <li>Assurer la sécurité de nos applications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Share2 className="w-4 h-4 text-primary" />
                </span>
                4. Partage des données
              </h2>
              <p className="text-muted-foreground leading-relaxed pl-10">
                Nous ne vendons pas vos données personnelles. Nous pouvons partager vos informations avec des 
                prestataires de services tiers qui nous aident à exploiter nos applications, sous réserve 
                d'obligations de confidentialité strictes.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Lock className="w-4 h-4 text-primary" />
                </span>
                5. Sécurité des données
              </h2>
              <p className="text-muted-foreground leading-relaxed pl-10">
                Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées 
                pour protéger vos données personnelles contre tout accès non autorisé, modification, 
                divulgation ou destruction.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <UserCheck className="w-4 h-4 text-primary" />
                </span>
                6. Vos droits
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-3 pl-10">
                Conformément au RGPD et aux lois applicables, vous disposez des droits suivants :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 pl-10">
                <li>Droit d'accès à vos données personnelles</li>
                <li>Droit de rectification des données inexactes</li>
                <li>Droit à l'effacement de vos données</li>
                <li>Droit à la portabilité des données</li>
                <li>Droit d'opposition au traitement</li>
              </ul>
            </section>

            <section className="p-6 bg-secondary/50 rounded-xl">
              <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary" />
                7. Contact
              </h2>
              <p className="text-muted-foreground">
                Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits, 
                veuillez nous contacter à : <a href="mailto:contact@vexarlabs.com" className="text-primary hover:underline">contact@vexarlabs.com</a>
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
