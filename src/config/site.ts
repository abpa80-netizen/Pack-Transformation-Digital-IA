/**
 * Configuration centralisée du site et des métadonnées SEO
 * Vision Libre / Vision Libre Digital Lab
 *
 * RÈGLES CRITIQUES :
 * - Aucune URL locale (localhost) ou de prévisualisation (.run.app, webcontainer, etc.)
 *   ne doit être considérée comme domaine de production officiel.
 * - Le domaine de production doit être configuré via la variable d'environnement VITE_SITE_URL.
 * - Ne pas inventer de domaine fictif.
 */

const rawSiteUrl = (
  (typeof import.meta !== 'undefined' && import.meta.env && (import.meta.env.VITE_SITE_URL as string)) ||
  (typeof process !== 'undefined' && process.env && (process.env.VITE_SITE_URL || process.env.SITE_URL)) ||
  ''
).trim();

// Détection stricte d'environnements locaux ou de prévisualisation temporaire
const isNonProductionUrl = (url: string): boolean => {
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

// URL canonique officielle de production (vide par défaut si non configurée pour éviter les erreurs d'indexation)
export const OFFICIAL_SITE_URL = isNonProductionUrl(rawSiteUrl) 
  ? '' 
  : rawSiteUrl.replace(/\/$/, '');

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
