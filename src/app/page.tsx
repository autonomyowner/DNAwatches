import type { ReactElement } from "react";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck, Package, Sparkles, Instagram } from "lucide-react";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Hero from "@/components/Hero";
import Button from "@/components/ui/Button";
import Reveal from "@/components/Reveal";
import OptimizedImage from "@/components/OptimizedImage";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { siteConfig } from "@/config/site";

const featuredProducts = products.slice(0, 4);

const brandPillars = [
  {
    title: "Design algerien",
    description: "Nous dessinons et brodons nos caps a Alger en series limitees, inspirees par la culture street locale.",
    icon: Sparkles,
  },
  {
    title: "Qualite premium",
    description: "Tissus techniques, inspections 3 points et packaging recycle. Chaque piece est controlee avant expedition.",
    icon: ShieldCheck,
  },
  {
    title: "Livraison 58 wilayas",
    description: "Expedition express via partenaires fiables, paiement a la livraison disponible partout en Algerie.",
    icon: Package,
  },
];

const drops = [
  {
    title: "Drop 07 — Northside",
    description: "Broderie 3D, snapback premium, double texture suede et mesh.",
    status: "Disponible maintenant",
    image: "/products/b1.jpg",
  },
  {
    title: "Drop 08 — Midnight Bloom",
    description: "Velours noir, broderie or 24k, disponible en precommande numerotee.",
    status: "Precommande ouverte",
    image: "/products/11.jpg",
  },
  {
    title: "Drop 09 — Skyline 58",
    description: "Edition hommage aux 58 wilayas avec patch laser et tissu impermeable.",
    status: "Arrive bientot",
    image: "/products/c1.jpg",
  },
];

const communityShots = [
  "/products/b2.jpg",
  "/products/c2.jpg",
  "/products/111.jpg",
];

