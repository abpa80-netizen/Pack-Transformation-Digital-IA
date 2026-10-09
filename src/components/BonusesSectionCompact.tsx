import React, { useState } from 'react';
import { Gift, Sparkles, MessageSquare, CheckSquare, X, CheckCircle, ArrowRight } from 'lucide-react';

export const BonusesSectionCompact: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const realBonuses = [
    {
      title: 'Boîte à outils : +500 Prompts IA',
      description: 'Prompts optimisés et prêts à l’emploi pour ChatGPT et Midjourney.',
      icon: Sparkles,
    },
    {
      title: 'Scripts de Vente WhatsApp',
      description: 'Modèles de messages éprouvés pour échanger et convertir tes prospects.',
      icon: MessageSquare,
    },
    {
      title: 'Checklists d’Action & Fiches Mémos',
      description: 'Plans de mise en application rapide pour exécuter sans hésitation.',
      icon: CheckSquare,
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#07111F] border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="max-w-xl mx-auto mb-6">
          <h2 
            className="text-2xl sm:text-3xl font-extrabold text-white mb-2 tracking-tight"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            🎁 ET CE N'EST PAS TOUT...
          </h2>
          <p className="text-xs sm:text-sm text-[#AAB7C4]">
            Des ressources complémentaires incluses dans ton pack pour accélérer tes résultats.
          </p>
        </div>

        {/* 3 Cartes Compactes */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 max-w-4xl mx-auto mb-6">
          {realBonuses.map((res, idx) => {
            const Icon = res.icon;
            return (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-[#0D1B2A] border border-white/[0.08] hover:border-amber-500/30 transition-all text-center flex flex-col items-center justify-between"
              >
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-3">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-white mb-1 leading-snug">
                  {res.title}
                </h3>
                <p className="text-[11px] text-[#AAB7C4] leading-relaxed">
                  {res.description}
                </p>
              </div>
            );
          })}
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0D1B2A] hover:bg-white/[0.08] border border-amber-500/30 text-amber-300 hover:text-white text-xs sm:text-sm font-bold transition-all cursor-pointer shadow-sm"
        >
          <span>VOIR LES BONUS</span>
        </button>

      </div>

      {/* Modal Détails Bonus */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-md rounded-2xl bg-[#0D1B2A] border border-amber-500/40 p-6 sm:p-7 shadow-2xl text-slate-100 max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors cursor-pointer"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400 uppercase tracking-wider mb-1">
              <Gift className="w-4 h-4" />
              <span>Ressources Incluses</span>
            </div>

            <h3 
              className="text-xl font-bold text-white mb-3"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              Matériel d'Accélération Inclus
            </h3>

            <div className="space-y-3 text-xs text-slate-300 leading-relaxed mb-6">
              <div className="p-3.5 rounded-xl bg-[#07111F] border border-white/[0.06]">
                <strong className="text-white block mb-1">Boîte à outils : +500 Prompts IA</strong>
                <p className="text-[#AAB7C4]">
                  Une sélection de commandes et prompts rédigés pour générer du contenu percutant, des visuels artistiques et des argumentaires commerciaux.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#07111F] border border-white/[0.06]">
                <strong className="text-white block mb-1">Scripts de Vente WhatsApp</strong>
                <p className="text-[#AAB7C4]">
                  Modèles de conversation, réponses aux objections courantes et messages de clôture prêts à être adaptés pour tes échanges clients.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#07111F] border border-white/[0.06]">
                <strong className="text-white block mb-1">Checklists & Fiches Pratiques</strong>
                <p className="text-[#AAB7C4]">
                  Guides de démarrage en étapes concrètes pour appliquer directement les enseignements des masterclasses sans perdre de temps.
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsModalOpen(false)}
              className="w-full py-2.5 px-4 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] text-xs font-bold text-white transition-colors cursor-pointer"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
