import Navbar from '../common/Navbar.jsx'
import Footer from '../common/Footer.jsx'

export default function MainLayout({ children }) {
  return (
    <div className="app-shell">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
