import Link from "next/link";
import type { ReactElement } from "react";
import { siteConfig } from "@/config/site";
import { Phone, MessageSquare, Instagram, Facebook, Mail, MapPin, Shield, Clock, Palette } from "lucide-react";
import Container from "./Container";

const footerLinks = {
  services: [
    { name: "Design d'Intérieur", href: "/services" },
    { name: "Aménagement Complet", href: "/services" },
    { name: "Décoration Premium", href: "/services" },
    { name: "Devis Gratuit", href: "/contact" },
  ],
  company: [
    { name: "À Propos", href: "/about" },
    { name: "Nos Services", href: "/pricing" },
    { name: "Contact", href: "/contact" },
    { name: "Confidentialité", href: "/privacy" },
  ],
  contact: [
    { name: siteConfig.phone, href: `tel:${siteConfig.phone}`, icon: Phone },
    { name: "WhatsApp", href: siteConfig.whatsappLink, icon: MessageSquare },
    { name: "Instagram", href: siteConfig.instagramLink, icon: Instagram, external: true },
    { name: "Facebook", href: siteConfig.facebookLink, icon: Facebook, external: true },
  ]
};

export default function Footer(): ReactElement {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900 border-t border-[#F28B82]/20">
      <div className="absolute inset-0 bg-gradient-to-b from-[#F6D0CB]/10 via-transparent to-[#F28B82]/5" />
      
      <Container>
        <div className="relative z-10 py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-[#F28B82] to-[#F9AFA7] rounded-full flex items-center justify-center">
                  <Palette className="w-5 h-5 text-white" />
                </div>
                <span className="mafia-heading text-2xl text-white">
                  TRIOMPHE HOME DESIGN
                </span>
              </div>
              <p className="text-white/80 leading-relaxed mb-6">
                Depuis 2020, nous excellons dans la fabrication de meubles modernes 
                avec savoir-faire artisanal, qualité et service personnalisé.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-white/70 text-sm">
                  <Shield className="w-4 h-4 text-[#F28B82]" />
                  <span>Fabrication de qualité</span>
                </div>
                <div className="flex items-center gap-3 text-white/70 text-sm">
                  <Clock className="w-4 h-4 text-[#F28B82]" />
                  <span>Disponible 6j/7</span>
                </div>
                <div className="flex items-center gap-3 text-white/70 text-sm">
                  <MapPin className="w-4 h-4 text-[#F28B82]" />
                  <span>Setif Bousekine</span>
                </div>
              </div>
            </div>

            {/* Services Links */}
            <div>
              <h3 className="mafia-heading text-lg text-white mb-6">
                Nos <span className="text-[#F28B82]">Services</span>
              </h3>
              <nav className="space-y-3">
                {footerLinks.services.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block text-white/70 hover:text-[#F28B82] transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="mafia-heading text-lg text-white mb-6">
                <span className="text-[#F28B82]">Entreprise</span>
              </h3>
              <nav className="space-y-3">
                {footerLinks.company.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block text-white/70 hover:text-[#F28B82] transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="mafia-heading text-lg text-white mb-6">
                <span className="text-[#F28B82]">Contact</span>
              </h3>
              <div className="space-y-4">
                {footerLinks.contact.map((contact) => (
                  <a
                    key={contact.name}
                    href={contact.href}
                    target={contact.external ? "_blank" : undefined}
                    rel={contact.external ? "noreferrer noopener" : undefined}
                    className="flex items-center gap-3 text-white/70 hover:text-[#F28B82] transition-colors duration-300 text-sm group"
                  >
                    <contact.icon className="w-4 h-4 text-[#F28B82] group-hover:scale-110 transition-transform duration-300" />
                    <span>{contact.name}</span>
                  </a>
                ))}
                
                <div className="mt-6 pt-6 border-t border-[#F28B82]/20">
                  <p className="text-white/60 text-xs mb-3">Devis en ligne</p>
                  <a
                    href="/contact"
                    className="luxury-card inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-teal-400/30 text-[#F28B82] hover:bg-teal-500/10 transition-all duration-300 text-sm group"
                  >
                    <Mail className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                    Demander un devis
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Separator */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-teal-400/30 to-transparent mb-8" />

          {/* Bottom Section */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-6 text-white/60 text-sm">
              <p>© {new Date().getFullYear()} Triomphe Home Design</p>
              <span className="hidden sm:block">•</span>
              <p>Tous droits réservés</p>
              <span className="hidden sm:block">•</span>
              <p className="text-[#F28B82]">Excellence depuis 2020</p>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-white/40 text-xs">Suivez-nous</span>
              <a 
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noreferrer noopener"
                className="w-10 h-10 luxury-card rounded-full flex items-center justify-center text-[#F28B82] hover:bg-[#F28B82]/20 transition-all duration-300 group"
              >
                <MessageSquare className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a 
                href={siteConfig.instagramLink}
                target="_blank"
                rel="noreferrer noopener"
                className="w-10 h-10 luxury-card rounded-full flex items-center justify-center text-[#F28B82] hover:bg-[#F28B82]/20 transition-all duration-300 group"
              >
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a 
                href={siteConfig.facebookLink}
                target="_blank"
                rel="noreferrer noopener"
                className="w-10 h-10 luxury-card rounded-full flex items-center justify-center text-[#F28B82] hover:bg-[#F28B82]/20 transition-all duration-300 group"
              >
                <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}


