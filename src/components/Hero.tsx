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
        <div className="grid items-center gap-8 pb-12 pt-16 sm:gap-10 sm:pb-16 sm:pt-20 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:pb-24 lg:pt-28">
          <motion.div
            className="space-y-6 sm:space-y-8 lg:space-y-9"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-white/70 sm:gap-3 sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.4em]">
              Collection Premium 2025
              <span className="h-1.5 w-1.5 rounded-full bg-[#d21034] sm:h-2 sm:w-2" />
            </div>

            <div className="space-y-3 sm:space-y-4">
              <h1 className="font-[var(--font-display)] text-2xl uppercase tracking-[0.2em] text-white sm:text-4xl sm:tracking-[0.25em] lg:text-5xl xl:text-6xl">
                Elegance intemporelle.
                <br />
                Precision exceptionnelle.
              </h1>
              <p className="max-w-xl text-sm leading-relaxed text-white/70 sm:text-base lg:text-lg">
                Montres originales et bijoux premium livrés dans les 58 wilayas. Sélection rigoureuse parmi les meilleures
                marques pour vous offrir qualité, authenticité et élégance.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="/collection">Decouvrir la collection</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <Link href="/shipping">Livraison 58 wilayas</Link>
              </Button>
            </div>

            <div className="grid gap-4 text-xs uppercase tracking-[0.2em] text-white/60 sm:grid-cols-3 sm:gap-6 sm:tracking-[0.25em]">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3 sm:p-4">
                <div className="text-[0.6rem] sm:text-[0.65rem]">Livraison premium</div>
                <div className="mt-2 text-base font-semibold text-white sm:mt-3 sm:text-lg">58 wilayas</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3 sm:p-4">
                <div className="text-[0.6rem] sm:text-[0.65rem]">Nouvelles collections</div>
                <div className="mt-2 text-base font-semibold text-white sm:mt-3 sm:text-lg">Chaque mois</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3 sm:p-4">
                <div className="text-[0.6rem] sm:text-[0.65rem]">Qualite verifiee</div>
                <div className="mt-2 text-base font-semibold text-white sm:mt-3 sm:text-lg">Produits originaux</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative space-y-4 sm:space-y-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <div className="absolute -left-24 top-10 hidden h-80 w-80 rounded-full bg-[#006233]/20 blur-3xl lg:block" />
            <div className="absolute -right-24 bottom-0 hidden h-72 w-72 rounded-full bg-[#d21034]/20 blur-3xl lg:block" />

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4 sm:rounded-[32px] sm:p-5 lg:rounded-[40px] lg:p-6">
              <div className="absolute inset-x-4 top-4 h-20 rounded-3xl bg-gradient-to-br from-white/40 via-transparent to-white/5 blur-2xl sm:inset-x-5 sm:top-5 sm:h-24 lg:inset-x-6 lg:top-6 lg:h-28" />
              <div className="grid gap-4 sm:gap-6">
                <video
                  src="/watches/Extreme_macro_close_up_K_res.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className={`h-48 w-full sm:h-64 lg:h-[280px] object-cover ${heroImages[0].className}`}
                />
                <video
                  src="/watches/Your paragraph text (4).mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-48 w-full rounded-2xl border border-white/10 bg-black/50 object-cover sm:h-64 sm:rounded-3xl lg:h-[280px]"
                />
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur sm:rounded-3xl sm:gap-4 sm:p-4">
              <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-xl border border-white/10 sm:h-12 sm:w-12 sm:rounded-2xl">
                <OptimizedImage src={heroImages[1].src} alt={heroImages[1].alt} width={800} height={800} className="h-full w-full" quality={80} />
              </div>
              <div className="min-w-0 flex-1 text-[0.65rem] uppercase tracking-[0.2em] text-white/60 sm:text-xs sm:tracking-[0.25em]">
                <div className="truncate text-white">Collection exclusive</div>
                <div className="truncate">Montres Rolex</div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default memo(Hero);
