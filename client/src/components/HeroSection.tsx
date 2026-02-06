/*
  VexarLabs Hero Section
  
  Design: Immersive futuristic hero with floating elements
  - Full-screen hero with gradient background
  - Animated floating elements
  - Glassmorphism cards
  - Particle-like decorative elements
*/

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const HERO_BG_URL = "https://private-us-east-1.manuscdn.com/sessionFile/KjkPlQmy0eBADmP4aUc6MR/sandbox/E2o49nZ2rhf1YQhmPoNPnp-img-1_1770343264000_na1fn_dmV4YXItaGVyby1iZw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvS2prUGxRbXkwZUJBRG1QNGFVYzZNUi9zYW5kYm94L0UybzQ5bloycmhmMVlRaG1Qb05QbnAtaW1nLTFfMTc3MDM0MzI2NDAwMF9uYTFmbl9kbVY0WVhJdGFHVnlieTFpWncucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=H0blHtU4D-zNAxdUAC2Egl2Z2VEW8JQTe8OszTkuPs-8RCw4SDEh-ply~vktmAAy19ijMpnxm74kRQh7gXT8V7l32GG4242aSvRaQOBsQjEq7YEdv9YCNv7vDPbAur9n1B8xZGjPTw0Ch3EYmZG7UrpEpSkQqQHAnB55OpqkS6z0Jn7LjEQqd2As9Zmi8~InwTFKGJ8pkYtdzn4V6zhKP6tb8TdthTT1CJOAgrMfPbYbu2ZEQRtI49Vgq0febXINN7TSUHEBbDluC72117P-DC0uUi5RAQUcAvn1F-Q-X120cKv6bm1736ZepCg0U38YPq0yAMUOzBhYpso2tP13DQ__";

const APP_MOCKUP_URL = "https://private-us-east-1.manuscdn.com/sessionFile/KjkPlQmy0eBADmP4aUc6MR/sandbox/E2o49nZ2rhf1YQhmPoNPnp-img-2_1770343252000_na1fn_dmV4YXItYXBwLW1vY2t1cA.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvS2prUGxRbXkwZUJBRG1QNGFVYzZNUi9zYW5kYm94L0UybzQ5bloycmhmMVlRaG1Qb05QbnAtaW1nLTJfMTc3MDM0MzI1MjAwMF9uYTFmbl9kbVY0WVhJdFlYQndMVzF2WTJ0MWNBLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=tpGB7OV46cityAYGq-3BQpl-0ggVu98ezdATrxy4fcj6VeVdlojwQF-DPz844G7GnJN9nCd8RYkZiUD1p1dFlnEQ34r1CRtj1~EvJcEvgpEbgiI4SZRfRk0~0g-IpLza5ScBVvUSeZvm5T8VEhTm12we8e~Tlc~mXbDbIHiusqmcwwbAD6amVQco10~~DzVz7fiR93ta085j3dn2gkj7zlssmAnUwe6k~sFuAJO2BJCyXzaK5smt2XUR1mIqLcgrwmhIK6XrR~YQ30LG1DbwoP6ehW0G~cGMSIqsyhR6fLKgvolwYbXm4eALyVWxDPcmY8WqMLRBgymmA3fnmmvBuQ__";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProjects = () => {
    const element = document.querySelector("#projets");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_BG_URL}
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Decorative floating orbs */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-cyan/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-violet/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-cyan/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "2s" }} />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
            >
              <Sparkles className="w-4 h-4 text-cyan" />
              <span className="text-sm font-medium text-muted-foreground">
                Studio de développement innovant
              </span>
            </motion.div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              <span className="text-foreground">Créons vos </span>
              <span className="gradient-text">applications</span>
              <br />
              <span className="text-foreground">de demain</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              VexarLabs transforme vos idées en applications mobiles et web
              performantes. Du concept au déploiement, nous donnons vie à vos
              projets les plus ambitieux.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="bg-gradient-to-r from-cyan to-violet hover:opacity-90 text-background font-semibold px-8 py-6 text-lg group"
              >
                Démarrer un projet
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={scrollToProjects}
                className="border-white/20 hover:bg-white/5 px-8 py-6 text-lg"
              >
                Voir nos réalisations
              </Button>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex gap-8 mt-12 justify-center lg:justify-start"
            >
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">15+</div>
                <div className="text-sm text-muted-foreground">Projets livrés</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">100%</div>
                <div className="text-sm text-muted-foreground">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - App Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="relative animate-float">
              {/* Glow effect behind mockup */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan/30 to-violet/30 blur-3xl scale-90" />
              
              {/* App Mockup Image */}
              <img
                src={APP_MOCKUP_URL}
                alt="Application mobile VexarLabs"
                className="relative z-10 w-full max-w-lg mx-auto drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs uppercase tracking-widest">Découvrir</span>
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full bg-cyan"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
