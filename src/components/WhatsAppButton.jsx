import { IconWhatsApp } from './icons';
import { openWhatsApp } from '../utils/whatsapp';
import './WhatsAppButton.css';

/**
 * Floating WhatsApp button — opens a direct chat on any page.
 */
function WhatsAppButton() {
  return (
    <button
      type="button"
      className="whatsapp-fab"
      onClick={() => openWhatsApp()}
      aria-label="Chat with us on WhatsApp"
      title="Chat on WhatsApp"
    >
      <IconWhatsApp />
      <span className="whatsapp-fab__label">WhatsApp</span>
    </button>
  );
}

export default WhatsAppButton;
