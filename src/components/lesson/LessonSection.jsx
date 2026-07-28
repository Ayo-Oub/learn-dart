import CodeBlock from './CodeBlock.jsx'
import { renderLessonContent } from '../../utils/renderLessonContent.jsx'

export default function LessonSection({ section }) {
  return (
    <div style={{ marginBottom: 36 }}>
      <h2 style={{ fontSize: '1.6rem' }}>{section.heading}</h2>
      {renderLessonContent(section.content)}
      {section.code && <CodeBlock code={section.code} />}
    </div>
  )
}
