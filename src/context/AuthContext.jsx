import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { validateCredentials } from '../utils/authConfig';
import { getSession, setSession, clearSession, isSessionValid } from '../utils/storage';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const session = getSession();
    if (session && isSessionValid()) {
      setUser(session.user);
    } else {
      clearSession();
    }
    setLoading(false);
  }, []);

  const login = useCallback((username, password) => {
    if (!validateCredentials(username, password)) {
      return { success: false, error: 'Invalid username or password.' };
    }
    const adminUser = { username: username.trim(), role: 'admin' };
    setSession(adminUser);
    setUser(adminUser);
    return { success: true };
  }, []);

  const logout = useCallback(() => {
    clearSession();
    setUser(null);
  }, []);

  const value = {
    user,
    isAuthenticated: !!user,
    loading,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}
