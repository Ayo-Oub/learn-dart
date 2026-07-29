import { Link } from 'react-router-dom'
import lessons from '../data/lessons/index.js'
import { getExercisesByLesson } from '../data/exercises/index.js'
import './Exercises.css'

export default function Exercises() {
  // Une entrée par leçon qui a au moins un exercice
  const groups = lessons
    .map((lesson) => ({
      lesson,
      count: getExercisesByLesson(lesson.slug).length,
    }))
    .filter((group) => group.count > 0)

  return (
    <section className="container" style={{ padding: '48px 24px 80px', maxWidth: 760 }}>
      <h1>Exercices</h1>
      <p style={{ color: 'var(--ink-soft)', maxWidth: '60ch', marginBottom: 32 }}>
        Choisis une leçon pour voir ses exercices.
      </p>

      {groups.length === 0 && (
        <p style={{ color: 'var(--ink-soft)' }}>Aucun exercice disponible pour le moment.</p>
      )}

      <div style={{ display: 'grid', gap: 16 }}>
        {groups.map(({ lesson, count }) => (
          <Link key={lesson.slug} to={`/exercices/${lesson.slug}`} className="exercise-lesson-card">
            <span className="exercise-lesson-card__number">
              {String(lesson.id).padStart(2, '0')}
            </span>
            <div>
              <h3 className="exercise-lesson-card__title">{lesson.title}</h3>
              <p className="exercise-lesson-card__count">
                {count} exercice{count > 1 ? 's' : ''}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
