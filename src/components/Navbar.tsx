"use client";

import Link from "next/link";
import { useEffect, useState, memo, useCallback, type ReactElement } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/collection", label: "Collection" },
  { href: "/about", label: "La marque" },
  { href: "/shipping", label: "Livraison" },
  { href: "/contact", label: "Contact" },
];

function Navbar(): ReactElement {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    function onScroll(): void {
      if (ticking) return;

      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 4);
        ticking = false;
      });
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleToggleMenu = useCallback((): void => {
    setIsOpen((prev) => !prev);
  }, []);

  const handleCloseMenu = useCallback((): void => {
    setIsOpen(false);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-[0_12px_40px_-15px_rgba(0,0,0,0.65)]"
          : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Navigation principale"
      >
        <Link href="/" className="flex items-center gap-3">
          <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
            DNA WATCHES
          </span>
          <span className="text-2xl font-bold uppercase tracking-[0.3em] text-white">
            MAGASIN
          </span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium uppercase tracking-[0.18em] text-white/70 transition-colors duration-200 hover:text-white"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/collection"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white text-sm font-semibold uppercase tracking-[0.25em] text-black transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white"
          >
            <span className="px-6 py-3">Acheter</span>
          </Link>
        </div>

        <button
          aria-label="Ouvrir le menu"
          onClick={handleToggleMenu}
          className="inline-flex items-center justify-center rounded-full border border-white/20 p-3 text-white hover:border-white/40 md:hidden"
        >
          {isOpen ? <X aria-hidden size={22} /> : <Menu aria-hidden size={22} />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-white/10 bg-black/95 text-white md:hidden">
          <div className="space-y-3 px-4 py-6">
            <div className="text-xs uppercase tracking-[0.3em] text-white/60">{siteConfig.tagline}</div>
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleCloseMenu}
                className="block rounded-xl border border-white/5 bg-white/5 px-4 py-4 text-sm font-semibold uppercase tracking-[0.2em] transition-all duration-200 hover:border-white/40 hover:bg-white/10"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/collection"
              onClick={handleCloseMenu}
              className="block rounded-full bg-white px-6 py-4 text-center text-sm font-semibold uppercase tracking-[0.25em] text-black transition-all duration-200 hover:-translate-y-0.5"
            >
              Acheter maintenant
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default memo(Navbar);
