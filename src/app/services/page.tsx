export const metadata = {
  title: "Services - Triomphe - Maison de la Perfection",
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
    title: "VASES & FLORAL",
    subtitle: "Nature dans Votre Maison",
    description: "De magnifiques vases et arrangements floraux pour apporter la nature dans votre maison avec style et élégance.",
    features: ["Vases artisanaux", "Arrangements personnalisés", "Livraison soignée", "Conseils d'entretien"],
    premium: true,
    price: "Sur devis",
  },
  {
    title: "BOUGIES & PORTE-BOUGIES",
    subtitle: "Ambiance Parfaite",
    description: "Des bougies élégantes et des porte-bougies pour créer l'ambiance parfaite dans chaque pièce de votre maison.",
    features: ["Bougies artisanales", "Porte-bougies design", "Parfums naturels", "Livraison rapide"],
    premium: false,
    price: "Sur devis",
  },
  {
    title: "SCULPTURES & LAMPES",
    subtitle: "Art et Lumière",
    description: "Des sculptures artistiques et des lampes modernes pour illuminer et décorer votre espace avec créativité.",
    features: ["Sculptures uniques", "Lampes design", "Installation incluse", "Garantie qualité"],
    premium: true,
    price: "Sur devis",
  },
  {
    title: "ENSEMBLES DÉCORATIFS",
    subtitle: "Harmonie Complète",
    description: "Ensembles décoratifs complets pour transformer vos espaces avec cohérence et style, du salon à la chambre.",
    features: ["Ensembles coordonnés", "Design personnalisé", "Installation complète", "Service après-vente"],
    premium: true,
    price: "Sur devis",
  },
  {
    title: "CONSEIL DÉCORATION",
    subtitle: "Expertise Personnalisée",
    description: "Services de conseil en décoration avec visite à domicile et recommandations personnalisées par nos experts.",
    features: ["Visite à domicile", "Conseils personnalisés", "Plans 3D", "Suivi personnalisé"],
    premium: true,
    price: "Sur devis",
  },
  {
    title: "DEVIS GRATUIT PERSONNALISÉ",
    subtitle: "Consultation Expert",
    description: "Obtenez votre devis personnalisé avec visite à domicile et conseils d'aménagement par nos experts décorateurs.",
    features: ["Visite à domicile", "Conseil personnalisé", "Plans 3D", "Devis détaillé"],
    premium: false,
    price: "Gratuit",
  },
];

import Container from "@/components/Container";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { CreditCard, Palette, Layers, Zap, Star, Shield, CheckCircle, ArrowRight, TrendingUp, Hammer, Ruler } from "lucide-react";
import type { ReactElement } from "react";

const getServiceIcon = (idx: number) => {
  const icons = [CreditCard, Palette, Layers, Hammer, Ruler, Zap];
  return icons[idx];
};

