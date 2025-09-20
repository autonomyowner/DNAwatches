export const metadata = { title: "Nos Tarifs - Triomphe - Maison de la Perfection" };

const decorationProjects: Array<{ name: string; price: string; premium?: boolean; description?: string; category: string }> = [
  { name: "Vases Artisanaux", price: "Sur devis", category: "Vases", description: "Design unique" },
  { name: "Bougies Parfumées", price: "Sur devis", category: "Bougies", description: "Parfums naturels" },
  { name: "Sculptures Modernes", price: "Sur devis", premium: true, category: "Sculptures", description: "Pièces uniques" },
  { name: "Lampes Design", price: "Sur devis", category: "Éclairage", description: "Ambiance parfaite" },
  { name: "Ensembles Décoratifs", price: "Sur devis", premium: true, category: "Ensembles", description: "Harmonie complète" },
  { name: "Arrangements Floraux", price: "Sur devis", category: "Floral", description: "Nature chez vous" },
  { name: "Porte-bougies Élégants", price: "Sur devis", premium: true, category: "Accessoires", description: "Style raffiné" },
  { name: "Décoration Complète", price: "Sur devis", category: "Projet Global", description: "Transformation totale" },
];

const services = [
  {
    name: "CONCEPTION",
    subtitle: "Design Sur Mesure",
    duration: "Projet personnalisé",
    price: "Gratuit",
    features: [
      "Visite à domicile",
      "Plans 3D détaillés",
      "Conseils d'aménagement",
      "Choix des couleurs",
      "Devis détaillé"
    ],
    popular: false
  },
  {
    name: "FABRICATION", 
    subtitle: "Artisanat d'Excellence",
    duration: "1-4 semaines",
    price: "Sur devis",
    features: [
      "Matériaux nobles sélectionnés",
      "Finitions artisanales", 
      "Contrôle qualité strict",
      "Garantie 2 ans",
      "Suivi de fabrication",
      "Respect des délais"
    ],
    popular: true
  },
  {
    name: "INSTALLATION",
    subtitle: "Service Complet",
    duration: "1 jour",
    price: "Inclus",
    features: [
      "Installation professionnelle",
      "Montage et assemblage",
      "Réglages et finitions",
      "Nettoyage du chantier",
      "Conseils d'entretien",
      "Garantie installation"
    ],
    popular: false
  }
];

import Container from "@/components/Container";
import Section from "@/components/Section";
import Button from "@/components/ui/Button";
import Reveal from "@/components/Reveal";
import { Palette, Crown, Star, Check, ArrowRight, TrendingUp, Shield } from "lucide-react";
import type { ReactElement } from "react";

