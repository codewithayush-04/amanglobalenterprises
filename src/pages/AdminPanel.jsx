import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
  getInquiries,
  markInquiryRead,
  deleteInquiry,
  clearAllInquiries,
} from '../utils/storage';
import './AdminPanel.css';

const NAV_ITEMS = [
  { id: 'dashboard', label: 'Dashboard', icon: '▣' },
  { id: 'inquiries', label: 'Inquiries', icon: '✉' },
  { id: 'services', label: 'Services', icon: '⚙' },
];

const SERVICE_COUNT = 20;

function formatDate(iso) {
  return new Date(iso).toLocaleString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

/**
 * Admin dashboard with inquiries management.
 */
function AdminPanel() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [inquiries, setInquiries] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const loadInquiries = () => setInquiries(getInquiries());

  useEffect(() => {
    loadInquiries();
  }, []);

  const unreadCount = inquiries.filter((i) => !i.read).length;

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleMarkRead = (id) => {
    markInquiryRead(id);
    loadInquiries();
  };

  const handleDelete = (id) => {
    deleteInquiry(id);
    loadInquiries();
  };

  const handleClearAll = () => {
    if (window.confirm('Delete all inquiries? This cannot be undone.')) {
      clearAllInquiries();
      loadInquiries();
    }
  };

  return (
    <div className="admin">
      {/* Sidebar */}
      <aside className={`admin__sidebar ${sidebarOpen ? 'admin__sidebar--open' : ''}`}>
        <div className="admin__sidebar-brand">
          <span className="admin__sidebar-logo" aria-hidden="true">AG</span>
          <div>
            <strong>Admin Panel</strong>
            <span>Aman Global</span>
          </div>
        </div>

        <nav className="admin__nav" aria-label="Admin navigation">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`admin__nav-item ${activeTab === item.id ? 'admin__nav-item--active' : ''}`}
              onClick={() => {
                setActiveTab(item.id);
                setSidebarOpen(false);
              }}
            >
              <span className="admin__nav-icon" aria-hidden="true">{item.icon}</span>
              {item.label}
              {item.id === 'inquiries' && unreadCount > 0 && (
                <span className="admin__badge">{unreadCount}</span>
              )}
            </button>
          ))}
        </nav>

        <div className="admin__sidebar-footer">
          <Link to="/" className="admin__nav-link">
            View Website
          </Link>
          <button type="button" className="admin__logout" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </aside>

      {sidebarOpen && (
        <button
          type="button"
          className="admin__overlay"
          onClick={() => setSidebarOpen(false)}
          aria-label="Close sidebar"
        />
      )}

      {/* Main content */}
      <div className="admin__main">
        <header className="admin__header">
          <button
            type="button"
            className="admin__menu-btn"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open menu"
          >
            <span /><span /><span />
          </button>
          <div className="admin__header-info">
            <h1>
              {activeTab === 'dashboard' && 'Dashboard'}
              {activeTab === 'inquiries' && 'Contact Inquiries'}
              {activeTab === 'services' && 'Services Overview'}
            </h1>
            <p>Welcome, {user?.username}</p>
          </div>
        </header>

        <div className="admin__content">
          {/* Dashboard tab */}
          {activeTab === 'dashboard' && (
            <div className="admin__dashboard fade-in">
              <div className="admin__stats">
                <article className="admin__stat-card">
                  <span className="admin__stat-label">Total Inquiries</span>
                  <span className="admin__stat-value">{inquiries.length}</span>
                </article>
                <article className="admin__stat-card admin__stat-card--highlight">
                  <span className="admin__stat-label">Unread Messages</span>
                  <span className="admin__stat-value">{unreadCount}</span>
                </article>
                <article className="admin__stat-card">
                  <span className="admin__stat-label">Active Services</span>
                  <span className="admin__stat-value">{SERVICE_COUNT}</span>
                </article>
              </div>

              <section className="admin__panel">
                <div className="admin__panel-header">
                  <h2>Recent Inquiries</h2>
                  {inquiries.length > 0 && (
                    <button type="button" className="admin__link-btn" onClick={() => setActiveTab('inquiries')}>
                      View all
                    </button>
                  )}
                </div>

                {inquiries.length === 0 ? (
                  <p className="admin__empty">No inquiries yet. Messages from the contact form will appear here.</p>
                ) : (
                  <ul className="admin__recent-list">
                    {inquiries.slice(0, 5).map((item) => (
                      <li key={item.id} className={!item.read ? 'admin__recent-item--unread' : ''}>
                        <div>
                          <strong>{item.name}</strong>
                          <span>{item.email}</span>
                        </div>
                        <time dateTime={item.createdAt}>{formatDate(item.createdAt)}</time>
                      </li>
                    ))}
                  </ul>
                )}
              </section>

              <section className="admin__panel">
                <h2>Quick Actions</h2>
                <div className="admin__actions">
                  <Link to="/#contact" className="admin__action-card">
                    <span>Contact Section</span>
                    <small>View public contact form</small>
                  </Link>
                  <Link to="/#services" className="admin__action-card">
                    <span>Services Page</span>
                    <small>View all service listings</small>
                  </Link>
                  <button type="button" className="admin__action-card" onClick={() => setActiveTab('inquiries')}>
                    <span>Manage Inquiries</span>
                    <small>Read and delete messages</small>
                  </button>
                </div>
              </section>
            </div>
          )}

          {/* Inquiries tab */}
          {activeTab === 'inquiries' && (
            <div className="admin__inquiries fade-in">
              <div className="admin__panel-header">
                <p className="admin__panel-desc">{inquiries.length} total message(s)</p>
                {inquiries.length > 0 && (
                  <button type="button" className="admin__danger-btn" onClick={handleClearAll}>
                    Clear All
                  </button>
                )}
              </div>

              {inquiries.length === 0 ? (
                <div className="admin__empty-state">
                  <p>No contact inquiries yet.</p>
                  <Link to="/#contact">Go to contact form</Link>
                </div>
              ) : (
                <div className="admin__inquiry-list">
                  {inquiries.map((item) => (
                    <article
                      key={item.id}
                      className={`admin__inquiry-card ${!item.read ? 'admin__inquiry-card--unread' : ''}`}
                    >
                      <div className="admin__inquiry-top">
                        <div>
                          <h3>{item.name}</h3>
                          <a href={`mailto:${item.email}`}>{item.email}</a>
                        </div>
                        <time dateTime={item.createdAt}>{formatDate(item.createdAt)}</time>
                      </div>
                      <p className="admin__inquiry-message">{item.message}</p>
                      <div className="admin__inquiry-actions">
                        {!item.read && (
                          <button type="button" onClick={() => handleMarkRead(item.id)}>
                            Mark as read
                          </button>
                        )}
                        <button type="button" className="admin__danger-btn" onClick={() => handleDelete(item.id)}>
                          Delete
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Services tab */}
          {activeTab === 'services' && (
            <div className="admin__services fade-in">
              <section className="admin__panel">
                <h2>Services Overview</h2>
                <p className="admin__panel-desc">
                  Your website lists {SERVICE_COUNT} IT and networking services. Visitors can expand each
                  card for detailed information.
                </p>
                <ul className="admin__service-list">
                  {[
                    'Fiber Network Installation', 'CCTV Installation', 'WiFi Setup & Configuration',
                    'Router & Switch Configuration', 'EPABX System Setup', 'Network Maintenance Services',
                    'AMC (Annual Maintenance Contract)', 'Office IT Infrastructure Setup',
                    'Tower & Fiber Support', 'Access Control System', 'Structured Cabling Solutions',
                    'Network Troubleshooting', 'Server Rack Installation', 'Biometric Attendance System',
                    'Intercom System Setup', 'LAN/WAN Networking Solutions', 'Wireless Network Solutions',
                    'IT Support & Technical Services', 'Security Surveillance Solutions',
                    'Enterprise Networking Solutions',
                  ].map((name) => (
                    <li key={name}>{name}</li>
                  ))}
                </ul>
                <Link to="/#services" className="btn btn--primary admin__view-btn">
                  View on Website
                </Link>
              </section>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
