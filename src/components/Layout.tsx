import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'
import { Header } from './Header'
import { MobileDock } from './MobileDock'
import styles from './Layout.module.css'

export function Layout() {
  return (
    <div className={styles.shell}>
      <Header />
      <main style={{ flex: 1, minWidth: 0 }} id="main">
        <Outlet />
      </main>
      <Footer />
      <MobileDock />
    </div>
  )
}
