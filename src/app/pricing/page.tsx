export const metadata = { title: "Nos Tarifs - Triomphe Home Design - Fabrication de Meubles" };

const furnitureProjects: Array<{ name: string; price: string; premium?: boolean; description?: string; category: string }> = [
  { name: "Cuisine Moderne", price: "Sur devis", category: "Cuisine", description: "Design personnalisé" },
  { name: "Dressing Optimisé", price: "Sur devis", category: "Dressing", description: "Solutions modulables" },
  { name: "Meuble TV + Console", price: "Sur devis", premium: true, category: "Salon", description: "Ensemble coordonné" },
  { name: "Lit Capitonné + Tables", price: "Sur devis", category: "Chambre", description: "Finitions luxueuses" },
  { name: "Bureau + Bibliothèque", price: "Sur devis", premium: true, category: "Bureau", description: "Ergonomie maximale" },
  { name: "Armoire Sur Mesure", price: "Sur devis", category: "Rangement", description: "Optimisation espace" },
  { name: "Coiffeuse + Miroir", price: "Sur devis", premium: true, category: "Chambre", description: "Design élégant" },
  { name: "Mobilier Complet", price: "Sur devis", category: "Ensemble", description: "Projet global" },
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
      "Choix des matériaux",
      "Devis détaillé"
    ],
    popular: false
  },
  {
    name: "FABRICATION", 
    subtitle: "Artisanat d'Excellence",
    duration: "2-6 semaines",
    price: "Sur devis",
    features: [
      "Matériaux nobles sélectionnés",
      "Finitions artisanales", 
      "Contrôle qualité strict",
      "Garantie 5 ans",
      "Suivi de fabrication",
      "Respect des délais"
    ],
    popular: true
  },
  {
    name: "INSTALLATION",
    subtitle: "Service Complet",
    duration: "1-2 jours",
    price: "Inclus",
    features: [
      "Installation professionnelle",
      "Montage et assemblage",
      "Réglages et finitions",
      "Nettoyage du chantier",
      "Formation à l'utilisation",
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
                  Tarifs et Services
                </span>
              </div>
            </Reveal>
            
            <Reveal delay={200}>
              <h1 className="mafia-heading text-6xl sm:text-7xl lg:text-8xl text-white leading-[0.9] mb-8">
                <span className="block">NOS</span>
                <span className="block golden-accent">TARIFS</span>
              </h1>
            </Reveal>
            
            <Reveal delay={400}>
              <p className="text-2xl sm:text-3xl text-white/90 max-w-4xl mx-auto leading-relaxed font-light">
                Transparence et qualité pour vos meubles sur mesure.
                <span className="golden-accent font-medium block mt-2"> De la conception à l&apos;installation, tout inclus.</span>
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Packages Section */}
      <Section className="relative">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
             style={{ backgroundImage: "url('/photo-1665836372090-29f9515f1a60.avif')" }} />
        <div className="absolute inset-0 bg-white/85" />
        
        <Container>
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="mafia-heading text-5xl lg:text-6xl text-white mb-6">
                Nos <span className="golden-accent">Services</span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Trois étapes pour réaliser vos meubles sur mesure
              </p>
            </div>
          </Reveal>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <Reveal key={service.name} delay={idx * 150}>
                <div className={`luxury-card mafia-glow rounded-2xl p-8 relative overflow-hidden group hover:scale-105 transition-all duration-500 ${service.popular ? 'border-2 border-rose-900/50' : ''}`}>
                  {service.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="luxury-card px-6 py-2 rounded-full border border-rose-900/40">
                        <Star className="w-4 h-4 text-rose-400 inline mr-2" />
                        <span className="text-rose-400 text-sm font-semibold tracking-wide">PLUS POPULAIRE</span>
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="mafia-heading text-3xl text-white mb-2 group-hover:text-rose-400 transition-colors duration-300">
                      {service.name}
                    </h3>
                    <p className="text-rose-400 text-sm font-medium tracking-wide mb-4">
                      {service.subtitle}
                    </p>
                    <div className="mb-6">
                      <div className="mafia-heading text-5xl text-rose-400 mb-2">
                        {service.price === "Sur devis" ? service.price : `${service.price}`}
                      </div>
                      <p className="text-white/60 text-sm">{service.duration}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-rose-400 flex-shrink-0" />
                        <span className="text-white/80 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    variant={service.popular ? "primary" : "outline"} 
                    size="lg" 
                    asChild 
                    className={`w-full ${service.popular ? 'premium-shadow mafia-glow bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900' : 'luxury-card border-rose-900/40 text-white hover:bg-rose-900/10'}`}
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

      {/* Furniture Projects */}
      <Section className="relative bg-gray-50">
        <div className="absolute inset-0 bg-gray-50" />
        
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <Reveal>
              <div>
                <h2 className="mafia-heading text-5xl lg:text-6xl text-white mb-8">
                  Projets 
                  <span className="golden-accent block">Réalisés</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-accent-gold to-accent-gold-bright rounded-full mb-8" />
                <p className="text-lg text-white/85 leading-relaxed mb-8">
                  Découvrez notre savoir-faire à travers nos réalisations 
                  et trouvez l&apos;inspiration pour votre projet.
                </p>
                <div className="luxury-card mafia-glow rounded-2xl overflow-hidden aspect-[4/3] relative">
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/6.jpg')" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-3">
                      <Palette className="w-6 h-6 text-rose-400" />
                      <div>
                        <h3 className="mafia-heading text-xl text-white">Setif Bousekine</h3>
                        <p className="text-white/80 text-sm">Notre atelier et zone de création</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
            
            <Reveal delay={300}>
              <div className="luxury-card rounded-2xl overflow-hidden">
                <div className="luxury-card mafia-glow p-6 border-b border-rose-900/40">
                  <h3 className="mafia-heading text-2xl text-white mb-2">Projets Récent</h3>
                  <p className="text-white/80 text-sm">Sélection de nos réalisations</p>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  {furnitureProjects.map((project) => (
                    <div 
                      key={project.name} 
                      className="flex items-center justify-between p-4 border-b border-rose-900/20 last:border-none hover:bg-rose-900/5 transition-colors duration-300"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${project.premium ? 'bg-rose-400' : 'bg-white/60'}`} />
                        <div>
                          <div className="text-white font-medium">{project.name}</div>
                          <div className="text-white/50 text-xs">{project.category}</div>
                          {project.description && (
                            <div className="text-white/60 text-xs">{project.description}</div>
                          )}
                        </div>
                        {project.premium && (
                          <Crown className="w-4 h-4 text-rose-400" />
                        )}
                      </div>
                      <div className="mafia-heading text-xl text-rose-400">
                        {project.price}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-4 bg-rose-900/5 border-t border-rose-900/20">
                  <div className="flex items-center gap-2 text-white/70 text-xs">
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
      <Section className="relative">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
             style={{ backgroundImage: "url('/photo-1714060335405-81b17c8c0a22.avif')" }} />
        <div className="absolute inset-0 bg-black/70" />
        
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
                title: "QUALITÉ GARANTIE",
                description: "Matériaux nobles et finitions artisanales. Garantie 5 ans sur tous nos meubles."
              },
              {
                icon: Crown,
                title: "FABRICATION PREMIUM",
                description: "Chaque meuble fabriqué par nos artisans experts. Contrôle qualité à chaque étape."
              },
              {
                icon: TrendingUp,
                title: "SERVICE PERSONNALISÉ",
                description: "Accompagnement complet de la conception à l'installation. Conseils d'aménagement inclus."
              }
            ].map((guarantee, idx) => (
              <Reveal key={guarantee.title} delay={idx * 200}>
                <div className="luxury-card text-center p-8 rounded-xl group hover:scale-105 transition-all duration-500">
                  <div className="w-20 h-20 mx-auto mb-6 luxury-card rounded-full flex items-center justify-center group-hover:bg-rose-500/20 transition-colors duration-300">
                    <guarantee.icon className="w-10 h-10 text-rose-400" />
                  </div>
                  <h3 className="mafia-heading text-xl text-white mb-4 group-hover:text-rose-400 transition-colors duration-300">
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
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
             style={{ backgroundImage: "url('/photo-1558969213-ff7823387b5c.avif')" }} />
        
        <Container>
          <Reveal>
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="mafia-heading text-5xl lg:text-6xl text-white mb-8">
                Prêt à 
                <span className="golden-accent block">Commander ?</span>
              </h2>
              <p className="text-xl text-white/85 mb-12 max-w-2xl mx-auto">
                Contactez-nous pour un devis personnalisé ou découvrez 
                nos réalisations et notre savoir-faire artisanal.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button 
                  variant="primary" 
                  size="lg" 
                  asChild 
                  className="mafia-glow premium-shadow text-lg px-12 py-5"
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
                  className="luxury-card border-rose-900/40 text-white hover:bg-rose-900/10 hover:border-rose-900/60 text-lg px-12 py-5"
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


