"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Suspense, useState, type ReactElement } from "react";
import { siteConfig } from "@/config/site";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";
import Reveal from "@/components/Reveal";
import { Phone, MessageSquare, Instagram, Crown, Mail, MapPin, Clock, CheckCircle, Send } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  service: z.string().optional(),
  projectType: z.string().optional(),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  message: z.string().optional(),
  location: z.string().optional(),
});

type ContactForm = z.infer<typeof contactSchema>;

const contactMethods = [
  {
    icon: Phone,
    title: "TÉLÉPHONE",
    subtitle: "Disponible 24/7",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone}`,
    primary: true
  },
  {
    icon: MessageSquare,
    title: "WHATSAPP",
    subtitle: "Réponse immédiate",
    value: "Nous contacter",
    href: siteConfig.whatsappLink,
    primary: false
  },
  {
    icon: Instagram,
    title: "INSTAGRAM",
    subtitle: "Suivez nos actualités",
    value: "@triomphe_homedesign",
    href: siteConfig.instagramLink,
    primary: false
  }
];

export default function ContactPage(): ReactElement {
  return (
    <Suspense fallback={
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="luxury-card inline-block px-8 py-4 rounded-lg">
          <span className="text-accent-gold font-medium">Chargement...</span>
        </div>
      </div>
    }>
      <ContactInner />
    </Suspense>
  );
}

function ContactInner(): ReactElement {
  const search = useSearchParams();
  const defaultService = search.get("service") ?? undefined;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: { service: defaultService },
  });

  const [isSent, setIsSent] = useState(false);

  async function handleSubmitContact(values: ContactForm): Promise<void> {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    if (res.ok) setIsSent(true);
  }

  return (
    <>
      {/* Hero Section */}
      <Section className="relative overflow-hidden pt-32 pb-20 film-grain">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{ backgroundImage: "url('/premium_photo-1710010209274-2c2266291da2.avif')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/40" />
        
        <Container>
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <Reveal>
              <div className="mb-8">
                <span className="inline-block px-6 py-3 luxury-card mafia-glow text-white bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900 border border-rose-900/40 text-sm font-semibold tracking-widest uppercase">
                  Votre Demande, Notre Priorité
                </span>
              </div>
            </Reveal>
            
            <Reveal delay={200}>
              <h1 className="mafia-heading text-6xl sm:text-7xl lg:text-8xl text-white leading-[0.9] mb-8">
                <span className="block">NOUS</span>
                <span className="block golden-accent">CONTACTER</span>
              </h1>
            </Reveal>
            
            <Reveal delay={400}>
              <p className="text-2xl sm:text-3xl text-white/90 max-w-4xl mx-auto leading-relaxed font-light">
                Partagez votre projet de meubles sur mesure avec nous.
                <span className="golden-accent font-medium block mt-2"> Notre équipe vous répond dans l&apos;heure.</span>
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Contact Methods */}
      <Section className="relative">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
             style={{ backgroundImage: "url('/photo-1665836372090-29f9515f1a60.avif')" }} />
        <div className="absolute inset-0 bg-white/85" />
        
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, idx) => (
              <Reveal key={method.title} delay={idx * 150}>
                <a 
                  href={method.href}
                  target={method.title === "INSTAGRAM" ? "_blank" : undefined}
                  rel={method.title === "INSTAGRAM" ? "noreferrer noopener" : undefined}
                  className={`luxury-card p-8 rounded-xl group hover:scale-105 transition-all duration-500 block ${method.primary ? 'mafia-glow' : ''}`}
                >
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-6 luxury-card rounded-full flex items-center justify-center group-hover:bg-rose-500/20 transition-colors duration-300">
                      <method.icon className="w-8 h-8 text-rose-400" />
                    </div>
                    <h3 className="mafia-heading text-xl text-white mb-2 group-hover:text-rose-400 transition-colors duration-300">
                      {method.title}
                    </h3>
                    <p className="text-rose-400 text-sm font-medium mb-2">
                      {method.subtitle}
                    </p>
                    <p className="text-white/80 text-sm">
                      {method.value}
                    </p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Contact Form */}
      <Section className="relative bg-gray-50">
        <div className="absolute inset-0 bg-gray-50" />
        
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <Reveal>
                <div className="mb-8">
                  <h2 className="mafia-heading text-4xl lg:text-5xl text-white mb-4">
                    Formulaire de 
                    <span className="golden-accent block">Contact</span>
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-accent-gold to-accent-gold-bright rounded-full mb-6" />
                  <p className="text-lg text-white/85 leading-relaxed">
                    Complétez ce formulaire pour votre projet de meubles sur mesure. 
                    Chaque détail compte pour créer votre mobilier idéal.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={200}>
                <div className="luxury-card rounded-2xl p-8">
                  {isSent ? (
                    <div className="text-center py-12">
                      <div className="w-20 h-20 mx-auto mb-6 luxury-card rounded-full flex items-center justify-center">
                        <CheckCircle className="w-10 h-10 text-rose-400" />
                      </div>
                      <h3 className="mafia-heading text-2xl text-white mb-4">Demande Reçue</h3>
                      <p className="text-white/80 mb-6">
                        Merci pour votre confiance. Notre équipe vous recontacte dans l&apos;heure 
                        pour discuter de votre projet.
                      </p>
                      <Button 
                        variant="primary" 
                        size="lg" 
                        asChild 
                        className="premium-shadow"
                      >
                        <Link href="/">RETOUR À L&apos;ACCUEIL</Link>
                      </Button>
                    </div>
                  ) : (
                    <form className="space-y-6" onSubmit={handleSubmit(handleSubmitContact)}>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-white font-medium mb-2 tracking-wide">
                            NOM COMPLET *
                          </label>
                          <Input 
                            className="luxury-card border-rose-900/40 text-white placeholder-white/60 focus:border-rose-500" 
                            placeholder="Votre nom et prénom"
                            {...register("name")} 
                          />
                          {errors.name && (
                            <p className="text-red-400 text-xs mt-1">Nom requis</p>
                          )}
                        </div>
                        <div>
                          <label className="block text-white font-medium mb-2 tracking-wide">
                            EMAIL *
                          </label>
                          <Input 
                            className="luxury-card border-rose-900/40 text-white placeholder-white/60 focus:border-rose-500" 
                            type="email" 
                            placeholder="votre@email.com"
                            {...register("email")} 
                          />
                          {errors.email && (
                            <p className="text-red-400 text-xs mt-1">Email valide requis</p>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-white font-medium mb-2 tracking-wide">
                            TÉLÉPHONE
                          </label>
                          <Input 
                            className="luxury-card border-rose-900/40 text-white placeholder-white/60 focus:border-rose-500" 
                            placeholder="+213 XXX XX XX XX"
                            {...register("phone")} 
                          />
                        </div>
                        <div>
                          <label className="block text-white font-medium mb-2 tracking-wide">
                            TYPE DE MEUBLE
                          </label>
                          <Input 
                            className="luxury-card border-rose-900/40 text-white placeholder-white/60 focus:border-rose-500" 
                            placeholder="Cuisine, Dressing, Salon..."
                            {...register("service")} 
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-white font-medium mb-2 tracking-wide">
                            BUDGET ESTIMATIF
                          </label>
                          <Input 
                            className="luxury-card border-rose-900/40 text-white placeholder-white/60 focus:border-rose-500" 
                            placeholder="Ex: 200 000 - 500 000 DA"
                            {...register("budget")} 
                          />
                        </div>
                        <div>
                          <label className="block text-white font-medium mb-2 tracking-wide">
                            DÉLAI SOUHAITÉ
                          </label>
                          <Input 
                            className="luxury-card border-rose-900/40 text-white placeholder-white/60 focus:border-rose-500" 
                            placeholder="2-3 semaines, 1-2 mois..."
                            {...register("timeline")} 
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-white font-medium mb-2 tracking-wide">
                          LIEU D&apos;INSTALLATION
                        </label>
                        <Input 
                          className="luxury-card border-rose-900/40 text-white placeholder-white/60 focus:border-rose-500" 
                          placeholder="Ville, commune..." 
                          {...register("location")} 
                        />
                      </div>

                      <div>
                        <label className="block text-white font-medium mb-2 tracking-wide">
                          DESCRIPTION DU PROJET
                        </label>
                        <Textarea 
                          className="luxury-card border-rose-900/40 text-white placeholder-white/60 focus:border-rose-500 min-h-[120px]" 
                          rows={4} 
                          placeholder="Décrivez votre projet : dimensions, style, matériaux préférés, fonctionnalités spéciales..."
                          {...register("message")} 
                        />
                      </div>

                      <Button 
                        type="submit" 
                        disabled={isSubmitting} 
                        variant="primary"
                        size="lg"
                        className="w-full mafia-glow premium-shadow text-lg py-5"
                      >
                        <Send className="w-5 h-5 mr-3" />
                        {isSubmitting ? "ENVOI EN COURS..." : "ENVOYER LA DEMANDE"}
                      </Button>
                    </form>
                  )}
                </div>
              </Reveal>
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1">
              <Reveal delay={300}>
                <div className="luxury-card rounded-2xl p-8 sticky top-8">
                  <h3 className="mafia-heading text-2xl text-white mb-6">
                    Informations 
                    <span className="golden-accent block">Pratiques</span>
                  </h3>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 luxury-card rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-accent-gold" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">Disponibilité</h4>
                        <p className="text-white/80 text-sm">24h/24 - 7j/7</p>
                        <p className="text-accent-gold text-xs">Service d&apos;urgence inclus</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 luxury-card rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-accent-gold" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">Zone de Service</h4>
                        <p className="text-white/80 text-sm">Côte d&apos;Azur & Italie du Nord</p>
                        <p className="text-accent-gold text-xs">Extensions possibles</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 luxury-card rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-accent-gold" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">Temps de Réponse</h4>
                        <p className="text-white/80 text-sm">Moins d&apos;1 heure</p>
                        <p className="text-accent-gold text-xs">Confirmation garantie</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-accent-gold/20">
                    <div className="luxury-card rounded-xl overflow-hidden aspect-square relative">
                      <div className="absolute inset-0 bg-gray-50" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <Crown className="w-12 h-12 text-accent-gold mx-auto mb-4" />
                          <h4 className="text-white font-semibold mb-2">QR Code</h4>
                          <p className="text-white/60 text-xs">Accès direct au site</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}


