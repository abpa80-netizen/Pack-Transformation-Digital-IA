import React, { useState } from 'react';
import { 
  Briefcase, 
  ShoppingCart, 
  UserCheck, 
  Sparkles, 
  Video, 
  Package, 
  Bot, 
  Palette, 
  X, 
  ArrowRight,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';

interface TargetProfile {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  tag: string;
  accentColor: string;
  description: string;
  recommendedCourses: string[];
}

const TARGET_PROFILES: TargetProfile[] = [
  {
    id: 'entrepreneurs',
    title: 'Entrepreneurs',
    subtitle: 'Structurer & scaler',
    icon: Briefcase,
    tag: 'Business & Croissance',
    accentColor: 'from-blue-500/20 to-indigo-500/10 border-blue-500/30 text-blue-400',
    description: 'Vous lancez ou développez une entreprise et cherchez à piloter votre marketing, automatiser vos tâches et convertir vos prospects sans dépendre d’agences coûteuses.',
    recommendedCourses: [
      'Business en ligne',
      'Copywriting',
      'Facebook Ads',
      'Automatisation des workflows'
    ]
  },
  {
    id: 'ecommercants',
    title: 'E-commerçants',
    subtitle: 'Vente & acquisition',
    icon: ShoppingCart,
    tag: 'Vente en ligne',
    accentColor: 'from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emerald-400',
    description: 'Vous gérez une boutique en ligne ou lancez votre marque et souhaitez rentabiliser votre trafic, optimiser votre catalogue et maîtriser l’acquisition publicitaire.',
    recommendedCourses: [
      'Shopify',
      'Amazon FBA',
      'TikTok Marketing',
      'Achat/revente Vinted'
    ]
  },
  {
    id: 'freelances',
    title: 'Freelances',
    subtitle: 'Services & clients',
    icon: UserCheck,
    tag: 'Indépendants',
    accentColor: 'from-amber-500/20 to-yellow-500/10 border-amber-500/30 text-amber-400',
    description: 'Vous proposez des services indépendants et voulez étoffer votre catalogue d’offres, prospecter efficacement et livrer des résultats de haute qualité plus rapidement.',
    recommendedCourses: [
      'Acquisition clients',
      'Copywriting avec IA',
      'Webflow',
      'Canva'
    ]
  },
  {
    id: 'debutants',
    title: 'Débutants',
    subtitle: 'Démarrage guidé',
    icon: Sparkles,
    tag: 'Premiers pas',
    accentColor: 'from-cyan-500/20 to-blue-500/10 border-cyan-500/30 text-cyan-400',
    description: 'Vous partez de zéro dans le numérique et cherchez une méthode progressive, sans jargon inutile, pour acquérir rapidement des compétences concrètes et immédiatement applicables.',
    recommendedCourses: [
      'ChatGPT de A à Z',
      'Canva',
      'Instagram Business',
      'ChatGPT'
    ]
  },
  {
    id: 'createurs',
    title: 'Créateurs de contenu',
    subtitle: 'Audience & impact',
    icon: Video,
    tag: 'Médias sociaux',
    accentColor: 'from-purple-500/20 to-pink-500/10 border-purple-500/30 text-purple-400',
    description: 'Vous souhaitez développer une communauté engagée, produire des formats vidéo percutants à cadence élevée et convertir votre visibilité en opportunités durables.',
    recommendedCourses: [
      'YouTube',
      'YouTube Shorts',
      'Rédaction de contenus',
      'Photoshop'
    ]
  },
  {
    id: 'produits-digitaux',
    title: 'Vendeurs de produits digitaux',
    subtitle: 'MRR & infoproduits',
    icon: Package,
    tag: 'Produits numériques',
    accentColor: 'from-violet-500/20 to-purple-500/10 border-violet-500/30 text-violet-400',
    description: 'Vous souhaitez concevoir, packager et distribuer des e-books, templates, guides ou exploiter la licence de revente MRR pour générer des ventes numériques directes.',
    recommendedCourses: [
      'Vente d\'e-books avec ChatGPT & Canva',
      'Monétisation',
      'Copywriting',
      'Suite ultime de Bots'
    ]
  },
  {
    id: 'pros-ia',
    title: 'Professionnels intéressés par l\'IA',
    subtitle: 'Productivité & agents',
    icon: Bot,
    tag: 'Intelligence artificielle',
    accentColor: 'from-blue-500/20 to-sky-500/10 border-blue-500/30 text-blue-400',
    description: 'Vous voulez intégrer l’IA générative et l’automatisation dans vos flux professionnels quotidiens pour diviser par deux votre temps de travail opérationnel.',
    recommendedCourses: [
      'ChatGPT de A à Z',
      'Prompts',
      'Suite ultime de Bots',
      'Automatisation des workflows'
    ]
  },
  {
    id: 'creatifs-tech',
    title: 'Profils créatifs & tech',
    subtitle: 'Design & conception',
    icon: Palette,
    tag: 'Design & Code',
    accentColor: 'from-rose-500/20 to-pink-500/10 border-rose-500/30 text-rose-400',
    description: 'Vous combinez sensibilité esthétique et curiosité technologique pour bâtir des visuels saisissants, des interfaces modernes et des environnements web interactifs.',
    recommendedCourses: [
      'UI/UX',
      'Webflow',
      'Photoshop',
      'Midjourney'
    ]
  }
];

export const TargetAudienceSection: React.FC = () => {
  const [selectedProfile, setSelectedProfile] = useState<TargetProfile | null>(null);

  return (
    <section id="public-cible" className="py-14 sm:py-18 bg-[#07111F] border-t border-white/[0.06] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-mono font-bold tracking-widest text-blue-400 uppercase block mb-1.5">
            PROFILS & PARCOURS
          </span>
          <h2 
            className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-3"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            POUR QUI EST CE PACK ?
          </h2>
          <p className="text-xs sm:text-sm text-[#AAB7C4] leading-relaxed">
            Cliquez sur votre profil pour découvrir les formations et compétences du pack adaptées à vos objectifs.
          </p>
        </div>

        {/* 8 Modern Visual Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {TARGET_PROFILES.map((profile) => {
            const Icon = profile.icon;
            return (
              <button
                key={profile.id}
                onClick={() => setSelectedProfile(profile)}
                className="group p-4 sm:p-5 rounded-2xl bg-[#0D1B2A] border border-white/[0.08] hover:border-blue-500/50 hover:bg-[#0f2136] transition-all duration-200 text-left flex flex-col justify-between shadow-lg hover:shadow-blue-500/10 active:scale-[0.98] cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider hidden sm:inline">
                      {profile.subtitle}
                    </span>
                  </div>

                  <h3 
                    className="text-sm sm:text-base font-bold text-white mb-1 group-hover:text-blue-300 transition-colors"
                    style={{ fontFamily: 'Syne, sans-serif' }}
                  >
                    {profile.title}
                  </h3>
                  
                  <span className="text-[11px] font-mono text-blue-400/90 block mb-2">
                    {profile.tag}
                  </span>
                </div>

                <div className="pt-2 border-t border-white/[0.04] flex items-center justify-between text-[11px] text-slate-400 group-hover:text-white transition-colors">
                  <span>Voir le parcours</span>
                  <ChevronRight className="w-3.5 h-3.5 text-blue-400 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </button>
            );
          })}
        </div>

      </div>

      {/* Profile Detail Modal */}
      {selectedProfile && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-lg rounded-2xl bg-[#0D1B2A] border border-blue-500/40 p-5 sm:p-6 shadow-2xl text-slate-100 animate-in zoom-in-95 duration-150">
            
            {/* Close button */}
            <button
              onClick={() => setSelectedProfile(null)}
              className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors cursor-pointer"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Profile Header */}
            <div className="flex items-center gap-3.5 mb-4 pr-8">
              <div className="w-12 h-12 rounded-xl bg-blue-500/15 border border-blue-500/30 text-blue-400 flex items-center justify-center shrink-0">
                <selectedProfile.icon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-blue-400 uppercase tracking-wider block">
                  {selectedProfile.tag}
                </span>
                <h3 
                  className="text-lg sm:text-xl font-black text-white"
                  style={{ fontFamily: 'Syne, sans-serif' }}
                >
                  {selectedProfile.title}
                </h3>
              </div>
            </div>

            {/* Short Profile Description */}
            <p className="text-xs sm:text-sm text-[#AAB7C4] leading-relaxed mb-5 bg-[#07111F]/80 p-3.5 rounded-xl border border-white/[0.06]">
              {selectedProfile.description}
            </p>

            {/* Recommended Catalog Courses */}
            <div className="mb-6">
              <span className="text-xs font-semibold text-slate-300 block mb-2.5">
                Formations recommandées dans le pack :
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedProfile.recommendedCourses.map((courseTitle, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center gap-2 p-2.5 rounded-lg bg-[#07111F] border border-blue-500/20 text-xs text-slate-200"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span className="font-medium truncate">{courseTitle}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Close action */}
            <div className="flex justify-end pt-3 border-t border-white/[0.08]">
              <button
                onClick={() => setSelectedProfile(null)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] text-xs font-bold text-white transition-colors cursor-pointer"
              >
                Fermer
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
