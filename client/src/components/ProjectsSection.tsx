/*
  VexarLabs Projects Section
  
  Design: Showcase of projects with glassmorphism cards
  - Featured project highlight
  - Grid of project cards
  - Hover effects with project details
*/

import { motion } from "framer-motion";
import { ExternalLink, Shield, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const TAXI_PROJECT_URL = "https://private-us-east-1.manuscdn.com/sessionFile/KjkPlQmy0eBADmP4aUc6MR/sandbox/E2o49nZ2rhf1YQhmPoNPnp-img-5_1770343247000_na1fn_dmV4YXItdGF4aS1wcm9qZWN0.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvS2prUGxRbXkwZUJBRG1QNGFVYzZNUi9zYW5kYm94L0UybzQ5bloycmhmMVlRaG1Qb05QbnAtaW1nLTVfMTc3MDM0MzI0NzAwMF9uYTFmbl9kbVY0WVhJdGRHRjRhUzF3Y205cVpXTjAucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=XWr3AYCe0tsrx1I3i5YcmF4VFx2GNsePG54d8rUOVXDS34tukvx1cejoOol7MWDU0es-vtok84Ihb5VYCZ0F42NEB3fn-uMpHR~bCq87RzGoDaTHl35ImS2nxUDdjvDZsYWVpWfGId677sDKXKCFG-M13zVzAiY~R3Q0-bgwGeksMPJFzXHwpjcqtdEttLuXnU5mVdaiE0~wqeL1urqsMmFjTqn3taezWLb1z2y43~UgZmh4EGKAmxZwW9P78Zt7Xp6x09KeyHyem~jVOlWq-ic~qCQ265bdR4Qg1~j~q8Ts-nX0HkZ~5dbxI8XZIypUEzvvaAELjuhWR2desVmlqA__";

const TEAM_ABSTRACT_URL = "https://private-us-east-1.manuscdn.com/sessionFile/KjkPlQmy0eBADmP4aUc6MR/sandbox/E2o49nZ2rhf1YQhmPoNPnp-img-3_1770343257000_na1fn_dmV4YXItdGVhbS1hYnN0cmFjdA.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvS2prUGxRbXkwZUJBRG1QNGFVYzZNUi9zYW5kYm94L0UybzQ5bloycmhmMVlRaG1Qb05QbnAtaW1nLTNfMTc3MDM0MzI1NzAwMF9uYTFmbl9kbVY0WVhJdGRHVmhiUzFoWW5OMGNtRmpkQS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Xxu1cNn0Imozg-tBPlSdeN-7a4MAbm6KDiSmlbIUgRn1Uf2Xfh0J-b2Akg8H6hLI-3yRrICY30xuuVBpU32HX7qgTIgb4gnHO5rUMNDti53fr-dPDod-PNeIx~KEq1NUQJmteIKXl2Y3wwauDN7SYRWOQhQ9rJ~mZoLSLX92h~XHQJDZv2tdArUZRxdPk0A6Z58qdBG-uvw5AQtKB9AkXahdIHMfLi7vJgd2kK7C58ZeLn7qtIG-QznignCGqRLAzwEFsnJhJRkqjBVohk3EEE~yO0r6YrcmlP7oOmw9ZjO0AgKRILsW5ljn0~JTph1M2P3P6nOOAKm7raiCYgKGiQ__";

const featuredProject = {
  title: "Ronde de Sécurité Taxi",
  description: "Application mobile de sécurité pour les chauffeurs de taxi. Système de rondes automatisées, alertes en temps réel, géolocalisation et suivi des incidents pour garantir la sécurité des conducteurs.",
  image: TAXI_PROJECT_URL,
  tags: ["React Native", "Node.js", "PostgreSQL", "Maps API"],
  features: [
    { icon: Shield, text: "Alertes de sécurité" },
    { icon: MapPin, text: "Géolocalisation temps réel" },
    { icon: Clock, text: "Rondes automatisées" },
  ],
  status: "En développement",
};

const otherProjects = [
  {
    title: "Plateforme E-commerce",
    description: "Solution de vente en ligne complète avec gestion des stocks et paiements sécurisés.",
    tags: ["Next.js", "Stripe", "MongoDB"],
    gradient: "from-emerald-400 to-cyan",
  },
  {
    title: "Dashboard Analytics",
    description: "Tableau de bord interactif pour la visualisation de données en temps réel.",
    tags: ["React", "D3.js", "WebSocket"],
    gradient: "from-violet to-pink-500",
  },
  {
    title: "App de Réservation",
    description: "Système de réservation multi-services avec calendrier intelligent.",
    tags: ["Flutter", "Firebase", "Stripe"],
    gradient: "from-amber-400 to-orange-500",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projets" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan/20 to-transparent" />
      
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
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Nos </span>
            <span className="gradient-text">réalisations</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Découvrez nos projets récents et comment nous aidons nos clients
            à concrétiser leurs ambitions numériques.
          </p>
        </motion.div>

        {/* Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="glass-card rounded-3xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Project Image */}
              <div className="relative h-64 lg:h-auto min-h-[400px] overflow-hidden">
                <img
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent lg:bg-gradient-to-r" />
                
                {/* Status Badge */}
                <div className="absolute top-6 left-6">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan/20 backdrop-blur-sm border border-cyan/30">
                    <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
                    <span className="text-sm font-medium text-cyan">{featuredProject.status}</span>
                  </span>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <span className="text-violet text-sm font-semibold uppercase tracking-widest mb-3">
                  Projet Vedette
                </span>
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  {featuredProject.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {featuredProject.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-4 mb-6">
                  {featuredProject.features.map((feature) => (
                    <div
                      key={feature.text}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <feature.icon className="w-4 h-4 text-cyan" />
                      <span>{feature.text}</span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {featuredProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Button
                  className="w-fit bg-gradient-to-r from-cyan to-violet hover:opacity-90 text-background font-semibold"
                  onClick={() => {
                    const element = document.querySelector("#contact");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  En savoir plus
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card rounded-2xl p-6 h-full transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan/10 relative overflow-hidden">
                {/* Gradient accent */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient}`} />
                
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-cyan transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded text-xs font-medium bg-white/5 text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Background Image */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.3 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute -bottom-20 -right-20 w-96 h-96 pointer-events-none"
        >
          <img
            src={TEAM_ABSTRACT_URL}
            alt=""
            className="w-full h-full object-contain opacity-30"
          />
        </motion.div>
      </div>
    </section>
  );
}
