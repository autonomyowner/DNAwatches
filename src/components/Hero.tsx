"use client";

import Link from "next/link";
import { type ReactElement } from "react";
import { motion } from "framer-motion";
import Container from "@/components/Container";
import Button from "@/components/ui/Button";

export default function Hero(): ReactElement {

  return (
    <section className="relative isolate overflow-hidden">
      <div className="relative h-screen w-full flex items-center film-grain" aria-label="Premium real estate agency">
        {/* Hero background image */}
        <div 
          className="absolute inset-0 h-full w-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/premium_photo-1710010209274-2c2266291da2.avif')" }}
          aria-hidden
        />
        
        {/* Enhanced cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Sophisticated lighting effects */}
        <div className="absolute top-0 left-1/3 w-2/3 h-1/2 bg-gradient-radial from-teal-500/8 to-transparent opacity-40" />
        <div className="absolute bottom-0 right-1/3 w-1/2 h-2/3 bg-gradient-radial from-cyan-500/12 to-transparent opacity-30" />
        <div className="absolute top-1/4 left-0 w-1/3 h-1/2 bg-gradient-radial from-slate-600/6 to-transparent opacity-25" />
        
        {/* Enhanced vignette with teal accent */}
        <div className="absolute inset-0 shadow-[inset_0_0_300px_rgba(0,0,0,0.9)]" />
        <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(20,184,166,0.03)]" />
        
        <Container>
          <motion.div 
            className="relative z-10 max-w-4xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="mb-8"
            >
              <span className="inline-block px-6 py-3 luxury-card mafia-glow text-white bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900 border border-rose-900/40 text-sm font-semibold tracking-widest uppercase">
                FABRICATION DE MEUBLES MODERNES
              </span>
            </motion.div>
            
            <motion.h1 
              className="mafia-heading text-5xl sm:text-7xl lg:text-9xl text-white tracking-tight leading-[0.85] mb-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <span className="block relative">
                TRIOMPHE HOME DESIGN
                <div className="absolute -inset-2 bg-gradient-to-r from-[#F28B82]/10 via-transparent to-[#F28B82]/10 blur-xl" />
              </span>
              <span className="block text-[#F28B82] text-4xl sm:text-6xl lg:text-7xl font-light italic mt-2">
                Vos Meubles Sur Mesure
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl sm:text-2xl text-white/95 max-w-3xl leading-relaxed mb-14 font-light"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              Fabrication de tous types de meubles et décorations modernes selon vos demandes. 
              <br className="hidden sm:block" />
              <span className="text-[#F9AFA7] font-medium"> Cuisine, dressing, meuble TV, coiffeuse, lit capitonné, armoire, bureau...</span>
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              <Button variant="primary" size="lg" asChild className="premium-shadow mafia-glow">
                <Link href="/contact" className="text-lg px-10 py-5 font-semibold tracking-wide">
                  DEMANDER UN DEVIS
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="luxury-card bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 border-slate-900/40 text-white hover:bg-red-900/10 hover:border-red-900/60 transition-all duration-300">
                <Link href="/pricing" className="text-lg px-10 py-5 font-medium tracking-wide">
                  NOS SERVICES
                </Link>
              </Button>
            </motion.div>
            
            {/* Enhanced call to action */}
            <motion.div
              className="mt-20 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              <p className="smoke-text text-sm tracking-[0.2em] uppercase font-medium">
                Découvrez notre expertise artisanale
              </p>
              <motion.div
                className="w-px h-20 bg-gradient-to-b from-[#F28B82] via-[#F28B82]/50 to-transparent mx-auto mt-6 relative"
                animate={{ 
                  scaleY: [1, 0.3, 1],
                  opacity: [0.8, 0.4, 0.8]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#F28B82] rounded-full animate-pulse" />
              </motion.div>
            </motion.div>
          </motion.div>
        </Container>
      </div>
    </section>
  );
}


