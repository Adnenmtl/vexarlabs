/*
  VexarLabs Services Section
  
  Design: Glassmorphism service cards with hover effects
  - Grid layout with floating cards
  - Icon-based service representation
  - Subtle animations on hover
*/

import { motion } from "framer-motion";
import { 
  Smartphone, 
  Globe, 
  Database, 
  Shield, 
  Zap, 
  Palette 
} from "lucide-react";

const SERVICES_ICON_URL = "https://private-us-east-1.manuscdn.com/sessionFile/KjkPlQmy0eBADmP4aUc6MR/sandbox/E2o49nZ2rhf1YQhmPoNPnp-img-4_1770343269000_na1fn_dmV4YXItc2VydmljZXMtaWNvbg.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvS2prUGxRbXkwZUJBRG1QNGFVYzZNUi9zYW5kYm94L0UybzQ5bloycmhmMVlRaG1Qb05QbnAtaW1nLTRfMTc3MDM0MzI2OTAwMF9uYTFmbl9kbVY0WVhJdGMyVnlkbWxqWlhNdGFXTnZiZy5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=fupAwWbI3pD8FkDbt8fPRXP1WEBBDq2KCuHddcWWReqIve5-zrePJ~eUn4668LgPBtAX6XEFRnqcg56fOOHx5AYQkuuozijl3H1y3wI9N~cki49I9o4kxMN7rGooqrMz59luyt~msYwxgxApY1ZkF4~7pIhQfejrpoJGSaPnAEJvzGUq73rOJbQEy4gh7Ff6x8fNh-IC3hES1WnFuw0PtSuJ2O8f9xPhypQrWEGygXkmgzctVa~3ZiqT3uVA8MG-2OMMz9oNQ4nUhdadxe-2TDVVBjF2YOri70bTpNqoYCSkO0jEx0l-yGKOjesEuOWiZeh8IL8pyBf5sQFlJBJAiw__";

const services = [
  {
    icon: Smartphone,
    title: "Applications Mobiles",
    description: "Développement d'applications iOS et Android natives ou cross-platform avec React Native et Flutter.",
    gradient: "from-cyan to-blue-500",
  },
  {
    icon: Globe,
    title: "Applications Web",
    description: "Sites web et applications web progressives (PWA) avec les dernières technologies React, Next.js et Vue.",
    gradient: "from-violet to-purple-500",
  },
  {
    icon: Database,
    title: "Backend & API",
    description: "Architecture serveur robuste, APIs RESTful et GraphQL, bases de données optimisées pour la performance.",
    gradient: "from-cyan to-violet",
  },
  {
    icon: Shield,
    title: "Sécurité",
    description: "Audit de sécurité, authentification avancée, chiffrement des données et conformité RGPD.",
    gradient: "from-emerald-400 to-cyan",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimisation des performances, mise en cache intelligente et architecture scalable pour vos applications.",
    gradient: "from-amber-400 to-orange-500",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Conception d'interfaces utilisateur modernes, prototypage et tests d'utilisabilité pour une expérience optimale.",
    gradient: "from-pink-500 to-violet",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      
    },
  },
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-violet/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan/10 rounded-full blur-3xl" />

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
            Nos Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Solutions </span>
            <span className="gradient-text">sur mesure</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            De la conception à la mise en production, nous offrons une gamme complète
            de services pour transformer vos idées en réalité numérique.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group relative"
            >
              <div className="glass-card rounded-2xl p-8 h-full transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan/10">
                {/* Gradient border on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 glow-border" />
                
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-7 h-7 text-background" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-cyan transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan/20 to-violet/20 blur-3xl scale-110" />
            <img
              src={SERVICES_ICON_URL}
              alt="Développement d'applications"
              className="relative z-10 w-48 h-48 object-contain animate-float"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
