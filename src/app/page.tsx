import type { ReactElement } from "react";
import Link from "next/link";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Hero from "@/components/Hero";
import Button from "@/components/ui/Button";
import Reveal from "@/components/Reveal";
import { siteConfig } from "@/config/site";
import { CreditCard, Shield, Palette, Zap, Users, Quote, ChevronRight, Phone, PenTool, Hammer, Home as HomeIcon, MessageSquare } from "lucide-react";

const advantages = [
  { 
    title: "MEUBLES SUR MESURE", 
    desc: "Fabrication de meubles personnalisés selon vos demandes et préférences.", 
    icon: Palette,
    premium: true 
  },
  { 
    title: "ARTISANS EXPERTS", 
    desc: "Menuisiers et artisans professionnels spécialisés dans la fabrication moderne.", 
    icon: Users,
    premium: false 
  },
  { 
    title: "GAMME COMPLÈTE", 
    desc: "Cuisine, dressing, meuble TV, coiffeuse, lit capitonné, armoire, bureau.", 
    icon: Shield,
    premium: false 
  },
  { 
    title: "LIVRAISON RAPIDE", 
    desc: "Fabrication efficace avec délais respectés et qualité artisanale garantie.", 
    icon: Zap,
    premium: true 
  },
];

const featuredServices = [
  { 
    title: "Cuisine Sur Mesure", 
    description: "Fabrication cuisine moderne complète avec finitions premium", 
    icon: CreditCard,
    features: ["Design personnalisé", "Matériaux premium", "Installation incluse"]
  },
  { 
    title: "Dressing", 
    description: "Dressing personnalisé optimisé pour votre espace", 
    icon: Users,
    features: ["Rangement optimisé", "Finitions parfaites", "Sur mesure"]
  },
  { 
    title: "Meuble TV", 
    description: "Meuble TV design moderne et fonctionnel", 
    icon: Zap,
    features: ["Design épuré", "Câblage intégré", "Matériaux nobles"]
  }
];

const testimonials = [
  {
    text: "Les meubles fabriqués par Triomphe Home Design ont complètement transformé notre maison ! Qualité artisanale exceptionnelle, finitions parfaites et respect des délais. Nous recommandons vivement leurs services.",
    author: "Famille Benaissa",
    role: "Cuisine & Dressing",
    company: "Setif, Décembre 2024"
  },
  {
    text: "Après avoir comparé plusieurs menuisiers, nous avons choisi Triomphe Home Design pour leur professionnalisme. La qualité de fabrication et le service client sont irréprochables.",
    author: "Ahmed M.",
    role: "Meuble TV & Bureau",
    company: "Constantine, Novembre 2024"
  },
  {
    text: "Service remarquable ! L'équipe de Triomphe Home Design nous a fabriqué un lit capitonné et une armoire sur mesure. Le résultat dépasse nos attentes.",
    author: "Fatima Z.",
    role: "Chambre à coucher",
    company: "Bejaia, Octobre 2024"
  }
];

const stats = [
  { number: "2020", label: "Année de Création", suffix: "" },
  { number: "200", label: "Meubles Fabriqués", suffix: "+" },
  { number: "98", label: "Satisfaction Client", suffix: "%" },
  { number: "15", label: "Types de Meubles", suffix: "+" },
];

const services = [
  {
    title: "FABRICATION SUR MESURE",
    description: "Fabrication de meubles personnalisés selon vos besoins",
    features: ["Design personnalisé", "Matériaux premium", "Finitions parfaites"],
    icon: Palette,
    href: "/services"
  },
  {
    title: "GAMME COMPLÈTE", 
    description: "Tous types de meubles pour votre maison",
    features: ["Cuisine moderne", "Dressing optimisé", "Mobilier salon"],
    icon: Shield,
    href: "/services"
  },
  {
    title: "SERVICE PROFESSIONNEL",
    description: "Accompagnement complet de la conception à la livraison",
    features: ["Devis gratuit", "Conseil expert", "Livraison incluse"],
    icon: Users,
    href: "/services"
  }
];

