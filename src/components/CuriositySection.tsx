import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

interface CuriositySectionProps {
  onDiscoverClick: () => void;
}

export const CuriositySection: React.FC<CuriositySectionProps> = ({ onDiscoverClick }) => {
  const domains = [
    'IA ?',
    'Business ?',
    'E-commerce ?',
    'Création de contenu ?',
    'Design ?',
    'Marketing ?',
    'Produits digitaux ?',
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#050713] border-t border-white/[0.06] relative overflow-hidden">
      
      {/* Background soft glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[250px] bg-gradient-to-r from-blue-600/10 via-indigo-600/10 to-violet-600/10 rounded-full blur-[100px] pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-[11px] font-bold text-blue-300 uppercase tracking-wider mb-4">
          <Sparkles className="w-3 h-3 text-amber-400" />
          <span>Et si tu changeais de perspective ?</span>
        </div>

        <h2 
          className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-6 max-w-3xl mx-auto"
          style={{ fontFamily: 'Syne, sans-serif' }}
        >
          ET SI TU N'AVAIS PLUS BESOIN DE CHERCHER TA PROCHAINE FORMATION ?
        </h2>

        {/* Visual Pill tags */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-2xl mx-auto mb-6">
          {domains.map((domain, idx) => (
            <span
              key={idx}
              className="px-3.5 py-1.5 rounded-xl bg-[#0D1B2A] border border-white/[0.08] text-xs sm:text-sm font-semibold text-slate-200 shadow-sm"
            >
              {domain}
            </span>
          ))}
        </div>

        <p className="text-base sm:text-xl font-medium text-blue-300 max-w-xl mx-auto mb-8">
          « Et si tout cela pouvait être réuni au même endroit ? »
        </p>

        <button
          onClick={onDiscoverClick}
          className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-lg shadow-blue-600/30 transition-all active:scale-[0.98] cursor-pointer"
        >
          <span>VOIR CE QUI SE CACHE DANS LE PACK</span>
          <ArrowRight className="w-4 h-4" />
        </button>

      </div>
    </section>
  );
};
