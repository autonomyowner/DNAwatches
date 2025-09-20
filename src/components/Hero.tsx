"use client";

import Link from "next/link";
import { type ReactElement } from "react";
import { motion } from "framer-motion";
import Container from "@/components/Container";
import Button from "@/components/ui/Button";

export default function Hero(): ReactElement {

  return (
    <section className="relative isolate overflow-hidden">
      <div className="relative h-screen w-full flex items-center pt-20 sm:pt-0" aria-label="Triomphe décoration maison">
        {/* Hero background image with overlay */}
        <div 
          className="absolute inset-0 h-full w-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/pexels-heyho-6970074.jpg')" }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <Container>
          <motion.div 
            className="relative z-10 max-w-4xl text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-5xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-tight mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              style={{ 
                fontFamily: 'var(--font-sans)',
                textShadow: '2px 2px 4px rgba(0,0,0,0.7)'
              }}
            >
              Décorez votre espace de rêve avec nos pièces.
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed mb-12 font-light"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              style={{ 
                fontFamily: 'var(--font-sans)',
                textShadow: '1px 1px 2px rgba(0,0,0,0.6)'
              }}
            >
              Transformez votre maison avec notre collection soigneusement sélectionnée de meubles et d&apos;objets de décoration modernes. 
              Des vases élégants aux bougies douillettes, nous apportons style et confort à chaque coin de votre espace.
            </motion.p>
            
            <motion.div 
              className="flex justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              <Button variant="outline" size="lg" asChild className="border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-[#2d2d2d] font-semibold shadow-xl">
                <Link href="/services" className="text-lg px-8 py-4 font-semibold tracking-wide">
                  EXPLORER MAINTENANT
                </Link>
              </Button>
            </motion.div>
            
            {/* Decorative elements */}
            <motion.div
              className="absolute left-8 top-1/2 transform -translate-y-1/2 hidden lg:block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <div className="space-y-3">
                <div className="w-3 h-3 bg-white/60 rounded-full"></div>
                <div className="w-3 h-3 bg-white/40 rounded-full"></div>
                <div className="w-3 h-3 bg-white/20 rounded-full"></div>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </div>
    </section>
  );
}