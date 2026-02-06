/*
  VexarLabs - App-specific Privacy Policy Page with Color Accent
*/

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useParams, Link } from "wouter";
import { ArrowLeft, Shield, Database, Key, Clock, UserCheck, Trash2, Mail, RefreshCw } from "lucide-react";

const appData: Record<string, { name: string; description: string; dataCollected: string[]; permissions: string[]; color: string }> = {
  "ronde-securite-taxi": {
    name: "Ronde de Sécurité Taxi",
    description: "Application mobile de gestion des rondes de sécurité pour chauffeurs de taxi, conforme aux normes de la SAAQ (Société de l'assurance automobile du Québec). Facilite la vérification sommaire quotidienne obligatoire avec checklist de 19 points standard + 6 points Taxi Adapté.",
    dataCollected: [
      "Informations du chauffeur (nom, numéro de permis de conduire, numéro de permis de chauffeur autorisé)",
      "Informations du véhicule (marque, modèle, immatriculation, kilométrage)",
      "Résultats des vérifications (date, heure, état de chaque point, statut global)",
      "Adresse email destinataire (optionnelle, pour envoi automatique des rapports)",
      "Données techniques (version de l'application, type d'appareil, langue)",
    ],
    permissions: [
      "Stockage local (pour sauvegarder l'historique des rondes)",
      "Accès au client email (pour envoi optionnel des rapports par email)",
    ],
    color: "bg-amber-500",
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
    color: "bg-blue-500",
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
    color: "bg-violet-500",
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
            <h1 className="text-2xl font-bold mb-4">Application non trouvée</h1>
            <p className="text-muted-foreground mb-6">
              La politique de confidentialité demandée n'existe pas.
            </p>
            <Link href="/" className="text-primary hover:underline font-medium">
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
          <div className="mb-8">
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Retour aux applications
            </Link>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className={`w-12 h-12 rounded-xl ${app.color} flex items-center justify-center`}>
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Politique de Confidentialité</h1>
              <h2 className="text-lg text-muted-foreground">{app.name}</h2>
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground mb-10 pb-6 border-b border-border">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="space-y-10">
            <section>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Shield className="w-4 h-4 text-primary" />
                </span>
                À propos de cette application
              </h3>
              <p className="text-muted-foreground leading-relaxed pl-10">
                {app.description}
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Database className="w-4 h-4 text-primary" />
                </span>
                Données collectées
              </h3>
              <p className="text-muted-foreground mb-3 pl-10">
                Cette application peut collecter les données suivantes :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 pl-10">
                {app.dataCollected.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Key className="w-4 h-4 text-primary" />
                </span>
                Permissions requises
              </h3>
              <p className="text-muted-foreground mb-3 pl-10">
                L'application peut demander les permissions suivantes :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 pl-10">
                {app.permissions.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Shield className="w-4 h-4 text-primary" />
                </span>
                Utilisation des données
              </h3>
              <p className="text-muted-foreground leading-relaxed pl-10">
                Les données collectées sont utilisées exclusivement pour fournir et améliorer les fonctionnalités 
                de l'application. Nous ne vendons pas vos données personnelles à des tiers.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Shield className="w-4 h-4 text-primary" />
                </span>
                Stockage et sécurité
              </h3>
              <p className="text-muted-foreground leading-relaxed pl-10">
                Vos données sont stockées de manière sécurisée sur des serveurs protégés. Nous utilisons 
                le chiffrement pour protéger les données sensibles en transit et au repos.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Clock className="w-4 h-4 text-primary" />
                </span>
                Conservation des données
              </h3>
              <p className="text-muted-foreground leading-relaxed pl-10">
                Nous conservons vos données aussi longtemps que votre compte est actif ou que nécessaire 
                pour vous fournir nos services. Vous pouvez demander la suppression de vos données à tout moment.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <UserCheck className="w-4 h-4 text-primary" />
                </span>
                Vos droits
              </h3>
              <p className="text-muted-foreground mb-3 pl-10">
                Conformément au RGPD et aux lois applicables, vous avez le droit de :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 pl-10">
                <li>Accéder à vos données personnelles</li>
                <li>Rectifier les données inexactes</li>
                <li>Demander la suppression de vos données</li>
                <li>Exporter vos données (portabilité)</li>
                <li>Vous opposer au traitement de vos données</li>
                <li>Retirer votre consentement à tout moment</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Trash2 className="w-4 h-4 text-primary" />
                </span>
                Suppression du compte
              </h3>
              <p className="text-muted-foreground leading-relaxed pl-10">
                Pour supprimer votre compte et toutes les données associées, envoyez un email à 
                <a href="mailto:contact@vexarlabs.com" className="text-primary hover:underline mx-1">contact@vexarlabs.com</a> 
                avec l'objet "Suppression de compte - {app.name}". Votre demande sera traitée dans un délai de 30 jours.
              </p>
            </section>

            <section className="p-6 bg-secondary/50 rounded-xl">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary" />
                Contact
              </h3>
              <p className="text-muted-foreground mb-4">
                Pour toute question concernant cette politique de confidentialité :
              </p>
              <div className="text-muted-foreground space-y-1">
                <p><strong className="text-foreground">VexarLabs</strong></p>
                <p>Support : <a href="mailto:contact@vexarlabs.com" className="text-primary hover:underline">contact@vexarlabs.com</a></p>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <RefreshCw className="w-4 h-4 text-primary" />
                </span>
                Modifications
              </h3>
              <p className="text-muted-foreground leading-relaxed pl-10">
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
