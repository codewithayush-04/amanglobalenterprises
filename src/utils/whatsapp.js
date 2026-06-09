/**
 * WhatsApp click-to-chat — opens a direct message to your business number.
 * Set VITE_WHATSAPP_NUMBER in .env (country code, no + or spaces), e.g. 919296932642
 */
export const WHATSAPP_NUMBER =
  import.meta.env.VITE_WHATSAPP_NUMBER || '919296932642';

export const WHATSAPP_DISPLAY =
  import.meta.env.VITE_WHATSAPP_DISPLAY || '9296932642';

export const DEFAULT_WHATSAPP_MESSAGE =
  'Hello! I am interested in your network and security services from Aman Global Enterprises.';

export function buildWhatsAppUrl(message = DEFAULT_WHATSAPP_MESSAGE) {
  const text = encodeURIComponent(message.trim());
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

export function openWhatsApp(message = DEFAULT_WHATSAPP_MESSAGE) {
  window.open(buildWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
}

export function buildInquiryWhatsAppMessage({ name, email, message }) {
  return [
    'Hello Aman Global Enterprises,',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    '',
    'Message:',
    message,
  ].join('\n');
}
