import React, { useState } from 'react';
import { ShieldCheck, FileText } from 'lucide-react';
import { MrrLicensePdfViewer } from './MrrLicensePdfViewer';

interface MrrSectionCompactProps {
  onOrderClick?: () => void;
  onOpenLicenseDirectly?: () => void;
}

export const MrrSectionCompact: React.FC<MrrSectionCompactProps> = () => {
  const [isPdfViewerOpen, setIsPdfViewerOpen] = useState(false);

  return (
    <section id="revente" className="py-10 sm:py-14 bg-[#07111F] border-t border-white/[0.06]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Carte Épurée & Discrète pour la Licence */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#0D1B2A] border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-center sm:text-left max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Licence Numérique Incluse</span>
            </div>
            <h2 
              className="text-xl sm:text-2xl font-extrabold text-white tracking-tight"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              LICENCE OFFICIELLE MRR
            </h2>
            <p className="text-xs sm:text-sm text-[#AAB7C4] mt-2 leading-relaxed">
              Le pack inclut la licence Master Resell Rights (MRR). L'ensemble des termes, droits accordés et conditions d'exploitation sont consignés dans le document officiel.
            </p>
          </div>

          {/* Bouton Discret : CONSULTER LA LICENCE */}
          <div className="shrink-0 w-full sm:w-auto">
            <button
              onClick={() => setIsPdfViewerOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 hover:text-white border border-blue-500/40 text-xs sm:text-sm font-bold shadow-lg transition-all cursor-pointer"
            >
              <FileText className="w-4 h-4 text-amber-400" />
              <span>CONSULTER LA LICENCE</span>
            </button>
          </div>
        </div>

      </div>

      {/* Visionneuse PDF Format A4 Officielle */}
      <MrrLicensePdfViewer
        isOpen={isPdfViewerOpen}
        onClose={() => setIsPdfViewerOpen(false)}
      />

    </section>
  );
};
