import fs from 'fs';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { createServer } from 'vite';
import { THEMATIC_PAGES } from '../src/data/thematicPages';
import { OFFICIAL_SITE_URL, SITE_CONFIG } from '../src/config/site';

const DIST_DIR = path.resolve('dist');

async function prerender() {
  console.log('🚀 Démarrage du pré-rendu statique SEO pour Vercel et Googlebot...');

  const templatePath = path.join(DIST_DIR, 'index.html');
  if (!fs.existsSync(templatePath)) {
    throw new Error(`dist/index.html introuvable. Exécutez vite build avant.`);
  }

  const template = fs.readFileSync(templatePath, 'utf8');

  // Initialisation de l'environnement SSR de Vite pour résoudre proprement tous les assets (images, styles, etc.)
  const vite = await createServer({
    server: { 
      middlewareMode: true, 
      hmr: false 
    },
    appType: 'custom',
  });

  const { default: App } = await vite.ssrLoadModule('./src/App.tsx');

  const routes = [
    '/',
    ...Object.keys(THEMATIC_PAGES),
  ];

  for (const route of routes) {
    console.log(`  ➔ Pré-rendu de la route : ${route}`);

    const isHome = route === '/';
    const config = THEMATIC_PAGES[route];

    const title = isHome 
      ? SITE_CONFIG.title 
      : config?.title || SITE_CONFIG.title;

    const description = isHome 
      ? SITE_CONFIG.description 
      : config?.metaDescription || SITE_CONFIG.description;

    const canonicalUrl = OFFICIAL_SITE_URL 
      ? (isHome ? `${OFFICIAL_SITE_URL}/` : `${OFFICIAL_SITE_URL}${route}`)
      : '';

    // Rendu HTML du composant React pour la route
    const appHtml = renderToString(React.createElement(App, { initialPath: route }));

    // Assemblage du HTML pré-rendu
    let pageHtml = template;

    // 1. Remplacement de <title>
    pageHtml = pageHtml.replace(
      /<title>.*?<\/title>/,
      `<title>${title}</title>`
    );

    // 2. Remplacement de meta description
    pageHtml = pageHtml.replace(
      /<meta name="description" content=".*?" \/>/,
      `<meta name="description" content="${description}" />`
    );

    // 3. Mise à jour Open Graph
    pageHtml = pageHtml.replace(
      /<meta property="og:title" content=".*?" \/>/,
      `<meta property="og:title" content="${title}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta property="og:description" content=".*?" \/>/,
      `<meta property="og:description" content="${description}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta name="twitter:title" content=".*?" \/>/,
      `<meta name="twitter:title" content="${title}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta name="twitter:description" content=".*?" \/>/,
      `<meta name="twitter:description" content="${description}" />`
    );

    // 4. Balise Canonique si le domaine officiel est configuré
    if (canonicalUrl) {
      const canonicalTag = `<link rel="canonical" href="${canonicalUrl}" />\n    <meta property="og:url" content="${canonicalUrl}" />`;
      if (pageHtml.includes('rel="canonical"')) {
        pageHtml = pageHtml.replace(/<link rel="canonical".*?\/>/, canonicalTag);
      } else {
        pageHtml = pageHtml.replace('</head>', `    ${canonicalTag}\n  </head>`);
      }
    }

    // 5. Injection du contenu pré-rendu dans #root
    pageHtml = pageHtml.replace(
      '<div id="root"></div>',
      `<div id="root">${appHtml}</div>`
    );

    // 6. Écriture du fichier HTML (format index.html dans le sous-dossier correspondant)
    if (isHome) {
      fs.writeFileSync(path.join(DIST_DIR, 'index.html'), pageHtml, 'utf8');
    } else {
      const routeDir = path.join(DIST_DIR, route.substring(1));
      fs.mkdirSync(routeDir, { recursive: true });
      fs.writeFileSync(path.join(routeDir, 'index.html'), pageHtml, 'utf8');
      // Pour une compatibilité absolue avec tous les serveurs web (Vercel, Apache, Nginx)
      fs.writeFileSync(path.join(DIST_DIR, `${route.substring(1)}.html`), pageHtml, 'utf8');
    }
  }

  // 7. Synchronisation absolue du sitemap.xml dans dist/
  const sitemapEntries = routes.map((r) => {
    const loc = r === '/' ? `${OFFICIAL_SITE_URL}/` : `${OFFICIAL_SITE_URL}${r}`;
    const priority = r === '/' ? '1.0' : '0.8';
    return `  <url>\n    <loc>${loc}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
  }).join('\n');

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapEntries}\n</urlset>\n`;
  fs.writeFileSync(path.join(DIST_DIR, 'sitemap.xml'), sitemapXml, 'utf8');

  // 8. Synchronisation absolue du robots.txt dans dist/
  const robotsTxt = `# robots.txt pour Vision Libre / Vision Libre Digital Lab\nUser-agent: *\nAllow: /\nDisallow: /api/\n\nSitemap: ${OFFICIAL_SITE_URL}/sitemap.xml\n`;
  fs.writeFileSync(path.join(DIST_DIR, 'robots.txt'), robotsTxt, 'utf8');

  await vite.close();
  console.log(`✅ Pré-rendu terminé avec succès pour les ${routes.length} pages publiques avec sitemap et robots synchronisés.`);
}

prerender().catch((err) => {
  console.error('❌ Erreur lors du pré-rendu SEO :', err);
  process.exit(1);
});
