import React from 'react';
import { ArrowRight, MessageSquare, Flame } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface FinalCtaCompactProps {
  onOrderClick: () => void;
}

export const FinalCtaCompact: React.FC<FinalCtaCompactProps> = ({ onOrderClick }) => {
  return (
    <section className="py-16 sm:py-20 bg-[#07111F] border-t border-white/[0.08] text-center relative overflow-hidden">
      
      {/* Background glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-blue-600/15 via-indigo-600/15 to-violet-600/10 rounded-full blur-[120px] pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 
          className="text-2xl sm:text-4xl font-black text-white tracking-tight mb-4 text-balance"
          style={{ fontFamily: 'Syne, sans-serif' }}
        >
          TON PARCOURS DIGITAL PEUT COMMENCER AUJOURD'HUI.
        </h2>

        <p className="text-sm sm:text-base text-[#AAB7C4] max-w-xl mx-auto leading-relaxed mb-6">
          « Tu n'as pas besoin de tout apprendre en même temps.<br />
          Tu as simplement besoin de commencer par la bonne compétence. »
        </p>

        {/* Badges Inclusions & Urgence 30 premiers */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-5">
          <span className="px-3 py-1 rounded-full bg-blue-950/70 border border-blue-500/30 text-xs font-bold text-blue-300">
            +50 FORMATIONS
          </span>
          <span className="px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.1] text-xs font-medium text-slate-300">
            MRR SELON LICENCE
          </span>
          <span className="px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.1] text-xs font-medium text-slate-300">
            ACCÈS AU CONTENU DU PACK
          </span>
        </div>

        {/* Urgence 30 premiers acheteurs sans répétition de prix */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-bold mb-8 shadow-sm">
          <Flame className="w-4 h-4 text-amber-400 fill-amber-400 animate-pulse" />
          <span>🔥 OFFRE DE LANCEMENT — RÉSERVÉ AUX 30 PREMIERS ACHETEURS</span>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={onOrderClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-sm sm:text-base font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-xl shadow-blue-600/30 transition-all active:scale-[0.98] cursor-pointer"
          >
            <span>🚀 JE COMMENCE MA TRANSFORMATION</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-xs sm:text-sm font-semibold text-emerald-300 hover:text-white bg-[#0D1B2A] hover:bg-white/[0.06] border border-emerald-500/40 rounded-xl transition-colors cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>💬 COMMANDER SUR WHATSAPP</span>
          </a>
        </div>

      </div>
    </section>
  );
};
