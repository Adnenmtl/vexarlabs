/*
  VexarLabs - Terms of Service Page with Color Accent
*/

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText, CheckCircle, User, Shield, Scale, RefreshCw, Mail } from "lucide-react";

export default function TermsOfService() {
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
              <h1 className="text-2xl font-bold">Conditions d'Utilisation</h1>
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
                  <CheckCircle className="w-4 h-4 text-primary" />
                </span>
                1. Acceptation des conditions
              </h2>
              <p className="text-muted-foreground leading-relaxed pl-10">
                En accédant et en utilisant les applications et services de VexarLabs, vous acceptez d'être lié 
                par ces conditions d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser 
                nos services.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileText className="w-4 h-4 text-primary" />
                </span>
                2. Description des services
              </h2>
              <p className="text-muted-foreground leading-relaxed pl-10">
                VexarLabs fournit des applications mobiles et web conçues pour répondre à divers besoins. 
                Chaque application peut avoir des fonctionnalités et des conditions spécifiques qui s'appliquent 
                en plus de ces conditions générales.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <User className="w-4 h-4 text-primary" />
                </span>
                3. Compte utilisateur
              </h2>
              <p className="text-muted-foreground leading-relaxed pl-10">
                Certaines de nos applications peuvent nécessiter la création d'un compte. Vous êtes responsable 
                de maintenir la confidentialité de vos identifiants de connexion et de toutes les activités 
                effectuées sous votre compte.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Shield className="w-4 h-4 text-primary" />
                </span>
                4. Utilisation acceptable
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-3 pl-10">
                Vous vous engagez à ne pas :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 pl-10">
                <li>Utiliser nos services à des fins illégales</li>
                <li>Tenter de compromettre la sécurité de nos systèmes</li>
                <li>Copier, modifier ou distribuer notre contenu sans autorisation</li>
                <li>Interférer avec le fonctionnement normal de nos services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileText className="w-4 h-4 text-primary" />
                </span>
                5. Propriété intellectuelle
              </h2>
              <p className="text-muted-foreground leading-relaxed pl-10">
                Tous les contenus, marques, logos et éléments visuels présents dans nos applications sont la 
                propriété exclusive de VexarLabs ou de ses partenaires. Toute reproduction non autorisée est interdite.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Scale className="w-4 h-4 text-primary" />
                </span>
                6. Limitation de responsabilité
              </h2>
              <p className="text-muted-foreground leading-relaxed pl-10">
                Nos services sont fournis "en l'état". VexarLabs ne garantit pas que les services seront 
                ininterrompus ou exempts d'erreurs. Dans la mesure permise par la loi, nous déclinons toute 
                responsabilité pour les dommages indirects.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <RefreshCw className="w-4 h-4 text-primary" />
                </span>
                7. Modifications
              </h2>
              <p className="text-muted-foreground leading-relaxed pl-10">
                Nous nous réservons le droit de modifier ces conditions à tout moment. Les modifications 
                prendront effet dès leur publication. Votre utilisation continue des services après 
                modification constitue votre acceptation des nouvelles conditions.
              </p>
            </section>

            <section className="p-6 bg-secondary/50 rounded-xl">
              <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary" />
                8. Contact
              </h2>
              <p className="text-muted-foreground">
                Pour toute question concernant ces conditions, contactez-nous à : 
                <a href="mailto:contact@vexarlabs.com" className="text-primary hover:underline ml-1">contact@vexarlabs.com</a>
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
