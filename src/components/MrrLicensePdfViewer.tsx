import React, { useState } from 'react';
import { X, ZoomIn, ZoomOut, RotateCcw, Printer, FileText } from 'lucide-react';

interface MrrLicensePdfViewerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MrrLicensePdfViewer: React.FC<MrrLicensePdfViewerProps> = ({ isOpen, onClose }) => {
  const [zoomLevel, setZoomLevel] = useState(100);

  if (!isOpen) return null;

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 15, 160));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 15, 70));
  const handleResetZoom = () => setZoomLevel(100);

  return (
    <div 
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 backdrop-blur-md p-2 sm:p-4 overflow-hidden animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-label="Visionneuse de Licence Officielle MRR A4"
    >
      {/* Top Toolbar */}
      <div className="w-full max-w-4xl bg-[#0D1B2A] border border-white/[0.12] rounded-t-xl px-4 py-3 flex items-center justify-between gap-3 text-slate-200 shadow-xl z-10">
        <div className="flex items-center gap-2">
          <FileText className="w-4 h-4 text-amber-400" />
          <span className="text-xs sm:text-sm font-bold text-white tracking-wide">
            LICENCE_OFFICIELLE_MRR_VISION_LIBRE.pdf (Format A4)
          </span>
        </div>

        {/* Zoom & Action Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <div className="hidden sm:flex items-center bg-white/[0.06] rounded-lg p-0.5 border border-white/[0.08]">
            <button
              onClick={handleZoomOut}
              className="p-1.5 hover:bg-white/[0.1] rounded text-slate-300 hover:text-white transition-colors cursor-pointer"
              title="Zoom arrière"
              aria-label="Zoom arrière"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <span className="px-2 text-xs font-mono text-slate-300 select-none">
              {zoomLevel}%
            </span>
            <button
              onClick={handleZoomIn}
              className="p-1.5 hover:bg-white/[0.1] rounded text-slate-300 hover:text-white transition-colors cursor-pointer"
              title="Zoom avant"
              aria-label="Zoom avant"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              onClick={handleResetZoom}
              className="p-1.5 hover:bg-white/[0.1] rounded text-slate-300 hover:text-white transition-colors cursor-pointer border-l border-white/[0.08]"
              title="Réinitialiser le zoom"
              aria-label="Réinitialiser le zoom"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>

          <button
            onClick={() => window.print()}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-white/[0.08] hover:bg-white/[0.14] rounded-lg text-slate-200 transition-colors cursor-pointer"
            title="Imprimer le document"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Imprimer</span>
          </button>

          <button
            onClick={onClose}
            className="p-2 hover:bg-rose-500/20 hover:text-rose-400 rounded-lg text-slate-300 transition-colors cursor-pointer ml-1"
            aria-label="Fermer la visionneuse"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Document Viewport */}
      <div className="w-full max-w-4xl flex-1 bg-[#050713]/95 border-x border-b border-white/[0.12] rounded-b-xl overflow-y-auto overflow-x-auto p-4 sm:p-8 flex justify-center">
        
        {/* A4 Sheet Container with exact official certificate border */}
        <div 
          style={{ transform: `scale(${zoomLevel / 100})`, transformOrigin: 'top center' }}
          className="transition-transform duration-150 ease-out bg-[#FDFDFD] text-[#111827] shadow-2xl rounded-sm p-8 sm:p-12 w-full max-w-[780px] min-h-[1100px] flex flex-col justify-between font-sans relative border-8 border-amber-600/70"
        >
          {/* Inner thin decorative frame */}
          <div className="absolute inset-2 border border-amber-500/50 pointer-events-none" />

          {/* Document Content */}
          <div className="relative z-10">
            
            {/* Top header line */}
            <div className="flex items-center justify-between text-[10px] text-slate-500 font-mono mb-4 border-b border-slate-200 pb-2">
              <span>VISION LIBRE | Licence MRR - Pack Transformation Digital & IA</span>
              <span>Page 1</span>
            </div>

            {/* Official Brand Logo Banner */}
            <div className="text-center my-3">
              <span className="text-xs font-bold text-amber-700 tracking-widest uppercase block mb-1">
                VISION LIBRE
              </span>
              <div className="w-48 h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-3" />
              
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 uppercase tracking-tight leading-tight">
                LICENCE OFFICIELLE DE DROITS<br />DE REVENTE MAÎTRE (MRR)
              </h2>
              <p className="text-xs text-slate-600 font-medium mt-1">
                Certificat délivré par : <strong className="text-slate-900">VISION LIBRE</strong>
              </p>
            </div>

            {/* Metadata Table / Box */}
            <div className="my-5 border border-amber-400 bg-amber-50/40 rounded-sm text-xs divide-y divide-amber-200">
              <div className="grid grid-cols-12 p-2">
                <span className="col-span-4 font-bold text-slate-800">Produit sous licence</span>
                <span className="col-span-8 text-slate-900 font-semibold">Pack Transformation Digital & IA</span>
              </div>
              <div className="grid grid-cols-12 p-2">
                <span className="col-span-4 font-bold text-slate-800">Type de licence</span>
                <span className="col-span-8 text-slate-900">Master Resell Rights (Droits de Revente Maître - MRR / PLR)</span>
              </div>
              <div className="grid grid-cols-12 p-2">
                <span className="col-span-4 font-bold text-slate-800">Titulaire de la licence</span>
                <span className="col-span-8 text-slate-600 font-mono">Acquéreur légitime du pack</span>
              </div>
              <div className="grid grid-cols-12 p-2">
                <span className="col-span-4 font-bold text-slate-800">N° de licence / Date</span>
                <span className="col-span-8 text-slate-600 font-mono">VL-MRR-2026-PTDIA / Validité permanente</span>
              </div>
            </div>

            {/* Exact Article 1 */}
            <div className="mb-4">
              <h2 className="text-xs sm:text-sm font-black text-slate-900 uppercase mb-1">
                1. OBJET DE LA LICENCE
              </h2>
              <p className="text-xs text-slate-700 leading-relaxed text-justify">
                La présente licence accorde à l'acquéreur légitime du <strong>Pack Transformation Digital & IA</strong> un droit mondial, non exclusif et transférable de revente, de distribution et de monétisation de l'intégralité des contenus numériques inclus dans le pack.
              </p>
            </div>

            {/* Exact Article 2 */}
            <div className="mb-4">
              <h2 className="text-xs sm:text-sm font-black text-slate-900 uppercase mb-1.5">
                2. DROITS ACCORDÉS À L'ACQUÉREUR
              </h2>
              <ul className="text-xs text-slate-700 space-y-1.5 pl-4 list-disc text-justify">
                <li>
                  <strong>100 % des bénéfices :</strong> l'acquéreur conserve la totalité (100 %) des revenus générés par ses ventes directes.
                </li>
                <li>
                  <strong>Revente du pack complet :</strong> droit de revendre le pack dans son ensemble sous le nom Pack Transformation Digital & IA ou sous tout autre nom commercial de son choix.
                </li>
                <li>
                  <strong>Revente individuelle :</strong> droit de séparer le pack et de revendre chaque formation, guide ou module de façon indépendante.
                </li>
                <li>
                  <strong>Transfert de la licence (Droits Maître) :</strong> droit d'accorder ce même certificat de revente aux clients finaux qui achètent le pack complet.
                </li>
                <li>
                  <strong>Distribution des accès :</strong> droit de transmettre directement les accès (fichiers, liens de téléchargement ou canaux de formation) aux acheteurs finaux.
                </li>
              </ul>
            </div>

            {/* Exact Article 3 */}
            <div className="mb-4 p-3 bg-amber-50/70 border border-amber-300 rounded-sm">
              <h2 className="text-xs sm:text-sm font-black text-amber-950 uppercase mb-1.5">
                3. RESTRICTIONS ET PRIX PLANCHER (OBLIGATOIRE)
              </h2>
              <p className="text-xs text-slate-700 mb-2 leading-relaxed">
                Afin de préserver la valeur perçue du produit et d'éviter toute dévaluation du marché marocain et francophone, la présente licence est soumise aux conditions suivantes :
              </p>
              <ul className="text-xs text-slate-800 space-y-1.5 pl-4 list-disc text-justify">
                <li>
                  <strong>Prix minimum de revente (prix plancher) :</strong> il est formellement interdit de revendre l'intégralité du Pack Transformation Digital & IA à un prix inférieur à <strong>200 DH (ou 20 €)</strong>.
                </li>
                <li>
                  <strong>Interdiction de cession gratuite :</strong> le pack complet ne peut en aucun cas être distribué gratuitement ou offert en bonus gratuit sans contrepartie financière.
                </li>
                <li>
                  <strong>Propriété intellectuelle :</strong> les vidéos et cours contenus dans les fichiers ne doivent pas être altérés ou modifiés.
                </li>
              </ul>
            </div>

            {/* Exact Article 4 */}
            <div className="mb-6">
              <h2 className="text-xs sm:text-sm font-black text-slate-900 uppercase mb-1">
                4. ENGAGEMENT ET LÉGALITÉ
              </h2>
              <p className="text-xs text-slate-700 leading-relaxed text-justify">
                L'utilisation, la promotion ou la revente des contenus du Pack Transformation Digital & IA implique l'acceptation pleine et entière des présentes conditions. Tout non-respect du prix plancher entraînera la révocation immédiate du droit de revente et de l'accès aux mises à jour.
              </p>
            </div>

          </div>

          {/* Official Signatures & Seal Block */}
          <div className="relative z-10 pt-4 border-t border-slate-300 mt-2">
            <p className="text-[11px] italic text-slate-600 mb-4 text-center">
              Fait pour valoir ce que de droit.
            </p>

            <div className="grid grid-cols-2 gap-8 items-end">
              <div>
                <span className="text-xs font-bold text-slate-900 uppercase block mb-1">
                  L'Équipe de Direction
                </span>
                <span className="text-xs font-semibold text-amber-700 font-serif">
                  VISION LIBRE
                </span>
              </div>

              <div className="text-right">
                <span className="text-xs font-bold text-slate-900 uppercase block mb-1">
                  Cachet / Signature
                </span>
                <div className="inline-block px-3 py-1 bg-amber-100/70 border border-amber-300 text-[10px] font-mono text-amber-900 rounded font-bold uppercase">
                  ✓ Certifié Conforme Vision Libre
                </div>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-slate-200 text-center text-[10px] text-slate-500">
              <strong>VISION LIBRE</strong> — Libérez votre potentiel digital
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
