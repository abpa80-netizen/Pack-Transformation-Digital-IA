import React, { useState } from 'react';
import { PILLARS_DATA } from '../data/pillars';
import { Pillar, PillarCategory } from '../types';
import { Cpu, ShoppingBag, Target, TrendingUp, Layers, X, ArrowRight, BookOpen, AlertTriangle } from 'lucide-react';

interface PillarsShowcaseProps {
  onOpenCatalogueWithPillar: (pillarId: PillarCategory) => void;
}

export const PillarsShowcase: React.FC<PillarsShowcaseProps> = ({ onOpenCatalogueWithPillar }) => {
  const [activePillar, setActivePillar] = useState<Pillar | null>(null);
  const [showFinanceModal, setShowFinanceModal] = useState(false);

  const iconMap: Record<string, React.ElementType> = {
    Cpu,
    ShoppingBag,
    Target,
    TrendingUp,
    Layers,
  };

  return (
    <section id="poles" className="py-14 bg-[#07111F] border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête Compact */}
        <div className="max-w-2xl mx-auto text-center mb-8">
          <h2 
            className="text-2xl sm:text-3xl font-extrabold text-white mb-2 tracking-tight"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            LE PACK EN UN COUP D'ŒIL
          </h2>
          <p className="text-xs sm:text-sm text-[#AAB7C4]">
            5 grands domaines de compétences digitales réunis dans un pack unique.
          </p>
        </div>

        {/* 5 Cartes Compactes (Sans numéros publics) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 max-w-5xl mx-auto mb-6">
          {PILLARS_DATA.map((pillar) => {
            const Icon = iconMap[pillar.iconName] || Layers;
            return (
              <div
                key={pillar.id}
                className="p-4 rounded-xl bg-[#0D1B2A] border border-white/[0.08] hover:border-blue-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-blue-950/60 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-3">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 
                    className="text-xs sm:text-sm font-bold text-white mb-1 leading-snug"
                    style={{ fontFamily: 'Syne, sans-serif' }}
                  >
                    {pillar.title}
                  </h3>
                  <p className="text-[11px] text-[#AAB7C4] leading-relaxed mb-3">
                    {pillar.shortDescription}
                  </p>
                </div>

                <button
                  onClick={() => setActivePillar(pillar)}
                  className="w-full py-1.5 px-3 rounded-lg bg-blue-600/20 hover:bg-blue-600 text-blue-300 hover:text-white border border-blue-500/30 text-[11px] font-bold transition-all cursor-pointer text-center"
                >
                  EXPLORER
                </button>
              </div>
            );
          })}
        </div>

        {/* Mention finance / trading discrète avec bouton "EN SAVOIR PLUS" */}
        <div className="max-w-3xl mx-auto text-center text-[11px] text-[#AAB7C4] flex flex-wrap items-center justify-center gap-2 pt-2">
          <span>
            Les contenus financiers sont fournis à titre éducatif et ne constituent pas des conseils financiers. Les marchés comportent des risques.
          </span>
          <button
            onClick={() => setShowFinanceModal(true)}
            className="text-amber-400 hover:underline font-semibold cursor-pointer whitespace-nowrap"
          >
            EN SAVOIR PLUS
          </button>
        </div>

      </div>

      {/* Modal Détails Pôle */}
      {activePillar && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-lg rounded-2xl bg-[#0D1B2A] border border-blue-500/40 p-6 sm:p-7 shadow-2xl text-slate-100 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActivePillar(null)}
              className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors cursor-pointer"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider block mb-1">
              Domaine de Compétence
            </span>
            <h3 
              className="text-xl sm:text-2xl font-black text-white mb-3"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              {activePillar.title}
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed mb-5">
              {activePillar.shortDescription} Retrouvez des masterclasses pratiques et concrètes conçues pour une mise en application immédiate.
            </p>

            <div className="p-4 rounded-xl bg-[#07111F] border border-white/[0.06] mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2.5">
                Exemples de formations incluses :
              </span>
              <ul className="space-y-1.5 text-xs text-slate-200">
                {activePillar.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => {
                const pId = activePillar.id;
                setActivePillar(null);
                onOpenCatalogueWithPillar(pId);
              }}
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-lg transition-all cursor-pointer"
            >
              <span>Voir le catalogue pour ce domaine</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Modal Mention Finance Complète */}
      {showFinanceModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-md rounded-2xl bg-[#0D1B2A] border border-amber-500/40 p-6 shadow-2xl text-slate-100">
            <button
              onClick={() => setShowFinanceModal(false)}
              className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors cursor-pointer"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2.5 text-amber-400 mb-3">
              <AlertTriangle className="w-5 h-5" />
              <h3 className="text-base font-bold text-white">Mentions Légales Finance & Trading</h3>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Les contenus relatifs à la finance, aux cryptomonnaies, à la bourse et au trading sont fournis exclusivement à titre informatif et pédagogique. Ils ne constituent en aucun cas des conseils en investissement, des incitations ou des recommandations financières.
            </p>
            <p className="text-xs text-slate-300 leading-relaxed mb-5">
              Le trading et les marchés d'actifs financiers comportent un risque élevé de perte en capital. Les performances passées ne préjugent pas des performances futures. Vous demeurez entièrement responsable de vos décisions de gestion.
            </p>

            <button
              onClick={() => setShowFinanceModal(false)}
              className="w-full py-2.5 px-4 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] text-xs font-bold text-white transition-colors cursor-pointer"
            >
              J'ai compris et je ferme
            </button>
          </div>
        </div>
      )}

    </section>
  );
};
