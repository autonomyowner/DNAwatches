import type { ReactElement } from "react";
import Link from "next/link";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Hero from "@/components/Hero";
import Button from "@/components/ui/Button";
import Reveal from "@/components/Reveal";
import { Crown, Shield, Building, Phone, ArrowRight, Quote, MapPin } from "lucide-react";

const advantages = [
  { 
    title: "EXPERTISE LOCALE", 
    desc: "Connaissance approfondie du marché immobilier algérois et expertise juridique.", 
    icon: MapPin,
    premium: true 
  },
  { 
    title: "BIENS EXCLUSIFS", 
    desc: "Portefeuille de propriétés de prestige sélectionnées avec soin.", 
    icon: Building,
    premium: false 
  },
  { 
    title: "SERVICE PREMIUM", 
    desc: "Accompagnement personnalisé de la recherche à la signature.", 
    icon: Shield,
    premium: false 
  },
  { 
    title: "CONFIDENTIALITÉ", 
    desc: "Discrétion absolue pour vos transactions immobilières.", 
    icon: Crown,
    premium: true 
  },
];

const featuredProperties = [
  { location: "Hydra", price: "850M", description: "Villa moderne vue mer", premium: true },
  { location: "Bab Ezzouar", price: "450M", description: "Appartement standing", premium: true },
  { location: "Alger Centre", price: "1.2Md", description: "Penthouse luxueux", premium: false },
  { location: "Dely Ibrahim", price: "680M", description: "Villa familiale", premium: true },
  { location: "Ben Aknoun", price: "520M", description: "Appartement neuf", premium: false },
  { location: "Cheraga", price: "950M", description: "Villa avec piscine", premium: true },
];

const testimonials = [
  {
    text: "elwakil_immobilier m'a aidé à trouver la villa de mes rêves à Hydra. Service exceptionnel, conseils avisés et suivi irréprochable. Une équipe de vrais professionnels.",
    author: "Amina K.",
    role: "Chef d'entreprise",
    company: "Alger, Hydra"
  },
  {
    text: "Après avoir visité plusieurs agences, j'ai choisi elwakil_immobilier pour leur sérieux et leur expertise. Ils ont négocié le meilleur prix pour mon appartement à Bab Ezzouar.",
    author: "Karim B.",
    role: "Investisseur",
    company: "Alger, Bab Ezzouar"
  },
  {
    text: "Vente de notre maison familiale réalisée en moins de 2 mois ! L'équipe de elwakil_immobilier est très professionnelle et offre un service personnalisé remarquable.",
    author: "Fatima & Ahmed",
    role: "Propriétaires",
    company: "Alger, Dely Ibrahim"
  }
];

const stats = [
  { number: "2018", label: "Année de Création", suffix: "" },
  { number: "300", label: "Biens Vendus", suffix: "+" },
  { number: "95", label: "Satisfaction Client", suffix: "%" },
  { number: "15", label: "Quartiers Couverts", suffix: "+" },
];

const services = [
  {
    title: "VENTE IMMOBILIÈRE",
    description: "Expertise complète pour la vente de votre bien immobilier",
    features: ["Estimation gratuite", "Marketing digital", "Négociation optimisée"],
    href: "/services"
  },
  {
    title: "LOCATION & GESTION", 
    description: "Gestion locative complète de vos investissements immobiliers",
    features: ["Sélection locataires", "Gestion administrative", "Maintenance assurée"],
    href: "/services"
  },
  {
    title: "CONSEIL EN INVESTISSEMENT",
    description: "Accompagnement personnalisé pour vos projets d'investissement",
    features: ["Étude de marché", "Analyse rentabilité", "Suivi juridique"],
    href: "/services"
  }
];

