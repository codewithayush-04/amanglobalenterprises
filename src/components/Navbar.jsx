import { useState, useEffect } from 'react';
import Logo from './Logo';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Vision', href: '#vision' },
  { label: 'Services', href: '#services' },
  { label: 'Products', href: '#products' },
  { label: 'Why Us', href: '#why-choose-us' },
  { label: 'Free Trial', href: '#free-trial' },
  { label: 'Quotation', href: '#quotation' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Policies', href: '#policies' },
  { label: 'Contact', href: '#contact' },
];

/**
 * Sticky navigation with smooth scroll and mobile hamburger menu.
 */
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} role="banner">
      <div className="navbar__container container">
        <a
          href="#home"
          className="navbar__logo"
          onClick={(e) => handleNavClick(e, '#home')}
          aria-label="Aman Global Enterprises – Home"
        >
          <Logo variant="navbar" alt="" />
        </a>

        <button
          type="button"
          className={`navbar__toggle ${menuOpen ? 'navbar__toggle--active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="main-navigation"
          className={`navbar__nav ${menuOpen ? 'navbar__nav--open' : ''}`}
          aria-label="Main navigation"
        >
          <ul className="navbar__list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="navbar__link"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
