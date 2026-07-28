// Convertit un texte simple (avec **gras**, listes -, listes 1.) en blocs JSX.
// Volontairement léger : pas de dépendance markdown, juste ce dont nos leçons ont besoin.
import React from 'react'

function renderInline(text) {
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g).filter(Boolean)
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code key={i} style={{ background: 'var(--paper-alt)', padding: '1px 5px', borderRadius: 4 }}>
          {part.slice(1, -1)}
        </code>
      )
    }
    return part
  })
}

export function renderLessonContent(content) {
  const blocks = content.trim().split(/\n\n+/)

  return blocks.map((block, i) => {
    const lines = block.split('\n').filter(Boolean)
    const isBulletList = lines.every((l) => l.trim().startsWith('- '))
    const isNumberedList = lines.every((l) => /^\d+\.\s/.test(l.trim()))

    if (isBulletList) {
      return (
        <ul key={i} style={{ margin: '0 0 1em', paddingLeft: '1.3em' }}>
          {lines.map((l, j) => (
            <li key={j}>{renderInline(l.trim().replace(/^- /, ''))}</li>
          ))}
        </ul>
      )
    }

    if (isNumberedList) {
      return (
        <ol key={i} style={{ margin: '0 0 1em', paddingLeft: '1.3em' }}>
          {lines.map((l, j) => (
            <li key={j}>{renderInline(l.trim().replace(/^\d+\.\s/, ''))}</li>
          ))}
        </ol>
      )
    }

    return <p key={i}>{renderInline(block)}</p>
  })
}
