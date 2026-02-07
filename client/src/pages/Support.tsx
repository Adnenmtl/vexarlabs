/*
  VexarLabs - Support Page with Color Accent
*/

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, HelpCircle, Trash2, Download, AlertCircle } from "lucide-react";

export default function Support() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-16 pt-32">
        <div className="container max-w-3xl">
          <h1 className="text-3xl font-bold mb-3">Support</h1>
          <p className="text-muted-foreground text-lg mb-10">
            Nous sommes là pour vous aider.
          </p>

          <div className="space-y-8">
            <section className="p-6 bg-primary/5 border border-primary/20 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary rounded-lg">
                  <Mail className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-2">Contactez-nous par email</h2>
                  <p className="text-muted-foreground mb-4">
                    Pour toute question, problème technique ou demande d'assistance concernant nos applications, 
                    envoyez-nous un email. Nous répondons généralement sous 24-48 heures.
                  </p>
                  <a 
                    href="mailto:contact@vexarlabs.com" 
                    className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                  >
                    contact@vexarlabs.com
                  </a>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-5 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-primary" />
                Questions fréquentes
              </h2>
              
              <div className="space-y-4">
                <div className="p-5 bg-white border border-border rounded-xl hover:border-primary/30 transition-colors">
                  <div className="flex items-start gap-3">
                    <Trash2 className="w-5 h-5 text-muted-foreground mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">Comment supprimer mon compte ?</h3>
                      <p className="text-sm text-muted-foreground">
                        Pour supprimer votre compte et vos données, envoyez-nous un email à contact@vexarlabs.com 
                        avec l'objet "Suppression de compte". Nous traiterons votre demande dans les 30 jours.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-5 bg-white border border-border rounded-xl hover:border-primary/30 transition-colors">
                  <div className="flex items-start gap-3">
                    <Download className="w-5 h-5 text-muted-foreground mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">Comment récupérer mes données ?</h3>
                      <p className="text-sm text-muted-foreground">
                        Conformément au RGPD, vous pouvez demander une copie de vos données personnelles. 
                        Contactez-nous par email avec l'objet "Demande de données".
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-5 bg-white border border-border rounded-xl hover:border-primary/30 transition-colors">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-muted-foreground mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">L'application ne fonctionne pas correctement</h3>
                      <p className="text-sm text-muted-foreground">
                        Essayez d'abord de mettre à jour l'application vers la dernière version. 
                        Si le problème persiste, contactez-nous en décrivant le problème et votre appareil.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="p-6 bg-secondary/50 rounded-xl">
              <h2 className="text-lg font-semibold mb-4">Informations de contact</h2>
              <div className="text-sm text-muted-foreground space-y-2">
                <p><strong className="text-foreground">VexarLabs</strong></p>
                <p>Email : <a href="mailto:contact@vexarlabs.com" className="text-primary hover:underline">contact@vexarlabs.com</a></p>
                <p>Support : <a href="mailto:contact@vexarlabs.com" className="text-primary hover:underline">contact@vexarlabs.com</a></p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
