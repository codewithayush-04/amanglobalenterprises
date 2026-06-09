import {
  LogoCisco,
  LogoCPPlus,
  LogoHikvision,
  LogoDLink,
  LogoTPLink,
  LogoNetlink,
  LogoUbiquiti,
  LogoFortinet,
} from './brandLogos';
import {
  IconCCTV,
  IconRouter,
  IconWifi,
  IconLock,
  IconServer,
  IconShield,
} from './icons';
import './Products.css';

const BRANDS = [
  { name: 'Cisco', logo: LogoCisco, category: 'Networking' },
  { name: 'CP Plus', logo: LogoCPPlus, category: 'Surveillance' },
  { name: 'Hikvision', logo: LogoHikvision, category: 'CCTV' },
  { name: 'D-Link', logo: LogoDLink, category: 'Networking' },
  { name: 'TP-Link', logo: LogoTPLink, category: 'Wireless' },
  { name: 'Netlink', logo: LogoNetlink, category: 'Fiber' },
  { name: 'Ubiquiti', logo: LogoUbiquiti, category: 'Wireless' },
  { name: 'Fortinet', logo: LogoFortinet, category: 'Security' },
];

const PRODUCTS = [
  {
    icon: IconCCTV,
    title: 'IP & Analog Cameras',
    description: 'CP Plus, Hikvision, and enterprise-grade surveillance cameras for indoor and outdoor use.',
    brands: ['CP Plus', 'Hikvision'],
  },
  {
    icon: IconRouter,
    title: 'Routers & Switches',
    description: 'Cisco, D-Link, and Netlink managed switches and routers for reliable business connectivity.',
    brands: ['Cisco', 'D-Link', 'Netlink'],
  },
  {
    icon: IconWifi,
    title: 'Access Points & WiFi',
    description: 'TP-Link and Ubiquiti wireless access points with enterprise coverage and security.',
    brands: ['TP-Link', 'Ubiquiti'],
  },
  {
    icon: IconLock,
    title: 'Access Control Systems',
    description: 'Biometric, RFID, and smart door controllers integrated with surveillance platforms.',
    brands: ['CP Plus', 'Hikvision'],
  },
  {
    icon: IconServer,
    title: 'NVR / DVR & Storage',
    description: 'Network video recorders and storage solutions for multi-camera deployments.',
    brands: ['CP Plus', 'Hikvision'],
  },
  {
    icon: IconShield,
    title: 'Firewalls & Security',
    description: 'Fortinet and Cisco next-gen firewalls to protect your network perimeter.',
    brands: ['Fortinet', 'Cisco'],
  },
];

/**
 * Products and authorized brand partners section.
 */
function Products() {
  return (
    <section id="products" className="section section--alt products" aria-labelledby="products-heading">
      <div className="container">
        <header className="section-header fade-in">
          <div className="section-divider" />
          <h2 id="products-heading">Products &amp; Brands</h2>
          <p>
            Authorized solutions from leading networking, surveillance, and security brands
            for your business infrastructure.
          </p>
        </header>

        <div className="products__brands fade-in fade-in-delay-1" aria-label="Partner brands">
          {BRANDS.map((brand) => {
            const Logo = brand.logo;
            return (
              <div key={brand.name} className="products__brand" title={brand.name}>
                <div className="products__brand-logo">
                  <Logo />
                </div>
                <span className="products__brand-category">{brand.category}</span>
              </div>
            );
          })}
        </div>

        <div className="products__grid">
          {PRODUCTS.map((product, index) => {
            const Icon = product.icon;
            return (
              <article
                key={product.title}
                className={`products__card fade-in fade-in-delay-${(index % 4) + 1}`}
              >
                <div className="products__icon" aria-hidden="true">
                  <Icon />
                </div>
                <h3 className="products__title">{product.title}</h3>
                <p className="products__desc">{product.description}</p>
                <div className="products__tags">
                  {product.brands.map((brand) => (
                    <span key={brand} className="products__tag">
                      {brand}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Products;
