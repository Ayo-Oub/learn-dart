import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="container" style={{ padding: '80px 24px', textAlign: 'center' }}>
      <h1>Page arrachée du cahier</h1>
      <p style={{ color: 'var(--ink-soft)' }}>Cette page n'existe pas.</p>
      <Link to="/" style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem' }}>
        ← Retour à l'accueil
      </Link>
    </section>
  )
}
