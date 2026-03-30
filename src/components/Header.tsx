import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ASSETS, CONTACT, NAV } from '../constants'
import styles from './Header.module.css'

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className={styles.root}>
      <div className={styles.topStrip}>
        <div className={styles.topStripInner}>
          <p className={styles.address}>
            <i className={`fa-solid fa-location-dot ${styles.topIcon}`} aria-hidden />
            <span>
              {CONTACT.addressLines.slice(0, 2).join(', ')}
              {', '}
              {CONTACT.addressLines[2]}
            </span>
          </p>
          <div className={styles.topRight}>
            <a href={CONTACT.phoneHref} className={styles.topPhone}>
              <i className="fa-solid fa-phone" aria-hidden />
              <span>{CONTACT.phoneDisplay}</span>
            </a>
            <Link
              to="/contact"
              className={styles.topCta}
              onClick={() => setOpen(false)}
            >
              Request a call back
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.navBar}>
        <div className={styles.navInner}>
          <Link
            to="/"
            className={styles.logoLink}
            onClick={() => setOpen(false)}
          >
            <img
              src={ASSETS.logo}
              alt="Adeavor"
              className={styles.logo}
              decoding="async"
            />
          </Link>

          <nav
            id="site-nav"
            className={`${styles.nav} ${open ? styles.navOpen : ''}`}
            aria-label="Primary"
          >
            <ul className={styles.navList}>
              {NAV.map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    end={to === '/'}
                    className={({ isActive }) =>
                      `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
                    }
                    onClick={() => setOpen(false)}
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <Link
            to="/contact"
            className={styles.navCta}
            onClick={() => setOpen(false)}
          >
            Get a consultation
          </Link>

          <button
            type="button"
            className={styles.menuBtn}
            aria-expanded={open}
            aria-controls="site-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="visually-hidden">
              {open ? 'Close menu' : 'Open menu'}
            </span>
            <i
              className={`fa-solid ${open ? 'fa-xmark' : 'fa-bars'}`}
              aria-hidden
            />
          </button>
        </div>
      </div>
    </header>
  )
}
