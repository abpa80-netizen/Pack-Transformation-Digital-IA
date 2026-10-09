import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import { COURSES_DATA } from './src/data/courses';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Initialize GoogleGenAI SDK server-side
const apiKey = process.env.GEMINI_API_KEY;
let aiClient: GoogleGenAI | null = null;

if (apiKey) {
  aiClient = new GoogleGenAI({
    apiKey: apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

const SYSTEM_INSTRUCTION = `
Tu es "Vision Libre AI", l'assistant commercial et d'orientation officiel de la marque VISION LIBRE pour le produit "Pack Transformation Digital & IA".

Ton rôle :
- Répondre avec clarté, concision, enthousiasme et professionnalisme.
- Guider les visiteurs vers le parcours de compétences le plus adapté à leur objectif.
- Expliquer les détails du pack, les formations incluses, la licence MRR, les bonus et les modalités d'achat.
- Rassurer avec honnêteté sans faire de promesses irréalistes de gains passifs ou de revenus garantis.

Informations officielles certifiées :
- Produit : Pack Transformation Digital & IA
- Marque : VISION LIBRE
- Tarif actuel : 249 DH (Dirhams marocains) en paiement unique.
- Offre d'urgence : Tarif de lancement réservé aux 30 premiers acheteurs. Une fois ces 30 accès attribués, le tarif pourra évoluer.
- Volume : Plus de 50 formations et masterclasses pratiques (51 formations au total).
- Les 5 pôles d'excellence :
  1. IA & Automatisation (ChatGPT de A à Z, Bots, Prompts, Copywriting IA, Midjourney, etc.)
  2. Business & E-commerce (Shopify, Amazon FBA, E-books & infoproduits, Vinted, Vente, etc.)
  3. Marketing Digital (Facebook Ads, TikTok Marketing, Google Ads, SEO, Instagram, etc.)
  4. Finance & Trading (Bases financières, Bourse, Trading, Forex, Crypto & DeFi, Analyse technique, etc. NB: à visée éducative, pas de conseil financier)
  5. Tech & Design (Canva, Photoshop, UI/UX, Webflow, Python, React, Mobile Ionic, Cybersécurité, Excel, etc.)
- Licence MRR (Master Resell Rights) :
  - 100% des bénéfices générés par les ventes directes reviennent à l'acquéreur selon la licence.
  - Droit de revendre le pack complet ou les modules individuellement.
  - Règle stricte du prix plancher de revente : Minimum 200 DH (ou 20 €). Interdiction absolue de vendre sous 200 DH.
  - Interdiction de cession gratuite ou en bonus gratuit.
  - Interdiction de modifier les vidéos originales.
- Commande :
  - Paiement unique de 249 DH (aucun abonnement).
  - Validation par WhatsApp avec options de virement local marocain (CIH Bank, Attijariwafa, Cash Plus, Wafacash).
  - Accès immédiat transmis sous forme de lien sécurisé.

Règles de style :
- Sois concis (2 à 4 paragraphes courts ou listes à puces).
- Ton chaleureux, inspirant et axé sur l'action.
- Ne divulgue jamais le numéro de téléphone de vive voix en clair dans le texte (dis simplement : "Tu peux cliquer sur le bouton Commander sur WhatsApp ou réserver ton accès directement sur la page").
`;

// API endpoint for chatbot
app.post('/api/chat', async (req, res) => {
  try {
    const { message, history } = req.body;

    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Message requis' });
    }

    if (!aiClient) {
      // Fallback response if GEMINI_API_KEY is not configured in environment
      return res.json({
        reply: "Bonjour ! Je suis l'assistant Vision Libre AI. Le Pack Transformation Digital & IA regroupe plus de 50 formations pratiques réparties en 5 pôles (IA, Business, Marketing, Finance et Tech) au tarif de lancement de 249 DH réservé aux 30 premiers acheteurs. Comment puis-je t'aider à choisir ton parcours ?",
      });
    }

    // Format contents with history if present
    const contents: any[] = [];
    if (Array.isArray(history)) {
      for (const h of history.slice(-6)) {
        if (h.role === 'user' || h.role === 'model') {
          contents.push({
            role: h.role,
            parts: [{ text: h.text || h.content || '' }],
          });
        }
      }
    }

    // Add current user message
    contents.push({
      role: 'user',
      parts: [{ text: message }],
    });

    const response = await aiClient.models.generateContent({
      model: 'gemini-3.5-flash',
      contents: contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    const reply = response.text || "Je suis à votre disposition pour vous orienter sur le pack Vision Libre.";
    return res.json({ reply });
  } catch (err: any) {
    console.error('Erreur API Gemini Chat:', err);
    return res.status(500).json({ 
      error: 'Une erreur est survenue lors de la communication avec l\'assistant IA.',
      details: err.message || String(err)
    });
  }
});

// Setup Vite middleware in dev or static files in production
async function startServer() {
  const isProduction = process.env.NODE_ENV === 'production';

  if (!isProduction) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

startServer();
