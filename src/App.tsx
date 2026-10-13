/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TargetAudienceSection } from './components/TargetAudienceSection';
import { ObjectiveSelector } from './components/ObjectiveSelector';
import { CatalogueSection } from './components/CatalogueSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PricingSectionSingle } from './components/PricingSectionSingle';
import { FaqSectionAccordion } from './components/FaqSectionAccordion';
import { FinalCtaCompact } from './components/FinalCtaCompact';
import { FooterCompact } from './components/FooterCompact';
import { StickyMobileCta } from './components/StickyMobileCta';
import { OrderModal } from './components/OrderModal';
import { GeminiChatbot } from './components/GeminiChatbot';
import { SeoHead } from './components/SeoHead';
import { PillarCategory } from './types';
import { RouterProvider, useRouter } from './router/RouterContext';
import { THEMATIC_PAGES } from './data/thematicPages';
import { ThematicPage } from './components/thematic/ThematicPage';
import { NotFoundPage } from './components/NotFoundPage';

interface AppProps {
  initialPath?: string;
}

function MainAppContent() {
  const { currentPath, navigate } = useRouter();

  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [isCatalogueModalOpen, setIsCatalogueModalOpen] = useState(false);
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
    if (currentPath !== '/') {
      navigate('/#objectifs');
      return;
    }
    const el = document.getElementById('objectifs');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenCatalogueWithPillar = (pillarId: PillarCategory) => {
    setCatalogueFilterPillar(pillarId);
    setIsCatalogueModalOpen(true);
  };

  // 1. Route d'accueil principale
  const isHome = currentPath === '/' || currentPath === '';

  // 2. Route thématique
  const thematicConfig = THEMATIC_PAGES[currentPath];

  return (
    <div className="min-h-screen bg-[#07111F] text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* 1. HEADER (Vision Libre, Accueil, Objectifs, Catalogue, FAQ, Commander) */}
      <Navbar 
        onOrderClick={() => handleOpenOrderModal()}
        onOpenCatalogue={() => setIsCatalogueModalOpen(true)}
      />

      {/* 2. CONTENU PRINCIPAL SELON LA ROUTE */}
      {isHome ? (
        <main className="flex-1">
          {/* Fondations SEO dynamiques de la page d'accueil */}
          <SeoHead canonicalPath="/" />
          
          {/* 2. HERO — ULTRA COMPACT */}
          <Hero 
            onPrimaryCta={() => handleOpenOrderModal()}
            onDiscoverCta={handleScrollToObjectives}
          />

          {/* 3. OBJECTIF — aider le visiteur à choisir son parcours rapidement */}
          <ObjectiveSelector onSelectObjective={(title) => handleOpenOrderModal(title)} />

          {/* 4. CATALOGUE — accès rapide aux formations sans allonger la page */}
          <CatalogueSection
            isModalOpen={isCatalogueModalOpen}
            onOpenModal={() => setIsCatalogueModalOpen(true)}
            onCloseModal={() => setIsCatalogueModalOpen(false)}
            filterPillar={catalogueFilterPillar}
            onOrderClick={(courseTitle) => handleOpenOrderModal(courseTitle)}
          />

          {/* 5. Public cible */}
          <TargetAudienceSection />

          {/* 6. TÉMOIGNAGES — 💬 ILS ONT COMMENCÉ LEUR PARCOURS */}
          <TestimonialsSection />

          {/* 7. PRIX — offre et éléments de réassurance */}
          <PricingSectionSingle 
            onOrderClick={() => handleOpenOrderModal()} 
          />

          {/* 8. FAQ — ACCORDION UNIQUEMENT (Sans numérotation publique) */}
          <FaqSectionAccordion onOpenChatbot={() => setIsChatbotOpen(true)} />

          {/* 9. CTA FINAL — COMPACT */}
          <FinalCtaCompact 
            onOrderClick={() => handleOpenOrderModal()} 
          />
        </main>
      ) : thematicConfig ? (
        <main className="flex-1">
          <ThematicPage
            config={thematicConfig}
            onOpenOrderModal={handleOpenOrderModal}
            onOpenCatalogue={() => setIsCatalogueModalOpen(true)}
            onOpenChatbot={() => setIsChatbotOpen(true)}
              />
        </main>
      ) : (
        <main className="flex-1">
          <NotFoundPage />
        </main>
      )}

      {/* 11. FOOTER COMPACT AVEC MAILLAGE THÉMATIQUE */}
      <FooterCompact onOpenCatalogue={() => setIsCatalogueModalOpen(true)} />

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

export default function App({ initialPath }: AppProps) {
  return (
    <RouterProvider initialPath={initialPath}>
      <MainAppContent />
    </RouterProvider>
  );
}