export default function Home(): ReactElement {
  return (
    <>
      <Hero />
      
      {/* Featured Services */}
      <Section className="relative bg-white">
        {/* Background image with fade */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/photo-1665836372090-29f9515f1a60.avif')" }}
        />
        <div className="absolute inset-0 bg-white/85" />
        
        <Container>
          <div className="relative z-10">
            <Reveal>
              <div className="text-center mb-16">
                <h2 className="mafia-heading text-5xl lg:text-6xl text-slate-800 mb-6">
                  Nos <span className="text-transparent bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900 bg-clip-text">Services</span>
              </h2>
              <p className="text-xl text-slate-700 max-w-3xl mx-auto">
                Fabrication sur mesure de meubles haut de gamme, alliant tradition artisanale et design contemporain
              </p>
            </div>
          </Reveal>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, idx) => (
              <Reveal key={service.title} delay={idx * 200}>
                <div className="luxury-card relative bg-[#F6D0CB]/80 backdrop-blur-lg border border-[#F28B82]/30 p-8 rounded-xl hover:shadow-2xl hover:shadow-[#F28B82]/20 transition-all duration-500 group overflow-hidden">
                  {/* Background image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url('/photo-1714060335405-81b17c8c0a22.avif')" }}
                  />
                  <div className="absolute inset-0 bg-[#F6D0CB]/85" />
                  
                  <service.icon className="w-16 h-16 text-transparent bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900 bg-clip-text mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10" />
                  <h3 className="text-2xl font-bold text-slate-800 mb-4 relative z-10">{service.title}</h3>
                  <p className="text-slate-700 leading-relaxed mb-6 relative z-10">{service.description}</p>
                  <ul className="space-y-2 relative z-10">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-slate-600">
                        <ChevronRight className="w-4 h-4 text-[#F28B82] mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
          </div>
        </Container>
      </Section>

      {/* Portfolio Showcase */}
      <Section className="relative bg-slate-50">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/2.jpg')" }}
        />
        <div className="absolute inset-0 bg-white/80" />
        
        <Container>
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="mafia-heading text-5xl lg:text-6xl text-slate-800 mb-6">
                Nos <span className="text-transparent bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900 bg-clip-text">Réalisations</span>
              </h2>
              <p className="text-xl text-slate-700 max-w-3xl mx-auto">
                Découvrez quelques-unes de nos créations les plus remarquables, témoins de notre savoir-faire exceptionnel
              </p>
            </div>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {[
              { image: '/3.jpg', title: 'Salon Moderne Premium', category: 'Salon' },
              { image: '/4.jpg', title: 'Cuisine Contemporaine', category: 'Cuisine' },
              { image: '/5.jpg', title: 'Chambre Design', category: 'Chambre' },
              { image: '/6.jpg', title: 'Bureau Exécutif', category: 'Bureau' },
              { image: '/7.jpg', title: 'Salle à Manger Élégante', category: 'Salle à Manger' },
              { image: '/8.jpg', title: 'Dressing Sur Mesure', category: 'Dressing' }
            ].map((item, idx) => (
              <Reveal key={item.title} delay={idx * 100}>
                <div className="group relative overflow-hidden rounded-xl luxury-card">
                  <div 
                    className="aspect-[4/3] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${item.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <span className="inline-block px-3 py-1 bg-[#F28B82]/90 text-white text-xs font-semibold rounded-full mb-2">
                      {item.category}
                    </span>
                    <h3 className="text-white text-xl font-bold">{item.title}</h3>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Stats Section */}
      <Section className="bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <Reveal key={stat.label} delay={idx * 150}>
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                    {stat.number}{stat.suffix}
                  </div>
                  <div className="text-white/90 font-medium tracking-wide">
                    {stat.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Services Overview */}
      <Section className="relative bg-white">
        {/* Background image - fully visible */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/photo-1558969213-ff7823387b5c.avif')" }}
        />
        
        <Container>
          <div className="relative z-10">
            <Reveal>
              <div className="text-center mb-16">
                <h2 className="mafia-heading text-5xl lg:text-6xl text-white mb-6 drop-shadow-lg">
                  Notre <span className="text-transparent bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900 bg-clip-text">Expertise</span>
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto drop-shadow-md">
                Des solutions complètes pour tous vos projets d&apos;ameublement et de décoration intérieure
              </p>
            </div>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <Reveal key={service.title} delay={idx * 100}>
                <div className="luxury-card relative bg-[#F6D0CB]/80 backdrop-blur-lg border border-[#F28B82]/30 p-8 rounded-xl hover:shadow-xl hover:shadow-[#F28B82]/10 transition-all duration-500 group overflow-hidden">
                  {/* Background image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url('/photo-1714060335405-81b17c8c0a22.avif')" }}
                  />
                  <div className="absolute inset-0 bg-[#F6D0CB]/85" />
                  
                  <service.icon className="w-12 h-12 text-transparent bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900 bg-clip-text mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10" />
                  <h3 className="text-xl font-bold text-slate-800 mb-4 relative z-10">{service.title}</h3>
                  <p className="text-slate-700 leading-relaxed relative z-10">{service.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
          </div>
        </Container>
      </Section>

      {/* Advantages */}
      <Section className="relative bg-slate-100">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/9.jpg')" }}
        />
        <div className="absolute inset-0 bg-white/85" />
        
        <Container>
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="mafia-heading text-5xl lg:text-6xl text-slate-800 mb-6">
                Nos <span className="text-transparent bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900 bg-clip-text">Atouts</span>
              </h2>
              <p className="text-xl text-slate-700 max-w-3xl mx-auto">
                Ce qui nous distingue dans l&apos;univers de la fabrication de meubles haut de gamme
              </p>
            </div>
          </Reveal>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <Reveal delay={200}>
              <div className="space-y-8">
                {advantages.map((advantage) => (
                  <div key={advantage.title} className="flex gap-6 group">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#F28B82]/20 to-[#F9AFA7]/30 border border-[#F28B82]/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <advantage.icon className="w-8 h-8 text-transparent bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900 bg-clip-text" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-800 mb-3">{advantage.title}</h3>
                      <p className="text-slate-700 leading-relaxed">{advantage.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
            
            <Reveal delay={400}>
              <div className="relative">
                <div 
                  className="aspect-[4/3] bg-cover bg-center rounded-2xl shadow-2xl"
                  style={{ backgroundImage: "url('/10.jpg')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent rounded-2xl" />
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Process Steps */}
      <Section className="bg-white">
        <Container>
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="mafia-heading text-5xl lg:text-6xl text-slate-800 mb-6">
                Notre <span className="text-transparent bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900 bg-clip-text">Processus</span>
              </h2>
              <p className="text-xl text-slate-700 max-w-3xl mx-auto">
                De l&apos;idée à la réalisation, découvrez les étapes de création de vos meubles sur mesure
              </p>
            </div>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                step: '01', 
                title: 'Consultation', 
                description: 'Analyse de vos besoins et de votre espace',
                icon: Users
              },
              { 
                step: '02', 
                title: 'Conception', 
                description: 'Création des plans et modélisation 3D',
                icon: PenTool
              },
              { 
                step: '03', 
                title: 'Fabrication', 
                description: 'Réalisation artisanale avec des matériaux nobles',
                icon: Hammer
              },
              { 
                step: '04', 
                title: 'Installation', 
                description: 'Pose professionnelle et finitions parfaites',
                icon: HomeIcon
              }
            ].map((item, idx) => (
              <Reveal key={item.step} delay={idx * 200}>
                <div className="text-center group">
                  <div className="relative mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#F28B82]/20 to-[#F9AFA7]/30 border border-[#F28B82]/30 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-10 h-10 text-transparent bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900 bg-clip-text" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#F28B82] text-white text-sm font-bold rounded-full flex items-center justify-center">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">{item.title}</h3>
                  <p className="text-slate-700 leading-relaxed">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Call to Action */}
      <Section className="relative bg-[#F6D0CB]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/11.jpg')" }}
        />
        <div className="absolute inset-0 bg-[#F6D0CB]/85" />
        
        <Container>
          <Reveal>
            <div className="text-center relative z-10">
              <h2 className="mafia-heading text-5xl lg:text-6xl text-slate-800 mb-6">
                Prêt à Transformer Votre <span className="text-transparent bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900 bg-clip-text">Espace</span> ?
              </h2>
              <p className="text-xl text-slate-700 max-w-3xl mx-auto mb-12">
                Contactez-nous dès aujourd&apos;hui pour une consultation gratuite et découvrez comment nous pouvons donner vie à vos projets
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button size="lg" variant="outline" asChild className="luxury-card bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 border-slate-800/30 text-white hover:bg-red-900/10 hover:border-red-900/60 transition-all duration-300">
                  <Link href="/contact" className="text-lg px-10 py-5 font-medium tracking-wide">
                    <Phone className="mr-3 h-5 w-5" />
                    NOUS CONTACTER
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="luxury-card bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 border-slate-800/40 text-white hover:bg-red-900/10 hover:border-red-900/60 transition-all duration-300">
                  <a href={siteConfig.whatsappLink} target="_blank" rel="noreferrer noopener" className="text-lg px-10 py-5 font-medium tracking-wide">
                    <MessageSquare className="mr-3 h-5 w-5" />
                    WHATSAPP
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild className="luxury-card bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 border-slate-800/40 text-white hover:bg-red-900/10 hover:border-red-900/60 transition-all duration-300">
                  <Link href="/services" className="text-lg px-10 py-5 font-medium tracking-wide">
                    NOS SERVICES
                  </Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Testimonials */}
      <Section className="relative bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/8.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/70" />
        
        <Container>
          <Reveal>
            <div className="text-center mb-16 relative z-10">
              <h2 className="mafia-heading text-5xl lg:text-6xl text-white mb-6">
                Témoignages de <span className="teal-accent">Clients</span>
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                La satisfaction de nos clients, notre plus belle récompense
              </p>
            </div>
          </Reveal>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
            {testimonials.map((testimonial, idx) => (
              <Reveal key={testimonial.author} delay={idx * 200}>
                <div className="luxury-card relative bg-[#F6D0CB]/80 backdrop-blur-lg border border-[#F28B82]/30 p-8 rounded-xl group hover:scale-105 transition-all duration-500 overflow-hidden">
                  {/* Background image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url('/photo-1714060335405-81b17c8c0a22.avif')" }}
                  />
                  <div className="absolute inset-0 bg-[#F6D0CB]/85" />
                  
                  <Quote className="w-12 h-12 text-transparent bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900 bg-clip-text mb-6 opacity-70 relative z-10" />
                  <blockquote className="text-slate-800 leading-relaxed mb-6 italic relative z-10">
                    &quot;{testimonial.text}&quot;
                  </blockquote>
                  <div className="border-t border-[#F28B82]/20 pt-6 relative z-10">
                    <div className="font-semibold text-slate-800">{testimonial.author}</div>
                    <div className="text-transparent bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900 bg-clip-text text-sm">{testimonial.role}</div>
                    <div className="text-slate-600 text-xs">{testimonial.company}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

    </>
  );
}
