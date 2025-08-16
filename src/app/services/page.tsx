export const metadata = {
  title: "Services - Triomphe Home Design - Fabrication de Meubles",
};

type Service = {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  premium: boolean;
  price: string;
};

const services: Service[] = [
  {
    title: "CUISINE SUR MESURE",
    subtitle: "L&apos;Art Culinaire à Votre Image",
    description: "Conception et fabrication de cuisines modernes sur mesure avec finitions haut de gamme et optimisation de l'espace.",
    features: ["Design personnalisé", "Matériaux premium", "Installation incluse", "Garantie 5 ans"],
    premium: true,
    price: "Sur devis",
  },
  {
    title: "DRESSING OPTIMISÉ",
    subtitle: "Rangement Intelligent",
    description: "Aménagement de dressings fonctionnels et élégants pour optimiser votre espace de rangement selon vos besoins.",
    features: ["Mesure sur place", "Solutions modulables", "Finitions soignées", "Livraison 2-3 semaines"],
    premium: false,
    price: "Sur devis",
  },
  {
    title: "MOBILIER COMPLET",
    subtitle: "Harmonie et Fonctionnalité",
    description: "Fabrication complète de mobilier coordonné : meuble TV, lit capitonné, armoire, bureau et coiffeuse assortis.",
    features: ["Ensemble harmonieux", "Finitions luxueuses", "Matériaux nobles", "Design moderne"],
    premium: true,
    price: "Sur devis",
  },
  {
    title: "DEVIS GRATUIT PERSONNALISÉ",
    subtitle: "Consultation Expert",
    description: "Obtenez votre devis personnalisé avec visite à domicile et conseils d'aménagement par nos experts menuisiers.",
    features: ["Visite à domicile", "Conseil personnalisé", "Plans 3D", "Devis détaillé"],
    premium: false,
    price: "Gratuit",
  },
];

import Container from "@/components/Container";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { CreditCard, Palette, Layers, Zap, Star, Shield, CheckCircle, ArrowRight, TrendingUp } from "lucide-react";
import type { ReactElement } from "react";

const getServiceIcon = (idx: number) => {
  const icons = [CreditCard, Palette, Layers, Zap];
  return icons[idx];
};

