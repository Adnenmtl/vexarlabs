/*
  VexarLabs Footer Component
  
  Design: Minimal footer with glassmorphism accent
  - Company info and links
  - Social media icons
  - Copyright notice
*/

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import { toast } from "sonner";

const footerLinks = {
  services: [
    { label: "Applications Mobiles", href: "#services" },
    { label: "Applications Web", href: "#services" },
    { label: "Backend & API", href: "#services" },
    { label: "UI/UX Design", href: "#services" },
  ],
  company: [
    { label: "À propos", href: "#apropos" },
    { label: "Projets", href: "#projets" },
    { label: "Contact", href: "#contact" },
  ],
};

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative pt-16 pb-8 overflow-hidden">
      {/* Top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan/30 to-transparent" />

      <div className="container relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-1"
          >
            <a href="#accueil" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan to-violet flex items-center justify-center font-bold text-lg text-background">
                V
              </div>
              <span className="text-xl font-bold tracking-tight">
                <span className="gradient-text">Vexar</span>
                <span className="text-foreground">Labs</span>
              </span>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Studio de développement d'applications innovantes. Nous transformons
              vos idées en solutions numériques performantes.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-cyan/20 transition-colors group"
                  onClick={(e) => {
                    e.preventDefault();
                    toast.info("Fonctionnalité à venir", {
                      description: "Les réseaux sociaux seront bientôt disponibles.",
                    });
                  }}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-cyan transition-colors" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Services Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-sm text-muted-foreground hover:text-cyan transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-semibold text-foreground mb-4">Entreprise</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-sm text-muted-foreground hover:text-cyan transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-semibold text-foreground mb-4">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Restez informé de nos dernières actualités et projets.
            </p>
            <div className="glass-card rounded-xl p-4">
              <p className="text-xs text-muted-foreground text-center">
                Newsletter à venir
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} VexarLabs. Tous droits réservés.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-cyan transition-colors"
                onClick={(e) => e.preventDefault()}
              >
                Mentions légales
              </a>
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-cyan transition-colors"
                onClick={(e) => e.preventDefault()}
              >
                Politique de confidentialité
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


