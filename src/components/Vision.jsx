import { IconShield, IconNetwork, IconSupport } from './icons';
import './Vision.css';

const PILLARS = [
  {
    icon: IconNetwork,
    title: 'Connected Future',
    description:
      'Build smart, scalable network infrastructure that keeps every business connected and productive.',
  },
  {
    icon: IconShield,
    title: 'Secure by Design',
    description:
      'Protect people, property, and data with surveillance, access control, and security systems you can trust.',
  },
  {
    icon: IconSupport,
    title: 'Partnership First',
    description:
      'Deliver responsive support, honest guidance, and long-term service that grows with your organization.',
  },
];

/**
 * Company vision and mission pillars.
 */
function Vision() {
  return (
    <section id="vision" className="section vision" aria-labelledby="vision-heading">
      <div className="container">
        <header className="section-header fade-in">
          <div className="section-divider" />
          <h2 id="vision-heading">Our Company Vision</h2>
          <p>
            To be the most trusted partner for smart network and security solutions — helping
            businesses stay connected, protected, and ready for tomorrow.
          </p>
        </header>

        <div className="vision__content fade-in fade-in-delay-1">
          <blockquote className="vision__statement">
            <p>
              We envision a world where every organization — from offices and enterprises to
              institutions — operates on reliable technology backed by expert people who care.
            </p>
          </blockquote>
        </div>

        <div className="vision__pillars">
          {PILLARS.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <article
                key={pillar.title}
                className={`vision__pillar fade-in fade-in-delay-${index + 2}`}
              >
                <div className="vision__pillar-icon" aria-hidden="true">
                  <Icon />
                </div>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Vision;
