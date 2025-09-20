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
      <Section className="relative overflow-hidden pt-32 pb-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{ backgroundImage: "url('/pexels-heyho-6970074.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <Container>
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <Reveal>
              <div className="mb-8">
                <span className="inline-block px-6 py-3 bg-white/95 backdrop-blur-sm text-[#2d2d2d] border border-[#d4c4b0] text-sm font-semibold tracking-widest uppercase rounded-full">
                  Votre Demande, Notre Priorité
                </span>
              </div>
            </Reveal>
            
            <Reveal delay={200}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl text-white leading-tight mb-8 font-bold">
                Nous Contacter
              </h1>
            </Reveal>
            
            <Reveal delay={400}>
              <p className="text-xl sm:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed font-light">
                Partagez votre projet de décoration avec nous.
                <span className="font-medium block mt-2"> Notre équipe vous répond dans l&apos;heure.</span>
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Contact Methods */}
      <Section className="bg-white py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, idx) => (
              <Reveal key={method.title} delay={idx * 150}>
                <a 
                  href={method.href}
                  target={method.title === "INSTAGRAM" ? "_blank" : undefined}
                  rel={method.title === "INSTAGRAM" ? "noreferrer noopener" : undefined}
                  className={`bg-[#f5f3f0] p-8 rounded-xl group hover:shadow-lg transition-all duration-500 block ${method.primary ? 'border-2 border-[#8b7355]' : ''}`}
                >
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-6 bg-white rounded-full flex items-center justify-center group-hover:bg-[#8b7355]/10 transition-colors duration-300">
                      <method.icon className="w-8 h-8 text-[#8b7355]" />
                    </div>
                    <h3 className="text-xl text-[#2d2d2d] mb-2 group-hover:text-[#8b7355] transition-colors duration-300 font-bold">
                      {method.title}
                    </h3>
                    <p className="text-[#8b7355] text-sm font-medium mb-2">
                      {method.subtitle}
                    </p>
                    <p className="text-[#6b6b6b] text-sm">
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
      <Section className="bg-[#faf9f7] py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <Reveal>
                <div className="mb-8">
                  <h2 className="text-4xl lg:text-5xl text-[#2d2d2d] mb-4 font-bold">
                    Formulaire de 
                    <span className="block text-[#8b7355]">Contact</span>
                  </h2>
                  <p className="text-lg leading-relaxed text-[#6b6b6b]">
                    Complétez ce formulaire pour votre projet de décoration sur mesure. 
                    Chaque détail compte pour créer votre espace idéal.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={200}>
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  {isSent ? (
                    <div className="text-center py-12">
                      <div className="w-20 h-20 mx-auto mb-6 bg-[#f5f3f0] rounded-full flex items-center justify-center">
                        <CheckCircle className="w-10 h-10 text-[#8b7355]" />
                      </div>
                      <h3 className="text-2xl text-[#2d2d2d] mb-4 font-bold">Demande Reçue</h3>
                      <p className="text-[#6b6b6b] mb-6">
                        Merci pour votre confiance. Notre équipe vous recontacte dans l&apos;heure 
                        pour discuter de votre projet.
                      </p>
                      <Button 
                        variant="primary" 
                        size="lg" 
                        asChild 
                        className="bg-[#2d2d2d] hover:bg-[#8b7355]"
                      >
                        <Link href="/">RETOUR À L&apos;ACCUEIL</Link>
                      </Button>
                    </div>
                  ) : (
                    <form className="space-y-6" onSubmit={handleSubmit(handleSubmitContact)}>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-[#2d2d2d] font-medium mb-2 tracking-wide">
                            NOM COMPLET *
                          </label>
                          <Input 
                            className="border-[#d4c4b0] text-[#2d2d2d] placeholder-[#6b6b6b] focus:border-[#8b7355]" 
                            placeholder="Votre nom et prénom"
                            {...register("name")} 
                          />
                          {errors.name && (
                            <p className="text-red-500 text-xs mt-1">Nom requis</p>
                          )}
                        </div>
                        <div>
                          <label className="block text-[#2d2d2d] font-medium mb-2 tracking-wide">
                            EMAIL *
                          </label>
                          <Input 
                            className="border-[#d4c4b0] text-[#2d2d2d] placeholder-[#6b6b6b] focus:border-[#8b7355]" 
                            type="email" 
                            placeholder="votre@email.com"
                            {...register("email")} 
                          />
                          {errors.email && (
                            <p className="text-red-500 text-xs mt-1">Email valide requis</p>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-[#2d2d2d] font-medium mb-2 tracking-wide">
                            TÉLÉPHONE
                          </label>
                          <Input 
                            className="border-[#d4c4b0] text-[#2d2d2d] placeholder-[#6b6b6b] focus:border-[#8b7355]" 
                            placeholder="+213 XXX XX XX XX"
                            {...register("phone")} 
                          />
                        </div>
                        <div>
                          <label className="block text-[#2d2d2d] font-medium mb-2 tracking-wide">
                            TYPE DE PRODUIT
                          </label>
                          <Input 
                            className="border-[#d4c4b0] text-[#2d2d2d] placeholder-[#6b6b6b] focus:border-[#8b7355]" 
                            placeholder="Vases, Bougies, Sculptures..."
                            {...register("service")} 
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-[#2d2d2d] font-medium mb-2 tracking-wide">
                            BUDGET ESTIMATIF
                          </label>
                          <Input 
                            className="border-[#d4c4b0] text-[#2d2d2d] placeholder-[#6b6b6b] focus:border-[#8b7355]" 
                            placeholder="Ex: 50 000 - 200 000 DA"
                            {...register("budget")} 
                          />
                        </div>
                        <div>
                          <label className="block text-[#2d2d2d] font-medium mb-2 tracking-wide">
                            DÉLAI SOUHAITÉ
                          </label>
                          <Input 
                            className="border-[#d4c4b0] text-[#2d2d2d] placeholder-[#6b6b6b] focus:border-[#8b7355]" 
                            placeholder="1-2 semaines, 1 mois..."
                            {...register("timeline")} 
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[#2d2d2d] font-medium mb-2 tracking-wide">
                          LIEU D&apos;INSTALLATION
                        </label>
                        <Input 
                          className="border-[#d4c4b0] text-[#2d2d2d] placeholder-[#6b6b6b] focus:border-[#8b7355]" 
                          placeholder="Ville, commune..." 
                          {...register("location")} 
                        />
                      </div>

                      <div>
                        <label className="block text-[#2d2d2d] font-medium mb-2 tracking-wide">
                          DESCRIPTION DU PROJET
                        </label>
                        <Textarea 
                          className="border-[#d4c4b0] text-[#2d2d2d] placeholder-[#6b6b6b] focus:border-[#8b7355] min-h-[120px]" 
                          rows={4} 
                          placeholder="Décrivez votre projet : style, couleurs préférées, espace à décorer, ambiance souhaitée..."
                          {...register("message")} 
                        />
                      </div>

                      <Button 
                        type="submit" 
                        disabled={isSubmitting} 
                        variant="primary"
                        size="lg"
                        className="w-full bg-[#2d2d2d] hover:bg-[#8b7355] text-lg py-5"
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
                <div className="bg-white rounded-2xl p-8 shadow-lg sticky top-8">
                  <h3 className="text-2xl text-[#2d2d2d] mb-6 font-bold">
                    Informations 
                    <span className="block text-[#8b7355]">Pratiques</span>
                  </h3>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#f5f3f0] rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-[#8b7355]" />
                      </div>
                      <div>
                        <h4 className="text-[#2d2d2d] font-semibold mb-1">Disponibilité</h4>
                        <p className="text-[#6b6b6b] text-sm">Lundi au Vendredi, 10h à 20h</p>
                        <p className="text-[#8b7355] text-xs">Service personnalisé</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#f5f3f0] rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-[#8b7355]" />
                      </div>
                      <div>
                        <h4 className="text-[#2d2d2d] font-semibold mb-1">Zone de Service</h4>
                        <p className="text-[#6b6b6b] text-sm">Setif et environs</p>
                        <p className="text-[#8b7355] text-xs">Livraison possible</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#f5f3f0] rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-[#8b7355]" />
                      </div>
                      <div>
                        <h4 className="text-[#2d2d2d] font-semibold mb-1">Temps de Réponse</h4>
                        <p className="text-[#6b6b6b] text-sm">Moins d&apos;1 heure</p>
                        <p className="text-[#8b7355] text-xs">Confirmation garantie</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-[#d4c4b0]">
                    <div className="bg-[#f5f3f0] rounded-xl overflow-hidden aspect-square relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <Crown className="w-12 h-12 text-[#8b7355] mx-auto mb-4" />
                          <h4 className="text-[#2d2d2d] font-semibold mb-2">QR Code</h4>
                          <p className="text-[#6b6b6b] text-xs">Accès direct au site</p>
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


