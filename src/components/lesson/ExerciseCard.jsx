import { useState } from 'react'
import CodeBlock from './CodeBlock.jsx'
import './ExerciseCard.css'

const difficultyLabel = {
  facile: { text: 'Facile', color: 'var(--success)' },
  moyen: { text: 'Moyen', color: 'var(--accent-coral)' },
  difficile: { text: 'Difficile', color: '#B33F3F' },
}

export default function ExerciseCard({ exercise, index }) {
  const [showSolution, setShowSolution] = useState(false)
  const diff = difficultyLabel[exercise.difficulty] ?? difficultyLabel.facile

  return (
    <div className="exercise-card" id={exercise.id}>
      <div className="exercise-card__header">
        <span className="exercise-card__number">Exercice {index + 1}</span>
        <span className="exercise-card__difficulty" style={{ color: diff.color }}>
          {diff.text}
        </span>
      </div>

      <h3 className="exercise-card__title">{exercise.title}</h3>
      <p className="exercise-card__statement">{exercise.statement}</p>

      {exercise.starterCode && <CodeBlock code={exercise.starterCode} filename="à compléter" />}

      {exercise.hint && (
        <details className="exercise-card__hint">
          <summary>Un indice ?</summary>
          <p>{exercise.hint}</p>
        </details>
      )}

      <button
        type="button"
        className="exercise-card__toggle"
        onClick={() => setShowSolution((v) => !v)}
        aria-expanded={showSolution}
      >
        {showSolution ? 'Masquer la correction' : 'Voir la correction'}
      </button>

      {showSolution && <CodeBlock code={exercise.solutionCode} filename="correction" />}
    </div>
  )
}
