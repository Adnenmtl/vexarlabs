/*
  VexarLabs About Section
  
  Design: Company presentation with values and team info
  - Asymmetric layout
  - Value cards with icons
  - Company story
*/

import { motion } from "framer-motion";
import { Target, Users, Lightbulb, Rocket } from "lucide-react";

const TEAM_ABSTRACT_URL = "https://private-us-east-1.manuscdn.com/sessionFile/KjkPlQmy0eBADmP4aUc6MR/sandbox/E2o49nZ2rhf1YQhmPoNPnp-img-3_1770343257000_na1fn_dmV4YXItdGVhbS1hYnN0cmFjdA.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvS2prUGxRbXkwZUJBRG1QNGFVYzZNUi9zYW5kYm94L0UybzQ5bloycmhmMVlRaG1Qb05QbnAtaW1nLTNfMTc3MDM0MzI1NzAwMF9uYTFmbl9kbVY0WVhJdGRHVmhiUzFoWW5OMGNtRmpkQS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Xxu1cNn0Imozg-tBPlSdeN-7a4MAbm6KDiSmlbIUgRn1Uf2Xfh0J-b2Akg8H6hLI-3yRrICY30xuuVBpU32HX7qgTIgb4gnHO5rUMNDti53fr-dPDod-PNeIx~KEq1NUQJmteIKXl2Y3wwauDN7SYRWOQhQ9rJ~mZoLSLX92h~XHQJDZv2tdArUZRxdPk0A6Z58qdBG-uvw5AQtKB9AkXahdIHMfLi7vJgd2kK7C58ZeLn7qtIG-QznignCGqRLAzwEFsnJhJRkqjBVohk3EEE~yO0r6YrcmlP7oOmw9ZjO0AgKRILsW5ljn0~JTph1M2P3P6nOOAKm7raiCYgKGiQ__";

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "Nous visons l'excellence dans chaque ligne de code et chaque pixel de design.",
    gradient: "from-cyan to-blue-500",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Votre succès est notre priorité. Nous travaillons main dans la main avec vous.",
    gradient: "from-violet to-purple-500",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Nous explorons constamment les nouvelles technologies pour vous offrir le meilleur.",
    gradient: "from-amber-400 to-orange-500",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Des applications rapides, fiables et scalables pour accompagner votre croissance.",
    gradient: "from-emerald-400 to-cyan",
  },
];

export default function AboutSection() {
  return (
    <section id="apropos" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-violet/5 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan/20 to-violet/20 blur-3xl scale-90" />
              
              {/* Main Image */}
              <div className="relative glass-card rounded-3xl overflow-hidden p-4">
                <img
                  src={TEAM_ABSTRACT_URL}
                  alt="VexarLabs Team"
                  className="w-full h-auto rounded-2xl"
                />
              </div>

              {/* Floating stats card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -bottom-6 -right-6 glass-card rounded-2xl p-6 animate-float"
              >
                <div className="text-3xl font-bold gradient-text mb-1">5+</div>
                <div className="text-sm text-muted-foreground">Années d'expérience</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content - Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-cyan text-sm font-semibold uppercase tracking-widest mb-4 block">
              À propos de nous
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-foreground">Passionnés par </span>
              <span className="gradient-text">l'innovation</span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                VexarLabs est né de la passion pour la technologie et l'envie de créer 
                des solutions numériques qui font la différence. Notre équipe de développeurs, 
                designers et stratèges travaille ensemble pour transformer vos idées en 
                applications performantes.
              </p>
              <p>
                Nous croyons que chaque projet est unique et mérite une attention particulière. 
                C'est pourquoi nous adoptons une approche personnalisée, en prenant le temps 
                de comprendre vos besoins et vos objectifs avant de concevoir la solution idéale.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="flex items-start gap-3 p-4 rounded-xl hover:bg-white/5 transition-colors">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${value.gradient} flex items-center justify-center flex-shrink-0`}>
                      <value.icon className="w-5 h-5 text-background" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1 group-hover:text-cyan transition-colors">
                        {value.title}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
