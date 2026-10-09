import React, { useState, useRef } from 'react';
import { OBJECTIVES_DATA } from '../data/objectives';
import { ObjectivePathway } from '../types';
import { 
  X, 
  ArrowRight, 
  ArrowDown, 
  ChevronLeft, 
  ChevronRight,
  BookOpen,
  CheckCircle2
} from 'lucide-react';

interface ObjectiveSelectorProps {
  onSelectObjective?: (title: string) => void;
}

export const ObjectiveSelector: React.FC<ObjectiveSelectorProps> = () => {
  const [activeObjective, setActiveObjective] = useState<ObjectivePathway | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="objectifs" className="py-14 sm:py-20 bg-[#07111F] border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête Compact & Orienté Bénéfice */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 sm:mb-10 gap-4">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-bold tracking-widest text-blue-400 uppercase block mb-1.5">
              PARCOURS RECOMMANDÉS
            </span>
            <h2 
              className="text-2xl sm:text-4xl font-extrabold text-white mb-2 tracking-tight"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              QUEL EST TON OBJECTIF ?
            </h2>
            <p className="text-xs sm:text-sm text-blue-200/90 font-medium italic mb-1.5">
              « Ne cherche pas à tout apprendre. Commence par ce dont tu as réellement besoin. »
            </p>
            <p className="text-xs text-[#AAB7C4]">
              Choisis ton ambition prioritaire pour découvrir la progression étape par étape.
            </p>
          </div>

          {/* Contrôles de navigation Desktop */}
          <div className="hidden sm:flex items-center gap-2 self-end">
            <button
              onClick={() => scroll('left')}
              className="p-2.5 rounded-xl bg-[#0D1B2A] border border-white/[0.1] hover:border-blue-500/50 text-slate-300 hover:text-white transition-all cursor-pointer shadow-md active:scale-95"
              aria-label="Faire défiler vers la gauche"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2.5 rounded-xl bg-[#0D1B2A] border border-white/[0.1] hover:border-blue-500/50 text-slate-300 hover:text-white transition-all cursor-pointer shadow-md active:scale-95"
              aria-label="Faire défiler vers la droite"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel des 8 Cartes IMAGE (Aucune mention de formations, de nombre ou de bonus) */}
        <div 
          ref={carouselRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0 scroll-smooth"
        >
          {OBJECTIVES_DATA.map((obj) => (
            <div
              key={obj.id}
              onClick={() => setActiveObjective(obj)}
              className="w-[78vw] sm:w-[320px] md:w-[290px] lg:w-[285px] shrink-0 snap-start group rounded-2xl bg-[#0D1B2A] border border-white/[0.08] hover:border-blue-500/50 transition-all duration-300 cursor-pointer shadow-xl flex flex-col overflow-hidden hover:-translate-y-1"
            >
              {/* Image Cover 16:10 non déformée avec overlay gradient */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                {obj.imageUrl ? (
                  <img 
                    src={obj.imageUrl} 
                    alt={`Illustration de l'objectif : ${obj.title} - Pack Vision Libre`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-blue-900/40 to-[#0D1B2A] flex items-center justify-center">
                    <BookOpen className="w-8 h-8 text-blue-400" />
                  </div>
                )}

                {/* Gradient de fondu vers le bas de la carte */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A] via-[#0D1B2A]/30 to-transparent" />

                {/* Badge thématique au-dessus de l'image */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full bg-[#07111F]/85 backdrop-blur-md border border-white/[0.15] text-[10px] font-bold text-blue-300 uppercase tracking-wider shadow-sm">
                    {obj.badge}
                  </span>
                </div>
              </div>

              {/* Contenu textuel de la carte */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 
                    className="text-sm sm:text-base font-extrabold text-white group-hover:text-blue-300 transition-colors leading-snug mb-1.5"
                    style={{ fontFamily: 'Syne, sans-serif' }}
                  >
                    {obj.title}
                  </h3>
                  <p className="text-xs text-[#AAB7C4] line-clamp-2 leading-relaxed">
                    « {obj.shortPhrase} »
                  </p>
                </div>

                {/* Bas de carte : Bouton d'action direct vers le parcours */}
                <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs">
                  <span className="text-[11px] text-slate-400 font-medium">
                    Parcours par étapes
                  </span>
                  <span className="text-[11px] font-bold text-blue-400 group-hover:text-blue-300 inline-flex items-center gap-1 transition-colors">
                    <span>Voir parcours</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Indicateur visuel discret sur mobile pour guider le scroll horizontal */}
        <div className="flex sm:hidden justify-center items-center gap-1.5 mt-3 text-[11px] text-slate-400">
          <span>👈 Glisser pour découvrir les 8 parcours 👉</span>
        </div>

      </div>

      {/* MODAL DU PARCOURS PROGRESSIF EN ÉTAPES (Sans liste de formations ni bonus) */}
      {activeObjective && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-lg rounded-2xl bg-[#0D1B2A] border border-blue-500/40 p-5 sm:p-7 shadow-2xl text-slate-100 max-h-[92vh] overflow-y-auto">
            
            {/* Bouton de Fermeture */}
            <button
              onClick={() => setActiveObjective(null)}
              className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors cursor-pointer"
              aria-label="Fermer le parcours"
            >
              <X className="w-5 h-5" />
            </button>

            {/* En-tête de l'Objectif */}
            <div className="mb-5 pr-8">
              <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider block mb-1">
                {activeObjective.badge}
              </span>
              <h3 
                className="text-xl sm:text-2xl font-black text-white mb-1"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                {activeObjective.title}
              </h3>
              <p className="text-xs sm:text-sm text-blue-200/90 font-medium italic mb-2">
                « {activeObjective.shortPhrase} »
              </p>
              <p className="text-xs text-[#AAB7C4] leading-relaxed">
                {activeObjective.summary}
              </p>
            </div>

            {/* Parcours progressif étape par étape */}
            <div className="my-5 p-4 rounded-xl bg-[#07111F] border border-white/[0.06]">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-3.5">
                Progression recommandée :
              </span>
              <div className="space-y-3">
                {activeObjective.steps.map((step, sIdx) => (
                  <React.Fragment key={step.stepNumber}>
                    <div className="p-3.5 rounded-xl bg-[#0D1B2A] border border-white/[0.06] hover:border-blue-500/30 transition-colors">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2 py-0.5 rounded-md bg-blue-600/20 text-blue-400 font-mono text-[11px] font-bold">
                          ÉTAPE {step.stepNumber}
                        </span>
                        <h4 className="text-xs sm:text-sm font-bold text-white">
                          {step.title}
                        </h4>
                      </div>
                      <p className="text-xs text-slate-300 pl-1 mt-1 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                    {sIdx < activeObjective.steps.length - 1 && (
                      <div className="flex justify-center text-blue-400/50 py-0.5">
                        <ArrowDown className="w-3.5 h-3.5" />
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Note informative pour finance */}
            {activeObjective.isFinance && (
              <div className="mb-4 p-3 rounded-lg bg-amber-950/40 border border-amber-500/30 text-[11px] text-amber-200/90 leading-snug">
                Les contenus financiers sont fournis à des fins purement éducatives et ne constituent pas un conseil en investissement.
              </div>
            )}

            {/* Bouton de Fermeture simple */}
            <div className="pt-3 border-t border-white/[0.08] flex items-center justify-end">
              <button
                onClick={() => setActiveObjective(null)}
                className="w-full py-3 px-4 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] text-xs font-bold text-slate-200 transition-colors cursor-pointer text-center"
              >
                FERMER
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
