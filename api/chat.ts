import { GoogleGenAI } from '@google/genai';
import { CHATBOT_SYSTEM_INSTRUCTION } from '../src/config/chatbot';

/**
 * Endpoint serverless Vercel pour le chatbot Vision Libre AI (/api/chat)
 * Permet au chatbot de fonctionner de manière autonome sur Vercel sans nécessiter un serveur Express persistant.
 */
export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée. Utilisez POST.' });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    const { message, history } = body || {};

    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Message requis' });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.status(200).json({
        reply: "Bonjour ! Je suis l'assistant Vision Libre AI. Le Pack Transformation Digital & IA regroupe plus de 50 formations pratiques réparties en 5 pôles (IA, Business, Marketing, Finance et Tech) au tarif de lancement de 249 DH réservé aux 30 premiers acheteurs. Comment puis-je t'aider à choisir ton parcours ?",
      });
    }

    const aiClient = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });

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

    contents.push({
      role: 'user',
      parts: [{ text: message }],
    });

    const response = await aiClient.models.generateContent({
      model: 'gemini-3.5-flash',
      contents: contents,
      config: {
        systemInstruction: CHATBOT_SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    const reply = response.text || "Je suis à votre disposition pour vous orienter sur le pack Vision Libre.";
    return res.status(200).json({ reply });
  } catch (err: any) {
    console.error('Erreur API Gemini Chat (Vercel):', err);
    return res.status(500).json({
      error: "Une erreur est survenue lors de la communication avec l'assistant IA.",
      details: err.message || String(err),
    });
  }
}
