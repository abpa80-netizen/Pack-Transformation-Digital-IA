/**
 * Configuration centralisée du site et des métadonnées SEO
 * Vision Libre / Vision Libre Digital Lab
 *
 * RÈGLES CRITIQUES :
 * - Aucune URL locale (localhost) ou de prévisualisation temporaire (.run.app, webcontainer, etc.)
 *   ne doit être considérée comme domaine de production officiel.
 * - Domaine officiel actif actuel : https://packtransformationia.vercel.app
 * - Remplacement futur : Configurer SITE_URL ou VITE_SITE_URL (ex: https://visionlibre.ma)
 */

export const DEFAULT_PRODUCTION_URL = 'https://packtransformationia.vercel.app';

// Détection stricte d'environnements locaux ou de prévisualisation temporaire
export const isNonProductionUrl = (url: string): boolean => {
  if (!url) return true;
  const lower = url.toLowerCase();
  return (
    lower.includes('localhost') ||
    lower.includes('127.0.0.1') ||
    lower.includes('.run.app') ||
    lower.includes('webcontainer') ||
    lower.includes('ais-')
  );
};

export const resolveOfficialSiteUrl = (configuredUrl?: string): string => {
  const raw = (
    configuredUrl ||
    (typeof import.meta !== 'undefined' && import.meta.env && (import.meta.env.VITE_SITE_URL as string)) ||
    (typeof process !== 'undefined' && process.env && (process.env.VITE_SITE_URL || process.env.SITE_URL)) ||
    ''
  ).trim();

  // Si une URL de production personnalisée est configurée et n'est pas un domaine de preview
  if (raw && !isNonProductionUrl(raw)) {
    return raw.replace(/\/$/, '');
  }

  // Domaine Vercel officiel actif actuel
  return DEFAULT_PRODUCTION_URL.replace(/\/$/, '');
};

// URL canonique officielle active
export const OFFICIAL_SITE_URL = resolveOfficialSiteUrl();

export const SITE_CONFIG = {
  name: 'Vision Libre',
  legalName: 'VISION LIBRE DIGITAL LAB',
  productName: 'Pack Transformation Digital & IA',
  title: 'Pack Transformation Digital & IA | Vision Libre',
  description: "Découvrez le Pack Transformation Digital & IA de Vision Libre : 51 formations dans l'intelligence artificielle, le business en ligne, le marketing digital, la technologie, le design et la finance.",
  siteUrl: OFFICIAL_SITE_URL,
  ogImage: '/og-image.jpg',
  locale: 'fr_FR',
  lang: 'fr',
  price: '249',
  priceCurrency: 'MAD',
  availability: 'https://schema.org/InStock',
} as const;
