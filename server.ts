import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import { COURSES_DATA } from './src/data/courses';
import { CHATBOT_SYSTEM_INSTRUCTION } from './src/config/chatbot';

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
        systemInstruction: CHATBOT_SYSTEM_INSTRUCTION,
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

// Helper pour récupérer l'URL de production officielle (sans preview ni localhost)
function getOfficialSiteUrl(): string {
  const raw = (process.env.SITE_URL || process.env.VITE_SITE_URL || '').trim();
  if (!raw) return '';
  const lower = raw.toLowerCase();
  if (
    lower.includes('localhost') ||
    lower.includes('127.0.0.1') ||
    lower.includes('.run.app') ||
    lower.includes('webcontainer') ||
    lower.includes('ais-')
  ) {
    return '';
  }
  return raw.replace(/\/$/, '');
}

// Endpoint SEO : robots.txt
app.get('/robots.txt', (_req, res) => {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  const officialUrl = getOfficialSiteUrl();
  let content = 'User-agent: *\nAllow: /\nDisallow: /api/\n';
  if (officialUrl) {
    content += `\nSitemap: ${officialUrl}/sitemap.xml\n`;
  }
  res.send(content);
});

// Endpoint SEO : sitemap.xml
app.get('/sitemap.xml', (_req, res) => {
  res.setHeader('Content-Type', 'application/xml; charset=utf-8');
  const officialUrl = getOfficialSiteUrl();
  const getLoc = (path: string) => officialUrl ? `${officialUrl}${path}` : path;
  
  const pages = [
    { path: '/', priority: '1.0' },
    { path: '/formation-ia', priority: '0.8' },
    { path: '/formation-business-en-ligne', priority: '0.8' },
    { path: '/formation-ecommerce', priority: '0.8' },
    { path: '/formation-marketing-digital', priority: '0.8' },
    { path: '/formation-creation-contenu', priority: '0.8' },
    { path: '/formation-design', priority: '0.8' },
    { path: '/formation-freelance', priority: '0.8' },
    { path: '/formation-finance-trading', priority: '0.8' },
  ];

  const xmlEntries = pages.map((p) => `  <url>
    <loc>${getLoc(p.path)}</loc>
    <changefreq>weekly</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlEntries}
</urlset>`;
  res.send(xml);
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
