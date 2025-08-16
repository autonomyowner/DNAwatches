"use client";

import Link from "next/link";
import { useEffect, useState, type ReactElement } from "react";
import { Menu, Phone, X, Palette } from "lucide-react";

export default function Navbar(): ReactElement {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 4);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleToggleMenu(): void {
    setIsOpen((prev) => !prev);
  }

  function handleCloseMenu(): void {
    setIsOpen(false);
  }

  return (
    <header
      className={
        "fixed inset-x-0 top-0 z-50 transition-all duration-700 " +
        (scrolled 
          ? "bg-[#F6D0CB] border-b border-slate-900/40 shadow-2xl shadow-[#F28B82]/30" 
          : "bg-[#F6D0CB]"
        )
      }
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between" aria-label="Primary">
        <div className="flex items-center gap-3">
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative w-12 h-12 bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900 border border-slate-900/30 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#F28B82]/40 transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/20 before:to-transparent before:rounded-xl">
              <Palette className="w-7 h-7 text-white relative z-10 group-hover:text-white transition-colors duration-300" />
            </div>
            <span className="relative mafia-heading text-2xl text-transparent bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text tracking-wide group-hover:from-[#F28B82] group-hover:via-[#C58E42] group-hover:to-[#F28B82] transition-all duration-500 drop-shadow-sm group-hover:drop-shadow-lg">
              TRIOMPHE HOME DESIGN
              <div className="absolute inset-0 bg-gradient-to-r from-[#F28B82]/20 via-transparent to-[#F28B82]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            </span>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-10">
          <Link className="relative px-4 py-2 text-sm text-slate-700 hover:text-white transition-all duration-300 tracking-widest uppercase font-semibold rounded-lg hover:bg-[#F28B82]/80 hover:border hover:border-slate-900/30 hover:shadow-lg hover:shadow-[#F9AFA7]/20" href="/about">
            À propos
          </Link>
          <Link className="relative px-4 py-2 text-sm text-slate-700 hover:text-white transition-all duration-300 tracking-widest uppercase font-semibold rounded-lg hover:bg-[#F28B82]/80 hover:border hover:border-slate-900/30 hover:shadow-lg hover:shadow-[#F9AFA7]/20" href="/services">
            Services
          </Link>
          <Link className="relative px-4 py-2 text-sm text-slate-700 hover:text-white transition-all duration-300 tracking-widest uppercase font-semibold rounded-lg hover:bg-[#F28B82]/80 hover:border hover:border-slate-900/30 hover:shadow-lg hover:shadow-[#F9AFA7]/20" href="/pricing">
            Tarifs
          </Link>
          <Link className="relative px-4 py-2 text-sm text-slate-700 hover:text-white transition-all duration-300 tracking-widest uppercase font-semibold rounded-lg hover:bg-[#F28B82]/80 hover:border hover:border-slate-900/30 hover:shadow-lg hover:shadow-[#F9AFA7]/20" href="/contact">
            Contact
          </Link>
          
          <div className="h-8 w-px bg-gradient-to-b from-transparent via-slate-900/60 to-transparent mx-3" />
          
          <Link
            href="/contact"
            className="relative group inline-flex items-center gap-2 bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900 border border-[#F28B82]/40 text-white px-8 py-3 text-sm font-bold rounded-xl hover:shadow-2xl hover:shadow-[#F28B82]/50 hover:border-[#F9AFA7]/60 hover:from-[#F28B82] hover:via-[#F28B82] hover:to-[#F28B82] transform hover:scale-105 transition-all duration-500 tracking-widest uppercase before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/20 before:via-white/10 before:to-transparent before:rounded-xl before:opacity-50"
          >
            <Phone size={16} className="relative z-10 group-hover:rotate-12 transition-transform duration-300" />
            <span className="relative z-10">DEVIS GRATUIT</span>
          </Link>
        </div>

        <button
          aria-label="Ouvrir le menu"
          onClick={handleToggleMenu}
          className="md:hidden inline-flex items-center justify-center rounded-xl p-3 text-blue-100/80 hover:text-white hover:bg-blue-500/20 hover:backdrop-blur-lg hover:border hover:border-blue-300/30 hover:shadow-lg hover:shadow-blue-400/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 transition-all duration-300"
        >
          {isOpen ? <X aria-hidden size={24} /> : <Menu aria-hidden size={24} />}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-gradient-to-b from-blue-950/95 via-blue-900/90 to-indigo-950/95 backdrop-blur-2xl backdrop-saturate-200 border-t border-blue-300/40 shadow-2xl shadow-blue-500/30" role="dialog" aria-modal="true">
          <div className="px-6 py-8 space-y-6">
            <Link 
              onClick={handleCloseMenu} 
              className="block py-4 px-4 text-blue-100/90 hover:text-white hover:bg-blue-500/20 hover:backdrop-blur-sm rounded-lg transition-all duration-300 text-lg font-semibold tracking-wide border-b border-blue-300/30 hover:border-blue-200/60 hover:shadow-lg hover:shadow-blue-400/20" 
              href="/about"
            >
              À PROPOS
            </Link>
            <Link 
              onClick={handleCloseMenu} 
              className="block py-4 px-4 text-blue-100/90 hover:text-white hover:bg-blue-500/20 hover:backdrop-blur-sm rounded-lg transition-all duration-300 text-lg font-semibold tracking-wide border-b border-blue-300/30 hover:border-blue-200/60 hover:shadow-lg hover:shadow-blue-400/20" 
              href="/services"
            >
              SERVICES
            </Link>
            <Link 
              onClick={handleCloseMenu} 
              className="block py-4 px-4 text-blue-100/90 hover:text-white hover:bg-blue-500/20 hover:backdrop-blur-sm rounded-lg transition-all duration-300 text-lg font-semibold tracking-wide border-b border-blue-300/30 hover:border-blue-200/60 hover:shadow-lg hover:shadow-blue-400/20" 
              href="/pricing"
            >
              TARIFS
            </Link>
            <Link 
              onClick={handleCloseMenu} 
              className="block py-4 px-4 text-blue-100/90 hover:text-white hover:bg-blue-500/20 hover:backdrop-blur-sm rounded-lg transition-all duration-300 text-lg font-semibold tracking-wide border-b border-blue-300/30 hover:border-blue-200/60 hover:shadow-lg hover:shadow-blue-400/20" 
              href="/contact"
            >
              CONTACT
            </Link>
            <Link
              onClick={handleCloseMenu}
              href="/contact"
              className="relative mt-8 inline-flex w-full items-center justify-center gap-3 bg-gradient-to-r from-blue-500/80 via-cyan-500/70 to-blue-600/80 backdrop-blur-lg border border-blue-300/40 text-white px-8 py-5 text-lg font-bold rounded-xl hover:shadow-2xl hover:shadow-blue-400/50 hover:border-blue-200/60 hover:from-blue-400/90 hover:via-cyan-400/80 hover:to-blue-500/90 transition-all duration-500 tracking-widest uppercase before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/20 before:via-white/10 before:to-transparent before:rounded-xl before:opacity-50"
            >
              <Phone size={20} className="relative z-10" />
              <span className="relative z-10">DEMANDER UN DEVIS</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}


