import { NavLink } from 'react-router-dom'
import { MOBILE_DOCK_NAV } from '../constants'
import styles from './MobileDock.module.css'

export function MobileDock() {
  return (
    <nav className={styles.dock} aria-label="Quick site navigation">
      <div className={styles.track}>
        {MOBILE_DOCK_NAV.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              `${styles.link} ${isActive ? styles.active : ''}`
            }
          >
            <span className={styles.dot} aria-hidden />
            <span>{label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
