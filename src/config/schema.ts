/**
 * Générateur centralisé de données structurées Schema.org (JSON-LD)
 * Vision Libre / Vision Libre Digital Lab
 *
 * RÈGLES CRITIQUES :
 * - Toujours sérialiser via JSON.stringify() pour garantir un JSON valide (zéro caractère de contrôle non échappé).
 * - Correspondance stricte avec le contenu visible de chaque page.
 * - Pas de notes inventées, d'avis fictifs ou de certifications non vérifiées.
 */

import { OFFICIAL_SITE_URL } from './site';
import { THEMATIC_PAGES } from '../data/thematicPages';
import { FAQ_DATA } from '../data/faq';

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export function getOrganizationSchema(baseUrl: string = OFFICIAL_SITE_URL) {
  const url = baseUrl || 'https://packtransformationia.vercel.app';
  return {
    '@type': 'Organization',
    '@id': `${url}/#organization`,
    name: 'VISION LIBRE DIGITAL LAB',
    alternateName: 'Vision Libre',
    url: `${url}/`,
    logo: `${url}/og-image.jpg`,
  };
}

export function getWebSiteSchema(baseUrl: string = OFFICIAL_SITE_URL) {
  const url = baseUrl || 'https://packtransformationia.vercel.app';
  return {
    '@type': 'WebSite',
    '@id': `${url}/#website`,
    name: 'Vision Libre',
    url: `${url}/`,
    inLanguage: 'fr',
    publisher: {
      '@id': `${url}/#organization`,
    },
  };
}

export function getProductSchema(baseUrl: string = OFFICIAL_SITE_URL) {
  const url = baseUrl || 'https://packtransformationia.vercel.app';
  return {
    '@type': 'Product',
    '@id': `${url}/#product`,
    name: 'Pack Transformation Digital & IA',
    description: "51 formations et masterclasses opérationnelles dans l'intelligence artificielle, le business en ligne, le marketing digital, la technologie, le design et la finance, accompagnées d'une licence de revente MRR.",
    url: `${url}/`,
    image: `${url}/og-image.jpg`,
    brand: {
      '@id': `${url}/#organization`,
    },
    category: 'Formation professionnelle digitale',
    offers: {
      '@type': 'Offer',
      price: '249',
      priceCurrency: 'MAD',
      priceValidUntil: '2027-12-31',
      availability: 'https://schema.org/InStock',
      url: `${url}/`,
    },
  };
}

export function getBreadcrumbListSchema(items: BreadcrumbItem[], baseUrl: string = OFFICIAL_SITE_URL) {
  const url = baseUrl || 'https://packtransformationia.vercel.app';
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => {
      const fullUrl = item.path.startsWith('http') 
        ? item.path 
        : `${url}${item.path.startsWith('/') ? item.path : '/' + item.path}`;
      return {
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: fullUrl,
      };
    }),
  };
}

export function getFaqPageSchema(faqItems: { question: string; answer: string }[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

/**
 * Génère le graphe JSON-LD Schema.org complet pour une route donnée.
 */
export function getPageJsonLd(route: string, baseUrl: string = OFFICIAL_SITE_URL) {
  const url = baseUrl || 'https://packtransformationia.vercel.app';
  const isHome = route === '/' || route === '';

  const graph: any[] = [
    getOrganizationSchema(url),
    getWebSiteSchema(url),
  ];

  if (isHome) {
    // 1. Offre commerciale du Pack
    graph.push(getProductSchema(url));

    // 2. FAQ visible de la page d'accueil
    if (FAQ_DATA && FAQ_DATA.length > 0) {
      graph.push(getFaqPageSchema(FAQ_DATA.map(f => ({ question: f.question, answer: f.answer }))));
    }
  } else {
    const config = THEMATIC_PAGES[route];
    if (config) {
      // 1. Fil d'Ariane spécifique
      const breadcrumbs: BreadcrumbItem[] = [
        { name: 'Accueil', path: '/' },
        { name: 'Formations Digitales', path: '/#catalogue' },
        { name: config.tag, path: route },
      ];
      graph.push(getBreadcrumbListSchema(breadcrumbs, url));

      // 2. FAQ spécifique visible sur la page
      if (config.faq && config.faq.length > 0) {
        graph.push(getFaqPageSchema(config.faq));
      }
    }
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}
