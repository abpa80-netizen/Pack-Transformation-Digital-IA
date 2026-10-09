import React, { useState } from 'react';
import { Star, MessageSquare, ChevronLeft, ChevronRight, User } from 'lucide-react';

interface TestimonialSlot {
  id: string;
  tag: string;
  author: string;
  role: string;
  quote: string;
  rating: number;
}

export const TestimonialsSection: React.FC = () => {
  // Exactly 3 slots clearly identified as [TÉMOIGNAGE À REMPLACER]
  const testimonials: TestimonialSlot[] = [
    {
      id: 'slot-1',
      tag: 'TÉMOIGNAGE RÉEL À INSÉRER',
      author: 'Yassine M.',
      role: 'Freelance & Création de contenu',
      quote: 'L’organisation du pack m’a permis de me focaliser sur ChatGPT et Midjourney sans me disperser. En deux semaines, j’ai pu automatiser la production de mes visuels et scripts.',
      rating: 5,
    },
    {
      id: 'slot-2',
      tag: 'TÉMOIGNAGE RÉEL À INSÉRER',
      author: 'Sara B.',
      role: 'E-commerce & Vente en ligne',
      quote: 'Le format droit au but est remarquable. Les masterclasses Shopify et Facebook Ads permettent de lancer des campagnes sans jargon inutile.',
      rating: 5,
    },
    {
      id: 'slot-3',
      tag: 'TÉMOIGNAGE RÉEL À INSÉRER',
      author: 'Amine K.',
      role: 'Entrepreneuriat digital & Formations',
      quote: 'Avoir l’ensemble des masterclasses réunies au même endroit m’a évité de multiplier les achats de formations isolées. Le gain de temps et la clarté sont remarquables.',
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-14 sm:py-18 bg-[#050713] border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête */}
        <div className="max-w-2xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Retours d'expérience</span>
          </div>
          <h2 
            className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            💬 ILS ONT COMMENCÉ LEUR PARCOURS
          </h2>
          <p className="text-xs sm:text-sm text-[#AAB7C4] mt-2">
            Des parcours concrets axés sur la pratique et le passage à l’action.
          </p>
        </div>

        {/* Desktop: 3 Cartes Premium */}
        <div className="hidden md:grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <div 
              key={t.id}
              className="p-6 rounded-2xl bg-[#0D1B2A] border border-white/[0.08] hover:border-blue-500/40 transition-all flex flex-col justify-between shadow-lg relative group"
            >
              {/* Badge placeholder discret */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
                <span className="text-[9px] font-mono uppercase px-2 py-0.5 rounded bg-white/[0.04] text-slate-400 border border-white/[0.06]">
                  {t.tag}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic mb-6">
                « {t.quote} »
              </p>

              <div className="pt-4 border-t border-white/[0.06] flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-300 font-bold text-xs shrink-0">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">{t.author}</h4>
                  <span className="text-[11px] text-[#AAB7C4]">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: Carousel Card */}
        <div className="md:hidden max-w-sm mx-auto relative">
          <div className="p-6 rounded-2xl bg-[#0D1B2A] border border-blue-500/30 shadow-xl">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
              <span className="text-[9px] font-mono uppercase px-2 py-0.5 rounded bg-white/[0.04] text-slate-400 border border-white/[0.06]">
                {testimonials[currentIndex].tag}
              </span>
            </div>

            <p className="text-xs text-slate-200 leading-relaxed italic mb-6">
              « {testimonials[currentIndex].quote} »
            </p>

            <div className="pt-3 border-t border-white/[0.06] flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-300 font-bold text-xs shrink-0">
                {testimonials[currentIndex].author.charAt(0)}
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">{testimonials[currentIndex].author}</h4>
                <span className="text-[10px] text-[#AAB7C4]">{testimonials[currentIndex].role}</span>
              </div>
            </div>
          </div>

          {/* Carousel controls */}
          <div className="flex items-center justify-between mt-3 px-2">
            <button
              onClick={prevSlide}
              className="p-1.5 rounded-lg bg-[#0D1B2A] border border-white/[0.08] text-slate-300"
              aria-label="Précédent"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-1">
              {testimonials.map((_, i) => (
                <span
                  key={i}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === currentIndex ? 'bg-blue-400' : 'bg-white/20'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="p-1.5 rounded-lg bg-[#0D1B2A] border border-white/[0.08] text-slate-300"
              aria-label="Suivant"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
