import { ObjectivePathway } from '../types';
import { 
  objIaImage, 
  objBusinessImage, 
  objEbooksImage, 
  objEcommerceImage, 
  objContentImage, 
  objDesignImage, 
  objCodeImage, 
  objFinanceImage 
} from '../assets';

export const OBJECTIVES_DATA: ObjectivePathway[] = [
  {
    id: 'ia-automatisation',
    title: 'IA & AUTOMATISATION',
    shortPhrase: 'Maîtriser l’IA et automatiser',
    badge: 'Intelligence Artificielle',
    imageUrl: objIaImage,
    summary: 'Progression méthodique pour intégrer l’intelligence artificielle dans votre quotidien et automatiser vos processus.',
    steps: [
      {
        stepNumber: 1,
        title: 'Comprendre les fondamentaux de l’IA',
        description: 'Par quoi commencer : appréhender le fonctionnement des modèles génératifs et les principes d’une interaction efficace.'
      },
      {
        stepNumber: 2,
        title: 'Maîtriser les outils IA essentiels',
        description: 'Quelle compétence développer ensuite : formuler des requêtes précises (prompt crafting) et exploiter les meilleurs outils du marché.'
      },
      {
        stepNumber: 3,
        title: 'Apprendre à créer avec l’IA',
        description: 'Quelle progression suivre : générer des contenus textuels persuasifs, synthétiser des documents et produire des visuels percutants.'
      },
      {
        stepNumber: 4,
        title: 'Automatiser ses tâches et workflows',
        description: 'Connecter vos outils quotidiens, mettre en place des suites de bots et éliminer les tâches répétitives sans coder.'
      },
      {
        stepNumber: 5,
        title: 'Passer à la pratique et au déploiement',
        description: 'Appliquer vos compétences à vos projets concrets pour gagner des heures chaque semaine et décupler votre productivité.'
      }
    ]
  },
  {
    id: 'business-digital',
    title: 'BUSINESS DIGITAL',
    shortPhrase: 'Créer une activité en ligne',
    badge: 'Entrepreneuriat',
    imageUrl: objBusinessImage,
    summary: 'Feuille de route pour poser des bases saines, valider une proposition de valeur et développer une activité numérique.',
    steps: [
      {
        stepNumber: 1,
        title: 'Identifier une opportunité et valider son idée',
        description: 'Par quoi commencer : analyser les besoins du marché, choisir un modèle économique adapté et clarifier sa vision.'
      },
      {
        stepNumber: 2,
        title: 'Construire une offre claire et irrésistible',
        description: 'Quelle compétence développer ensuite : packager votre solution, définir un positionnement fort et fixer vos tarifs.'
      },
      {
        stepNumber: 3,
        title: 'Mettre en place un système d’acquisition',
        description: 'Quelle progression suivre : attirer des prospects qualifiés de manière régulière via des canaux organiques et payants.'
      },
      {
        stepNumber: 4,
        title: 'Maîtriser la conversion et la vente',
        description: 'Structurer vos arguments, rassurer vos interlocuteurs et convertir les contacts en clients avec méthode.'
      },
      {
        stepNumber: 5,
        title: 'Optimiser et consolider l’activité',
        description: 'Fluidifier les opérations, fidéliser la clientèle et pérenniser votre activité sur le long terme.'
      }
    ]
  },
  {
    id: 'ebooks-infoproduits',
    title: 'E-BOOKS & INFOPRODUITS',
    shortPhrase: 'Créer et vendre des produits digitaux',
    badge: 'Infoproduits',
    imageUrl: objEbooksImage,
    summary: 'Méthodologie pour transformer vos connaissances en produits numériques téléchargeables sans gestion de stock.',
    steps: [
      {
        stepNumber: 1,
        title: 'Choisir un sujet ciblé à forte demande',
        description: 'Par quoi commencer : identifier les blocages précis que rencontre votre audience et valider l’intérêt commercial.'
      },
      {
        stepNumber: 2,
        title: 'Rédiger et structurer le contenu',
        description: 'Quelle compétence développer ensuite : concevoir un plan didactique et accélérer la rédaction assistée.'
      },
      {
        stepNumber: 3,
        title: 'Soigner la mise en page et l’habillage visuel',
        description: 'Quelle progression suivre : créer une maquette professionnelle, une couverture attractive et des aperçus 3D percutants.'
      },
      {
        stepNumber: 4,
        title: 'Rédiger une page de présentation persuasive',
        description: 'Appliquer les techniques de copywriting pour expliquer la valeur du guide et susciter le passage à l’action.'
      },
      {
        stepNumber: 5,
        title: 'Automatiser la livraison et la distribution',
        description: 'Configurer un système de paiement direct avec envoi automatique du fichier immédiatement après commande.'
      }
    ]
  },
  {
    id: 'ecommerce',
    title: 'E-COMMERCE',
    shortPhrase: 'Développer une boutique en ligne',
    badge: 'Vente en Ligne',
    imageUrl: objEcommerceImage,
    summary: 'Guide opérationnel pour créer une boutique en ligne fluide et activer les leviers d’acquisition de clients.',
    steps: [
      {
        stepNumber: 1,
        title: 'Sélectionner des produits porteurs',
        description: 'Par quoi commencer : analyser la concurrence, étudier la demande et calculer sa rentabilité unitaire.'
      },
      {
        stepNumber: 2,
        title: 'Concevoir une boutique claire et rassurante',
        description: 'Quelle compétence développer ensuite : soigner l’ergonomie, la clarté des fiches et la simplicité du passage en caisse.'
      },
      {
        stepNumber: 3,
        title: 'Activer les leviers de trafic qualifié',
        description: 'Quelle progression suivre : lancer vos premières campagnes ciblées et travailler votre visibilité naturelle.'
      },
      {
        stepNumber: 4,
        title: 'Optimiser le taux de conversion',
        description: 'Analyser le comportement des visiteurs, lever les freins d’achat et tester différentes propositions.'
      },
      {
        stepNumber: 5,
        title: 'Maîtriser la logistique et la fidélisation',
        description: 'Assurer un service après-vente réactif et encourager les commandes répétées.'
      }
    ]
  },
  {
    id: 'contenu-reseaux',
    title: 'CONTENU & RÉSEAUX SOCIAUX',
    shortPhrase: 'Développer une audience',
    badge: 'Média & Audience',
    imageUrl: objContentImage,
    summary: 'Parcours d’apprentissage pour produire des formats engageants et bâtir une communauté fidèle sur les plateformes modernes.',
    steps: [
      {
        stepNumber: 1,
        title: 'Définir son positionnement éditorial',
        description: 'Par quoi commencer : clarifier votre thématique principale, votre ton et le profil des personnes à toucher.'
      },
      {
        stepNumber: 2,
        title: 'Maîtriser l’art des accroches et du rythme',
        description: 'Quelle compétence développer ensuite : capter l’attention dès les premières secondes et retenir l’audience jusqu’au bout.'
      },
      {
        stepNumber: 3,
        title: 'Produire des formats courts et vidéos dynamiques',
        description: 'Quelle progression suivre : filmer simplement, monter de façon percutante et optimiser le format pour chaque canal.'
      },
      {
        stepNumber: 4,
        title: 'Instaurer un rythme de publication pérenne',
        description: 'Planifier vos créations à l’avance pour rester régulier sans risquer l’épuisement créatif.'
      },
      {
        stepNumber: 5,
        title: 'Créer de l’engagement et fédérer sa communauté',
        description: 'Interagir sincèrement avec votre audience et transformer une simple visibilité en relation de confiance durable.'
      }
    ]
  },
  {
    id: 'design-uiux',
    title: 'DESIGN & UI/UX',
    shortPhrase: 'Créer des visuels et interfaces',
    badge: 'Graphisme & Design',
    imageUrl: objDesignImage,
    summary: 'Apprentissage progressif pour assimiler les règles graphiques et concevoir des interfaces attrayantes et intuitives.',
    steps: [
      {
        stepNumber: 1,
        title: 'Assimiler les principes fondamentaux du design',
        description: 'Par quoi commencer : contrastes, hiérarchie typographique, harmonies de couleurs et gestion des espaces blancs.'
      },
      {
        stepNumber: 2,
        title: 'Prendre en main les outils de conception',
        description: 'Quelle compétence développer ensuite : maîtriser les fonctionnalités clés des logiciels de création et de retouche.'
      },
      {
        stepNumber: 3,
        title: 'Comprendre l’ergonomie et l’expérience utilisateur',
        description: 'Quelle progression suivre : cartographier les parcours utilisateurs et éliminer les points de friction dans la navigation.'
      },
      {
        stepNumber: 4,
        title: 'Prototyper des interfaces et maquettes',
        description: 'Créer des wireframes et des prototypes interactifs testables avant toute phase de développement.'
      },
      {
        stepNumber: 5,
        title: 'Décliner une charte graphique cohérente',
        description: 'Standardiser vos composants visuels pour assurer une identité homogène sur tous vos supports numériques.'
      }
    ]
  },
  {
    id: 'code-technologie',
    title: 'CODE & TECHNOLOGIE',
    shortPhrase: 'Développer des compétences techniques',
    badge: 'Tech & Développement',
    imageUrl: objCodeImage,
    summary: 'Progression étape par étape pour appréhender la logique du code, le développement web et les bonnes pratiques de sécurité.',
    steps: [
      {
        stepNumber: 1,
        title: 'Comprendre la logique algorithmique',
        description: 'Par quoi commencer : appréhender les variables, les conditions, les boucles et le déroulement séquentiel d’un programme.'
      },
      {
        stepNumber: 2,
        title: 'Acquérir les bases d’un premier langage',
        description: 'Quelle compétence développer ensuite : écrire des scripts fonctionnels pour manipuler des données et automatiser des calculs.'
      },
      {
        stepNumber: 3,
        title: 'Construire des interfaces interactives',
        description: 'Quelle progression suivre : créer des pages web dynamiques et interconnecter des composants réactifs.'
      },
      {
        stepNumber: 4,
        title: 'Gérer la persistance et les flux de données',
        description: 'Comprendre la structure des bases de données et relier une interface visuelle à des sources d’information.'
      },
      {
        stepNumber: 5,
        title: 'Intégrer les impératifs de cybersécurité',
        description: 'Appliquer les bonnes pratiques d’hygiène numérique, sécuriser les accès et préparer le déploiement.'
      }
    ]
  },
  {
    id: 'finance-actifs',
    title: 'FINANCE & ACTIFS NUMÉRIQUES',
    shortPhrase: 'Explorer les marchés et technologies financières',
    badge: 'Finance & Web3',
    imageUrl: objFinanceImage,
    summary: 'Parcours d’initiation méthodique pour comprendre les rouages économiques, les marchés d’actifs et les innovations décentralisées.',
    steps: [
      {
        stepNumber: 1,
        title: 'Maîtriser les notions économiques fondamentales',
        description: 'Par quoi commencer : inflation, taux d’intérêt, offre et demande et mécanismes généraux de valorisation.'
      },
      {
        stepNumber: 2,
        title: 'Comprendre les principes de l’investissement',
        description: 'Quelle compétence développer ensuite : horizon de placement, diversification du portefeuille et gestion des risques.'
      },
      {
        stepNumber: 3,
        title: 'S’initier à la lecture de graphiques et tendances',
        description: 'Quelle progression suivre : appréhender les configurations graphiques, les volumes et la psychologie des intervenants.'
      },
      {
        stepNumber: 4,
        title: 'Découvrir la blockchain et les technologies Web3',
        description: 'Comprendre le fonctionnement des registres décentralisés, des contrats intelligents et de la finance décentralisée.'
      },
      {
        stepNumber: 5,
        title: 'Adopter une discipline rigoureuse de préservation',
        description: 'Définir des règles strictes de gestion du capital, de sécurité des accès et de prudence méthodique.'
      }
    ],
    isFinance: true
  }
];
