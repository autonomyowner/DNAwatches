import type { ReactElement } from "react";
import { Instagram, Facebook, MessageSquare, MapPin, Phone, Package, Clock, Send } from "lucide-react";
import Container from "./Container";
import { siteConfig } from "@/config/site";

const quickLinks = [
  { href: "/collection", label: "Collection" },
  { href: "/about", label: "La marque" },
  { href: "/shipping", label: "Livraison & retours" },
  { href: "/contact", label: "Contact" },
];

export default function Footer(): ReactElement {
  return (
    <footer className="border-t border-white/10 bg-black/95 text-white">
      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-5">
          <div className="md:col-span-2 space-y-6">
            <div className="space-y-2">
              <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                OUSS AURA
              </span>
              <h3 className="text-2xl font-bold uppercase tracking-[0.25em]">Boutique</h3>
            </div>
            <p className="text-sm leading-relaxed text-white/70">{siteConfig.description}</p>
            <div className="flex items-center gap-4">
              <a
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noreferrer noopener"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-colors duration-200 hover:border-white hover:bg-white hover:text-black"
              >
                <MessageSquare className="h-4 w-4" aria-hidden />
              </a>
              <a
                href={siteConfig.instagramLink}
                target="_blank"
                rel="noreferrer noopener"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-colors duration-200 hover:border-white hover:bg-white hover:text-black"
              >
                <Instagram className="h-4 w-4" aria-hidden />
              </a>
              <a
                href={siteConfig.facebookLink}
                target="_blank"
                rel="noreferrer noopener"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-colors duration-200 hover:border-white hover:bg-white hover:text-black"
              >
                <Facebook className="h-4 w-4" aria-hidden />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-white/60">Navigation</h4>
            <ul className="space-y-3 text-sm text-white/70">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="transition-colors duration-150 hover:text-white">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-white/60">Livraison</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <Package className="mt-1 h-4 w-4 text-white/50" aria-hidden />
                <span>Livraison express dans les 58 wilayas</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-1 h-4 w-4 text-white/50" aria-hidden />
                <span>Expedition 24/48h sur stock</span>
              </li>
              <li className="flex items-start gap-3">
                <Send className="mt-1 h-4 w-4 text-white/50" aria-hidden />
                <span>Suivi de commande en temps reel</span>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-white/60">Contact</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <Phone className="mt-1 h-4 w-4 text-white/50" aria-hidden />
                <a href={`tel:${siteConfig.phone}`} className="transition-colors duration-150 hover:text-white">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MessageSquare className="mt-1 h-4 w-4 text-white/50" aria-hidden />
                <a href={siteConfig.whatsappLink} target="_blank" rel="noreferrer noopener" className="transition-colors duration-150 hover:text-white">
                  WhatsApp direct
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-4 w-4 text-white/50" aria-hidden />
                <a href={siteConfig.googleMapsLink} target="_blank" rel="noreferrer noopener" className="transition-colors duration-150 hover:text-white">
                  {siteConfig.address}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 py-8 text-center text-xs text-white/40">
          <div className="uppercase tracking-[0.3em]">
            {new Date().getFullYear()} © {siteConfig.name}. Tous droits reserves.
          </div>
          <div className="mt-2 text-[10px] tracking-wider">
            Developed by{" "}
            <a
              href="https://www.sitedz.store"
              target="_blank"
              rel="noreferrer noopener"
              className="text-white/60 transition-colors duration-200 hover:text-white"
            >
              www.sitedz.store
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
