/*
  VexarLabs Contact Section
  
  Design: Contact form with glassmorphism styling
  - Two-column layout
  - Animated form inputs
  - Contact information cards
*/

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "contact@vexarlabs.com",
    href: "mailto:contact@vexarlabs.com",
  },
  {
    icon: Phone,
    title: "Téléphone",
    value: "+33 1 23 45 67 89",
    href: "tel:+33123456789",
  },
  {
    icon: MapPin,
    title: "Localisation",
    value: "Paris, France",
    href: null,
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success("Message envoyé avec succès !", {
      description: "Nous vous répondrons dans les plus brefs délais.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet/20 to-transparent" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan/5 rounded-full blur-3xl" />
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-violet/5 rounded-full blur-3xl" />

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan text-sm font-semibold uppercase tracking-widest mb-4 block">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Parlons de votre </span>
            <span className="gradient-text">projet</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Vous avez une idée ? Nous sommes là pour la concrétiser.
            Contactez-nous et discutons de votre prochain projet.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass-card rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan to-violet flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-background" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">Discutons</h3>
                  <p className="text-sm text-muted-foreground">
                    Nous répondons sous 24h
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <div key={info.title} className="group">
                    {info.href ? (
                      <a
                        href={info.href}
                        className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors"
                      >
                        <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-cyan/20 transition-colors">
                          <info.icon className="w-5 h-5 text-cyan" />
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground uppercase tracking-wider">
                            {info.title}
                          </div>
                          <div className="text-foreground font-medium group-hover:text-cyan transition-colors">
                            {info.value}
                          </div>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 p-4 rounded-xl">
                        <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                          <info.icon className="w-5 h-5 text-cyan" />
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground uppercase tracking-wider">
                            {info.title}
                          </div>
                          <div className="text-foreground font-medium">
                            {info.value}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Quick response badge */}
            <div className="glass-card rounded-2xl p-6 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan/10 border border-cyan/20 mb-3">
                <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
                <span className="text-sm font-medium text-cyan">Disponible</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Temps de réponse moyen : moins de 24 heures
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8">
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-foreground"
                  >
                    Nom complet
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jean Dupont"
                    required
                    className="bg-white/5 border-white/10 focus:border-cyan/50 placeholder:text-muted-foreground/50"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-foreground"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jean@exemple.com"
                    required
                    className="bg-white/5 border-white/10 focus:border-cyan/50 placeholder:text-muted-foreground/50"
                  />
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium text-foreground"
                >
                  Sujet
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Développement d'une application mobile"
                  required
                  className="bg-white/5 border-white/10 focus:border-cyan/50 placeholder:text-muted-foreground/50"
                />
              </div>

              <div className="space-y-2 mb-8">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-foreground"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Décrivez votre projet en quelques lignes..."
                  required
                  rows={5}
                  className="bg-white/5 border-white/10 focus:border-cyan/50 placeholder:text-muted-foreground/50 resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-cyan to-violet hover:opacity-90 text-background font-semibold py-6 text-lg"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-background/30 border-t-background rounded-full animate-spin mr-2" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    Envoyer le message
                    <Send className="ml-2 w-5 h-5" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
