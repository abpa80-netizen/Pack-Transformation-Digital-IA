import React, { useState } from 'react';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { X, FileText } from 'lucide-react';
import { MrrLicensePdfViewer } from './MrrLicensePdfViewer';

interface FooterCompactProps {
  onOpenCatalogue: () => void;
  onOpenLicense: () => void;
}

export const FooterCompact: React.FC<FooterCompactProps> = ({ onOpenCatalogue, onOpenLicense }) => {
  return (
    <footer className="border-t border-white/[0.08] bg-[#050713] text-[#AAB7C4] text-xs py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          {/* Brand & Slogan */}
          <div>
            <span 
              className="text-lg font-black text-white tracking-tight block"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              VISION LIBRE DIGITAL LAB
            </span>
            <p className="text-xs text-blue-300 mt-1 italic font-medium">
              « Apprendre. Créer. Entreprendre. Évoluer. »
            </p>
          </div>

          {/* Links: Pour qui ?, Catalogue, MRR, Licence, FAQ, Contact */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300">
            <a href="/#public-cible" className="hover:text-white transition-colors">
              Pour qui ?
            </a>
            <button
              onClick={onOpenCatalogue}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Catalogue
            </button>
            <a href="/#revente" className="hover:text-white transition-colors">
              MRR
            </a>
            <button
              onClick={onOpenLicense}
              className="hover:text-white transition-colors cursor-pointer flex items-center gap-1"
            >
              <FileText className="w-3.5 h-3.5 text-amber-400" />
              <span>Licence (PDF)</span>
            </button>
            <a href="/#faq" className="hover:text-white transition-colors">
              FAQ
            </a>
            <a 
              href={getWhatsAppUrl("Bonjour Vision Libre, je souhaite échanger avec l'équipe.")}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 text-emerald-400/90 font-medium transition-colors"
            >
              💬 PARLER À L'ÉQUIPE
            </a>
          </div>

          {/* Copyright without phone number */}
          <div className="text-[11px] text-slate-400">
            © {new Date().getFullYear()} VISION LIBRE DIGITAL LAB. Tous droits réservés.
          </div>

        </div>

        {/* Maillage SEO Thématique Maroc & International */}
        <div className="mt-8 pt-6 border-t border-white/[0.05]">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-3 text-center md:text-left">
            Formations Spécialisées :
          </span>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-2 text-[11px] text-slate-400">
            <a href="/formation-ia" className="hover:text-blue-400 transition-colors">Formation IA & ChatGPT</a>
            <span className="text-slate-600">·</span>
            <a href="/formation-business-en-ligne" className="hover:text-blue-400 transition-colors">Business en Ligne</a>
            <span className="text-slate-600">·</span>
            <a href="/formation-ecommerce" className="hover:text-blue-400 transition-colors">E-commerce & Shopify</a>
            <span className="text-slate-600">·</span>
            <a href="/formation-marketing-digital" className="hover:text-blue-400 transition-colors">Marketing Digital</a>
            <span className="text-slate-600">·</span>
            <a href="/formation-creation-contenu" className="hover:text-blue-400 transition-colors">Création de Contenu</a>
            <span className="text-slate-600">·</span>
            <a href="/formation-design" className="hover:text-blue-400 transition-colors">Design & Webflow</a>
            <span className="text-slate-600">·</span>
            <a href="/formation-freelance" className="hover:text-blue-400 transition-colors">Activité Freelance</a>
            <span className="text-slate-600">·</span>
            <a href="/formation-finance-trading" className="hover:text-blue-400 transition-colors">Finance & Trading</a>
          </div>

        </div>
      </div>
    </footer>
  );
};
