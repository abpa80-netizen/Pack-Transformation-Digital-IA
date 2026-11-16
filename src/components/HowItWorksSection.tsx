import React from 'react';
import { BookOpen, CreditCard, GraduationCap } from 'lucide-react';

const steps = [
  { number: '01', title: 'Explore le contenu', description: 'Parcours la bibliothèque et repère les formations qui correspondent à tes objectifs.', icon: BookOpen },
  { number: '02', title: 'Passe ta commande', description: 'Choisis le pack et suis les étapes indiquées pour finaliser ta commande.', icon: CreditCard },
  { number: '03', title: 'Accède aux formations', description: 'Retrouve tes contenus et avance à ton rythme, selon tes priorités.', icon: GraduationCap },
];

export const HowItWorksSection: React.FC = () => (
  <section id="comment-ca-marche" className="py-12 sm:py-16 bg-[#091525] border-t border-white/[0.06]">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <span className="text-xs font-mono font-bold tracking-widest text-blue-400 uppercase">SIMPLE & ACCESSIBLE</span>
        <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-white tracking-tight" style={{ fontFamily: 'Syne, sans-serif' }}>COMMENT ÇA FONCTIONNE ?</h2>
        <p className="mt-2 text-sm text-slate-400">Trois étapes pour découvrir et utiliser ton pack.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {steps.map(({ number, title, description, icon: Icon }) => (
          <article key={number} className="relative rounded-2xl border border-white/[0.08] bg-[#0D1B2A] p-5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-bold text-blue-400">{number}</span>
              <span className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center"><Icon className="w-5 h-5 text-blue-400" /></span>
            </div>
            <h3 className="text-base font-bold text-white mb-2">{title}</h3>
            <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);
