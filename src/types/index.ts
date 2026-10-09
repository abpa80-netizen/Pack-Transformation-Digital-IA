export type PillarCategory = 
  | 'ia-automatisation'
  | 'business-ecommerce'
  | 'marketing-digital'
  | 'trading-crypto'
  | 'tech-design';

export type CourseCategory = 
  | 'ia' 
  | 'business' 
  | 'ecommerce' 
  | 'marketing' 
  | 'content' 
  | 'design' 
  | 'tech' 
  | 'finance';

export interface Course {
  id: string;
  title: string;
  pillar: PillarCategory;
  category: CourseCategory;
  level: 'Débutant' | 'Intermédiaire' | 'Tous niveaux';
  highlight?: string;
  tag: string;
}

export interface Pillar {
  id: PillarCategory;
  number: string;
  title: string;
  shortDescription: string;
  iconName: string;
  courseCount: number;
  colorGradient: string;
  skills: string[];
}

export interface PathwayStep {
  stepNumber: number;
  title: string;
  description: string;
}

export interface ObjectivePathway {
  id: string;
  title: string;
  shortPhrase?: string;
  badge: string;
  summary: string;
  steps: PathwayStep[];
  imageUrl?: string;
  isFinance?: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: 'contenu' | 'revente' | 'technique' | 'commande';
}
