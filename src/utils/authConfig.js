/**
 * Admin credentials — override via .env in production.
 * VITE_ADMIN_USERNAME and VITE_ADMIN_PASSWORD
 */
export const ADMIN_CREDENTIALS = {
  username: import.meta.env.VITE_ADMIN_USERNAME || 'admin',
  password: import.meta.env.VITE_ADMIN_PASSWORD || 'AmanGlobal@2024',
};

export function validateCredentials(username, password) {
  return (
    username.trim() === ADMIN_CREDENTIALS.username &&
    password === ADMIN_CREDENTIALS.password
  );
}
