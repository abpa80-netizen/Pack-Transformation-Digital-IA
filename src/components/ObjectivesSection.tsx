import React, { useState } from 'react';
import { OBJECTIVES_DATA } from '../data/objectives';
import { ObjectivePathway } from '../types';
import { 
  Bot, Briefcase, BookOpen, ShoppingCart, Smartphone, Palette, Code, DollarSign,
  Compass, X, ArrowRight, ArrowDown, Sparkles, CheckCircle, AlertTriangle 
} from 'lucide-react';

interface ObjectivesSectionProps {
  onSelectObjective: (title: string) => void;
}

export const ObjectivesSection: React.FC<ObjectivesSectionProps> = ({ onSelectObjective }) => {
  const [activeObjective, setActiveObjective] = useState<ObjectivePathway | null>(null);
  const [isGuidedHelperOpen, setIsGuidedHelperOpen] = useState(false);
  const [helperSelectedId, setHelperSelectedId] = useState<string | null>(null);

  const iconMap: Record<string, React.ElementType> = {
    'ia-automatisation': Bot,
    'business-digital': Briefcase,
    'ebooks-infoproduits': BookOpen,
    'ecommerce': ShoppingCart,
    'contenu-reseaux': Smartphone,
    'design-uiux': Palette,
    'code-technologie': Code,
    'finance-actifs': DollarSign,
  };

  const helperQuestions = [
    { id: 'ia-automatisation', label: 'Gagner en productivité et créer des services avec l\'IA' },
    { id: 'business-digital', label: 'Créer un business digital rentable de A à Z' },
    { id: 'ebooks-infoproduits', label: 'Concevoir et vendre des produits digitaux (e-books, guides)' },
    { id: 'ecommerce', label: 'Créer et développer une boutique e-commerce (Shopify)' },
    { id: 'contenu-reseaux', label: 'Développer une audience et monétiser mes réseaux sociaux' },
    { id: 'design-uiux', label: 'Apprendre le graphisme, Canva, Photoshop et l\'UI/UX' },
    { id: 'code-technologie', label: 'Apprendre le code (Python, React), les apps et la sécurité' },
    { id: 'finance-actifs', label: 'Comprendre la finance, le trading et la crypto' },
  ];

  const currentHelperObjective = OBJECTIVES_DATA.find((o) => o.id === helperSelectedId);

  return (
    <section id="objectifs" className="py-14 sm:py-18 bg-[#07111F] border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête Compact */}
        <div className="max-w-2xl mx-auto text-center mb-6">
          <span className="text-xs font-mono font-bold tracking-widest text-blue-400 uppercase block mb-1.5">
            ORIENTATION PERSONNALISÉE
          </span>
          <h2 
            className="text-2xl sm:text-4xl font-extrabold text-white mb-2 tracking-tight"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            TU VEUX ALLER OÙ ?
          </h2>
          <p className="text-xs sm:text-sm text-[#AAB7C4]">
            Choisis ton objectif pour voir le parcours recommandé et les formations adaptées.
          </p>
        </div>

        {/* Bouton d'Aide Interactive "Je ne sais pas par où commencer" */}
        <div className="text-center mb-8">
          <button
            onClick={() => setIsGuidedHelperOpen(true)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-blue-600/20 hover:from-blue-600/40 hover:to-indigo-600/40 border border-blue-500/40 text-blue-300 hover:text-white text-xs font-bold transition-all shadow-sm cursor-pointer"
          >
            <Compass className="w-4 h-4 text-blue-400 animate-spin-slow" />
            <span>« Je ne sais pas par où commencer » — AIDE-MOI À CHOISIR</span>
          </button>
        </div>

        {/* 8 Cartes Visuelles Compactes (Sans numérotation publique) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto">
          {OBJECTIVES_DATA.map((obj) => {
            const Icon = iconMap[obj.id] || Bot;
            return (
              <div
                key={obj.id}
                className="p-4 rounded-2xl bg-[#0D1B2A] border border-white/[0.08] hover:border-blue-500/50 hover:bg-[#122338] transition-all flex flex-col justify-between group shadow-sm"
              >
                <div>
                  <div className="w-8 h-8 rounded-xl bg-blue-950/70 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-3 group-hover:scale-105 transition-transform">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 
                    className="text-xs sm:text-sm font-bold text-white group-hover:text-blue-300 transition-colors leading-snug mb-1"
                    style={{ fontFamily: 'Syne, sans-serif' }}
                  >
                    {obj.title}
                  </h3>
                  <p className="text-[11px] text-[#AAB7C4] leading-relaxed line-clamp-2">
                    {obj.shortPhrase}
                  </p>
                </div>

                <button
                  onClick={() => setActiveObjective(obj)}
                  className="mt-4 w-full py-1.5 px-3 rounded-lg bg-blue-600/20 hover:bg-blue-600 text-blue-300 hover:text-white border border-blue-500/30 text-[11px] font-bold transition-all cursor-pointer text-center"
                >
                  Découvrir
                </button>
              </div>
            );
          })}
        </div>

      </div>

      {/* Modal Détail Objectif */}
      {activeObjective && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-lg rounded-2xl bg-[#0D1B2A] border border-blue-500/40 p-6 sm:p-7 shadow-2xl text-slate-100 max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setActiveObjective(null)}
              className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors cursor-pointer"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider block mb-1">
              Objectif Stratégique
            </span>
            <h3 
              className="text-xl sm:text-2xl font-black text-white"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              {activeObjective.title}
            </h3>
            <p className="text-xs text-[#AAB7C4] mt-2 leading-relaxed">
              {activeObjective.summary}
            </p>

            {/* Parcours Recommandé avec flèches ↓ */}
            <div className="my-5 p-4 rounded-xl bg-[#07111F] border border-white/[0.06]">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-3">
                Parcours recommandé étape par étape :
              </span>
              <div className="space-y-1.5">
                {activeObjective.steps.map((step, sIdx) => (
                  <React.Fragment key={sIdx}>
                    <div className="p-2.5 rounded-lg bg-[#0D1B2A] border border-white/[0.06] text-xs font-medium text-slate-200 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                      <span>{typeof step === 'string' ? step : step.title}</span>
                    </div>
                    {sIdx < activeObjective.steps.length - 1 && (
                      <div className="flex justify-center text-blue-400/60 py-0.5">
                        <ArrowDown className="w-3.5 h-3.5" />
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {activeObjective.isFinance && (
              <div className="mb-5 p-3 rounded-lg bg-amber-950/40 border border-amber-500/30 text-[11px] text-amber-200/90 leading-snug flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Les contenus financiers sont fournis à titre éducatif et ne constituent pas des conseils financiers. Les marchés comportent des risques.</span>
              </div>
            )}

            <button
              onClick={() => {
                const title = activeObjective.title;
                setActiveObjective(null);
                onSelectObjective(title);
              }}
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-lg shadow-blue-600/30 transition-all cursor-pointer"
            >
              <span>🚀 JE VEUX CE PARCOURS</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>
        </div>
      )}

      {/* Mini-Interface Interactive "Aide-moi à choisir" */}
      {isGuidedHelperOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-xl rounded-2xl bg-[#0D1B2A] border border-blue-500/40 p-6 sm:p-8 shadow-2xl text-slate-100 max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => {
                setIsGuidedHelperOpen(false);
                setHelperSelectedId(null);
              }}
              className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors cursor-pointer"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono font-bold text-blue-400 uppercase tracking-wider mb-1">
              <Compass className="w-4 h-4" />
              <span>Boussole d'apprentissage</span>
            </div>
            <h3 
              className="text-xl sm:text-2xl font-black text-white mb-2"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              Quel est ton objectif prioritaire ?
            </h3>
            <p className="text-xs text-[#AAB7C4] mb-5">
              Sélectionne ton ambition principale pour obtenir immédiatement la feuille de route recommandée.
            </p>

            {/* Questions list */}
            <div className="space-y-2 mb-6">
              {helperQuestions.map((q) => {
                const isSelected = helperSelectedId === q.id;
                return (
                  <button
                    key={q.id}
                    onClick={() => setHelperSelectedId(q.id)}
                    className={`w-full p-3 rounded-xl border text-left text-xs font-semibold transition-all cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? 'bg-blue-600/30 border-blue-400 text-white shadow-md'
                        : 'bg-[#07111F] border-white/[0.08] text-slate-300 hover:bg-white/[0.04]'
                    }`}
                  >
                    <span>→ {q.label}</span>
                    {isSelected && <CheckCircle className="w-4 h-4 text-blue-400 shrink-0" />}
                  </button>
                );
              })}
            </div>

            {/* Display recommended pathway if selected */}
            {currentHelperObjective && (
              <div className="p-4 rounded-xl bg-[#07111F] border border-blue-500/30 mb-6 animate-in fade-in duration-150">
                <span className="text-[11px] font-mono font-bold text-blue-400 uppercase tracking-wider block mb-2">
                  TON PARCOURS RECOMMANDÉ :
                </span>
                <h4 className="text-sm font-bold text-white mb-3">
                  {currentHelperObjective.title}
                </h4>
                <div className="space-y-1.5 mb-4">
                  {currentHelperObjective.steps.map((st, idx) => (
                    <div key={idx} className="p-2 rounded-lg bg-[#0D1B2A] text-xs text-slate-200 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>{typeof st === 'string' ? st : st.title}</span>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => {
                    const title = currentHelperObjective.title;
                    setIsGuidedHelperOpen(false);
                    setHelperSelectedId(null);
                    onSelectObjective(title);
                  }}
                  className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-xs font-bold text-white transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Démarrer ce parcours avec le pack complet</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}

          </div>
        </div>
      )}

    </section>
  );
};
