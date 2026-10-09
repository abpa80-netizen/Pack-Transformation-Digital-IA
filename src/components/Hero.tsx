import React from 'react';
import { ArrowRight, Compass, Sparkles, Flame, CheckCircle2, ShieldCheck, Layers, Cpu } from 'lucide-react';
import { ecosystemMockupImage, packMockupImage } from '../assets';

interface HeroProps {
  onPrimaryCta: () => void;
  onDiscoverCta: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onPrimaryCta, onDiscoverCta }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-20 bg-[#07111F]">
      {/* Background ambient lighting & cyber-grid effects */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-blue-600/20 via-indigo-600/15 to-violet-600/15 rounded-full blur-[140px] pointer-events-none -z-10" 
        aria-hidden="true" 
      />
      <div 
        className="absolute -top-10 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Proposition et Accroche Choc */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Wordmark brand & Badge Offre de lancement */}
            <div className="flex flex-wrap items-center gap-2.5 mb-4">
              <span className="text-xs font-mono font-bold tracking-widest text-blue-400 uppercase">
                VISION LIBRE DIGITAL LAB
              </span>
              <span className="text-white/20">·</span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider shadow-sm">
                <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400 animate-pulse" />
                <span>OFFRE DE LANCEMENT</span>
              </span>
            </div>

            {/* Hook Principal */}
            <h1 
              className="text-3xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.12] mb-4 text-balance"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              PLUS DE 50 FORMATIONS.<br />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-white bg-clip-text text-transparent">
                UN SEUL PACK.
              </span><br />
              TON PARCOURS DIGITAL COMMENCE ICI.
            </h1>

            {/* Sous-titre */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-3 max-w-xl">
              « IA, business, marketing, e-commerce, création de contenu, design, technologie et compétences digitales réunis dans un seul écosystème. »
            </p>

            {/* Accroche de curiosité + phrase de clarification */}
            <div className="mb-6 max-w-xl bg-blue-950/40 border border-blue-500/25 p-3.5 rounded-xl space-y-1.5">
              <p className="text-xs sm:text-sm text-blue-200 font-semibold italic">
                « Et si tu pouvais arrêter de chercher ta prochaine formation… et commencer simplement par le bon parcours ? »
              </p>
              <p className="text-xs text-slate-300 leading-relaxed">
                Ne cherche pas à tout apprendre. Choisis d'abord ton objectif. Découvre le parcours recommandé et explore les compétences qui correspondent à ton ambition.
              </p>
            </div>

            {/* Urgence & Disponibilité de lancement — Sans mention du prix dans le haut de page */}
            <div className="w-full max-w-xl p-4 sm:p-4.5 rounded-2xl bg-[#0D1B2A]/90 border border-blue-500/30 mb-6 shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between gap-3 pb-2.5 border-b border-white/[0.08]">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-lg bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold">
                  <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400 animate-pulse" />
                  <span>OFFRE DE LANCEMENT — 30 PREMIERS ACHETEURS</span>
                </div>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                  Accès Immédiat
                </span>
              </div>
              <p className="text-xs text-[#AAB7C4] leading-relaxed pt-2.5">
                Le tarif de lancement est volontairement accessible pour permettre aux premiers membres de rejoindre Vision Libre. Une fois les 30 premiers accès attribués, le tarif pourra évoluer.
              </p>
            </div>

            {/* Boutons d'Action (Exactement 2 niveaux de CTA demandés, sans prix répété) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onDiscoverCta}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-xl shadow-blue-600/30 transition-all active:scale-[0.98] cursor-pointer"
              >
                <Compass className="w-4 h-4 text-white" />
                <span>DÉCOUVRIR MON PARCOURS</span>
              </button>

              <button
                onClick={onPrimaryCta}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-200 bg-[#0D1B2A] hover:bg-white/[0.08] border border-white/[0.12] rounded-xl transition-colors cursor-pointer"
              >
                <span>COMMANDER LE PACK</span>
                <ArrowRight className="w-4 h-4 text-blue-400" />
              </button>
            </div>

          </div>

          {/* Right Column: Visual Mockup Haute Définition (Pas de prix répété ici) */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Ambient halo glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/25 via-indigo-600/15 to-violet-600/20 rounded-3xl blur-2xl -z-10" />

            <div className="relative w-full max-w-md rounded-2xl overflow-hidden border border-white/[0.15] bg-[#0D1B2A] shadow-2xl p-2.5 group">
              
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={ecosystemMockupImage || packMockupImage}
                  alt="Écosystème du Pack Transformation Digital & IA par Vision Libre Digital Lab"
                  width={640}
                  height={400}
                  loading="eager"
                  className="w-full h-auto object-cover rounded-xl transition-transform duration-300 group-hover:scale-[1.02]"
                />

                {/* Floating Insight Badge (Sans répétition de prix) */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-[#07111F]/90 backdrop-blur-md border border-white/[0.12] flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-blue-400" />
                    <span className="text-white font-semibold">+50 Formations & Masterclasses</span>
                  </div>
                  <span className="text-blue-300 font-semibold text-[11px] bg-blue-900/50 px-2 py-0.5 rounded border border-blue-400/30">
                    Licence MRR
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
