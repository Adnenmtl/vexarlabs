/*
  VexarLabs - Privacy Policy Page
  General privacy policy for the company
*/

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-16">
        <div className="container max-w-3xl">
          <h1 className="text-2xl font-semibold mb-2">Politique de Confidentialité</h1>
          <p className="text-sm text-muted-foreground mb-8">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="prose prose-neutral max-w-none">
            <section className="mb-8">
              <h2 className="text-lg font-medium mb-3">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                VexarLabs ("nous", "notre", "nos") s'engage à protéger la confidentialité de vos informations personnelles. 
                Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos données 
                lorsque vous utilisez nos services et applications.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-medium mb-3">2. Informations collectées</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Nous pouvons collecter les types d'informations suivants :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Informations d'identification (nom, adresse email)</li>
                <li>Données d'utilisation des applications</li>
                <li>Informations techniques (type d'appareil, système d'exploitation)</li>
                <li>Données de localisation (si autorisé par l'utilisateur)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-medium mb-3">3. Utilisation des données</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Nous utilisons vos informations pour :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Fournir et améliorer nos services</li>
                <li>Personnaliser votre expérience utilisateur</li>
                <li>Communiquer avec vous concernant nos services</li>
                <li>Assurer la sécurité de nos applications</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-medium mb-3">4. Partage des données</h2>
              <p className="text-muted-foreground leading-relaxed">
                Nous ne vendons pas vos données personnelles. Nous pouvons partager vos informations avec des 
                prestataires de services tiers qui nous aident à exploiter nos applications, sous réserve 
                d'obligations de confidentialité strictes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-medium mb-3">5. Sécurité des données</h2>
              <p className="text-muted-foreground leading-relaxed">
                Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées 
                pour protéger vos données personnelles contre tout accès non autorisé, modification, 
                divulgation ou destruction.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-medium mb-3">6. Vos droits</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Conformément au RGPD et aux lois applicables, vous disposez des droits suivants :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Droit d'accès à vos données personnelles</li>
                <li>Droit de rectification des données inexactes</li>
                <li>Droit à l'effacement de vos données</li>
                <li>Droit à la portabilité des données</li>
                <li>Droit d'opposition au traitement</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-medium mb-3">7. Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits, 
                veuillez nous contacter à : <a href="mailto:contact@vexarlabs.com" className="text-foreground hover:underline">contact@vexarlabs.com</a>
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
