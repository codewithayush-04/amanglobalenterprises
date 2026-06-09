import { IconReliable, IconSecurity, IconExpert, IconBusiness } from './icons';
import './Features.css';

const FEATURES = [
  {
    icon: IconReliable,
    title: 'Reliable Infrastructure',
    description: 'Professional networking and communication solutions.',
  },
  {
    icon: IconSecurity,
    title: 'Security Focused',
    description: 'Advanced surveillance and access control systems.',
  },
  {
    icon: IconExpert,
    title: 'Expert Support',
    description: 'Experienced technical team and maintenance services.',
  },
  {
    icon: IconBusiness,
    title: 'Business Ready',
    description: 'Scalable solutions for offices, enterprises, and institutions.',
  },
];

/**
 * Why Choose Us — four feature highlight cards.
 */
function Features() {
  return (
    <section
      id="why-choose-us"
      className="section section--alt features"
      aria-labelledby="features-heading"
    >
      <div className="container">
        <header className="section-header fade-in">
          <div className="section-divider" />
          <h2 id="features-heading">Why Choose Us</h2>
          <p>Trusted partner for network, security, and IT excellence.</p>
        </header>

        <div className="features__grid">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <article
                key={feature.title}
                className={`features__card fade-in fade-in-delay-${index + 1}`}
              >
                <div className="features__icon" aria-hidden="true">
                  <Icon />
                </div>
                <h3 className="features__title">{feature.title}</h3>
                <p className="features__desc">{feature.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;
