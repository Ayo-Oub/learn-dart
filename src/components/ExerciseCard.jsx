const difficultyClass = {
  "سهل": "diff-easy",
  "متوسط": "diff-medium",
  "صعب نسبياً": "diff-hard",
  "صعب": "diff-hard",
};

export default function ExerciseCard({ number, title, difficulty, context, questions }) {
  return (
    <div className="exercise-card">
      <div className="exercise-card-header">
        <span className="exercise-number">{number}</span>
        <h4 className="exercise-title">{title}</h4>
        <span className={`exercise-difficulty ${difficultyClass[difficulty] || ""}`}>
          {difficulty}
        </span>
      </div>

      {context && <p className="exercise-context">{context}</p>}

      {questions && questions.length > 0 && (
        <ol className="exercise-questions">
          {questions.map((q, i) => (
            <li key={i}>{q}</li>
          ))}
        </ol>
      )}
    </div>
  );
}