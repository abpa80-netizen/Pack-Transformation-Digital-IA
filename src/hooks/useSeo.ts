import { useEffect } from 'react';
import { SITE_CONFIG, OFFICIAL_SITE_URL } from '../config/site';
import { getPageJsonLd } from '../config/schema';

export interface SeoProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'product';
  noIndex?: boolean;
}

/**
 * Hook de gestion dynamique des métadonnées SEO pour les pages publiques.
 * Permet à chaque page d'avoir son propre titre, description, canonical, OpenGraph et données Schema.org.
 */
export function useSeo({
  title = SITE_CONFIG.title,
  description = SITE_CONFIG.description,
  canonicalPath = '/',
  ogImage = SITE_CONFIG.ogImage,
  ogType = 'website',
  noIndex = false,
}: SeoProps = {}) {
  useEffect(() => {
    // 1. Titre du document
    document.title = title;

    // Helper pour mettre à jour ou créer une balise meta
    const setMetaTag = (attributeName: 'name' | 'property', attributeValue: string, content: string) => {
      let meta = document.querySelector(`meta[${attributeName}="${attributeValue}"]`) as HTMLMetaElement | null;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attributeName, attributeValue);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // 2. Méta description
    setMetaTag('name', 'description', description);

    // 3. Robots meta (indexation)
    setMetaTag('name', 'robots', noIndex ? 'noindex, nofollow' : 'index, follow');

    // 4. Open Graph & Twitter Cards
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:site_name', SITE_CONFIG.name);
    setMetaTag('property', 'og:locale', SITE_CONFIG.locale);
    setMetaTag('property', 'og:image', ogImage);

    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', ogImage);

    // 5. URL Canonique
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (OFFICIAL_SITE_URL) {
      const cleanPath = canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`;
      const canonicalUrl = `${OFFICIAL_SITE_URL}${cleanPath}`;
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', canonicalUrl);
      setMetaTag('property', 'og:url', canonicalUrl);
    } else if (canonicalLink) {
      canonicalLink.remove();
    }

    // 6. Données structurées JSON-LD Schema.org (Graphe unique et sérialisé de manière sûre)
    try {
      const jsonLdData = getPageJsonLd(canonicalPath);
      let scriptTag = document.getElementById('schema-org') as HTMLScriptElement | null;
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = 'schema-org';
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(jsonLdData);
    } catch (err) {
      console.error('Erreur mise à jour Schema.org client:', err);
    }
  }, [title, description, canonicalPath, ogImage, ogType, noIndex]);
}
