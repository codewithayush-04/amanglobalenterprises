import Logo from './Logo';
import './Hero.css';

/**
 * Hero section with networking-themed background and CTAs.
 */
function Hero() {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero" aria-labelledby="hero-heading">
      {/* Abstract tech / network background */}
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__grid" />
        <div className="hero__nodes">
          <span className="hero__node hero__node--1" />
          <span className="hero__node hero__node--2" />
          <span className="hero__node hero__node--3" />
          <span className="hero__node hero__node--4" />
          <span className="hero__node hero__node--5" />
        </div>
        <svg className="hero__lines" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e5aa8" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <path d="M100,300 Q400,100 700,300" fill="none" stroke="url(#lineGrad)" strokeWidth="1" />
          <path d="M50,400 Q400,200 750,400" fill="none" stroke="url(#lineGrad)" strokeWidth="1" />
          <path d="M150,500 Q400,350 650,500" fill="none" stroke="url(#lineGrad)" strokeWidth="1" />
          <circle cx="200" cy="280" r="4" fill="#1e5aa8" opacity="0.5" />
          <circle cx="400" cy="200" r="6" fill="#3b7fd4" opacity="0.6" />
          <circle cx="600" cy="320" r="4" fill="#0ea5e9" opacity="0.5" />
          <circle cx="350" cy="450" r="5" fill="#1e5aa8" opacity="0.4" />
        </svg>
      </div>

      <div className="hero__content container">
        <div className="hero__brand fade-in">
          <Logo variant="hero" />
          <p className="hero__unit">A UNIT OF AGE GROUP</p>
        </div>
        <h1 id="hero-heading" className="hero__title fade-in fade-in-delay-1">
          Smart Network &amp; Security IT Solutions
        </h1>
        <p className="hero__subtitle fade-in fade-in-delay-2">
          Providing reliable networking, surveillance, infrastructure, and IT support
          solutions for businesses and organizations.
        </p>
        <div className="hero__actions fade-in fade-in-delay-3">
          <button type="button" className="btn btn--primary" onClick={() => scrollTo('#services')}>
            Explore Services
          </button>
          <button type="button" className="btn btn--outline" onClick={() => scrollTo('#contact')}>
            Contact Us
          </button>
        </div>
      </div>

      <div className="hero__illustration fade-in fade-in-delay-2" aria-hidden="true">
        <div className="hero__card hero__card--glass">
          <div className="hero__card-icon">
            <svg viewBox="0 0 48 48" fill="none">
              <rect x="8" y="14" width="32" height="22" rx="3" stroke="#1e5aa8" strokeWidth="2" />
              <path d="M16 14V10a8 8 0 0116 0v4" stroke="#1e5aa8" strokeWidth="2" />
              <circle cx="24" cy="25" r="4" fill="#3b7fd4" opacity="0.6" />
            </svg>
          </div>
          <span>Secure Network</span>
        </div>
        <div className="hero__card hero__card--glass hero__card--offset">
          <div className="hero__card-icon">
            <svg viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="24" r="12" stroke="#0ea5e9" strokeWidth="2" />
              <path d="M24 12v4M24 32v4M12 24h4M32 24h4" stroke="#1e5aa8" strokeWidth="2" />
            </svg>
          </div>
          <span>24/7 Support</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
