import type { ReactElement } from "react";
import { Flame, Globe2, Users, Sparkles, Compass, ShieldCheck } from "lucide-react";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import OptimizedImage from "@/components/OptimizedImage";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "La marque - DNA WATCHES Magasin de bijoux et de montres",
  description:
    "Découvrez l'histoire de DNA WATCHES: un magasin basé à Alger spécialisé dans les montres originales, bijoux et accessoires premium.",
};

const stats = [
  { label: "Drops lances", value: "08" },
  { label: "Clients community", value: "5K+" },
  { label: "Points de controle qualite", value: "03" },
  { label: "Wilayas livre", value: "58" },
];

const beliefs = [
  {
    title: "Authenticité garantie",
    description: "Nous proposons uniquement des montres 100% originales avec certification et garantie officielle.",
    icon: Globe2,
  },
  {
    title: "Qualité premium",
    description: "Sélection rigoureuse parmi les meilleures marques: Naviforce, Festina, Rolex, TOMI et bien d'autres.",
    icon: Sparkles,
  },
  {
    title: "Service client",
    description: "Support WhatsApp 7 j/7, livraison 58 wilayas et paiement à la livraison disponible partout en Algérie.",
    icon: Users,
  },
];

export default function AboutPage(): ReactElement {
  return (
    <div className="bg-background text-white">
      <Section className="relative overflow-hidden pb-24 pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#00623322,transparent_65%)]" aria-hidden />
        <Container>
          <Reveal>
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
                La marque
                <span className="h-2 w-2 rounded-full bg-[#d21034]" />
              </div>
              <h1 className="text-4xl font-semibold uppercase tracking-[0.25em] sm:text-5xl">
                DNA WATCHES Magasin
              </h1>
              <p className="text-sm leading-relaxed text-white/70 sm:text-base">
                Magasin de bijoux et de montres basé à Alger, DNA WATCHES sélectionne avec soin des montres originales parmi
                les meilleures marques. Nous proposons des produits certifiés avec garantie, livrés dans les 58 wilayas avec
                paiement à la livraison.
              </p>
              <Button asChild size="lg">
                <a href="/collection">Decouvrir la collection</a>
              </Button>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section className="bg-background-secondary">
        <Container>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 120}>
                <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 text-center">
                  <div className="text-xs uppercase tracking-[0.3em] text-white/40">{stat.label}</div>
                  <div className="mt-4 text-3xl font-semibold uppercase tracking-[0.25em] text-white">
                    {stat.value}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-background">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <Reveal>
              <div className="space-y-6">
                <span className="text-xs uppercase tracking-[0.35em] text-white/50">Notre histoire</span>
                <h2 className="text-3xl font-semibold uppercase tracking-[0.25em] sm:text-4xl">
                  Excellence en horlogerie
                </h2>
                <p className="text-sm leading-relaxed text-white/70 sm:text-base">
                  DNA WATCHES est né de la passion pour les montres et bijoux de qualité. Notre objectif est simple: proposer
                  des montres 100% originales avec garantie, en sélectionnant parmi les meilleures marques internationales.
                  Aujourd'hui, nous travaillons avec des partenaires certifiés pour offrir une expérience premium à nos
                  clients.
                </p>
                <p className="text-sm leading-relaxed text-white/70 sm:text-base">
                  Nous proposons une sélection rigoureuse de montres Naviforce, Festina, Rolex, TOMI et bien d'autres marques.
                  Chaque montre est vérifiée, certifiée authentique et livrée avec sa garantie. Notre engagement: qualité,
                  authenticité et satisfaction client.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="rounded-3xl border border-white/10 bg-white/5 px-6 py-4 text-xs uppercase tracking-[0.3em] text-white/60">
                    Produits originaux
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-white/5 px-6 py-4 text-xs uppercase tracking-[0.3em] text-white/60">
                    Garantie certifiée
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-white/5 px-6 py-4 text-xs uppercase tracking-[0.3em] text-white/60">
                    Support WhatsApp 7 j/7
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 p-6">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,#d2103422,transparent_65%)]" aria-hidden />
                <OptimizedImage
                  src="/watches/1.jpg"
                  alt="Collection DNA WATCHES"
                  width={900}
                  height={320}
                  className="h-80 w-full rounded-[28px] border border-white/10 object-cover"
                  quality={85}
                />
                <div className="mt-6 space-y-3 rounded-3xl border border-white/10 bg-black/60 p-6 text-sm text-white/70">
                  <div className="flex items-center gap-3 text-white">
                    <ShieldCheck className="h-5 w-5 text-white/60" aria-hidden />
                    Contrôle qualité et certification
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <Compass className="h-5 w-5 text-white/60" aria-hidden />
                    Sélection rigoureuse à Alger
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <Flame className="h-5 w-5 text-white/60" aria-hidden />
                    Montres originales garanties
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section className="bg-background-secondary">
        <Container>
          <Reveal>
            <div className="mb-12 space-y-4">
              <span className="text-xs uppercase tracking-[0.35em] text-white/50">Manifesto</span>
              <h2 className="text-3xl font-semibold uppercase tracking-[0.25em] sm:text-4xl">
                Nos valeurs fondamentales
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-8 md:grid-cols-3">
            {beliefs.map((belief, index) => (
              <Reveal key={belief.title} delay={index * 120}>
                <div className="rounded-[32px] border border-white/10 bg-white/5 p-6">
                  <belief.icon className="mb-4 h-6 w-6 text-white/60" aria-hidden />
                  <h3 className="text-lg font-semibold uppercase tracking-[0.2em] text-white">{belief.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/60">{belief.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-background">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <Reveal>
              <div className="space-y-6">
                <span className="text-xs uppercase tracking-[0.35em] text-white/50">Boutique</span>
                <h2 className="text-3xl font-semibold uppercase tracking-[0.25em] sm:text-4xl">
                  Magasin DNA WATCHES Alger
                </h2>
                <p className="text-sm leading-relaxed text-white/70 sm:text-base">
                  Notre magasin est basé à Alger pour faciliter les expéditions. Nous proposons des montres originales avec
                  garantie. Contactez-nous par WhatsApp ou email pour découvrir nos collections et prendre rendez-vous pour
                  voir les montres en personne.
                </p>
                <ul className="space-y-3 text-sm text-white/70">
                  <li>- Adresse: {siteConfig.address}</li>
                  <li>- Support: {siteConfig.email}</li>
                  <li>- WhatsApp: {siteConfig.phone}</li>
                </ul>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button asChild size="lg">
                    <a href={siteConfig.whatsappLink} target="_blank" rel="noreferrer noopener">
                      Planifier une visite
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a href={siteConfig.instagramLink} target="_blank" rel="noreferrer noopener">
                      Suivre la team
                    </a>
                  </Button>
                </div>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 p-6">
                <iframe
                  src={siteConfig.googleMapsLink}
                  title="Localisation DNA WATCHES Magasin"
                  className="h-80 w-full rounded-[28px] border border-white/10"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>
    </div>
  );
}
