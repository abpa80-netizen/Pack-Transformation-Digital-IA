import React from 'react';

export const Hero: React.FC = () => (
  <section className="relative overflow-hidden pt-6 pb-8 md:pt-10 md:pb-12 bg-[#07111F]">
    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" aria-hidden="true" />
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-5 items-center">
        <div className="max-w-4xl flex flex-col items-start text-left">
          <span className="text-xs font-mono font-bold tracking-widest text-blue-400 uppercase mb-3">VISION LIBRE DIGITAL LAB</span>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.12] mb-3 text-balance" style={{ fontFamily: 'Syne, sans-serif' }}>
            DÉVELOPPE TES COMPÉTENCES.
            <span className="block bg-gradient-to-r from-blue-400 via-indigo-300 to-white bg-clip-text text-transparent">EXPLORE LE DIGITAL ET L’IA.</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
            Découvre plus de 50 formations et masterclasses en intelligence artificielle, business, marketing, e-commerce et compétences numériques.
          </p>
        </div>

      </div>
    </div>
  </section>
);