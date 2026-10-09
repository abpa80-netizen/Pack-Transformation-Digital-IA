import React from 'react';
import { MessageSquare } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface NavbarProps {
  onOrderClick: () => void;
  onOpenCatalogue: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOrderClick, onOpenCatalogue }) => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#07111F]/90 border-b border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand wordmark */}
        <a 
          href="#" 
          className="text-sm sm:text-base md:text-lg font-extrabold tracking-tight text-white hover:text-blue-400 transition-colors"
          style={{ fontFamily: 'Syne, sans-serif' }}
        >
          PACK TRANSFORMATION DIGITAL & IA
        </a>

        {/* Clean Nav text links */}
        <nav className="hidden md:flex items-center gap-6 text-xs sm:text-sm font-medium text-[#AAB7C4]">
          <a href="#" className="hover:text-white transition-colors">
            Accueil
          </a>
          <a href="#public-cible" className="hover:text-white transition-colors">
            Pour qui ?
          </a>
          <a href="#objectifs" className="hover:text-white transition-colors">
            Objectifs
          </a>
          <button 
            onClick={onOpenCatalogue}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Catalogue
          </button>
          <a href="#revente" className="hover:text-white transition-colors">
            MRR
          </a>
          <a href="#faq" className="hover:text-white transition-colors">
            FAQ
          </a>
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={onOrderClick}
            className="px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-md shadow-blue-600/25 transition-all duration-150 active:scale-[0.98] cursor-pointer"
          >
            Commander
          </button>
        </div>

      </div>
    </header>
  );
};