export default function ServicesPage(): ReactElement {
  return (
    <div className="bg-[#faf9f7] min-h-screen">
      {/* Hero Section */}
      <Section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
             style={{ backgroundImage: "url('/pexels-heyho-6782352.jpg')" }} />
        <div className="absolute inset-0 bg-black/40" />
        
        <Container>
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <Reveal>
              <div className="mb-8">
                <span className="inline-block px-6 py-3 bg-white/95 backdrop-blur-sm text-[#2d2d2d] border border-[#d4c4b0] text-sm font-semibold tracking-widest uppercase rounded-full">
                  Décoration & Design
                </span>
              </div>
            </Reveal>
            
            <Reveal delay={200}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl text-white leading-tight mb-8 font-bold">
                Nos Services
              </h1>
            </Reveal>
            
            <Reveal delay={400}>
              <p className="text-xl sm:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed font-light">
                Six solutions complètes pour tous vos projets de décoration et d&apos;aménagement.
                <span className="font-medium block mt-2"> Où l&apos;artisanat rencontre l&apos;excellence moderne.</span>
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Services Grid */}
      <Section className="bg-white py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, idx) => {
              const Icon = getServiceIcon(idx);
              return (
                <Reveal key={service.title} delay={idx * 150}>
                  <div className={`bg-[#f5f3f0] rounded-2xl p-8 group hover:shadow-lg transition-all duration-500 relative overflow-hidden ${service.premium ? 'border-2 border-[#8b7355]' : ''}`}>
                    {service.premium && (
                      <div className="absolute top-4 right-4">
                        <div className="bg-white px-3 py-1 rounded-full border border-[#8b7355]">
                          <Star className="w-4 h-4 text-[#8b7355] inline mr-1" />
                          <span className="text-[#8b7355] text-xs font-semibold tracking-wide">PREMIUM</span>
                        </div>
                      </div>
                    )}
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center group-hover:bg-[#8b7355]/10 transition-colors duration-300">
                          <Icon className="w-8 h-8 text-[#8b7355]" />
                        </div>
                        <div>
                          <h3 className="text-2xl text-[#2d2d2d] group-hover:text-[#8b7355] transition-colors duration-300 font-bold">
                            {service.title}
                          </h3>
                          <p className="text-[#8b7355] text-sm font-medium tracking-wide">
                            {service.subtitle}
                          </p>
                        </div>
                      </div>
                      
                      <p className="text-[#6b6b6b] text-lg leading-relaxed mb-6">
                        {service.description}
                      </p>
                      
                      <div className="space-y-3 mb-8">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-[#8b7355] flex-shrink-0" />
                            <span className="text-[#6b6b6b] text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-[#6b6b6b] text-sm tracking-wide uppercase">Tarif</span>
                          <div className="text-2xl text-[#8b7355] font-bold">
                            {service.price}
                          </div>
                        </div>
                        
                        <a 
                          href={`/contact?service=${encodeURIComponent(service.title)}`}
                          className="inline-flex items-center gap-2 bg-[#2d2d2d] text-white px-6 py-3 text-sm font-medium rounded-lg hover:bg-[#8b7355] transition-all duration-300"
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
      <Section className="bg-[#faf9f7] py-20">
        <Container>
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl text-[#2d2d2d] mb-6 font-bold">
                Nos <span className="text-[#8b7355]">Garanties</span>
              </h2>
              <p className="text-xl text-[#6b6b6b] max-w-3xl mx-auto">
                L&apos;engagement d&apos;une qualité artisanale sans compromis
              </p>
            </div>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "QUALITÉ GARANTIE",
                description: "Matériaux nobles et finitions artisanales avec garantie sur tous nos produits."
              },
              {
                icon: TrendingUp,
                title: "EXPERTISE ARTISANALE",
                description: "Maîtrise complète des techniques de décoration moderne et traditionnelle."
              },
              {
                icon: Star,
                title: "SERVICE PERSONNALISÉ",
                description: "Accompagnement sur mesure, conseils d'aménagement et suivi de projet."
              }
            ].map((guarantee, idx) => (
              <Reveal key={guarantee.title} delay={idx * 200}>
                <div className="bg-[#f5f3f0] text-center p-8 rounded-xl group hover:shadow-lg transition-all duration-500">
                  <div className="w-20 h-20 mx-auto mb-6 bg-white rounded-full flex items-center justify-center group-hover:bg-[#8b7355]/10 transition-colors duration-300">
                    <guarantee.icon className="w-10 h-10 text-[#8b7355]" />
                  </div>
                  <h3 className="text-xl text-[#2d2d2d] mb-4 group-hover:text-[#8b7355] transition-colors duration-300 font-bold">
                    {guarantee.title}
                  </h3>
                  <p className="text-[#6b6b6b] leading-relaxed">
                    {guarantee.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-white py-20">
        <Container>
          <Reveal>
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl lg:text-5xl text-[#2d2d2d] mb-8 font-bold">
                Prêt pour 
                <span className="block text-[#8b7355]">Votre Projet ?</span>
              </h2>
              <p className="text-xl text-[#6b6b6b] mb-12 max-w-2xl mx-auto">
                Rejoignez notre clientèle satisfaite et découvrez 
                ce que signifie vraiment une décoration d&apos;exception sur mesure.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a 
                  href="/contact" 
                  className="inline-flex items-center gap-3 bg-[#2d2d2d] text-white px-12 py-5 text-lg font-bold rounded-lg hover:bg-[#8b7355] transition-all duration-300 tracking-widest uppercase"
                >
                  <CreditCard className="w-5 h-5" />
                  NOUS CONTACTER
                </a>
                <a 
                  href="/about"
                  className="inline-flex items-center gap-3 border-2 border-[#8b7355] text-[#8b7355] hover:bg-[#8b7355] hover:text-white px-12 py-5 text-lg font-medium rounded-lg transition-all duration-300 tracking-wide"
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


