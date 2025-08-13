export const metadata = {
  title: "À propos - L'Immobilier de Prestige à Alger",
};

import Container from "@/components/Container";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { Crown, Shield, Star, Users, Building } from "lucide-react";
import type { ReactElement } from "react";

const stats = [
  { number: "6+", label: "Années d'Expérience", icon: Crown },
  { number: "300+", label: "Biens Vendus", icon: Building },
  { number: "15+", label: "Quartiers Couverts", icon: Star },
  { number: "95%", label: "Satisfaction Client", icon: Users },
];

const values = [
  {
    title: "CONFIDENTIALITÉ TOTALE",
    description: "Vos transactions immobilières restent strictement confidentielles. Discrétion garantie.",
    icon: Shield,
  },
  {
    title: "EXCELLENCE IMMOBILIÈRE",
    description: "Depuis 2018, nous excellons dans l'accompagnement de projets immobiliers d'exception.",
    icon: Crown,
  },
  {
    title: "BIENS EXCLUSIFS", 
    description: "Portefeuille soigneusement sélectionné de propriétés de prestige à Alger.",
    icon: Building,
  },
];

export default function AboutPage(): ReactElement {
  return (
    <>
      {/* Hero Section */}
      <Section className="relative overflow-hidden pt-32 pb-20 film-grain">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background-secondary to-background" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-radial from-accent-gold/5 to-transparent opacity-30" />
        
        <Container>
          <div className="relative z-10 max-w-4xl">
            <Reveal>
              <div className="mb-8">
                <span className="luxury-card mafia-glow px-6 py-3 text-accent-gold text-sm font-semibold tracking-widest uppercase">
                  L&apos;Art de l&apos;Immobilier
                </span>
              </div>
            </Reveal>
            
            <Reveal delay={200}>
              <h1 className="mafia-heading text-6xl sm:text-7xl lg:text-8xl text-white leading-[0.9] mb-8">
                <span className="block">NOTRE</span>
                <span className="block golden-accent">HISTOIRE</span>
              </h1>
            </Reveal>
            
            <Reveal delay={400}>
              <p className="text-2xl sm:text-3xl text-white/90 max-w-3xl leading-relaxed font-light">
                Depuis 2018, nous redéfinissons l&apos;immobilier de prestige à Alger. 
                <span className="golden-accent font-medium"> Une expertise locale au service de l&apos;excellence.</span>
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Stats Section */}
      <Section className="relative bg-background-secondary">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-burgundy/5 via-transparent to-accent-gold/5" />
        
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <Reveal key={stat.label} delay={idx * 150}>
                <div className="text-center group">
                  <div className="luxury-card p-8 rounded-xl border-2 border-transparent hover:border-accent-gold/30 transition-all duration-500">
                    <stat.icon className="w-12 h-12 text-accent-gold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <div className="mafia-heading text-4xl lg:text-5xl text-white mb-2 group-hover:text-accent-gold transition-colors duration-300">
                      {stat.number}
                    </div>
                    <p className="text-text-muted font-medium tracking-wide uppercase text-sm">
                      {stat.label}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Story Section */}
      <Section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-background-secondary" />
        
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div className="space-y-8">
                <div>
                  <h2 className="mafia-heading text-5xl lg:text-6xl text-white mb-6">
                    L&apos;Art de 
                    <span className="golden-accent block">l&apos;Immobilier</span>
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-accent-gold to-accent-gold-bright rounded-full mb-8" />
                </div>
                
                <div className="space-y-6 text-lg text-white/85 leading-relaxed">
                  <p>
                    Des quartiers huppés d&apos;Hydra aux résidences modernes de Bab Ezzouar, 
                    elwakil_immobilier s&apos;est forgé une réputation d&apos;excellence.
                  </p>
                  <p>
                    Nous ne sommes pas simplement une agence immobilière. Nous sommes les 
                    architectes de vos projets de vie, les gardiens de votre confiance, 
                    les complices discrets de vos investissements les plus importants.
                  </p>
                  <p className="golden-accent font-medium">
                    Chaque transaction est unique. Chaque client, une priorité absolue.
                  </p>
                </div>
              </div>
            </Reveal>
            
            <Reveal delay={300}>
              <div className="relative">
                <div className="luxury-card rounded-2xl overflow-hidden aspect-[4/5] relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/10 via-background-tertiary to-accent-burgundy/10" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8">
                    <h3 className="mafia-heading text-2xl text-white mb-2">Biens d&apos;Exception</h3>
                    <p className="text-white/80 text-sm">Villas, appartements de luxe et investissements</p>
                  </div>
                  <div className="absolute top-8 right-8">
                    <Crown className="w-8 h-8 text-accent-gold" />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Values Section */}
      <Section className="relative bg-background-secondary">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-smoke/10 via-transparent to-accent-steel/10" />
        
        <Container>
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="mafia-heading text-5xl lg:text-6xl text-white mb-6">
                Nos <span className="golden-accent">Valeurs</span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Les piliers inébranlables de notre excellence
              </p>
            </div>
          </Reveal>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {values.map((value, idx) => (
              <Reveal key={value.title} delay={idx * 200}>
                <div className="luxury-card mafia-glow p-8 rounded-xl group hover:scale-105 transition-all duration-500">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-6 luxury-card rounded-full flex items-center justify-center group-hover:bg-accent-gold/20 transition-colors duration-300">
                      <value.icon className="w-8 h-8 text-accent-gold" />
                    </div>
                    <h3 className="mafia-heading text-xl text-white mb-4 group-hover:text-accent-gold transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-white/80 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-burgundy-dark/20 via-background to-accent-gold/5" />
        
        <Container>
          <Reveal>
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="mafia-heading text-5xl lg:text-6xl text-white mb-8">
                Rejoignez le 
                <span className="golden-accent block">Cercle Privilégié</span>
              </h2>
              <p className="text-xl text-white/85 mb-12 max-w-2xl mx-auto">
                Découvrez pourquoi les investisseurs les plus avisés d&apos;Alger nous font confiance 
                pour leurs projets immobiliers les plus ambitieux.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a 
                  href="/contact" 
                  className="mafia-glow premium-shadow inline-flex items-center justify-center gap-3 bg-gradient-to-r from-accent-gold to-accent-gold-bright text-black px-12 py-5 text-lg font-bold rounded-lg hover:scale-105 transition-all duration-300 tracking-widest uppercase"
                >
                  <Building className="w-5 h-5" />
                  DÉCOUVRIR NOS SERVICES
                </a>
                <a 
                  href="/pricing" 
                  className="luxury-card border-accent-gold/40 text-white hover:bg-accent-gold/10 hover:border-accent-gold/60 inline-flex items-center justify-center px-12 py-5 text-lg font-medium rounded-lg transition-all duration-300 tracking-wide"
                >
                  VOIR NOS BIENS
                </a>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}


