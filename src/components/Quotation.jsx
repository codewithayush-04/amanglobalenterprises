import { useState } from 'react';
import { IconWhatsApp } from './icons';
import { saveInquiry } from '../utils/storage';
import { openWhatsApp } from '../utils/whatsapp';
import './Quotation.css';

const SERVICE_OPTIONS = [
  'Network Infrastructure',
  'CCTV & Surveillance',
  'Access Control & Security',
  'Wi-Fi & Wireless Solutions',
  'IT Support & AMC',
  'Other / Multiple Services',
];

/**
 * Quotation request form with save and WhatsApp submit.
 */
function Quotation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    details: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const buildMessage = () =>
    [
      'Quotation Request — Aman Global Enterprises',
      '',
      `Name: ${formData.name.trim()}`,
      `Email: ${formData.email.trim()}`,
      `Phone: ${formData.phone.trim()}`,
      `Service: ${formData.service}`,
      '',
      'Project Details:',
      formData.details.trim(),
    ].join('\n');

  const handleSubmit = (e) => {
    e.preventDefault();
    saveInquiry({
      name: formData.name.trim(),
      email: formData.email.trim(),
      message: buildMessage(),
    });
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', service: '', details: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleWhatsAppSubmit = (e) => {
    const form = e.currentTarget.closest('form');
    if (!form?.checkValidity()) {
      form?.reportValidity();
      return;
    }
    openWhatsApp(buildMessage());
  };

  return (
    <section id="quotation" className="section quotation" aria-labelledby="quotation-heading">
      <div className="container">
        <header className="section-header fade-in">
          <div className="section-divider" />
          <h2 id="quotation-heading">Get a Quotation</h2>
          <p>
            Tell us about your project and we&apos;ll prepare a tailored quote for your network,
            security, or IT requirements.
          </p>
        </header>

        <div className="quotation__wrapper fade-in fade-in-delay-1">
          <form
            className="quotation__form quotation__form--glass"
            onSubmit={handleSubmit}
            noValidate
            aria-label="Quotation request form"
          >
            <div className="quotation__row">
              <div className="quotation__field">
                <label htmlFor="quote-name">Full Name</label>
                <input
                  id="quote-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                  autoComplete="name"
                />
              </div>

              <div className="quotation__field">
                <label htmlFor="quote-email">Email</label>
                <input
                  id="quote-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  autoComplete="email"
                />
              </div>
            </div>

            <div className="quotation__row">
              <div className="quotation__field">
                <label htmlFor="quote-phone">Phone Number</label>
                <input
                  id="quote-phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your phone number"
                  required
                  autoComplete="tel"
                />
              </div>

              <div className="quotation__field">
                <label htmlFor="quote-service">Service Required</label>
                <select
                  id="quote-service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {SERVICE_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="quotation__field">
              <label htmlFor="quote-details">Project Details</label>
              <textarea
                id="quote-details"
                name="details"
                value={formData.details}
                onChange={handleChange}
                placeholder="Describe your requirements, location, timeline, and any specific needs..."
                rows={5}
                required
              />
            </div>

            <div className="quotation__actions">
              <button type="submit" className="btn btn--primary">
                Request Quotation
              </button>
              <button
                type="button"
                className="btn btn--whatsapp"
                onClick={handleWhatsAppSubmit}
              >
                <IconWhatsApp />
                Send on WhatsApp
              </button>
            </div>

            {submitted && (
              <p className="quotation__success" role="status">
                Thank you! Your quotation request has been received. We will contact you shortly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Quotation;
