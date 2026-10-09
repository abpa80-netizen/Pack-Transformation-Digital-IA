import React from 'react';
import { Flame, ArrowRight } from 'lucide-react';

interface StickyMobileCtaProps {
  onOrderClick: () => void;
}

export const StickyMobileCta: React.FC<StickyMobileCtaProps> = ({ onOrderClick }) => {
  return (
    <nav 
      aria-label="Action mobile rapide" 
      className="fixed bottom-0 left-0 right-0 z-30 sm:hidden bg-[#07111F]/95 backdrop-blur-xl border-t border-white/[0.12] px-4 py-2.5 shadow-2xl"
    >
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="flex items-center gap-2">
          <Flame className="w-4 h-4 text-amber-400 fill-amber-400 shrink-0 animate-pulse" />
          <span className="text-xs text-amber-300 font-bold uppercase tracking-wider">
            OFFRE DE LANCEMENT
          </span>
        </div>

        <button
          onClick={onOrderClick}
          className="inline-flex items-center justify-center gap-1.5 py-2.5 px-5 text-xs font-bold text-white bg-blue-600 active:bg-blue-700 rounded-xl shadow-lg shadow-blue-600/30 transition-all active:scale-[0.98] cursor-pointer whitespace-nowrap"
        >
          <span>JE VEUX LE PACK</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </nav>
  );
};