export default function PricingPage(): ReactElement {
  return (
    <>
      {/* Hero Section */}
      <Section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
             style={{ backgroundImage: "url('/pexels-fotoaibe-1571460.jpg')" }} />
        <div className="absolute inset-0 bg-black/40" />
        
        <Container>
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <Reveal>
              <div className="mb-8">
                <span className="inline-block px-6 py-3 bg-white/95 backdrop-blur-sm text-[#2d2d2d] border border-[#d4c4b0] text-sm font-semibold tracking-widest uppercase rounded-full">
                  Tarifs et Services
                </span>
              </div>
            </Reveal>
            
            <Reveal delay={200}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl text-white leading-tight mb-8 font-bold">
                Nos Tarifs
              </h1>
            </Reveal>
            
            <Reveal delay={400}>
              <p className="text-xl sm:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed font-light">
                Transparence et qualité pour vos projets de décoration.
                <span className="font-medium block mt-2"> De la conception à l&apos;installation, tout inclus.</span>
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Packages Section */}
      <Section className="bg-white py-20">
        <Container>
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl text-[#2d2d2d] mb-6 font-bold">
                Nos <span className="text-[#8b7355]">Services</span>
              </h2>
              <p className="text-xl text-[#6b6b6b] max-w-3xl mx-auto">
                Trois étapes pour réaliser vos projets de décoration
              </p>
            </div>
          </Reveal>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <Reveal key={service.name} delay={idx * 150}>
                <div className={`bg-[#f5f3f0] rounded-2xl p-8 relative overflow-hidden group hover:shadow-lg transition-all duration-500 ${service.popular ? 'border-2 border-[#8b7355]' : ''}`}>
                  {service.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-white px-6 py-2 rounded-full border border-[#8b7355]">
                        <Star className="w-4 h-4 text-[#8b7355] inline mr-2" />
                        <span className="text-[#8b7355] text-sm font-semibold tracking-wide">PLUS POPULAIRE</span>
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-3xl text-[#2d2d2d] mb-2 group-hover:text-[#8b7355] transition-colors duration-300 font-bold">
                      {service.name}
                    </h3>
                    <p className="text-[#8b7355] text-sm font-medium tracking-wide mb-4">
                      {service.subtitle}
                    </p>
                    <div className="mb-6">
                      <div className="text-5xl text-[#8b7355] mb-2 font-bold">
                        {service.price === "Sur devis" ? service.price : `${service.price}`}
                      </div>
                      <p className="text-[#6b6b6b] text-sm">{service.duration}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-[#8b7355] flex-shrink-0" />
                        <span className="text-[#6b6b6b] text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    variant={service.popular ? "primary" : "outline"} 
                    size="lg" 
                    asChild 
                    className={`w-full ${service.popular ? 'bg-[#2d2d2d] hover:bg-[#8b7355]' : 'border-2 border-[#8b7355] text-[#8b7355] hover:bg-[#8b7355] hover:text-white'}`}
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

      {/* Decoration Projects */}
      <Section className="bg-[#faf9f7] py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <Reveal>
              <div>
                <h2 className="text-4xl lg:text-5xl text-[#2d2d2d] mb-8 font-bold">
                  Projets 
                  <span className="block text-[#8b7355]">Réalisés</span>
                </h2>
                <p className="text-lg leading-relaxed mb-8 text-[#6b6b6b]">
                  Découvrez notre savoir-faire à travers nos réalisations 
                  et trouvez l&apos;inspiration pour votre projet.
                </p>
                <div className="bg-[#f5f3f0] rounded-2xl overflow-hidden aspect-[4/3] relative">
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/6.jpg')" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-3">
                      <Palette className="w-6 h-6 text-[#8b7355]" />
                      <div>
                        <h3 className="text-xl text-white font-bold">Setif Bousekine</h3>
                        <p className="text-white/80 text-sm">Notre atelier et zone de création</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
            
            <Reveal delay={300}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <div className="bg-[#f5f3f0] p-6 border-b border-[#d4c4b0]">
                  <h3 className="text-2xl text-[#2d2d2d] mb-2 font-bold">Projets Récents</h3>
                  <p className="text-[#6b6b6b] text-sm">Sélection de nos réalisations</p>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  {decorationProjects.map((project) => (
                    <div 
                      key={project.name} 
                      className="flex items-center justify-between p-4 border-b border-[#d4c4b0] last:border-none hover:bg-[#f5f3f0] transition-colors duration-300"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${project.premium ? 'bg-[#8b7355]' : 'bg-[#6b6b6b]'}`} />
                        <div>
                          <div className="text-[#2d2d2d] font-medium">{project.name}</div>
                          <div className="text-[#6b6b6b] text-xs">{project.category}</div>
                          {project.description && (
                            <div className="text-[#6b6b6b] text-xs">{project.description}</div>
                          )}
                        </div>
                        {project.premium && (
                          <Crown className="w-4 h-4 text-[#8b7355]" />
                        )}
                      </div>
                      <div className="text-xl text-[#8b7355] font-bold">
                        {project.price}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-4 bg-[#f5f3f0] border-t border-[#d4c4b0]">
                  <div className="flex items-center gap-2 text-[#6b6b6b] text-xs">
                    <TrendingUp className="w-4 h-4" />
                    <span>Tarifs sur devis. Consultation gratuite</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Guarantees */}
      <Section className="bg-white py-20">
        <Container>
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl text-[#2d2d2d] mb-6 font-bold">
                Nos <span className="text-[#8b7355]">Engagements</span>
              </h2>
              <p className="text-xl text-[#6b6b6b] max-w-3xl mx-auto">
                La promesse d&apos;un service irréprochable, sans surprise
              </p>
            </div>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "QUALITÉ GARANTIE",
                description: "Matériaux nobles et finitions artisanales. Garantie 2 ans sur tous nos produits."
              },
              {
                icon: Crown,
                title: "FABRICATION PREMIUM",
                description: "Chaque pièce fabriquée par nos artisans experts. Contrôle qualité à chaque étape."
              },
              {
                icon: TrendingUp,
                title: "SERVICE PERSONNALISÉ",
                description: "Accompagnement complet de la conception à l'installation. Conseils d'aménagement inclus."
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
      <Section className="bg-[#faf9f7] py-20">
        <Container>
          <Reveal>
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl lg:text-5xl text-[#2d2d2d] mb-8 font-bold">
                Prêt à 
                <span className="block text-[#8b7355]">Commander ?</span>
              </h2>
              <p className="text-xl text-[#6b6b6b] mb-12 max-w-2xl mx-auto">
                Contactez-nous pour un devis personnalisé ou découvrez 
                nos réalisations et notre savoir-faire artisanal.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button 
                  variant="primary" 
                  size="lg" 
                  asChild 
                  className="bg-[#2d2d2d] hover:bg-[#8b7355] text-lg px-12 py-5"
                >
                  <a href="/contact" className="flex items-center gap-3">
                    <Palette className="w-5 h-5" />
                    NOUS CONTACTER
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  asChild 
                  className="border-2 border-[#8b7355] text-[#8b7355] hover:bg-[#8b7355] hover:text-white text-lg px-12 py-5"
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


