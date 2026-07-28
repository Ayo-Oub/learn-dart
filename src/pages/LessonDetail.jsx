import { useParams, Link } from 'react-router-dom'
import { getLessonBySlug } from '../data/lessons/index.js'
import CodeBlock from '../components/lesson/CodeBlock.jsx'

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

  return (
    <section className="container notebook-page" style={{ padding: '48px 24px 80px' }}>
      <Link to="/lecons" style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem' }}>
        ← Toutes les leçons
      </Link>
      <h1 style={{ marginTop: 16 }}>{lesson.title}</h1>
      <p style={{ color: 'var(--ink-soft)', maxWidth: '60ch' }}>{lesson.summary}</p>

      <CodeBlock code={lesson.codeExample} filename={`${lesson.slug}.dart`} />
    </section>
  )
}
