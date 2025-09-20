import type { ReactElement } from "react";
import { siteConfig } from "@/config/site";
import { Instagram, Facebook, MessageSquare } from "lucide-react";
import Container from "./Container";


export default function Footer(): ReactElement {
  return (
    <footer className="bg-[#faf9f7] border-t border-[#d4c4b0]">
      <Container>
        <div className="py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
            {/* Brand Section */}
            <div>
              <div className="mb-6">
                <span className="text-2xl font-bold text-[#2d2d2d]">
                  TRIOMPHE
                </span>
                <p className="text-sm text-[#8b7355] mt-2">Maison de la Perfection</p>
              </div>
            </div>

            {/* Contact/Hours */}
            <div className="text-right">
              <div className="text-sm text-[#6b6b6b]">
                <p>Lundi au Vendredi</p>
                <p>10h à 20h</p>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex justify-end gap-4">
              <a 
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noreferrer noopener"
                className="w-8 h-8 bg-[#2d2d2d] rounded-full flex items-center justify-center text-white hover:bg-[#8b7355] transition-colors duration-300"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a 
                href={siteConfig.instagramLink}
                target="_blank"
                rel="noreferrer noopener"
                className="w-8 h-8 bg-[#2d2d2d] rounded-full flex items-center justify-center text-white hover:bg-[#8b7355] transition-colors duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href={siteConfig.facebookLink}
                target="_blank"
                rel="noreferrer noopener"
                className="w-8 h-8 bg-[#2d2d2d] rounded-full flex items-center justify-center text-white hover:bg-[#8b7355] transition-colors duration-300"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}


