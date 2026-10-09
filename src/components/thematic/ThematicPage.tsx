import React, { useState } from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  BookOpen, 
  HelpCircle, 
  AlertTriangle, 
  ShieldCheck, 
  Layers, 
  MessageSquare,
  ChevronDown,
  ExternalLink
} from 'lucide-react';
import { ThematicPageConfig } from '../../types/thematic';
import { COURSES_DATA } from '../../data/courses';
import { THEMATIC_PAGES } from '../../data/thematicPages';
import { SeoHead } from '../SeoHead';
import { Breadcrumbs } from './Breadcrumbs';
import { Link } from '../Link';
import { Course } from '../../types';

interface ThematicPageProps {
  config: ThematicPageConfig;
  onOpenOrderModal: (title?: string) => void;
  onOpenCatalogue: () => void;
  onOpenChatbot: () => void;
  onOpenLicense: () => void;
}

export const ThematicPage: React.FC<ThematicPageProps> = ({
  config,
  onOpenOrderModal,
  onOpenCatalogue,
  onOpenChatbot,
  onOpenLicense,
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [selectedCourseDetail, setSelectedCourseDetail] = useState<Course | null>(null);

  // Récupération stricte des formations du catalogue officiel
  const matchingCourses = config.courseIds
    .map((id) => COURSES_DATA.find((c) => c.id === id))
    .filter((c): c is Course => c !== undefined);

  // Construction des données structurées FAQPage Schema.org
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: config.faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-[#07111F] text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* 1. MÉTADONNÉES SEO DYNAMIQUES */}
      <SeoHead
        title={config.title}
        description={config.metaDescription}
        canonicalPath={config.slug}
      />

      {/* JSON-LD FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 2. FIL D'ARIANE (BREADCRUMBS) */}
      <Breadcrumbs pageTitle={config.tag} pageSlug={config.slug} />

      {/* 3. HERO SECTION THÉMATIQUE */}
      <section className="relative pt-12 pb-16 lg:pt-16 lg:pb-20 overflow-hidden border-b border-slate-800/60">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs sm:text-sm font-semibold mb-5 tracking-wide">
              <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span>{config.tag}</span>
              <span className="text-slate-500">·</span>
              <span className="text-cyan-300">Maroc & International</span>
            </div>

            {/* H1 Principal Unique */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-serif leading-tight mb-6">
              {config.h1}
            </h1>

            {/* Sous-titre */}
            <p className="text-lg sm:text-xl text-slate-300 font-medium leading-relaxed mb-6">
              {config.subtitle}
            </p>

            {/* Paragraphes de présentation */}
            <div className="space-y-4 text-slate-400 text-sm sm:text-base leading-relaxed mb-8">
              {config.introParagraphs.map((para, index) => (
                <p key={index}>{para}</p>
              ))}
            </div>

            {/* Note locale contextuelle Maroc */}
            {config.localFocusNote && (
              <div className="p-4 rounded-xl bg-blue-950/40 border border-blue-800/40 text-blue-200 text-sm flex items-start gap-3 mb-8">
                <ShieldCheck className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>{config.localFocusNote}</span>
              </div>
            )}

            {/* Boutons d'action rapides */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              <button
                onClick={() => onOpenOrderModal(config.tag)}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-sm sm:text-base shadow-lg shadow-blue-500/25 transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                <span>Accéder au Pack (249 DH)</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenCatalogue}
                className="px-5 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 text-slate-200 font-semibold text-sm sm:text-base transition-colors flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4 text-blue-400" />
                <span>Catalogue (+50 formations)</span>
              </button>

              <button
                onClick={onOpenChatbot}
                className="px-4 py-3.5 rounded-xl bg-slate-900/50 hover:bg-slate-800/80 border border-slate-800 text-slate-400 hover:text-cyan-300 text-xs sm:text-sm transition-colors flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-cyan-400" />
                <span>Orientation IA</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. COMPÉTENCES CLÉS & OBJECTIFS PÉDAGOGIQUES */}
      <section className="py-14 sm:py-16 bg-[#07111F]/80 border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-serif mb-3 flex items-center gap-3">
              <Layers className="w-6 h-6 text-blue-400" />
              <span>Compétences Clés & Objectifs Pédagogiques</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Ce que vous apprenez concrètement pour développer votre autonomie et réussir vos projets numériques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {config.keySkills.map((skill, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-blue-500/40 transition-colors flex flex-col"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400 flex items-center justify-center font-bold text-sm">
                    0{index + 1}
                  </div>
                  <h3 className="text-lg font-bold text-white">{skill.title}</h3>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FORMATIONS RÉELLEMENT DISPONIBLES DANS LE CATALOGUE */}
      <section className="py-14 sm:py-16 bg-[#050C17]/60 border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold mb-2">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{matchingCourses.length} Formations Pratiques Réelles</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-serif">
                Formations Incluses dans le Pack Vision Libre
              </h2>
              <p className="text-slate-400 text-sm mt-1">
                Toutes ces masterclasses sont intégralement incluses dans votre accès unique à 249 DH.
              </p>
            </div>

            <button
              onClick={onOpenCatalogue}
              className="text-sm font-semibold text-blue-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5 self-start md:self-auto"
            >
              <span>Voir l'ensemble des 51 formations</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {matchingCourses.map((course) => (
              <div
                key={course.id}
                className="p-5 rounded-2xl bg-[#091528] border border-slate-800/90 hover:border-blue-500/50 transition-all flex flex-col justify-between group shadow-sm hover:shadow-md hover:shadow-blue-900/10"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded-md bg-blue-950/80 border border-blue-800/50 text-blue-300 text-xs font-semibold">
                      {course.tag}
                    </span>
                    <span className="text-slate-400 text-xs font-medium">
                      {course.level}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors mb-2">
                    {course.title}
                  </h3>

                  {course.highlight && (
                    <p className="text-slate-400 text-xs sm:text-sm line-clamp-3 mb-4 leading-relaxed">
                      {course.highlight}
                    </p>
                  )}
                </div>

                <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Inclus dans le pack</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setSelectedCourseDetail(course)}
                      className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold transition-colors"
                    >
                      Détails
                    </button>
                    <button
                      onClick={() => onOpenOrderModal(course.title)}
                      className="px-2.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors"
                    >
                      Commander
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. AVERTISSEMENT LÉGAL FINANCE & TRADING (SI APPLICABLE) */}
      {config.isFinance && (
        <section className="py-8 bg-amber-950/30 border-b border-amber-800/40">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-5 rounded-2xl bg-amber-950/60 border border-amber-600/50 flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-amber-400 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-base font-bold text-amber-200 mb-1">
                  Mention Éducative Importante — Avertissement Risques
                </h3>
                <p className="text-amber-100/90 text-sm leading-relaxed font-medium">
                  Les contenus liés à la finance, au trading et aux actifs numériques sont fournis à titre éducatif et ne constituent pas un conseil financier ou une recommandation d'investissement.
                </p>
                <p className="text-amber-300/80 text-xs mt-2">
                  Vision Libre ne promet aucun gain financier ni retour sur investissement garanti. Les marchés financiers comportent un risque de perte en capital.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 7. POURQUOI CHOISIR LE PACK VISION LIBRE */}
      <section className="py-14 sm:py-16 bg-[#07111F] border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-serif mb-3">
              Pourquoi ce Pack Répond à Votre Besoin de Formation
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Une formule tout-en-un conçue pour éliminer les barrières de coût et vous donner une vue d'ensemble des compétences numériques indispensables.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {config.whyThisPack.map((point, index) => (
              <div
                key={index}
                className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 text-cyan-400 flex items-center justify-center font-bold text-sm mb-4">
                    ✓
                  </div>
                  <p className="text-slate-200 text-sm font-medium leading-relaxed">
                    {point}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Rappel prix transparent */}
          <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-blue-950/40 to-slate-900 border border-blue-800/40 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-wider text-blue-400 font-bold">
                Tarif de Lancement Transparent
              </span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-3xl font-black text-white font-serif">249 DH</span>
                <span className="text-sm text-slate-400 line-through">990 DH</span>
                <span className="text-xs text-emerald-400 font-semibold bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/40">
                  Paiement unique · Accès à vie
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Réservé aux 30 premiers acheteurs · Licence de revente MRR incluse.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => onOpenOrderModal(config.tag)}
                className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-colors flex items-center gap-2"
              >
                <span>Commander (249 DH)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onOpenLicense}
                className="px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-colors"
              >
                Licence MRR (PDF)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FOIRE AUX QUESTIONS (FAQ) SPÉCIFIQUE */}
      <section className="py-14 sm:py-16 bg-[#050C17]/80 border-b border-slate-800/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Réponses Factuelles</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-serif">
              Questions Fréquentes sur cette Formation
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              Des clarifications concrètes pour vous orienter en toute transparence.
            </p>
          </div>

          <div className="space-y-4">
            {config.faq.map((item, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl bg-slate-900/60 border border-slate-800/80 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-base text-slate-100 hover:text-blue-300 transition-colors"
                  >
                    <span>{item.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${
                        isOpen ? 'rotate-180 text-blue-400' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-800/50 pt-4">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. MAILLAGE INTERNE : AUTRES FORMATIONS THÉMATIQUES DU PACK */}
      <section className="py-14 sm:py-16 bg-[#07111F] border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-serif mb-2">
              Découvrir les Autres Spécialisations du Pack
            </h2>
            <p className="text-slate-400 text-sm">
              Votre accès à 249 DH inclut l'ensemble de ces filières sans aucun supplément tarifaire.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {config.relatedThematicSlugs.map((slug) => {
              const related = THEMATIC_PAGES[slug];
              if (!related) return null;
              return (
                <Link
                  key={slug}
                  href={slug}
                  className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-blue-500/60 hover:bg-slate-900 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <span className="text-[11px] font-semibold text-blue-400 block mb-1 uppercase tracking-wider">
                      {related.tag}
                    </span>
                    <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug mb-2">
                      {related.h1}
                    </h3>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 group-hover:text-blue-400 transition-colors pt-3 border-t border-slate-800/50">
                    <span>Explorer ce guide</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors underline underline-offset-4"
            >
              <span>← Revenir à la page d'accueil principale VISION LIBRE</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 10. MODAL DÉTAILS DE FORMATION */}
      {selectedCourseDetail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg rounded-2xl bg-[#091528] border border-blue-500/30 p-6 shadow-2xl">
            <div className="flex items-center justify-between gap-2 mb-4">
              <span className="px-3 py-1 rounded-md bg-blue-950 border border-blue-800/60 text-blue-300 text-xs font-bold">
                {selectedCourseDetail.tag}
              </span>
              <span className="text-xs text-slate-400 font-medium">
                {selectedCourseDetail.level}
              </span>
            </div>

            <h3 className="text-xl font-bold text-white mb-3">
              {selectedCourseDetail.title}
            </h3>

            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              {selectedCourseDetail.highlight || 'Formation complète et tutoriels pratiques inclus dans le pack.'}
            </p>

            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 mb-6 text-xs text-slate-400">
              <span className="font-semibold text-emerald-400">Statut :</span> Inclus dans le Pack Transformation Digital & IA (51 formations · 249 DH).
            </div>

            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedCourseDetail(null)}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-colors"
              >
                Fermer
              </button>
              <button
                onClick={() => {
                  const title = selectedCourseDetail.title;
                  setSelectedCourseDetail(null);
                  onOpenOrderModal(title);
                }}
                className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors"
              >
                Commander avec cette formation
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
