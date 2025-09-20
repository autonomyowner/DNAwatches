"use client";

import Link from "next/link";
import { useEffect, useState, type ReactElement } from "react";
import { Menu, X } from "lucide-react";

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
              className="text-3xl font-bold text-[#2d2d2d] tracking-wider"
              style={{ 
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontStyle: 'italic',
                letterSpacing: '0.1em',
                textShadow: '1px 1px 2px rgba(139, 115, 85, 0.2)'
              }}
            >
              TRIOMPHE
            </span>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <Link className="text-sm font-medium text-[#2d2d2d] hover:text-[#8b7355] transition-colors duration-200 px-4 py-2" href="/">
            Accueil
          </Link>
          <Link className="text-sm font-medium text-[#2d2d2d] hover:text-[#8b7355] transition-colors duration-200 px-4 py-2" href="/services">
            Boutique
          </Link>
          <Link className="text-sm font-medium text-[#2d2d2d] hover:text-[#8b7355] transition-colors duration-200 px-4 py-2" href="/about">
            À propos
          </Link>
          <Link className="text-sm font-medium text-[#2d2d2d] hover:text-[#8b7355] transition-colors duration-200 px-4 py-2" href="/contact">
            Contact
          </Link>
          
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 bg-[#2d2d2d] text-white px-6 py-3 text-sm font-semibold rounded-lg hover:bg-[#8b7355] transition-colors duration-200"
          >
            ACHETER MAINTENANT
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
          <div className="absolute top-full left-0 right-0 bg-white border-b border-[#d4c4b0] shadow-lg md:hidden">
            <div className="px-4 py-4 space-y-2">
              <Link 
                href="/" 
                onClick={handleCloseMenu}
                className="block px-4 py-3 text-sm font-medium text-[#2d2d2d] hover:text-[#8b7355] hover:bg-[#f5f3f0] rounded-lg transition-colors duration-200"
              >
                Accueil
              </Link>
              <Link 
                href="/services" 
                onClick={handleCloseMenu}
                className="block px-4 py-3 text-sm font-medium text-[#2d2d2d] hover:text-[#8b7355] hover:bg-[#f5f3f0] rounded-lg transition-colors duration-200"
              >
                Boutique
              </Link>
              <Link 
                href="/about" 
                onClick={handleCloseMenu}
                className="block px-4 py-3 text-sm font-medium text-[#2d2d2d] hover:text-[#8b7355] hover:bg-[#f5f3f0] rounded-lg transition-colors duration-200"
              >
                À propos
              </Link>
              <Link 
                href="/contact" 
                onClick={handleCloseMenu}
                className="block px-4 py-3 text-sm font-medium text-[#2d2d2d] hover:text-[#8b7355] hover:bg-[#f5f3f0] rounded-lg transition-colors duration-200"
              >
                Contact
              </Link>
              <Link 
                href="/pricing" 
                onClick={handleCloseMenu}
                className="block mt-4 px-4 py-3 bg-[#2d2d2d] text-white text-sm font-semibold rounded-lg text-center"
              >
                ACHETER MAINTENANT
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}