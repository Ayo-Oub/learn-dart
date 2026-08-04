import { useState } from 'react'
import './CodeBlock.css'

export default function CodeBlock({ code, filename }) {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch (error) {
      console.error('Copie impossible :', error)
    }
  }

  return (
    <div className="code-block">
      <div className="code-block__header">
        {filename ? (
          <span className="code-block__filename">{filename}</span>
        ) : (
          <span />
        )}
        <button
          type="button"
          className="code-block__copy"
          onClick={handleCopy}
          aria-label="Copier le code"
        >
          {copied ? '✓ Copié' : '⧉ Copier'}
        </button>
      </div>
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  )
}
