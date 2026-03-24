import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'
import { Header } from './Header'

export function Layout() {
  return (
    <>
      <Header />
      <main style={{ flex: 1, minWidth: 0 }} id="main">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
