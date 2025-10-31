"use client";

import Link from "next/link";
import { memo, type ReactElement } from "react";
import { motion } from "framer-motion";
import Container from "@/components/Container";
import Button from "@/components/ui/Button";
import OptimizedImage from "@/components/OptimizedImage";

const heroImages = [
  {
    src: "/watches/1.jpg",
    alt: "Montre DNA WATCHES élégante",
    className: "rounded-3xl border border-white/10 shadow-[0_25px_60px_-30px_rgba(0,0,0,0.7)]",
  },
  {
    src: "/watches/3.jpg",
    alt: "Détail montre DNA WATCHES",
    className: "rounded-3xl border border-white/10 shadow-[0_20px_40px_-30px_rgba(0,0,0,0.8)]",
  },
];

function Hero(): ReactElement {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#00623322,transparent_60%)]" aria-hidden />
      <Container>
        <div className="grid items-center gap-12 pb-24 pt-28 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <motion.div
            className="space-y-9"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-white/70">
              Collection Premium 2025
              <span className="h-2 w-2 rounded-full bg-[#d21034]" />
            </div>

            <div className="space-y-4">
              <h1 className="font-[var(--font-display)] text-4xl uppercase tracking-[0.25em] text-white sm:text-5xl lg:text-6xl">
                Elegance intemporelle.
                <br />
                Precision exceptionnelle.
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
                Montres originales et bijoux premium livrés dans les 58 wilayas. Sélection rigoureuse parmi les meilleures
                marques pour vous offrir qualité, authenticité et élégance.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button asChild size="lg">
                <Link href="/collection">Decouvrir la collection</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/shipping">Livraison 58 wilayas</Link>
              </Button>
            </div>

            <div className="grid gap-6 text-xs uppercase tracking-[0.25em] text-white/60 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-[0.65rem]">Livraison premium</div>
                <div className="mt-3 text-lg font-semibold text-white">58 wilayas</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-[0.65rem]">Nouvelles collections</div>
                <div className="mt-3 text-lg font-semibold text-white">Chaque mois</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-[0.65rem]">Qualite verifiee</div>
                <div className="mt-3 text-lg font-semibold text-white">Produits originaux</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative space-y-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <div className="absolute -left-24 top-10 hidden h-80 w-80 rounded-full bg-[#006233]/20 blur-3xl lg:block" />
            <div className="absolute -right-24 bottom-0 hidden h-72 w-72 rounded-full bg-[#d21034]/20 blur-3xl lg:block" />

            <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 p-6">
              <div className="absolute inset-x-6 top-6 h-28 rounded-3xl bg-gradient-to-br from-white/40 via-transparent to-white/5 blur-2xl" />
              <div className="grid gap-6">
                <OptimizedImage
                  src={heroImages[0].src}
                  alt={heroImages[0].alt}
                  width={1200}
                  height={280}
                  className={`h-[280px] w-full ${heroImages[0].className}`}
                  quality={85}
                />
                <div className="grid gap-4 rounded-3xl border border-white/10 bg-black/50 p-6">
                  <div className="text-xs font-semibold uppercase tracking-[0.35em] text-white/60">Collection</div>
                  <div className="text-2xl font-bold uppercase tracking-[0.15em] text-white">
                    Naviforce // Original
                  </div>
                  <p className="text-xs leading-relaxed text-white/60">
                    Montre Naviforce double design, produit 100% original avec garantie. Design moderne et fonctionnalités
                    avancées.
                  </p>
                  <div className="flex items-center justify-between text-xs text-white/60">
                    <span>Disponible maintenant</span>
                    <span>15 900 DZD</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur">
              <div className="h-12 w-12 overflow-hidden rounded-2xl border border-white/10">
                <OptimizedImage src={heroImages[1].src} alt={heroImages[1].alt} width={800} height={800} className="h-full w-full" quality={80} />
              </div>
              <div className="text-xs uppercase tracking-[0.25em] text-white/60">
                <div className="text-white">Collection exclusive</div>
                <div>Montres Rolex</div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default memo(Hero);
