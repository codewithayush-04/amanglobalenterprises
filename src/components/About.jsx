import './About.css';

/**
 * About section with company overview.
 */
function About() {
  return (
    <section id="about" className="section section--alt about" aria-labelledby="about-heading">
      <div className="container">
        <header className="section-header fade-in">
          <div className="section-divider" />
          <h2 id="about-heading">About Aman Global Enterprises</h2>
        </header>

        <div className="about__grid">
          <div className="about__content fade-in fade-in-delay-1">
            <p>
              Aman Global Enterprises specializes in network infrastructure, security systems,
              surveillance solutions, and IT support services. We help businesses build
              reliable, secure, and scalable technology environments through professional
              installation, configuration, and maintenance services.
            </p>
          </div>

          <div className="about__visual fade-in fade-in-delay-2" aria-hidden="true">
            <div className="about__stats">
              <div className="about__stat about__stat--glass">
                <span className="about__stat-value">20+</span>
                <span className="about__stat-label">IT Services</span>
              </div>
              <div className="about__stat about__stat--glass">
                <span className="about__stat-value">24/7</span>
                <span className="about__stat-label">Support Ready</span>
              </div>
              <div className="about__stat about__stat--glass">
                <span className="about__stat-value">100%</span>
                <span className="about__stat-label">Client Focus</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
