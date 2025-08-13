export const metadata = { title: "Nos Biens - Propriétés d'Exception" };

const properties: Array<{ location: string; price: string; premium?: boolean; description?: string; type: string }> = [
  { location: "Hydra", price: "850M", type: "Villa", description: "Vue mer panoramique" },
  { location: "Bab Ezzouar", price: "450M", type: "Appartement", description: "Quartier moderne" },
  { location: "Alger Centre", price: "1.2Md", premium: true, type: "Penthouse", description: "Luxe absolu" },
  { location: "Dely Ibrahim", price: "680M", type: "Villa", description: "Cadre verdoyant" },
  { location: "Ben Aknoun", price: "520M", premium: true, type: "Appartement", description: "Standing supérieur" },
  { location: "Cheraga", price: "950M", type: "Villa", description: "Avec piscine" },
  { location: "El Biar", price: "1.5Md", premium: true, type: "Villa", description: "Quartier diplomatique" },
  { location: "Bir Mourad Raïs", price: "380M", type: "Duplex", description: "Neuf avec terrasse" },
];

const services = [
  {
    name: "VENTE",
    subtitle: "L'Art de Bien Vendre",
    duration: "Service complet",
    price: "3%",
    features: [
      "Estimation gratuite par expert",
      "Marketing digital premium",
      "Visite virtuelle incluse",
      "Négociation optimisée",
      "Accompagnement juridique"
    ],
    popular: false
  },
  {
    name: "GESTION LOCATIVE", 
    subtitle: "Votre Patrimoine, Notre Expertise",
    duration: "Gestion mensuelle",
    price: "8%",
    features: [
      "Sélection locataires vérifiée",
      "Gestion administrative complète", 
      "Maintenance et entretien",
      "Rapport mensuel détaillé",
      "Assurance loyers impayés",
      "Service disponible 6j/7"
    ],
    popular: true
  },
  {
    name: "CONSEIL VIP",
    subtitle: "L'Excellence Personnalisée",
    duration: "Sur mesure",
    price: "Sur devis",
    features: [
      "Conseil en investissement",
      "Équipe dédiée personnelle",
      "Accès biens exclusifs",
      "Négociation privilégiée",
      "Service concierge immobilier",
      "Suivi patrimonial complet"
    ],
    popular: false
  }
];

import Container from "@/components/Container";
import Section from "@/components/Section";
import Button from "@/components/ui/Button";
import Reveal from "@/components/Reveal";
import { Building, Crown, Star, Check, ArrowRight, TrendingUp, Shield } from "lucide-react";
import type { ReactElement } from "react";

