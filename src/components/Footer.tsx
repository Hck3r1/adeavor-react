import { Link } from 'react-router-dom'
import { CONTACT, NAV } from '../constants'
import styles from './Footer.module.css'

const social = [
  { href: 'https://twitter.com/', label: 'Twitter' },
  { href: 'https://facebook.com/', label: 'Facebook' },
  { href: 'https://www.linkedin.com/', label: 'LinkedIn' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div>
            <p className={styles.tagline}>
              Adeavor is a leading engineering and technology solutions company.
            </p>
            <p className={styles.small}>
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
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              <br />
              <a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a>
            </p>
            <Link to="/contact" className={styles.linkBtn}>
              Get in touch
            </Link>
          </div>
          <div>
            <p className={styles.heading}>Follow</p>
            <ul className={styles.social}>
              {social.map(({ href, label }) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className={styles.copy}>Adeavor © {year}</p>
      </div>
    </footer>
  )
}
