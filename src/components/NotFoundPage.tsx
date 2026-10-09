import React from 'react';
import { Home, Compass, ArrowRight } from 'lucide-react';
import { Link } from './Link';
import { THEMATIC_PAGES } from '../data/thematicPages';
import { SeoHead } from './SeoHead';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#07111F] text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      <SeoHead
        title="Page Non Trouvée | Vision Libre"
        description="La page demandée n'existe pas ou a été déplacée. Découvrez nos 51 formations digitales."
        noIndex={true}
      />

      <div className="flex-1 flex flex-col items-center justify-center px-4 py-20 text-center max-w-4xl mx-auto">
        <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/30 text-blue-400 flex items-center justify-center mx-auto mb-6">
          <Compass className="w-8 h-8 animate-pulse" />
        </div>

        <span className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-2">
          Erreur 404
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-serif mb-4">
          Page Non Trouvée
        </h1>
        <p className="text-slate-400 text-base max-w-lg mb-8">
          La page que vous cherchez n'existe pas ou a changé d'adresse. Vous pouvez revenir à l'accueil ou explorer nos formations thématiques ci-dessous.
        </p>

        <Link
          href="/"
          className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-500/25 transition-all flex items-center gap-2 mb-12"
        >
          <Home className="w-4 h-4" />
          <span>Retour à l'accueil</span>
        </Link>

        {/* Liens vers les 8 formations thématiques */}
        <div className="w-full text-left">
          <h2 className="text-lg font-bold text-slate-200 mb-4 text-center">
            Explorer les Spécialisations du Pack :
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            {Object.entries(THEMATIC_PAGES).map(([slug, page]) => (
              <Link
                key={slug}
                href={slug}
                className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500/40 text-xs text-slate-300 hover:text-white transition-colors flex items-center justify-between"
              >
                <span className="font-medium truncate">{page.tag}</span>
                <ArrowRight className="w-3.5 h-3.5 text-blue-400 flex-shrink-0 ml-1" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
