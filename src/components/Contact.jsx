import { useState } from 'react';
import { IconPhone, IconMail, IconWhatsApp } from './icons';
import { saveInquiry } from '../utils/storage';
import {
  WHATSAPP_DISPLAY,
  PHONE_TEL,
  COMPANY_EMAIL,
  buildWhatsAppUrl,
  buildInquiryWhatsAppMessage,
  openWhatsApp,
} from '../utils/whatsapp';
import './Contact.css';

/**
 * Contact section with company info and inquiry form.
 */
function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveInquiry({
      name: formData.name.trim(),
      email: formData.email.trim(),
      message: formData.message.trim(),
    });
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleWhatsAppSubmit = (e) => {
    const form = e.currentTarget.closest('form');
    if (!form?.checkValidity()) {
      form?.reportValidity();
      return;
    }

    openWhatsApp(
      buildInquiryWhatsAppMessage({
        name: formData.name.trim(),
        email: formData.email.trim(),
        message: formData.message.trim(),
      }),
    );
  };

  return (
    <section id="contact" className="section contact" aria-labelledby="contact-heading">
      <div className="container">
        <header className="section-header fade-in">
          <div className="section-divider" />
          <h2 id="contact-heading">Contact Us</h2>
          <p>Get in touch for a consultation or service inquiry.</p>
        </header>

        <div className="contact__grid">
          <div className="contact__info fade-in fade-in-delay-1">
            <div className="contact__brand">
              <h3>Aman Global Enterprises</h3>
              <p>Smart Network &amp; Security IT Solutions</p>
            </div>

            <ul className="contact__details">
              <li>
                <span className="contact__detail-icon" aria-hidden="true">
                  <IconPhone />
                </span>
                <div>
                  <span className="contact__label">Phone</span>
                  <a href={`tel:${PHONE_TEL}`}>{WHATSAPP_DISPLAY}</a>
                </div>
              </li>
              <li>
                <span className="contact__detail-icon" aria-hidden="true">
                  <IconMail />
                </span>
                <div>
                  <span className="contact__label">Email</span>
                  <a href={`mailto:${COMPANY_EMAIL}`}>
                    {COMPANY_EMAIL}
                  </a>
                </div>
              </li>
              <li>
                <span className="contact__detail-icon contact__detail-icon--whatsapp" aria-hidden="true">
                  <IconWhatsApp />
                </span>
                <div>
                  <span className="contact__label">WhatsApp</span>
                  <a
                    href={buildWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {WHATSAPP_DISPLAY}
                  </a>
                  <p className="contact__whatsapp-hint">Message us directly on WhatsApp</p>
                </div>
              </li>
            </ul>
          </div>

          <form
            className="contact__form contact__form--glass fade-in fade-in-delay-2"
            onSubmit={handleSubmit}
            noValidate
            aria-label="Contact form"
          >
            <div className="contact__field">
              <label htmlFor="contact-name">Name</label>
              <input
                id="contact-name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                autoComplete="name"
              />
            </div>

            <div className="contact__field">
              <label htmlFor="contact-email">Email</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
                autoComplete="email"
              />
            </div>

            <div className="contact__field">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="How can we help you?"
                rows={5}
                required
              />
            </div>

            <div className="contact__actions">
              <button type="submit" className="btn btn--primary contact__submit">
                Save Inquiry
              </button>
              <button
                type="button"
                className="btn btn--whatsapp contact__submit"
                onClick={handleWhatsAppSubmit}
              >
                <IconWhatsApp />
                Send on WhatsApp
              </button>
            </div>

            {submitted && (
              <p className="contact__success" role="status">
                Thank you! Your message has been received. We will get back to you soon.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
