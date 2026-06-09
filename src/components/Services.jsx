import { useState } from 'react';
import {
  IconFiber,
  IconCCTV,
  IconWifi,
  IconRouter,
  IconPhone,
  IconWrench,
  IconContract,
  IconBuilding,
  IconTower,
  IconLock,
  IconCable,
  IconTool,
  IconServer,
  IconFingerprint,
  IconIntercom,
  IconNetwork,
  IconWireless,
  IconSupport,
  IconShield,
  IconEnterprise,
} from './icons';
import './Services.css';

/** All services with icon, summary, and expandable details */
const SERVICES = [
  {
    icon: IconFiber,
    title: 'Fiber Network Installation',
    description: 'High-speed fiber optic cabling and end-to-end network deployment.',
    details: [
      'Single-mode and multi-mode fiber optic cable installation',
      'Splicing, termination, and OTDR testing',
      'Indoor and outdoor fiber routing with proper conduits',
      'High-speed connectivity for offices and campuses',
    ],
  },
  {
    icon: IconCCTV,
    title: 'CCTV Installation',
    description: 'Professional surveillance camera setup for complete premises coverage.',
    details: [
      'IP and analog camera installation (indoor/outdoor)',
      'DVR/NVR setup with remote viewing configuration',
      'Night vision, PTZ, and wide-angle camera options',
      'Coverage planning for entrances, parking, and work areas',
    ],
  },
  {
    icon: IconWifi,
    title: 'WiFi Setup & Configuration',
    description: 'Optimized wireless networks for offices, campuses, and commercial spaces.',
    details: [
      'Access point placement and site survey',
      'SSID, VLAN, and guest network configuration',
      'Bandwidth optimization and interference reduction',
      'Secure WPA3/WPA2 enterprise wireless setup',
    ],
  },
  {
    icon: IconRouter,
    title: 'Router & Switch Configuration',
    description: 'Enterprise-grade routing and switching for reliable connectivity.',
    details: [
      'Layer 2/3 switch configuration and VLAN segmentation',
      'Router setup with firewall and NAT policies',
      'QoS configuration for voice and critical applications',
      'Redundancy and failover for business continuity',
    ],
  },
  {
    icon: IconPhone,
    title: 'EPABX System Setup',
    description: 'Business phone systems with seamless internal and external communication.',
    details: [
      'IP and analog EPABX installation and programming',
      'Extension setup, IVR, and call routing',
      'Integration with desk phones and softphones',
      'Trunk lines and outbound call configuration',
    ],
  },
  {
    icon: IconWrench,
    title: 'Network Maintenance Services',
    description: 'Proactive monitoring and maintenance to keep networks running smoothly.',
    details: [
      'Scheduled health checks and performance audits',
      'Firmware updates and security patch management',
      'Cable, switch, and router inspection',
      'Preventive maintenance to reduce downtime',
    ],
  },
  {
    icon: IconContract,
    title: 'AMC (Annual Maintenance Contract)',
    description: 'Year-round maintenance contracts for uninterrupted IT operations.',
    details: [
      'Flexible AMC plans for networks and security systems',
      'Priority support with defined response times',
      'Regular visits and on-call technical assistance',
      'Cost-effective long-term IT infrastructure care',
    ],
  },
  {
    icon: IconBuilding,
    title: 'Office IT Infrastructure Setup',
    description: 'Complete IT infrastructure design and implementation for offices.',
    details: [
      'End-to-end office network and hardware planning',
      'Workstation connectivity and patch panel setup',
      'Server room design with power and cooling considerations',
      'Scalable infrastructure for growing teams',
    ],
  },
  {
    icon: IconTower,
    title: 'Tower & Fiber Support',
    description: 'Tower infrastructure and fiber backbone support for large deployments.',
    details: [
      'Tower-mounted equipment installation and alignment',
      'Long-distance fiber backbone deployment',
      'Link testing and signal strength optimization',
      'Support for multi-building and campus networks',
    ],
  },
  {
    icon: IconLock,
    title: 'Access Control System',
    description: 'Secure entry management with card, biometric, and smart access solutions.',
    details: [
      'RFID card, fingerprint, and face recognition systems',
      'Door controller and electromagnetic lock integration',
      'Time-based access rules and visitor management',
      'Audit logs and centralized access monitoring',
    ],
  },
  {
    icon: IconCable,
    title: 'Structured Cabling Solutions',
    description: 'Organized, standards-compliant cabling for scalable network growth.',
    details: [
      'Cat6/Cat6A copper cabling with certified testing',
      'Patch panels, cable trays, and labeling standards',
      'TIA/EIA compliant structured wiring design',
      'Clean cable management for easy future expansion',
    ],
  },
  {
    icon: IconTool,
    title: 'Network Troubleshooting',
    description: 'Rapid diagnosis and resolution of network performance and connectivity issues.',
    details: [
      'On-site and remote fault diagnosis',
      'Latency, packet loss, and bandwidth issue resolution',
      'Switch, router, and endpoint connectivity fixes',
      'Root cause analysis and permanent fix recommendations',
    ],
  },
  {
    icon: IconServer,
    title: 'Server Rack Installation',
    description: 'Professional server rack mounting, cable management, and cooling setup.',
    details: [
      'Server rack assembly and secure mounting',
      'PDU, UPS, and cable management installation',
      'Ventilation and airflow optimization',
      'Neat labeling for servers, switches, and patch panels',
    ],
  },
  {
    icon: IconFingerprint,
    title: 'Biometric Attendance System',
    description: 'Fingerprint and facial recognition attendance for accurate workforce tracking.',
    details: [
      'Biometric device installation and enrollment',
      'Integration with HR and payroll software',
      'Shift-wise attendance and report generation',
      'Anti-spoofing and secure data storage options',
    ],
  },
  {
    icon: IconIntercom,
    title: 'Intercom System Setup',
    description: 'Audio and video intercom systems for buildings and secure facilities.',
    details: [
      'Audio and video door intercom installation',
      'Multi-unit apartment and office intercom systems',
      'Integration with access control and mobile apps',
      'Clear two-way communication for secure entry',
    ],
  },
  {
    icon: IconNetwork,
    title: 'LAN/WAN Networking Solutions',
    description: 'Local and wide area network design for multi-site business connectivity.',
    details: [
      'LAN design for single and multi-floor offices',
      'WAN links via leased lines, MPLS, or VPN',
      'Site-to-site connectivity for branch offices',
      'Network topology planning and documentation',
    ],
  },
  {
    icon: IconWireless,
    title: 'Wireless Network Solutions',
    description: 'Enterprise wireless coverage with security and performance optimization.',
    details: [
      'Enterprise mesh and controller-based WiFi',
      'Outdoor wireless links for distant buildings',
      'Wireless security with encryption and isolation',
      'Capacity planning for high-density environments',
    ],
  },
  {
    icon: IconSupport,
    title: 'IT Support & Technical Services',
    description: 'On-site and remote technical support for day-to-day IT needs.',
    details: [
      'Desktop, laptop, and peripheral support',
      'Software installation and troubleshooting',
      'Email, printer, and connectivity issue resolution',
      'Dedicated technical support for business operations',
    ],
  },
  {
    icon: IconShield,
    title: 'Security Surveillance Solutions',
    description: 'Integrated security systems including monitoring and recording solutions.',
    details: [
      'Integrated CCTV, access control, and alarm systems',
      'Central monitoring dashboard setup',
      'Motion detection and alert notification configuration',
      'Secure video storage with retention policies',
    ],
  },
  {
    icon: IconEnterprise,
    title: 'Enterprise Networking Solutions',
    description: 'Scalable enterprise-grade networking for growing organizations.',
    details: [
      'High-availability network architecture design',
      'Enterprise firewall and segmentation policies',
      'Multi-site network integration and management',
      'Future-ready infrastructure for business growth',
    ],
  },
];

