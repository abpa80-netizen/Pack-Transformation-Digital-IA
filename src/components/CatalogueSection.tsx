import React, { useState, useMemo } from 'react';
import { COURSES_DATA } from '../data/courses';
import { PillarCategory, Course, CourseCategory } from '../types';
import { Search, BookOpen, X, CheckCircle2, ShieldCheck, FolderGit2 } from 'lucide-react';

interface CatalogueSectionProps {
  isModalOpen: boolean;
  onOpenModal: () => void;
  onCloseModal: () => void;
  filterPillar?: PillarCategory | 'all';
  onOrderClick?: (courseTitle?: string) => void;
}

interface CategoryDefinition {
  id: CourseCategory;
  label: string;
  description: string;
}

const CATEGORY_DEFINITIONS: CategoryDefinition[] = [
  { id: 'ia', label: 'IA', description: 'Intelligence artificielle & automatisation' },
  { id: 'business', label: 'Business', description: 'Modèles économiques & monétisation en ligne' },
  { id: 'ecommerce', label: 'E-commerce', description: 'Vente en ligne, marketplaces & recommerce' },
  { id: 'marketing', label: 'Marketing', description: 'Acquisition de trafic, social media & publicité' },
  { id: 'content', label: 'Création de contenu', description: 'Infoproduits, e-books & vidéo' },
  { id: 'design', label: 'Design', description: 'Création graphique, interfaces UI/UX & no-code' },
  { id: 'tech', label: 'Technologie', description: 'Développement, programmation & cybersécurité' },
  { id: 'finance', label: 'Finance', description: 'Actifs numériques, trading & investissement' },
];

