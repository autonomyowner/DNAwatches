export const metadata = {
  title: "À propos - Triomphe Home Design - Fabrication de Meubles",
};

import Container from "@/components/Container";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { Palette, Shield, Star, Users, MapPin } from "lucide-react";
import type { ReactElement } from "react";

const stats = [
  { number: "4+", label: "Années d'Expérience", icon: Palette },
  { number: "200+", label: "Meubles Fabriqués", icon: Users },
  { number: "15+", label: "Types de Meubles", icon: Star },
  { number: "98%", label: "Satisfaction Client", icon: Shield },
];

const values = [
  {
    title: "QUALITÉ ARTISANALE",
    description: "Chaque meuble est fabriqué avec soin par nos artisans expérimentés. Qualité garantie.",
    icon: Shield,
  },
  {
    title: "FABRICATION MODERNE",
    description: "Depuis 2020, nous excellons dans la fabrication de meubles modernes et fonctionnels.",
    icon: Palette,
  },
  {
    title: "SUR MESURE EXCLUSIF", 
    description: "Fabrication personnalisée selon vos demandes avec des finitions haut de gamme.",
    icon: Star,
  },
];

export default function AboutPage(): ReactElement {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <Section className="relative overflow-hidden pt-32 pb-20 film-grain">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
             style={{ backgroundImage: "url('/pexels-heyho-6489118.jpg')" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/40" />
        
        <Container>
          <div className="relative z-10 max-w-4xl">
            <Reveal>
              <div className="mb-8">
                <span className="inline-block px-6 py-3 luxury-card mafia-glow text-white bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900 border border-rose-900/40 text-sm font-semibold tracking-widest uppercase">
                  L&apos;Art de la Menuiserie
                </span>
              </div>
            </Reveal>
            
            <Reveal delay={200}>
              <h1 className="mafia-heading text-6xl sm:text-7xl lg:text-8xl text-white leading-[0.9] mb-8">
                <span className="block">NOTRE</span>
                <span className="block golden-accent">EXPERTISE</span>
              </h1>
            </Reveal>
            
            <Reveal delay={400}>
              <p className="text-2xl sm:text-3xl text-white/90 max-w-3xl leading-relaxed font-light">
                Depuis 2020, nous excellons dans la fabrication de meubles modernes à Setif. 
                <span className="golden-accent font-medium"> Un savoir-faire artisanal au service de votre confort.</span>
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Stats Section */}
      <Section className="relative">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
             style={{ backgroundImage: "url('/photo-1665836372090-29f9515f1a60.avif')" }} />
        <div className="absolute inset-0 bg-white/85" />
        
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <Reveal key={stat.label} delay={idx * 150}>
                <div className="text-center group">
                  <div className="luxury-card mafia-glow p-8 rounded-xl border-2 border-rose-900/40 hover:border-rose-900/60 transition-all duration-500">
                    <stat.icon className="w-12 h-12 text-rose-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <div className="mafia-heading text-4xl lg:text-5xl text-white mb-2 group-hover:text-rose-400 transition-colors duration-300">
                      {stat.number}
                    </div>
                    <p className="text-white/80 font-medium tracking-wide uppercase text-sm">
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
      <Section className="relative bg-gray-50">
        <div className="absolute inset-0 bg-gray-50" />
        
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div className="space-y-8">
                <div>
                  <h2 className="mafia-heading text-5xl lg:text-6xl text-white mb-6">
                    L&apos;Art de 
                    <span className="golden-accent block">la Menuiserie</span>
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-accent-gold to-accent-gold-bright rounded-full mb-8" />
                </div>
                
                <div className="space-y-6 text-lg leading-relaxed bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 bg-clip-text text-transparent font-bold">
                  <p>
                    Des familles aux entreprises de la région de Setif, 
                    Triomphe Home Design s&apos;est forgé une réputation d&apos;excellence.
                  </p>
                  <p>
                    Nous ne sommes pas simplement des menuisiers. Nous sommes les 
                    artisans de votre confort, les créateurs de vos espaces, 
                    les complices de votre bien-être quotidien.
                  </p>
                  <p>
                    Chaque meuble est unique. Chaque client, une priorité absolue.
                  </p>
                </div>
              </div>
            </Reveal>
            
            <Reveal delay={300}>
              <div className="relative">
                <div className="luxury-card mafia-glow border border-rose-900/40 rounded-2xl overflow-hidden aspect-[4/5] relative group">
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/6.jpg')" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Values Section */}
      <Section className="relative">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
             style={{ backgroundImage: "url('/photo-1714060335405-81b17c8c0a22.avif')" }} />
        <div className="absolute inset-0 bg-black/70" />
        
        <Container>
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="mafia-heading text-5xl lg:text-6xl text-white mb-6">
                Nos <span className="golden-accent">Valeurs</span>
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Les piliers inébranlables de notre savoir-faire artisanal
              </p>
            </div>
          </Reveal>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {values.map((value, idx) => (
              <Reveal key={value.title} delay={idx * 200}>
                <div className="luxury-card mafia-glow p-8 rounded-xl group hover:scale-105 transition-all duration-500">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-6 luxury-card rounded-full flex items-center justify-center group-hover:bg-rose-500/20 transition-colors duration-300">
                      <value.icon className="w-8 h-8 text-rose-400" />
                    </div>
                    <h3 className="mafia-heading text-xl text-white mb-4 group-hover:text-rose-400 transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-white/90 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Location Section */}
      <Section className="relative bg-gray-50">
        <div className="absolute inset-0 bg-gray-50" />
        
        <Container>
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="mafia-heading text-5xl lg:text-6xl text-white mb-6">
                Notre <span className="golden-accent">Atelier</span>
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Visitez notre atelier à Setif Bousekine pour découvrir nos créations
              </p>
            </div>
          </Reveal>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div className="space-y-6">
                <div className="luxury-card mafia-glow p-8 rounded-xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-rose-600 to-rose-400 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="mafia-heading text-xl text-white">Adresse</h3>
                      <p className="text-white/80">Setif Bousekine</p>
                    </div>
                  </div>
                  <p className="text-white/90 leading-relaxed mb-6">
                    Notre atelier de fabrication est situé au cœur de Setif Bousekine, 
                    facilement accessible pour découvrir nos créations et discuter de vos projets.
                  </p>
                  <a 
                    href="https://maps.app.goo.gl/nh5JsSvQrQiXgHSj7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-rose-400 hover:text-rose-300 transition-colors duration-300 font-medium"
                  >
                    <MapPin className="w-4 h-4" />
                    Voir sur Google Maps
                  </a>
                </div>
              </div>
            </Reveal>
            
            <Reveal delay={300}>
              <div className="aspect-video rounded-xl overflow-hidden luxury-card border border-rose-900/40 mafia-glow">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3204.8!2d5.4!3d36.19!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzYuMTksIDUuNA!5e0!3m2!1sen!2sdz!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="relative">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
             style={{ backgroundImage: "url('/photo-1558969213-ff7823387b5c.avif')" }} />
        
        <Container>
          <Reveal>
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="mafia-heading text-5xl lg:text-6xl text-white mb-8">
                Rejoignez nos 
                <span className="golden-accent block">Clients Satisfaits</span>
              </h2>
              <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
                Découvrez pourquoi les familles les plus exigeantes de la région nous font confiance 
                pour leurs meubles sur mesure et leur confort quotidien.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a 
                  href="/contact" 
                  className="inline-flex items-center justify-center gap-3 bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900 text-white px-12 py-5 text-lg font-bold rounded-lg hover:scale-105 transition-all duration-300 tracking-widest uppercase mafia-glow premium-shadow"
                >
                  <Palette className="w-5 h-5" />
                  DÉCOUVRIR NOS CRÉATIONS
                </a>
                <a 
                  href="/pricing" 
                  className="luxury-card border-rose-900/40 text-white hover:bg-rose-900/10 hover:border-rose-900/60 inline-flex items-center justify-center px-12 py-5 text-lg font-medium rounded-lg transition-all duration-300 tracking-wide"
                >
                  VOIR NOS RÉALISATIONS
                </a>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </div>
  );
}