export default function Home(): ReactElement {
  return (
    <>
      <Hero />

      <Section className="bg-background">
        <Container>
          <Reveal>
            <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <span className="text-xs uppercase tracking-[0.35em] text-white/50">Top drops</span>
                <h2 className="mt-3 text-3xl font-semibold uppercase tracking-[0.25em] text-white sm:text-4xl">
                  Selection OUSS AURA
                </h2>
              </div>
              <Button asChild variant="ghost" size="sm">
                <Link href="/collection" className="flex items-center gap-2">
                  Voir toute la collection
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2">
            {featuredProducts.map((product, index) => (
              <Reveal key={product.id} delay={index * 100}>
                <ProductCard product={product} highlight={index === 0} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-background-secondary">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <Reveal>
              <div className="space-y-6">
                <span className="text-xs uppercase tracking-[0.35em] text-white/50">Manifesto</span>
                <h2 className="text-3xl font-semibold uppercase tracking-[0.25em] text-white sm:text-4xl">
                  ADN OUSS AURA
                </h2>
                <p className="max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
                  Boutique streetwear specialisee dans les casquettes premium. Chaque drop est concu dans notre studio a
                  Alger avec une attention obsessionnelle au detail: tissus technique, broderie 3D, doublures signature.
                  Nous voulons mettre en avant le style algerien sur la scene urbaine internationale.
                </p>
                <ul className="space-y-4 text-sm text-white/70">
                  <li className="flex items-center gap-3">
                    <span className="inline-flex h-2 w-2 rounded-full bg-[#006233]" aria-hidden />
                    Packaging recycle et cartes de collection numerotees.
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="inline-flex h-2 w-2 rounded-full bg-[#d21034]" aria-hidden />
                    Editions limitees inspirees des quartiers, de la musique et du sport algeriens.
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="inline-flex h-2 w-2 rounded-full bg-[#c9a961]" aria-hidden />
                    Service client reactif et suivi de commande en temps reel.
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 p-6">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#00623333,transparent_60%)]" aria-hidden />
                <div className="space-y-6">
                  {brandPillars.map((pillar) => (
                    <div
                      key={pillar.title}
                      className="rounded-3xl border border-white/10 bg-black/60 p-6 backdrop-blur transition-colors duration-200 hover:border-white/30"
                    >
                      <pillar.icon className="mb-4 h-6 w-6 text-white/60" aria-hidden />
                      <h3 className="text-lg font-semibold uppercase tracking-[0.2em] text-white">{pillar.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-white/60">{pillar.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section className="bg-background">
        <Container>
          <Reveal>
            <div className="mb-12 space-y-4">
              <span className="text-xs uppercase tracking-[0.35em] text-white/50">Roadmap</span>
              <h2 className="text-3xl font-semibold uppercase tracking-[0.25em] text-white sm:text-4xl">
                Drops a venir
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-3">
            {drops.map((drop, index) => (
              <Reveal key={drop.title} delay={index * 120}>
                <div className="flex flex-col gap-6 rounded-[32px] border border-white/10 bg-white/5 p-6">
                  <OptimizedImage
                    src={drop.image}
                    alt={drop.title}
                    width={1200}
                    height={192}
                    className="h-48 w-full rounded-[24px] border border-white/10"
                    quality={85}
                  />
                  <div className="space-y-4">
                    <div className="text-xs uppercase tracking-[0.3em] text-[#c9a961]">{drop.status}</div>
                    <h3 className="text-xl font-semibold uppercase tracking-[0.2em] text-white">{drop.title}</h3>
                    <p className="text-sm leading-relaxed text-white/60">{drop.description}</p>
                  </div>
                  <Button asChild variant="ghost" size="sm">
                    <Link href="/collection" className="flex items-center gap-2">
                      Rejoindre la liste
                      <ArrowUpRight className="h-4 w-4" aria-hidden />
                    </Link>
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-background-secondary">
        <Container>
          <Reveal>
            <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <span className="text-xs uppercase tracking-[0.35em] text-white/50">Community</span>
                <h2 className="mt-3 text-3xl font-semibold uppercase tracking-[0.25em] text-white sm:text-4xl">
                  OUSS AURA Crew
                </h2>
              </div>
              <Button asChild variant="outline" size="sm">
                <Link href={siteConfig.instagramLink} target="_blank" rel="noreferrer noopener" className="flex items-center gap-2">
                  Suivre sur Instagram
                  <Instagram className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {communityShots.map((image, index) => (
              <Reveal key={image} delay={index * 120}>
                <div className="relative overflow-hidden rounded-[32px] border border-white/10">
                  <OptimizedImage src={image} alt="Community OUSS AURA" width={1200} height={288} className="h-72 w-full" quality={85} />
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
                <span className="text-xs uppercase tracking-[0.35em] text-white/50">Livraison express</span>
                <h2 className="text-3xl font-semibold uppercase tracking-[0.25em] text-white sm:text-4xl">
                  Livraison 58 wilayas
                </h2>
                <p className="max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
                  Nous livrons partout en Algerie via nos partenaires logistiques. Paiement a la livraison disponible,
                  suivi en temps reel et support client WhatsApp 7 j/7.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                    <div className="text-xs uppercase tracking-[0.3em] text-white/50">Express</div>
                    <div className="mt-2 text-lg font-semibold text-white">24/48h sur stock</div>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                    <div className="text-xs uppercase tracking-[0.3em] text-white/50">Precommande</div>
                    <div className="mt-2 text-lg font-semibold text-white">Production 10 jours</div>
                  </div>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button asChild size="lg">
                    <Link href="/collection">Commander maintenant</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/contact">Parler avec le support</Link>
                  </Button>
                </div>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 p-6">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,#d2103422,transparent_60%)]" aria-hidden />
                <div className="space-y-6">
                  <div className="rounded-3xl border border-white/10 bg-black/60 p-6">
                    <div className="text-xs uppercase tracking-[0.3em] text-[#c9a961]">Service client</div>
                    <div className="mt-3 text-lg font-semibold text-white">Support WhatsApp 7 j/7</div>
                    <p className="mt-3 text-sm leading-relaxed text-white/60">
                      Response moyenne 5 minutes de 9h a 22h. Suivi colis, conseils taille, mise a jour drops.
                    </p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-black/60 p-6">
                    <div className="text-xs uppercase tracking-[0.3em] text-[#c9a961]">Retours faciles</div>
                    <div className="mt-3 text-lg font-semibold text-white">14 jours pour echange</div>
                    <p className="mt-3 text-sm leading-relaxed text-white/60">
                      Essayez votre casquette. Echange possible sous 14 jours si la piece est neuve et etiquettes
                      conservees.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
