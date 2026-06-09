import { useState } from 'react';
import './Gallery.css';

const CATEGORIES = ['All', 'CCTV', 'Networking', 'Fiber', 'Access Control', 'Rack Setup'];

const GALLERY_ITEMS = [
  {
    title: 'Office CCTV Installation',
    category: 'CCTV',
    description: 'Multi-camera IP surveillance with NVR and remote monitoring.',
    gradient: 'linear-gradient(135deg, #1e3a5f 0%, #1e5aa8 50%, #0ea5e9 100%)',
    icon: 'camera',
  },
  {
    title: 'Enterprise Network Rack',
    category: 'Rack Setup',
    description: 'Structured cabling, patch panels, and Cisco switch deployment.',
    gradient: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
    icon: 'rack',
  },
  {
    title: 'Fiber Backbone Deployment',
    category: 'Fiber',
    description: 'Outdoor fiber routing with splicing and OTDR certification.',
    gradient: 'linear-gradient(135deg, #064e3b 0%, #047857 50%, #10b981 100%)',
    icon: 'fiber',
  },
  {
    title: 'WiFi Campus Coverage',
    category: 'Networking',
    description: 'Ubiquiti access points across multi-floor office campus.',
    gradient: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #60a5fa 100%)',
    icon: 'wifi',
  },
  {
    title: 'Biometric Access Control',
    category: 'Access Control',
    description: 'Fingerprint and card-based entry for secure facilities.',
    gradient: 'linear-gradient(135deg, #7c2d12 0%, #c2410c 50%, #f97316 100%)',
    icon: 'lock',
  },
  {
    title: 'Retail Surveillance Setup',
    category: 'CCTV',
    description: 'CP Plus dome cameras with 24/7 recording and night vision.',
    gradient: 'linear-gradient(135deg, #4c0519 0%, #9f1239 50%, #e11d48 100%)',
    icon: 'camera',
  },
  {
    title: 'LAN Switch Configuration',
    category: 'Networking',
    description: 'D-Link and Netlink managed switches with VLAN segmentation.',
    gradient: 'linear-gradient(135deg, #134e4a 0%, #0d9488 50%, #2dd4bf 100%)',
    icon: 'network',
  },
  {
    title: 'Server Room Infrastructure',
    category: 'Rack Setup',
    description: 'PDU, UPS, and cable management for production server racks.',
    gradient: 'linear-gradient(135deg, #312e81 0%, #4f46e5 50%, #818cf8 100%)',
    icon: 'rack',
  },
];

function GalleryIcon({ type }) {
  const icons = {
    camera: (
      <svg viewBox="0 0 48 48" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="2">
        <rect x="6" y="14" width="28" height="20" rx="3" />
        <path d="M34 20l8-4v16l-8-4" />
        <circle cx="20" cy="24" r="5" />
      </svg>
    ),
    rack: (
      <svg viewBox="0 0 48 48" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="2">
        <rect x="12" y="6" width="24" height="36" rx="2" />
        <path d="M16 14h16M16 22h16M16 30h16" />
        <circle cx="18" cy="14" r="1.5" fill="rgba(255,255,255,0.7)" />
        <circle cx="18" cy="22" r="1.5" fill="rgba(255,255,255,0.7)" />
        <circle cx="18" cy="30" r="1.5" fill="rgba(255,255,255,0.7)" />
      </svg>
    ),
    fiber: (
      <svg viewBox="0 0 48 48" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="2">
        <path d="M8 24c0-8 8-14 16-14s16 6 16 14-8 14-16 14" />
        <circle cx="24" cy="24" r="4" />
        <path d="M24 10v6M24 32v6" />
      </svg>
    ),
    wifi: (
      <svg viewBox="0 0 48 48" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="2">
        <path d="M8 28a20 20 0 0128 0M14 34a12 12 0 0116 0M20 40h8" />
      </svg>
    ),
    lock: (
      <svg viewBox="0 0 48 48" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="2">
        <rect x="10" y="22" width="28" height="18" rx="3" />
        <path d="M16 22v-6a8 8 0 0116 0v6" />
        <circle cx="24" cy="31" r="3" />
      </svg>
    ),
    network: (
      <svg viewBox="0 0 48 48" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="2">
        <circle cx="24" cy="24" r="4" />
        <circle cx="10" cy="12" r="3" />
        <circle cx="38" cy="12" r="3" />
        <circle cx="10" cy="36" r="3" />
        <circle cx="38" cy="36" r="3" />
        <path d="M13 14l8 8M27 20l8-6M13 34l8-8M27 28l8 6" />
      </svg>
    ),
  };

  return <div className="gallery__item-icon">{icons[type]}</div>;
}

/**
 * Project gallery with category filter.
 */
function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="section gallery" aria-labelledby="gallery-heading">
      <div className="container">
        <header className="section-header fade-in">
          <div className="section-divider" />
          <h2 id="gallery-heading">Project Gallery</h2>
          <p>
            A showcase of our network, surveillance, and infrastructure installations
            across offices, campuses, and commercial sites.
          </p>
        </header>

        <div className="gallery__filters fade-in fade-in-delay-1" role="tablist" aria-label="Gallery categories">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={activeCategory === category}
              className={`gallery__filter ${activeCategory === category ? 'gallery__filter--active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="gallery__grid">
          {filtered.map((item, index) => (
            <article
              key={item.title}
              className={`gallery__item fade-in fade-in-delay-${(index % 4) + 1}`}
            >
              <div
                className="gallery__item-visual"
                style={{ background: item.gradient }}
              >
                <GalleryIcon type={item.icon} />
                <span className="gallery__item-badge">{item.category}</span>
              </div>
              <div className="gallery__item-content">
                <h3 className="gallery__item-title">{item.title}</h3>
                <p className="gallery__item-desc">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
