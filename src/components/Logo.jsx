import './Logo.css';

const VARIANTS = {
  hero: 'logo-frame--hero',
  navbar: 'logo-frame--navbar',
  footer: 'logo-frame--footer',
  login: 'logo-frame--login',
};

const LOGO_SIZES = {
  hero: { width: 132, height: 62 },
  navbar: { width: 86, height: 38 },
  footer: { width: 118, height: 56 },
  login: { width: 122, height: 58 },
};

/**
 * Branded logo in a circular frame — consistent sizing across the site.
 */
function Logo({ variant = 'hero', className = '', alt = 'Aman Global Enterprises' }) {
  const size = LOGO_SIZES[variant] || LOGO_SIZES.hero;

  return (
    <div className={`logo-frame ${VARIANTS[variant] || ''} ${className}`.trim()}>
      <img
        src="/aman-global-logo.png"
        alt={alt}
        className="logo-frame__img"
        width={size.width}
        height={size.height}
        loading={variant === 'hero' ? 'eager' : 'lazy'}
        decoding="async"
      />
    </div>
  );
}

export default Logo;
