import { Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { About } from './pages/About'
import { Business } from './pages/Business'
import { Careers } from './pages/Careers'
import { Contact } from './pages/Contact'
import { Home } from './pages/Home'
import { Stewardship } from './pages/Stewardship'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="business" element={<Business />} />
        <Route path="stewardship" element={<Stewardship />} />
        <Route path="contact" element={<Contact />} />
        <Route path="careers" element={<Careers />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
