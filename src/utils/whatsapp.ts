export const WHATSAPP_NUMBER = '212655996172';

export const DEFAULT_WHATSAPP_MESSAGE = 
  'Bonjour Vision Libre, je souhaite profiter du tarif de lancement du Pack Transformation Digital & IA.';

export function getWhatsAppUrl(customMessage?: string): string {
  const message = customMessage || DEFAULT_WHATSAPP_MESSAGE;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
