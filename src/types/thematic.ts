export interface KeySkill {
  title: string;
  description: string;
}

export interface ThematicFaqItem {
  question: string;
  answer: string;
}

export interface ThematicPageConfig {
  slug: string; // ex: '/formation-ia'
  title: string; // Balise <title>
  metaDescription: string; // Balise <meta name="description">
  h1: string; // Unique H1
  tag: string; // Badge thématique
  subtitle: string; // Sous-titre introductif
  introParagraphs: string[]; // Présentation approfondie du domaine
  localFocusNote?: string; // Mention contextuelle Maroc / Afrique francophone
  keySkills: KeySkill[]; // 4 à 6 compétences concrètes
  courseIds: string[]; // Identifiants stricts des formations du catalogue (COURSES_DATA)
  whyThisPack: string[]; // Arguments factuels liés au pack 51 formations
  isFinance?: boolean; // Avertissement légal spécifique obligatoire
  faq: ThematicFaqItem[]; // FAQ spécifique à la page
  relatedThematicSlugs: string[]; // Maillage interne vers les autres pages
}
