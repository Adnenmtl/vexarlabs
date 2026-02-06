/*
  VexarLabs - App-specific Privacy Policy Page
  Dynamic page for each application's privacy policy
*/

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useParams, Link } from "wouter";

const appData: Record<string, { name: string; description: string; dataCollected: string[]; permissions: string[] }> = {
  "ronde-securite-taxi": {
    name: "Ronde de Sécurité Taxi",
    description: "Application de sécurité pour les chauffeurs de taxi avec système de rondes automatisées et alertes en temps réel.",
    dataCollected: [
      "Données de localisation GPS (pour le suivi des rondes)",
      "Informations du compte utilisateur (nom, email, numéro de téléphone)",
      "Historique des rondes et alertes",
      "Identifiants de l'appareil",
    ],
    permissions: [
      "Localisation (en arrière-plan pour le suivi des rondes)",
      "Notifications push (pour les alertes de sécurité)",
      "Accès réseau (pour la synchronisation des données)",
    ],
  },
  "fmarabia": {
    name: "FMarabia",
    description: "Application FMarabia.app - Votre solution mobile innovante.",
    dataCollected: [
      "Informations du compte utilisateur",
      "Données d'utilisation de l'application",
      "Préférences utilisateur",
      "Identifiants de l'appareil",
    ],
    permissions: [
      "Notifications push",
      "Accès réseau",
      "Stockage local",
    ],
  },
  "influvo": {
    name: "Influvo",
    description: "Influvo.ai - Plateforme intelligente alimentée par l'IA.",
    dataCollected: [
      "Informations du compte utilisateur",
      "Contenu généré par l'utilisateur",
      "Données d'utilisation et interactions avec l'IA",
      "Préférences et paramètres",
      "Identifiants de l'appareil",
    ],
    permissions: [
      "Notifications push",
      "Accès réseau",
      "Stockage local",
      "Caméra (si fonctionnalité utilisée)",
      "Microphone (si fonctionnalité utilisée)",
    ],
  },
};

export default function AppPrivacy() {
  const { appId } = useParams<{ appId: string }>();
  const app = appId ? appData[appId] : null;

  if (!app) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 py-16">
          <div className="container max-w-3xl text-center">
            <h1 className="text-2xl font-semibold mb-4">Application non trouvée</h1>
            <p className="text-muted-foreground mb-6">
              La politique de confidentialité demandée n'existe pas.
            </p>
            <Link href="/" className="text-foreground hover:underline">
              Retour à l'accueil
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-16">
        <div className="container max-w-3xl">
          <div className="mb-6">
            <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              ← Retour aux applications
            </Link>
          </div>

          <h1 className="text-2xl font-semibold mb-2">Politique de Confidentialité</h1>
          <h2 className="text-lg text-muted-foreground mb-2">{app.name}</h2>
          <p className="text-sm text-muted-foreground mb-8">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="prose prose-neutral max-w-none">
            <section className="mb-8">
              <h3 className="text-lg font-medium mb-3">À propos de cette application</h3>
              <p className="text-muted-foreground leading-relaxed">
                {app.description}
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-lg font-medium mb-3">Données collectées</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Cette application peut collecter les données suivantes :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                {app.dataCollected.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="mb-8">
              <h3 className="text-lg font-medium mb-3">Permissions requises</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                L'application peut demander les permissions suivantes :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                {app.permissions.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="mb-8">
              <h3 className="text-lg font-medium mb-3">Utilisation des données</h3>
              <p className="text-muted-foreground leading-relaxed">
                Les données collectées sont utilisées exclusivement pour fournir et améliorer les fonctionnalités 
                de l'application. Nous ne vendons pas vos données personnelles à des tiers.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-lg font-medium mb-3">Stockage et sécurité</h3>
              <p className="text-muted-foreground leading-relaxed">
                Vos données sont stockées de manière sécurisée sur des serveurs protégés. Nous utilisons 
                le chiffrement pour protéger les données sensibles en transit et au repos.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-lg font-medium mb-3">Conservation des données</h3>
              <p className="text-muted-foreground leading-relaxed">
                Nous conservons vos données aussi longtemps que votre compte est actif ou que nécessaire 
                pour vous fournir nos services. Vous pouvez demander la suppression de vos données à tout moment.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-lg font-medium mb-3">Vos droits</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Conformément au RGPD et aux lois applicables, vous avez le droit de :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Accéder à vos données personnelles</li>
                <li>Rectifier les données inexactes</li>
                <li>Demander la suppression de vos données</li>
                <li>Exporter vos données (portabilité)</li>
                <li>Vous opposer au traitement de vos données</li>
                <li>Retirer votre consentement à tout moment</li>
              </ul>
            </section>

            <section className="mb-8">
              <h3 className="text-lg font-medium mb-3">Suppression du compte</h3>
              <p className="text-muted-foreground leading-relaxed">
                Pour supprimer votre compte et toutes les données associées, envoyez un email à 
                <a href="mailto:support@vexarlabs.com" className="text-foreground hover:underline ml-1">support@vexarlabs.com</a> 
                avec l'objet "Suppression de compte - {app.name}". Votre demande sera traitée dans un délai de 30 jours.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-lg font-medium mb-3">Contact</h3>
              <p className="text-muted-foreground leading-relaxed">
                Pour toute question concernant cette politique de confidentialité :
              </p>
              <div className="mt-3 text-muted-foreground">
                <p><strong className="text-foreground">VexarLabs</strong></p>
                <p>Email : <a href="mailto:contact@vexarlabs.com" className="text-foreground hover:underline">contact@vexarlabs.com</a></p>
                <p>Support : <a href="mailto:support@vexarlabs.com" className="text-foreground hover:underline">support@vexarlabs.com</a></p>
              </div>
            </section>

            <section className="mb-8">
              <h3 className="text-lg font-medium mb-3">Modifications</h3>
              <p className="text-muted-foreground leading-relaxed">
                Nous pouvons mettre à jour cette politique de confidentialité de temps en temps. 
                Nous vous informerons de tout changement important via l'application ou par email.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
