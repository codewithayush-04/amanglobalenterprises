const INQUIRIES_KEY = 'aman_contact_inquiries';
const SESSION_KEY = 'aman_admin_session';

/**
 * Contact inquiries stored in localStorage (demo until backend is added).
 */
export function getInquiries() {
  try {
    const data = localStorage.getItem(INQUIRIES_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export function saveInquiry(inquiry) {
  const inquiries = getInquiries();
  const entry = {
    id: crypto.randomUUID(),
    ...inquiry,
    read: false,
    createdAt: new Date().toISOString(),
  };
  inquiries.unshift(entry);
  localStorage.setItem(INQUIRIES_KEY, JSON.stringify(inquiries));
  return entry;
}

export function markInquiryRead(id) {
  const inquiries = getInquiries().map((item) =>
    item.id === id ? { ...item, read: true } : item
  );
  localStorage.setItem(INQUIRIES_KEY, JSON.stringify(inquiries));
}

export function deleteInquiry(id) {
  const inquiries = getInquiries().filter((item) => item.id !== id);
  localStorage.setItem(INQUIRIES_KEY, JSON.stringify(inquiries));
}

export function clearAllInquiries() {
  localStorage.removeItem(INQUIRIES_KEY);
}

/**
 * Admin session helpers.
 */
export function getSession() {
  try {
    const data = localStorage.getItem(SESSION_KEY);
    return data ? JSON.parse(data) : null;
  } catch {
    return null;
  }
}

export function setSession(user) {
  const session = {
    user,
    loginAt: new Date().toISOString(),
    expiresAt: Date.now() + 24 * 60 * 60 * 1000,
  };
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  return session;
}

export function clearSession() {
  localStorage.removeItem(SESSION_KEY);
}

export function isSessionValid() {
  const session = getSession();
  if (!session) return false;
  return Date.now() < session.expiresAt;
}
