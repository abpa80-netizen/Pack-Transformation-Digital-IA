import React, { useState } from 'react';
import { FAQ_DATA } from '../data/faq';
import { ChevronDown, Bot, MessageSquare } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface FaqSectionAccordionProps {
  onOpenChatbot: () => void;
}

export const FaqSectionAccordion: React.FC<FaqSectionAccordionProps> = ({ onOpenChatbot }) => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-14 sm:py-18 bg-[#050713] border-t border-white/[0.06]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête Compact */}
        <div className="text-center mb-8">
          <h2 
            className="text-2xl sm:text-3xl font-extrabold text-white mb-2 tracking-tight"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            QUESTIONS FRÉQUENTES
          </h2>
          <p className="text-xs sm:text-sm text-[#AAB7C4]">
            Réponses claires et directes sur les formations, la licence et la commande.
          </p>
        </div>

        {/* Accordion List (Strictement sans numérotation publique) */}
        <div className="space-y-2 mb-10">
          {FAQ_DATA.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="rounded-xl border border-white/[0.08] bg-[#0D1B2A] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full p-4 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/[0.02] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-xs sm:text-sm font-semibold text-white leading-snug">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-blue-400' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 text-xs text-[#AAB7C4] leading-relaxed border-t border-white/[0.04] pt-2.5">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bloc d'Assistance Supplémentaire demandé par le brief */}
        <div className="p-6 rounded-2xl bg-[#0D1B2A] border border-blue-500/30 text-center space-y-3.5">
          <div className="flex items-center justify-center gap-2 text-blue-400">
            <Bot className="w-5 h-5" />
            <span className="text-sm sm:text-base font-bold text-white tracking-wide">
              🤖 UNE QUESTION ?
            </span>
          </div>
          <p className="text-xs sm:text-sm text-[#AAB7C4] max-w-md mx-auto">
            « Notre assistant Vision Libre AI peut t'aider à trouver rapidement la réponse. »
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-1">
            <button
              onClick={onOpenChatbot}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all shadow-md shadow-blue-600/25 cursor-pointer"
            >
              <Bot className="w-4 h-4" />
              <span>POSER MA QUESTION</span>
            </button>
            <a
              href={getWhatsAppUrl("Bonjour Vision Libre, j'ai une question concernant le Pack Transformation Digital & IA.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#07111F] hover:bg-white/[0.06] border border-emerald-500/40 text-emerald-300 text-xs font-semibold transition-colors cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>💬 PARLER À L'ÉQUIPE</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
