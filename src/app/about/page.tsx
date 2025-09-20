export const metadata = {
  title: "À propos - Triomphe - Maison de la Perfection",
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
    <div className="bg-[#faf9f7] min-h-screen">
      {/* Hero Section */}
      <Section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
             style={{ backgroundImage: "url('/pexels-heyho-6489118.jpg')" }} />
        <div className="absolute inset-0 bg-black/40" />
        
        <Container>
          <div className="relative z-10 max-w-4xl text-center">
            <Reveal>
              <div className="mb-8">
                <span className="inline-block px-6 py-3 bg-white/95 backdrop-blur-sm text-[#2d2d2d] border border-[#d4c4b0] text-sm font-semibold tracking-widest uppercase rounded-full">
                  L&apos;Art de la Décoration
                </span>
              </div>
            </Reveal>
            
            <Reveal delay={200}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl text-white leading-tight mb-8 font-bold">
                Notre Histoire
              </h1>
            </Reveal>
            
            <Reveal delay={400}>
              <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light">
                Depuis 2020, nous créons des espaces uniques et élégants. 
                <span className="font-medium"> Un savoir-faire artisanal au service de votre confort.</span>
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Stats Section */}
      <Section className="bg-white py-20">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <Reveal key={stat.label} delay={idx * 150}>
                <div className="text-center group">
                  <div className="bg-[#f5f3f0] p-8 rounded-xl hover:shadow-lg transition-all duration-500">
                    <stat.icon className="w-12 h-12 text-[#8b7355] mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-4xl lg:text-5xl text-[#2d2d2d] mb-2 group-hover:text-[#8b7355] transition-colors duration-300 font-bold">
                      {stat.number}
                    </div>
                    <p className="text-[#6b6b6b] font-medium tracking-wide uppercase text-sm">
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
      <Section className="bg-[#faf9f7] py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl lg:text-5xl text-[#2d2d2d] mb-6 font-bold">
                    L&apos;Art de 
                    <span className="block text-[#8b7355]">la Décoration</span>
                  </h2>
                </div>
                
                <div className="space-y-6 text-lg leading-relaxed text-[#6b6b6b]">
                  <p>
                    Des familles aux entreprises de la région de Setif, 
                    Triomphe s&apos;est forgé une réputation d&apos;excellence.
                  </p>
                  <p>
                    Nous ne sommes pas simplement des décorateurs. Nous sommes les 
                    artisans de votre confort, les créateurs de vos espaces, 
                    les complices de votre bien-être quotidien.
                  </p>
                  <p>
                    Chaque pièce est unique. Chaque client, une priorité absolue.
                  </p>
                </div>
              </div>
            </Reveal>
            
            <Reveal delay={300}>
              <div className="relative">
                <div className="bg-[#f5f3f0] rounded-2xl overflow-hidden aspect-[4/5] relative group">
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
      <Section className="bg-white py-20">
        <Container>
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl text-[#2d2d2d] mb-6 font-bold">
                Nos <span className="text-[#8b7355]">Valeurs</span>
              </h2>
              <p className="text-xl text-[#6b6b6b] max-w-3xl mx-auto">
                Les piliers inébranlables de notre savoir-faire artisanal
              </p>
            </div>
          </Reveal>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {values.map((value, idx) => (
              <Reveal key={value.title} delay={idx * 200}>
                <div className="bg-[#f5f3f0] p-8 rounded-xl group hover:shadow-lg transition-all duration-500">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-6 bg-white rounded-full flex items-center justify-center group-hover:bg-[#8b7355]/10 transition-colors duration-300">
                      <value.icon className="w-8 h-8 text-[#8b7355]" />
                    </div>
                    <h3 className="text-xl text-[#2d2d2d] mb-4 group-hover:text-[#8b7355] transition-colors duration-300 font-bold">
                      {value.title}
                    </h3>
                    <p className="text-[#6b6b6b] leading-relaxed">
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
      <Section className="bg-[#faf9f7] py-20">
        <Container>
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl text-[#2d2d2d] mb-6 font-bold">
                Notre <span className="text-[#8b7355]">Atelier</span>
              </h2>
              <p className="text-xl text-[#6b6b6b] max-w-3xl mx-auto">
                Visitez notre atelier à Setif Bousekine pour découvrir nos créations
              </p>
            </div>
          </Reveal>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div className="space-y-6">
                <div className="bg-[#f5f3f0] p-8 rounded-xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-[#8b7355] rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl text-[#2d2d2d] font-bold">Adresse</h3>
                      <p className="text-[#6b6b6b]">Setif Bousekine</p>
                    </div>
                  </div>
                  <p className="text-[#6b6b6b] leading-relaxed mb-6">
                    Notre atelier de fabrication est situé au cœur de Setif Bousekine, 
                    facilement accessible pour découvrir nos créations et discuter de vos projets.
                  </p>
                  <a 
                    href="https://maps.app.goo.gl/nh5JsSvQrQiXgHSj7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#8b7355] hover:text-[#6b5a42] transition-colors duration-300 font-medium"
                  >
                    <MapPin className="w-4 h-4" />
                    Voir sur Google Maps
                  </a>
                </div>
              </div>
            </Reveal>
            
            <Reveal delay={300}>
              <div className="aspect-video rounded-xl overflow-hidden bg-[#f5f3f0]">
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
      <Section className="bg-white py-20">
        <Container>
          <Reveal>
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl lg:text-5xl text-[#2d2d2d] mb-8 font-bold">
                Rejoignez nos 
                <span className="block text-[#8b7355]">Clients Satisfaits</span>
              </h2>
              <p className="text-xl text-[#6b6b6b] mb-12 max-w-2xl mx-auto">
                Découvrez pourquoi les familles les plus exigeantes de la région nous font confiance 
                pour leurs meubles sur mesure et leur confort quotidien.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a 
                  href="/contact" 
                  className="inline-flex items-center justify-center gap-3 bg-[#2d2d2d] text-white px-12 py-5 text-lg font-bold rounded-lg hover:bg-[#8b7355] transition-all duration-300 tracking-widest uppercase"
                >
                  <Palette className="w-5 h-5" />
                  DÉCOUVRIR NOS CRÉATIONS
                </a>
                <a 
                  href="/pricing" 
                  className="inline-flex items-center justify-center gap-3 border-2 border-[#8b7355] text-[#8b7355] hover:bg-[#8b7355] hover:text-white px-12 py-5 text-lg font-medium rounded-lg transition-all duration-300 tracking-wide"
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


