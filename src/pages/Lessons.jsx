import lessons from '../data/lessons/index.js'
import LessonCard from '../components/lesson/LessonCard.jsx'

export default function Lessons() {
  return (
    <section className="container" style={{ padding: '48px 24px 80px' }}>
      <h1>Les leçons</h1>
      <p style={{ color: 'var(--ink-soft)', maxWidth: '60ch', marginBottom: 32 }}>
        Chaque leçon se lit en quelques minutes et se termine par un exemple à tester.
      </p>
      <div style={{ display: 'grid', gap: 16 }}>
        {lessons.map((lesson) => (
          <LessonCard key={lesson.id} lesson={lesson} />
        ))}
      </div>
    </section>
  )
}