export default function PricingPage(): ReactElement {
  return (
    <>
      {/* Hero Section */}
      <Section className="relative overflow-hidden pt-32 pb-20 film-grain">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background-secondary to-background" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-radial from-accent-gold/6 to-transparent opacity-40" />
        <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-gradient-radial from-accent-burgundy/8 to-transparent opacity-30" />
        
        <Container>
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <Reveal>
              <div className="mb-8">
                <span className="luxury-card mafia-glow px-6 py-3 text-accent-gold text-sm font-semibold tracking-widest uppercase">
                  Biens d&apos;Exception
                </span>
              </div>
            </Reveal>
            
            <Reveal delay={200}>
              <h1 className="mafia-heading text-6xl sm:text-7xl lg:text-8xl text-white leading-[0.9] mb-8">
                <span className="block">NOS</span>
                <span className="block golden-accent">BIENS</span>
              </h1>
            </Reveal>
            
            <Reveal delay={400}>
              <p className="text-2xl sm:text-3xl text-white/90 max-w-4xl mx-auto leading-relaxed font-light">
                Une sélection exclusive de propriétés d&apos;exception.
                <span className="golden-accent font-medium block mt-2"> À Alger, dans les quartiers les plus recherchés.</span>
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Packages Section */}
      <Section className="relative bg-background-secondary">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-smoke/5 via-transparent to-accent-steel/5" />
        
        <Container>
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="mafia-heading text-5xl lg:text-6xl text-white mb-6">
                Nos <span className="golden-accent">Services</span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Trois formules d&apos;accompagnement pour vos projets immobiliers
              </p>
            </div>
          </Reveal>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <Reveal key={service.name} delay={idx * 150}>
                <div className={`luxury-card rounded-2xl p-8 relative overflow-hidden group hover:scale-105 transition-all duration-500 ${service.popular ? 'mafia-glow border-2 border-accent-gold/50' : ''}`}>
                  {service.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="luxury-card px-6 py-2 rounded-full border border-accent-gold/50">
                        <Star className="w-4 h-4 text-accent-gold inline mr-2" />
                        <span className="text-accent-gold text-sm font-semibold tracking-wide">PLUS POPULAIRE</span>
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="mafia-heading text-3xl text-white mb-2 group-hover:text-accent-gold transition-colors duration-300">
                      {service.name}
                    </h3>
                    <p className="text-accent-gold text-sm font-medium tracking-wide mb-4">
                      {service.subtitle}
                    </p>
                    <div className="mb-6">
                      <div className="mafia-heading text-5xl text-accent-gold mb-2">
                        {service.price === "Sur devis" ? service.price : `${service.price}`}
                      </div>
                      <p className="text-white/60 text-sm">{service.duration}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-accent-gold flex-shrink-0" />
                        <span className="text-white/80 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    variant={service.popular ? "gold" : "outline"} 
                    size="lg" 
                    asChild 
                    className={`w-full ${service.popular ? 'premium-shadow' : 'luxury-card border-accent-gold/40 text-white hover:bg-accent-gold/10'}`}
                  >
                    <a href="/contact" className="flex items-center justify-center gap-2">
                      {service.price === "Sur devis" ? "NOUS CONTACTER" : "EN SAVOIR PLUS"}
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Routes & Destinations */}
      <Section className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-background to-background-secondary" />
        
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <Reveal>
              <div>
                <h2 className="mafia-heading text-5xl lg:text-6xl text-white mb-8">
                  Quartiers 
                  <span className="golden-accent block">d&apos;Exception</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-accent-gold to-accent-gold-bright rounded-full mb-8" />
                <p className="text-lg text-white/85 leading-relaxed mb-8">
                  Depuis notre agence à Alger, nous couvrons les quartiers 
                  les plus recherchés de la capitale et sa banlieue.
                </p>
                <div className="luxury-card rounded-2xl overflow-hidden aspect-[4/3] relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/10 via-background-tertiary to-accent-burgundy/10" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-3">
                      <Building className="w-6 h-6 text-accent-gold" />
                      <div>
                        <h3 className="mafia-heading text-xl text-white">Alger Centre</h3>
                        <p className="text-white/80 text-sm">Notre siège social et zone d&apos;expertise</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
            
            <Reveal delay={300}>
              <div className="luxury-card rounded-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-accent-gold/20 via-background-tertiary to-accent-burgundy/20 p-6 border-b border-accent-gold/20">
                  <h3 className="mafia-heading text-2xl text-white mb-2">Biens Disponibles</h3>
                  <p className="text-white/80 text-sm">Sélection de propriétés d&apos;exception</p>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  {properties.map((property) => (
                    <div 
                      key={property.location} 
                      className="flex items-center justify-between p-4 border-b border-accent-gold/10 last:border-none hover:bg-accent-gold/5 transition-colors duration-300"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${property.premium ? 'bg-accent-gold' : 'bg-accent-steel'}`} />
                        <div>
                          <div className="text-white font-medium">{property.location}</div>
                          <div className="text-white/50 text-xs">{property.type}</div>
                          {property.description && (
                            <div className="text-white/60 text-xs">{property.description}</div>
                          )}
                        </div>
                        {property.premium && (
                          <Crown className="w-4 h-4 text-accent-gold" />
                        )}
                      </div>
                      <div className="mafia-heading text-xl text-accent-gold">
                        {property.price} DA
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-4 bg-accent-gold/5 border-t border-accent-gold/20">
                  <div className="flex items-center gap-2 text-white/70 text-xs">
                    <TrendingUp className="w-4 h-4" />
                    <span>Prix indicatifs. Estimation gratuite sur demande</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Guarantees */}
      <Section className="relative bg-background-secondary">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-burgundy-dark/10 via-transparent to-accent-gold/5" />
        
        <Container>
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="mafia-heading text-5xl lg:text-6xl text-white mb-6">
                Nos <span className="golden-accent">Engagements</span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                La promesse d&apos;un service irréprochable, sans surprise
              </p>
            </div>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "TRANSACTIONS SÉCURISÉES",
                description: "Accompagnement juridique complet. Tous les documents vérifiés par nos experts."
              },
              {
                icon: Crown,
                title: "BIENS VÉRIFIÉS",
                description: "Chaque propriété inspectée par nos experts. Garantie de qualité et d'authenticité."
              },
              {
                icon: TrendingUp,
                title: "EXPERTISE MARCHÉ",
                description: "Connaissance approfondie du marché local. Conseils avisés pour optimiser votre investissement."
              }
            ].map((guarantee, idx) => (
              <Reveal key={guarantee.title} delay={idx * 200}>
                <div className="luxury-card text-center p-8 rounded-xl group hover:scale-105 transition-all duration-500">
                  <div className="w-20 h-20 mx-auto mb-6 luxury-card rounded-full flex items-center justify-center group-hover:bg-accent-gold/20 transition-colors duration-300">
                    <guarantee.icon className="w-10 h-10 text-accent-gold" />
                  </div>
                  <h3 className="mafia-heading text-xl text-white mb-4 group-hover:text-accent-gold transition-colors duration-300">
                    {guarantee.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed">
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
        <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/5 via-background to-accent-burgundy-dark/10" />
        
        <Container>
          <Reveal>
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="mafia-heading text-5xl lg:text-6xl text-white mb-8">
                Prêt à 
                <span className="golden-accent block">Investir ?</span>
              </h2>
              <p className="text-xl text-white/85 mb-12 max-w-2xl mx-auto">
                Contactez-nous pour une estimation gratuite ou découvrez 
                nos biens exclusifs disponibles à la vente ou à la location.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button 
                  variant="gold" 
                  size="lg" 
                  asChild 
                  className="mafia-glow premium-shadow text-lg px-12 py-5"
                >
                  <a href="/contact" className="flex items-center gap-3">
                    <Building className="w-5 h-5" />
                    NOUS CONTACTER
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  asChild 
                  className="luxury-card border-accent-gold/40 text-white hover:bg-accent-gold/10 hover:border-accent-gold/60 text-lg px-12 py-5"
                >
                  <a href="/services">
                    DÉCOUVRIR NOS SERVICES
                  </a>
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}


