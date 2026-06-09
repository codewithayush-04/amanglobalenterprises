import { useState } from 'react';
import { IconPhone, IconMail } from './icons';
import { saveInquiry } from '../utils/storage';
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
                  <a href="tel:+919296932642">9296932642</a>
                </div>
              </li>
              <li>
                <span className="contact__detail-icon" aria-hidden="true">
                  <IconMail />
                </span>
                <div>
                  <span className="contact__label">Email</span>
                  <a href="mailto:info@amanglobalenterprises.com">
                    info@amanglobalenterprises.com
                  </a>
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

            <button type="submit" className="btn btn--primary contact__submit">
              Send Message
            </button>

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
