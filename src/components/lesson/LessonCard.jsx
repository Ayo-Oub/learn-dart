import { Link } from 'react-router-dom'
import './LessonCard.css'

export default function LessonCard({ lesson }) {
  return (
    <Link to={`/lecons/${lesson.slug}`} className="lesson-card">
      <span className="lesson-card__number">{String(lesson.id).padStart(2, '0')}</span>
      <div>
        <h3 className="lesson-card__title">{lesson.title}</h3>
        <p className="lesson-card__summary">{lesson.summary}</p>
      </div>
    </Link>
  )
}
