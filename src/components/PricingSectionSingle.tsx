import React from 'react';
import { Flame, ArrowRight, MessageSquare, ShieldCheck, BookOpen, Repeat, Headset, Lock, Check, Sparkles } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface PricingSectionSingleProps {
  onOrderClick: () => void;
  onOpenLicense?: () => void;
}

export const PricingSectionSingle: React.FC<PricingSectionSingleProps> = ({ onOrderClick, onOpenLicense }) => {
  return (
    <section id="pricing" className="py-14 sm:py-20 bg-[#07111F] border-t border-white/[0.08] relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-blue-600/15 via-indigo-600/15 to-violet-600/10 rounded-full blur-[140px] pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Pricing Box */}
        <div className="rounded-3xl bg-[#0D1B2A] border-2 border-blue-500/50 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          {/* Top glowing bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-amber-400 to-indigo-500" />

          {/* Header */}
          <div className="text-center pb-6 border-b border-white/[0.08]">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
              <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400 animate-pulse" />
              <span>OFFRE DE LANCEMENT</span>
            </div>

            <h2 
              className="text-2xl sm:text-4xl font-black text-white tracking-tight"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              PACK TRANSFORMATION DIGITAL & IA
            </h2>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm text-blue-200 mt-2 italic max-w-lg mx-auto">
              « Les premiers membres peuvent rejoindre Vision Libre au tarif de lancement. »
            </p>
          </div>

          {/* Price Callout */}
          <div className="py-7 text-center">
            {/* Ancrage Valeur de Référence & Prix Dominant */}
            <div className="mb-2">
              <span className="text-xs font-mono font-medium text-slate-400 uppercase tracking-wider block mb-1.5">
                Valeur de référence du contenu
              </span>
              <div className="flex items-baseline justify-center gap-3 sm:gap-4">
                <span 
                  className="text-2xl sm:text-3xl font-extrabold text-slate-400 line-through decoration-rose-500/80 decoration-2 font-mono"
                  style={{ textDecoration: 'line-through' }}
                >
                  990 DH
                </span>
                <span className="text-5xl sm:text-6xl font-black text-white font-mono tracking-tight">
                  249 DH
                </span>
              </div>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-emerald-400 font-bold uppercase tracking-wider mt-2">
              <span>Paiement unique</span>
              <span className="text-white/20">·</span>
              <span>Accès à vie</span>
              <span className="text-white/20">·</span>
              <span>Pas d'abonnement</span>
              <span className="text-white/20">·</span>
              <span className="text-blue-300">Licence MRR incluse</span>
            </div>

            {/* Urgency 30 premiers acheteurs */}
            <div className="mt-5 p-4 rounded-2xl bg-amber-950/40 border border-amber-500/30 max-w-md mx-auto text-left flex items-start gap-3">
              <Flame className="w-4 h-4 text-amber-400 fill-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-xs font-bold text-amber-300 uppercase block mb-0.5">
                  🔥 TARIF DE LANCEMENT — RÉSERVÉ AUX 30 PREMIERS ACHETEURS
                </strong>
                <p className="text-[11px] text-[#AAB7C4] leading-relaxed">
                  Le tarif de lancement est volontairement accessible pour permettre aux premiers membres de rejoindre Vision Libre. Une fois les 30 premiers accès attribués, le tarif pourra évoluer.
                </p>
              </div>
            </div>
          </div>

          {/* Ancrage de Valeur : Un écosystème de compétences digitales */}
          <div className="py-5 border-y border-white/[0.08] max-w-lg mx-auto">
            <div className="text-center mb-4">
              <span className="text-[11px] font-mono text-blue-400 font-bold uppercase tracking-wider block mb-1">
                Tout ce qui est inclus
              </span>
              <h3 
                className="text-sm sm:text-base font-bold text-white uppercase tracking-wide"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                UN ÉCOSYSTÈME DE COMPÉTENCES DIGITALES
              </h3>
            </div>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5 text-slate-200">
                <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3" />
                </div>
                <div>
                  <strong>Plusieurs domaines d'expertise :</strong> IA, business, e-commerce, marketing digital, création de contenu, tech & design.
                </div>
              </div>

              <div className="flex items-start gap-2.5 text-slate-200">
                <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3" />
                </div>
                <div>
                  <strong>+50 formations et masterclasses :</strong> Des modules pratiques axés sur des compétences opérationnelles concrètes.
                </div>
              </div>

              <div className="flex items-start gap-2.5 text-slate-200">
                <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3" />
                </div>
                <div>
                  <strong>Parcours par objectif :</strong> Choisis ton ambition prioritaire pour progresser sans te disperser.
                </div>
              </div>

              <div className="flex items-start gap-2.5 text-slate-200">
                <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3" />
                </div>
                <div>
                  <strong>Ressources complémentaires incluses :</strong> Bibliothèque de prompts IA testés, fiches mémos et scripts d'application.
                </div>
              </div>

              <div className="flex items-start gap-2.5 text-slate-200">
                <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3" />
                </div>
                <div>
                  <strong>Accès au contenu prévu dans l'offre :</strong> Accès immédiat et complet aux modules et masterclasses de la formation.
                </div>
              </div>

              <div className="flex items-start gap-2.5 text-slate-200">
                <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3" />
                </div>
                <div>
                  <strong>Licence MRR selon les conditions officielles :</strong> Licence Master Resell Rights incluse régie par les termes du document officiel.
                  {onOpenLicense && (
                    <button
                      type="button"
                      onClick={onOpenLicense}
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-300 hover:text-white underline underline-offset-2 ml-1.5 cursor-pointer"
                    >
                      Consulter la licence
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-6 space-y-3 max-w-md mx-auto">
            <button
              onClick={onOrderClick}
              className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 text-sm sm:text-base font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-xl shadow-blue-600/30 transition-all active:scale-[0.98] cursor-pointer"
            >
              <span>🚀 JE VEUX PROFITER DU TARIF</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 text-xs sm:text-sm font-semibold text-emerald-300 hover:text-white bg-[#07111F] hover:bg-white/[0.06] border border-emerald-500/40 rounded-xl transition-colors cursor-pointer text-center"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>💬 COMMANDER SUR WHATSAPP</span>
            </a>

            {/* Micro-réassurance demandée */}
            <p className="text-center text-[11px] text-[#AAB7C4] pt-1">
              Accès au Pack Transformation Digital & IA · +50 formations · MRR selon licence
            </p>
          </div>

          {/* Micro-rassurances autour du bouton d'achat */}
          <div className="mt-6 pt-5 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-[11px] text-slate-300">
            <div className="p-2 rounded-lg bg-white/[0.02]">
              <Lock className="w-3.5 h-3.5 text-blue-400 mx-auto mb-1" />
              <span>🔒 Paiement sécurisé</span>
            </div>
            <div className="p-2 rounded-lg bg-white/[0.02]">
              <BookOpen className="w-3.5 h-3.5 text-emerald-400 mx-auto mb-1" />
              <span>📚 +50 formations</span>
            </div>
            <div className="p-2 rounded-lg bg-white/[0.02]">
              <Repeat className="w-3.5 h-3.5 text-amber-400 mx-auto mb-1" />
              <span>🔁 MRR selon licence</span>
            </div>
            <div className="p-2 rounded-lg bg-white/[0.02]">
              <Headset className="w-3.5 h-3.5 text-purple-400 mx-auto mb-1" />
              <span>💬 Assistance disponible</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
