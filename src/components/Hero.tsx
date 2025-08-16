"use client";

import Link from "next/link";
import { type ReactElement } from "react";
import { motion } from "framer-motion";
import Container from "@/components/Container";
import Button from "@/components/ui/Button";

export default function Hero(): ReactElement {

  return (
    <section className="relative isolate overflow-hidden">
      <div className="relative h-screen w-full flex items-center pt-20 sm:pt-0" aria-label="Premium furniture crafting">
        {/* Hero background image - 100% visible */}
        <div 
          className="absolute inset-0 h-full w-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/h.jpg')" }}
          aria-hidden
        />
        
        <Container>
          <motion.div 
            className="relative z-10 max-w-5xl"
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
              <span className="inline-block px-8 py-4 bg-white/95 backdrop-blur-sm text-slate-900 border border-slate-200/50 text-sm font-semibold tracking-[0.3em] uppercase rounded-full shadow-lg">
                FABRICATION DE MEUBLES MODERNES
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-6xl sm:text-8xl lg:text-9xl text-white tracking-tight leading-[0.85] mb-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <span 
                className="block relative font-light italic text-6xl sm:text-8xl lg:text-9xl" 
                style={{ 
                  fontFamily: 'var(--font-dancing)',
                  textShadow: '4px 4px 8px rgba(0,0,0,0.7), 2px 2px 4px rgba(0,0,0,0.5)'
                }}
              >
                TRIOMPHE
                <span className="absolute -inset-4 bg-gradient-to-r from-white/20 via-transparent to-white/20 blur-2xl -z-10" />
              </span>
              <span 
                className="block font-light text-5xl sm:text-7xl lg:text-8xl mt-2 tracking-wider" 
                style={{ 
                  fontFamily: 'var(--font-cormorant)',
                }}
              >
                HOME DESIGN
              </span>
              <span 
                className="block text-white/90 text-3xl sm:text-5xl lg:text-6xl font-light italic mt-4" 
                style={{ 
                  fontFamily: 'var(--font-dancing)',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.6)'
                }}
              >
                Vos Meubles Sur Mesure
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl sm:text-2xl text-white max-w-4xl leading-relaxed mb-14 font-light"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              style={{ 
                fontFamily: 'var(--font-geist-sans)',
                textShadow: '2px 2px 4px rgba(0,0,0,0.6)'
              }}
            >
              Fabrication de meubles sur mesure, construction, rénovation et services d&apos;architecture & design. 
              <br className="hidden sm:block" />
              <span className="font-medium text-white/95"> Cuisine, dressing, meuble TV, coiffeuse, lit capitonné, armoire, bureau, construction et conception architecturale...</span>
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              <Button variant="ghost" size="lg" asChild className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white hover:from-slate-800 hover:via-purple-800 hover:to-slate-800 font-bold shadow-xl hover:shadow-2xl shadow-purple-500/40 hover:scale-105 focus-visible:ring-purple-600">
                <Link href="/contact" className="text-lg px-12 py-6 font-bold tracking-wide">
                  DEMANDER UN DEVIS
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-2 border-white text-white hover:bg-white hover:text-slate-900 font-semibold shadow-xl">
                <Link href="/pricing" className="text-lg px-12 py-6 font-semibold tracking-wide">
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
              <p className="text-white text-sm tracking-[0.3em] uppercase font-medium drop-shadow-lg" style={{ 
                fontFamily: 'var(--font-geist-sans)',
                textShadow: '1px 1px 2px rgba(0,0,0,0.7)'
              }}>
                Découvrez notre expertise artisanale
              </p>
              <motion.div
                className="w-px h-20 bg-gradient-to-b from-white via-white/70 to-transparent mx-auto mt-6 relative"
                animate={{ 
                  scaleY: [1, 0.3, 1],
                  opacity: [0.9, 0.5, 0.9]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full animate-pulse shadow-lg" />
              </motion.div>
            </motion.div>
          </motion.div>
        </Container>
      </div>
    </section>
  );
}