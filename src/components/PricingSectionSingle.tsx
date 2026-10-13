import React from 'react';
import { ArrowRight, MessageSquare, BookOpen, Headset, Check } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface PricingSectionSingleProps {
  onOrderClick: () => void;
}

export const PricingSectionSingle: React.FC<PricingSectionSingleProps> = ({ onOrderClick }) => (
  <section id="pricing" className="py-14 sm:py-20 bg-[#07111F] border-t border-white/[0.08] relative overflow-hidden">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="rounded-3xl bg-[#0D1B2A] border-2 border-blue-500/50 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-amber-400 to-indigo-500" />
        <div className="text-center pb-6 border-b border-white/[0.08]">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
            OFFRE PROMOTIONNELLE
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
            PACK TRANSFORMATION DIGITAL & IA
          </h2>
          <p className="text-xs sm:text-sm text-blue-200 mt-2 max-w-lg mx-auto">
            Un paiement unique pour accéder aux ressources présentées dans cette offre.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 mt-3 max-w-lg mx-auto leading-relaxed">
            Tu n’as pas besoin de tout maîtriser aujourd’hui. Choisis une première compétence, suis ton parcours et transforme tes idées en actions concrètes.
          </p>
        </div>
        <div className="py-7 text-center">
          <span className="text-xs font-mono font-medium text-slate-400 uppercase tracking-wider block mb-1.5">Prix habituel</span>
          <div className="flex items-baseline justify-center gap-3 sm:gap-4">
            <span className="text-2xl sm:text-3xl font-extrabold text-slate-400 line-through decoration-rose-500/80 decoration-2 font-mono">109 €</span>
            <span className="text-5xl sm:text-6xl font-black text-white font-mono tracking-tight">15 €</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-emerald-400 font-bold uppercase tracking-wider mt-3">
            <span>Paiement unique</span><span className="text-white/20">·</span><span>Pas d'abonnement</span>
          </div>
          <p className="text-xs text-slate-300 mt-4 max-w-md mx-auto leading-relaxed">
            Le plus difficile est souvent de commencer. Profite du tarif promotionnel actuel et avance à ton rythme, une compétence après l’autre.
          </p>
        </div>
        <div className="py-5 border-y border-white/[0.08] max-w-lg mx-auto">
          <div className="text-center mb-4">
            <span className="text-[11px] font-mono text-blue-400 font-bold uppercase tracking-wider block mb-1">Ce que comprend l'offre</span>
            <h3 className="text-sm sm:text-base font-bold text-white uppercase tracking-wide" style={{ fontFamily: 'Syne, sans-serif' }}>
              UN ÉCOSYSTÈME DE COMPÉTENCES DIGITALES
            </h3>
          </div>
          <div className="space-y-3 text-xs sm:text-sm">
            <div className="flex items-start gap-2.5 text-slate-200"><Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" /><div><strong>Plusieurs domaines :</strong> IA, business, e-commerce, marketing digital, création de contenu, tech & design.</div></div>
            <div className="flex items-start gap-2.5 text-slate-200"><Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" /><div><strong>+50 formations et masterclasses :</strong> des modules pratiques consacrés à des compétences numériques.</div></div>
            <div className="flex items-start gap-2.5 text-slate-200"><Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" /><div><strong>Parcours par objectif :</strong> repère les modules en fonction de tes priorités.</div></div>
            <div className="flex items-start gap-2.5 text-slate-200"><Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" /><div><strong>Ressources complémentaires :</strong> prompts IA, fiches mémo et scripts d'application, selon le contenu fourni dans le pack.</div></div>
          </div>
        </div>
        <div className="pt-6 space-y-3 max-w-md mx-auto">
          <button onClick={onOrderClick} className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 text-sm sm:text-base font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-xl shadow-blue-600/30 transition-all active:scale-[0.98] cursor-pointer">
            <span>JE PASSE À L’ACTION — 15 €</span><ArrowRight className="w-4 h-4" />
          </button>
          <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 text-xs sm:text-sm font-semibold text-emerald-300 hover:text-white bg-[#07111F] hover:bg-white/[0.06] border border-emerald-500/40 rounded-xl transition-colors cursor-pointer text-center">
            <MessageSquare className="w-4 h-4 text-emerald-400" /><span>COMMANDER SUR WHATSAPP</span>
          </a>
          <p className="text-center text-[11px] text-[#AAB7C4] pt-1">Paiement unique · sans abonnement · accès après confirmation de la commande</p>
        </div>
        <div className="mt-6 pt-5 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-3 gap-2 text-center text-[11px] text-slate-300">
          <div className="p-2 rounded-lg bg-white/[0.02]"><Check className="w-3.5 h-3.5 text-blue-400 mx-auto mb-1" /><span>Commande accompagnée</span></div>
          <div className="p-2 rounded-lg bg-white/[0.02]"><BookOpen className="w-3.5 h-3.5 text-emerald-400 mx-auto mb-1" /><span>+50 formations</span></div>
          <div className="p-2 rounded-lg bg-white/[0.02]"><Headset className="w-3.5 h-3.5 text-purple-400 mx-auto mb-1" /><span>Assistance disponible</span></div>
        </div>
      </div>
    </div>
  </section>
);
