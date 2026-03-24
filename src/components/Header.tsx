import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ASSETS, CONTACT, NAV } from '../constants'
import styles from './Header.module.css'

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className={styles.root}>
      <div className={styles.topBar}>
        <div className={styles.topInner}>
          <Link to="/" className={styles.logoLink} onClick={() => setOpen(false)}>
            <img
              src={ASSETS.logo}
              alt="Adeavor"
              className={styles.logo}
              decoding="async"
            />
          </Link>

          <div className={styles.contactCluster}>
            <div className={styles.contactBlock}>
              <span className={styles.icon} aria-hidden>
                ◉
              </span>
              <div>
                <p className={styles.contactLabel}>Office</p>
                <p className={styles.contactText}>
                  {CONTACT.addressLines.map((line) => (
                    <span key={line}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>
              </div>
            </div>
            <div className={styles.contactBlock}>
              <span className={styles.icon} aria-hidden>
                ☎
              </span>
              <div>
                <p className={styles.contactLabel}>Have a question</p>
                <a href={CONTACT.phoneHref} className={styles.phone}>
                  {CONTACT.phoneDisplay}
                </a>
              </div>
            </div>
            <Link to="/contact" className={styles.cta} onClick={() => setOpen(false)}>
              Request a call back
            </Link>
          </div>

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
            <span className={styles.menuIcon} data-open={open} />
          </button>
        </div>

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
      </div>
    </header>
  )
}
