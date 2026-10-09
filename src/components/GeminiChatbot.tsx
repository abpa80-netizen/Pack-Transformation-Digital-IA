import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Sparkles, MessageSquare, ArrowRight, ShieldCheck, Check } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface Message {
  id: string;
  sender: 'user' | 'bot';
  text: string;
}

const QUICK_PROMPTS = [
  'Je veux apprendre l\'IA',
  'Je veux créer un business',
  'Je veux vendre des e-books',
  'Je veux faire du e-commerce',
  'Je veux comprendre le MRR',
  'Je veux commander',
];

interface GeminiChatbotProps {
  onOrderClick: () => void;
  isOpen: boolean;
  onToggle: () => void;
  onOpenCatalogue?: () => void;
}

export const GeminiChatbot: React.FC<GeminiChatbotProps> = ({
  onOrderClick,
  isOpen,
  onToggle,
  onOpenCatalogue,
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'bot',
      text: 'Bonjour ! Je suis Vision Libre AI, votre conseiller officiel. Comment puis-je vous aider aujourd’hui ? Vous pouvez me poser une question ou choisir un raccourci ci-dessous.',
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (userText: string) => {
    if (!userText.trim() || loading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: userText,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const history = messages.map((m) => ({
        role: m.sender === 'user' ? 'user' : 'model',
        text: m.text,
      }));

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userText, history }),
      });

      if (!response.ok) {
        throw new Error('Erreur de réponse serveur');
      }

      const data = await response.json();
      const botReply = data.reply || "Je suis à votre disposition pour vous renseigner sur le Pack Transformation Digital & IA au tarif de lancement de 249 DH réservé aux 30 premiers acheteurs.";

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          text: botReply,
        },
      ]);
    } catch (err) {
      console.error(err);
      // Fallback response if offline or backend error
      let fallbackText = "Le Pack Transformation Digital & IA regroupe plus de 50 formations réparties en 5 pôles (IA, Business, Marketing, Finance et Tech) au tarif de lancement de 249 DH réservé aux 30 premiers acheteurs en paiement unique avec licence MRR incluse. Souhaitez-vous commander votre accès ou échanger avec notre équipe ?";
      
      if (userText.includes('commander') || userText.includes('249') || userText.includes('prix') || userText.includes('tarif')) {
        fallbackText = "Pour commander votre pack au tarif de lancement de 249 DH réservé aux 30 premiers acheteurs en paiement unique, vous pouvez cliquer directement sur le bouton 'Commander' ci-dessous ou échanger avec notre équipe via WhatsApp.";
      } else if (userText.includes('MRR') || userText.includes('revente')) {
        fallbackText = "Le pack inclut la licence officielle Master Resell Rights (MRR). L'ensemble des conditions, droits accordés et règles d'exploitation commerciale sont détaillés dans le certificat officiel de licence consultable directement sur le site via le bouton 'Consulter la licence'.";
      }

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          text: fallbackText,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Launcher Button */}
      <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end">
        <button
          onClick={onToggle}
          className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 hover:from-blue-500 hover:to-indigo-500 text-white shadow-2xl shadow-blue-900/60 border border-blue-400/40 transition-all duration-200 active:scale-95 cursor-pointer"
          aria-label="Ouvrir le Chatbot Vision Libre AI"
        >
          <div className="relative">
            <Bot className="w-5 h-5 text-white" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#07111F]" />
          </div>
          <div className="text-left hidden sm:block">
            <span className="text-xs font-extrabold tracking-wide block leading-none">
              VISION LIBRE AI
            </span>
            <span className="text-[10px] text-blue-200 font-medium leading-none">
              Assistant IA · Disponible 24h/7
            </span>
          </div>
        </button>
      </div>

      {/* Chat Window Modal / Drawer */}
      {isOpen && (
        <div 
          className="fixed bottom-0 sm:bottom-24 right-0 sm:right-6 w-full sm:w-[420px] h-[85vh] sm:h-[580px] bg-[#0D1B2A] border border-blue-500/40 sm:rounded-2xl shadow-2xl flex flex-col z-50 overflow-hidden text-slate-100 animate-in slide-in-from-bottom-6 duration-200"
          role="dialog"
          aria-modal="true"
        >
          {/* Header */}
          <div className="p-4 bg-[#07111F] border-b border-white/[0.08] flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-600/30 border border-blue-500/40 flex items-center justify-center text-blue-400">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    VISION LIBRE AI
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                </div>
                <span className="text-[11px] text-[#AAB7C4]">
                  Assistant officiel · 249 DH (30 premiers)
                </span>
              </div>
            </div>

            <button
              onClick={onToggle}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors cursor-pointer"
              aria-label="Fermer le chatbot"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Feed */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-[#050713]/60">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-xs leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-blue-600 text-white rounded-br-none shadow-md'
                      : 'bg-[#132338] border border-white/[0.08] text-slate-200 rounded-bl-none shadow-sm'
                  }`}
                >
                  <p className="whitespace-pre-wrap">{m.text}</p>
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="bg-[#132338] border border-white/[0.08] rounded-2xl rounded-bl-none px-4 py-3 text-xs text-[#AAB7C4] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-400 animate-bounce" />
                  <span className="w-2 h-2 rounded-full bg-blue-400 animate-bounce [animation-delay:0.2s]" />
                  <span className="w-2 h-2 rounded-full bg-blue-400 animate-bounce [animation-delay:0.4s]" />
                  <span className="text-[11px] ml-1">Vision Libre AI réfléchit...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts Carousel */}
          <div className="p-2.5 border-t border-white/[0.06] bg-[#07111F]/90 overflow-x-auto scrollbar-none flex items-center gap-1.5 shrink-0">
            {QUICK_PROMPTS.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(prompt)}
                disabled={loading}
                className="px-2.5 py-1 text-[11px] font-medium bg-[#0D1B2A] hover:bg-blue-600/30 text-blue-300 hover:text-white border border-blue-500/20 rounded-full whitespace-nowrap transition-colors cursor-pointer shrink-0 disabled:opacity-50"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <div className="p-3 bg-[#0D1B2A] border-t border-white/[0.08] flex items-center gap-2 shrink-0">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleSendMessage(input);
                }
              }}
              placeholder="Posez votre question à Vision Libre AI..."
              className="flex-1 bg-[#07111F] border border-white/[0.1] rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
            />
            <button
              onClick={() => handleSendMessage(input)}
              disabled={!input.trim() || loading}
              className="p-2 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-40 text-white transition-colors cursor-pointer shrink-0"
              aria-label="Envoyer"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>

          {/* Bottom Fast Action Footer */}
          <div className="px-3 py-2 bg-[#050713] border-t border-white/[0.06] flex items-center justify-between text-[11px] text-[#AAB7C4]">
            <button
              onClick={() => {
                onToggle();
                onOrderClick();
              }}
              className="text-emerald-400 hover:underline font-bold flex items-center gap-1 cursor-pointer"
            >
              <span>Commander (249 DH)</span>
              <ArrowRight className="w-3 h-3" />
            </button>
            <a
              href={getWhatsAppUrl("Bonjour Vision Libre, je souhaite échanger avec l'équipe commerciale.")}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:underline flex items-center gap-1 cursor-pointer"
            >
              <MessageSquare className="w-3 h-3" />
              <span>Parler à l'équipe</span>
            </a>
          </div>

        </div>
      )}
    </>
  );
};
