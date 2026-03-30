import { Link } from 'react-router-dom'
import { ASSETS, CONTACT, NAV } from '../constants'
import styles from './Footer.module.css'

const social = [
  { href: 'https://twitter.com/', label: 'Twitter', icon: 'fa-brands fa-x-twitter' },
  { href: 'https://facebook.com/', label: 'Facebook', icon: 'fa-brands fa-facebook-f' },
  {
    href: 'https://www.linkedin.com/',
    label: 'LinkedIn',
    icon: 'fa-brands fa-linkedin-in',
  },
] as const

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div>
            <Link to="/" className={styles.brandLink}>
              <img
                src={ASSETS.logo}
                alt="Adeavor"
                className={styles.brandLogo}
                decoding="async"
              />
            </Link>
            <p className={styles.tagline}>
              Engineering and technology solutions with operational excellence
              through People, Process, and Performance since 2011.
            </p>
            <p className={styles.small}>
              <i className="fa-solid fa-location-dot" aria-hidden />{' '}
              {CONTACT.addressLines.join(' · ')}
            </p>
          </div>
          <nav className={styles.sitemap} aria-label="Site pages">
            <p className={styles.heading}>Site</p>
            <ul className={styles.siteList}>
              {NAV.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to}>{label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className={styles.heading}>Contact</p>
            <p className={styles.small}>
              <a href={`mailto:${CONTACT.email}`}>
                <i className="fa-solid fa-envelope" aria-hidden /> {CONTACT.email}
              </a>
              <br />
              <a href={CONTACT.phoneHref}>
                <i className="fa-solid fa-phone" aria-hidden />{' '}
                {CONTACT.phoneDisplay}
              </a>
            </p>
            <Link to="/contact" className={styles.linkBtn}>
              Get in touch
            </Link>
          </div>
          <div>
            <p className={styles.heading}>Follow</p>
            <ul className={styles.social}>
              {social.map(({ href, label, icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={styles.socialLink}
                  >
                    <i className={icon} aria-hidden />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className={styles.copy}>
          Adeavor © {year}. Oil &amp; Gas consultancy · Engineering &amp;
          technology solutions
        </p>
      </div>
    </footer>
  )
}
