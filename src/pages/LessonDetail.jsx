import { useParams, Link } from 'react-router-dom'
import lessons, { getLessonBySlug } from '../data/lessons/index.js'
import LessonSection from '../components/lesson/LessonSection.jsx'

export default function LessonDetail() {
  const { slug } = useParams()
  const lesson = getLessonBySlug(slug)

  if (!lesson) {
    return (
      <section className="container" style={{ padding: '48px 24px' }}>
        <h1>Leçon introuvable</h1>
        <p>Cette leçon n'existe pas ou plus.</p>
        <Link to="/lecons">Retour aux leçons</Link>
      </section>
    )
  }

  const nextLesson = lesson.next ? getLessonBySlug(lesson.next) : null

  return (
    <section className="container notebook-page" style={{ padding: '48px 24px 80px', maxWidth: 760 }}>
      <Link to="/lecons" style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem' }}>
        ← Toutes les leçons
      </Link>

      <div style={{ marginTop: 16, marginBottom: 8, display: 'flex', gap: 12, alignItems: 'baseline' }}>
        <h1 style={{ margin: 0 }}>{lesson.title}</h1>
        {lesson.duration && (
          <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', color: 'var(--accent-coral)' }}>
            · {lesson.duration}
          </span>
        )}
      </div>

      <p style={{ color: 'var(--ink-soft)', maxWidth: '60ch' }}>{lesson.summary}</p>

      {/* Objectifs */}
      {lesson.objectives?.length > 0 && (
        <div
          style={{
            background: 'var(--paper-alt)',
            borderRadius: 'var(--radius-md)',
            padding: '20px 24px',
            margin: '28px 0',
          }}
        >
          <h3 style={{ marginTop: 0, fontSize: '1.3rem' }}>Ce que tu vas savoir faire</h3>
          <ul style={{ margin: 0, paddingLeft: '1.2em' }}>
            {lesson.objectives.map((obj, i) => (
              <li key={i}>{obj}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Sections détaillées */}
      {lesson.sections?.length > 0 &&
        lesson.sections.map((section) => <LessonSection key={section.id} section={section} />)}

      {/* Points clés */}
      {lesson.keyPoints?.length > 0 && (
        <div
          style={{
            borderLeft: '4px solid var(--dart-blue)',
            paddingLeft: 20,
            margin: '36px 0',
          }}
        >
          <h3 style={{ fontSize: '1.3rem' }}>À retenir</h3>
          <ul style={{ margin: 0, paddingLeft: '1.2em' }}>
            {lesson.keyPoints.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Aperçu d'exercice */}
      {lesson.exercisePreview && (
        <div
          style={{
            background: 'var(--paper-alt)',
            border: '2px dashed var(--accent-coral)',
            borderRadius: 'var(--radius-md)',
            padding: '20px 24px',
            margin: '28px 0',
          }}
        >
          <h3 style={{ marginTop: 0, fontSize: '1.3rem' }}>✎ À toi de jouer</h3>
          <p style={{ marginBottom: 8 }}>{lesson.exercisePreview.prompt}</p>
          {lesson.exercisePreview.hint && (
            <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--ink-soft)' }}>
              Indice : {lesson.exercisePreview.hint}
            </p>
          )}
        </div>
      )}

      {/* Navigation vers la leçon suivante */}
      {nextLesson && (
        <div style={{ marginTop: 48, textAlign: 'right' }}>
          <Link
            to={`/lecons/${nextLesson.slug}`}
            className="btn btn--primary"
            style={{ textDecoration: 'none' }}
          >
            Leçon suivante : {nextLesson.title} →
          </Link>
        </div>
      )}
    </section>
  )
}
