import { Course } from '../types';

/**
 * Catalogue éditorial nettoyé à partir de la liste fournie.
 * Les intitulés incomplets ou sans sujet identifiable ne sont pas affichés.
 * Les éléments marqués isBonus sont des contenus complémentaires (environ 25 % par domaine).
 */
export const COURSES_DATA: Course[] = [
  // IA & automatisation — 75 % parcours principal, 25 % approfondissement
  { id: 'ia-01', title: 'ChatGPT de A à Z : maîtriser ChatGPT', pillar: 'ia-automatisation', category: 'ia', level: 'Débutant', tag: 'Fondamentaux IA', highlight: 'Comprendre les usages de ChatGPT et l’intégrer à ses tâches.', isBonus: false },
  { id: 'ia-02', title: 'Boostez votre productivité avec ChatGPT : 50+ prompts', pillar: 'ia-automatisation', category: 'ia', level: 'Débutant', tag: 'Prompts', highlight: 'Structurer des demandes plus utiles et gagner du temps.', isBonus: false },
  { id: 'ia-03', title: 'Automatisation sur ChatGPT : optimiser son flux de travail', pillar: 'ia-automatisation', category: 'ia', level: 'Intermédiaire', tag: 'Automatisation', highlight: 'Identifier les tâches répétitives et organiser ses workflows.', isBonus: false },
  { id: 'ia-04', title: 'Le guide de l’IA : ChatGPT, Midjourney et DALL·E', pillar: 'ia-automatisation', category: 'ia', level: 'Débutant', tag: 'Panorama IA', highlight: 'Découvrir les principaux usages de l’IA générative.', isBonus: false },
  { id: 'ia-05', title: 'La suite ultime de bots ChatGPT : de zéro à héros', pillar: 'ia-automatisation', category: 'ia', level: 'Intermédiaire', tag: 'Bots & assistants', highlight: 'Explorer les assistants conversationnels et leurs usages.', isBonus: false },
  { id: 'ia-06', title: 'ChatGPT pour programmeurs : applications Python assistées par IA', pillar: 'ia-automatisation', category: 'ia', level: 'Intermédiaire', tag: 'Code assisté par IA', highlight: 'Utiliser l’IA pour comprendre et produire du code.', isBonus: false },
  { id: 'ia-07', title: 'ChatGPT et IA génératives : créer des présentations', pillar: 'ia-automatisation', category: 'ia', level: 'Tous niveaux', tag: 'Présentations', highlight: 'Préparer des supports plus rapidement avec l’IA.', isBonus: false },
  { id: 'ia-08', title: 'ChatGPT & WordPress : planifier un mois de contenu', pillar: 'ia-automatisation', category: 'ia', level: 'Intermédiaire', tag: 'Contenu assisté', highlight: 'Organiser un calendrier éditorial assisté par IA.', isBonus: false },
  { id: 'ia-09', title: 'ChatGPT et copywriting : devenir copywriter freelance', pillar: 'ia-automatisation', category: 'ia', level: 'Intermédiaire', tag: 'Copywriting IA', highlight: 'Découvrir la rédaction commerciale assistée par IA.', isBonus: false },
  { id: 'ia-10', title: 'Stable Diffusion : générer des images par IA', pillar: 'ia-automatisation', category: 'ia', level: 'Intermédiaire', tag: 'Images IA', highlight: 'Explorer la création d’images à l’aide de modèles génératifs.', isBonus: false },
  { id: 'ia-11', title: 'ChatGPT, marketing digital et prompts', pillar: 'ia-automatisation', category: 'ia', level: 'Tous niveaux', tag: 'IA appliquée au marketing', highlight: 'Relier les prompts aux tâches marketing courantes.', isBonus: false },
  { id: 'ia-12', title: 'Comprendre l’impact des vidéos deepfake', pillar: 'ia-automatisation', category: 'ia', level: 'Tous niveaux', tag: 'Culture numérique', highlight: 'Comprendre les enjeux des contenus vidéo synthétiques.', isBonus: true },
  { id: 'ia-13', title: 'ChatGPT : rédaction de contenus et prompts', pillar: 'ia-automatisation', category: 'ia', level: 'Tous niveaux', tag: 'Atelier pratique', highlight: 'Approfondir la rédaction assistée par IA.', isBonus: true },

  // Business, produits digitaux & e-commerce
  { id: 'biz-01', title: 'Créer un business en ligne : principes et modèles', pillar: 'business-ecommerce', category: 'business', level: 'Débutant', tag: 'Business en ligne', highlight: 'Comprendre les bases d’une activité numérique.', isBonus: false },
  { id: 'biz-02', title: 'Créer et vendre des livres numériques avec ChatGPT & Canva', pillar: 'business-ecommerce', category: 'content', level: 'Débutant', tag: 'Produits digitaux', highlight: 'Structurer un ebook et préparer sa commercialisation.', isBonus: false },
  { id: 'biz-03', title: 'Créer une boutique en ligne avec Shopify', pillar: 'business-ecommerce', category: 'ecommerce', level: 'Débutant', tag: 'Shopify', highlight: 'Découvrir les étapes de création d’une boutique.', isBonus: false },
  { id: 'biz-04', title: 'Amazon FBA : les fondamentaux du vendeur', pillar: 'business-ecommerce', category: 'ecommerce', level: 'Intermédiaire', tag: 'Amazon FBA', highlight: 'Comprendre le fonctionnement d’une activité marketplace.', isBonus: false },
  { id: 'biz-05', title: 'Achat-revente sur Vinted : démarrer', pillar: 'business-ecommerce', category: 'ecommerce', level: 'Débutant', tag: 'Achat-revente', highlight: 'Découvrir les principes de la revente de seconde main.', isBonus: false },
  { id: 'biz-06', title: 'Créer une chaîne YouTube Shorts et la monétiser', pillar: 'business-ecommerce', category: 'content', level: 'Tous niveaux', tag: 'Vidéo courte', highlight: 'Comprendre les formats courts et leurs possibilités de monétisation.', isBonus: false },
  { id: 'biz-07', title: 'Créer et administrer une chaîne YouTube', pillar: 'business-ecommerce', category: 'content', level: 'Débutant', tag: 'YouTube', highlight: 'Organiser une chaîne et ses contenus.', isBonus: false },
  { id: 'biz-08', title: 'Webflow : créer un site web sans coder', pillar: 'business-ecommerce', category: 'design', level: 'Débutant', tag: 'No-code', highlight: 'Découvrir la création de sites sans programmation traditionnelle.', isBonus: false },
  { id: 'biz-09', title: 'Canva : créer un CV professionnel', pillar: 'business-ecommerce', category: 'design', level: 'Débutant', tag: 'Canva', highlight: 'Concevoir un CV clair et visuel.', isBonus: false },
  { id: 'biz-10', title: 'Vendre ses produits numériques : stratégie de lancement', pillar: 'business-ecommerce', category: 'business', level: 'Tous niveaux', tag: 'Monétisation digitale', highlight: 'Structurer la présentation et la vente de produits numériques.', isBonus: false },
  { id: 'biz-11', title: 'Les bases d’un commerce numérique rentable', pillar: 'business-ecommerce', category: 'business', level: 'Tous niveaux', tag: 'Stratégie business', highlight: 'Repérer les éléments essentiels d’une offre en ligne.', isBonus: false },
  { id: 'biz-12', title: 'E-commerce : lancer une activité de vente en ligne', pillar: 'business-ecommerce', category: 'ecommerce', level: 'Débutant', tag: 'Vente en ligne', highlight: 'Comprendre les étapes d’un lancement e-commerce.', isBonus: true },

  // Marketing digital & réseaux sociaux
  { id: 'mkt-01', title: 'Référencement Google : devenir visible sur les moteurs de recherche', pillar: 'marketing-digital', category: 'marketing', level: 'Intermédiaire', tag: 'SEO', highlight: 'Découvrir les leviers du référencement naturel.', isBonus: false },
  { id: 'mkt-02', title: 'Apprendre Google Ads', pillar: 'marketing-digital', category: 'marketing', level: 'Intermédiaire', tag: 'Publicité Google', highlight: 'Comprendre les campagnes publicitaires sur Google.', isBonus: false },
  { id: 'mkt-03', title: 'Apprendre Facebook Ads', pillar: 'marketing-digital', category: 'marketing', level: 'Intermédiaire', tag: 'Publicité sociale', highlight: 'Découvrir le paramétrage et le pilotage de campagnes.', isBonus: false },
  { id: 'mkt-04', title: 'TikTok pour le marketing', pillar: 'marketing-digital', category: 'marketing', level: 'Débutant', tag: 'TikTok', highlight: 'Adapter ses contenus aux usages de TikTok.', isBonus: false },
  { id: 'mkt-05', title: 'Instagram Business : développer sa présence professionnelle', pillar: 'marketing-digital', category: 'marketing', level: 'Débutant', tag: 'Instagram', highlight: 'Structurer une présence de marque sur Instagram.', isBonus: false },
  { id: 'mkt-06', title: 'Twitter/X pour les professionnels', pillar: 'marketing-digital', category: 'marketing', level: 'Tous niveaux', tag: 'Réseaux sociaux', highlight: 'Utiliser le réseau dans un contexte professionnel.', isBonus: false },
  { id: 'mkt-07', title: 'Community management : animer une communauté', pillar: 'marketing-digital', category: 'marketing', level: 'Débutant', tag: 'Communauté', highlight: 'Planifier et animer des contenus sociaux.', isBonus: false },
  { id: 'mkt-08', title: 'Emails professionnels : mieux écrire au travail', pillar: 'marketing-digital', category: 'marketing', level: 'Débutant', tag: 'Communication écrite', highlight: 'Rendre ses emails professionnels plus clairs.', isBonus: false },
  { id: 'mkt-09', title: 'Google : comprendre les outils et services essentiels', pillar: 'marketing-digital', category: 'marketing', level: 'Débutant', tag: 'Outils numériques', highlight: 'Se repérer dans les principaux outils Google.', isBonus: false },
  { id: 'mkt-10', title: 'Référencement naturel SEO : fondamentaux', pillar: 'marketing-digital', category: 'marketing', level: 'Débutant', tag: 'SEO', highlight: 'Comprendre les bases de la visibilité organique.', isBonus: false },
  { id: 'mkt-11', title: 'Marketing digital : principes et canaux d’acquisition', pillar: 'marketing-digital', category: 'marketing', level: 'Débutant', tag: 'Stratégie marketing', highlight: 'Identifier les canaux numériques adaptés à une offre.', isBonus: false },
  { id: 'mkt-12', title: 'Créer du contenu pour les réseaux sociaux', pillar: 'marketing-digital', category: 'marketing', level: 'Tous niveaux', tag: 'Contenu social', highlight: 'Organiser ses idées et son calendrier éditorial.', isBonus: true },

  // Développement, informatique & cybersécurité
  { id: 'tech-01', title: 'React : guide complet avec Redux, Router et Firebase', pillar: 'tech-design', category: 'tech', level: 'Intermédiaire', tag: 'Développement web', highlight: 'Approfondir les briques courantes d’une application React.', isBonus: false },
  { id: 'tech-02', title: 'Data Science et Machine Learning avec Python', pillar: 'tech-design', category: 'tech', level: 'Intermédiaire', tag: 'Data & Python', highlight: 'Découvrir les bases de l’analyse de données et du machine learning.', isBonus: false },
  { id: 'tech-03', title: 'Réseaux informatiques : les fondamentaux', pillar: 'tech-design', category: 'tech', level: 'Débutant', tag: 'Réseaux', highlight: 'Comprendre les composants et principes des réseaux.', isBonus: false },
  { id: 'tech-04', title: 'Devenir administrateur réseau', pillar: 'tech-design', category: 'tech', level: 'Intermédiaire', tag: 'Administration réseau', highlight: 'Découvrir les missions et outils de l’administration réseau.', isBonus: false },
  { id: 'tech-05', title: 'Fondements de la sécurité informatique et de la cybersécurité', pillar: 'tech-design', category: 'tech', level: 'Débutant', tag: 'Cybersécurité', highlight: 'Apprendre les principes de protection des systèmes.', isBonus: false },
  { id: 'tech-06', title: 'Hacking et sécurité : acquérir les fondamentaux', pillar: 'tech-design', category: 'tech', level: 'Intermédiaire', tag: 'Sécurité informatique', highlight: 'Étudier les principes de sécurité dans un cadre légal.', isBonus: false },
  { id: 'tech-07', title: 'Ethical hacking : introduction aux tests de sécurité', pillar: 'tech-design', category: 'tech', level: 'Intermédiaire', tag: 'Sécurité défensive', highlight: 'Comprendre les bases des tests de sécurité autorisés.', isBonus: false },
  { id: 'tech-08', title: 'Créer des applications mobiles', pillar: 'tech-design', category: 'tech', level: 'Intermédiaire', tag: 'Applications mobiles', highlight: 'Découvrir les étapes de conception d’une application.', isBonus: false },
  { id: 'tech-09', title: 'Développer une application multiplateforme avec Ionic', pillar: 'tech-design', category: 'tech', level: 'Intermédiaire', tag: 'Ionic', highlight: 'Créer des interfaces mobiles multiplateformes.', isBonus: false },
  { id: 'tech-10', title: 'Protéger sa vie privée et son anonymat sur Internet', pillar: 'tech-design', category: 'tech', level: 'Tous niveaux', tag: 'Vie privée', highlight: 'Adopter de meilleures pratiques de confidentialité numérique.', isBonus: false },
  { id: 'tech-11', title: 'Réussir et automatiser sa veille sur Internet', pillar: 'tech-design', category: 'tech', level: 'Tous niveaux', tag: 'Veille numérique', highlight: 'Organiser la collecte et le suivi d’informations.', isBonus: true },
  { id: 'tech-12', title: 'Transformation numérique et enjeux du big data', pillar: 'tech-design', category: 'tech', level: 'Tous niveaux', tag: 'Culture data', highlight: 'Comprendre les enjeux des données dans les organisations.', isBonus: true },

  // Gestion, bureautique & management
  { id: 'office-01', title: 'Les fondements de la gestion de projet agile', pillar: 'business-ecommerce', category: 'business', level: 'Débutant', tag: 'Gestion de projet', highlight: 'Découvrir les principes et rituels agiles.', isBonus: false },
  { id: 'office-02', title: 'Perfectionner sa gestion de projet agile', pillar: 'business-ecommerce', category: 'business', level: 'Intermédiaire', tag: 'Gestion de projet', highlight: 'Approfondir la coordination et le suivi de projets.', isBonus: false },
  { id: 'office-03', title: 'Choisir d’être un bon manager', pillar: 'business-ecommerce', category: 'business', level: 'Tous niveaux', tag: 'Management', highlight: 'Développer les bases d’un management responsable.', isBonus: false },
  { id: 'office-04', title: 'Motiver ses équipes malgré la fatigue et le stress', pillar: 'business-ecommerce', category: 'business', level: 'Tous niveaux', tag: 'Leadership', highlight: 'Explorer des approches de motivation et de gestion d’équipe.', isBonus: false },
  { id: 'office-05', title: 'Excel 2021 : les essentiels', pillar: 'tech-design', category: 'tech', level: 'Débutant', tag: 'Bureautique', highlight: 'Maîtriser les fonctions courantes d’Excel.', isBonus: false },
  { id: 'office-06', title: 'PowerPoint 2021 : les essentiels', pillar: 'tech-design', category: 'tech', level: 'Débutant', tag: 'Présentations', highlight: 'Créer des présentations structurées.', isBonus: false },
  { id: 'office-07', title: 'Access 2021 : les essentiels', pillar: 'tech-design', category: 'tech', level: 'Débutant', tag: 'Bases de données', highlight: 'Découvrir les bases d’Access.', isBonus: true },

  // Design & création visuelle
  { id: 'design-01', title: 'Photoshop 2022 : les essentiels', pillar: 'tech-design', category: 'design', level: 'Débutant', tag: 'Design graphique', highlight: 'Découvrir les outils essentiels de retouche et de création.', isBonus: false },
  { id: 'design-02', title: 'Photoshop 2020 : techniques de création visuelle', pillar: 'tech-design', category: 'design', level: 'Intermédiaire', tag: 'Photoshop', highlight: 'Approfondir les techniques de retouche et de composition.', isBonus: true },

  // Finance, bourse, trading & crypto — contenu pédagogique, aucun conseil financier
  { id: 'fin-01', title: 'Les fondements de la finance', pillar: 'trading-crypto', category: 'finance', level: 'Débutant', tag: 'Finance', highlight: 'Comprendre les concepts financiers essentiels.', isBonus: false },
  { id: 'fin-02', title: 'Cryptomonnaies et DeFi : bases et trading', pillar: 'trading-crypto', category: 'finance', level: 'Intermédiaire', tag: 'Crypto & DeFi', highlight: 'Découvrir les cryptoactifs et la finance décentralisée.', isBonus: false },
  { id: 'fin-03', title: 'Analyse financière : diagnostic et méthodes', pillar: 'trading-crypto', category: 'finance', level: 'Intermédiaire', tag: 'Analyse financière', highlight: 'Apprendre à lire et interpréter des informations financières.', isBonus: false },
  { id: 'fin-04', title: 'Investissement boursier : les fondamentaux', pillar: 'trading-crypto', category: 'finance', level: 'Débutant', tag: 'Bourse', highlight: 'Comprendre les mécanismes de base des marchés boursiers.', isBonus: false },
  { id: 'fin-05', title: 'Gagner en bourse sans expérience : principes et risques', pillar: 'trading-crypto', category: 'finance', level: 'Débutant', tag: 'Éducation boursière', highlight: 'Découvrir les bases et les risques des placements boursiers.', isBonus: false },
  { id: 'fin-06', title: 'Forex : méthodes de scalping', pillar: 'trading-crypto', category: 'finance', level: 'Intermédiaire', tag: 'Forex', highlight: 'Étudier les principes du trading à court terme et ses risques.', isBonus: false },
  { id: 'fin-07', title: 'Forex : programme de trading', pillar: 'trading-crypto', category: 'finance', level: 'Intermédiaire', tag: 'Forex', highlight: 'Explorer les bases du marché des changes.', isBonus: false },
  { id: 'fin-08', title: 'Value investing : investir sur le long terme', pillar: 'trading-crypto', category: 'finance', level: 'Intermédiaire', tag: 'Investissement', highlight: 'Découvrir l’approche de l’investissement fondamental.', isBonus: false },
  { id: 'fin-09', title: 'Scalping : apprendre le trading à court terme', pillar: 'trading-crypto', category: 'finance', level: 'Intermédiaire', tag: 'Trading', highlight: 'Comprendre les principes du trading court terme et la gestion du risque.', isBonus: false },
  { id: 'fin-10', title: 'Bitcoin et blockchain : comprendre les fondamentaux', pillar: 'trading-crypto', category: 'finance', level: 'Débutant', tag: 'Blockchain', highlight: 'Comprendre le fonctionnement du Bitcoin et de la blockchain.', isBonus: true },

  // Développement personnel & productivité
  { id: 'pers-01', title: 'Gérer son temps pour gagner en efficacité', pillar: 'business-ecommerce', category: 'business', level: 'Tous niveaux', tag: 'Productivité', highlight: 'Mieux organiser ses priorités et son temps.', isBonus: false },
  { id: 'pers-02', title: 'Améliorer sa mémoire', pillar: 'business-ecommerce', category: 'business', level: 'Tous niveaux', tag: 'Apprentissage', highlight: 'Découvrir des méthodes pour mieux mémoriser.', isBonus: true },
];

