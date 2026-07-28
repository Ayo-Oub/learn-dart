import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
  return (
    <>
      <section className="hero container">
        <div className="hero__text">
          <p className="hero__eyebrow">Un cahier, pas un cours magistral</p>
          <h1>
            Apprends <span className="text-dart">Dart</span>
            <br />
            comme on remplit un cahier.
          </h1>
          <p className="hero__lede">
            Des leçons courtes, des exemples qu'on annote soi-même, et un
            terrain de jeu pour exécuter du vrai code Dart — sans jamais
            quitter la page.
          </p>
          <div className="hero__actions">
            <Link to="/lecons" className="btn btn--primary">
              Commencer la première leçon
            </Link>
            <Link to="/exercices" className="btn btn--ghost">
              Voir les exercices
            </Link>
          </div>
        </div>

        <div className="hero__notebook" aria-hidden="true">
          <div className="notebook-card">
            <span className="notebook-card__label">variables.dart</span>
            <pre className="notebook-card__code">{`void main() {
  String prenom = 'Ayoub';
  int annee = 2026;

  print('Salut \${prenom} !');
}`}</pre>
          </div>
        </div>
      </section>

      <section className="container why">
        <h2>Pourquoi un cahier ?</h2>
        <div className="why__grid">
          <div className="why__card">
            <span className="why__mark">✎</span>
            <h3>On écrit, on n'écoute pas</h3>
            <p>Chaque notion s'accompagne d'un exemple à modifier soi-même.</p>
          </div>
          <div className="why__card">
            <span className="why__mark">▤</span>
            <h3>Progression claire</h3>
            <p>Des leçons courtes, rangées dans l'ordre, sans détour inutile.</p>
          </div>
          <div className="why__card">
            <span className="why__mark">✓</span>
            <h3>On corrige au fur et à mesure</h3>
            <p>Des exercices avec correction pour vérifier ce qu'on a compris.</p>
          </div>
        </div>
      </section>
    </>
  )
}
