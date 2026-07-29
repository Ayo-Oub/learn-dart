import { useParams, Link } from 'react-router-dom'
import { getLessonBySlug } from '../data/lessons/index.js'
import { getExercisesByLesson } from '../data/exercises/index.js'
import ExerciseCard from '../components/lesson/ExerciseCard.jsx'

export default function ExercisesByLesson() {
  const { slug } = useParams()
  const lesson = getLessonBySlug(slug)
  const exercises = getExercisesByLesson(slug)

  if (!lesson) {
    return (
      <section className="container" style={{ padding: '48px 24px' }}>
        <h1>Leçon introuvable</h1>
        <Link to="/exercices">← Retour aux exercices</Link>
      </section>
    )
  }

  return (
    <section className="container" style={{ padding: '48px 24px 80px', maxWidth: 760 }}>
      <Link to="/exercices" style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem' }}>
        ← Toutes les leçons
      </Link>

      <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginTop: 16, marginBottom: 8 }}>
        <h1 style={{ margin: 0 }}>{lesson.title}</h1>
      </div>
      <Link
        to={`/lecons/${lesson.slug}`}
        style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem' }}
      >
        revoir la leçon →
      </Link>

      {exercises.length === 0 ? (
        <p style={{ color: 'var(--ink-soft)', marginTop: 24 }}>
          Aucun exercice pour cette leçon pour le moment.
        </p>
      ) : (
        <div style={{ marginTop: 32 }}>
          {exercises.map((exercise, i) => (
            <ExerciseCard key={exercise.id} exercise={exercise} index={i} />
          ))}
        </div>
      )}
    </section>
  )
}
