import type { ReactElement } from "react";
import { Flame, Globe2, Users, Sparkles, Compass, ShieldCheck } from "lucide-react";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import OptimizedImage from "@/components/OptimizedImage";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "La marque - OUSS AURA Boutique",
  description:
    "Decouvrez l histoire d OUSS AURA Boutique: une equipe basee a Alger qui repousse les codes du streetwear algerien avec des casquettes premium.",
};

const stats = [
  { label: "Drops lances", value: "08" },
  { label: "Clients community", value: "5K+" },
  { label: "Points de controle qualite", value: "03" },
  { label: "Wilayas livre", value: "58" },
];

const beliefs = [
  {
    title: "Identite algerienne",
    description: "Chaque collection raconte une histoire locale: clubs, quartiers, artistes et energies des rues.",
    icon: Globe2,
  },
  {
    title: "Innovation textile",
    description: "Tissus techniques, broderies 3D et packaging recycle pour une casquette qui dure.",
    icon: Sparkles,
  },
  {
    title: "Community first",
    description: "Drops limites, precommandes prioritaire, events pop-up et support WhatsApp 7 j/7.",
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
                OUSS AURA Boutique
              </h1>
              <p className="text-sm leading-relaxed text-white/70 sm:text-base">
                Née dans les rues d Alger, OUSS AURA donne une voix aux creatives qui veulent afficher leur style. Nous
                dessinons et produisons des casquettes premium en series limitees, controlees et livre dans les 58
                wilayas.
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
                  De la casquette au mouvement
                </h2>
                <p className="text-sm leading-relaxed text-white/70 sm:text-base">
                  Nous avons commence sur les marches d Alger avec un objectif simple: creer des caps qui representent la
                  culture locale avec la meme exigence que les grandes marques internationales. Aujourd hui, OUSS AURA
                  travaille avec des artisans brodeurs et logisticiens locaux pour offrir une experience premium.
                </p>
                <p className="text-sm leading-relaxed text-white/70 sm:text-base">
                  Nos drops sont inspires par les clubs de foot, les equipements vintage, la musique urbaine et les
                  voyageuses qui portent fierement leurs racines. Nous restons independants pour garder la main sur notre
                  vision et ecouter la community.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="rounded-3xl border border-white/10 bg-white/5 px-6 py-4 text-xs uppercase tracking-[0.3em] text-white/60">
                    Drops numerotes
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-white/5 px-6 py-4 text-xs uppercase tracking-[0.3em] text-white/60">
                    Atelier broderie Alger
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
                  src="/products/b3.jpg"
                  alt="Atelier OUSS AURA"
                  width={900}
                  height={320}
                  className="h-80 w-full rounded-[28px] border border-white/10 object-cover"
                  quality={85}
                />
                <div className="mt-6 space-y-3 rounded-3xl border border-white/10 bg-black/60 p-6 text-sm text-white/70">
                  <div className="flex items-center gap-3 text-white">
                    <ShieldCheck className="h-5 w-5 text-white/60" aria-hidden />
                    Controle qualite triple
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <Compass className="h-5 w-5 text-white/60" aria-hidden />
                    Design et R&D a Alger
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <Flame className="h-5 w-5 text-white/60" aria-hidden />
                    Editions limitees numerotees
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
                <span className="text-xs uppercase tracking-[0.35em] text-white/50">Quartier general</span>
                <h2 className="text-3xl font-semibold uppercase tracking-[0.25em] sm:text-4xl">
                  Studio et showroom Alger
                </h2>
                <p className="text-sm leading-relaxed text-white/70 sm:text-base">
                  Notre studio est base a Alger, proche du port pour faciliter les expeditions. Nous y organisons des
                  sessions d essayage, des shootings et des rencontres avec la community. Prenez rendez-vous pour decouvrir
                  les drops avant leur sortie.
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
                  title="Localisation OUSS AURA Boutique"
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
