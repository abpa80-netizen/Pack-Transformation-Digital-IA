import React, { useState } from 'react';
import { X, MessageSquare, CreditCard, ShieldCheck, CheckCircle2, Lock, Flame } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedObjectiveTitle?: string;
}

export const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  onClose,
  selectedObjectiveTitle,
}) => {
  const [activeTab, setActiveTab] = useState<'whatsapp' | 'rib'>('whatsapp');

  if (!isOpen) return null;

  const whatsappMessage = selectedObjectiveTitle
    ? `Bonjour Vision Libre, je souhaite profiter du tarif de lancement du Pack Transformation Digital & IA. Mon objectif prioritaire : ${selectedObjectiveTitle}.`
    : `Bonjour Vision Libre, je souhaite profiter du tarif de lancement du Pack Transformation Digital & IA.`;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-lg rounded-2xl bg-[#0D1B2A] border border-blue-500/40 p-6 sm:p-8 shadow-2xl text-slate-100 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors cursor-pointer"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1">
            <span>Commande Express</span>
            <span>·</span>
            <span>Vision Libre</span>
          </div>
          <h3 
            className="text-xl sm:text-2xl font-black text-white tracking-tight"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            Pack Transformation Digital & IA
          </h3>
          <div className="flex items-baseline gap-2.5 mt-2">
            <span className="text-3xl font-black text-white font-mono">249 DH</span>
            <span className="text-xs text-emerald-400 font-semibold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
              Paiement unique
            </span>
          </div>

          <div className="mt-2.5 flex items-center gap-1.5 text-xs text-amber-300 font-medium">
            <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span>Tarif de lancement réservé aux 30 premiers acheteurs</span>
          </div>
        </div>

        {/* Method selector tabs */}
        <div className="flex items-center gap-2 p-1 bg-white/[0.04] border border-white/[0.08] rounded-xl mb-6">
          <button
            onClick={() => setActiveTab('whatsapp')}
            className={`flex-1 py-2 px-3 text-xs font-bold rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer ${
              activeTab === 'whatsapp'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            <span>Via WhatsApp (Direct)</span>
          </button>

          <button
            onClick={() => setActiveTab('rib')}
            className={`flex-1 py-2 px-3 text-xs font-bold rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer ${
              activeTab === 'rib'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <CreditCard className="w-4 h-4" />
            <span>Virement / Cash Plus</span>
          </button>
        </div>

        {/* Tab 1: WhatsApp checkout */}
        {activeTab === 'whatsapp' && (
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/20 text-xs text-slate-300 leading-relaxed">
              <p className="mb-2 font-bold text-emerald-300">
                ⚡ Validation express avec un conseiller :
              </p>
              <p>
                Vous êtes redirigé directement vers notre messagerie sécurisée WhatsApp avec votre demande préremplie. Notre équipe valide votre commande et vous transmet vos accès en quelques minutes.
              </p>
            </div>

            <a
              href={getWhatsAppUrl(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl shadow-lg shadow-emerald-950/50 transition-all cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>COMMANDER SUR WHATSAPP</span>
            </a>
          </div>
        )}

        {/* Tab 2: Bank transfer instructions */}
        {activeTab === 'rib' && (
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] text-xs space-y-3">
              <div>
                <span className="text-slate-400 block mb-0.5">Mode de règlement :</span>
                <strong className="text-white">Virement bancaire (CIH Bank, Attijariwafa) ou Cash Plus / Wafacash</strong>
              </div>

              <div>
                <span className="text-slate-400 block mb-0.5">Montant forfaitaire :</span>
                <strong className="text-emerald-400 text-sm font-mono">249 DH (Paiement unique)</strong>
              </div>

              <div className="p-3 rounded-lg bg-[#07111F] border border-white/[0.06] text-[#AAB7C4] leading-relaxed">
                Les coordonnées officielles pour le versement vous sont transmises instantanément par message sécurisé par notre équipe pour assurer la validation rapide de vos accès.
              </div>
            </div>

            <a
              href={getWhatsAppUrl('Bonjour Vision Libre, je souhaite recevoir les coordonnées de paiement pour régler le tarif de lancement du Pack Transformation Digital & IA.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-lg transition-all cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Demander les coordonnées de paiement</span>
            </a>
          </div>
        )}

        {/* Micro-rassurances */}
        <div className="mt-6 pt-5 border-t border-white/[0.08] grid grid-cols-2 gap-2 text-[11px] text-slate-400">
          <div className="flex items-center gap-1.5">
            <Lock className="w-3.5 h-3.5 text-blue-400" />
            <span>Paiement sécurisé</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Accès immédiat</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
            <span>Licence MRR incluse</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
            <span>Vision Libre Officiel</span>
          </div>
        </div>

      </div>
    </div>
  );
};