export default function ServicesPage(): ReactElement {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <Section className="relative overflow-hidden pt-32 pb-20 film-grain">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
             style={{ backgroundImage: "url('/premium_photo-1710010209274-2c2266291da2.avif')" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/40" />
        
        <Container>
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <Reveal>
              <div className="mb-8">
                <span className="inline-block px-6 py-3 luxury-card mafia-glow text-white bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900 border border-rose-900/40 text-sm font-semibold tracking-widest uppercase">
                  Fabrication de Meubles
                </span>
              </div>
            </Reveal>
            
            <Reveal delay={200}>
              <h1 className="mafia-heading text-6xl sm:text-7xl lg:text-8xl text-white leading-[0.9] mb-8">
                <span className="block">NOS</span>
                <span className="block golden-accent">SERVICES</span>
              </h1>
            </Reveal>
            
            <Reveal delay={400}>
              <p className="text-2xl sm:text-3xl text-white/90 max-w-4xl mx-auto leading-relaxed font-light">
                Quatre solutions complètes pour votre aménagement intérieur.
                <span className="golden-accent font-medium block mt-2"> Où l&apos;artisanat rencontre l&apos;excellence moderne.</span>
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Services Grid */}
      <Section className="relative">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
             style={{ backgroundImage: "url('/photo-1665836372090-29f9515f1a60.avif')" }} />
        <div className="absolute inset-0 bg-white/85" />
        
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, idx) => {
              const Icon = getServiceIcon(idx);
              return (
                <Reveal key={service.title} delay={idx * 150}>
                  <div className={`luxury-card mafia-glow rounded-2xl p-8 group hover:scale-105 transition-all duration-500 relative overflow-hidden ${service.premium ? 'border-2 border-rose-900/50' : ''}`}>
                    {service.premium && (
                      <div className="absolute top-4 right-4">
                        <div className="luxury-card px-3 py-1 rounded-full border border-rose-900/40">
                          <Star className="w-4 h-4 text-rose-400 inline mr-1" />
                          <span className="text-rose-400 text-xs font-semibold tracking-wide">PREMIUM</span>
                        </div>
                      </div>
                    )}
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 luxury-card rounded-xl flex items-center justify-center group-hover:bg-rose-500/20 transition-colors duration-300">
                          <Icon className="w-8 h-8 text-rose-400" />
                        </div>
                        <div>
                          <h3 className="mafia-heading text-2xl text-white group-hover:text-rose-400 transition-colors duration-300">
                            {service.title}
                          </h3>
                          <p className="text-rose-400 text-sm font-medium tracking-wide">
                            {service.subtitle}
                          </p>
                        </div>
                      </div>
                      
                      <p className="text-white/90 text-lg leading-relaxed mb-6">
                        {service.description}
                      </p>
                      
                      <div className="space-y-3 mb-8">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-rose-400 flex-shrink-0" />
                            <span className="text-white/80 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-white/70 text-sm tracking-wide uppercase">Tarif</span>
                          <div className="mafia-heading text-2xl text-rose-400">
                            {service.price}
                          </div>
                        </div>
                        
                        <a 
                          href={`/contact?service=${encodeURIComponent(service.title)}`}
                          className="inline-flex items-center gap-2 bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900 text-white px-6 py-3 text-sm font-medium rounded-lg hover:scale-105 transition-all duration-300 mafia-glow premium-shadow"
                        >
                          CONTACT
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </a>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Premium Guarantees */}
      <Section className="relative">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
             style={{ backgroundImage: "url('/photo-1714060335405-81b17c8c0a22.avif')" }} />
        <div className="absolute inset-0 bg-black/70" />
        
        <Container>
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="mafia-heading text-5xl lg:text-6xl text-white mb-6">
                Nos <span className="golden-accent">Garanties</span>
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                L&apos;engagement d&apos;une qualité artisanale sans compromis
              </p>
            </div>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "QUALITÉ GARANTIE",
                description: "Matériaux nobles et finitions artisanales avec garantie sur tous nos meubles."
              },
              {
                icon: TrendingUp,
                title: "EXPERTISE ARTISANALE",
                description: "Maîtrise complète des techniques de menuiserie moderne et traditionnelle."
              },
              {
                icon: Star,
                title: "SERVICE PERSONNALISÉ",
                description: "Accompagnement sur mesure, conseils d'aménagement et suivi de projet."
              }
            ].map((guarantee, idx) => (
              <Reveal key={guarantee.title} delay={idx * 200}>
                <div className="luxury-card mafia-glow text-center p-8 rounded-xl group hover:scale-105 transition-all duration-500">
                  <div className="w-20 h-20 mx-auto mb-6 luxury-card rounded-full flex items-center justify-center group-hover:bg-rose-500/20 transition-colors duration-300">
                    <guarantee.icon className="w-10 h-10 text-rose-400" />
                  </div>
                  <h3 className="mafia-heading text-xl text-white mb-4 group-hover:text-rose-400 transition-colors duration-300">
                    {guarantee.title}
                  </h3>
                  <p className="text-white/90 leading-relaxed">
                    {guarantee.description}
                  </p>
                </div>
              </Reveal>
            ))}
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
                Prêt pour 
                <span className="golden-accent block">Votre Projet ?</span>
              </h2>
              <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
                Rejoignez notre clientèle satisfaite et découvrez 
                ce que signifie vraiment un mobilier d&apos;exception sur mesure.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a 
                  href="/contact" 
                  className="inline-flex items-center gap-3 bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900 text-white px-12 py-5 text-lg font-bold rounded-lg hover:scale-105 transition-all duration-300 tracking-widest uppercase mafia-glow premium-shadow"
                >
                  <CreditCard className="w-5 h-5" />
                  NOUS CONTACTER
                </a>
                <a 
                  href="/about"
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


