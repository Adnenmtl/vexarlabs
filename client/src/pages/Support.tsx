/*
  VexarLabs - Support Page
*/

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail } from "lucide-react";

export default function Support() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-16">
        <div className="container max-w-3xl">
          <h1 className="text-2xl font-semibold mb-2">Support</h1>
          <p className="text-muted-foreground mb-8">
            Nous sommes là pour vous aider.
          </p>

          <div className="space-y-8">
            <section className="p-6 border border-border rounded-lg">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-secondary rounded">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-medium mb-2">Contactez-nous par email</h2>
                  <p className="text-muted-foreground text-sm mb-4">
                    Pour toute question, problème technique ou demande d'assistance concernant nos applications, 
                    envoyez-nous un email. Nous répondons généralement sous 24-48 heures.
                  </p>
                  <a 
                    href="mailto:support@vexarlabs.com" 
                    className="inline-flex items-center gap-2 text-foreground hover:underline"
                  >
                    support@vexarlabs.com
                  </a>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-medium mb-4">Questions fréquentes</h2>
              
              <div className="space-y-4">
                <div className="p-4 border border-border rounded-lg">
                  <h3 className="font-medium mb-2">Comment supprimer mon compte ?</h3>
                  <p className="text-sm text-muted-foreground">
                    Pour supprimer votre compte et vos données, envoyez-nous un email à support@vexarlabs.com 
                    avec l'objet "Suppression de compte". Nous traiterons votre demande dans les 30 jours.
                  </p>
                </div>

                <div className="p-4 border border-border rounded-lg">
                  <h3 className="font-medium mb-2">Comment récupérer mes données ?</h3>
                  <p className="text-sm text-muted-foreground">
                    Conformément au RGPD, vous pouvez demander une copie de vos données personnelles. 
                    Contactez-nous par email avec l'objet "Demande de données".
                  </p>
                </div>

                <div className="p-4 border border-border rounded-lg">
                  <h3 className="font-medium mb-2">L'application ne fonctionne pas correctement</h3>
                  <p className="text-sm text-muted-foreground">
                    Essayez d'abord de mettre à jour l'application vers la dernière version. 
                    Si le problème persiste, contactez-nous en décrivant le problème et votre appareil.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-medium mb-4">Informations de contact</h2>
              <div className="text-sm text-muted-foreground space-y-2">
                <p><strong className="text-foreground">VexarLabs</strong></p>
                <p>Email : contact@vexarlabs.com</p>
                <p>Support : support@vexarlabs.com</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