/**
 * Single service card with expandable details via + toggle.
 */
function ServiceCard({ service, index }) {
  const [expanded, setExpanded] = useState(false);
  const Icon = service.icon;
  const panelId = `service-details-${index}`;

  return (
    <article
      className={`services__card fade-in ${expanded ? 'services__card--expanded' : ''}`}
      style={{ animationDelay: `${(index % 6) * 0.05}s` }}
    >
      <div className="services__card-top">
        <div className="services__icon" aria-hidden="true">
          <Icon />
        </div>
        <button
          type="button"
          className={`services__toggle ${expanded ? 'services__toggle--active' : ''}`}
          onClick={() => setExpanded((prev) => !prev)}
          aria-expanded={expanded}
          aria-controls={panelId}
          aria-label={expanded ? `Hide details for ${service.title}` : `Show details for ${service.title}`}
        >
          <span className="services__toggle-icon" aria-hidden="true" />
        </button>
      </div>

      <h3 className="services__title">{service.title}</h3>
      <p className="services__desc">{service.description}</p>

      <div
        id={panelId}
        className={`services__details ${expanded ? 'services__details--open' : ''}`}
        aria-hidden={!expanded}
      >
        <div className="services__details-inner">
          <p className="services__details-heading">What we offer</p>
          <ul className="services__details-list">
            {service.details.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

/**
 * Services grid with icon cards, hover lift, and expandable details.
 */
function Services() {
  return (
    <section id="services" className="section services" aria-labelledby="services-heading">
      <div className="container">
        <header className="section-header fade-in">
          <div className="section-divider" />
          <h2 id="services-heading">Our Services</h2>
          <p>Comprehensive network, security, and IT solutions tailored for your business.</p>
        </header>

        <div className="services__grid">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
