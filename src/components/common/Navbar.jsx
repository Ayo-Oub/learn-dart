import { NavLink } from 'react-router-dom'
import './Navbar.css'

const links = [
  { to: '/', label: 'Accueil', end: true },
  { to: '/lecons', label: 'Leçons' },
  { to: '/exercices', label: 'Exercices' },
  { to: '/a-propos', label: 'À propos' },
]

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <NavLink to="/" className="navbar__brand">
          Le Cahier <span className="navbar__brand-accent">Dart</span>
        </NavLink>

        <nav className="navbar__links" aria-label="Navigation principale">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                'navbar__link' + (isActive ? ' navbar__link--active' : '')
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
