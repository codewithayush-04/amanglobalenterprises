import { useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Logo from '../components/Logo';
import './Login.css';

/**
 * Admin login page.
 */
function Login() {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/admin';

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  if (isAuthenticated) {
    return <Navigate to="/admin" replace />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);

    const result = login(username, password);
    setSubmitting(false);

    if (result.success) {
      navigate(from, { replace: true });
    } else {
      setError(result.error);
    }
  };

  return (
    <div className="login">
      <div className="login__bg" aria-hidden="true">
        <div className="login__grid" />
      </div>

      <div className="login__container">
        <div className="login__card">
          <Link to="/" className="login__back">
            &larr; Back to website
          </Link>

          <div className="login__brand">
            <Logo variant="login" />
            <h1>Admin Login</h1>
            <p>A UNIT OF AGE GROUP</p>
          </div>

          <form className="login__form" onSubmit={handleSubmit} noValidate>
            {error && (
              <div className="login__error" role="alert">
                {error}
              </div>
            )}

            <div className="login__field">
              <label htmlFor="username">Username</label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
                autoComplete="username"
                required
              />
            </div>

            <div className="login__field">
              <label htmlFor="password">Password</label>
              <div className="login__password-wrap">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  autoComplete="current-password"
                  required
                />
                <button
                  type="button"
                  className="login__show-btn"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>

            <button type="submit" className="btn btn--primary login__submit" disabled={submitting}>
              {submitting ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <p className="login__hint">
            Demo credentials: <strong>admin</strong> / <strong>AmanGlobal@2024</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
