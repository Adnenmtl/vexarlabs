/*
  VexarLabs - Terms of Service Page
*/

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsOfService() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-16">
        <div className="container max-w-3xl">
          <h1 className="text-2xl font-semibold mb-2">Conditions d'Utilisation</h1>
          <p className="text-sm text-muted-foreground mb-8">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="prose prose-neutral max-w-none">
            <section className="mb-8">
              <h2 className="text-lg font-medium mb-3">1. Acceptation des conditions</h2>
              <p className="text-muted-foreground leading-relaxed">
                En accédant et en utilisant les applications et services de VexarLabs, vous acceptez d'être lié 
                par ces conditions d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser 
                nos services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-medium mb-3">2. Description des services</h2>
              <p className="text-muted-foreground leading-relaxed">
                VexarLabs fournit des applications mobiles et web conçues pour répondre à divers besoins. 
                Chaque application peut avoir des fonctionnalités et des conditions spécifiques qui s'appliquent 
                en plus de ces conditions générales.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-medium mb-3">3. Compte utilisateur</h2>
              <p className="text-muted-foreground leading-relaxed">
                Certaines de nos applications peuvent nécessiter la création d'un compte. Vous êtes responsable 
                de maintenir la confidentialité de vos identifiants de connexion et de toutes les activités 
                effectuées sous votre compte.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-medium mb-3">4. Utilisation acceptable</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Vous vous engagez à ne pas :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Utiliser nos services à des fins illégales</li>
                <li>Tenter de compromettre la sécurité de nos systèmes</li>
                <li>Copier, modifier ou distribuer notre contenu sans autorisation</li>
                <li>Interférer avec le fonctionnement normal de nos services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-medium mb-3">5. Propriété intellectuelle</h2>
              <p className="text-muted-foreground leading-relaxed">
                Tous les contenus, marques, logos et éléments visuels présents dans nos applications sont la 
                propriété exclusive de VexarLabs ou de ses partenaires. Toute reproduction non autorisée est interdite.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-medium mb-3">6. Limitation de responsabilité</h2>
              <p className="text-muted-foreground leading-relaxed">
                Nos services sont fournis "en l'état". VexarLabs ne garantit pas que les services seront 
                ininterrompus ou exempts d'erreurs. Dans la mesure permise par la loi, nous déclinons toute 
                responsabilité pour les dommages indirects.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-medium mb-3">7. Modifications</h2>
              <p className="text-muted-foreground leading-relaxed">
                Nous nous réservons le droit de modifier ces conditions à tout moment. Les modifications 
                prendront effet dès leur publication. Votre utilisation continue des services après 
                modification constitue votre acceptation des nouvelles conditions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-medium mb-3">8. Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                Pour toute question concernant ces conditions, contactez-nous à : 
                <a href="mailto:contact@vexarlabs.com" className="text-foreground hover:underline ml-1">contact@vexarlabs.com</a>
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
