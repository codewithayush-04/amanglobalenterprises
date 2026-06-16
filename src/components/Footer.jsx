import { Link } from 'react-router-dom';
import Logo from './Logo';
import {
  IconLinkedIn,
  IconFacebook,
  IconTwitter,
  IconInstagram,
  IconPhone,
  IconWhatsApp,
} from './icons';
import { buildWhatsAppUrl, WHATSAPP_DISPLAY, PHONE_TEL } from '../utils/whatsapp';
import './Footer.css';

const QUICK_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Company Vision', href: '#vision' },
  { label: 'Services', href: '#services' },
  { label: 'Why Choose Us', href: '#why-choose-us' },
  { label: 'Free Trial', href: '#free-trial' },
  { label: 'Get Quotation', href: '#quotation' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Policies', href: '#policies' },
  { label: 'Contact', href: '#contact' },
];

const SOCIAL_LINKS = [
  { label: 'LinkedIn', href: '#', icon: IconLinkedIn },
  { label: 'Facebook', href: '#', icon: IconFacebook },
  { label: 'Twitter', href: '#', icon: IconTwitter },
  { label: 'Instagram', href: '#', icon: IconInstagram },
];

/**
 * Site footer with quick links, contact, and social icons.
 */
function Footer() {
  const handleLinkClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer__container">
        <div className="footer__brand">
          <Logo variant="footer" />
          <p className="footer__unit">A UNIT OF AGE GROUP</p>
          <p className="footer__tagline">Smart Network &amp; Security IT Solutions</p>
        </div>

        <nav className="footer__nav" aria-label="Footer navigation">
          <h4 className="footer__heading">Quick Links</h4>
          <ul className="footer__links">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={(e) => handleLinkClick(e, link.href)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__contact">
          <h4 className="footer__heading">Contact</h4>
          <a href={`tel:${PHONE_TEL}`} className="footer__phone">
            <IconPhone />
            <span>9296932642</span>
          </a>
          <a
            href={buildWhatsAppUrl()}
            className="footer__whatsapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconWhatsApp />
            <span>WhatsApp: {WHATSAPP_DISPLAY}</span>
          </a>
          <a href="mailto:info@amanglobalenterprises.com" className="footer__email">
            info@amanglobalenterprises.com
          </a>
        </div>

        <div className="footer__social">
          <h4 className="footer__heading">Follow Us</h4>
          <div className="footer__social-icons">
            {SOCIAL_LINKS.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  className="footer__social-link"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>&copy; {year} Aman Global Enterprises. All rights reserved.</p>
          <Link to="/login" className="footer__admin-link">Admin</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
