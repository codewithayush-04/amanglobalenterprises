import { IconPhone, IconWhatsApp } from './icons';
import { PHONE_TEL, WHATSAPP_DISPLAY, buildWhatsAppUrl } from '../utils/whatsapp';
import './FreeTrial.css';

const TRIAL_BENEFITS = [
  'On-site or remote assessment of your network and security needs',
  'Expert recommendations tailored to your business size and budget',
  'No obligation — understand your options before you commit',
  'Quick scheduling — speak with our team at a time that works for you',
];

/**
 * Free trial session CTA with tap-to-call and WhatsApp options.
 */
function FreeTrial() {
  return (
    <section id="free-trial" className="section section--alt free-trial" aria-labelledby="free-trial-heading">
      <div className="container">
        <header className="section-header fade-in">
          <div className="section-divider" />
          <h2 id="free-trial-heading">Book a Free Trial Session</h2>
          <p>
            Schedule a complimentary consultation with our experts. Tap to call and book your
            session in minutes.
          </p>
        </header>

        <div className="free-trial__grid">
          <div className="free-trial__info fade-in fade-in-delay-1">
            <h3 className="free-trial__subtitle">What&apos;s included</h3>
            <ul className="free-trial__list">
              {TRIAL_BENEFITS.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
          </div>

          <div className="free-trial__cta fade-in fade-in-delay-2">
            <div className="free-trial__card">
              <div className="free-trial__card-icon" aria-hidden="true">
                <IconPhone />
              </div>
              <h3>Call to Book Your Session</h3>
              <p>Tap the button below to call us directly and reserve your free trial.</p>

              <a href={`tel:${PHONE_TEL}`} className="free-trial__call-btn">
                <IconPhone />
                <span>
                  Call Now — {WHATSAPP_DISPLAY}
                </span>
              </a>

              <p className="free-trial__or">or message us on WhatsApp</p>

              <a
                href={buildWhatsAppUrl(
                  'Hello! I would like to book a free trial session with Aman Global Enterprises.',
                )}
                className="btn btn--whatsapp free-trial__whatsapp-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconWhatsApp />
                Book via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FreeTrial;
