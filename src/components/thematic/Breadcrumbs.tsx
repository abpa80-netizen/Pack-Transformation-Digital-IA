import React from 'react';
import { Home, ChevronRight } from 'lucide-react';
import { Link } from '../Link';
import { OFFICIAL_SITE_URL } from '../../config/site';

interface BreadcrumbsProps {
  pageTitle: string;
  pageSlug: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ pageTitle, pageSlug }) => {
  const baseUrl = OFFICIAL_SITE_URL || '';
  
  const breadcrumbListSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Accueil',
        item: baseUrl ? `${baseUrl}/` : '/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Formations Digitales',
        item: baseUrl ? `${baseUrl}/#catalogue` : '/#catalogue',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: pageTitle,
        item: baseUrl ? `${baseUrl}${pageSlug}` : pageSlug,
      },
    ],
  };

  return (
    <nav aria-label="Fil d'Ariane" className="py-4 border-b border-slate-800/80 bg-[#07111F]/60 backdrop-blur-md">
      {/* Schema.org BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbListSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 text-xs sm:text-sm text-slate-400 overflow-x-auto whitespace-nowrap py-1">
          <li className="flex items-center">
            <Link
              href="/"
              className="flex items-center gap-1.5 hover:text-blue-400 transition-colors text-slate-300"
            >
              <Home className="w-3.5 h-3.5 text-blue-500" />
              <span>Accueil</span>
            </Link>
          </li>
          <li className="flex items-center">
            <ChevronRight className="w-3.5 h-3.5 text-slate-600 mx-1 flex-shrink-0" />
            <Link
              href="/#catalogue"
              className="hover:text-blue-400 transition-colors text-slate-300"
            >
              Formations Digitales
            </Link>
          </li>
          <li className="flex items-center">
            <ChevronRight className="w-3.5 h-3.5 text-slate-600 mx-1 flex-shrink-0" />
            <span className="text-blue-400 font-medium truncate max-w-[200px] sm:max-w-none">
              {pageTitle}
            </span>
          </li>
        </ol>
      </div>
    </nav>
  );
};
