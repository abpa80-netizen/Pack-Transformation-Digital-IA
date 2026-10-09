/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TargetAudienceSection } from './components/TargetAudienceSection';
import { ObjectiveSelector } from './components/ObjectiveSelector';
import { PillarsShowcase } from './components/PillarsShowcase';
import { CatalogueSection } from './components/CatalogueSection';
import { MrrSectionCompact } from './components/MrrSectionCompact';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PricingSectionSingle } from './components/PricingSectionSingle';
import { FaqSectionAccordion } from './components/FaqSectionAccordion';
import { FinalCtaCompact } from './components/FinalCtaCompact';
import { FooterCompact } from './components/FooterCompact';
import { StickyMobileCta } from './components/StickyMobileCta';
import { OrderModal } from './components/OrderModal';
import { MrrLicensePdfViewer } from './components/MrrLicensePdfViewer';
import { GeminiChatbot } from './components/GeminiChatbot';
import { SeoHead } from './components/SeoHead';
import { PillarCategory } from './types';

export default function App() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [isCatalogueModalOpen, setIsCatalogueModalOpen] = useState(false);
  const [isLicenseModalOpen, setIsLicenseModalOpen] = useState(false);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [catalogueFilterPillar, setCatalogueFilterPillar] = useState<PillarCategory | 'all'>('all');
  const [selectedObjectiveTitle, setSelectedObjectiveTitle] = useState<string | undefined>(undefined);

  const handleOpenOrderModal = (objectiveOrCourseTitle?: string) => {
    setSelectedObjectiveTitle(objectiveOrCourseTitle);
    setIsOrderModalOpen(true);
  };

  const handleCloseOrderModal = () => {
    setIsOrderModalOpen(false);
    setSelectedObjectiveTitle(undefined);
  };

  const handleScrollToObjectives = () => {
    const el = document.getElementById('objectifs');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenCatalogueWithPillar = (pillarId: PillarCategory) => {
    setCatalogueFilterPillar(pillarId);
    setIsCatalogueModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#07111F] text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Fondations SEO dynamiques */}
      <SeoHead canonicalPath="/" />
      
      {/* 1. HEADER (Vision Libre, Accueil, Objectifs, Catalogue, MRR, FAQ, Commander) */}
      <Navbar 
        onOrderClick={() => handleOpenOrderModal()}
        onOpenCatalogue={() => setIsCatalogueModalOpen(true)}
      />

      <main className="flex-1">
        
        {/* 2. HERO — ULTRA COMPACT */}
        <Hero 
          onPrimaryCta={() => handleOpenOrderModal()}
          onDiscoverCta={handleScrollToObjectives}
        />

        {/* 3. PUBLIC CIBLE — 8 CARTES VISUELLES (POUR QUI EST CE PACK ?) */}
        <TargetAudienceSection />

        {/* 4. CHOISIS TON OBJECTIF — 8 PETITES CARTES (Détails au clic) */}
        <ObjectiveSelector 
          onSelectObjective={(title) => handleOpenOrderModal(title)} 
        />

        {/* 4. LE PACK EN UN COUP D'ŒIL — 5 PÔLES COMPACTS (Détails au clic) */}
        <PillarsShowcase 
          onOpenCatalogueWithPillar={handleOpenCatalogueWithPillar} 
        />

        {/* 5. CATALOGUE — +50 FORMATIONS (Catalogue complet accessible au clic) */}
        <CatalogueSection 
          isModalOpen={isCatalogueModalOpen}
          onOpenModal={() => setIsCatalogueModalOpen(true)}
          onCloseModal={() => setIsCatalogueModalOpen(false)}
          filterPillar={catalogueFilterPillar}
          onOrderClick={(courseTitle) => handleOpenOrderModal(courseTitle)}
        />

        {/* 6. LICENCE MRR INCLUSE — CONSULTER LA LICENCE (PDF A4 au clic) */}
        <MrrSectionCompact 
          onOpenLicenseDirectly={() => setIsLicenseModalOpen(true)}
        />

        {/* 7. TÉMOIGNAGES — 💬 ILS ONT COMMENCÉ LEUR PARCOURS */}
        <TestimonialsSection />

        {/* 8. PRIX — UNE SEULE SECTION PRIX (249 DH · 30 premiers acheteurs) */}
        <PricingSectionSingle 
          onOrderClick={() => handleOpenOrderModal()} 
          onOpenLicense={() => setIsLicenseModalOpen(true)}
        />

        {/* 9. FAQ — ACCORDION UNIQUEMENT (Sans numérotation publique) */}
        <FaqSectionAccordion 
          onOpenChatbot={() => setIsChatbotOpen(true)}
        />

        {/* 10. CTA FINAL — COMPACT */}
        <FinalCtaCompact 
          onOrderClick={() => handleOpenOrderModal()} 
        />

      </main>

      {/* 11. FOOTER COMPACT */}
      <FooterCompact 
        onOpenCatalogue={() => setIsCatalogueModalOpen(true)} 
        onOpenLicense={() => setIsLicenseModalOpen(true)}
      />

      {/* 12. CTA STICKY MOBILE (Mobile uniquement) */}
      <StickyMobileCta 
        onOrderClick={() => handleOpenOrderModal()} 
      />

      {/* 13. MODAL DE COMMANDE EXPRESS (WhatsApp + Virement Bancaire Marocain) */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={handleCloseOrderModal}
        selectedObjectiveTitle={selectedObjectiveTitle}
      />

      {/* 14. VISIONNEUSE OFFICIELLE DE LICENCE MRR (FORMAT A4) */}
      <MrrLicensePdfViewer
        isOpen={isLicenseModalOpen}
        onClose={() => setIsLicenseModalOpen(false)}
      />

      {/* 15. ASSISTANT OFFICIEL VISION LIBRE AI */}
      <GeminiChatbot
        isOpen={isChatbotOpen}
        onToggle={() => setIsChatbotOpen((prev) => !prev)}
        onOrderClick={() => handleOpenOrderModal()}
        onOpenCatalogue={() => setIsCatalogueModalOpen(true)}
      />

    </div>
  );
}