export default function Home(): ReactElement {
  return (
    <>
      <Hero />

      {/* Advantages Section */}
      <Section className="relative bg-background-secondary">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-smoke/5 via-transparent to-accent-steel/5" />
        
        <Container>
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="mafia-heading text-5xl lg:text-6xl text-white mb-6">
                Nos <span className="golden-accent">Atouts</span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Quatre piliers d&apos;excellence qui font de nous le leader de l&apos;immobilier de luxe à Alger
              </p>
            </div>
          </Reveal>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((item, idx) => (
              <Reveal key={item.title} delay={idx * 150}>
                <div className={`luxury-card p-8 rounded-xl group hover:scale-105 transition-all duration-500 text-center ${item.premium ? 'mafia-glow' : ''}`}>
                  <div className="w-16 h-16 mx-auto mb-6 luxury-card rounded-full flex items-center justify-center group-hover:bg-accent-gold/20 transition-colors duration-300">
                    <item.icon className="w-8 h-8 text-accent-gold" />
                  </div>
                  <h3 className="mafia-heading text-lg text-white mb-4 group-hover:text-accent-gold transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Services Preview */}
      <Section className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-background to-background-secondary" />
        
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div>
                <h2 className="mafia-heading text-5xl lg:text-6xl text-white mb-8">
                  Services 
                  <span className="golden-accent block">d&apos;Exception</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-accent-gold to-accent-gold-bright rounded-full mb-8" />
                <p className="text-lg text-white/85 leading-relaxed mb-12">
                  De la recherche à la signature, nous orchestrons chaque transaction immobilière 
                  avec l&apos;expertise et la discrétion que méritent nos clients privilégiés.
                </p>
                <Button 
                  variant="gold" 
                  size="lg" 
                  asChild 
                  className="mafia-glow premium-shadow"
                >
                  <Link href="/services" className="flex items-center gap-3">
                    <Building className="w-5 h-5" />
                    DÉCOUVRIR NOS SERVICES
                  </Link>
                </Button>
              </div>
            </Reveal>
            
            <Reveal delay={300}>
              <div className="space-y-6">
                {services.map((service) => (
                  <div key={service.title} className="luxury-card p-6 rounded-xl group hover:scale-105 transition-all duration-500">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="mafia-heading text-xl text-white group-hover:text-accent-gold transition-colors duration-300">
                        {service.title}
                      </h3>
                      <ArrowRight className="w-5 h-5 text-accent-gold group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                    <p className="text-white/80 text-sm mb-4">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature) => (
                        <span key={feature} className="text-xs px-3 py-1 bg-accent-gold/20 text-accent-gold rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Pricing Preview */}
      <Section className="relative bg-background-secondary">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-burgundy/5 via-transparent to-accent-gold/5" />
        
        <Container>
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="mafia-heading text-5xl lg:text-6xl text-white mb-6">
                Biens <span className="golden-accent">d&apos;Exception</span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Une sélection exclusive de propriétés de prestige à Alger
              </p>
            </div>
          </Reveal>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredProperties.map((property, idx) => (
              <Reveal key={property.location} delay={idx * 100}>
                <div className="luxury-card p-6 rounded-xl group hover:scale-105 transition-all duration-500">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${property.premium ? 'bg-accent-gold' : 'bg-accent-steel'}`} />
                      <h3 className="mafia-heading text-lg text-white group-hover:text-accent-gold transition-colors duration-300">
                        {property.location}
                      </h3>
                      {property.premium && <Crown className="w-4 h-4 text-accent-gold" />}
                    </div>
                    <div className="mafia-heading text-2xl text-accent-gold">
                      {property.price} DA
                    </div>
                  </div>
                  <p className="text-white/60 text-sm">
                    {property.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          
          <Reveal delay={600}>
            <div className="text-center">
              <Button 
                variant="outline" 
                size="lg" 
                asChild 
                className="luxury-card border-accent-gold/40 text-white hover:bg-accent-gold/10"
              >
                <Link href="/pricing">
                  VOIR TOUS NOS BIENS
                </Link>
              </Button>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Statistics */}
      <Section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-background-secondary" />
        
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <Reveal key={stat.label} delay={idx * 150}>
                <div className="text-center group">
                  <div className="luxury-card p-8 rounded-xl hover:scale-105 transition-all duration-500">
                    <div className="mafia-heading text-4xl lg:text-5xl text-accent-gold mb-2 group-hover:scale-110 transition-transform duration-300">
                      {stat.number}{stat.suffix}
                    </div>
                    <p className="text-white/70 font-medium tracking-wide uppercase text-sm">
                      {stat.label}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Testimonials */}
      <Section className="relative bg-background-secondary">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-smoke/5 via-transparent to-accent-burgundy/5" />
        
        <Container>
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="mafia-heading text-5xl lg:text-6xl text-white mb-6">
                Paroles de <span className="golden-accent">Clients</span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                La confiance de nos clients privilégiés, notre plus belle récompense
              </p>
            </div>
          </Reveal>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <Reveal key={testimonial.author} delay={idx * 200}>
                <div className="luxury-card p-8 rounded-xl group hover:scale-105 transition-all duration-500">
                  <Quote className="w-12 h-12 text-accent-gold mb-6 opacity-50" />
                  <blockquote className="text-white/85 leading-relaxed mb-6 italic">
                    &quot;{testimonial.text}&quot;
                  </blockquote>
                  <div className="border-t border-accent-gold/20 pt-6">
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-accent-gold text-sm">{testimonial.role}</div>
                    <div className="text-white/60 text-xs">{testimonial.company}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/5 via-background to-accent-burgundy-dark/10" />
        
        <Container>
          <Reveal>
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="mafia-heading text-5xl lg:text-6xl text-white mb-8">
                Rejoignez nos 
                <span className="golden-accent block">Clients Privilégiés</span>
              </h2>
              <p className="text-xl text-white/85 mb-12 max-w-2xl mx-auto">
                Découvrez pourquoi les personnalités les plus exigeantes d&apos;Alger 
                nous font confiance pour leurs projets immobiliers les plus importants.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button 
                  variant="gold" 
                  size="lg" 
                  asChild 
                  className="mafia-glow premium-shadow text-lg px-12 py-5"
                >
                  <Link href="/contact" className="flex items-center gap-3">
                    <Phone className="w-5 h-5" />
                    NOUS CONTACTER
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  asChild 
                  className="luxury-card border-accent-gold/40 text-white hover:bg-accent-gold/10 hover:border-accent-gold/60 text-lg px-12 py-5"
                >
                  <Link href="/about">
                    DÉCOUVRIR NOTRE AGENCE
                  </Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