export const CatalogueSection: React.FC<CatalogueSectionProps> = ({
  isModalOpen,
  onOpenModal,
  onCloseModal,
  filterPillar = 'all',
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCourseForDetail, setSelectedCourseForDetail] = useState<Course | null>(null);

  // Synchronisation avec filterPillar
  React.useEffect(() => {
    if (filterPillar && filterPillar !== 'all') {
      if (filterPillar === 'ia-automatisation') setSelectedCategory('ia');
      else if (filterPillar === 'business-ecommerce') setSelectedCategory('business');
      else if (filterPillar === 'marketing-digital') setSelectedCategory('marketing');
      else if (filterPillar === 'trading-crypto') setSelectedCategory('finance');
      else if (filterPillar === 'tech-design') setSelectedCategory('tech');
    }
  }, [filterPillar]);

  // Filtres du catalogue : Toutes + 8 catégories exactes
  const categoryTabs = [
    { id: 'all', label: 'Toutes' },
    { id: 'ia', label: 'IA' },
    { id: 'business', label: 'Business' },
    { id: 'ecommerce', label: 'E-commerce' },
    { id: 'marketing', label: 'Marketing' },
    { id: 'content', label: 'Création de contenu' },
    { id: 'design', label: 'Design' },
    { id: 'tech', label: 'Technologie' },
    { id: 'finance', label: 'Finance' },
  ];

  // Préparation des données par catégorie :
  // Conformément à l'audit de l'offre réelle, toutes les formations sont intégrales
  // et incluses dans le pack unique sans statut de bonus artificiel.
  const categoriesData = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    // Déterminer les catégories à afficher
    const targetCategories = selectedCategory === 'all'
      ? CATEGORY_DEFINITIONS
      : CATEGORY_DEFINITIONS.filter((cat) => cat.id === selectedCategory);

    return targetCategories.map((catDef) => {
      // Chaque formation appartient strictement à UNE SEULE catégorie
      const coursesInCat = COURSES_DATA.filter((c) => c.category === catDef.id);
      
      // Filtrage par recherche éventuelle
      const matchedCourses = coursesInCat.filter((c) => {
        if (!q) return true;
        return (
          c.title.toLowerCase().includes(q) ||
          c.tag.toLowerCase().includes(q) ||
          (c.highlight && c.highlight.toLowerCase().includes(q))
        );
      });

      return {
        ...catDef,
        totalReal: coursesInCat.length,
        totalFiltered: matchedCourses.length,
        courses: matchedCourses,
      };
    }).filter((catGroup) => catGroup.totalFiltered > 0);
  }, [selectedCategory, searchQuery]);

  const totalFilteredCount = useMemo(() => {
    return categoriesData.reduce((acc, cat) => acc + cat.totalFiltered, 0);
  }, [categoriesData]);

  return (
    <>
      {/* Teaser compact sur la page principale */}
      <section id="catalogue" className="py-14 sm:py-18 bg-[#07111F] border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <span className="text-xs font-mono font-bold tracking-widest text-blue-400 uppercase block mb-1.5">
            BIBLIOTHÈQUE COMPLÈTE
          </span>
          <h2 
            className="text-2xl sm:text-4xl font-extrabold text-white mb-2 tracking-tight"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            +50 FORMATIONS & MASTERCLASSES
          </h2>
          <p className="text-xs sm:text-sm text-[#AAB7C4] mb-7 max-w-lg mx-auto">
            Chaque module traite en profondeur d’un outil, d’une compétence ou d’un système opérationnel.
          </p>

          <button
            onClick={onOpenModal}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-xl shadow-blue-600/30 transition-all active:scale-[0.98] cursor-pointer"
          >
            <BookOpen className="w-4 h-4" />
            <span>🔎 EXPLORER LES +50 FORMATIONS</span>
          </button>

        </div>
      </section>

      {/* Grand Modal Catalogue Indépendant du Scroll Principal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-5xl h-[92vh] sm:h-[88vh] rounded-2xl bg-[#0D1B2A] border border-blue-500/40 shadow-2xl flex flex-col text-slate-100 overflow-hidden">
            
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-white/[0.08] flex items-center justify-between gap-4 shrink-0 bg-[#07111F]">
              <div>
                <span className="text-[11px] font-mono text-blue-400 font-bold uppercase tracking-wider block">
                  PACK TRANSFORMATION DIGITAL & IA
                </span>
                <h3 
                  className="text-lg sm:text-2xl font-black text-white"
                  style={{ fontFamily: 'Syne, sans-serif' }}
                >
                  Catalogue Intégral ({COURSES_DATA.length} Formations)
                </h3>
              </div>

              <button
                onClick={onCloseModal}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors cursor-pointer"
                aria-label="Fermer le catalogue"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Filter & Search Bar */}
            <div className="p-3 sm:p-4 border-b border-white/[0.06] bg-[#0D1B2A] flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 shrink-0">
              
              {/* Category tabs */}
              <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none pb-1 md:pb-0">
                {categoryTabs.map((tab) => {
                  const active = selectedCategory === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setSelectedCategory(tab.id)}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                        active
                          ? 'bg-blue-600 text-white shadow-sm'
                          : 'text-[#AAB7C4] hover:text-white bg-white/[0.03] hover:bg-white/[0.06]'
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              {/* Search input */}
              <div className="relative w-full md:w-64">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Rechercher une formation..."
                  className="w-full pl-9 pr-3 py-1.5 text-xs bg-[#07111F] border border-white/[0.1] rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
                />
              </div>

            </div>

            {/* Courses List - Scrollable */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-[#050713]/60 space-y-10">
              
              {categoriesData.map((catGroup) => (
                <div key={catGroup.id} className="space-y-4">
                  
                  {/* En-tête de la catégorie */}
                  <div className="border-b border-white/[0.08] pb-3 flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <FolderGit2 className="w-4 h-4 text-blue-400" />
                        <h4 
                          className="text-base sm:text-lg font-black text-white tracking-wide uppercase"
                          style={{ fontFamily: 'Syne, sans-serif' }}
                        >
                          {catGroup.label}
                        </h4>
                      </div>
                      <p className="text-xs text-[#AAB7C4] mt-0.5">
                        {catGroup.description}
                      </p>
                    </div>

                    <span className="text-xs font-mono font-medium text-slate-400 bg-white/[0.05] px-2.5 py-1 rounded-md">
                      {catGroup.totalFiltered} {catGroup.totalFiltered > 1 ? 'formations' : 'formation'}
                    </span>
                  </div>

                  {/* Formations de la Catégorie (Toutes incluses dans le pack) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                    {catGroup.courses.map((course: Course) => (
                      <div
                        key={course.id}
                        className="p-4 rounded-xl bg-[#0D1B2A] border border-white/[0.08] hover:border-blue-500/30 transition-all flex flex-col justify-between group shadow-sm"
                      >
                        <div>
                          <div className="flex items-center justify-between text-[11px] text-[#AAB7C4] mb-1.5">
                            <span className="text-blue-400 font-semibold">{course.tag}</span>
                            <span>{course.level}</span>
                          </div>

                          <h5 className="text-sm font-bold text-white mb-2 leading-snug group-hover:text-blue-300 transition-colors">
                            {course.title}
                          </h5>
                        </div>

                        <div className="pt-2.5 border-t border-white/[0.06] flex items-center justify-between text-xs">
                          <span className="text-[11px] text-emerald-400 font-medium flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                            <span>Inclus dans le pack</span>
                          </span>
                          <button
                            onClick={() => setSelectedCourseForDetail(course)}
                            className="text-xs text-blue-400 hover:text-blue-300 font-bold underline cursor-pointer"
                          >
                            DÉTAILS
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              ))}

              {totalFilteredCount === 0 && (
                <div className="text-center py-16">
                  <p className="text-sm text-slate-400">Aucune formation trouvée pour « {searchQuery} ».</p>
                  <button
                    onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                    className="mt-3 text-xs text-blue-400 underline cursor-pointer font-semibold"
                  >
                    Réinitialiser les filtres
                  </button>
                </div>
              )}

            </div>

            {/* Footer with close button */}
            <div className="p-3 sm:p-4 border-t border-white/[0.08] bg-[#0D1B2A] flex items-center justify-between shrink-0">
              <span className="text-xs text-[#AAB7C4]">
                Accès immédiat et complet aux {COURSES_DATA.length} formations inclus dans le pack unique.
              </span>
              <button
                onClick={onCloseModal}
                className="px-4 py-2 rounded-lg bg-white/[0.08] hover:bg-white/[0.14] text-xs font-bold text-white transition-colors cursor-pointer"
              >
                FERMER
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Fiche Détails de formation — STRICTEMENT INFORMATIVE, AUCUN CTA COMMERCIAL */}
      {selectedCourseForDetail && (
        <div 
          className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-150"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-lg rounded-2xl bg-[#0D1B2A] border border-blue-500/40 p-6 shadow-2xl text-slate-100 max-h-[90vh] overflow-y-auto">
            {/* Bouton fermer en haut à droite */}
            <button
              onClick={() => setSelectedCourseForDetail(null)}
              className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors cursor-pointer"
              aria-label="Fermer la fiche formation"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Catégorie & Niveau */}
            <div className="mb-2">
              <span className="text-[11px] font-mono font-bold text-blue-400 uppercase tracking-wider">
                {selectedCourseForDetail.tag} · {selectedCourseForDetail.level}
              </span>
            </div>

            {/* Titre */}
            <h3 
              className="text-lg sm:text-xl font-bold text-white mb-3"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              {selectedCourseForDetail.title}
            </h3>

            {/* Description / Objectif */}
            <div className="mb-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                Description / Objectif
              </h4>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                {selectedCourseForDetail.highlight || "Développement intensif de compétences concrètes et immédiatement applicables."}
              </p>
            </div>

            {/* Ce que vous allez apprendre */}
            <div className="mb-4 p-3.5 rounded-xl bg-[#07111F] border border-white/[0.06]">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                Ce que vous allez apprendre :
              </h4>
              <ul className="text-xs text-slate-300 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                  <span>Maîtrise complète des outils clés et des méthodologies professionnelles.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                  <span>Cas d'usage pratiques et déploiement de solutions opérationnelles.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                  <span>Autonomie technique et intégration dans vos projets numériques.</span>
                </li>
              </ul>
            </div>

            {/* Format */}
            <div className="mb-5 p-3 rounded-xl bg-[#07111F]/60 border border-white/[0.04] text-xs text-slate-300 flex items-center justify-between">
              <span className="text-slate-400">Format d'apprentissage :</span>
              <div className="flex items-center gap-1.5 text-white font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Format digital vidéo HD · Accès immédiat</span>
              </div>
            </div>

            {/* Bouton simple FERMER (Strictement aucun CTA commercial) */}
            <div className="flex items-center justify-end">
              <button
                onClick={() => setSelectedCourseForDetail(null)}
                className="w-full py-2.5 px-4 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] text-xs font-bold text-slate-200 transition-colors cursor-pointer text-center"
              >
                FERMER
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
