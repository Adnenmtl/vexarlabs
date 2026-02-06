/*
  Ronde de Sécurité Taxi - Page dédiée
  
  Page complète avec description détaillée, vidéo de démonstration, FAQ et badges stores
*/

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ArrowLeft, CheckCircle2, Shield, Clock, FileText, Wifi, Smartphone } from "lucide-react";

export default function RondeSecuriteTaxi() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-amber-50 to-amber-100 py-16">
          <div className="container">
            <Link href="/" className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-900 mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Retour à l'accueil
            </Link>
            
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663027599823/xaZHlbEgJmsATdJf.png" 
                    alt="Icône Ronde de Sécurité Taxi"
                    className="w-20 h-20 rounded-2xl shadow-lg"
                  />
                  <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                      Ronde de Sécurité Taxi
                    </h1>
                    <p className="text-amber-700 font-medium mt-1">Conforme SAAQ</p>
                  </div>
                </div>
                <p className="text-xl text-gray-700 mb-6">
                  Application mobile de gestion des rondes de sécurité pour chauffeurs de taxi au Québec. 
                  Simplifiez vos inspections quotidiennes obligatoires avec notre checklist complète.
                </p>
                
                {/* Badges stores - Placeholder */}
                <div className="flex gap-4 mb-4">
                  <a 
                    href="#" 
                    className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <Smartphone className="w-5 h-5" />
                      <div className="text-left">
                        <div className="text-xs">Télécharger sur</div>
                        <div className="text-sm font-semibold">App Store</div>
                      </div>
                    </div>
                  </a>
                  <a 
                    href="#" 
                    className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <Smartphone className="w-5 h-5" />
                      <div className="text-left">
                        <div className="text-xs">Disponible sur</div>
                        <div className="text-sm font-semibold">Google Play</div>
                      </div>
                    </div>
                  </a>
                </div>
                <p className="text-sm text-gray-600">Disponible sur iOS et Android</p>
              </div>
              
              <div className="flex-1">
                <img 
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663027599823/eGTfKRmQxWBCYkVN.png" 
                  alt="Capture d'écran de l'application"
                  className="w-full max-w-sm mx-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Vidéo de démonstration */}
        <section className="py-16 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-8">Vidéo de démonstration</h2>
            <div className="max-w-4xl mx-auto">
              <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Démonstration Ronde de Sécurité Taxi"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="text-center text-sm text-gray-600 mt-4">
                Découvrez comment utiliser l'application en moins de 2 minutes
              </p>
            </div>
          </div>
        </section>

        {/* Fonctionnalités principales */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Fonctionnalités principales</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Checklist complète</h3>
                <p className="text-gray-600">
                  19 points de vérification standard + 6 points supplémentaires pour Taxi Adapté. 
                  Conforme aux exigences de la SAAQ.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Historique des rondes</h3>
                <p className="text-gray-600">
                  Consultez toutes vos inspections passées avec date, heure et résultats détaillés. 
                  Traçabilité complète garantie.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Rapports par email</h3>
                <p className="text-gray-600">
                  Envoi automatique d'un rapport professionnel PDF incluant toutes les informations 
                  du chauffeur, du véhicule et des vérifications.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Gestion des paramètres</h3>
                <p className="text-gray-600">
                  Sauvegardez vos informations personnelles et celles de votre véhicule pour un 
                  remplissage automatique lors des prochaines rondes.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <Wifi className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Mode hors-ligne</h3>
                <p className="text-gray-600">
                  Toutes les données sont stockées localement. Aucune connexion internet requise 
                  pour effectuer les rondes.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Interface intuitive</h3>
                <p className="text-gray-600">
                  Design simple et ergonomique. Effectuez vos inspections quotidiennes en quelques 
                  minutes seulement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Points de vérification */}
        <section className="py-16 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Points de vérification</h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-amber-50 p-8 rounded-lg shadow-md mb-8">
                <h3 className="text-2xl font-semibold mb-6 text-amber-900">19 points standard</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Permis de conduire valide",
                    "Autorisation de chauffeur de taxi",
                    "Certificat d'immatriculation",
                    "Assurance valide",
                    "Pneus - Pression",
                    "Pneus - Usure/Dommages",
                    "Phares",
                    "Feux arrière et freinage",
                    "Clignotants et feux de détresse",
                    "Pare-brise",
                    "Essuie-glaces",
                    "Rétroviseurs",
                    "Portes et carrosserie",
                    "Ceintures de sécurité",
                    "Klaxon",
                    "Voyants du tableau de bord",
                    "Freins",
                    "Direction",
                    "Niveau d'huile moteur"
                  ].map((point, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50 p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-6 text-blue-900">6 points Taxi Adapté</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Rampe d'accès",
                    "Système d'arrimage",
                    "Ceintures de sécurité adaptées",
                    "Espace intérieur dégagé",
                    "Signalisation Taxi Adapté",
                    "Équipements d'assistance"
                  ].map((point, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Questions fréquentes</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">L'application est-elle conforme aux normes de la SAAQ ?</h3>
                <p className="text-gray-600">
                  Oui, l'application respecte toutes les exigences de la SAAQ pour les vérifications 
                  sommaires quotidiennes des véhicules taxi. La checklist comprend les 19 points 
                  obligatoires ainsi que les 6 points supplémentaires pour les taxis adaptés.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Ai-je besoin d'une connexion internet ?</h3>
                <p className="text-gray-600">
                  Non, l'application fonctionne entièrement hors-ligne. Toutes vos données sont 
                  stockées localement sur votre appareil. Une connexion internet est uniquement 
                  nécessaire pour l'envoi optionnel des rapports par email.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Mes données sont-elles sécurisées ?</h3>
                <p className="text-gray-600">
                  Absolument. Toutes vos données restent sur votre appareil et ne sont jamais 
                  partagées avec des tiers. Nous ne collectons aucune information personnelle. 
                  Consultez notre <Link href="/app/ronde-securite-taxi/privacy" className="text-amber-600 hover:underline">politique de confidentialité</Link> pour plus de détails.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Puis-je consulter l'historique de mes rondes ?</h3>
                <p className="text-gray-600">
                  Oui, l'application conserve un historique complet de toutes vos inspections avec 
                  la date, l'heure, la durée et les résultats détaillés de chaque point de vérification. 
                  Vous pouvez consulter cet historique à tout moment.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Comment fonctionne l'envoi des rapports par email ?</h3>
                <p className="text-gray-600">
                  Après chaque ronde, vous pouvez générer un rapport PDF professionnel et l'envoyer 
                  automatiquement par email à l'adresse de votre choix. Le rapport inclut toutes les 
                  informations du chauffeur, du véhicule et le détail de chaque point vérifié.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">L'application est-elle gratuite ?</h3>
                <p className="text-gray-600">
                  Oui, l'application Ronde de Sécurité Taxi est entièrement gratuite, sans publicité 
                  ni achat intégré. Notre objectif est d'aider les chauffeurs de taxi à respecter 
                  facilement les normes de sécurité de la SAAQ.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-amber-500 to-amber-600 text-white">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Prêt à simplifier vos rondes de sécurité ?
            </h2>
            <p className="text-xl mb-8 text-amber-50">
              Téléchargez l'application gratuitement dès aujourd'hui
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#" 
                className="inline-block bg-white text-amber-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold shadow-lg"
              >
                <div className="flex items-center gap-3 justify-center">
                  <Smartphone className="w-6 h-6" />
                  <div className="text-left">
                    <div className="text-xs text-gray-600">Télécharger sur</div>
                    <div className="text-lg">App Store</div>
                  </div>
                </div>
              </a>
              <a 
                href="#" 
                className="inline-block bg-white text-amber-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold shadow-lg"
              >
                <div className="flex items-center gap-3 justify-center">
                  <Smartphone className="w-6 h-6" />
                  <div className="text-left">
                    <div className="text-xs text-gray-600">Disponible sur</div>
                    <div className="text-lg">Google Play</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
