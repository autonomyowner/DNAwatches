"use client";

import Link from "next/link";
import { useEffect, useState, type ReactElement } from "react";
import { Menu, Phone, X } from "lucide-react";

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
          ? "bg-white/95 backdrop-blur-xl border-b border-slate-200/60 shadow-xl shadow-black/10" 
          : "bg-white/90 backdrop-blur-lg"
        )
      }
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between" aria-label="Primary">
        <div className="flex items-center">
          <Link href="/" className="group flex items-center">
            <span 
              className="text-4xl font-black text-slate-900 tracking-tight"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              <span className="italic">TRIOMPHE</span>
              <span 
                className="text-2xl font-light text-slate-600 ml-3 tracking-wider"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                HOME DESIGN
              </span>
            </span>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <Link className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors duration-200 px-4 py-2" href="/about">
            À propos
          </Link>
          <Link className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors duration-200 px-4 py-2" href="/services">
            Services
          </Link>
          <Link className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors duration-200 px-4 py-2" href="/pricing">
            Tarifs
          </Link>
          <Link className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors duration-200 px-4 py-2" href="/contact">
            Contact
          </Link>
          
          <div className="h-6 w-px bg-slate-300 mx-4" />
          
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 text-sm font-semibold rounded-lg hover:bg-slate-800 transition-colors duration-200"
          >
            <Phone size={16} />
            DEVIS GRATUIT
          </Link>
        </div>

        <button
          aria-label="Ouvrir le menu"
          onClick={handleToggleMenu}
          className="md:hidden inline-flex items-center justify-center rounded-lg p-3 text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors duration-200"
        >
          {isOpen ? <X aria-hidden size={24} /> : <Menu aria-hidden size={24} />}
        </button>

        {/* Mobile menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-lg md:hidden">
            <div className="px-4 py-4 space-y-2">
              <Link 
                href="/about" 
                onClick={handleCloseMenu}
                className="block px-4 py-3 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors duration-200"
              >
                À propos
              </Link>
              <Link 
                href="/services" 
                onClick={handleCloseMenu}
                className="block px-4 py-3 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors duration-200"
              >
                Services
              </Link>
              <Link 
                href="/pricing" 
                onClick={handleCloseMenu}
                className="block px-4 py-3 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors duration-200"
              >
                Tarifs
              </Link>
              <Link 
                href="/contact" 
                onClick={handleCloseMenu}
                className="block px-4 py-3 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors duration-200"
              >
                Contact
              </Link>
              <Link 
                href="/contact" 
                onClick={handleCloseMenu}
                className="block mt-4 px-4 py-3 bg-slate-900 text-white text-sm font-semibold rounded-lg text-center"
              >
                DEVIS GRATUIT
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}