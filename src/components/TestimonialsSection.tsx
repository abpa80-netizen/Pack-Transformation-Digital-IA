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
  const testimonials: TestimonialSlot[] = [
    {
      id: 'slot-1',
      tag: 'CASABLANCA',
      author: 'Yassine M.',
      role: 'Freelance & Digital Marketing',
      quote:
        'Franchement, pour 249 DH, le contenu est juste dingue. J\'étais bloqué sur la création de tunnels de vente pour mes clients sur WhatsApp. Grâce au module sur l\'automatisation et aux prompts IA, j\'ai pu livrer deux projets cette semaine et rentabiliser le pack en 48h. C\'est du concret, pas de la théorie inutile.',
      rating: 5,
    },
    {
      id: 'slot-2',
      tag: 'TANGER',
      author: 'Sara B.',
      role: 'E-commerce & Vente en Ligne',
      quote:
        'Je me suis lancée dans le e-commerce local il y a 3 mois, mais je galérais avec mes visuels Canva et mes textes de vente. La bibliothèque d\'assets 3D et la section Copywriting IA m\'ont fait gagner un temps précieux. Mes publicités Facebook convertissent enfin beaucoup mieux !',
      rating: 5,
    },
    {
      id: 'slot-3',
      tag: 'RABAT',
      author: 'Amine K.',
      role: 'Business Digital & Revente MRR',
      quote:
        'Ce qui m\'a convaincu, c\'est la licence de revente MRR. J\'ai téléchargé le pack, configuré ma page en une soirée, et j\'ai déjà effectué mes 3 premières ventes directement via WhatsApp avec Cash on Delivery / Virement. Un produit digital clé en main très facile à commercialiser au Maroc.',
      rating: 5,
    },
    {
      id: 'slot-4',
      tag: 'MARRAKECH',
      author: 'Khadija T.',
      role: 'Reconversion & Débutante IA',
      quote:
        'En tant que débutante complète, j\'avais peur que ce soit trop technique. La structuration par parcours m\'a permis d\'aller directement vers l\'apprentissage de ChatGPT et des outils d\'IA sans me perdre. Très bon accompagnement et support réactif !',
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

        <div className="hidden md:grid md:grid-cols-2 xl:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="p-6 rounded-2xl bg-[#0D1B2A] border border-white/[0.08] hover:border-blue-500/40 transition-all flex flex-col justify-between shadow-lg relative group"
            >
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
